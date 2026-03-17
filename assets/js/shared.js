/* ═══════════════════════════════════════════════════════════════
   DETOXY HIJAMA — Shared Engine v2.0 (Corporate Upgrade)
   Brand: #57A2A0 | Clean · Medical · Trustworthy
   Features: Mega Menu, Mini Cart, Wishlist, Quick View,
             Recently Viewed, Coupons, Countdown, Newsletter,
             Abandoned Cart, Sticky ATC, Scroll-to-top
═══════════════════════════════════════════════════════════════ */

// ── Safe Redirect ─────────────────────────────────────────────
// Defined globally in shared.js so it is available on every page
// regardless of which cached HTML version the browser is serving.
// Rule: only allow same-origin paths (must start with / but not //)
function _safeRedir(url) {
  if (!url) return '/account.html';
  if (!url.startsWith('/') || url.startsWith('//')) return '/account.html';
  return url;
}

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
    description:`<h2>Detoxy Hijama Premium China Made Cups — Professional Grade Silicone Cupping Set</h2><p>Detoxy Hijama Premium China Made Cups are the gold standard in professional cupping therapy equipment in India. Crafted from platinum-cured, medical-grade silicone, these cups deliver unmatched softness, flexibility, and patient comfort during every hijama session. Unlike ordinary cups that harden over time, Detoxy Premium Cups maintain their elasticity through hundreds of sterilisation cycles — making them the most cost-effective investment for any serious hijama clinic or practitioner.</p><h3>Why Practitioners Across India Choose These Cups</h3><p>The full set includes 8 size variants: Size 1 through Size 6 for standard hijama points across the back, neck, shoulders, and limbs, plus the specialist Curve Cup 3 and Curve Cup 4 designed for joints, knees, elbows, and contoured body surfaces where standard cups struggle to maintain suction. This comprehensive size range means a single set covers your entire practice — from delicate areas behind the ears to the broad muscular regions of the upper and lower back.</p><p>BPA-free construction meets international medical device standards. The platinum-curing process eliminates chemical leaching risks associated with peroxide-cured silicone, making these cups completely safe for patients with latex sensitivities. Autoclave compatibility at 134°C ensures clinic-grade sterilisation between patients, satisfying the hygiene requirements of registered medical facilities.</p><h3>Clinical Performance</h3><p>These cups are engineered for both wet hijama (Al-Hijama Al-Masalla) and dry cupping. The squeeze-and-apply method requires no external pump, making them ideal for solo practitioners working across multiple points simultaneously. They are fully compatible with standard suction gun systems for practitioners who prefer mechanical vacuum control. The translucent amber silicone allows visual monitoring of skin response during treatment, enabling precise suction pressure judgement.</p><p>Practitioner feedback consistently highlights the cups' exceptional grip on oiled or wet skin — a critical advantage during Sunnah hijama sessions where skin preparation with oils is standard practice. The rounded, smooth rims prevent the micro-trauma associated with harder cup materials, reducing post-treatment marks and improving patient comfort.</p><h3>Durability &amp; Value</h3><p>With proper care — hand washing with mild antiseptic, air drying, and periodic autoclave sterilisation — practitioners report continued performance after two or more years of daily clinical use. Each cup retains its original flexibility and suction properties without the cracking, discolouration, or hardening that affect inferior products. This longevity makes the premium investment recoup itself many times over compared to cheaper alternatives that require frequent replacement.</p><p>Detoxy Hijama supplies directly from our manufacturing facility in Pollachi, Tamil Nadu to over 5,000 clinics across India, providing the consistent quality and reliable supply chain that professional practices depend on. Every batch is quality-checked before dispatch, with same-day fulfillment for urgent orders.</p>`,
    shortDesc:'Medical-grade silicone cups in 8 sizes. BPA-free, autoclave safe.',
    features:['8 sizes incl. Curve Cups','Medical-grade silicone','BPA-free & autoclave safe','Wet & dry cupping','Sterilizable & reusable'],
    specs:{'Material':'Platinum-cured medical-grade silicone','Sizes':'8 sizes (Size 1–6 + Curve Cup 3 & 4)','Sterilisation':'Autoclave safe up to 134°C','Safety':'BPA-free, latex-free, phthalate-free','Usage':'Wet hijama & dry cupping','Compatibility':'Hand squeeze & suction gun compatible','Origin':'China (medical-grade manufacturing)','Warranty':'7-day return guarantee'},
    images:['assets/images/products/premium-cups/main.jpg','assets/images/products/premium-cups/image2.jpg','assets/images/products/premium-cups/image3.jpg','assets/images/products/premium-cups/image4.jpg','assets/images/products/premium-cups/image5.jpg','assets/images/products/premium-cups/image6.jpg'],
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
    description:`<h2>Detoxy Hijama Electric Smart Cupping Device — Precision Suction with Heat Therapy</h2><p>The Detoxy Hijama Electric Smart Cupping Device brings therapeutic hijama into the modern era of medical wellness technology. Developed for practitioners and patients who require precise, consistent, and hands-free cupping therapy, this electric device eliminates the variability inherent in manual cupping methods, delivering reproducible therapeutic outcomes every session.</p><h3>9-Level Suction Control</h3><p>At the heart of this device is a 9-level adjustable suction system spanning from gentle lymphatic stimulation (Level 1) to deep tissue therapeutic pressure (Level 9). This graduated control allows practitioners to tailor treatment intensity precisely to each patient's condition, tolerance, and treatment stage — something impossible with squeeze cups or fire cupping. Chronic pain patients and elderly individuals can receive therapeutic benefit at gentler levels, while athletic recovery and deep tissue applications benefit from the higher settings.</p><h3>Integrated Heat Therapy</h3><p>The integrated heat therapy function (40–50°C adjustable) combines two of the most powerful therapeutic modalities in a single device. Heat and suction working together dilate blood vessels, increase local circulation, relax muscle spasm, and accelerate metabolic waste removal more effectively than suction alone. Clinical research on thermotherapy combined with cupping consistently shows superior outcomes for musculoskeletal pain, joint stiffness, and chronic tension.</p><h3>Professional Features</h3><p>USB-C recharging with a 2000mAh lithium-polymer battery provides approximately 90 minutes of continuous use per charge — sufficient for a full clinic day. The LCD display panel shows real-time suction level, heat status, and battery percentage. Auto-pressure control technology maintains the selected suction level consistently throughout the session, compensating for minor movements that would cause manual cups to lose seal.</p><p>The compact, ergonomic design fits comfortably in one hand. For patients new to hijama, the electric device offers a more controlled introduction to cupping therapy. The absence of fire, the ability to start at minimal suction, and the professional medical-device appearance all contribute to patient confidence and comfort.</p><h3>Expand Your Practice</h3><p>For clinic owners evaluating equipment investment, the electric device's ability to expand treatment offerings — including cosmetic cupping, sports recovery, and wellness applications beyond traditional hijama — represents significant revenue diversification potential. Detoxy Hijama backs this device with comprehensive after-sales support and our standard return policy.</p>`,
    shortDesc:'Smart electric cupping with 9 suction levels, heat therapy & USB-C.',
    features:['9 suction levels','Built-in heat therapy','Rechargeable USB-C','Auto-pressure control','LCD display'],
    specs:{'Suction Levels':'9 adjustable levels (digital control)','Heat Therapy':'40°C – 50°C adjustable','Battery':'2000mAh lithium-polymer, USB-C rechargeable','Battery Life':'~90 minutes continuous use','Display':'LCD panel (level, heat, battery)','Pressure Control':'Auto-maintain technology','Material':'Medical-grade ABS housing','Weight':'~280g (lightweight, ergonomic)'},
    images:['assets/images/products/electric-smart-cup/main.jpg','assets/images/products/electric-smart-cup/image2.jpg','assets/images/products/electric-smart-cup/image3.jpg','assets/images/products/electric-smart-cup/image4.jpg','assets/images/products/electric-smart-cup/image5.jpg'],
    tags:['electric','smart','device','heat'], isFeatured:true
  },
  {
    id:'fire-cupping-glass', slug:'fire-cupping-glass',
    name:'Detoxy Hijama Fire Cupping Glass Set',
    category:'cups', categoryLabel:'Cupping Sets',
    price:549, mrp:799, rating:4.6, reviews:156, stock:35,
    badge:'Trending', badgeType:'cream',
    description:`<h2>Detoxy Hijama Fire Cupping Glass Set — Authentic Borosilicate Glass, 16 Cups</h2><p>Detoxy Hijama Fire Cupping Glass Sets carry forward one of humanity's oldest healing traditions in the finest borosilicate glass available to professional practitioners. Fire cupping — the original technique of the Prophet ﷺ and classical Tibb Nabawi practitioners — creates therapeutic suction through the momentary introduction of flame, which consumes oxygen inside the cup and creates negative pressure as it cools against the skin. This method produces the most authentic Sunnah hijama experience, preferred by practitioners who honour the traditional methodology of Al-Hijama.</p><h3>Why Borosilicate Glass?</h3><p>Borosilicate glass is the only appropriate material for authentic fire cupping. Unlike soda-lime glass that shatters under thermal stress, borosilicate maintains structural integrity from room temperature through rapid flame heating and back to body temperature — a thermal cycle that would fracture ordinary glass. Our cups withstand temperatures up to 500°C, far exceeding the brief flame contact required for proper technique. The 3mm wall thickness provides the ideal balance between thermal mass and weight.</p><h3>16-Cup Three-Size Set</h3><p>The set contains 16 cups across three sizes: Small (for neck, face edges, and small joints), Medium (for shoulders, arms, and mid-back), and Large (for the broad upper and lower back, hamstrings, and chest). This three-size composition reflects classical hijama practice where different cup sizes address different anatomical regions. Having multiple cups of each size allows simultaneous multi-point application.</p><h3>Diagnostic Transparency</h3><p>Transparency is a significant clinical advantage. Unlike opaque silicone or plastic cups, glass allows real-time visual assessment of skin response during treatment — the colour, speed, and distribution of the petechiae formation provides diagnostic information that experienced practitioners use to assess stagnation and inflammatory states. This diagnostic dimension is part of why fire cupping remains central to advanced hijama practice.</p><p>The smooth, fire-polished rim of each cup creates an airtight seal on any body surface while protecting the patient's skin. Proper care ensures decades of service — clean with hot water and standard antiseptic after each use, autoclave sterilise for clinical settings, and store cups separated by cloth to prevent contact chips.</p>`,
    shortDesc:'Authentic borosilicate glass fire cupping set. 16 cups in 3 sizes.',
    features:['16 borosilicate glass cups','Heat resistant up to 500°C','Smooth rounded rims','3 sizes included','Professional clinic grade'],
    specs:{'Material':'Borosilicate glass (pharmaceutical grade)','Heat Resistance':'Up to 500°C','Wall Thickness':'3mm (clinical standard)','Cup Sizes':'Small, Medium, Large (3 sizes)','Cups in Set':'16 cups total','Rim Finish':'Fire-polished, smooth rim','Sterilisation':'Autoclave & chemical sterilisation compatible','Origin':'Medical-grade manufacturing'},
    images:['assets/images/products/fire-cupping-glass/main.jpg','assets/images/products/fire-cupping-glass/image2.jpg','assets/images/products/fire-cupping-glass/image3.jpg'],
    tags:['glass','fire','sunnah','traditional'], isFeatured:true
  },
  {
    id:'magnetic-vacuum-kit', slug:'magnetic-vacuum-kit',
    name:'Detoxy Hijama 24-Set Magnetic Vacuum Cupping Kit',
    category:'kits', categoryLabel:'Starter Kits',
    price:1149, mrp:1699, rating:4.9, reviews:73, stock:18,
    badge:'Top Rated', badgeType:'teal',
    description:`<h2>Detoxy Hijama 24-Set Magnetic Vacuum Cupping Kit — Complete Professional System</h2><p>The Detoxy Hijama 24-Set Magnetic Vacuum Cupping Kit is the definitive starter kit for practitioners establishing or expanding a professional hijama clinic. Engineered around a patented magnetic lock pump system, this kit delivers precision vacuum control, complete equipment coverage, and professional presentation in a single comprehensive package — everything required to begin delivering therapeutic cupping from the moment it arrives.</p><h3>Magnetic Lock Pump Technology</h3><p>The magnetic vacuum pump is the technological centrepiece of this kit. Unlike conventional squeeze-bulb pumps that lose precision over time or require two-handed operation, the magnetic lock mechanism provides single-handed, click-by-click suction control. Each pump stroke delivers a measured increment of negative pressure, allowing exact replication of treatment parameters between sessions — a critical requirement for outcome tracking and treatment standardisation in professional clinical practice.</p><h3>24 Cups, 4 Sizes</h3><p>The 24 cups span four precisely graduated sizes, covering the full anatomical range of hijama practice. The smallest cups address delicate points at the hairline, behind the ears, and on the face for conditions including migraines and sinusitis. Mid-range sizes handle the shoulder girdle, upper arms, and thoracic spine. The largest cups apply therapeutic suction across the broad gluteal, lumbar, and hamstring regions where maximum tissue volume engagement produces the deepest decompressive effect.</p><h3>Airtight Seal Technology</h3><p>The airtight seal technology incorporated into each cup's valve system maintains treatment pressure with absolute reliability. Once pumped to therapeutic pressure, cups maintain suction without drift for the entire treatment duration — typically 5 to 15 minutes for dry cupping protocols. This stability is essential for unattended multi-cup applications where the practitioner must place cups across multiple points before returning to adjust or remove them.</p><h3>Professional Carry Case Included</h3><p>The high-quality carry case houses every component of the kit in custom-moulded foam inserts. For mobile practitioners and home-visit hijama services, the case's portability makes it indispensable. With proper care, this kit serves as the backbone of a hijama practice for many years, its initial cost amortised across thousands of treatment sessions.</p>`,
    shortDesc:'Complete 24-piece magnetic vacuum kit with pump gun & carry case.',
    features:['24 cups (4 sizes)','Magnetic vacuum pump','Airtight seal technology','Extension hose included','Carry case included'],
    specs:{'Pump Type':'Magnetic lock precision vacuum gun','Cups':'24 cups in 4 graduated sizes','Cup Material':'Medical-grade high-impact ABS','Valve System':'Precision airtight valve, instant release','Max Vacuum':'-65 kPa (therapeutic range)','Includes':'Pump gun + 24 cups + extension hose + carry case','Sterilisation':'Autoclave safe at 121°C','Carry Case':'Custom foam-insert professional case'},
    images:['assets/images/products/magnetic-vacuum-kit/main.jpg','assets/images/products/magnetic-vacuum-kit/image2.jpg'],
    tags:['kit','vacuum','magnetic','complete'], isBestseller:true, isFeatured:true
  },
  {
    id:'lancet-pen', slug:'lancet-pen',
    name:'Detoxy Hijama Auto Lancet Pen Massager',
    category:'consumables', categoryLabel:'Consumables',
    price:299, mrp:499, rating:4.7, reviews:198, stock:100,
    badge:null,
    description:`<h2>Detoxy Hijama Auto Lancet Pen — Spring-Loaded, 5 Depth Settings, Wet Hijama Precision</h2><p>The Detoxy Hijama Auto Lancet Pen is an indispensable precision instrument for every wet hijama practitioner, providing the controlled, sterile, and consistent skin puncturing that authentic Al-Hijama Al-Masalla requires. Wet hijama — the complete Sunnah method combining cupping suction with superficial skin incisions — depends entirely on the quality of the incision instrument for both therapeutic efficacy and patient safety.</p><h3>Spring-Loaded Auto Mechanism</h3><p>The spring-loaded auto mechanism is the engineering feature that distinguishes professional lancet pens from improvised alternatives. When activated, the spring releases with precisely calibrated force, driving the lancet to the selected depth and retracting it immediately — the entire action occurring in under a millisecond. This controlled, instantaneous action causes dramatically less pain than manual blade techniques, produces more uniform incisions, and eliminates the tendency toward variable pressure application. Patients consistently report the auto lancet as significantly less uncomfortable than traditional blade methods.</p><h3>5 Calibrated Depth Settings</h3><p>Five calibrated depth settings (0.8mm, 1.0mm, 1.2mm, 1.5mm, and 1.8mm) allow treatment adaptation across patient demographics and anatomical locations. The 0.8mm setting is appropriate for facial hijama, elderly patients with thinner skin, and paediatric applications. The 1.0–1.2mm range covers standard adult hijama across the Sunnah points. The 1.5–1.8mm settings provide deeper penetration for areas with significant subcutaneous fat or for chronic stagnation conditions requiring more substantial blood release.</p><h3>Universal 28G Lancet Compatibility</h3><p>Each session uses standard 28G lancet heads — the universal size used across the global medical device industry and compatible with all major lancet brands. The pen ships with 10 lancet heads to begin practice immediately. The single-use lancet policy is absolute in professional hijama practice. The auto-eject mechanism allows safe lancet removal without finger contact, maintaining sterility throughout the session and enabling safe disposal.</p><p>For hijama training academies, the auto lancet pen is the ideal teaching instrument — students learn proper technique with an instrument that removes variable force application, allowing focus on correct anatomical point identification and post-puncture cupping technique.</p>`,
    shortDesc:'Spring-loaded auto lancet pen with 5 depth settings for wet hijama.',
    features:['5 depth settings (0.8–1.8mm)','Auto spring mechanism','Single-use lancet compatibility','Ergonomic grip','10 lancet heads included'],
    specs:{'Mechanism':'Spring-loaded auto-retract, single-action','Depth Settings':'5 settings: 0.8 / 1.0 / 1.2 / 1.5 / 1.8 mm','Lancet Size':'Standard 28G (universal compatibility)','Lancets Included':'10 sterile lancet heads','Ejection':'Safe auto-eject, no finger contact','Material':'Medical-grade ABS, autoclave-safe barrel','Usage':'Single patient, sterile technique','Certifications':'Medical device grade manufacturing'},
    images:['assets/images/products/lancet-pen/main.jpg'],
    tags:['lancet','wet-hijama','precision']
  },
  {
    id:'latex-gloves', slug:'latex-gloves',
    name:'Detoxy Hijama Premium Latex Gloves (Pack of 100)',
    category:'consumables', categoryLabel:'Consumables',
    price:199, mrp:349, rating:4.4, reviews:341, stock:200,
    badge:null,
    description:`<h2>Detoxy Hijama Premium Latex Examination Gloves — Medical Grade, 100 per Box</h2><p>Detoxy Hijama Premium Latex Examination Gloves provide the critical barrier protection that every hijama session requires when working with blood and body fluids during wet cupping procedures. Medical-grade latex gloves are fundamental infection control equipment — their quality directly impacts both protection efficacy and treatment dexterity.</p><h3>Medical-Grade Standard</h3><p>Each box contains 100 gloves (50 pairs) manufactured to ASTM D3578 and EN 455 international standards for medical examination gloves. These standards specify minimum tensile strength, elongation, and puncture resistance requirements that ensure reliable barrier integrity throughout clinical use. Batch testing certificates are available on request for clinics that require documentation for health authority inspections or accreditation processes.</p><h3>Textured Fingertips for Precision</h3><p>The textured fingertip design is critical for wet hijama practice specifically. When working with lancet pens, positioning cups over lubricated skin, and managing blood-stained consumables, the tactile feedback provided by textured fingertips is essential for confident instrument handling and precise technique. Smooth examination gloves compromise the finger sensitivity required for locating anatomical hijama points accurately.</p><h3>Superior Latex Performance</h3><p>The latex formulation provides superior elasticity, conformability, and tactile sensitivity that makes latex the preferred material for medical procedure gloves worldwide. Latex gloves conform precisely to hand anatomy, creating a second-skin fit that allows the full range of fine motor movements required in hijama practice — from palping anatomical landmarks to maintaining steady cup positioning during suction application.</p><p>Shelf life of 3–5 years (unopened, stored below 30°C away from direct sunlight) makes advance bulk purchasing practical and economical. Detoxy Hijama's factory-direct pricing makes bulk procurement cost-effective, with subscription ordering available for clinics requiring regular restocking. Available in Medium and Large sizes to accommodate all practitioners.</p>`,
    shortDesc:'Medical-grade latex examination gloves. Box of 100 for a full month.',
    features:['Box of 100 gloves','Medical-grade latex','Textured fingertips','Powder coated','Pinhole tested'],
    specs:{'Material':'100% natural rubber latex','Quantity':'100 gloves per box (50 pairs)','Powder':'Lightly powdered (modified cornstarch)','Standards':'ASTM D3578, EN 455 medical grade','Texture':'Textured fingertips for tactile precision','Available Sizes':'Medium, Large','Shelf Life':'3–5 years (sealed, stored correctly)','Safety':'BPA-free, suitable for blood/fluid contact'},
    images:['assets/images/products/latex-gloves/main.jpg'],
    tags:['gloves','latex','protection','consumable'], isBestseller:true
  },
  {
    id:'bamboo-cupping-set', slug:'bamboo-cupping-set',
    name:'Detoxy Hijama Bamboo Cupping Set',
    category:'cups', categoryLabel:'Cupping Sets',
    price:479, mrp:699, rating:4.3, reviews:44, stock:15,
    badge:null,
    description:`<h2>Detoxy Hijama Bamboo Cupping Set — Traditional Herbal Steam Cupping, 8 Cups</h2><p>Detoxy Hijama Bamboo Cupping Sets connect the practice of therapeutic cupping to its deepest historical roots, offering practitioners and patients an authentic experience of the herbal steam cupping method that predates all synthetic alternatives. Bamboo cupping, practised for millennia across Asian and Islamic medical traditions, combines the therapeutic benefits of suction with the additional healing properties of herbal steam absorption through the skin — a synergistic treatment impossible to replicate with any modern material.</p><h3>Sustainable Moso Bamboo</h3><p>Each set contains 8 hand-crafted bamboo cups in three diameter sizes, sustainably harvested from mature Moso bamboo — the species used in traditional Asian medicinal bamboo cupping. Moso bamboo's natural density, uniform cell structure, and chemical-free growth make it ideal for medical applications. The natural antimicrobial properties of bamboo, derived from bamboo-kun compounds, provide an additional layer of hygienic safety that synthetic materials cannot offer.</p><h3>Herbal Steam Therapy</h3><p>The herbal steam preparation method involves simmering cups in herb-infused water (typically ginger, mugwort, wormwood, or prescribed medicinal herbs according to the patient's condition) before application. The hot, herb-saturated bamboo creates gentle suction as it cools against the skin, simultaneously delivering therapeutic heat, herbal steam absorption, and suction decompression. This triple-action mechanism produces therapeutic outcomes not achievable by any single-modality cupping method.</p><h3>Natural Lacquer Finish</h3><p>The natural lacquer finish applied to each cup seals the bamboo grain against moisture penetration during repeated steam heating, preserves structural integrity through years of clinical use, and provides a smooth interior surface that releases cleanly from skin. The finish is food-safe and non-toxic, appropriate for the steam heating environment and extended skin contact of cupping therapy.</p><p>For practitioners who emphasise the holistic and traditional dimensions of hijama therapy, bamboo cups provide authentic differentiation. Patients seeking connection to traditional healing systems often specifically request bamboo cupping, and clinics offering this option command premium positioning in the wellness market.</p>`,
    shortDesc:'Handcrafted natural bamboo cups for traditional herbal steam cupping.',
    features:['Sustainably sourced bamboo','Herbal steam compatible','Set of 8 cups','Natural anti-microbial','Handcrafted quality'],
    specs:{'Material':'Moso bamboo with food-safe natural lacquer','Cups in Set':'8 cups in 3 diameter sizes','Sizes':'Small (~3cm), Medium (~5cm), Large (~7cm)','Method':'Herbal steam heating before application','Heat Compatibility':'Steam heating compatible (traditional method)','Antimicrobial':'Natural bamboo-kun antimicrobial properties','Sustainability':'Sustainably harvested Moso bamboo','Care':'Wipe clean, air dry, no soaking'},
    images:['assets/images/products/bamboo-cupping-set/main.jpg'],
    tags:['bamboo','herbal','natural','traditional']
  },
  {
    id:'silicone-facial-4', slug:'silicone-facial-4',
    name:'Detoxy Hijama Silicone Facial Cup Set of 4',
    category:'facial', categoryLabel:'Facial Cups',
    price:349, mrp:549, rating:4.6, reviews:127, stock:45,
    badge:null,
    description:`<h2>Detoxy Hijama Silicone Facial Cups (4-Piece) — Professional Facial Cupping &amp; Lymphatic Drainage</h2><p>Detoxy Hijama Silicone Facial Cups (4-Piece Set) bring the ancient therapeutic principles of hijama cupping to the specialised application of facial wellness and beauty enhancement. Facial cupping has emerged as one of the most sought-after natural beauty treatments globally, with clinical and aesthetic practitioners incorporating it into protocols for skin rejuvenation, lymphatic drainage, anti-ageing, and the treatment of facial muscle tension associated with TMJ disorders and headaches.</p><h3>Two-Size Configuration</h3><p>The 4-piece set provides two cup sizes — two smaller cups for the eye area, forehead, temples, and nose bridge, and two larger cups for the cheeks, jawline, neck, and décolletage. This four-cup configuration allows simultaneous bilateral application for symmetric treatment, or sequential single-cup technique for precise point-by-point work.</p><h3>Ultra-Soft Hypoallergenic Silicone</h3><p>Ultra-soft hypoallergenic silicone distinguishes facial cups from body cups fundamentally. Facial tissue is thinner, more delicate, and more visible than body tissue. Detoxy facial cups are manufactured from a specific low-durometer silicone formulation that compresses with minimal pressure, creates gentle suction with precise manual control, and releases cleanly without the sharp pressure changes that cause capillary rupture. Every cup is formulated from cosmetic-grade, dermatologist-tested silicone.</p><h3>Lymphatic Drainage &amp; Anti-Ageing</h3><p>The lymphatic drainage application of facial cupping produces immediately visible aesthetic outcomes. The submandibular and cervical lymph nodes receive significant stimulation from properly executed facial cupping sequences, reducing facial puffiness and oedema. A single 15-minute facial cupping session routinely produces visible reduction in under-eye darkness and facial swelling.</p><p>Collagen stimulation through controlled suction lifts and stretches the dermis and underlying fascia, triggering fibroblast activation and collagen synthesis. Regular facial cupping protocols (2–3 sessions per week) show measurable improvement in skin texture, fine line depth, and facial contour definition over 8–12 weeks. For hijama practitioners expanding into cosmetic services, facial cupping represents excellent revenue potential with minimal additional training.</p>`,
    shortDesc:'Mini silicone facial cupping set (4 pcs) for lymphatic drainage.',
    features:['4 mini cups','Ultra-soft silicone','Hypoallergenic','Boosts collagen','Reduces puffiness'],
    specs:{'Material':'Low-durometer hypoallergenic cosmetic-grade silicone','Pieces':'4 cups (2 small + 2 large)','Small Cup Use':'Eyes, forehead, temples, nose bridge','Large Cup Use':'Cheeks, jawline, neck, décolletage','Application':'Manual squeeze — no tools required','Safety':'Dermatologist-tested, latex-free, BPA-free','Best For':'Lymphatic drainage, anti-ageing, skin rejuvenation','Care':'Wash with mild soap, air dry'},
    images:['assets/images/products/silicone-facial-4/main.jpg'],
    tags:['facial','silicone','beauty','anti-aging']
  },
  {
    id:'hijama-suction-gun', slug:'hijama-suction-gun',
    name:'Detoxy Hijama Suction Gun',
    category:'kits', categoryLabel:'Starter Kits',
    price:549, mrp:799, rating:4.5, reviews:38, stock:30,
    badge:null,
    description:`<h2>Detoxy Hijama Suction Gun — Precision Vacuum Control for Professional Cupping</h2><p>The Detoxy Hijama Suction Gun is the essential vacuum control instrument for practitioners using valve-top therapeutic cups, providing precise, single-handed suction application that defines professional vacuum cupping technique. While squeeze cups offer self-contained simplicity, the suction gun system provides superior vacuum control, repeatable pressure application, and compatibility with the widest range of professional cup types — making it the instrument of choice for serious clinical and training environments.</p><h3>Ergonomic Pistol-Grip Design</h3><p>The ergonomic pistol-grip design is the result of extensive practitioner feedback and anatomical engineering. The grip angle, weight distribution, and trigger travel are optimised for single-handed operation — critical when the other hand is positioning a cup on the patient. The grip surface is non-slip ABS that maintains secure handling even with gloved hands, and the compact form factor allows storage in standard instrument trays alongside cups and consumables.</p><h3>Precision Click-by-Click Vacuum</h3><p>The precision vacuum valve at the trigger mechanism allows exact pressure adjustment one step at a time. Each trigger pull delivers a measured increment of negative pressure. The release valve at the gun tip allows instantaneous pressure release for cup removal without skin trauma — a significant advantage over silicone squeeze cups where removal requires breaking the seal by deforming the cup against skin. In patients with sensitive or fragile skin, this controlled release mechanism makes a meaningful clinical difference.</p><h3>Universal Cup Compatibility</h3><p>Universal compatibility with standard valve-top hijama cups makes this suction gun a versatile addition to any practitioner's equipment inventory. The industry-standard connector interfaces with cups from all major manufacturers. The maximum vacuum of -65kPa exceeds the therapeutic range required for even the deepest tissue applications, ensuring the gun is never a limiting factor in treatment pressure.</p><p>For hijama training programmes, the suction gun is the preferred teaching instrument because it makes the relationship between pump action and vacuum pressure visible and quantifiable. The mechanism requires only occasional lubrication with medical-grade silicone oil and is easily cleaned with standard antiseptic solutions.</p>`,
    shortDesc:'Professional hijama suction gun with precision vacuum control.',
    features:['Ergonomic pistol grip','Precision vacuum valve','Single-hand operation','Compatible with standard cups','Durable ABS construction'],
    specs:{'Grip':'Ergonomic pistol-grip, single-handed operation','Trigger':'Click-by-click measured vacuum increment','Max Vacuum':'-65 kPa (exceeds therapeutic range)','Release':'Instant-release valve, no skin trauma','Compatibility':'Universal valve-top cups (all brands)','Material':'Non-slip ABS, chemical-resistant','Includes':'Suction gun + extension hose','Cleaning':'Wipe with antiseptic solution'},
    images:['assets/images/products/hijama-suction-gun/main.jpg'],
    tags:['suction','gun','vacuum','professional']
  },
  {
    id:'indian-standard-cup', slug:'indian-standard-cup',
    name:'Detoxy Hijama Indian Made Standard Hijama Cup',
    category:'cups', categoryLabel:'Cupping Sets',
    price:199, mrp:349, rating:4.2, reviews:89, stock:150,
    badge:null,
    description:`<h2>Detoxy Hijama Indian Standard Cups — Made in India, Professional Clinical Grade</h2><p>Detoxy Hijama Indian Standard Cups represent the ideal balance of clinical performance, accessibility, and value that has made them the choice of over 5,000 hijama practitioners across India. Manufactured to medical polymer specifications in India, these cups combine the quality requirements of professional hijama practice with factory-direct pricing that makes professional equipment accessible to practitioners at every career stage.</p><h3>6-Size Clinical Range</h3><p>Available in 6 sizes (Size 1 through Size 6), the Indian Standard Cup range covers the complete anatomical spectrum of hijama practice — from the small Size 1 appropriate for facial points, cervical vertebrae, and fine anatomical targets, through to the large Size 6 ideal for the broad gluteal, lumbar, and thoracic back regions. The size increments are carefully calibrated so that adjacent sizes overlap in applicable anatomical regions, allowing practitioners to select the optimal cup for each specific point without gaps in coverage.</p><h3>Precision Valve-Top Suction Mechanism</h3><p>The valve-top precision suction mechanism integrates a precision-machined valve that accepts the suction gun connector for controlled vacuum application. The valve mechanism provides an airtight seal at all therapeutic pressure levels, preventing the pressure drift that compromises treatment duration. When treatment is complete, the valve release pin allows instantaneous, controlled pressure release — preventing the tissue trauma associated with abrupt cup removal.</p><h3>Made-in-India Quality</h3><p>Made-in-India manufacturing means no import duties in pricing, reliable supply chain continuity, and the ability to respond rapidly to demand surges. Our manufacturing facility in Pollachi, Tamil Nadu operates to ISO-aligned quality management processes, with incoming material testing, in-process quality checks, and outgoing inspection before every shipment.</p><p>BPA-free medical polymer construction meets international food-contact and medical device material safety standards, entirely free of phthalates and heavy metals. Autoclave sterilisation at 121°C is fully supported. For practitioners transitioning from basic to professional equipment, the Indian Standard Cup provides clearly perceptible improvement in clinical performance, treatment precision, and patient outcomes.</p>`,
    shortDesc:'Affordable Indian-made standard silicone hijama cups. 6 sizes.',
    features:['Made in India','Soft silicone material','Easy suction application','Wet & dry cupping','Available in 6 sizes'],
    specs:{'Material':'BPA-free medical-grade polymer','Sizes':'6 sizes (Size 1 through Size 6)','Suction':'Valve-top precision mechanism + suction gun compatible','Release':'Instant valve-pin release','Sterilisation':'Autoclave safe at 121°C','Safety':'BPA-free, phthalate-free, heavy metal-free','Made in':'Pollachi, Tamil Nadu, India','Warranty':'7-day return guarantee'},
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
    description:`<h2>Detoxy Hijama Silicone Facial Cups (7-Piece) — Complete Professional Facial Cupping System</h2><p>The Detoxy Hijama Silicone Facial Cups 7-Piece Set is the most comprehensive facial cupping system available for professional aesthetic and wellness practitioners. With seven cups spanning seven distinct sizes, this set provides complete anatomical coverage from the delicate periorbital area to the neck and décolletage, enabling the full-spectrum facial cupping protocols used in premium spa environments and medical aesthetics practices.</p><h3>Seven-Size Complete Coverage</h3><p>The progression from the smallest cup (approximately 1.5cm diameter for periorbital, nose bridge, and lip margin work) through intermediate sizes (3–4cm for cheek, temple, and forehead applications) to the largest cup (6cm for jawline, neck, and décolletage coverage) creates a seamless range that eliminates the size gaps that characterise 4-piece sets. Practitioners consistently report that the 7-piece range allows them to execute complete facial protocols without any anatomical region requiring cup size compromise.</p><h3>Includes Professional Storage Pouch</h3><p>The included storage pouch is both functional and professional. Custom-designed to hold all seven cups securely separated, the pouch prevents cup-to-cup contact that causes silicone degradation and maintains pristine condition between uses. For mobile practitioners delivering facial cupping in clients' homes or spa settings, the pouch provides neat, professional presentation that communicates treatment quality before a single cup is placed.</p><h3>Three Anti-Ageing Mechanisms</h3><p>The anti-ageing application of this 7-piece set spans three distinct mechanisms. First, lymphatic drainage — stimulating facial lymphatic vessels and submandibular nodes, reducing chronic puffiness and improving skin clarity. Second, fascial release — lifting and stretching the superficial musculoaponeurotic system (SMAS), producing non-surgical lifting effects. Third, collagen induction — repeated microtrauma to the dermis stimulates fibroblast activity and new collagen synthesis, improving skin density and texture measurably over an 8–12 week protocol.</p><p>Hypoallergenic silicone composition is non-negotiable for facial application. The face's proximity to mucous membranes and the sensitivity of facial skin require material safety standards exceeding those of body cupping. Every Detoxy facial cup is formulated from cosmetic-grade, dermatologist-tested silicone that has undergone sensitisation testing.</p>`,
    shortDesc:'Complete 7-piece facial cupping set. Full face + neck coverage.',
    features:['7 cups — 7 sizes','Full face & neck coverage','Hypoallergenic silicone','Anti-aging & lymphatic drainage','Includes storage pouch'],
    specs:{'Material':'Cosmetic-grade hypoallergenic silicone','Pieces':'7 cups in 7 graduated sizes','Size Range':'~1.5cm (periorbital) to ~6cm (neck/décolletage)','Storage':'Professional storage pouch included','Application':'Manual squeeze — no tools required','Safety':'Dermatologist-tested, latex-free, BPA-free','Best For':'Complete facial protocols, anti-ageing, lymphatic drainage','Ideal For':'Spas, medical aesthetics, home practice'},
    images:['assets/images/products/silicone-facial-7/main.jpg'],
    tags:['facial','complete','silicone','beauty'], isFeatured:true
  },
  {
    id:'silicone-moving-cup', slug:'silicone-moving-cup',
    name:'Detoxy Hijama Silicone Moving Cup Set (4 pcs)',
    category:'cups', categoryLabel:'Cupping Sets',
    price:399, mrp:599, rating:4.5, reviews:52, stock:40,
    badge:null,
    description:`<h2>Detoxy Hijama Silicone Moving Cups — Gliding Massage Cupping for Deep Tissue &amp; Fascia Release</h2><p>Detoxy Hijama Silicone Moving Cups bring the dynamic, sliding application of therapeutic cupping to a modern, highly practical format. Moving cup therapy — also known as gliding or massage cupping — extends the therapeutic benefits of stationary cupping across broad tissue regions through continuous cup movement along fascial planes, muscle bellies, and treatment meridians, making it an essential complement to static cupping in comprehensive therapeutic protocols.</p><h3>Engineered for Continuous Movement</h3><p>The flexible silicone construction is specifically engineered for continuous movement that distinguishes this technique from stationary cupping. The cup must maintain consistent suction during lateral movement without losing seal, without causing excessive skin distraction at the cup edge, and without requiring continuous pressure adjustment. Detoxy moving cups achieve this through a proprietary silicone formulation that balances wall stiffness (to maintain cup shape during movement) with rim flexibility (to accommodate skin contour changes as the cup travels).</p><h3>Fascial Release &amp; Deep Tissue</h3><p>Deep tissue stimulation through moving cupping represents one of the most effective fascial release techniques available to manual therapy practitioners. When the cup is moved longitudinally along a muscle belly while maintaining therapeutic suction, it creates a sustained decompressive force that progressively releases fascial adhesions, separates tissue layers that have become adhered through injury or chronic tension, and stimulates mechanoreceptors that trigger long-lasting changes in tissue tone and flexibility. Athletes and rehabilitation patients consistently report significant immediate improvement in movement freedom.</p><h3>Easy Technique, Broad Applications</h3><p>The technique requires application with a massage oil or gel lubricant. Practitioner technique involves placing the cup with initial suction applied via manual squeeze, then moving it with controlled, deliberate strokes — typically 5–10 passes along each treatment region before moving to the adjacent area. Session duration of 15–30 minutes covers the back, legs, or upper body comprehensively.</p><p>For hijama practitioners trained in traditional static cupping methods, moving cupping offers service expansion with minimal learning curve. Moving cupping covers significantly more tissue surface in the same session time as static cupping, making it efficient for sports recovery and general relaxation applications. Reusability follows standard silicone cup protocols — wash with mild antiseptic, rinse thoroughly, and allow complete drying between uses.</p>`,
    shortDesc:'Silicone moving (sliding) cups for gliding massage cupping.',
    features:['4 flexible silicone cups','Gliding massage technique','Deep tissue stimulation','Use with massage oil','Reusable & sterilizable'],
    specs:{'Material':'Flexible therapeutic-grade silicone','Technique':'Gliding / massage cupping with oil lubricant','Application':'Manual squeeze, oil-assisted glide','Best For':'Fascial release, deep tissue, sports recovery','Coverage':'Full back, legs, or upper body per session','Sterilisation':'Wash with antiseptic, air dry','Compatibility':'All massage oils and clinical gels','Dimensions':'3 sizes for different body regions'},
    images:['assets/images/products/silicone-moving-cup/main.jpg'],
    tags:['moving','sliding','massage','silicone']
  },
  {
    id:'surgical-blade', slug:'surgical-blade',
    name:'Detoxy Hijama Surgical Blade No. 11 (Pack of 100)',
    category:'consumables', categoryLabel:'Consumables',
    price:249, mrp:399, rating:4.6, reviews:173, stock:300,
    badge:null,
    description:`<h2>Detoxy Hijama Surgical Blades — Gamma Sterilised, Size 22 &amp; Size 15 for Wet Hijama</h2><p>Detoxy Hijama Surgical Blades are the gold standard consumable for wet hijama practitioners who require precision, sterility, and reliability for the incision phase of Al-Hijama Al-Masalla. Available in Size 22 and Size 15 — the two sizes used most commonly in hijama practice — these individually gamma-irradiation-sterilised blades deliver the controlled, superficial incisions that effective wet cupping requires.</p><h3>Gamma Irradiation Sterilisation</h3><p>Gamma irradiation is the definitive sterilisation method for surgical blades, producing sterility assurance levels (SAL) of 10⁻⁶ — meaning the probability of any single blade carrying viable microorganisms is one in one million. This level of sterility assurance, the same standard applied to implantable surgical devices, provides the infection safety margin that wet hijama demands. No heat sterilisation method applied to pre-packaged blades can match gamma irradiation's penetration through packaging and reliability of outcome.</p><h3>Carbon Steel Precision Edge</h3><p>The carbon steel composition provides the metallurgical properties essential for hijama incision work. Carbon steel holds a sharper edge than stainless steel at equivalent manufacturing cost, and the blade's function in hijama is single-use — the superior initial sharpness of carbon steel is the relevant property. Each blade maintains its factory edge from packaging to use without dulling, providing the clean, minimally traumatic incision that patients experience as a brief, sharp sensation rather than a dragging cut.</p><h3>Size Guide</h3><p>Size 22 blades (large, curved cutting edge) are appropriate for the standard wet hijama incision technique — a series of small, parallel cuts approximately 3–5mm in length applied over the hijama point immediately after the first cupping phase. Size 15 blades (smaller, more curved) suit finer work, paediatric applications, facial hijama, and practitioners who prefer smaller incision sizes.</p><p>Individual peel-open sterile packaging maintains sterility from factory to point of use. Never remove blades from packaging until the moment of use, and never reuse any blade under any clinical circumstance. Safe disposal of used blades requires a rigid sharps container. Detoxy Hijama supports clinical safety education and provides guidance on sharps management protocols.</p>`,
    shortDesc:'Sterile surgical blade No. 11, pack of 100. Precision wet hijama incisions.',
    features:['100 individually wrapped blades','No. 11 pointed blade','Sterile & single-use','Carbon steel construction','Gamma-irradiated sterility'],
    specs:{'Material':'High-carbon steel with anti-rust coating','Sterilisation':'Gamma irradiation (SAL 10⁻⁶)','Available Sizes':'Size 22 (large curve) & Size 15 (small curve)','Packaging':'Individual sterile peel-open pouches','Quantity':'Box of 100 individually packed blades','Use':'Single-use only — never reuse','Disposal':'Sharps container required','Standards':'Medical device grade manufacturing'},
    images:['assets/images/products/surgical-blade/main.jpg'],
    tags:['blade','surgical','wet-hijama','sterile']
  },
  {
    id:'surgical-cotton', slug:'surgical-cotton',
    name:'Detoxy Hijama Surgical Cotton (400g)',
    category:'consumables', categoryLabel:'Consumables',
    price:149, mrp:249, rating:4.3, reviews:95, stock:200,
    badge:null,
    description:`<h2>Detoxy Hijama Surgical Cotton — Medical Grade, High Absorbency, 400g Roll</h2><p>Detoxy Hijama Surgical Cotton provides the absorbent, lint-free wound care and skin preparation material that every wet hijama session requires. Medical-grade cotton is not interchangeable with commercial cotton wool or household cotton products — the differences in fibre processing, absorbency specification, and absence of chemical contaminants make medical-grade surgical cotton the only appropriate choice for clinical hijama practice involving skin puncture and blood contact.</p><h3>100% Pure Medical-Grade Cotton</h3><p>Detoxy Surgical Cotton undergoes hydrogen peroxide bleaching to remove natural cotton waxes and impurities that would reduce absorbency and potentially cause skin reactions. This oxygen-bleaching process eliminates the residual chlorine compounds found in cheaper alternatives that can cause irritation in wound care applications. The resulting cotton fibre has maximum natural absorbency — critical when managing the blood and bodily fluids present during wet hijama sessions.</p><h3>Lint-Free Clinical Performance</h3><p>When applied over hijama points post-cupping to absorb expressed blood and fluids, the cotton maintains its structural integrity without disintegrating or leaving fibres in the wound — the lint-free quality that distinguishes medical-grade from craft-grade cotton. Pre-soaking in chlorhexidine, povidone-iodine, isopropyl alcohol, or hydrogen peroxide for skin disinfection before cupping produces uniform antiseptic distribution for effective pre-procedure hygiene.</p><h3>Versatile Roll Format</h3><p>The 400g roll allows practitioners to cut or tear precisely the amount needed for each application — from small pledgets for individual incision site management to larger sections for broad skin preparation. This flexibility eliminates waste and reduces supply consumption compared to fixed-size pre-cut formats. Store in a clean, dry container once opened. Detoxy Hijama's factory-direct pricing makes bulk procurement economical for clinics with consistent high-volume usage.</p>`,
    shortDesc:'400g roll of 100% pure absorbent surgical cotton for pre/post hijama care.',
    features:['400g roll','100% pure cotton','High absorbency','Lint-free quality','Antiseptic compatible'],
    specs:{'Material':'100% pure medical-grade cotton','Bleaching Process':'Hydrogen peroxide (oxygen bleaching, chlorine-free)','Absorbency':'High — medical wound care specification','Lint':'Lint-free, no fibre contamination','Format':'400g roll (cut to required size)','Compatibility':'All antiseptics: chlorhexidine, povidone-iodine, IPA','Storage':'Sealed: 3 years; Opened: use within session','Grade':'Medical / surgical quality'},
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
// Coupon codes are validated server-side only — never exposed in client JS.
// Calls GAS endpoint action=validateCoupon. Returns a Promise.
function applyCoupon(code, cartTotal) {
  if (!code) return Promise.resolve({ valid: false, error: 'Please enter a coupon code.' });
  var url = SITE.sheetsUrl;
  if (!url) {
    // No API configured — gracefully allow (treat as no discount)
    return Promise.resolve({ valid: false, error: 'Coupon service unavailable. Please contact us.' });
  }
  if (!DHSecurity.rateLimit('coupon', 5, 60000)) {
    return Promise.resolve({ valid: false, error: 'Too many attempts. Please wait a moment.' });
  }
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action: 'validateCoupon', code: code.trim().toUpperCase(), total: cartTotal }),
    redirect: 'follow'
  })
  .then(function(r) { return r.text(); })
  .then(function(t) {
    var clean = t.replace(/^\uFEFF/, '').trim();
    return JSON.parse(clean);
  })
  .catch(function() {
    return { valid: false, error: 'Could not validate coupon. Please try again.' };
  });
}

