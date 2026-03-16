/* ═══════════════════════════════════════════════════════════════
   DETOXY HIJAMA — Shared Engine v2.0 (Corporate Upgrade)
   Brand: #57A2A0 | Clean · Medical · Trustworthy
   Features: Mega Menu, Mini Cart, Wishlist, Quick View,
             Recently Viewed, Coupons, Countdown, Newsletter,
             Abandoned Cart, Sticky ATC, Scroll-to-top
═══════════════════════════════════════════════════════════════ */

// ── Site Config ──────────────────────────────────────────────
const SITE = {
  name:     'Detoxy Hijama',
  tagline:  'Hijama Cupping Specialists',
  baseUrl:  'https://detoxyhijama.github.io',
  phone:    '+91 95665 96077',
  email:    'detoxyhijama@gmail.com',
  address:  'Dr No 11/1, Selvaganabathy Nagar, Palakkad Road, Pollachi, Coimbatore – 642005, Tamil Nadu',
  get sheetsUrl() {
    try {
      return window.DH_API_URL ||
             (typeof HARDCODED_URL !== 'undefined' && HARDCODED_URL ? HARDCODED_URL : '') ||
             localStorage.getItem('detoxy_sheets_url') || '';
    } catch(e) { return ''; }
  }
};

// ── Products ─────────────────────────────────────────────────
const PRODUCTS = [
  {
    id:'premium-cups', slug:'premium-cups',
    name:'Detoxy Hijama Premium China Made Cups',
    category:'cups', categoryLabel:'Cupping Sets',
    price:649, mrp:999, rating:4.8, reviews:214, stock:50,
    badge:'Best Seller', badgeType:'teal',
    shortDesc:'Medical-grade silicone cups in 8 sizes. BPA-free, autoclave safe.',
    features:['8 sizes incl. Curve Cups','Medical-grade silicone','BPA-free & autoclave safe','Wet & dry cupping','Sterilizable & reusable'],
    specs:{Material:'Medical-grade silicone',Sizes:'8 sizes (incl. Curve)',Usage:'Wet & Dry cupping',Sterilization:'Autoclave safe',Origin:'China (medical grade)'},
    images:['assets/images/products/premium-cups/main.jpg','assets/images/products/premium-cups/image2.jpg','assets/images/products/premium-cups/image3.jpg','assets/images/products/premium-cups/image4.jpg','assets/images/products/premium-cups/image5.jpg','assets/images/products/premium-cups/image6.jpg','assets/images/products/curve-cups/main.jpg'],
    variants:[{size:'Size 1'},{size:'Size 2'},{size:'Size 3'},{size:'Size 4'},{size:'Size 5'},{size:'Size 6'},{size:'Curve Cup 3'},{size:'Curve Cup 4'}],
    variantLabel:'Size', tags:['silicone','premium','cupping','medical-grade'],
    isBestseller:true, isFeatured:true
  },
  {
    id:'electric-smart-cup', slug:'electric-smart-cup',
    name:'Detoxy Hijama Electric Smart Cupping Device',
    category:'electric', categoryLabel:'Electric Devices',
    price:1899, mrp:2999, rating:4.7, reviews:89, stock:20,
    badge:'New Arrival', badgeType:'dark',
    shortDesc:'Smart electric cupping with 9 suction levels, heat therapy & USB-C.',
    features:['9 suction levels','Built-in heat therapy','Rechargeable USB-C','Auto-pressure control','LCD display'],
    specs:{Power:'USB-C rechargeable',Battery:'2000mAh',Suction:'9 adjustable levels',Heat:'40°C–50°C',Display:'LCD panel'},
    images:['assets/images/products/electric-smart-cup/main.jpg','assets/images/products/electric-smart-cup/image2.jpg','assets/images/products/electric-smart-cup/image3.jpg','assets/images/products/electric-smart-cup/image4.jpg','assets/images/products/electric-smart-cup/image5.jpg'],
    tags:['electric','smart','device','heat'], isFeatured:true
  },
  {
    id:'fire-cupping-glass', slug:'fire-cupping-glass',
    name:'Detoxy Hijama Fire Cupping Glass Set',
    category:'cups', categoryLabel:'Cupping Sets',
    price:549, mrp:799, rating:4.6, reviews:156, stock:35,
    badge:'Trending', badgeType:'cream',
    shortDesc:'Authentic borosilicate glass fire cupping set. 16 cups in 3 sizes.',
    features:['16 borosilicate glass cups','Heat resistant up to 500°C','Smooth rounded rims','3 sizes included','Professional clinic grade'],
    specs:{Material:'Borosilicate glass',Sizes:'Small/Medium/Large',Quantity:'16 cups',Heat:'Up to 500°C',Thickness:'3mm wall'},
    images:['assets/images/products/fire-cupping-glass/main.jpg','assets/images/products/fire-cupping-glass/image2.jpg','assets/images/products/fire-cupping-glass/image3.jpg'],
    tags:['glass','fire','sunnah','traditional'], isFeatured:true
  },
  {
    id:'magnetic-vacuum-kit', slug:'magnetic-vacuum-kit',
    name:'Detoxy Hijama 24-Set Magnetic Vacuum Cupping Kit',
    category:'kits', categoryLabel:'Starter Kits',
    price:1149, mrp:1699, rating:4.9, reviews:73, stock:18,
    badge:'Top Rated', badgeType:'teal',
    shortDesc:'Complete 24-piece magnetic vacuum kit with pump gun & carry case.',
    features:['24 cups (4 sizes)','Magnetic vacuum pump','Airtight seal technology','Extension hose included','Carry case included'],
    specs:{Cups:'24 pcs in 4 sizes',Pump:'Magnetic lock system',Material:'ABS + silicone',Includes:'Pump, cups, case, hose',Usage:'Professional & home'},
    images:['assets/images/products/magnetic-vacuum-kit/main.jpg','assets/images/products/magnetic-vacuum-kit/image2.jpg'],
    tags:['kit','vacuum','magnetic','complete'], isBestseller:true, isFeatured:true
  },
  {
    id:'lancet-pen', slug:'lancet-pen',
    name:'Detoxy Hijama Auto Lancet Pen Massager',
    category:'consumables', categoryLabel:'Consumables',
    price:299, mrp:499, rating:4.7, reviews:198, stock:100,
    badge:null,
    shortDesc:'Spring-loaded auto lancet pen with 5 depth settings for wet hijama.',
    features:['5 depth settings (0.8–1.8mm)','Auto spring mechanism','Single-use lancet compatibility','Ergonomic grip','10 lancet heads included'],
    specs:{Depths:'0.8mm–1.8mm (5 levels)',Mechanism:'Auto spring-loaded',Compatible:'Standard lancets',Material:'Medical ABS',Includes:'Pen + 10 lancet heads'},
    images:['assets/images/products/lancet-pen/main.jpg'],
    tags:['lancet','wet-hijama','precision']
  },
  {
    id:'latex-gloves', slug:'latex-gloves',
    name:'Detoxy Hijama Premium Latex Gloves (Pack of 100)',
    category:'consumables', categoryLabel:'Consumables',
    price:199, mrp:349, rating:4.4, reviews:341, stock:200,
    badge:null,
    shortDesc:'Medical-grade latex examination gloves. Box of 100 for a full month.',
    features:['Box of 100 gloves','Medical-grade latex','Textured fingertips','Powder coated','Pinhole tested'],
    specs:{Quantity:'100 pcs per box',Material:'Natural rubber latex',Size:'M / L (select)',Standard:'ISO 374-1',Finish:'Powdered'},
    images:['assets/images/products/latex-gloves/main.jpg'],
    tags:['gloves','latex','protection','consumable'], isBestseller:true
  },
  {
    id:'bamboo-cupping-set', slug:'bamboo-cupping-set',
    name:'Detoxy Hijama Bamboo Cupping Set',
    category:'cups', categoryLabel:'Cupping Sets',
    price:479, mrp:699, rating:4.3, reviews:44, stock:15,
    badge:null,
    shortDesc:'Handcrafted natural bamboo cups for traditional herbal steam cupping.',
    features:['Sustainably sourced bamboo','Herbal steam compatible','Set of 8 cups','Natural anti-microbial','Handcrafted quality'],
    specs:{Material:'Natural bamboo',Quantity:'8 cups',Sizes:'3 diameters',Usage:'Herbal steam cupping',Finish:'Natural lacquer'},
    images:['assets/images/products/bamboo-cupping-set/main.jpg'],
    tags:['bamboo','herbal','natural','traditional']
  },
  {
    id:'silicone-facial-4', slug:'silicone-facial-4',
    name:'Detoxy Hijama Silicone Facial Cup Set of 4',
    category:'facial', categoryLabel:'Facial Cups',
    price:349, mrp:549, rating:4.6, reviews:127, stock:45,
    badge:null,
    shortDesc:'Mini silicone facial cupping set (4 pcs) for lymphatic drainage.',
    features:['4 mini cups','Ultra-soft silicone','Hypoallergenic','Boosts collagen','Reduces puffiness'],
    specs:{Quantity:'4 cups',Material:'Soft silicone',Sizes:'2 sizes',Use:'Face & neck',Safe:'Hypoallergenic'},
    images:['assets/images/products/silicone-facial-4/main.jpg'],
    tags:['facial','silicone','beauty','anti-aging']
  },
  {
    id:'hijama-suction-gun', slug:'hijama-suction-gun',
    name:'Detoxy Hijama Suction Gun',
    category:'kits', categoryLabel:'Starter Kits',
    price:549, mrp:799, rating:4.5, reviews:38, stock:30,
    badge:null,
    shortDesc:'Professional hijama suction gun with precision vacuum control.',
    features:['Ergonomic pistol grip','Precision vacuum valve','Single-hand operation','Compatible with standard cups','Durable ABS construction'],
    specs:{Type:'Manual vacuum gun',Compatibility:'Standard screw-top cups',Material:'Medical ABS',Operation:'Single-handed',Valve:'Precision release'},
    images:['assets/images/products/hijama-suction-gun/main.jpg'],
    tags:['suction','gun','vacuum','professional']
  },
  {
    id:'indian-standard-cup', slug:'indian-standard-cup',
    name:'Detoxy Hijama Indian Made Standard Hijama Cup',
    category:'cups', categoryLabel:'Cupping Sets',
    price:199, mrp:349, rating:4.2, reviews:89, stock:150,
    badge:null,
    shortDesc:'Affordable Indian-made standard silicone hijama cups. 6 sizes.',
    features:['Made in India','Soft silicone material','Easy suction application','Wet & dry cupping','Available in 6 sizes'],
    specs:{Origin:'Made in India',Material:'Silicone',Sizes:'Size 1–6',Usage:'Wet & Dry',Grade:'Standard clinical'},
    images:['assets/images/products/indian-standard-cup/main.jpg'],
    variants:[{size:'Size 1'},{size:'Size 2'},{size:'Size 3'},{size:'Size 4'},{size:'Size 5'},{size:'Size 6'}],
    variantLabel:'Size',
    tags:['silicone','standard','affordable','indian']
  },
  {
    id:'silicone-facial-7', slug:'silicone-facial-7',
    name:'Detoxy Hijama Silicone Facial Cup Set of 7',
    category:'facial', categoryLabel:'Facial Cups',
    price:549, mrp:849, rating:4.7, reviews:61, stock:35,
    badge:'Popular', badgeType:'teal',
    shortDesc:'Complete 7-piece facial cupping set. Full face + neck coverage.',
    features:['7 cups — 7 sizes','Full face & neck coverage','Hypoallergenic silicone','Anti-aging & lymphatic drainage','Includes storage pouch'],
    specs:{Quantity:'7 cups',Material:'Soft silicone',Coverage:'Full face + neck',Skin:'All skin types',Includes:'Storage pouch'},
    images:['assets/images/products/silicone-facial-7/main.jpg'],
    tags:['facial','complete','silicone','beauty'], isFeatured:true
  },
  {
    id:'silicone-moving-cup', slug:'silicone-moving-cup',
    name:'Detoxy Hijama Silicone Moving Cup Set (4 pcs)',
    category:'cups', categoryLabel:'Cupping Sets',
    price:399, mrp:599, rating:4.5, reviews:52, stock:40,
    badge:null,
    shortDesc:'Silicone moving (sliding) cups for gliding massage cupping.',
    features:['4 flexible silicone cups','Gliding massage technique','Deep tissue stimulation','Use with massage oil','Reusable & sterilizable'],
    specs:{Quantity:'4 cups',Material:'Flexible silicone',Technique:'Moving/sliding',Use:'With massage oil',Sizes:'Mixed set'},
    images:['assets/images/products/silicone-moving-cup/main.jpg'],
    tags:['moving','sliding','massage','silicone']
  },
  {
    id:'surgical-blade', slug:'surgical-blade',
    name:'Detoxy Hijama Surgical Blade No. 11 (Pack of 100)',
    category:'consumables', categoryLabel:'Consumables',
    price:249, mrp:399, rating:4.6, reviews:173, stock:300,
    badge:null,
    shortDesc:'Sterile surgical blade No. 11, pack of 100. Precision wet hijama incisions.',
    features:['100 individually wrapped blades','No. 11 pointed blade','Sterile & single-use','Carbon steel construction','Gamma-irradiated sterility'],
    specs:{Quantity:'100 blades',Type:'No. 11 (pointed)',Material:'Carbon steel',Sterility:'Gamma-irradiated',Usage:'Single use only'},
    images:['assets/images/products/surgical-blade/main.jpg'],
    tags:['blade','surgical','wet-hijama','sterile']
  },
  {
    id:'surgical-cotton', slug:'surgical-cotton',
    name:'Detoxy Hijama Surgical Cotton (400g)',
    category:'consumables', categoryLabel:'Consumables',
    price:149, mrp:249, rating:4.3, reviews:95, stock:200,
    badge:null,
    shortDesc:'400g roll of 100% pure absorbent surgical cotton for pre/post hijama care.',
    features:['400g roll','100% pure cotton','High absorbency','Lint-free quality','Antiseptic compatible'],
    specs:{Weight:'400g',Material:'100% cotton',Grade:'Surgical/medical',Use:'Pre & post hijama',Pack:'Single roll'},
    images:['assets/images/products/surgical-cotton/main.jpg'],
    tags:['cotton','consumable','aftercare','surgical']
  }
];

