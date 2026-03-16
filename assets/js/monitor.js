/* ═══════════════════════════════════════════════════════════════
   DETOXY HIJAMA — Self-Monitoring & Self-Healing Engine v1.0
   Phases 2, 3, 6, 8 of the DevOps upgrade

   Architecture:
   • DHMonitor  — error capture, buffering, batched reporting
   • DHFetch    — resilient fetch with retry + fallback
   • DHHealer   — self-healing: images, API, renders
   • DHPerf     — performance measurement + slow-page alerting

   All errors are batched and sent to Google Apps Script endpoint.
   Zero dependencies. Works offline (queues until reconnected).
   Admin panel excluded from reporting (too noisy).
═══════════════════════════════════════════════════════════════ */

(function (global) {
  'use strict';

  // ── Config ──────────────────────────────────────────────────
  var CFG = {
    // Populated from shared.js at runtime
    get apiUrl() {
      try { return localStorage.getItem('detoxy_sheets_url') || ''; } catch (e) { return ''; }
    },
    site:          'https://detoxyhijama.github.io',
    batchSize:     10,        // Max errors per flush
    flushInterval: 15000,     // Flush every 15s
    maxQueue:      50,        // Drop oldest if queue exceeds this
    slowPageMs:    3000,       // Report if LCP > 3s
    slowAssetMs:   2000,       // Report if single asset > 2s
    // Don't report noise from bots, crawlers, or offline SW synthetic loads
    ignorePatterns: [
      /chrome-extension/i,
      /moz-extension/i,
      /safari-extension/i,
      /localhost/i,
      /^Script error\.?$/i       // Cross-origin script errors (no useful info)
    ]
  };

  // ── Phase 1 Failure Point Registry ──────────────────────────
  // Documents every known failure point for self-healing
  var FAILURE_POINTS = {
    GAS_API:       'api',
    PRODUCT_FETCH: 'api',
    IMAGE_LOAD:    'asset',
    FONT_LOAD:     'asset',
    JS_RUNTIME:    'js',
    JS_UNHANDLED:  'js',
    RENDER_FAIL:   'render',
    PERF_LCP:      'perf',
    PERF_FCP:      'perf',
    PERF_ASSET:    'perf',
    BROKEN_LINK:   'link',
    SW_ERROR:      'sw'
  };

  // ── Error Buffer ─────────────────────────────────────────────
  var _queue       = [];
  var _flushTimer  = null;
  var _sessionId   = _genId();
  var _pageUrl     = global.location ? global.location.href : '';
  var _isAdmin     = _pageUrl.includes('/admin');
  var _seen        = {};   // fingerprint → count (dedup within session)
  var _hourBucket  = {};   // fingerprint → timestamps (rate limit per hour)

  function _genId() {
    return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  }

  function _shouldIgnore(msg) {
    if (!msg) return true;
    return CFG.ignorePatterns.some(function (p) { return p.test(msg); });
  }

  // ── Fingerprint: stable key for deduplication ────────────────
  function _fingerprint(type, message) {
    // Normalize: strip line numbers, memory addresses, variable values
    var norm = String(message)
      .replace(/:\d+:\d+/g, '')          // Remove line:col refs
      .replace(/0x[0-9a-f]+/gi, '0xXX')  // Hex addresses
      .replace(/\d{4,}/g, 'N')           // Long numbers (timestamps etc.)
      .slice(0, 100);
    return type + '|' + norm;
  }

  // ── Core: enqueue an error ───────────────────────────────────
  function _enqueue(type, category, message, meta) {
    if (_isAdmin) return;                      // Silence admin panel
    if (_shouldIgnore(message)) return;

    var fp  = _fingerprint(type, message);
    var now = Date.now();

    // ── Deduplication: max 3 identical errors per session ────────
    var seenCount = _seen[fp] || 0;
    if (seenCount >= 3) return;               // Already logged enough
    _seen[fp] = seenCount + 1;

    // ── Rate limit: max 20 errors/hour per fingerprint ───────────
    _hourBucket[fp] = (_hourBucket[fp] || []).filter(function(t) { return now - t < 3600000; });
    if (_hourBucket[fp].length >= 20) return; // Rate limit exceeded
    _hourBucket[fp].push(now);

    var entry = {
      ts:       new Date(now).toISOString(),
      session:  _sessionId,
      page:     _pageUrl,
      type:     type,
      category: category || FAILURE_POINTS[type] || 'unknown',
      message:  String(message || '').slice(0, 500),
      ua:       (navigator.userAgent || '').slice(0, 200),
      meta:     meta ? JSON.stringify(meta).slice(0, 300) : '',
      count:    seenCount + 1   // Include repeat count for aggregation
    };

    // Persist to sessionStorage as backup (survives page reload)
    try {
      var stored = JSON.parse(sessionStorage.getItem('dh_err_q') || '[]');
      stored.push(entry);
      if (stored.length > CFG.maxQueue) stored = stored.slice(-CFG.maxQueue);
      sessionStorage.setItem('dh_err_q', JSON.stringify(stored));
    } catch (e) { /* storage full — ignore */ }

    _queue.push(entry);
    if (_queue.length > CFG.maxQueue) _queue.shift(); // Drop oldest

    // Schedule flush
    if (!_flushTimer) {
      _flushTimer = setTimeout(_flush, CFG.flushInterval);
    }
    // Immediate flush on critical errors
    if (category === 'js' || _queue.length >= CFG.batchSize) {
      clearTimeout(_flushTimer);
      _flushTimer = null;
      setTimeout(_flush, 200);  // slight delay to batch rapid errors
    }
  }

  // ── Flush: POST batch to GAS ─────────────────────────────────
  function _flush() {
    _flushTimer = null;
    if (!_queue.length) return;

    var url = CFG.apiUrl;
    if (!url) {
      // No endpoint — keep errors in sessionStorage for later
      return;
    }

    var batch = _queue.splice(0, CFG.batchSize);

    // Also drain sessionStorage queue
    try {
      var stored = JSON.parse(sessionStorage.getItem('dh_err_q') || '[]');
      // Remove the entries we just sent
      sessionStorage.setItem('dh_err_q', JSON.stringify(
        stored.filter(function (e) {
          return !batch.some(function (b) { return b.ts === e.ts && b.session === e.session; });
        })
      ));
    } catch (e) { /* ignore */ }

    // Use sendBeacon for reliability on page unload, fetch otherwise
    var payload = JSON.stringify({ action: 'logErrors', errors: batch });

    if (navigator.sendBeacon) {
      var blob = new Blob([payload], { type: 'text/plain' });
      navigator.sendBeacon(url + '?action=logErrors', blob);
    } else {
      fetch(url + '?action=logErrors', {
        method:  'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body:    payload,
        keepalive: true,
        redirect: 'follow'
      }).catch(function () {
        // Re-queue on network failure
        batch.forEach(function (e) { _queue.unshift(e); });
      });
    }
  }

  // Flush on page unload
  global.addEventListener('pagehide', _flush);
  global.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') _flush();
  });


  /* ════════════════════════════════════════════════════════════
     PHASE 2 — GLOBAL ERROR DETECTION
  ════════════════════════════════════════════════════════════ */

  // ── Runtime JS errors ────────────────────────────────────────
  global.addEventListener('error', function (e) {
    if (!e) return;
    // Image/asset 404
    if (e.target && (e.target.tagName === 'IMG' || e.target.tagName === 'LINK' || e.target.tagName === 'SCRIPT')) {
      var src = e.target.src || e.target.href || '';
      // Apply self-healing before logging
      DHHealer.fixBrokenAsset(e.target);
      _enqueue('IMAGE_LOAD', 'asset', 'Asset failed: ' + src, {
        tag: e.target.tagName,
        src: src
      });
      return;
    }
    // JS error
    _enqueue('JS_RUNTIME', 'js', e.message, {
      file:   e.filename,
      line:   e.lineno,
      col:    e.colno
    });
  }, true);  // Capture phase catches all errors including asset failures

  // ── Unhandled promise rejections ─────────────────────────────
  global.addEventListener('unhandledrejection', function (e) {
    var msg = e.reason
      ? (e.reason.message || String(e.reason))
      : 'Unhandled promise rejection';
    _enqueue('JS_UNHANDLED', 'js', msg, {
      stack: e.reason && e.reason.stack ? String(e.reason.stack).slice(0, 200) : ''
    });
  });

  // ── Console error override (catches framework-level errors) ──
  var _origConsoleError = console.error;
  console.error = function () {
    var args = Array.prototype.slice.call(arguments);
    var msg  = args.map(function (a) {
      return typeof a === 'object' ? JSON.stringify(a) : String(a);
    }).join(' ');
    if (!_shouldIgnore(msg)) {
      _enqueue('JS_RUNTIME', 'js', 'console.error: ' + msg.slice(0, 300));
    }
    _origConsoleError.apply(console, arguments);
  };


  /* ════════════════════════════════════════════════════════════
     PHASE 3 — RESILIENT FETCH (API FAILURE RECOVERY)
  ════════════════════════════════════════════════════════════ */

  var DHFetch = (function () {

    // Per-action circuit breakers — a failed admin call won't block getProducts
    var _circuits       = {};  // key: url action → {open, failCount, timer}
    var _circuitResetMs = 60000;

    function _getCircuit(url) {
      // Extract action param as circuit key; fall back to domain
      var m = url.match(/[?&]action=([^&]+)/);
      var key = m ? m[1] : url.split('/')[2] || 'default';
      if (!_circuits[key]) _circuits[key] = { open: false, failCount: 0, timer: null };
      return _circuits[key];
    }

    function _resetCircuit(key) {
      if (_circuits[key]) { _circuits[key].open = false; _circuits[key].failCount = 0; }
    }

    /**
     * Resilient fetch with:
     *   - Timeout (default 12s)
     *   - Automatic retries with exponential backoff
     *   - Per-action circuit breaker (a failing admin call won't block product fetches)
     *   - BOM stripping + GAS HTML-redirect detection
     *   - Automatic error reporting
     */
    function request(url, options, retries) {
      retries = (retries === undefined) ? 2 : retries;
      options = options || {};
      var timeout = options.timeout || 12000;
      var circuit = _getCircuit(url);

      if (circuit.open) {
        _enqueue('GAS_API', 'api', 'Circuit open — skipping request to: ' + url.slice(0, 80));
        return Promise.reject(new Error('circuit_open'));
      }

      var ctrl    = typeof AbortController !== 'undefined' ? new AbortController() : null;
      var tid     = ctrl ? setTimeout(function () { ctrl.abort(); }, timeout) : null;
      var fetchOpts = Object.assign({ redirect: 'follow' }, options);
      if (ctrl) fetchOpts.signal = ctrl.signal;

      var start = Date.now();

      return fetch(url, fetchOpts)
        .then(function (resp) {
          clearTimeout(tid);
          var elapsed = Date.now() - start;
          if (!resp.ok) throw new Error('HTTP ' + resp.status);
          return resp.text().then(function (text) {
            // Strip UTF-8 BOM that GAS sometimes prepends
            var clean = text.replace(/^﻿/, '').trim();
            // GAS CORS redirect returns HTML instead of JSON
            if (clean.charAt(0) === '<') {
              // GAS returned HTML — wrong URL or not deployed as Web App
              // DON'T open circuit breaker for this — it's a config issue not a server failure
              circuit.failCount = 0; // reset so circuit stays open for real failures
              throw new Error('GAS returned HTML — check deployment URL and access settings');
            }
            var parsed;
            try { parsed = JSON.parse(clean); } catch (e) { throw new Error('JSON parse failed: ' + clean.slice(0,50)); }
            if (parsed && parsed.error) throw new Error('API error: ' + parsed.error);

            // Success — reset this action's circuit
            circuit.failCount = 0;
            circuit.open = false;

            // Log slow API responses
            if (elapsed > 5000) {
              _enqueue('GAS_API', 'perf', 'Slow API: ' + elapsed + 'ms', { url: url.slice(0, 80) });
            }
            return parsed;
          });
        })
        .catch(function (err) {
          clearTimeout(tid);
          if (err.name === 'AbortError') {
            err = new Error('Request timeout after ' + timeout + 'ms');
          }

          circuit.failCount++;
          if (circuit.failCount >= 3 && !circuit.open) {
            circuit.open = true;
            var _circuitKey = (url.match(/[?&]action=([^&]+)/) || [,'default'])[1];
            _enqueue('GAS_API', 'api', 'Circuit OPEN for action: ' + _circuitKey + ' after ' + circuit.failCount + ' failures');
            circuit.timer = setTimeout(function () {
              _resetCircuit(_circuitKey);
            }, _circuitResetMs);
          }

          _enqueue('GAS_API', 'api', err.message, { url: url.slice(0, 80), retries: retries });

          if (retries > 0) {
            var delay = Math.min(1000 * Math.pow(2, 2 - retries), 8000); // 1s, 2s, 4s
            return new Promise(function (resolve) { setTimeout(resolve, delay); })
              .then(function () { return request(url, options, retries - 1); });
          }
          return Promise.reject(err);
        });
    }

    return { request: request, resetCircuit: _resetCircuit, getCircuits: function(){ return _circuits; } };
  }());


  /* ════════════════════════════════════════════════════════════
     PHASE 8 — SELF-HEALING BEHAVIOR
  ════════════════════════════════════════════════════════════ */

  var DHHealer = (function () {

    var PLACEHOLDER = '/assets/images/placeholder.svg';
    var _healedImages = {};  // Prevent infinite onerror loops

    // ── Fix broken images ────────────────────────────────────
    function fixBrokenAsset(el) {
      if (!el || el.tagName !== 'IMG') return;
      var src = el.src || el.getAttribute('src') || '';
      if (_healedImages[src] || src === PLACEHOLDER) return;
      _healedImages[src] = true;
      el.src = PLACEHOLDER;
      el.classList.add('img-healed');
    }

    // ── Scan all images and pre-heal ─────────────────────────
    function scanImages() {
      document.querySelectorAll('img').forEach(function (img) {
        if (img.complete && img.naturalWidth === 0 && img.src) {
          fixBrokenAsset(img);
          _enqueue('IMAGE_LOAD', 'asset', 'Broken img on scan: ' + img.src.slice(0, 80));
        }
        // Ensure onerror fallback is always set
        if (!img.getAttribute('data-healer')) {
          img.setAttribute('data-healer', '1');
          img.addEventListener('error', function () { fixBrokenAsset(img); });
        }
      });
    }

    // ── Fallback render: show skeleton if a section is empty ─
    function fixEmptySection(sectionId, fallbackHtml) {
      var el = document.getElementById(sectionId);
      if (!el || el.children.length > 0) return;
      el.innerHTML = fallbackHtml ||
        '<div class="empty-state" style="padding:40px;text-align:center;color:var(--muted)">Content unavailable — please refresh</div>';
    }

    // ── Recover from localStorage quota ──────────────────────
    function safeLocalSet(key, value) {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (e) {
        // Quota exceeded — prune old cart items
        try {
          ['dh_rv', 'dh_nl_subs', 'dh_interest'].forEach(function (k) {
            localStorage.removeItem(k);
          });
          localStorage.setItem(key, value);
          return true;
        } catch (e2) {
          _enqueue('JS_RUNTIME', 'js', 'localStorage quota exceeded');
          return false;
        }
      }
    }

    // ── Recover missing header/footer mounts ─────────────────
    function fixMissingMounts() {
      var headerMount = document.getElementById('header-mount');
      var footerMount = document.getElementById('footer-mount');
      if (headerMount && headerMount.childElementCount === 0) {
        _enqueue('RENDER_FAIL', 'render', 'header-mount empty — re-rendering');
        try {
          if (typeof renderHeader === 'function') {
            var frag = document.createRange().createContextualFragment(renderHeader(''));
            headerMount.replaceWith(frag);
          }
        } catch (e) { /* silent */ }
      }
      if (footerMount && footerMount.tagName === 'DIV') {
        _enqueue('RENDER_FAIL', 'render', 'footer-mount not replaced — re-rendering');
        try {
          if (typeof renderFooter === 'function') {
            footerMount.outerHTML = renderFooter();
          }
        } catch (e) { /* silent */ }
      }
    }

    return { fixBrokenAsset: fixBrokenAsset, scanImages: scanImages, fixEmptySection: fixEmptySection, safeLocalSet: safeLocalSet, fixMissingMounts: fixMissingMounts };
  }());


  /* ════════════════════════════════════════════════════════════
     PHASE 6 — PERFORMANCE MONITORING
  ════════════════════════════════════════════════════════════ */

  var DHPerf = (function () {

    function _observe() {
      if (!window.PerformanceObserver) return;

      // LCP
      try {
        new PerformanceObserver(function (list) {
          var entries = list.getEntries();
          if (!entries.length) return;
          var lcp = entries[entries.length - 1].startTime;
          if (lcp > CFG.slowPageMs) {
            _enqueue('PERF_LCP', 'perf', 'Slow LCP: ' + Math.round(lcp) + 'ms', {
              threshold: CFG.slowPageMs
            });
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) { /* unsupported */ }

      // FCP
      try {
        new PerformanceObserver(function (list) {
          list.getEntries().forEach(function (entry) {
            if (entry.name === 'first-contentful-paint' && entry.startTime > 2000) {
              _enqueue('PERF_FCP', 'perf', 'Slow FCP: ' + Math.round(entry.startTime) + 'ms');
            }
          });
        }).observe({ entryTypes: ['paint'] });
      } catch (e) { /* unsupported */ }

      // Slow resources
      try {
        new PerformanceObserver(function (list) {
          list.getEntries().forEach(function (entry) {
            if (entry.duration > CFG.slowAssetMs) {
              _enqueue('PERF_ASSET', 'perf',
                'Slow asset: ' + (entry.name || '').split('/').pop() + ' — ' + Math.round(entry.duration) + 'ms',
                { url: (entry.name || '').slice(0, 80) }
              );
            }
          });
        }).observe({ entryTypes: ['resource'] });
      } catch (e) { /* unsupported */ }
    }

    // Navigation timing (page load)
    function _checkNavTiming() {
      if (!performance || !performance.timing) return;
      global.addEventListener('load', function () {
        setTimeout(function () {
          var t      = performance.timing;
          var total  = t.loadEventEnd - t.navigationStart;
          var ttfb   = t.responseStart - t.navigationStart;
          var domInt = t.domInteractive - t.navigationStart;

          if (total > 5000) {
            _enqueue('PERF_LCP', 'perf', 'Slow page load: ' + total + 'ms', {
              ttfb: ttfb, domInteractive: domInt
            });
          }
        }, 0);
      });
    }

    function init() { _observe(); _checkNavTiming(); }
    return { init: init };
  }());


  /* ════════════════════════════════════════════════════════════
     BOOT — Initialize all subsystems after DOM ready
  ════════════════════════════════════════════════════════════ */

  function _boot() {
    DHPerf.init();

    // Heal broken images after content renders
    setTimeout(DHHealer.scanImages, 1500);

    // Check for empty mounts after shared.js has run
    setTimeout(DHHealer.fixMissingMounts, 2500);

    // ── Listen for SW error reports ──────────────────────────
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', function(e) {
        if (!e.data || e.data.type !== 'DH_SW_ERROR') return;
        _enqueue(e.data.errType || 'SW_ERROR', 'sw', e.data.message, e.data.meta);
      });
    }

    // Drain any queued errors from previous page (e.g. if offline)
    try {
      var stored = JSON.parse(sessionStorage.getItem('dh_err_q') || '[]');
      if (stored.length && CFG.apiUrl) {
        stored.forEach(function (e) { _queue.push(e); });
        sessionStorage.removeItem('dh_err_q');
        setTimeout(_flush, 3000);
      }
    } catch (e) { /* ignore */ }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _boot);
  } else {
    setTimeout(_boot, 0);
  }

  // ── Public API ───────────────────────────────────────────────
  global.DHMonitor = {
    log:     _enqueue,
    flush:   _flush,
    healer:  DHHealer,
    fetch:   DHFetch,
    perf:    DHPerf,
    // Convenience wrappers
    error:   function (msg, meta) { _enqueue('JS_RUNTIME', 'js', msg, meta); },
    apiErr:  function (msg, meta) { _enqueue('GAS_API', 'api', msg, meta); },
    assetErr:function (msg, meta) { _enqueue('IMAGE_LOAD', 'asset', msg, meta); }
  };

}(window));
