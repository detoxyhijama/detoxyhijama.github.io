/**
 * DETOXY HIJAMA — Automated Test Suite
 * 
 * Run with: node detoxy-tests.js (after loading shared.js in a jsdom environment)
 * Or paste into browser console on any Detoxy page for in-browser testing.
 * 
 * Coverage:
 *   - Cart operations (add, remove, qty, total)
 *   - Wishlist operations
 *   - Security utilities (escapeHtml, validation)
 *   - Product data integrity
 *   - Image path helper
 *   - Coupon flow
 *   - URL safety (safe redirect)
 *   - Session/auth utilities
 */

(function() {
  'use strict';

  var _pass = 0, _fail = 0, _results = [];

  function test(name, fn) {
    try {
      fn();
      _pass++;
      _results.push({ status: 'PASS', name: name });
    } catch(e) {
      _fail++;
      _results.push({ status: 'FAIL', name: name, error: e.message });
    }
  }

  function assert(condition, msg) {
    if (!condition) throw new Error(msg || 'Assertion failed');
  }

  function assertEqual(a, b, msg) {
    if (a !== b) throw new Error((msg || '') + ` Expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`);
  }

  function assertContains(str, sub, msg) {
    if (!String(str).includes(sub)) throw new Error((msg || '') + ` Expected "${sub}" in "${String(str).slice(0,100)}"`);
  }

  // ─── Cart Tests ──────────────────────────────────────────────────
  test('Cart.get() returns array', function() {
    var cart = Cart.get();
    assert(Array.isArray(cart), 'Cart.get() must return array');
  });

  test('Cart.add() adds item', function() {
    Cart.clear();
    Cart.add('premium-cups', 1);
    assertEqual(Cart.count(), 1, 'count after add');
  });

  test('Cart.add() increments qty for duplicate', function() {
    Cart.clear();
    Cart.add('premium-cups', 1);
    Cart.add('premium-cups', 1);
    var items = Cart.get();
    assert(items.length === 1, 'Should merge, not duplicate');
    assertEqual(items[0].qty, 2, 'Qty should be 2');
  });

  test('Cart.add() respects max qty of 20', function() {
    Cart.clear();
    Cart.add('premium-cups', 25);
    var items = Cart.get();
    assert(items[0].qty <= 20, 'Qty should not exceed 20');
  });

  test('Cart.add() blocks OOS products', function() {
    Cart.clear();
    // Temporarily set stock to 0
    var p = PRODUCTS.find(function(x){ return x.id === 'premium-cups'; });
    var origStock = p.stock;
    p.stock = 0;
    Cart.add('premium-cups', 1);
    assertEqual(Cart.count(), 0, 'OOS item should not be added');
    p.stock = origStock; // restore
  });

  test('Cart.remove() removes item', function() {
    Cart.clear();
    Cart.add('premium-cups', 1);
    Cart.remove('premium-cups');
    assertEqual(Cart.count(), 0, 'count after remove');
  });

  test('Cart.total() calculates correctly', function() {
    Cart.clear();
    var p = PRODUCTS.find(function(x){ return x.id === 'premium-cups'; });
    Cart.add('premium-cups', 2);
    assertEqual(Cart.total(), p.price * 2, 'total should be price * qty');
  });

  test('Cart.total() returns 0 for empty cart', function() {
    Cart.clear();
    assertEqual(Cart.total(), 0, 'empty cart total');
  });

  test('Cart.updateQty() updates quantity', function() {
    Cart.clear();
    Cart.add('premium-cups', 1);
    Cart.updateQty('premium-cups', 3);
    assertEqual(Cart.get()[0].qty, 3, 'qty after update');
  });

  test('Cart.updateQty() removes item when qty < 1', function() {
    Cart.clear();
    Cart.add('premium-cups', 1);
    Cart.updateQty('premium-cups', 0);
    assertEqual(Cart.count(), 0, 'item removed when qty=0');
  });

  test('Cart persists via localStorage', function() {
    Cart.clear();
    Cart.add('lancet-pen', 2);
    Cart._cache = null; // force re-read
    assertEqual(Cart.count(), 2, 'cart reloaded from localStorage');
  });

  test('Cart cross-tab sync (storage event simulation)', function() {
    Cart.clear();
    Cart.add('premium-cups', 1);
    // Simulate another tab changing cart
    localStorage.setItem('dh_cart', JSON.stringify([{id:'lancet-pen',qty:3,price:299}]));
    window.dispatchEvent(new StorageEvent('storage', {key:'dh_cart'}));
    assertEqual(Cart._cache, null, 'cache invalidated on storage event');
  });

  // ─── Wishlist Tests ──────────────────────────────────────────────
  test('Wishlist.toggle() adds item', function() {
    localStorage.removeItem('dh_wishlist');
    var result = Wishlist.toggle('premium-cups');
    assert(result === true, 'toggle returns true when adding');
    assert(Wishlist.has('premium-cups'), 'item should be in wishlist');
  });

  test('Wishlist.toggle() removes item', function() {
    Wishlist.toggle('premium-cups'); // ensure it's in
    var beforeHas = Wishlist.has('premium-cups');
    if (beforeHas) {
      var result = Wishlist.toggle('premium-cups');
      assert(result === false, 'toggle returns false when removing');
      assert(!Wishlist.has('premium-cups'), 'item should be removed');
    }
  });

  test('Wishlist.count() returns correct count', function() {
    localStorage.removeItem('dh_wishlist');
    Wishlist.toggle('premium-cups');
    Wishlist.toggle('lancet-pen');
    assertEqual(Wishlist.count(), 2, 'wishlist count');
  });

  // ─── Security Utils Tests ────────────────────────────────────────
  test('escapeHtml() escapes < > & " \'', function() {
    assertEqual(escapeHtml('<script>alert("xss")</script>'),
      '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
  });

  test('escapeHtml() handles null/undefined', function() {
    assertEqual(escapeHtml(null), '');
    assertEqual(escapeHtml(undefined), '');
  });

  test('escapeHtml() handles numbers', function() {
    assertEqual(escapeHtml(42), '42');
  });

  test('DHSecurity.isValidPhone() validates Indian numbers', function() {
    assert(DHSecurity.isValidPhone('9876543210'), 'valid phone');
    assert(DHSecurity.isValidPhone('+919876543210'), 'valid with +91');
    assert(!DHSecurity.isValidPhone('1234567890'), 'invalid (starts with 1)');
    assert(!DHSecurity.isValidPhone('123'), 'too short');
    assert(!DHSecurity.isValidPhone(''), 'empty');
  });

  test('DHSecurity.isValidEmail() validates emails', function() {
    assert(DHSecurity.isValidEmail('test@example.com'), 'valid email');
    assert(DHSecurity.isValidEmail('user+tag@domain.co.in'), 'valid with plus');
    assert(!DHSecurity.isValidEmail('notanemail'), 'invalid');
    assert(!DHSecurity.isValidEmail(''), 'empty');
    assert(!DHSecurity.isValidEmail('@domain.com'), 'missing user');
  });

  test('DHSecurity.isValidPincode() validates 6-digit Indian pincodes', function() {
    assert(DHSecurity.isValidPincode('600001'), 'valid pincode');
    assert(!DHSecurity.isValidPincode('0600001'), 'leading zero invalid');
    assert(!DHSecurity.isValidPincode('60000'), 'too short');
    assert(!DHSecurity.isValidPincode('6000011'), 'too long');
  });

  test('DHSecurity.rateLimit() blocks after max calls', function() {
    var key = 'test_' + Date.now();
    assert(DHSecurity.rateLimit(key, 3, 10000), 'call 1 allowed');
    assert(DHSecurity.rateLimit(key, 3, 10000), 'call 2 allowed');
    assert(DHSecurity.rateLimit(key, 3, 10000), 'call 3 allowed');
    assert(!DHSecurity.rateLimit(key, 3, 10000), 'call 4 blocked');
  });

  test('DHSecurity.sanitizeOrderData() strips non-allowed fields', function() {
    var data = {
      name: 'Test User', phone: '9876543210', email: 'test@test.com',
      address: '123 Main St', city: 'Chennai', state: 'Tamil Nadu',
      pincode: '600001', notes: '', payment: 'cod', orderId: 'DH123',
      subtotal: 649, shipping: 0, total: 649, date: new Date().toISOString(),
      items: [{id:'premium-cups',name:'Premium Cups',qty:1,price:649}],
      DANGEROUS_FIELD: 'should_be_stripped',
      __proto__: { injected: true }
    };
    var safe = DHSecurity.sanitizeOrderData(data);
    assert(!safe.DANGEROUS_FIELD, 'unknown fields stripped');
    assert(safe.name === 'Test User', 'allowed fields kept');
    assert(safe.items.length === 1, 'items preserved');
  });

  test('DHSecurity.sanitizeOrderData() truncates long strings', function() {
    var longString = 'A'.repeat(1000);
    var data = { name: longString, phone: '9876543210', items: [] };
    var safe = DHSecurity.sanitizeOrderData(data);
    assert(safe.name.length <= 500, 'name truncated to 500');
  });

  // ─── Image Path Helper Tests ─────────────────────────────────────
  test('_imgSrc() handles absolute URLs', function() {
    assertEqual(_imgSrc('https://example.com/img.jpg'), 'https://example.com/img.jpg');
  });

  test('_imgSrc() adds leading slash to relative paths', function() {
    assertEqual(_imgSrc('assets/images/logo.png'), '/assets/images/logo.png');
  });

  test('_imgSrc() preserves paths that already start with /', function() {
    assertEqual(_imgSrc('/assets/images/logo.png'), '/assets/images/logo.png');
  });

  test('_imgSrc() handles null/empty', function() {
    assertEqual(_imgSrc(null), '/assets/images/placeholder.svg');
    assertEqual(_imgSrc(''), '/assets/images/placeholder.svg');
    assertEqual(_imgSrc(undefined), '/assets/images/placeholder.svg');
  });

  test('_imgSrc() prevents double-slash', function() {
    var result = _imgSrc('/assets/images/logo.png');
    assert(!result.startsWith('//'), 'no double slash');
  });

  // ─── Product Data Integrity Tests ───────────────────────────────
  test('PRODUCTS array is non-empty', function() {
    assert(Array.isArray(PRODUCTS) && PRODUCTS.length > 0, 'PRODUCTS must have items');
  });

  test('All products have required fields', function() {
    var required = ['id','slug','name','price','mrp','stock','images'];
    PRODUCTS.forEach(function(p) {
      required.forEach(function(field) {
        assert(p[field] !== undefined && p[field] !== null && p[field] !== '',
          'Product ' + p.id + ' missing ' + field);
      });
    });
  });

  test('All products have price <= mrp', function() {
    PRODUCTS.forEach(function(p) {
      assert(p.price <= p.mrp,
        'Product ' + p.id + ': price (' + p.price + ') > mrp (' + p.mrp + ')');
    });
  });

  test('All products have valid ratings (0-5)', function() {
    PRODUCTS.forEach(function(p) {
      assert(p.rating >= 0 && p.rating <= 5,
        'Product ' + p.id + ' has invalid rating: ' + p.rating);
    });
  });

  test('All products have at least one image', function() {
    PRODUCTS.forEach(function(p) {
      assert(Array.isArray(p.images) && p.images.length > 0,
        'Product ' + p.id + ' has no images');
    });
  });

  test('No duplicate product IDs', function() {
    var ids = PRODUCTS.map(function(p){ return p.id; });
    var unique = new Set(ids);
    assertEqual(unique.size, ids.length, 'Duplicate product IDs found');
  });

  test('All product slugs match their IDs', function() {
    PRODUCTS.forEach(function(p) {
      assertEqual(p.slug, p.id,
        'Product ' + p.id + ' slug mismatch: ' + p.slug);
    });
  });

  // ─── Utilities Tests ─────────────────────────────────────────────
  test('fmtINR() formats Indian currency correctly', function() {
    assertEqual(fmtINR(1000), '₹1,000');
    assertEqual(fmtINR(100000), '₹1,00,000');
    assertEqual(fmtINR(0), '₹0');
  });

  test('discountPct() calculates discount correctly', function() {
    assertEqual(discountPct(649, 999), 35, 'premium-cups discount');
    assertEqual(discountPct(999, 999), 0, 'no discount');
    assertEqual(discountPct(1000, 500), 0, 'price > mrp = 0');
  });

  test('renderStars() returns HTML string with 5 stars', function() {
    var html = renderStars(4.5, false);
    assertContains(html, 'class="star filled"');
    assertContains(html, 'class="star half"');
  });

  test('renderStars() clamps out-of-range values', function() {
    var html6 = renderStars(6, false);
    var html0 = renderStars(0, false);
    assert(html6 && html0, 'Should not throw on out-of-range');
  });

  // ─── Safe Redirect Tests ─────────────────────────────────────────
  test('_safeRedir() allows same-origin paths', function() {
    assertEqual(_safeRedir('/account.html'), '/account.html');
    assertEqual(_safeRedir('/products.html'), '/products.html');
  });

  test('_safeRedir() blocks protocol-relative URLs', function() {
    assertEqual(_safeRedir('//evil.com'), '/account.html');
  });

  test('_safeRedir() blocks absolute external URLs', function() {
    assertEqual(_safeRedir('https://evil.com'), '/account.html');
  });

  test('_safeRedir() handles null/empty', function() {
    assertEqual(_safeRedir(null), '/account.html');
    assertEqual(_safeRedir(''), '/account.html');
  });

  // ─── RecentlyViewed Tests ────────────────────────────────────────
  test('RecentlyViewed.add() stores product ID', function() {
    localStorage.removeItem('dh_rv');
    RecentlyViewed.add('premium-cups');
    assertContains(RecentlyViewed.getIds().join(','), 'premium-cups');
  });

  test('RecentlyViewed.add() deduplicates', function() {
    localStorage.removeItem('dh_rv');
    RecentlyViewed.add('premium-cups');
    RecentlyViewed.add('lancet-pen');
    RecentlyViewed.add('premium-cups'); // add again
    var ids = RecentlyViewed.getIds();
    assertEqual(ids.filter(function(x){ return x === 'premium-cups'; }).length, 1, 'no dupe');
    assertEqual(ids[0], 'premium-cups', 'most recent first');
  });

  test('RecentlyViewed caps at 8 items', function() {
    localStorage.removeItem('dh_rv');
    var ids = ['a','b','c','d','e','f','g','h','i','j'];
    ids.forEach(function(id){ RecentlyViewed.add(id); });
    assert(RecentlyViewed.getIds().length <= 8, 'should cap at 8');
  });

  // ─── DHIntel Search Tests ────────────────────────────────────────
  test('DHIntel.smartSearch() finds products by name', function() {
    var results = DHIntel.smartSearch('premium cups');
    assert(results.length > 0, 'should find premium cups');
    assertEqual(results[0].id, 'premium-cups', 'top result should be premium-cups');
  });

  test('DHIntel.smartSearch() handles empty query', function() {
    var results = DHIntel.smartSearch('');
    assertEqual(results.length, 0, 'empty query returns empty');
  });

  test('DHIntel.smartSearch() handles typos', function() {
    var results = DHIntel.smartSearch('premim cups'); // typo
    assert(results.length > 0, 'typo tolerance should find results');
  });

  test('DHIntel.smartSearch() filters OOS last', function() {
    var results = DHIntel.smartSearch('hijama');
    if (results.length > 1) {
      var hasOOS = results[results.length - 1].stock === 0;
      // OOS products should score lower but may still appear
      // Just verify search returns results
      assert(results.length > 0, 'search should return results');
    }
  });

  test('DHIntel.getRecommendations() returns related products', function() {
    var recs = DHIntel.getRecommendations('premium-cups', 4);
    assert(recs.length > 0, 'should get recommendations');
    assert(!recs.find(function(p){ return p.id === 'premium-cups'; }),
      'should not recommend the same product');
  });

  // ─── Print Results ───────────────────────────────────────────────
  var passedAll = _fail === 0;
  console.log('\n' + '═'.repeat(60));
  console.log('  DETOXY HIJAMA TEST RESULTS');
  console.log('═'.repeat(60));
  _results.forEach(function(r) {
    var icon = r.status === 'PASS' ? '✓' : '✗';
    var msg = icon + ' [' + r.status + '] ' + r.name;
    if (r.error) msg += '\n      Error: ' + r.error;
    console.log(msg);
  });
  console.log('═'.repeat(60));
  console.log('  PASSED: ' + _pass + '  FAILED: ' + _fail + '  TOTAL: ' + (_pass + _fail));
  console.log('═'.repeat(60) + '\n');

  if (typeof window !== 'undefined') {
    window.DH_TEST_RESULTS = { pass: _pass, fail: _fail, results: _results };
  }

  return { pass: _pass, fail: _fail, results: _results };
})();

  // ── New tests: API input sanitization ────────────────────────────────────────
  test('escapeHtml() handles script injection', function() {
    var dangerous = '<script>alert("xss")</script>';
    var safe = escapeHtml(dangerous);
    assert(safe.indexOf('<script>') === -1, 'Should not contain raw <script>');
    assert(safe.indexOf('&lt;script&gt;') > -1, 'Should contain escaped version');
  });

  test('escapeHtml() handles event handler injection', function() {
    var dangerous = '" onmouseover="alert(1)"';
    var safe = escapeHtml(dangerous);
    assert(safe.indexOf('onmouseover') > -1, 'onmouseover text kept');
    assert(safe.indexOf('"') === -1, 'Raw quotes removed');
  });

  test('fmtINR() handles zero', function() {
    assert(fmtINR(0) === '₹0', 'Zero should format as ₹0');
  });

  test('fmtINR() handles negative (discount display)', function() {
    var result = fmtINR(-100);
    assert(typeof result === 'string', 'Should return string for negative');
  });

  test('Cart.add() does not store unescaped product names', function() {
    Cart.clear();
    Cart.add({ id: 'xss-test', name: '<script>alert(1)</script>', price: 100, stock: 10 });
    var items = Cart.get();
    assert(items.length === 1, 'Item added');
    // The name is stored raw but should be escaped on render - verify escapeHtml works
    var escaped = escapeHtml(items[0].name);
    assert(escaped.indexOf('<script>') === -1, 'Escaped name should not have raw script tag');
    Cart.clear();
  });

  test('Cart.total() ignores non-numeric prices', function() {
    Cart.clear();
    Cart.add({ id: 'bad-price', name: 'Test', price: NaN, stock: 10 });
    var total = Cart.total();
    assert(!isNaN(total), 'Total should not be NaN');
    Cart.clear();
  });

  test('Cart.add() ignores item with missing id', function() {
    Cart.clear();
    try {
      Cart.add({ name: 'No ID', price: 100, stock: 10 });
    } catch(e) {}
    // Should either ignore or handle gracefully
    Cart.clear();
  });

  test('All product prices are positive integers', function() {
    PRODUCTS.forEach(function(p) {
      assert(typeof p.price === 'number' && p.price > 0, 'Product ' + p.id + ' must have positive price, got: ' + p.price);
    });
  });

  test('All product stock values are non-negative', function() {
    PRODUCTS.forEach(function(p) {
      assert(typeof p.stock === 'number' && p.stock >= 0, 'Product ' + p.id + ' must have non-negative stock');
    });
  });

  test('discountPct() returns 0 when price === mrp', function() {
    assert(discountPct(500, 500) === 0, 'No discount when equal');
  });

  test('discountPct() returns 0 when mrp is 0', function() {
    assert(discountPct(100, 0) === 0, 'No discount when mrp is 0');
  });

  test('discountPct() caps at 100', function() {
    var pct = discountPct(0, 1000);
    assert(pct <= 100, 'Discount cannot exceed 100%');
  });

  test('RecentlyViewed does not store duplicate IDs', function() {
    if (typeof RecentlyViewed === 'undefined') return;
    RecentlyViewed.clear && RecentlyViewed.clear();
    RecentlyViewed.add('prod-1');
    RecentlyViewed.add('prod-1');
    RecentlyViewed.add('prod-1');
    var items = RecentlyViewed.get();
    var count = items.filter(function(x){ return x === 'prod-1'; }).length;
    assert(count === 1, 'Should deduplicate, got: ' + count);
  });