// ── Testimonials Data ─────────────────────────────────────────
const TESTIMONIALS = [
  { name:'Dr. Aisha Begum',  city:'Chennai',   rating:5, text:'The Premium China Made Cups are exceptional quality. My patients love the gentleness yet effectiveness. Been using Detoxy for 2 years — absolutely reliable.',  product:'Premium Cups',       date:'Jan 2026' },
  { name:'Mohammed Farhan',  city:'Hyderabad', rating:5, text:'Ordered the Magnetic Vacuum Kit for my home clinic. Arrived in 2 days, packaging was excellent. Quality exceeds expectations at this price point.',          product:'Magnetic Vacuum Kit', date:'Dec 2025' },
  { name:'Fatima Zahra',     city:'Bangalore', rating:5, text:'The Electric Smart Cup is a game changer! My elderly patients who cannot tolerate fire cupping benefit so much. Highly recommend Detoxy.',                    product:'Electric Smart Cup',  date:'Jan 2026' },
  { name:'Ibrahim Hassan',   city:'Mumbai',    rating:5, text:'Bulk ordering for my clinic is seamless. The surgical blades and gloves are hospital-grade. Best supplier I have found in India.',                            product:'Surgical Consumables', date:'Feb 2026' },
  { name:'Priya Nambiar',    city:'Kochi',     rating:4, text:'The facial cupping set transformed my beauty practice. Clients see visible results after just one session. Silicone quality is superb.',                       product:'Facial Cup Set of 7', date:'Jan 2026' },
  { name:'Dr. Zainab Khan',  city:'Delhi',     rating:5, text:'As a certified hijama practitioner, product quality is non-negotiable. Detoxy\'s Premium Cups are the best I\'ve used. Five stars easily.',                   product:'Premium Cups',       date:'Feb 2026' },
];

// ── Coupons ───────────────────────────────────────────────────
const COUPONS = {
  'HIJAMA10': { type:'percent', value:10, min:500,  desc:'10% off on orders above ₹500' },
  'FIRST15':  { type:'percent', value:15, min:0,    desc:'15% off your first order' },
  'FLAT100':  { type:'flat',    value:100,min:800,  desc:'₹100 off on orders above ₹800' },
  'CLINIC20': { type:'percent', value:20, min:2000, desc:'20% off clinic bulk orders above ₹2000' },
  'SAVE50':   { type:'flat',    value:50, min:400,  desc:'₹50 off on orders above ₹400' },
};
function applyCoupon(code, cartTotal) {
  if (!code) return { valid:false, error:'Please enter a coupon code.' };
  const c = COUPONS[code.toUpperCase().trim()];
  if (!c) return { valid:false, error:'Invalid coupon code.' };
  if (cartTotal < c.min) return { valid:false, error:`Minimum order ₹${c.min} required.` };
  const discount = c.type==='percent' ? Math.round(cartTotal * c.value/100) : c.value;
  return { valid:true, code:code.toUpperCase().trim(), discount, desc:c.desc };
}

// ── Live Product Loader ───────────────────────────────────────
// ── Google Apps Script API URL ───────────────────────────────
// Connected to: Detoxy Hijama Google Sheets backend
// To change: replace the URL below and redeploy
var HARDCODED_URL = 'https://script.google.com/macros/s/AKfycbxWpABioAc3SEa_nLY5LXWb9QlTBT9u_GiznMXIb_jdlukEmNpcOwNvvNreL6HuaQAUxA/exec';