// ── Live Product Loader ───────────────────────────────────────
// ── Google Apps Script API URL ───────────────────────────────
// Connected to: Detoxy Hijama Google Sheets backend
// To change: replace the URL below and redeploy
var HARDCODED_URL = ''; // Set via admin panel only — never commit this to source

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
          try {
            var cacheObj = JSON.parse(cached);
            var cp = Array.isArray(cacheObj) ? cacheObj : (cacheObj && cacheObj.data ? cacheObj.data : null);
            var ts = cacheObj && cacheObj.ts ? cacheObj.ts : 0;
            var cacheTTL = 300000; // 5 minutes
            if (cp && cp.length && (Date.now() - ts < cacheTTL || ts === 0)) {
              cp.forEach(_mergeProduct); document.dispatchEvent(new CustomEvent('productsUpdated'));
            } else if (cp && cp.length && ts !== 0) {
              // Cache expired — still show it but fetch fresh below
              cp.forEach(_mergeProduct); document.dispatchEvent(new CustomEvent('productsUpdated'));
            }
          } catch(e) {}
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
          try { sessionStorage.setItem('dh_products_cache', JSON.stringify({data: d.products, ts: Date.now()})); } catch(e) {}
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
        try { sessionStorage.setItem('dh_products_cache', JSON.stringify({data: d.products, ts: Date.now()})); } catch(e) {}
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
  _cache: null,
  get() {
    if (this._cache !== null) return this._cache;
    try { this._cache = JSON.parse(localStorage.getItem('dh_cart') || '[]'); }
    catch(e) { this._cache = []; }
    return this._cache;
  },
  save(items) {
    this._cache = items;
    localStorage.setItem('dh_cart', JSON.stringify(items));
    Cart.updateUI();
  },
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
      // Ensure price is always stored — never 0 if product exists
      if (!price && p) price = p.price;
      items.push({id:productId, qty:itemQty, size:itemSize, name:nm, price:price, image:image});
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
    return Cart.get().reduce(function(s, i) {
      var price = i.price || 0;
      if (!price) {
        var p = PRODUCTS.find(function(p){ return p.id === i.id || (i.id && i.id.startsWith(p.id + '-')); });
        price = p ? p.price : 0;
      }
      return s + (price * (Number(i.qty) || 1));
    }, 0);
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
// Single consolidated function — rate limiting and validation built-in
function subscribeNewsletter(email, source){
  // Rate limit: max 3 subscribe attempts per minute
  if(typeof DHSecurity !== 'undefined' && !DHSecurity.rateLimit('newsletter', 3, 60000)){
    return {success:false, error:'Too many requests. Please wait a minute and try again.'};
  }
  // Validate email format
  if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    return {success:false, error:'Please enter a valid email address.'};
  // Client-side duplicate check (UX only — server validates authoritatively)
  try{
    var subs=JSON.parse(localStorage.getItem('dh_nl_subs')||'[]');
    if(subs.includes(email)) return {success:false, error:'You are already subscribed!'};
    subs.push(email); localStorage.setItem('dh_nl_subs', JSON.stringify(subs));
  }catch(e){}
  // POST to GAS — fire and forget
  if(window.DH_API_URL){
    fetch(window.DH_API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'text/plain;charset=utf-8'},
      body: JSON.stringify({action:'newsletter', email: email, source: source||'website'}),
      redirect: 'follow'
    }).catch(function(){});
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
          <button class="btn btn-outline" onclick="Cart.add('${escapeHtml(p.id)}');document.getElementById('quickViewModal').classList.remove('open')">Add to Cart</button>
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
function renderStars(rating, showNum){
  if(showNum === undefined) showNum = true;
  rating = Math.max(0, Math.min(5, Number(rating) || 0)); // guard 0/NaN/out-of-range
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
      :`<button class="btn btn-outline btn-sm" style="flex:1" onclick="Cart.add('${escapeHtml(p.id)}')">Add to Cart</button>`;
  return `
<article class="product-card animate-in${isOOS?' pc-oos-card':''}" itemscope itemtype="https://schema.org/Product">
  <div class="pc-img-wrap">
    <a href="/products/${p.slug}.html" tabindex="-1" aria-hidden="true">
      <img src="${img}" alt="${escapeHtml(p.name)}" loading="${eager?'eager':'lazy'}" decoding="async" itemprop="image" onerror="this.src='/assets/images/placeholder.svg'">
    </a>
    ${isOOS?`<div class="pc-oos"><span>Out of Stock</span></div>`:''}
    ${!isOOS&&p.badge?`<span class="pc-badge badge badge-${escapeHtml(p.badgeType||'teal')}">${escapeHtml(String(p.badge))}</span>`:''}
    ${!isOOS&&disc>0?`<span class="pc-disc">-${disc}%</span>`:''}
    <button class="pc-wl ${wlActive?'active':''}" data-wl-id="${escapeHtml(p.id)}" onclick="Wishlist.toggle('${escapeHtml(p.id)}');Wishlist.updateUI()" aria-label="${wlActive?'Remove from wishlist':'Add to wishlist'}">
      <svg fill="${wlActive?'currentColor':'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
    </button>
    ${!isOOS?`<button class="pc-qv" onclick="openQuickView('${escapeHtml(p.id)}')" aria-label="Quick view">Quick View</button>`:''}
  </div>
  <div class="pc-body">
    <span class="pc-cat" itemprop="category">${escapeHtml(p.categoryLabel||"")}</span>
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

// ── Cross-tab cart cache invalidation ───────────────────────────
// When another browser tab modifies cart via localStorage, reset the in-memory cache
window.addEventListener('storage', function(e) {
  if (e.key === 'dh_cart') {
    Cart._cache = null; // Force re-read on next Cart.get()
    Cart.updateUI();
  }
});

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
function renderHeader(activePage){
  if (activePage === undefined) activePage = '';
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
<div class="mc-overlay" onclick="closeMiniCart()" ontouchend="this.onclick()" role="button" tabindex="-1" aria-label="Close cart overlay"></div>
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
  <a href="/hijama-dates.html">Sunnah Dates</a>
  <a href="/search.html">Search Products</a>
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
        <span class="pf-payment__badge">COD</span>
        <span class="pf-payment__badge">NEFT</span>
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

// ── Search (smart version defined below with DHIntel) ───────────

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
// Returns the logged-in user, or null if not logged in / session expired
function getLoggedInUser() {
  try {
    var raw = JSON.parse(localStorage.getItem('dh_user') || 'null');
    if (!raw) return null;
    // New format: session wrapper with expiry timestamp
    if (raw.expiresAt) {
      if (Date.now() > raw.expiresAt) {
        localStorage.removeItem('dh_user');
        return null;
      }
      return raw.user || null;
    }
    // Legacy format: plain user object
    return (raw.id || raw.email) ? raw : null;
  } catch(e) { return null; }
}

function updateNavAuthLink(){
  var link=document.getElementById('navAccountLink'); if(!link) return;
  try{
    var u = getLoggedInUser();
    link.href= u&&u.id ? '/account.html' : '/login.html';
    link.title=u&&u.id ? 'My Account ('+(u.name||'You')+')' : 'Sign In';
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

/* ── Smart search using DHIntel ─────────────────────── */
function initSearch(){
  var input=document.getElementById('navSearch');
  var results=document.getElementById('searchResults');
  if(!input||!results){ return; }
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
        return '<a href="/products/'+p.slug+'.html" class="sr-item" role="option" tabindex="-1">'+
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
      // If a result is focused, navigate to it; otherwise search page
      var focused = results.querySelector('.sr-item:focus');
      if(focused){ focused.click(); return; }
      window.location.href='/search.html?q='+encodeURIComponent(input.value.trim());
    }
    // Arrow key navigation through results
    if(e.key==='ArrowDown' || e.key==='ArrowUp'){
      e.preventDefault();
      var items = Array.from(results.querySelectorAll('.sr-item'));
      if(!items.length) return;
      var focused = results.querySelector('.sr-item:focus');
      var idx = items.indexOf(focused);
      var next;
      if(e.key==='ArrowDown') next = items[idx+1] || items[0];
      else next = idx > 0 ? items[idx-1] : items[items.length-1];
      if(next){ next.focus(); }
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

// Newsletter rate-limiting is now built into subscribeNewsletter() directly.

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
  // Listen for SW activation (cache cleared) and reload to get fresh content
  navigator.serviceWorker.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'SW_UPDATED') {
      // Show a non-intrusive toast — never force-reload (would fire on every browser start)
      if (document.visibilityState === 'hidden') return;
      if (typeof showToast === 'function') {
        showToast('🔄 Site updated — refresh for latest content', 'default', 8000);
      }
    }
  });
  navigator.serviceWorker.ready.then(function(reg){
    reg.addEventListener('updatefound', function(){
      var worker = reg.installing;
      if(!worker) return;
      worker.addEventListener('statechange', function(){
        if(worker.state==='installed' && navigator.serviceWorker.controller){
          showToast('🔄 Site updated — tap to refresh', 'default', 10000);
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



// ══════════════════════════════════════════════════════════════
// FEATURE 4 — Pincode → City/State Auto-fill
// Uses api.postalpincode.in (free, no key needed, Indian govt data)
// Falls back gracefully if offline or API unavailable.
// ══════════════════════════════════════════════════════════════
function initPincodeLookup(){
  var pinEl   = document.getElementById('pincode');
  var cityEl  = document.getElementById('city');
  var stateEl = document.getElementById('state');
  if(!pinEl || !cityEl || !stateEl) return;

  // Add a small hint below pincode field
  var hint = document.createElement('div');
  hint.id  = 'pincode-hint';
  hint.style.cssText = 'font-size:.72rem;color:var(--muted,#7b8fa6);margin-top:3px;min-height:16px;transition:color .2s';
  pinEl.parentNode.insertBefore(hint, pinEl.nextSibling.nextSibling || null);
  pinEl.parentNode.appendChild(hint);

  var _debounce = null;
  pinEl.addEventListener('input', function(){
    var pin = pinEl.value.trim();
    if(pin.length !== 6 || !/^\d{6}$/.test(pin)){
      hint.textContent = '';
      return;
    }
    clearTimeout(_debounce);
    hint.textContent = 'Looking up…';
    hint.style.color = 'var(--muted,#7b8fa6)';

    _debounce = setTimeout(function(){
      fetch('https://api.postalpincode.in/pincode/'+pin)
        .then(function(r){ return r.json(); })
        .then(function(data){
          if(!data || !data[0] || data[0].Status !== 'Success'){
            hint.textContent = 'PIN code not found';
            hint.style.color = '#ef4444';
            return;
          }
          var po = data[0].PostOffice[0];
          if(!po) return;

          // Auto-fill city if empty
          if(cityEl.value.trim() === ''){
            cityEl.value = po.District || po.Name || '';
          }

          // Auto-select state
          var stateName = po.State || '';
          var opts = stateEl.options;
          for(var i = 0; i < opts.length; i++){
            if(opts[i].value.toLowerCase() === stateName.toLowerCase() ||
               opts[i].text.toLowerCase()  === stateName.toLowerCase()){
              stateEl.value = opts[i].value;
              break;
            }
          }

          hint.textContent = (po.District || po.Name) + ', ' + stateName;
          hint.style.color = '#059669';
        })
        .catch(function(){
          hint.textContent = '';
        });
    }, 500);
  });
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initPincodeLookup);
} else {
  initPincodeLookup();
}

/* ══════════════════════════════════════════════════════════════
   FEATURE — Social Share Buttons
   Usage: renderShareButtons(url, title)
   Returns HTML string for share buttons
══════════════════════════════════════════════════════════════ */
function renderShareButtons(url, title) {
  url   = url   || window.location.href;
  title = title || document.title;
  var enc = encodeURIComponent;
  return [
    '<div class="share-btns" role="group" aria-label="Share this page">',
      '<span class="share-label">Share:</span>',
      // WhatsApp
      '<a href="https://wa.me/?text=' + enc(title + ' ' + url) + '" target="_blank" rel="noopener" class="share-btn share-wa" aria-label="Share on WhatsApp" title="WhatsApp">',
        '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
        '<span>WhatsApp</span>',
      '</a>',
      // Facebook
      '<a href="https://www.facebook.com/sharer/sharer.php?u=' + enc(url) + '" target="_blank" rel="noopener" class="share-btn share-fb" aria-label="Share on Facebook" title="Facebook">',
        '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
        '<span>Facebook</span>',
      '</a>',
      // Twitter / X
      '<a href="https://twitter.com/intent/tweet?text=' + enc(title) + '&url=' + enc(url) + '" target="_blank" rel="noopener" class="share-btn share-tw" aria-label="Share on Twitter/X" title="Twitter/X">',
        '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.258 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
        '<span>Twitter/X</span>',
      '</a>',
      // Copy link
      '<button onclick="dhCopyLink(this,\'' + escapeHtml(url) + '\')" class="share-btn share-copy" aria-label="Copy link" title="Copy link">',
        '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>',
        '<span>Copy Link</span>',
      '</button>',
    '</div>',
  ].join('');
}

function dhCopyLink(btn, url) {
  navigator.clipboard.writeText(url).then(function() {
    var orig = btn.innerHTML;
    btn.innerHTML = '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg><span>Copied!</span>';
    btn.style.background = '#059669';
    btn.style.color = '#fff';
    setTimeout(function(){ btn.innerHTML = orig; btn.style.background=''; btn.style.color=''; }, 2000);
  }).catch(function() {
    showToast('Could not copy link', 'error');
  });
}

/* ── Share buttons CSS injected once ─────────────────────── */
(function(){
  if (document.getElementById('dh-share-style')) return;
  var s = document.createElement('style');
  s.id  = 'dh-share-style';
  s.textContent = [
    '.share-btns{display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
    '.share-label{font-size:.72rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-right:4px}',
    '.share-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;font-size:.78rem;font-weight:600;cursor:pointer;text-decoration:none;transition:all .2s;border:1.5px solid var(--border);background:var(--white);color:var(--text);font-family:var(--font-sans)}',
    '.share-btn:hover{border-color:var(--t);color:var(--td)}',
    '.share-wa{border-color:#25d366;color:#128c7e}.share-wa:hover{background:#25d366;color:#fff!important;border-color:#25d366}',
    '.share-fb{border-color:#1877f2;color:#1877f2}.share-fb:hover{background:#1877f2;color:#fff!important}',
    '.share-tw{border-color:#000;color:#000}.share-tw:hover{background:#000;color:#fff!important}',
  ].join('');
  if (document.head) document.head.appendChild(s);
  else document.addEventListener('DOMContentLoaded', function(){ document.head.appendChild(s); });
}());

/* ── Stock badge helper (used in admin + product pages) ─── */
function renderStockBadge(stock) {
  if (stock === 0 || stock === '0') {
    return '<span style="display:inline-flex;align-items:center;gap:5px;background:#fee2e2;color:#b91c1c;font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:50px"><span style="width:7px;height:7px;border-radius:50%;background:#ef4444;display:inline-block"></span>Out of Stock</span>';
  }
  var qty = Number(stock);
  if (qty > 0 && qty <= 5) {
    return '<span style="display:inline-flex;align-items:center;gap:5px;background:#fef3c7;color:#b45309;font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:50px"><span style="width:7px;height:7px;border-radius:50%;background:#f59e0b;display:inline-block"></span>Low Stock (' + qty + ' left)</span>';
  }
  return '<span style="display:inline-flex;align-items:center;gap:5px;background:#d1fae5;color:#065f46;font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:50px"><span style="width:7px;height:7px;border-radius:50%;background:#10b981;display:inline-block"></span>In Stock</span>';
}
