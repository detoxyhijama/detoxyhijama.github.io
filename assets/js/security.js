/* ═══════════════════════════════════════════════════════════════════
   DETOXY HIJAMA — Custom Security Engine v1.0
   ═══════════════════════════════════════════════════════════════════
   100% self-hosted. Zero third-party dependencies.
   Replaces: Cloudflare WAF · GitHub Actions · PagerDuty · Slack

   MODULES:
   1. DHFirewall   — session blocking, IP blacklist, request filtering
   2. DHBotDetect  — bot / scraper detection (behaviour fingerprinting)
   3. DHBrute      — brute force & credential stuffing protection
   4. DHXSSGuard   — XSS / injection probe detection in URLs + inputs
   5. DHSpamGuard  — rapid click / form spam detection
   6. DHAdminGuard — admin panel intrusion detection
   7. DHReporter   — batched reporting to Google Sheets via GAS
   8. DHWall       — block page renderer (shown to attackers)

   INSTALL:
   Add to every HTML page BEFORE </body>:
   <script src="/assets/js/security.js" defer></script>

   On admin/index.html, also add data-page="admin":
   <script src="/assets/js/security.js" data-page="admin" defer></script>
═══════════════════════════════════════════════════════════════════ */

(function (global) {
  'use strict';

  // ─────────────────────────────────────────────────────────────
  // CONFIG
  // ─────────────────────────────────────────────────────────────
  var CFG = {
    // All thresholds are tunable here
    brute: {
      maxLoginAttempts:   5,    // Block after N failed logins
      windowMs:           300000, // within 5 minutes
      lockoutMs:          1800000  // locked for 30 minutes
    },
    bot: {
      minPageTimeMs:      800,   // Real humans take >800ms to interact
      maxRequestsPerMin:  120,   // >120 req/min = bot
      honeypotFieldId:    'dh-hp-field' // Hidden field bots fill
    },
    spam: {
      minFormFillMs:      2000,  // Form filled in <2s = bot
      maxClicksPerSec:    10,    // >10 clicks/sec = spam
      maxFormsPerMin:     5      // >5 form submits/min = spam
    },
    xss: {
      // Patterns to detect in URL params and input fields
      patterns: [
        /<script[\s>]/i,
        /javascript\s*:/i,
        /on\w+\s*=/i,           // onerror=, onload=, etc.
        /eval\s*\(/i,
        /document\s*\.\s*cookie/i,
        /document\s*\.\s*write/i,
        /window\s*\.\s*location/i,
        /<iframe/i,
        /<img[^>]+src\s*=/i,
        /union\s+select/i,      // SQL injection
        /'\s*or\s*'1'\s*=\s*'1/i,
        /drop\s+table/i,
        /insert\s+into/i,
        /base64_decode/i,
        /\.\.\/\.\.\//          // Path traversal
      ]
    },
    admin: {
      maxFailedLogins:  3,       // Block after 3 wrong admin passwords
      allowedPaths:     ['/admin/', '/admin/index.html'],
      alertOnAccess:    true     // Email admin on every admin login
    },
    report: {
      batchSize:        5,
      flushIntervalMs:  10000,   // Flush every 10s
      action:           'logSecurityEvent'
    }
  };

  // ─────────────────────────────────────────────────────────────
  // UTILITIES
  // ─────────────────────────────────────────────────────────────

  var _currentPage = (function() {
    var s = document.querySelector('script[data-page]');
    return s ? s.getAttribute('data-page') : '';
  }());

  var _isAdmin = (_currentPage === 'admin' || location.pathname.indexOf('/admin/') > -1);

  function _getApiUrl() {
    try {
      return window.DH_API_URL ||
             (typeof HARDCODED_URL !== 'undefined' && HARDCODED_URL ? HARDCODED_URL : '') ||
             localStorage.getItem('detoxy_sheets_url') || '';
    } catch (e) { return ''; }
  }

  function _sessionId() {
    try {
      var k = 'dh_sec_sid';
      var v = sessionStorage.getItem(k);
      if (!v) { v = Math.random().toString(36).slice(2) + Date.now().toString(36); sessionStorage.setItem(k, v); }
      return v;
    } catch (e) { return 'unknown'; }
  }

  function _getStore(key, def) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch (e) { return def; }
  }

  function _setStore(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  function _now() { return Date.now(); }

  function _pageUrl() {
    return location.href.slice(0, 200);
  }

  function _ua() {
    return navigator.userAgent.slice(0, 150);
  }

  // ─────────────────────────────────────────────────────────────
  // MODULE 8: DHWall — Block page renderer
  // (defined first so other modules can call it)
  // ─────────────────────────────────────────────────────────────
  var DHWall = {
    _shown: false,

    show: function(reason, code) {
      if (this._shown) return;
      this._shown = true;

      // Don't block the admin panel itself from accessing the site
      if (_isAdmin) return;

      document.body.innerHTML = '';
      document.body.style.cssText = 'margin:0;padding:0;background:#0d2625;font-family:sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;';

      var codes = {
        BOT:       { title: 'Automated Access Blocked',   icon: '🤖', color: '#f59e0b', msg: 'Our system has detected automated browsing activity from this session.' },
        BRUTE:     { title: 'Too Many Failed Attempts',   icon: '🔐', color: '#ef4444', msg: 'Too many failed login attempts. Please wait 30 minutes before trying again.' },
        XSS:       { title: 'Malicious Request Blocked',  icon: '🛡️', color: '#ef4444', msg: 'A potentially harmful request was detected and blocked.' },
        SPAM:      { title: 'Spam Activity Detected',     icon: '⚠️', color: '#f59e0b', msg: 'Unusual activity detected from this session. Please slow down.' },
        BLACKLIST: { title: 'Access Restricted',          icon: '🚫', color: '#ef4444', msg: 'This session has been restricted due to suspicious activity.' },
        ADMIN:     { title: 'Unauthorised Access',        icon: '🔒', color: '#ef4444', msg: 'You are not authorised to access this area.' }
      };

      var c = codes[code] || codes['BLACKLIST'];

      var html = '<div style="max-width:480px;text-align:center;padding:40px 24px">'
        + '<div style="font-size:4rem;margin-bottom:20px">' + c.icon + '</div>'
        + '<h1 style="color:' + c.color + ';font-size:1.4rem;margin-bottom:12px;font-weight:700">' + c.title + '</h1>'
        + '<p style="color:rgba(255,255,255,.7);font-size:.9rem;line-height:1.7;margin-bottom:28px">' + c.msg + '</p>'
        + '<div style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:14px;margin-bottom:28px">'
        + '<div style="font-size:.72rem;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">Reference code</div>'
        + '<div style="font-family:monospace;color:rgba(255,255,255,.6);font-size:.82rem">' + code + '-' + _sessionId().slice(0,8).toUpperCase() + '</div>'
        + '</div>'
        + '<a href="/" style="display:inline-block;background:#2aab97;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:.88rem;font-weight:600;margin-right:10px">Return to Home</a>'
        + '<a href="https://wa.me/919566596077" target="_blank" style="display:inline-block;background:rgba(255,255,255,.08);color:rgba(255,255,255,.7);padding:12px 28px;border-radius:8px;text-decoration:none;font-size:.88rem">Contact Support</a>'
        + '<p style="margin-top:28px;font-size:.72rem;color:rgba(255,255,255,.3)">Detoxy Hijama Security System · Session locked</p>'
        + '</div>';

      document.body.innerHTML = html;
      document.title = 'Access Restricted — Detoxy Hijama';
    }
  };

  // ─────────────────────────────────────────────────────────────
  // MODULE 7: DHReporter — send events to GAS
  // ─────────────────────────────────────────────────────────────
  var DHReporter = (function() {
    var _queue = [];
    var _timer = null;

    function _enqueue(event) {
      event.ts      = new Date().toISOString();
      event.session = _sessionId();
      event.page    = _pageUrl();
      event.ua      = _ua();
      _queue.push(event);
      if (_queue.length >= CFG.report.batchSize) _flush();
    }

    function _flush() {
      if (!_queue.length) return;
      var url = _getApiUrl();
      if (!url) return;
      var batch = _queue.splice(0, CFG.report.batchSize);
      var payload = JSON.stringify({ action: CFG.report.action, events: batch });
      // Use sendBeacon for guaranteed delivery even on page unload
      if (navigator.sendBeacon) {
        var blob = new Blob([payload], { type: 'text/plain;charset=utf-8' });
        navigator.sendBeacon(url + '?action=' + CFG.report.action, blob);
      } else {
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: payload,
          keepalive: true
        }).catch(function() {});
      }
    }

    function _startTimer() {
      if (_timer) return;
      _timer = setInterval(_flush, CFG.report.flushIntervalMs);
    }

    // Flush on page hide (tab close, navigation)
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') _flush();
    });
    window.addEventListener('beforeunload', _flush);

    return {
      report: function(type, severity, detail, extra) {
        _enqueue({
          type:     type,
          severity: severity,
          detail:   String(detail || '').slice(0, 300),
          extra:    extra || {}
        });
        _startTimer();
      },
      flush: _flush
    };
  }());

  // ─────────────────────────────────────────────────────────────
  // MODULE 1: DHFirewall — session blacklist
  // ─────────────────────────────────────────────────────────────
  var DHFirewall = (function() {
    var BL_KEY    = 'dh_sec_bl';   // Blacklist storage key
    var BL_EXPIRY = 'dh_sec_bl_ex';

    function _isBlacklisted() {
      try {
        var expiry = parseInt(localStorage.getItem(BL_EXPIRY) || '0');
        if (expiry && _now() > expiry) {
          // Blacklist expired — clear it
          localStorage.removeItem(BL_KEY);
          localStorage.removeItem(BL_EXPIRY);
          return false;
        }
        return localStorage.getItem(BL_KEY) === '1';
      } catch (e) { return false; }
    }

    function _blacklist(durationMs, reason, code) {
      try {
        localStorage.setItem(BL_KEY, '1');
        localStorage.setItem(BL_EXPIRY, String(_now() + (durationMs || 1800000)));
      } catch (e) {}
      DHReporter.report('BLACKLIST', 'critical', reason, { code: code });
      DHWall.show(reason, code || 'BLACKLIST');
    }

    function _checkOnLoad() {
      if (_isBlacklisted()) {
        DHWall.show('Session blacklisted', 'BLACKLIST');
        return true;
      }
      return false;
    }

    return {
      isBlacklisted: _isBlacklisted,
      blacklist:     _blacklist,
      checkOnLoad:   _checkOnLoad
    };
  }());

  // ─────────────────────────────────────────────────────────────
  // MODULE 2: DHBotDetect — bot / scraper fingerprinting
  // ─────────────────────────────────────────────────────────────
  var DHBotDetect = (function() {
    var _signals    = [];
    var _pageLoadTs = _now();
    var _reqCount   = 0;
    var _reqWindow  = _now();
    var _triggered  = false;

    // Signal 1: check user agent patterns
    function _checkUA() {
      var ua = navigator.userAgent.toLowerCase();
      var botPatterns = [
        /bot|crawl|spider|slurp|teoma|archive|wget|curl/,
        /python-requests|python\/|java\/|go-http|libwww/,
        /scrapy|mechanize|phantomjs|headless/,
        /semrush|ahref|moz\.com|dotbot|rogerbot/
      ];
      for (var i = 0; i < botPatterns.length; i++) {
        if (botPatterns[i].test(ua)) return 'UA_BOT:' + ua.slice(0, 60);
      }
      return null;
    }

    // Signal 2: No mouse movement after 5 seconds (bots don't move mice)
    var _hasMoved = false;
    document.addEventListener('mousemove', function(){ _hasMoved = true; }, { once: true, passive: true });
    document.addEventListener('touchstart', function(){ _hasMoved = true; }, { once: true, passive: true });
    document.addEventListener('scroll',    function(){ _hasMoved = true; }, { once: true, passive: true });

    // Signal 3: Honeypot field — hidden field bots fill in
    function _injectHoneypot() {
      var hp = document.createElement('input');
      hp.type = 'text';
      hp.name = 'website_url';
      hp.id   = CFG.bot.honeypotFieldId;
      hp.setAttribute('tabindex', '-1');
      hp.setAttribute('autocomplete', 'off');
      hp.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;pointer-events:none';
      hp.setAttribute('aria-hidden', 'true');
      document.body && document.body.appendChild(hp);
    }

    function _checkHoneypot() {
      var hp = document.getElementById(CFG.bot.honeypotFieldId);
      return (hp && hp.value.length > 0) ? 'HONEYPOT_FILLED' : null;
    }

    // Signal 4: Navigator properties bots often lack
    function _checkNavProps() {
      var suspicious = [];
      if (!navigator.plugins || navigator.plugins.length === 0) suspicious.push('no_plugins');
      if (!navigator.languages || navigator.languages.length === 0) suspicious.push('no_languages');
      if (navigator.webdriver === true) suspicious.push('webdriver');
      if (window.callPhantom || window._phantom) suspicious.push('phantom');
      if (window.__nightmare) suspicious.push('nightmare');
      return suspicious.length >= 2 ? ('NAV_PROPS:' + suspicious.join(',')) : null;
    }

    // Run full bot check — called on first user interaction attempt
    function runCheck(context) {
      if (_triggered) return;
      var reason = null;

      reason = reason || _checkUA();
      reason = reason || _checkHoneypot();
      reason = reason || _checkNavProps();

      // No interaction after 8 seconds on non-trivial page
      var timeOnPage = _now() - _pageLoadTs;
      if (!_hasMoved && timeOnPage > 8000 && document.body && document.body.innerText.length > 500) {
        reason = reason || 'NO_INTERACTION_8S';
      }

      if (reason) {
        _triggered = true;
        DHReporter.report('BOT_DETECTED', 'high', reason, { context: context });
        DHFirewall.blacklist(1800000, reason, 'BOT');
        return true;
      }
      return false;
    }

    // Track outgoing API request rate
    function trackRequest() {
      _reqCount++;
      var elapsed = _now() - _reqWindow;
      if (elapsed > 60000) { _reqCount = 1; _reqWindow = _now(); return; }
      if (_reqCount > CFG.bot.maxRequestsPerMin) {
        DHReporter.report('RATE_LIMIT_CLIENT', 'high', 'Exceeded ' + CFG.bot.maxRequestsPerMin + ' req/min', { count: _reqCount });
        DHFirewall.blacklist(300000, 'Too many API requests', 'BOT');
      }
    }

    // Init
    setTimeout(_injectHoneypot, 500);
    setTimeout(function() {
      if (!_hasMoved && document.body && document.body.innerText.length > 200) {
        _signals.push('no_interaction_10s');
      }
    }, 10000);

    return { runCheck: runCheck, trackRequest: trackRequest, hasMoved: function(){ return _hasMoved; } };
  }());

  // ─────────────────────────────────────────────────────────────
  // MODULE 3: DHBrute — brute force protection
  // ─────────────────────────────────────────────────────────────
  var DHBrute = (function() {
    var STORE_KEY     = 'dh_sec_bf';
    var LOCKOUT_KEY   = 'dh_sec_bf_lock';

    function _getData() {
      return _getStore(STORE_KEY, { count: 0, window_start: _now() });
    }

    function isLockedOut() {
      var lockUntil = parseInt(localStorage.getItem(LOCKOUT_KEY) || '0');
      if (lockUntil && _now() < lockUntil) return true;
      if (lockUntil && _now() >= lockUntil) {
        localStorage.removeItem(LOCKOUT_KEY);
        _setStore(STORE_KEY, { count: 0, window_start: _now() });
      }
      return false;
    }

    function recordFailure(context) {
      if (isLockedOut()) return true;

      var data = _getData();
      var now  = _now();

      // Reset window if expired
      if (now - data.window_start > CFG.brute.windowMs) {
        data = { count: 0, window_start: now };
      }

      data.count++;
      _setStore(STORE_KEY, data);

      DHReporter.report('AUTH_FAILURE', 'medium', 'Failed login attempt ' + data.count + '/' + CFG.brute.maxLoginAttempts, { context: context, count: data.count });

      if (data.count >= CFG.brute.maxLoginAttempts) {
        // Lock out session
        localStorage.setItem(LOCKOUT_KEY, String(_now() + CFG.brute.lockoutMs));
        DHReporter.report('BRUTE_FORCE', 'critical', 'Brute force lockout triggered after ' + data.count + ' failures', { context: context });
        DHFirewall.blacklist(CFG.brute.lockoutMs, 'Brute force detected', 'BRUTE');
        return true; // Locked
      }
      return false;
    }

    function recordSuccess() {
      _setStore(STORE_KEY, { count: 0, window_start: _now() });
      localStorage.removeItem(LOCKOUT_KEY);
    }

    function getRemainingLockout() {
      var lockUntil = parseInt(localStorage.getItem(LOCKOUT_KEY) || '0');
      return lockUntil ? Math.max(0, Math.ceil((lockUntil - _now()) / 60000)) : 0;
    }

    // Intercept login form submission
    function guardLoginForm() {
      if (isLockedOut()) {
        var mins = getRemainingLockout();
        DHWall.show('Account locked', 'BRUTE');
        return false;
      }
      return true;
    }

    return {
      recordFailure:      recordFailure,
      recordSuccess:      recordSuccess,
      isLockedOut:        isLockedOut,
      getRemainingLockout:getRemainingLockout,
      guardLoginForm:     guardLoginForm
    };
  }());

  // ─────────────────────────────────────────────────────────────
  // MODULE 4: DHXSSGuard — XSS / injection detection
  // ─────────────────────────────────────────────────────────────
  var DHXSSGuard = (function() {
    var _blocked = false;

    function _testString(str) {
      if (!str) return false;
      for (var i = 0; i < CFG.xss.patterns.length; i++) {
        if (CFG.xss.patterns[i].test(str)) return true;
      }
      return false;
    }

    // Check current URL for XSS/injection probes
    function checkURL() {
      if (_blocked) return;
      var full = decodeURIComponent(location.href);
      if (_testString(full)) {
        _blocked = true;
        DHReporter.report('XSS_PROBE', 'critical', 'Malicious pattern in URL: ' + full.slice(0, 150), { url: full.slice(0, 200) });
        DHFirewall.blacklist(3600000, 'XSS/injection probe in URL', 'XSS');
      }
    }

    // Watch input fields for XSS attempts
    function watchInputs() {
      document.addEventListener('blur', function(e) {
        var el = e.target;
        if (!el || (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA')) return;
        var val = el.value || '';
        if (_testString(val)) {
          el.value = ''; // Clear the field
          DHReporter.report('XSS_INPUT', 'high', 'Malicious input in field: ' + (el.name || el.id || '?'), { value: val.slice(0, 100) });
          // Don't block on first XSS input attempt — could be accidental
          // But record it; if 3 attempts, block
          var xssAttempts = parseInt(sessionStorage.getItem('dh_xss_attempts') || '0') + 1;
          sessionStorage.setItem('dh_xss_attempts', String(xssAttempts));
          if (xssAttempts >= 3) {
            DHFirewall.blacklist(3600000, 'Repeated XSS input attempts', 'XSS');
          }
        }
      }, true);
    }

    return { checkURL: checkURL, watchInputs: watchInputs, testString: _testString };
  }());

  // ─────────────────────────────────────────────────────────────
  // MODULE 5: DHSpamGuard — rapid click / form spam
  // ─────────────────────────────────────────────────────────────
  var DHSpamGuard = (function() {
    var _clickTimes  = [];
    var _submitTimes = [];
    var _formStarts  = {};

    // Track click rate
    document.addEventListener('click', function() {
      var now = _now();
      _clickTimes.push(now);
      // Keep last 10 clicks only
      _clickTimes = _clickTimes.filter(function(t){ return now - t < 1000; });
      if (_clickTimes.length > CFG.spam.maxClicksPerSec) {
        DHReporter.report('SPAM_CLICK', 'medium', 'Rapid clicking: ' + _clickTimes.length + ' clicks/sec');
        _clickTimes = []; // Reset to avoid spam-reporting
      }
    }, { passive: true });

    // Track form submission rate
    function recordFormSubmit(formId) {
      var now = _now();
      _submitTimes.push(now);
      _submitTimes = _submitTimes.filter(function(t){ return now - t < 60000; });

      if (_submitTimes.length > CFG.spam.maxFormsPerMin) {
        DHReporter.report('SPAM_FORM', 'high', 'Form spam: ' + _submitTimes.length + ' submits/min', { formId: formId });
        DHFirewall.blacklist(600000, 'Form spam detected', 'SPAM');
        return false; // Block submission
      }
      return true;
    }

    // Mark when user starts filling a form
    function markFormStart(formId) {
      _formStarts[formId] = _now();
    }

    // Check if form was filled too fast (bot-like)
    function isHumanSpeed(formId) {
      var start = _formStarts[formId];
      if (!start) return true; // No start time recorded
      var elapsed = _now() - start;
      if (elapsed < CFG.spam.minFormFillMs) {
        DHReporter.report('SPAM_FAST_FORM', 'medium', 'Form filled in ' + elapsed + 'ms (min: ' + CFG.spam.minFormFillMs + 'ms)', { formId: formId, elapsed: elapsed });
        return false;
      }
      return true;
    }

    return { recordFormSubmit: recordFormSubmit, markFormStart: markFormStart, isHumanSpeed: isHumanSpeed };
  }());

  // ─────────────────────────────────────────────────────────────
  // MODULE 6: DHAdminGuard — admin panel protection
  // ─────────────────────────────────────────────────────────────
  var DHAdminGuard = (function() {
    var FAIL_KEY   = 'dh_adm_fails';
    var LOCK_KEY   = 'dh_adm_lock';

    // Check if someone is trying to access /admin/ without being logged in
    function checkAdminAccess() {
      if (!_isAdmin) return;

      // Report every admin panel load
      DHReporter.report('ADMIN_ACCESS', 'info', 'Admin panel accessed', { path: location.pathname });

      // Check admin lock
      var lockUntil = parseInt(localStorage.getItem(LOCK_KEY) || '0');
      if (lockUntil && _now() < lockUntil) {
        DHWall.show('Admin access locked', 'ADMIN');
        return false;
      }
    }

    function recordAdminFailure() {
      var data = _getStore(FAIL_KEY, { count: 0, ts: _now() });
      if (_now() - data.ts > 600000) data = { count: 0, ts: _now() }; // Reset after 10min
      data.count++;
      _setStore(FAIL_KEY, data);
      DHReporter.report('ADMIN_AUTH_FAIL', 'high', 'Admin login failure ' + data.count + '/' + CFG.admin.maxFailedLogins);
      if (data.count >= CFG.admin.maxFailedLogins) {
        localStorage.setItem(LOCK_KEY, String(_now() + 1800000));
        DHReporter.report('ADMIN_LOCKOUT', 'critical', 'Admin panel locked after ' + data.count + ' failed attempts');
        DHWall.show('Admin locked', 'ADMIN');
        return true;
      }
      return false;
    }

    function recordAdminSuccess() {
      _setStore(FAIL_KEY, { count: 0, ts: _now() });
      localStorage.removeItem(LOCK_KEY);
      DHReporter.report('ADMIN_LOGIN', 'info', 'Admin logged in successfully');
    }

    // Detect unauthorised URL access to admin
    function detectDirectAdminAccess() {
      if (!_isAdmin) return;
      // Check if the user arrived at admin directly without a referrer from admin itself
      var ref = document.referrer;
      var isDirectAccess = !ref || ref.indexOf('/admin/') === -1;
      if (isDirectAccess) {
        DHReporter.report('ADMIN_DIRECT_ACCESS', 'medium', 'Direct navigation to admin panel', { referrer: ref || 'none' });
      }
    }

    return { checkAdminAccess: checkAdminAccess, recordAdminFailure: recordAdminFailure, recordAdminSuccess: recordAdminSuccess, detectDirectAdminAccess: detectDirectAdminAccess };
  }());

  // ─────────────────────────────────────────────────────────────
  // INTEGRATION: Hook into existing site functions
  // ─────────────────────────────────────────────────────────────

  // Wait for DOM + shared.js to be ready, then hook in
  function _hookIntegrations() {

    // 1. Hook into login form (login.html)
    var loginForm = document.getElementById('loginForm') || document.querySelector('form[data-form="login"]');
    if (loginForm) {
      DHSpamGuard.markFormStart('login');
      loginForm.addEventListener('submit', function(e) {
        if (DHBrute.isLockedOut()) {
          e.preventDefault();
          DHWall.show('Too many attempts', 'BRUTE');
          return;
        }
        if (!DHSpamGuard.isHumanSpeed('login')) {
          e.preventDefault();
          return;
        }
        DHSpamGuard.recordFormSubmit('login');
      }, true);
    }

    // 2. Hook into checkout form
    var checkoutBtn = document.getElementById('placeOrderBtn') || document.querySelector('[data-action="place-order"]');
    if (checkoutBtn) {
      DHSpamGuard.markFormStart('checkout');
    }

    // 3. Hook into _gasPost / apiPost used across the site
    // Intercept all fetch calls to GAS to rate-limit them
    var _origFetch = window.fetch;
    window.fetch = function(url, opts) {
      if (typeof url === 'string' && url.indexOf('script.google.com') > -1) {
        DHBotDetect.trackRequest();
      }
      return _origFetch.apply(this, arguments);
    };

    // 4. Watch for failed GAS API responses (brute force via API)
    var _origGasPost = window._gasPost;
    if (typeof _origGasPost === 'function') {
      window._gasPost = function(url, body, onSuccess, onError) {
        var wrappedError = function(msg) {
          if (body && (body.action === 'login' || body.action === 'register')) {
            DHBrute.recordFailure(body.action);
          }
          if (onError) onError(msg);
        };
        var wrappedSuccess = function(data) {
          if (body && body.action === 'login' && data && data.success) {
            DHBrute.recordSuccess();
            if (_isAdmin) DHAdminGuard.recordAdminSuccess();
          }
          if (body && body.action === 'login' && data && data.error) {
            DHBrute.recordFailure('login');
          }
          if (onSuccess) onSuccess(data);
        };
        _origGasPost(url, body, wrappedSuccess, wrappedError);
      };
    }

    // 5. Admin-specific integrations
    if (_isAdmin) {
      DHAdminGuard.checkAdminAccess();
      DHAdminGuard.detectDirectAdminAccess();

      // Hook into admin login function
      var _origDoLogin = window.doAdminLogin;
      if (typeof _origDoLogin === 'function') {
        window.doAdminLogin = function() {
          if (!DHAdminGuard.guardLoginForm || DHAdminGuard.checkAdminAccess() === false) return;
          _origDoLogin.apply(this, arguments);
        };
      }
    }

    // 6. Mark form starts on focus
    document.addEventListener('focusin', function(e) {
      var form = e.target && e.target.closest && e.target.closest('form');
      if (form && form.id) DHSpamGuard.markFormStart(form.id);
    }, { passive: true });
  }

  // ─────────────────────────────────────────────────────────────
  // INITIALISATION
  // ─────────────────────────────────────────────────────────────
  function _init() {
    // Step 1: Check if this session is already blacklisted
    if (DHFirewall.checkOnLoad()) return;

    // Step 2: Scan URL for XSS/injection probes immediately
    DHXSSGuard.checkURL();

    // Step 3: Watch input fields
    DHXSSGuard.watchInputs();

    // Step 4: Run bot check after first user interaction
    var _botCheckDone = false;
    ['click','keydown','touchstart','scroll'].forEach(function(evt) {
      document.addEventListener(evt, function() {
        if (!_botCheckDone) {
          _botCheckDone = true;
          setTimeout(function() { DHBotDetect.runCheck(evt); }, 100);
        }
      }, { once: false, passive: true });
    });

    // Step 5: Run bot check after 15 seconds even with no interaction
    // (catches headless browsers that don't trigger events)
    setTimeout(function() {
      if (!_botCheckDone) {
        _botCheckDone = true;
        DHBotDetect.runCheck('timeout');
      }
    }, 15000);

    // Step 6: Hook into existing site functions after DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(_hookIntegrations, 500);
      });
    } else {
      setTimeout(_hookIntegrations, 500);
    }

    // Step 7: Report page view (for traffic analytics in SOC)
    setTimeout(function() {
      DHReporter.report('PAGE_VIEW', 'info', location.pathname, {
        referrer: document.referrer.slice(0, 100) || 'direct',
        screen:   screen.width + 'x' + screen.height
      });
    }, 2000);
  }

  // ─────────────────────────────────────────────────────────────
  // PUBLIC API — attach to window for use by other scripts
  // ─────────────────────────────────────────────────────────────
  global.DHSec = {
    firewall:  DHFirewall,
    bot:       DHBotDetect,
    brute:     DHBrute,
    xss:       DHXSSGuard,
    spam:      DHSpamGuard,
    admin:     DHAdminGuard,
    reporter:  DHReporter,
    wall:      DHWall,

    // Convenience methods for use in page scripts
    recordLoginFailure:  function(ctx) { return DHBrute.recordFailure(ctx); },
    recordLoginSuccess:  function()    { DHBrute.recordSuccess(); },
    isLockedOut:         function()    { return DHBrute.isLockedOut(); },
    guardForm:           function(id)  { return DHSpamGuard.recordFormSubmit(id) && DHSpamGuard.isHumanSpeed(id); },
    markFormStart:       function(id)  { DHSpamGuard.markFormStart(id); },
    reportEvent:         function(t,s,d,e) { DHReporter.report(t,s,d,e); }
  };

  _init();

}(window));