(function () {
  // Priority: hardcoded URL → window global → localStorage (admin's browser only)
  var apiUrl = '';
  try {
    apiUrl = HARDCODED_URL ||
             window.DH_SHEETS_URL ||
             localStorage.getItem('detoxy_sheets_url') || '';
  } catch(e) {}
  if (!apiUrl) {
    // No API URL — using hardcoded data. Show notice in console only.
    if (typeof console !== 'undefined') {
      console.warn(
        '[Detoxy Hijama] No API URL configured.\n' +
        'Products are showing from hardcoded data.\n' +
        'To connect live database:\n' +
        '1. Deploy Google Apps Script\n' +
        '2. Admin Panel → Settings → paste URL → Save\n' +
        '3. Copy the line shown and add to assets/js/shared.js\n' +
        '   var HARDCODED_URL = \'https://script.google.com/macros/s/YOUR_ID/exec\';'
      );
    }
    return;
  }
  window.DH_API_URL = apiUrl;

  function _mergeProduct(lP) {
    var idx = PRODUCTS.findIndex(function(p){ return p.id===lP.id; });

    // ── Normalise images: ensure leading slash, parse if JSON string ──────────
    var _imgs = (function(){
      var raw = lP.images;
      if (typeof raw === 'string') { try { raw = JSON.parse(raw); } catch(e) { raw = raw ? [raw] : []; } }
      if (!Array.isArray(raw) || !raw.length) {
        // Fallback to individual image columns
        raw = [lP.image,lP.image1,lP.image2,lP.image3,lP.image4,lP.image5,lP.image6].filter(Boolean);
      }
      // Ensure leading slash for relative paths
      return raw.map(function(p){
        if (!p) return '';
        p = String(p).trim();
        if (p.startsWith('http') || p.startsWith('/')) return p;
        return '/' + p;
      }).filter(Boolean);
    })();

    // ── Parse JSON fields safely ──────────────────────────────────────────────
    var _feats = (function(f){
      if (Array.isArray(f)) return f;
      if (typeof f === 'string' && f) { try { return JSON.parse(f); } catch(e) { return []; } }
      return [];
    })(lP.features);

    var _specs = (function(s){
      if (s && typeof s === 'object' && !Array.isArray(s)) return s;
      if (typeof s === 'string' && s) { try { return JSON.parse(s); } catch(e) { return {}; } }
      return {};
    })(lP.specs);

    var _variants = (function(v){
      if (Array.isArray(v)) return v;
      if (typeof v === 'string' && v) { try { return JSON.parse(v); } catch(e) { return []; } }
      return [];
    })(lP.variants);

    var _variantStock = (function(vs){
      if (vs && typeof vs === 'object' && !Array.isArray(vs)) return vs;
      if (typeof vs === 'string' && vs) { try { return JSON.parse(vs); } catch(e) { return {}; } }
      return {};
    })(lP.variantStock);

    var _tags = (function(t){
      if (Array.isArray(t)) return t;
      if (typeof t === 'string' && t) { try { return JSON.parse(t); } catch(e) { return t.split(',').map(function(x){return x.trim();}).filter(Boolean); } }
      return [];
    })(lP.tags);

    // ── Derive isBestseller/isFeatured from badge OR explicit fields ──────────
    // GAS schema has no isBestseller/isFeatured columns — derive from badge
    var _badge  = String(lP.badge || '').trim();
    var _isBestseller = !!(lP.isBestseller === true || lP.isBestseller === 'true' ||
      _badge.toLowerCase().includes('best seller') || _badge.toLowerCase().includes('bestseller') ||
      _badge.toLowerCase().includes('top rated'));
    var _isFeatured   = !!(lP.isFeatured === true || lP.isFeatured === 'true' ||
      _badge.toLowerCase().includes('featured') || _badge.toLowerCase().includes('new') ||
      _badge.toLowerCase().includes('trending') || _badge.toLowerCase().includes('popular'));

    var merged = {
      id:           lP.id,
      slug:         lP.slug || lP.id,
      name:         lP.title || lP.name || '',
      category:     lP.category || '',
      categoryLabel:lP.categoryLabel || '',
      price:        Number(lP.price)   || 0,
      mrp:          Number(lP.mrp)     || 0,
      stock:        Number(lP.stock)   || 0,
      rating:       Number(lP.rating)  || 0,
      reviews:      Number(lP.reviews) || 0,
      badge:        _badge || null,
      badgeType:    lP.badgeType || '',
      shortDesc:    lP.shortDesc    || '',
      description:  lP.description  || '',
      youtube:      lP.youtube      || '',
      features:     _feats,
      specs:        _specs,
      images:       _imgs,
      variants:     _variants,
      variantLabel: lP.variantLabel || '',
      variantStock: _variantStock,
      tags:         _tags,
      isFeatured:   _isFeatured,
      isBestseller: _isBestseller
    };

    if (idx > -1) {
      PRODUCTS[idx] = merged;
    } else if (!lP.hidden || lP.hidden === 'false' || lP.hidden === false) {
      PRODUCTS.push(merged);
    }
  }

  var fetchProducts = function(retry) {
    retry = retry || 0;

    // ── Cache-first: load session cache immediately so UI is never empty ──
    if (retry === 0) {
      try {
        var cached = sessionStorage.getItem('dh_products_cache');
        if (cached) {
          var cp = JSON.parse(cached);
          if (cp && cp.length) { cp.forEach(_mergeProduct); document.dispatchEvent(new CustomEvent('productsUpdated')); }
        }
      } catch(e) {}
    }

    // ── Use DHFetch if available (circuit breaker + exponential backoff) ──
    if (typeof DHMonitor !== 'undefined' && DHMonitor.fetch) {
      DHMonitor.fetch.request(apiUrl + '?action=getProducts', { timeout: 15000 }, 2)
        .then(function(d) {
          if (!d.products || !d.products.length) {
            if (typeof console !== 'undefined') console.warn('[Detoxy] DB returned 0 products. Run SETUP_EVERYTHING() in Google Apps Script.');
            document.dispatchEvent(new CustomEvent('productsUpdated')); // still render hardcoded
            return;
          }
          d.products.forEach(_mergeProduct);
          try { sessionStorage.setItem('dh_products_cache', JSON.stringify(d.products)); } catch(e) {}
          document.dispatchEvent(new CustomEvent('productsUpdated'));
        })
        .catch(function() {
          // Circuit open or retries exhausted — cache already loaded above
        });
      return;
    }

    // ── Fallback: direct fetch ─────────────────────────────────────────────
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var tid  = ctrl ? setTimeout(function(){ ctrl.abort(); }, 15000) : null;
    var opts = { redirect: 'follow', mode: 'cors' };
    if (ctrl) opts.signal = ctrl.signal;

    fetch(apiUrl + '?action=getProducts', opts)
      .then(function(r){
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function(text){
        var clean = text.replace(/^\uFEFF/, '').trim();
        if (clean.charAt(0) === '<') {
          // GAS returned HTML — deployment not set to "Anyone" or URL is wrong
          // Show helpful console message and retry (not a network failure)
          if (typeof console !== 'undefined') console.warn('[Detoxy] GAS returned HTML. Check: Deploy > Manage > Edit > Who has access = Anyone');
          throw new Error('GAS returned HTML — set Web App access to Anyone');
        }
        var d; try { d = JSON.parse(clean); } catch(e) { throw new Error('JSON parse failed'); }
        if (!d || !d.products || !d.products.length) {
          if (typeof console !== 'undefined') console.warn('[Detoxy] DB returned 0 products. Run SETUP_EVERYTHING() in Google Apps Script to seed the Products sheet.');
          document.dispatchEvent(new CustomEvent('productsUpdated')); // still render hardcoded
          return;
        }
        d.products.forEach(_mergeProduct);
        try { sessionStorage.setItem('dh_products_cache', JSON.stringify(d.products)); } catch(e) {}
        document.dispatchEvent(new CustomEvent('productsUpdated'));
      })
      .catch(function(err){
        if (err.name === 'AbortError') return;
        var delays = [0, 3000, 8000, 15000];
        if (retry < 3) setTimeout(function(){ fetchProducts(retry + 1); }, delays[retry + 1] || 8000);
        // Cache already applied on retry===0, UI is never blank
      })
      .finally(function(){ if (tid) clearTimeout(tid); });
  };
  // Start immediately — products needed ASAP
  setTimeout(fetchProducts, 50);

  // Also expose a manual trigger so pages can call DH.fetchProducts() after setting URL
  window.DH = window.DH || {};
  window.DH.fetchProducts = function() {
    try {
      var newUrl = HARDCODED_URL || window.DH_SHEETS_URL || localStorage.getItem('detoxy_sheets_url') || '';
      if (newUrl && newUrl !== apiUrl) { apiUrl = newUrl; window.DH_API_URL = newUrl; }
    } catch(e) {}
    if (apiUrl) fetchProducts(0);
  };
}());



// ── Cart ──────────────────────────────────────────────────────
const Cart = {
  get() { try{return JSON.parse(localStorage.getItem('dh_cart')||'[]');}catch{return[];} },
  save(items) { localStorage.setItem('dh_cart',JSON.stringify(items)); Cart.updateUI(); },
  add(productIdOrObj, qty=1, size=null) {
    var isObj = typeof productIdOrObj==='object'&&productIdOrObj!==null;
    var productId = isObj ? productIdOrObj.id    : productIdOrObj;
    var itemSize  = isObj ? (productIdOrObj.size||null) : (size||null);
    var itemQty   = isObj ? (productIdOrObj.qty||qty)   : qty;
    // ── Stock guard ──────────────────────────────────────────
    const p = PRODUCTS.find(p=>p.id===productId||productId.startsWith(p.id+'-'));
    if(p && p.stock===0){
      showToast('Sorry — this item is currently out of stock.','error');
      return;
    }
    const items = Cart.get();
    const idx = items.findIndex(i=>i.id===productId&&(i.size||null)===(itemSize||null));
    if(idx>-1){
      var newQty = items[idx].qty+itemQty;
      if(p && p.stock>0 && newQty>p.stock){
        showToast('Only '+p.stock+' units available.','error'); return;
      }
      items[idx].qty = Math.min(newQty, 20);
    } else {
      var nm    = isObj ? productIdOrObj.name  : (p?p.name:productId);
      var price = isObj ? productIdOrObj.price : (p?p.price:0);
      var image = isObj ? productIdOrObj.image : _imgSrc(p&&p.images[0]);
      items.push({id:productId,qty:itemQty,size:itemSize,name:nm,price,image});
    }
    Cart.save(items);
    showToast((itemSize?itemSize+' — ':'')+'Added to cart ✓','success');
    openMiniCart();
  },
  remove(productId) { Cart.save(Cart.get().filter(i=>i.id!==productId)); },
  updateQty(productId,qty) {
    const items=Cart.get();
    const idx=items.findIndex(i=>i.id===productId);
    if(idx>-1){ if(qty<1){items.splice(idx,1);}else{items[idx].qty=Math.min(qty,20);} }
    Cart.save(items);
  },
  count()  { return Cart.get().reduce((s,i)=>s+(Number(i.qty)||1),0); },
  total()  {
    return Cart.get().reduce((s,i)=>{
      if(i.price) return s+(i.price*i.qty);
      const p=PRODUCTS.find(p=>p.id===i.id||i.id.startsWith(p.id+'-'));
      return s+(p?p.price*i.qty:0);
    },0);
  },
  clear()  { Cart.save([]); },
  updateUI() {
    const count=Cart.count(), total=Cart.total();
    document.querySelectorAll('.nav-cart-count').forEach(el=>{
      el.textContent=count; el.classList.toggle('show',count>0);
    });
    // Sticky cart button
    const sBtn=document.querySelector('.sticky-cart-btn');
    if(sBtn){
      sBtn.classList.toggle('visible',count>0);
      const sc=sBtn.querySelector('.sc-count'); if(sc) sc.textContent=count;
      const st=sBtn.querySelector('.sc-total'); if(st) st.textContent='₹'+total.toLocaleString('en-IN');
    }
    Cart._renderMiniCartItems();
  },
  _renderMiniCartItems() {
    const el=document.getElementById('miniCartItems'); if(!el) return;
    const items=Cart.get();
    if(!items.length){
      el.innerHTML='<div class="mc-empty"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;color:var(--muted);margin:0 auto 12px;display:block"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg><p>Your cart is empty</p><a href="/products.html" class="btn btn-primary btn-sm" style="margin-top:12px">Shop Now</a></div>';
      return;
    }
    el.innerHTML = items.map(i=>`
      <div class="mc-item">
        <img src="${_imgSrc(i.image)}" alt="${escapeHtml(i.name)}" onerror="this.src='/assets/images/placeholder.svg'">
        <div class="mc-item-info">
          <div class="mc-item-name">${escapeHtml(i.name)}${i.size?'<span class="mc-item-variant"> — '+escapeHtml(i.size)+'</span>':''}</div>
          <div class="mc-item-price">${fmtINR(i.price*i.qty)} <span style="color:var(--muted);font-size:.75rem">×${i.qty}</span></div>
        </div>
        <button class="mc-item-remove" onclick="Cart.remove('${escapeHtml(i.id)}');Cart.updateUI()" aria-label="Remove">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>`).join('');
    const tot=document.getElementById('mcTotal');
    if(tot) tot.textContent='₹'+Cart.total().toLocaleString('en-IN');
  }
};

// ── Wishlist ──────────────────────────────────────────────────
const Wishlist = {
  get()    { try{return JSON.parse(localStorage.getItem('dh_wishlist')||'[]');}catch{return[];} },
  save(ids){ localStorage.setItem('dh_wishlist',JSON.stringify(ids)); Wishlist.updateUI(); },
  toggle(id){
    const ids=Wishlist.get(), idx=ids.indexOf(id);
    if(idx>-1){ids.splice(idx,1); showToast('Removed from wishlist','default');}
    else{ids.push(id); showToast('Added to wishlist ♥','success');}
    Wishlist.save(ids); return idx===-1;
  },
  has(id)  { return Wishlist.get().includes(id); },
  count()  { return Wishlist.get().length; },
  updateUI(){
    const count=Wishlist.count();
    document.querySelectorAll('.nav-wl-count').forEach(el=>{
      el.textContent=count; el.classList.toggle('show',count>0);
    });
    document.querySelectorAll('[data-wl-id]').forEach(btn=>{
      const id=btn.dataset.wlId, active=Wishlist.has(id);
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-label',active?'Remove from wishlist':'Add to wishlist');
    });
  }
};

// ── Recently Viewed ───────────────────────────────────────────
const RecentlyViewed = {
  add(id){
    var ids=this.getIds().filter(x=>x!==id);
    ids.unshift(id); ids=ids.slice(0,8);
    try{localStorage.setItem('dh_rv',JSON.stringify(ids));}catch(e){}
  },
  getIds(){ try{return JSON.parse(localStorage.getItem('dh_rv')||'[]');}catch{return[];} },
  getProducts(){ return this.getIds().map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean); }
};

