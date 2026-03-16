/* ═══════════════════════════════════════════════════════════════
   DETOXY HIJAMA — Service Worker v1.0
   Strategy: Cache-first for assets, Network-first for pages,
             Stale-while-revalidate for product images.
   Offline fallback: /offline.html for navigation, placeholder.svg for images.
═══════════════════════════════════════════════════════════════ */

// IMPORTANT: Increment CACHE_VERSION on every deployment to bust stale caches
// Auto-stamp: this should be replaced by CI/CD with a content hash e.g. 'dh-v1.3-abc123'
// For manual updates, simply increment the version number below
var CACHE_VERSION = 'dh-v2.0';
var STATIC_CACHE  = CACHE_VERSION + '-static';
var IMAGE_CACHE   = CACHE_VERSION + '-images';
var PAGE_CACHE    = CACHE_VERSION + '-pages';

/* Core shell — always cache these */
var STATIC_ASSETS = [
  '/',
  '/assets/style.css',
  '/assets/js/shared.js',
  '/assets/js/monitor.js',
  '/assets/js/reviews.js',
  '/assets/images/logo.png',
  '/assets/images/logo-192.png',
  '/assets/images/logo-512.png',
  '/assets/images/favicon.png',
  '/assets/images/placeholder.svg',
  '/manifest.json',
  '/offline.html'
];

/* Pages to pre-cache for offline navigation */
var PAGE_ASSETS = [
  '/products.html',
  '/cart.html',
  '/about.html',
  '/contact.html',
  '/faq.html'
];

/* ── Install: pre-cache shell ──────────────────────────────── */
self.addEventListener('install', function(e) {
  e.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(function(c) {
        return c.addAll(STATIC_ASSETS).catch(function(err) {
          console.warn('[SW] Some static assets failed to cache:', err);
        });
      }),
      caches.open(PAGE_CACHE).then(function(c) {
        return c.addAll(PAGE_ASSETS).catch(function() {});
      })
    ]).then(function() { return self.skipWaiting(); })
  );
});

/* ── Activate: prune old caches ────────────────────────────── */
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        // Delete ALL old caches — any dh- cache that isn't this version
        keys.filter(function(k) {
          return k.startsWith('dh-') && k !== STATIC_CACHE && k !== IMAGE_CACHE && k !== PAGE_CACHE;
        }).map(function(k) {
          console.log('[SW] Deleting old cache:', k);
          return caches.delete(k);
        })
      );
    }).then(function() {
      // Immediately take control of all open pages
      return self.clients.claim();
    }).then(function() {
      // Notify all clients to reload for fresh content
      return self.clients.matchAll({ type: 'window' }).then(function(clients) {
        clients.forEach(function(client) {
          client.postMessage({ type: 'SW_ACTIVATED', version: CACHE_VERSION });
        });
      });
    })
  );
});

/* ── Fetch: tiered caching strategy ────────────────────────── */
self.addEventListener('fetch', function(e) {
  var req = e.request;
  var url = new URL(req.url);

  /* Skip non-GET, cross-origin (Google Fonts, GAS, etc.) */
  if (req.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;
  /* Skip admin panel — always fresh */
  if (url.pathname.startsWith('/admin')) return;
  /* Skip Google Apps Script API calls */
  if (url.pathname.includes('macros')) return;

  /* Product/blog images → stale-while-revalidate, fallback to placeholder */
  if (/\.(jpe?g|png|webp|gif|svg)$/i.test(url.pathname)) {
    e.respondWith(
      caches.open(IMAGE_CACHE).then(function(cache) {
        return cache.match(req).then(function(cached) {
          var network = fetch(req).then(function(resp) {
            if (resp.ok) cache.put(req, resp.clone());
            return resp;
          }).catch(function() {
            /* Return placeholder for broken images */
            return caches.match('/assets/images/placeholder.svg');
          });
          return cached || network;
        });
      })
    );
    return;
  }

  /* CSS / JS → cache-first (versioned by CACHE_VERSION) */
  if (/\.(css|js)$/i.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then(function(cached) {
        if (cached) return cached;
        return fetch(req).then(function(resp) {
          if (resp.ok) {
            var respToCache = resp.clone();
            caches.open(STATIC_CACHE).then(function(c) { c.put(req, respToCache); });
          }
          return resp;
        });
      })
    );
    return;
  }

  /* HTML pages → network-first, fall back to cache, then offline page */
  if (req.headers.get('accept') && req.headers.get('accept').includes('text/html')) {
    e.respondWith(
      fetch(req).then(function(resp) {
        if (resp.ok) {
          // Clone BEFORE any async operation — body can only be read once
          var respToCache = resp.clone();
          caches.open(PAGE_CACHE).then(function(c) { c.put(req, respToCache); });
        }
        return resp;
      }).catch(function() {
        return caches.match(req).then(function(cached) {
          return cached || caches.match('/offline.html');
        });
      })
    );
    return;
  }
});

/* ── Background sync for offline cart saves ─────────────────── */
self.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
  if (e.data && e.data.type === 'CACHE_URLS') {
    caches.open(PAGE_CACHE).then(function(c) {
      (e.data.urls || []).forEach(function(url) {
        fetch(url).then(function(r) { if (r.ok) c.put(url, r); }).catch(function(){});
      });
    });
  }
});

/* ── SW Error Reporting ──────────────────────────────────────── */
// Report SW-level failures (failed precache, fetch errors) back
// to the page so DHMonitor can log them to Google Sheets.
function _reportToPage(type, message, meta) {
  self.clients.matchAll({ includeUncontrolled: false, type: 'window' })
    .then(function(clients) {
      clients.forEach(function(client) {
        client.postMessage({
          type:    'DH_SW_ERROR',
          errType: type,
          message: message,
          meta:    meta || {}
        });
      });
    }).catch(function() { /* no clients available */ });
}

// Catch unhandled SW errors
self.addEventListener('error', function(e) {
  _reportToPage('SW_ERROR', e.message || 'Service worker error', {
    file: e.filename, line: e.lineno
  });
});

self.addEventListener('unhandledrejection', function(e) {
  _reportToPage('SW_ERROR', (e.reason && e.reason.message) || 'SW unhandled rejection');
});
