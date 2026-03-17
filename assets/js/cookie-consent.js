/* ═══════════════════════════════════════════════════════════════
   DETOXY HIJAMA — Cookie Consent (GDPR / India DPDP compliant)
   Shows banner on first visit. Stores preference in localStorage.
   Triggers Google Analytics (if configured) only after consent.
═══════════════════════════════════════════════════════════════ */
(function () {
  var CONSENT_KEY = 'dh_cookie_consent';
  var CONSENT_VER = '1'; // increment this to re-prompt after policy changes

  function _stored() {
    try { return JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null'); } catch(e) { return null; }
  }

  function _save(choice) {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ v: CONSENT_VER, choice: choice, ts: Date.now() }));
    } catch(e) {}
  }

  function _dismiss(choice) {
    _save(choice);
    var banner = document.getElementById('dh-cookie-banner');
    if (banner) {
      banner.style.transform = 'translateY(110%)';
      banner.style.opacity = '0';
      setTimeout(function () { if (banner.parentNode) banner.remove(); }, 500);
    }
    // Fire analytics consent signal
    if (typeof window.dhConsentSignal === 'function') window.dhConsentSignal(choice);
    // If accepted and gtag queued, unblock
    if (choice === 'accept' && typeof window._dhGtagQueue !== 'undefined') {
      window._dhGtagQueue.forEach(function(fn){ try { fn(); } catch(e) {} });
      window._dhGtagQueue = [];
    }
  }

  function _inject() {
    // Inject styles
    var style = document.createElement('style');
    style.textContent = [
      '#dh-cookie-banner{',
        'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);',
        'background:#1a3938;color:#fff;',
        'border-radius:14px;padding:18px 22px;',
        'max-width:680px;width:calc(100% - 32px);',
        'display:flex;align-items:center;gap:16px;flex-wrap:wrap;',
        'box-shadow:0 8px 32px rgba(0,0,0,.28);',
        'z-index:99999;',
        'transition:transform .4s cubic-bezier(.4,0,.2,1), opacity .4s ease;',
        'font-family:Outfit,sans-serif;font-size:.83rem;',
      '}',
      '#dh-cookie-banner p{flex:1;min-width:200px;margin:0;line-height:1.6;color:rgba(255,255,255,.85)}',
      '#dh-cookie-banner a{color:#80c5c4;text-decoration:underline}',
      '#dh-cookie-banner .cc-btns{display:flex;gap:8px;flex-shrink:0}',
      '#dh-cookie-accept{background:#57A2A0;color:#fff;border:none;border-radius:8px;padding:9px 20px;font-size:.82rem;font-weight:700;cursor:pointer;font-family:Outfit,sans-serif;white-space:nowrap;transition:background .2s}',
      '#dh-cookie-accept:hover{background:#458987}',
      '#dh-cookie-reject{background:transparent;color:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.25);border-radius:8px;padding:9px 16px;font-size:.82rem;font-weight:600;cursor:pointer;font-family:Outfit,sans-serif;white-space:nowrap;transition:all .2s}',
      '#dh-cookie-reject:hover{background:rgba(255,255,255,.08);color:#fff}',
      '@media(max-width:500px){#dh-cookie-banner{flex-direction:column;align-items:flex-start;gap:12px}.cc-btns{width:100%}#dh-cookie-accept,#dh-cookie-reject{flex:1;text-align:center}}',
    ].join('');
    document.head.appendChild(style);

    // Inject banner HTML
    var banner = document.createElement('div');
    banner.id = 'dh-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.setAttribute('aria-live', 'polite');
    banner.innerHTML = [
      '<p>',
        'We use cookies to improve your experience and analyse site performance. ',
        'By clicking <strong>Accept</strong>, you consent to our use of cookies as described in our ',
        '<a href="/privacy-policy.html">Privacy Policy</a>. ',
        'You can withdraw consent at any time.',
      '</p>',
      '<div class="cc-btns">',
        '<button id="dh-cookie-reject" aria-label="Reject non-essential cookies">Reject</button>',
        '<button id="dh-cookie-accept" aria-label="Accept all cookies">Accept All</button>',
      '</div>',
    ].join('');
    document.body.appendChild(banner);

    document.getElementById('dh-cookie-accept').addEventListener('click', function() { _dismiss('accept'); });
    document.getElementById('dh-cookie-reject').addEventListener('click', function() { _dismiss('reject'); });

    // Keyboard trap / accessibility
    banner.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') _dismiss('reject');
    });

    // Focus accept button for accessibility
    setTimeout(function() {
      var btn = document.getElementById('dh-cookie-accept');
      if (btn) btn.focus();
    }, 300);
  }

  // Don't show on admin pages
  if (window.location.pathname.indexOf('/admin/') > -1) return;

  var stored = _stored();
  // Show if never shown OR if version changed
  if (!stored || stored.v !== CONSENT_VER) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', _inject);
    } else {
      // Small delay — don't block first paint
      setTimeout(_inject, 800);
    }
  }

  // Expose API for other scripts to check consent
  window.DHConsent = {
    has: function() { var s = _stored(); return s && s.choice === 'accept'; },
    choice: function() { var s = _stored(); return s ? s.choice : null; },
    reset: function() { try { localStorage.removeItem(CONSENT_KEY); } catch(e) {} }
  };
}());