// ── Newsletter ────────────────────────────────────────────────
function subscribeNewsletter(email, source){
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return {success:false,error:'Please enter a valid email address.'};
  try{
    var subs=JSON.parse(localStorage.getItem('dh_nl_subs')||'[]');
    if(subs.includes(email)) return {success:false,error:'You are already subscribed!'};
    subs.push(email); localStorage.setItem('dh_nl_subs',JSON.stringify(subs));
  }catch(e){}
  if(window.DH_API_URL){
    fetch(window.DH_API_URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},
      body:JSON.stringify({action:'newsletter',email,source:source||'website'}),redirect:'follow'})
      .catch(()=>{});
  }
  return {success:true};
}

// ── Countdown Timer ───────────────────────────────────────────
function initCountdowns(){
  document.querySelectorAll('[data-countdown]').forEach(function(el){
    var end=new Date(el.dataset.countdown).getTime();
    function tick(){
      var diff=Math.max(0,end-Date.now());
      var h=Math.floor(diff/3600000), m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
      el.innerHTML=
        '<span class="cd-block"><span class="cd-num">'+String(h).padStart(2,'0')+'</span><span class="cd-lbl">hrs</span></span>'+
        '<span class="cd-sep">:</span>'+
        '<span class="cd-block"><span class="cd-num">'+String(m).padStart(2,'0')+'</span><span class="cd-lbl">min</span></span>'+
        '<span class="cd-sep">:</span>'+
        '<span class="cd-block"><span class="cd-num">'+String(s).padStart(2,'0')+'</span><span class="cd-lbl">sec</span></span>';
      if(diff>0) setTimeout(tick,1000);
    }
    tick();
  });
}

// ── Abandoned Cart Recovery ───────────────────────────────────
(function(){
  var shown=false;
  // Suppress abandoned cart on transaction pages
  var _suppressPages = ['/cart.html','/checkout.html','/confirmation.html','/login.html','/account.html'];
  var _onSuppressPage = _suppressPages.some(function(p){ return window.location.pathname.endsWith(p); });
  document.addEventListener('mouseleave',function(e){
    if(e.clientY<=0&&!shown&&Cart.count()>0&&!_onSuppressPage){
      shown=true; _showAbandonedModal();
    }
  });
  function _showAbandonedModal(){
    if(document.getElementById('abandonedModal')) return;
    var count=Cart.count(), total=Cart.total();
    var m=document.createElement('div');
    m.id='abandonedModal'; m.className='overlay-backdrop';
    m.innerHTML=`
      <div class="overlay-box" style="max-width:400px;text-align:center">
        <button onclick="document.getElementById('abandonedModal').remove()" class="overlay-close" aria-label="Close">×</button>
        <div style="font-size:2.5rem;margin-bottom:12px">🛒</div>
        <h3 style="font-family:var(--font-serif);font-size:1.4rem;color:var(--dark);margin-bottom:8px">Don't forget your cart!</h3>
        <p style="color:var(--muted);font-size:.88rem;margin-bottom:20px">You have <strong>${count} item${count>1?'s':''}</strong> worth <strong>₹${total.toLocaleString('en-IN')}</strong> waiting.</p>
        <a href="/cart.html" class="btn btn-primary btn-block" onclick="document.getElementById('abandonedModal').remove()">Complete Your Order →</a>
        <button onclick="document.getElementById('abandonedModal').remove()" style="margin-top:10px;background:none;border:none;color:var(--muted);font-size:.82rem;cursor:pointer;display:block;width:100%">Continue browsing</button>
      </div>`;
    document.body.appendChild(m);
    setTimeout(()=>m.classList.add('open'),50);
  }
}());

// ── Quick View ────────────────────────────────────────────────
function openQuickView(productId){
  const p=PRODUCTS.find(x=>x.id===productId); if(!p) return;
  let modal=document.getElementById('quickViewModal');
  if(!modal){
    modal=document.createElement('div'); modal.id='quickViewModal'; modal.className='overlay-backdrop';
    modal.innerHTML='<div class="overlay-box qv-box"><button class="overlay-close" onclick="document.getElementById(\'quickViewModal\').classList.remove(\'open\')" aria-label="Close">×</button><div id="qvContent"></div></div>';
    modal.addEventListener('click',function(e){if(e.target===modal)modal.classList.remove('open');});
    document.body.appendChild(modal);
  }
  const disc=discountPct(p.price,p.mrp);
  const img=p.images&&p.images[0]?`<div class="qv-img"><img src="${_imgSrc(p.images[0])}" alt="${escapeHtml(p.name)}" onerror="this.src='/assets/images/placeholder.svg'"></div>`:'';
  const feats=(p.features||[]).slice(0,5).map(f=>`<li><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>${escapeHtml(f)}</li>`).join('');
  document.getElementById('qvContent').innerHTML=`
    <div class="qv-grid">
      ${img}
      <div class="qv-info">
        <div style="font-size:.72rem;font-weight:700;color:var(--t);text-transform:uppercase;letter-spacing:.07em;margin-bottom:6px">${p.categoryLabel}</div>
        <h2 style="font-family:var(--font-serif);font-size:1.45rem;font-weight:700;color:var(--dark);margin-bottom:8px;line-height:1.3">${escapeHtml(p.name)}</h2>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">${renderStars(p.rating)}<span style="font-size:.78rem;color:var(--muted)">(${p.reviews} reviews)</span></div>
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:12px">
          <span style="font-size:1.6rem;font-weight:700;color:var(--dark);font-family:var(--font-serif)">${fmtINR(p.price)}</span>
          ${p.mrp>p.price?`<span style="font-size:.95rem;color:var(--muted);text-decoration:line-through">${fmtINR(p.mrp)}</span><span style="background:#d1fae5;color:#065f46;font-size:.78rem;font-weight:700;padding:2px 8px;border-radius:4px">${disc}% off</span>`:''}
        </div>
        <p style="font-size:.88rem;color:var(--muted);line-height:1.75;margin-bottom:14px">${escapeHtml(p.shortDesc)}</p>
        <ul class="qv-feats">${feats}</ul>
        <div class="qv-actions">
          <a href="/products/${p.slug}.html" class="btn btn-primary">View Full Details</a>
          <button class="btn btn-outline" onclick="Cart.add('${p.id}');document.getElementById('quickViewModal').classList.remove('open')">Add to Cart</button>
        </div>
      </div>
    </div>`;
  modal.classList.add('open');
}

// ── Toast (queued — max 3 visible, auto-stack) ────────────────
var _toastQueue=[], _toastActive=0, _TOAST_MAX=3;
function showToast(msg, type, duration){
  type=type||'default'; duration=duration||3000;
  _toastQueue.push({msg:msg,type:type,duration:duration});
  _processToastQueue();
}
function _processToastQueue(){
  if(_toastActive>=_TOAST_MAX||!_toastQueue.length) return;
  var item=_toastQueue.shift();
  _toastActive++;
  var c=document.getElementById('toast-container');
  if(!c){ c=document.createElement('div'); c.id='toast-container'; document.body.appendChild(c); }
  var ICONS={
    success:'<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>',
    error:  '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>',
    default:'<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01"/></svg>'
  };
  var t=document.createElement('div'); t.className='toast toast-'+item.type;
  t.innerHTML=ICONS[item.type]+'<span>'+escapeHtml(item.msg)+'</span>';
  // Click to dismiss
  t.addEventListener('click',function(){ clearTimeout(t._timer); _dismissToast(t); });
  c.appendChild(t);
  requestAnimationFrame(function(){ t.classList.add('show'); });
  t._timer=setTimeout(function(){ _dismissToast(t); }, item.duration);
}
function _dismissToast(t){
  t.classList.remove('show');
  setTimeout(function(){ if(t.parentNode)t.remove(); _toastActive=Math.max(0,_toastActive-1); _processToastQueue(); },300);
}

// ── Utilities ─────────────────────────────────────────────────
function renderStars(rating, showNum=true){
  const full=Math.floor(rating), half=rating%1>=0.5;
  let s='';
  for(let i=0;i<5;i++){
    if(i<full)        s+='<span class="star filled">★</span>';
    else if(i===full&&half) s+='<span class="star half">★</span>';
    else              s+='<span class="star empty">★</span>';
  }
  return `<span class="stars">${s}</span>${showNum?`<span class="stars-num">${rating}</span>`:''}`;
}
function fmtINR(n){ return '₹'+Number(n).toLocaleString('en-IN'); }
function escapeHtml(str){
  if(str==null) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function discountPct(price,mrp){ return mrp>price?Math.round((mrp-price)/mrp*100):0; }

// ── Image path helper ────────────────────────────────────────
// Ensures image paths always have a leading slash, handles both
// 'assets/...' (hardcoded) and '/assets/...' (DB-normalised) safely
function _imgSrc(path) {
  if (!path) return '/assets/images/placeholder.svg';
  var s = String(path).trim();
  if (s.startsWith('http') || s.startsWith('/')) return s;
  return '/' + s;
}

// ── Product Card ──────────────────────────────────────────────
function renderProductCard(p, idx){
  const disc=discountPct(p.price,p.mrp);
  const eager=(idx!==undefined&&idx<4);
  const img=_imgSrc(p.images&&p.images[0]);
  const wlActive=Wishlist.has(p.id);
  const hasVariants=(p.variants&&p.variants.length>0);
  const isOOS=(p.stock===0);
  const isLowStock=(p.stock>0&&p.stock<=5);
  const schemaAvail=isOOS?'https://schema.org/OutOfStock':'https://schema.org/InStock';
  const addBtnHtml=isOOS
    ?`<button class="btn btn-outline btn-sm" style="flex:1;opacity:.5" disabled>Out of Stock</button>`
    :hasVariants
      ?`<a href="/products/${p.slug}.html" class="btn btn-outline btn-sm" style="flex:1">Select Size</a>`
      :`<button class="btn btn-outline btn-sm" style="flex:1" onclick="Cart.add('${p.id}')">Add to Cart</button>`;
  return `
<article class="product-card animate-in${isOOS?' pc-oos-card':''}" itemscope itemtype="https://schema.org/Product">
  <div class="pc-img-wrap">
    <a href="/products/${p.slug}.html" tabindex="-1" aria-hidden="true">
      <img src="${img}" alt="${escapeHtml(p.name)}" loading="${eager?'eager':'lazy'}" decoding="async" itemprop="image" onerror="this.src='/assets/images/placeholder.svg'">
    </a>
    ${isOOS?`<div class="pc-oos"><span>Out of Stock</span></div>`:''}
    ${!isOOS&&p.badge?`<span class="pc-badge badge badge-${p.badgeType||'teal'}">${p.badge}</span>`:''}
    ${!isOOS&&disc>0?`<span class="pc-disc">-${disc}%</span>`:''}
    <button class="pc-wl ${wlActive?'active':''}" data-wl-id="${p.id}" onclick="Wishlist.toggle('${p.id}');Wishlist.updateUI()" aria-label="${wlActive?'Remove from wishlist':'Add to wishlist'}">
      <svg fill="${wlActive?'currentColor':'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
    </button>
    ${!isOOS?`<button class="pc-qv" onclick="openQuickView('${p.id}')" aria-label="Quick view">Quick View</button>`:''}
  </div>
  <div class="pc-body">
    <span class="pc-cat" itemprop="category">${p.categoryLabel}</span>
    <h3 class="pc-name" itemprop="name"><a href="/products/${p.slug}.html">${escapeHtml(p.name)}</a></h3>
    <div class="pc-rating">${renderStars(p.rating,false)}<span class="pc-rating-score">${p.rating}</span><span class="pc-rating-count">(${p.reviews})</span></div>
    <div class="pc-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
      <meta itemprop="availability" content="${schemaAvail}"/>
      <meta itemprop="priceCurrency" content="INR"/>
      <span class="pc-price-now" itemprop="price" content="${p.price}">${fmtINR(p.price)}</span>
      ${p.mrp>p.price?`<span class="pc-price-mrp">${fmtINR(p.mrp)}</span>`:''}
    </div>
    ${isLowStock?`<p class="pc-low-stock">⚡ Only ${p.stock} left in stock</p>`:''}
  </div>
  <div class="pc-actions">
    ${!isOOS?`<a href="/checkout.html?buy=${p.id}" class="btn btn-primary btn-sm" style="flex:1">Buy Now</a>`:''}
    ${addBtnHtml}
  </div>
</article>`;
}

// ── Mini Cart ─────────────────────────────────────────────────
function openMiniCart(){
  const mc=document.getElementById('miniCart'); if(!mc) return;
  Cart._renderMiniCartItems(); Cart.updateUI();
  mc.classList.add('open'); document.body.classList.add('mc-lock');
  const cnt=document.getElementById('mcItemCount');
  if(cnt) cnt.textContent='('+Cart.count()+' items)';
}
function closeMiniCart(){
  const mc=document.getElementById('miniCart'); if(!mc) return;
  mc.classList.remove('open'); document.body.classList.remove('mc-lock');
}
function toggleMiniCart(){
  const mc=document.getElementById('miniCart');
  if(!mc){window.location.href='/cart.html'; return;}
  mc.classList.contains('open')?closeMiniCart():openMiniCart();
}

// ── Scroll to Top ─────────────────────────────────────────────
function initScrollTop(){
  const btn=document.createElement('button');
  btn.className='scroll-top-btn'; btn.setAttribute('aria-label','Scroll to top');
  btn.innerHTML='<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>';
  document.body.appendChild(btn);
  window.addEventListener('scroll',function(){btn.classList.toggle('visible',window.scrollY>400);},{passive:true});
  btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
}

// ── Animate on Scroll ─────────────────────────────────────────
function initAnimateOnScroll(){
  if(typeof IntersectionObserver==='undefined'){
    document.querySelectorAll('.animate-in').forEach(function(el){ el.classList.add('visible'); });
    return;
  }
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  },{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
  // Observe all hidden animate-in elements
  document.querySelectorAll('.animate-in:not(.visible)').forEach(function(el){ obs.observe(el); });
  // Immediately make visible any element already in viewport (fixes above-fold products)
  setTimeout(function(){
    document.querySelectorAll('.animate-in:not(.visible)').forEach(function(el){
      var rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight && rect.bottom > 0){ el.classList.add('visible'); }
    });
  }, 50);
  // Re-observe when new cards are injected (product grid re-renders)
  if(typeof MutationObserver!=='undefined'){
    var mo=new MutationObserver(function(muts){
      muts.forEach(function(m){
        m.addedNodes.forEach(function(n){
          if(n.nodeType!==1) return;
          if(n.classList&&n.classList.contains('animate-in')&&!n.classList.contains('visible')){
            obs.observe(n);
          }
          n.querySelectorAll&&n.querySelectorAll('.animate-in:not(.visible)').forEach(function(el){ obs.observe(el); });
        });
      });
    });
    var grid=document.getElementById('productsGrid')||document.getElementById('featuredGrid')||document.querySelector('.products-grid');
    if(grid) mo.observe(grid,{childList:true,subtree:true});
  }
}

// ── PWA Install Prompt ────────────────────────────────────────
(function(){
  var _installEvent=null;
  window.addEventListener('beforeinstallprompt',function(e){
    e.preventDefault(); _installEvent=e;
    // Show install bar after 30s if not dismissed
    setTimeout(function(){
      try{ if(localStorage.getItem('dh_pwa_dismissed')) return; }catch(e){}
      var bar=document.getElementById('pwa-install-bar');
      if(bar) bar.classList.add('show');
    },30000);
  });
  window.addEventListener('appinstalled',function(){
    try{ localStorage.setItem('dh_pwa_dismissed','1'); }catch(e){}
    var bar=document.getElementById('pwa-install-bar');
    if(bar) bar.classList.remove('show');
  });
  window.dhInstallPWA=function(){
    if(!_installEvent) return;
    _installEvent.prompt();
    _installEvent.userChoice.then(function(r){
      if(r.outcome==='accepted'){
        try{ localStorage.setItem('dh_pwa_dismissed','1'); }catch(e){}
      }
      _installEvent=null;
      var bar=document.getElementById('pwa-install-bar');
      if(bar) bar.classList.remove('show');
    });
  };
  window.dhDismissPWA=function(){
    try{ localStorage.setItem('dh_pwa_dismissed','1'); }catch(e){}
    var bar=document.getElementById('pwa-install-bar');
    if(bar) bar.classList.remove('show');
  };
}());


// ── Header ────────────────────────────────────────────────────
function renderHeader(activePage=''){
  const cats=[
    {label:'Cupping Sets',   href:'/products.html?cat=cups',        count:5},
    {label:'Starter Kits',   href:'/products.html?cat=kits',        count:2},
    {label:'Electric',       href:'/products.html?cat=electric',    count:1},
    {label:'Facial Cups',    href:'/products.html?cat=facial',      count:2},
    {label:'Consumables',    href:'/products.html?cat=consumables', count:4},
  ];
  const bestsellers=PRODUCTS.filter(p=>p.isBestseller).slice(0,4);
  const featured=PRODUCTS.filter(p=>p.isFeatured).slice(0,3);
  return `
<!-- Announcement Bar -->
<div class="announce-bar" id="announceBar">
  <span>🚚 Cash on Delivery available pan-India &nbsp;|&nbsp; Shipping quoted by admin within working hours</span>
  <a href="/products.html" class="announce-cta">Shop Now →</a>
  <button class="announce-close" onclick="document.getElementById('announceBar').style.display='none'" aria-label="Close">×</button>
</div>

<!-- Main Navigation -->
<header class="nav" role="banner">
  <div class="nav-inner">

    <!-- Logo -->
    <a href="/index.html" class="nav-logo" aria-label="Detoxy Hijama Home">
      <img src="/assets/images/logo.png" alt="Detoxy Hijama" class="nav-logo-img" width="44" height="44" loading="eager"/>
      <div>
        <div class="nav-logo-name">Detoxy Hijama</div>
      </div>
    </a>

    <!-- Search -->
    <div class="nav-search" role="search" aria-label="Search products">
      <input type="search" id="navSearch" placeholder="Search cups, kits, consumables..." autocomplete="off" aria-label="Search products" aria-expanded="false" aria-autocomplete="list"/>
      <button class="nav-search-btn" aria-label="Search">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      </button>
      <div id="searchResults" class="nav-search-results" role="listbox"></div>
    </div>

    <!-- Nav Links + Mega Menu -->
    <ul class="nav-links" role="list">
      <li><a href="/index.html" class="${activePage==='Home'?'active':''}">Home</a></li>
      <li class="has-mega">
        <a href="/products.html" class="${activePage==='All Products'||activePage==='Shop'?'active':''}">
          Shop <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;display:inline-block;margin-left:2px"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </a>
        <div class="mega-menu" role="navigation" aria-label="Shop categories">
          <div class="mega-grid">
            <div class="mega-col">
              <h4 class="mega-heading">Shop by Category</h4>
              ${cats.map(c=>`<a href="${c.href}" class="mega-link">${c.label}<span class="mega-count">${c.count}</span></a>`).join('')}
              <a href="/products.html" class="mega-link mega-link-all">All Products →</a>
            </div>
            <div class="mega-col">
              <h4 class="mega-heading">Best Sellers</h4>
              ${bestsellers.map(p=>`<a href="/products/${p.slug}.html" class="mega-link">${escapeHtml(p.name.replace('Detoxy Hijama ',''))}<span class="mega-price">${fmtINR(p.price)}</span></a>`).join('')}
            </div>
            <div class="mega-col mega-featured">
              <h4 class="mega-heading">Featured</h4>
              ${featured.map(p=>`<a href="/products/${p.slug}.html" class="mega-link">${escapeHtml(p.name.replace('Detoxy Hijama ',''))}<span class="mega-price">${fmtINR(p.price)}</span></a>`).join('')}
              <a href="/quote.html" class="mega-link" style="margin-top:10px;color:var(--c300);font-weight:700">Get Bulk Quote →</a>
            </div>
          </div>
        </div>
      </li>
      <li><a href="/blogs.html" class="${activePage==='Blogs'?'active':''}">Blog</a></li>
      <li><a href="/track-order.html" class="${activePage==='Track Your Order'?'active':''}">Track Order</a></li>
      <li><a href="/quote.html" class="${activePage==='Bulk Quote'?'active':''}">Bulk Quote</a></li>
    </ul>

    <!-- Action Icons -->
    <div class="nav-actions">
      <a href="/wishlist.html" class="nav-action-btn nav-wl-btn" aria-label="Wishlist" style="position:relative">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        <span class="nav-wl-count" aria-live="polite"></span>
      </a>
      <button class="nav-action-btn nav-cart-btn" aria-label="Shopping cart" onclick="toggleMiniCart()">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
        <span class="nav-cart-count" aria-live="polite"></span>
      </button>
      <a href="/account.html" class="nav-action-btn" aria-label="My account" id="navAccountLink" title="My Account">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

  </div>
</header>

<!-- Mini Cart Drawer -->
<div class="mc-overlay" onclick="closeMiniCart()"></div>
<div class="mini-cart" id="miniCart" role="dialog" aria-label="Shopping cart" aria-modal="true">
  <div class="mc-head">
    <span>Cart <span class="mc-head-count" id="mcItemCount"></span></span>
    <button class="mc-close" onclick="closeMiniCart()" aria-label="Close cart">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  </div>
  <div class="mc-shipping-bar" style="background:var(--cream);padding:8px 16px;border-bottom:1px solid var(--border)">
    <div class="fs-msg" style="font-size:.74rem;color:var(--muted);font-weight:500">📦 Shipping will be quoted by our team after you place your order</div>
  </div>
  <div class="mc-items" id="miniCartItems"></div>
  <div class="mc-foot">
    <div class="mc-total-row">
      <span>Subtotal</span>
      <strong id="mcTotal">₹0</strong>
    </div>
    <a href="/cart.html" class="btn btn-primary btn-block" onclick="closeMiniCart()">View Cart & Checkout →</a>
    <a href="/products.html" class="btn btn-outline btn-block" style="margin-top:8px" onclick="closeMiniCart()">Continue Shopping</a>
  </div>
</div>

<!-- Sticky Cart Button -->
<a href="/cart.html" class="sticky-cart-btn" aria-label="View cart">
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4"/></svg>
  Cart <span class="sc-count">0</span>
  <span class="sc-total">₹0</span>
</a>

<!-- Mobile Navigation -->
<nav class="nav-mobile" id="navMobile" role="navigation" aria-label="Mobile navigation">
  <button class="nav-mobile-close" id="navClose" aria-label="Close menu">
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
  </button>
  <a href="/index.html">Home</a>
  <a href="/products.html">All Products</a>
  <div class="nm-section">Shop by Category</div>
  <a href="/products.html?cat=cups" style="padding-left:28px">Cupping Sets</a>
  <a href="/products.html?cat=kits" style="padding-left:28px">Starter Kits</a>
  <a href="/products.html?cat=electric" style="padding-left:28px">Electric Devices</a>
  <a href="/products.html?cat=facial" style="padding-left:28px">Facial Cups</a>
  <a href="/products.html?cat=consumables" style="padding-left:28px">Consumables</a>
  <a href="/blogs.html">Blog</a>
  <a href="/track-order.html">Track Order</a>
  <a href="/quote.html">Bulk Quote</a>
  <div class="nm-section">Account</div>
  <a href="/wishlist.html">My Wishlist</a>
  <a href="/cart.html">My Cart</a>
  <a href="/account.html">My Account</a>
  <div class="nm-section">Help</div>
  <a href="/faq.html">FAQ</a>
  <a href="/about.html">About Us</a>
  <a href="/contact.html">Contact</a>
</nav>`;
}

// ── Footer ────────────────────────────────────────────────────
function renderFooter(){
  return `
<footer class="pf-footer" role="contentinfo">

  <!-- ── Main Footer Body ── -->
  <div class="pf-body">
    <div class="pf-body__inner">

      <!-- Brand Column -->
      <div class="pf-brand">
        <div class="pf-brand__logo">
          <img src="/assets/images/logo.png" alt="Detoxy Hijama" width="44" height="44" loading="lazy"/>
          <span>Detoxy Hijama</span>
        </div>
        <p class="pf-brand__desc">India's #1 manufacturer of clinical-grade hijama cupping equipment. Factory-direct pricing from Pollachi, Tamil Nadu. Serving 5,000+ clinics pan-India.</p>

        <!-- Trust pills -->
        <div class="pf-trust-pills">
          <span class="pf-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            Medical Grade
          </span>
          <span class="pf-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/></svg>
            Pan-India COD
          </span>
          <span class="pf-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"/></svg>
            7-Day Returns
          </span>
        </div>

        <!-- Contact -->
        <div class="pf-contact">
          <a href="tel:+919566596077" class="pf-contact__row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +91 95665 96077
          </a>
          <a href="mailto:detoxyhijama@gmail.com" class="pf-contact__row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            detoxyhijama@gmail.com
          </a>
          <a href="https://wa.me/919566596077" target="_blank" rel="noopener" class="pf-contact__row pf-contact__row--wa">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
          </a>
        </div>

        <!-- Social Icons -->
        <div class="pf-social">
          <a href="https://instagram.com/detoxyhijama_" target="_blank" rel="noopener" aria-label="Instagram" class="pf-social__btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://facebook.com/detoxyhijama" target="_blank" rel="noopener" aria-label="Facebook" class="pf-social__btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://youtube.com/@detoxyhijama" target="_blank" rel="noopener" aria-label="YouTube" class="pf-social__btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://t.me/detoxyhijama" target="_blank" rel="noopener" aria-label="Telegram" class="pf-social__btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
          <a href="https://wa.me/919566596077" target="_blank" rel="noopener" aria-label="WhatsApp" class="pf-social__btn pf-social__btn--wa">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>
      <!-- Link Columns -->
      <div class="pf-col">
        <h4 class="pf-col__heading">Shop</h4>
        <ul class="pf-col__list">
          <li><a href="/products.html">All Products</a></li>
          <li><a href="/products.html?cat=cups">Cupping Sets</a></li>
          <li><a href="/products.html?cat=kits">Starter Kits</a></li>
          <li><a href="/products.html?cat=electric">Electric Devices</a></li>
          <li><a href="/products.html?cat=facial">Facial Cups</a></li>
          <li><a href="/products.html?cat=consumables">Consumables</a></li>
          <li><a href="/wishlist.html">My Wishlist</a></li>
        </ul>
      </div>

      <div class="pf-col">
        <h4 class="pf-col__heading">Company</h4>
        <ul class="pf-col__list">
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/blogs.html">Hijama Blog</a></li>
          <li><a href="/quote.html">Bulk Quote</a></li>
          <li><a href="/contact.html">Contact Us</a></li>
          <li><a href="/faq.html">FAQ</a></li>
        </ul>
      </div>

      <div class="pf-col">
        <h4 class="pf-col__heading">Policies</h4>
        <ul class="pf-col__list">
          <li><a href="/shipping-policy.html">Shipping Policy</a></li>
          <li><a href="/refund-policy.html">Refund Policy</a></li>
          <li><a href="/privacy-policy.html">Privacy Policy</a></li>
          <li><a href="/terms.html">Terms &amp; Conditions</a></li>
          <li><a href="/track-order.html">Track Your Order</a></li>
        </ul>
      </div>

    </div><!-- /pf-body__inner -->
  </div><!-- /pf-body -->

  <!-- ── Footer Bottom Bar ── -->
  <div class="pf-bottom">
    <div class="pf-bottom__inner">
      <p class="pf-bottom__copy">&copy; ${new Date().getFullYear()} Detoxy Hijama. All rights reserved. Manufactured in Pollachi, Tamil Nadu, India.</p>
      <div class="pf-payment">
        <span class="pf-payment__badge">UPI</span>
        <span class="pf-payment__badge">COD</span>
        <span class="pf-payment__badge">NEFT</span>
        <span class="pf-payment__badge">Razorpay</span>
      </div>
    </div>
  </div>

</footer>
<div id="toast-container"></div>
<div id="pwa-install-bar" role="banner" aria-label="Install app">
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="flex-shrink:0;color:#57a2a0"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
  <strong>Install Detoxy Hijama</strong>
  <span style="color:rgba(255,255,255,.55);font-size:.8rem">Add to your home screen for faster access</span>
  <button id="pwa-install-btn" onclick="dhInstallPWA()">Install</button>
  <button id="pwa-dismiss-btn" onclick="dhDismissPWA()" aria-label="Dismiss">✕</button>
</div>`;
}

// ── Newsletter Submit ─────────────────────────────────────────
function handleNLSubmit(event, form){
  event.preventDefault();
  const email=form.querySelector('input[type="email"]').value.trim();
  const result=subscribeNewsletter(email,'footer');
  if(result.success){
    form.innerHTML='<p style="color:var(--success);font-weight:600;text-align:center;padding:8px">✓ Thank you for subscribing!</p>';
    showToast('Subscribed successfully!','success');
  } else { showToast(result.error,'error'); }
}

// ── Search ────────────────────────────────────────────────────
function initSearch(){
  const input=document.getElementById('navSearch');
  const results=document.getElementById('searchResults');
  if(!input||!results) return;
  let timer;
  input.addEventListener('input',()=>{
    clearTimeout(timer);
    timer=setTimeout(()=>{
      const q=input.value.trim().toLowerCase();
      if(q.length<2){ results.classList.remove('show'); return; }
      const matches=PRODUCTS.filter(p=>
        p.name.toLowerCase().includes(q)||
        p.categoryLabel.toLowerCase().includes(q)||
        p.shortDesc.toLowerCase().includes(q)||
        (p.tags||[]).some(t=>t.toLowerCase().includes(q))
      ).slice(0,8);
      if(!matches.length){ results.classList.remove('show'); return; }
      results.innerHTML=matches.map(p=>`
        <a href="/products/${p.slug}.html" class="sr-item" role="option">
          <img src="${(p.images[0]||'').startsWith('/')||(p.images[0]||'').startsWith('http')?p.images[0]||'':'\/'+(p.images[0]||'')}" alt="${escapeHtml(p.name)}" onerror="this.src='/assets/images/placeholder.svg'">
          <div>
            <div class="sr-name">${escapeHtml(p.name)}</div>
            <div class="sr-price">${fmtINR(p.price)}${p.mrp>p.price?` <s style="font-size:.72rem;color:var(--muted)">${fmtINR(p.mrp)}</s>`:''}</div>
          </div>
          ${p.badge?`<span class="badge badge-${p.badgeType||'teal'}" style="margin-left:auto;flex-shrink:0;font-size:.65rem">${p.badge}</span>`:''}
        </a>`).join('')+
        (matches.length===8?`<a href="/products.html?q=${encodeURIComponent(input.value.trim())}" class="sr-item sr-all">View all results for "${escapeHtml(input.value.trim())}" →</a>`:'');
      results.classList.add('show');
      input.setAttribute('aria-expanded','true');
    },180);
  });
  document.addEventListener('click',e=>{
    if(!input.contains(e.target)&&!results.contains(e.target)){ results.classList.remove('show'); input.setAttribute('aria-expanded','false'); }
  });
  input.addEventListener('keydown',e=>{
    if(e.key==='Escape'){results.classList.remove('show');input.blur();}
    if(e.key==='Enter'){window.location.href=`/products.html?q=${encodeURIComponent(input.value.trim())}`;}
  });
}

// ── Mobile Nav ────────────────────────────────────────────────
function initMobileNav(){
  const toggle=document.getElementById('navToggle');
  const mobile=document.getElementById('navMobile');
  const close=document.getElementById('navClose');
  if(!toggle||!mobile) return;
  const open=()=>{ mobile.classList.add('open'); toggle.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; };
  const shut=()=>{ mobile.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); document.body.style.overflow=''; };
  toggle.addEventListener('click',()=>mobile.classList.contains('open')?shut():open());
  if(close) close.addEventListener('click',shut);
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&mobile.classList.contains('open'))shut(); });
  window.addEventListener('pagehide',()=>{ document.body.style.overflow=''; });
}

// ── Auth Nav ──────────────────────────────────────────────────
function updateNavAuthLink(){
  var link=document.getElementById('navAccountLink'); if(!link) return;
  try{
    var u=JSON.parse(localStorage.getItem('dh_user')||'null');
    link.href= u&&u.id ? '/account.html' : '/login.html';
    link.title=u&&u.id ? 'My Account ('+u.name+')' : 'Sign In';
  }catch(e){}
}

/* ══════════════════════════════════════════════════════════════
   PHASE 5 — AI INTELLIGENCE SYSTEM
   • Smart search with fuzzy scoring + typo tolerance
   • Personalized "You may also like" recommendations
   • Intelligent recently-viewed with cross-sell logic
   • Smart search analytics (session-level, no PII)
   • Contextual WhatsApp helper
══════════════════════════════════════════════════════════════ */

// ── DH Intelligence Engine ────────────────────────────────────
var DHIntel = (function(){

  /* ── Fuzzy scorer: score a product against a query ── */
  function _score(p, q){
    q = q.toLowerCase().trim();
    if(!q) return 0;
    var name  = (p.name||'').toLowerCase();
    var cat   = (p.categoryLabel||'').toLowerCase();
    var desc  = (p.shortDesc||'').toLowerCase();
    var tags  = (p.tags||[]).join(' ').toLowerCase();
    var score = 0;

    // Exact name match is highest priority
    if(name === q) return 1000;
    if(name.startsWith(q)) score += 80;
    if(name.includes(q))   score += 50;
    if(cat.includes(q))    score += 30;
    if(desc.includes(q))   score += 20;
    if(tags.includes(q))   score += 25;

    // Token-level matching (handles multi-word queries)
    var tokens = q.split(/\s+/).filter(function(t){ return t.length > 1; });
    tokens.forEach(function(t){
      if(name.includes(t))  score += 12;
      if(cat.includes(t))   score += 8;
      if(tags.includes(t))  score += 10;
      if(desc.includes(t))  score += 5;
    });

    // Typo tolerance: trigram similarity for short tokens
    if(score === 0 && q.length >= 3){
      var best = _trigramSim(q, name);
      if(best > 0.45) score += Math.round(best * 40);
    }

    // Boost bestsellers and featured
    if(score > 0){
      if(p.isBestseller) score += 8;
      if(p.isFeatured)   score += 5;
      if(p.stock > 0)    score += 4; // prefer in-stock
    }
    return score;
  }

  /* Trigram similarity between two strings */
  function _trigrams(s){
    var t = {}; s = ' '+s+' ';
    for(var i=0;i<s.length-2;i++) t[s.slice(i,i+3)] = 1;
    return t;
  }
  function _trigramSim(a, b){
    var ta = _trigrams(a), tb = _trigrams(b);
    var inter = 0, union = 0;
    for(var k in ta){ if(tb[k]) inter++; union++; }
    for(var k in tb){ if(!ta[k]) union++; }
    return union === 0 ? 0 : inter / union;
  }

  /* ── Smart search: returns scored, ranked results ── */
  function smartSearch(query, limit){
    limit = limit || 8;
    if(!query || query.length < 2) return [];
    return PRODUCTS
      .map(function(p){ return { p:p, score:_score(p, query) }; })
      .filter(function(x){ return x.score > 0; })
      .sort(function(a,b){ return b.score - a.score; })
      .slice(0, limit)
      .map(function(x){ return x.p; });
  }

  /* ── Recommendation engine ───────────────────────── */
  /* Scores how related two products are */
  function _relatedness(a, b){
    if(a.id === b.id) return 0;
    var score = 0;
    if(a.category === b.category) score += 40;
    var aTags = a.tags||[], bTags = b.tags||[];
    aTags.forEach(function(t){ if(bTags.includes(t)) score += 15; });
    // Complementary pairings (consumables with cups, etc.)
    var PAIRS = {
      'cups':       ['consumables','kits'],
      'electric':   ['consumables'],
      'kits':       ['consumables','cups'],
      'facial':     ['consumables'],
      'consumables':['cups','kits','electric']
    };
    var compat = PAIRS[a.category] || [];
    if(compat.includes(b.category)) score += 20;
    // Similar price range (within 40%)
    if(a.price > 0 && Math.abs(a.price - b.price) / a.price < 0.4) score += 8;
    if(b.isBestseller) score += 6;
    if(b.isFeatured)   score += 4;
    if(b.stock > 0)    score += 5;
    return score;
  }

  function getRecommendations(productId, limit){
    limit = limit || 4;
    var base = PRODUCTS.find(function(p){ return p.id === productId; });
    if(!base) return PRODUCTS.filter(function(p){ return p.isFeatured && p.stock > 0; }).slice(0, limit);
    return PRODUCTS
      .map(function(p){ return { p:p, score:_relatedness(base, p) }; })
      .filter(function(x){ return x.score > 0; })
      .sort(function(a,b){ return b.score - a.score; })
      .slice(0, limit)
      .map(function(x){ return x.p; });
  }

  /* ── Cart-based cross-sells ──────────────────────── */
  function getCartCrossSells(limit){
    limit = limit || 3;
    var cartIds = Cart.get().map(function(i){ return i.id; });
    if(!cartIds.length) return [];
    // Score all non-cart products based on relatedness to cart
    var scores = {};
    PRODUCTS.forEach(function(p){
      if(cartIds.includes(p.id) || p.stock === 0) return;
      var best = 0;
      cartIds.forEach(function(id){
        var base = PRODUCTS.find(function(x){ return x.id === id; });
        if(base){ var s = _relatedness(base, p); if(s > best) best = s; }
      });
      if(best > 0) scores[p.id] = best;
    });
    return Object.keys(scores)
      .sort(function(a,b){ return scores[b]-scores[a]; })
      .slice(0, limit)
      .map(function(id){ return PRODUCTS.find(function(p){ return p.id === id; }); })
      .filter(Boolean);
  }

  /* ── Session search analytics (no PII) ──────────── */
  var _searches = [];
  function trackSearch(query, resultCount){
    if(!query || query.length < 2) return;
    _searches.push({ q:query.toLowerCase(), n:resultCount, t:Date.now() });
    // Keep last 20
    if(_searches.length > 20) _searches.shift();
    try{
      var prev = JSON.parse(sessionStorage.getItem('dh_searches')||'[]');
      prev.push({ q:query.toLowerCase(), n:resultCount });
      if(prev.length > 50) prev = prev.slice(-50);
      sessionStorage.setItem('dh_searches', JSON.stringify(prev));
    }catch(e){}
  }
  function getPopularSearches(){
    try{
      var all = JSON.parse(sessionStorage.getItem('dh_searches')||'[]');
      var counts = {};
      all.forEach(function(s){ counts[s.q] = (counts[s.q]||0) + 1; });
      return Object.keys(counts).sort(function(a,b){ return counts[b]-counts[a]; }).slice(0,5);
    }catch(e){ return []; }
  }

  /* ── Smart search nav suggestions with blog results ─ */
  function getBlogs(){ try{ return window._DH_BLOGS||[]; }catch(e){ return []; } }

  return { smartSearch:smartSearch, getRecommendations:getRecommendations, getCartCrossSells:getCartCrossSells, trackSearch:trackSearch, getPopularSearches:getPopularSearches };
}());

/* ── Upgrade initSearch to use DHIntel ───────────────── */
var _origInitSearch = initSearch;
initSearch = function(){
  var input=document.getElementById('navSearch');
  var results=document.getElementById('searchResults');
  if(!input||!results){ if(_origInitSearch) _origInitSearch(); return; }
  var timer;
  input.addEventListener('input', function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
      var q = input.value.trim();
      if(q.length < 2){
        results.classList.remove('show');
        // Show popular searches if available
        var pop = DHIntel.getPopularSearches();
        if(pop.length && document.activeElement === input){
          results.innerHTML = '<div class="sr-popular"><span>Popular:</span>' +
            pop.map(function(s){
              return '<button class="sr-pop-tag" onclick="document.getElementById(\'navSearch\').value=\''+escapeHtml(s)+'\';document.getElementById(\'navSearch\').dispatchEvent(new Event(\'input\'))">'+escapeHtml(s)+'</button>';
            }).join('') + '</div>';
          results.classList.add('show');
        }
        return;
      }
      var matches = DHIntel.smartSearch(q, 8);
      DHIntel.trackSearch(q, matches.length);
      if(!matches.length){
        results.innerHTML = '<div class="sr-empty">No results for "'+escapeHtml(q)+'" — <a href="/contact.html">ask us</a></div>';
        results.classList.add('show');
        return;
      }
      results.innerHTML = matches.map(function(p){
        var disc = p.mrp > p.price ? Math.round((p.mrp-p.price)/p.mrp*100) : 0;
        return '<a href="/products/'+p.slug+'.html" class="sr-item" role="option">'+
          '<img src="'+_imgSrc(p.images[0])+'" alt="'+escapeHtml(p.name)+'" onerror="this.src=\'/assets/images/placeholder.svg\'">'+
          '<div>'+
            '<div class="sr-name">'+escapeHtml(p.name)+'</div>'+
            '<div class="sr-price">'+fmtINR(p.price)+(p.mrp>p.price?' <s style="font-size:.7rem;color:var(--muted)">'+fmtINR(p.mrp)+'</s>':'')+(disc>0?' <b style="color:#059669;font-size:.7rem">-'+disc+'%</b>':'')+'</div>'+
          '</div>'+
          (p.stock===0?'<span style="font-size:.65rem;background:#fee2e2;color:#b91c1c;padding:2px 7px;border-radius:50px;margin-left:auto">OOS</span>':
            p.badge?'<span class="badge badge-'+(p.badgeType||'teal')+'" style="margin-left:auto;flex-shrink:0;font-size:.65rem">'+p.badge+'</span>':'')+
        '</a>';
      }).join('') +
        '<a href="/products.html?q='+encodeURIComponent(q)+'" class="sr-item sr-all">See all results for "'+escapeHtml(q)+'" →</a>';
      results.classList.add('show');
      input.setAttribute('aria-expanded','true');
    }, 160);
  });
  document.addEventListener('click', function(e){
    if(!input.contains(e.target)&&!results.contains(e.target)){
      results.classList.remove('show');
      input.setAttribute('aria-expanded','false');
    }
  });
  input.addEventListener('keydown', function(e){
    if(e.key==='Escape'){ results.classList.remove('show'); input.blur(); }
    if(e.key==='Enter' && input.value.trim()){
      window.location.href='/products.html?q='+encodeURIComponent(input.value.trim());
    }
  });
  input.addEventListener('focus', function(){
    if(input.value.length < 2){
      var pop = DHIntel.getPopularSearches();
      if(pop.length){
        results.innerHTML = '<div class="sr-popular"><span>Popular:</span>'+
          pop.map(function(s){
            return '<button class="sr-pop-tag" onclick="document.getElementById(\'navSearch\').value=\''+escapeHtml(s)+'\';document.getElementById(\'navSearch\').dispatchEvent(new Event(\'input\'))">'+escapeHtml(s)+'</button>';
          }).join('')+'</div>';
        results.classList.add('show');
      }
    }
  });
};

/* ── Cross-sell widget renderer ──────────────────────── */
function renderCrossSellWidget(containerId, productId){
  var el = document.getElementById(containerId);
  if(!el) return;
  var recs = productId ? DHIntel.getRecommendations(productId, 4) : DHIntel.getCartCrossSells(3);
  if(!recs.length) return;
  el.innerHTML =
    '<div class="cs-head"><h3 class="cs-title">You may also like</h3></div>'+
    '<div class="cs-grid">'+
      recs.map(function(p, i){ return renderProductCard(p, i); }).join('')+
    '</div>';
  initAnimateOnScroll();
}

/* ── Smart WhatsApp order helper ─────────────────────── */
function openWhatsAppOrder(orderId, items, total){
  var lines = ['*New Order — Detoxy Hijama*', ''];
  if(orderId) lines.push('Order ID: '+orderId);
  if(Array.isArray(items)){
    lines.push('Items:');
    items.forEach(function(i){ lines.push('  • '+i.name+(i.size?' ('+i.size+')':'')+(i.qty>1?' ×'+i.qty:'')+'  ₹'+(i.price*(i.qty||1)).toLocaleString('en-IN')); });
  }
  if(total) lines.push('', 'Total: ₹'+Number(total).toLocaleString('en-IN'));
  lines.push('', 'Please confirm and arrange payment. Thank you!');
  var msg = lines.join('\n');
  window.open('https://wa.me/919566596077?text='+encodeURIComponent(msg), '_blank');
}

/* ══════════════════════════════════════════════════════════════
   PHASE 6 — SECURITY HARDENING
══════════════════════════════════════════════════════════════ */

// ── Security utilities ────────────────────────────────────────
var DHSecurity = (function(){

  /* Rate limiter: key → max N calls per windowMs */
  var _rl = {};
  function rateLimit(key, max, windowMs){
    var now = Date.now();
    if(!_rl[key]) _rl[key] = [];
    // Prune old entries
    _rl[key] = _rl[key].filter(function(t){ return now - t < windowMs; });
    if(_rl[key].length >= max) return false;
    _rl[key].push(now);
    return true;
  }

  /* Strict HTML sanitizer for user-generated display content */
  function sanitizeForDisplay(str){
    if(str == null) return '';
    return String(str)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#x27;')
      .replace(/\//g,'&#x2F;')
      .trim();
  }

  /* Validate Indian phone number */
  function isValidPhone(p){
    return /^[6-9]\d{9}$/.test((p||'').replace(/[\s\-\+]/g,'').replace(/^91/,''));
  }

  /* Validate email */
  function isValidEmail(e){
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e||'');
  }

  /* Validate Indian pincode */
  function isValidPincode(p){
    return /^[1-9][0-9]{5}$/.test(p||'');
  }

  /* Anti-spam: detect bot-like form fills (too fast) */
  var _formTimestamps = {};
  function markFormStart(formId){
    _formTimestamps[formId] = Date.now();
  }
  function isHumanSubmit(formId, minMs){
    minMs = minMs || 3000; // 3s minimum fill time
    var t = _formTimestamps[formId];
    return t && (Date.now() - t) > minMs;
  }

  /* Sanitize order data before API POST */
  function sanitizeOrderData(data){
    var safe = {};
    var ALLOWED = ['name','phone','email','address','city','state','pincode','notes','payment','orderId','subtotal','shipping','total','date'];
    ALLOWED.forEach(function(k){ if(data[k] !== undefined) safe[k] = typeof data[k]==='string' ? data[k].slice(0,500) : data[k]; });
    safe.items = Array.isArray(data.items) ? data.items.slice(0,50).map(function(i){
      return { id:String(i.id||'').slice(0,100), name:String(i.name||'').slice(0,200), qty:Math.min(Number(i.qty)||1,20), price:Math.max(0,Number(i.price)||0) };
    }) : [];
    return safe;
  }

  return { rateLimit:rateLimit, sanitizeForDisplay:sanitizeForDisplay, isValidPhone:isValidPhone, isValidEmail:isValidEmail, isValidPincode:isValidPincode, markFormStart:markFormStart, isHumanSubmit:isHumanSubmit, sanitizeOrderData:sanitizeOrderData };
}());

// ── Secure newsletter override (add rate limiting) ────────────
var _origSubscribe = subscribeNewsletter;
subscribeNewsletter = function(email, source){
  if(!DHSecurity.rateLimit('newsletter', 3, 60000)){
    return { success:false, error:'Too many requests. Please wait a minute and try again.' };
  }
  if(!DHSecurity.isValidEmail(email)){
    return { success:false, error:'Please enter a valid email address.' };
  }
  return _origSubscribe(email, source);
};

/* ══════════════════════════════════════════════════════════════
   PHASE 7 — PERFORMANCE MONITORING
══════════════════════════════════════════════════════════════ */

// ── Lightweight performance observer ─────────────────────────
(function(){
  if(!window.PerformanceObserver || !window.performance) return;
  try{
    // Log LCP to session for debugging
    new PerformanceObserver(function(list){
      var entries = list.getEntries();
      if(entries.length){
        var lcp = entries[entries.length-1];
        sessionStorage.setItem('dh_lcp', Math.round(lcp.startTime)+'ms');
      }
    }).observe({entryTypes:['largest-contentful-paint']});

    // Flag slow connections for image quality decisions
    var nav = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if(nav){
      window.DH_SLOW_CONN = nav.saveData || nav.effectiveType === 'slow-2g' || nav.effectiveType === '2g';
    }
  }catch(e){}
}());

// ── Image intersection loader (native lazy fallback) ──────────
function initLazyImages(){
  if('loading' in HTMLImageElement.prototype) return; // native lazy supported
  if(!window.IntersectionObserver) return;
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      var img = e.target;
      if(img.dataset.src){ img.src = img.dataset.src; delete img.dataset.src; }
      obs.unobserve(img);
    });
  },{rootMargin:'200px'});
  document.querySelectorAll('img[loading="lazy"]').forEach(function(img){
    if(img.dataset.src) obs.observe(img);
  });
}

/* ══════════════════════════════════════════════════════════════
   PHASE 9 — NEXT-GEN FEATURES
══════════════════════════════════════════════════════════════ */

// ── SW update notification ────────────────────────────────────
(function(){
  if(!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.ready.then(function(reg){
    reg.addEventListener('updatefound', function(){
      var worker = reg.installing;
      if(!worker) return;
      worker.addEventListener('statechange', function(){
        if(worker.state==='installed' && navigator.serviceWorker.controller){
          // New version ready — show unobtrusive refresh toast
          showToast('🔄 Site updated — tap to refresh', 'default', 10000);
          // Clicking the toast refreshes
          var c = document.getElementById('toast-container');
          if(c) c.addEventListener('click', function(){ worker.postMessage({type:'SKIP_WAITING'}); window.location.reload(); }, {once:true});
        }
      });
    });
  }).catch(function(){});
}());

// ── "Back in stock" interest tracker ─────────────────────────
var DHInterest = {
  watch: function(productId){
    try{
      var list = JSON.parse(localStorage.getItem('dh_interest')||'[]');
      if(!list.includes(productId)){ list.push(productId); localStorage.setItem('dh_interest', JSON.stringify(list)); }
      showToast("We'll notify you when it's back in stock ✓", 'success');
    }catch(e){}
  },
  getList: function(){
    try{ return JSON.parse(localStorage.getItem('dh_interest')||'[]'); }catch(e){ return []; }
  }
};

// ── Contextual WhatsApp floating button smart behavior ────────
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var waBtn = document.querySelector('.wa');
    if(!waBtn) return;
    // After 45s on page, animate the WhatsApp button to draw attention
    setTimeout(function(){
      waBtn.style.animation = 'wl-pulse .5s ease 2';
    }, 45000);
  });
}());

// ── Smart internal link tracking (no external deps) ──────────
(function(){
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href]');
    if(!a) return;
    var href = a.getAttribute('href');
    if(href && href.startsWith('/products/') && !href.includes('product-template')){
      try{
        var slug = href.split('/').pop().replace('.html','');
        RecentlyViewed.add(slug);
      }catch(ex){}
    }
  }, {capture:true});
}());

// ── Keyboard shortcut: / to focus search ─────────────────────
document.addEventListener('keydown', function(e){
  if(e.key==='/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA'){
    e.preventDefault();
    var s = document.getElementById('navSearch');
    if(s){ s.focus(); s.select(); }
  }
});
