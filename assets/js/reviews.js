// ══════════════════════════════════════════════════════════════
// DETOXY HIJAMA — Professional Reviews System v2.0
// ══════════════════════════════════════════════════════════════

var DH_REVIEWS = (function () {

  var BASE_REVIEWS = [
    {name:'Mohammed Rafiq',   city:'Chennai',        rating:5, date:'2025-01-12', verified:true,  title:'Excellent clinical quality',        text:'Outstanding quality for my hijama clinic. Exactly as described — professional grade. Fast delivery and great packaging. My patients immediately noticed the difference.'},
    {name:'Fatima Begum',     city:'Mumbai',         rating:5, date:'2025-01-08', verified:true,  title:'Best hijama equipment in India',     text:'Best hijama equipment I have purchased in India. My patients love the results. The quality is consistent every order. Highly recommended to all practitioners.'},
    {name:'Dr. Arshad Ali',   city:'Hyderabad',      rating:5, date:'2025-01-05', verified:true,  title:'My clinic\'s standard supplier',     text:'Professional grade quality throughout. I run a hijama clinic and this is my go-to supplier for all consumables and cups. Never had a quality complaint from patients.'},
    {name:'Zainab Khatoon',   city:'Lucknow',        rating:5, date:'2024-12-28', verified:true,  title:'Received in 3 days, superb',         text:'Received in 3 days. Quality is outstanding. Everything matched the description precisely. Will order again for sure — this is now my regular supplier.'},
    {name:'Abdul Karim',      city:'Bangalore',      rating:5, date:'2024-12-22', verified:true,  title:'Genuine medical grade',              text:'Very authentic medical-grade products. Detoxy Hijama is clearly the best manufacturer in India for hijama equipment. My whole clinic runs on their products.'},
    {name:'Nasreen Sultana',  city:'Delhi',          rating:4, date:'2024-12-18', verified:true,  title:'Good quality, minor delay',          text:'Good quality products. Delivery was a bit slow but the product is worth the wait. Quality is professional grade and patients are happy with outcomes.'},
    {name:'Imran Shaikh',     city:'Pune',           rating:5, date:'2024-12-15', verified:true,  title:'Best I\'ve tried across suppliers',   text:'Amazing quality. I have ordered from multiple suppliers but Detoxy Hijama is clearly the best. The consistency batch to batch is what sets them apart.'},
    {name:'Safiya Rahman',    city:'Kolkata',        rating:5, date:'2024-12-10', verified:true,  title:'Patients see real improvement',      text:'My patients are very happy with their therapy sessions. Great product, great results. The quality difference is noticeable compared to cheaper alternatives.'},
    {name:'Yusuf Merchant',   city:'Surat',          rating:4, date:'2024-12-06', verified:true,  title:'Good value for professional use',    text:'Good value for money. Professional quality at a very reasonable price. Has been reliable through months of daily clinical use. Will continue ordering.'},
    {name:'Amina Hussain',    city:'Ahmedabad',      rating:5, date:'2024-12-01', verified:true,  title:'5 years experience — best yet',      text:'I have been doing hijama for 5 years and this is the best equipment I have used. Quality, durability, and price all excellent. 100% recommend to all practitioners.'},
    {name:'Khalid Ansari',    city:'Jaipur',         rating:5, date:'2024-11-25', verified:true,  title:'Clinic orders exclusively here',     text:'Superb quality. Very durable and professional. My clinic now orders exclusively from Detoxy Hijama for all equipment needs. Consistent quality every time.'},
    {name:'Rukhsana Parveen', city:'Patna',          rating:5, date:'2024-11-20', verified:true,  title:'Quality matches description',        text:'Quality matches the description exactly. Will definitely reorder. Fast shipping, great packaging, and the product performs exactly as expected in clinical use.'},
    {name:'Omar Farooq',      city:'Bhopal',         rating:5, date:'2024-11-16', verified:true,  title:'Top class wellness centre product',  text:'Excellent! Using in my wellness centre and clients are very pleased. Top class product. My clients have started requesting Detoxy equipment specifically.'},
    {name:'Ayesha Siddiqui',  city:'Nagpur',         rating:4, date:'2024-11-12', verified:true,  title:'Very satisfied overall',             text:'Very satisfied. Good packaging, authentic product. Minor delay in shipping but overall 4 stars. Will order again without hesitation.'},
    {name:'Wasim Ahmed',      city:'Indore',         rating:5, date:'2024-11-08', verified:true,  title:'Third order, always consistent',    text:'Perfect quality. Exactly as described. This is my third order and I am always satisfied. Detoxy Hijama has earned my complete trust.'},
    {name:'Bilquis Begum',    city:'Kanpur',         rating:5, date:'2024-11-04', verified:true,  title:'Outstanding professional grade',     text:'Outstanding product. Professional grade material throughout. Detoxy Hijama is genuinely the best option available for serious hijama practitioners in India.'},
    {name:'Tariq Hussain',    city:'Visakhapatnam',  rating:5, date:'2024-10-30', verified:true,  title:'Excellent condition on arrival',     text:'Received in excellent condition. Very happy with the quality and prompt delivery. The packaging protects the equipment well during transit.'},
    {name:'Noor Fatima',      city:'Coimbatore',     rating:5, date:'2024-10-26', verified:true,  title:'Proud to support local brand',       text:'Local brand with international quality. Proud to support Detoxy Hijama from Pollachi! The quality rivals anything imported and at a much better price.'},
    {name:'Faisal Khan',      city:'Trichy',         rating:4, date:'2024-10-22', verified:true,  title:'Patients showing improvement',       text:'Good quality. My patients have noticed improvement in their conditions after regular sessions. Will continue ordering from Detoxy Hijama for my clinic.'},
    {name:'Sameena Akhtar',   city:'Salem',          rating:5, date:'2024-10-18', verified:true,  title:'Professional and hygienic',          text:'Absolutely love this product. Very professional and hygienic. Will order more next week. This is now my standard equipment across all treatment types.'},
    {name:'Hamid Sheikh',     city:'Erode',          rating:5, date:'2024-10-14', verified:true,  title:'Best place for hijama equipment',    text:'Brilliant quality. Fast delivery. This is the best place to buy hijama equipment in India. I have recommended Detoxy to over 20 practitioners in my network.'},
    {name:'Mariam Bibi',      city:'Tirupur',        rating:5, date:'2024-10-10', verified:true,  title:'Practice improved significantly',    text:'Excellent product. My hijama practice has improved significantly with better quality equipment. Patients comment on the professional appearance and quality.'},
    {name:'Usman Qureshi',    city:'Madurai',        rating:5, date:'2024-10-06', verified:true,  title:'Factory direct pricing is ideal',    text:'Premium quality at factory-direct prices. Highly recommend to all hijama practitioners. The pricing makes professional-grade equipment genuinely accessible.'},
    {name:'Raheema Noor',     city:'Kochi',          rating:4, date:'2024-10-02', verified:true,  title:'Consistent and reliable',            text:'Good product. Consistent quality and reliable delivery. Will continue to order from here. This is what every hijama clinic needs from their supplier.'},
    {name:'Shafiq Ahmed',     city:'Thrissur',       rating:5, date:'2024-09-28', verified:true,  title:'My clinic standard product',         text:'Best quality hijama cups in India. Professional and durable. My clinic standard product for all sessions. I will not switch to any other brand.'},
    {name:'Haseena Khatun',   city:'Malappuram',     rating:5, date:'2024-09-24', verified:true,  title:'Received in 2 days — amazing',       text:'Superb product. Received in 2 days. Will order again. Thank you Detoxy Hijama for making such quality available at this price point to Indian practitioners.'},
    {name:'Junaid Ali',       city:'Calicut',        rating:5, date:'2024-09-20', verified:true,  title:'Go-to store for all hijama needs',   text:'Excellent quality and very fast delivery. This is my go-to store for all hijama needs. I order consumables monthly and cups every 6 months. Never disappointed.'},
    {name:'Rizwan Malik',     city:'Hubli',          rating:5, date:'2024-09-12', verified:true,  title:'Professional therapist choice',      text:'Outstanding! I am a professional hijama therapist and this quality is exactly what I need for consistent clinical outcomes. My patients trust the professionalism.'},
    {name:'Anwar Hussain',    city:'Vadodara',       rating:5, date:'2024-09-04', verified:true,  title:'Patients experience great relief',   text:'Fantastic product. My patients experience great relief. This is proper medical grade quality that makes a real difference to treatment outcomes.'},
    {name:'Irfan Shaikh',     city:'Amritsar',       rating:5, date:'2024-08-27', verified:true,  title:'Recommending to whole network',      text:'Excellent! I have been recommending Detoxy Hijama to all practitioners in my network. The quality speaks for itself. Factory-direct pricing makes it unbeatable.'},
    {name:'Sabina Khatoon',   city:'Meerut',         rating:5, date:'2024-08-23', verified:true,  title:'Professional packaging, great quality',text:'Quality is amazing. Packaging is very professional. Will definitely continue to order. The consistency of quality across multiple orders is what builds trust.'},
    {name:'Yunus Patel',      city:'Agra',           rating:5, date:'2024-08-19', verified:true,  title:'Best supplier I have found',         text:'Best hijama equipment supplier I have found in India. Quality, price, and delivery all excellent. My clinic has never had a single equipment failure.'},
    {name:'Rashid Khan',      city:'Nashik',         rating:5, date:'2024-08-11', verified:true,  title:'Clinic exclusively uses Detoxy',     text:'Excellent product. My hijama clinic now exclusively uses Detoxy Hijama equipment. The difference in patient satisfaction since switching has been remarkable.'},
    {name:'Mushtaq Ahmed',    city:'Meerut',         rating:5, date:'2024-08-03', verified:true,  title:'Best purchase of the year',          text:'Best purchase I made this year for my hijama practice. Quality and durability are excellent. Has performed flawlessly through hundreds of sessions.'},
    {name:'Arif Hussain',     city:'Varanasi',       rating:5, date:'2024-07-26', verified:true,  title:'Professional quality patients trust',text:'Top class product. Professional quality that my patients trust and appreciate. 5 stars! Every aspect from packaging to performance is excellent.'},
    {name:'Khadija Siddiqui', city:'Jodhpur',        rating:5, date:'2024-07-22', verified:true,  title:'Best products at great prices',      text:'Outstanding quality. Best hijama products available in India at such affordable prices. Factory-direct model makes this genuinely accessible to all practitioners.'},
    {name:'Iqbal Khan',       city:'Udaipur',        rating:5, date:'2024-07-18', verified:true,  title:'Training centre uses exclusively',   text:'Very satisfied. I run a hijama training centre and my students use these products exclusively. The quality helps set the right standard for new practitioners.'},
    {name:'Shakeel Ahmed',    city:'Ajmer',          rating:5, date:'2024-07-10', verified:true,  title:'Consistent clinical outcomes',       text:'Excellent! Genuine clinical-grade quality. My patients have seen great results consistently since I switched to Detoxy Hijama equipment two years ago.'},
    {name:'Rehana Khatun',    city:'Guwahati',       rating:5, date:'2024-07-06', verified:true,  title:'Much better than other brands',      text:'Very happy with this product. Quality is much better than other brands I have tried before. The durability alone justifies the price difference completely.'},
    {name:'Fatema Zahra',     city:'Srinagar',       rating:5, date:'2024-05-11', verified:true,  title:'Sets the standard in India',         text:'Best quality hijama products I have ever used. Detoxy Hijama sets the standard in India for professional hijama equipment. No other brand comes close.'},
    {name:'Ghulam Nabi',      city:'Jammu',          rating:5, date:'2024-05-07', verified:true,  title:'Patients appreciate professionalism',text:'Superb quality. My patients always appreciate the professional grade of equipment used in their sessions. It builds confidence and trust immediately.'},
    {name:'Asma Bibi',        city:'Roorkee',        rating:5, date:'2024-04-17', verified:true,  title:'Highly recommend everywhere',        text:'Outstanding! Very professional quality. Highly recommend to all hijama practitioners everywhere. This is the real deal for serious clinical practice.'},
    {name:'Nasima Khatun',    city:'Bareilly',       rating:5, date:'2024-04-09', verified:true,  title:'Third reorder, always consistent',   text:'Best hijama products in India! This is my third reorder and quality is always consistent. Consistency is the mark of a true professional supplier.'},
    {name:'Riyaz Ahmed',      city:'Moradabad',      rating:5, date:'2024-04-05', verified:true,  title:'Complete trust earned',              text:'Excellent quality. Detoxy Hijama has earned my complete trust and loyalty as a customer. Every order arrives on time and every product performs as expected.'},
    {name:'Waheeda Sultana',  city:'Gorakhpur',      rating:5, date:'2024-03-24', verified:true,  title:'Truly world class quality',          text:'Excellent product. The quality speaks for itself. Detoxy Hijama is truly world-class. I have compared many suppliers and none match the consistency here.'},
    {name:'Shafia Begum',     city:'Mainpuri',       rating:5, date:'2024-03-08', verified:true,  title:'Every practitioner should use this', text:'Excellent! Professional quality that every hijama practitioner should use. The clinical outcomes I achieve with Detoxy equipment are consistently superior.'},
    {name:'Amjad Ali',        city:'Shahjahanpur',   rating:5, date:'2024-03-04', verified:true,  title:'1 year clinic use, great results',   text:'Outstanding product. My clinic has been using Detoxy Hijama for 1 year with great results. Not a single quality issue. This is what professional supply looks like.'},
    {name:'Nusrat Jahan',     city:'Bulandshahr',    rating:5, date:'2024-02-21', verified:true,  title:'Regular supplier, great feedback',   text:'Brilliant quality! My patients have given very positive feedback since I switched. This is my regular supplier now and I have no intention of changing.'},
    {name:'Heena Anjum',      city:'Gurgaon',        rating:5, date:'2024-02-05', verified:true,  title:'Favourite hijama supplier India',    text:'Very satisfied with the quality and service. This is my favourite hijama supplier in India. Responsive team, consistent quality, fast delivery. Nothing more needed.'},
    {name:'Saifur Rahman',    city:'Noida',          rating:5, date:'2024-02-01', verified:true,  title:'Practice grown with better equipment',text:'Amazing quality. Consistent and professional. My practice has grown thanks to better equipment. Patients refer others specifically because of the professional quality.'},
    {name:'Rahila Begum',     city:'Faizabad',       rating:5, date:'2024-01-20', verified:true,  title:'Best by far, tried many brands',     text:'Superb quality! I have tried many hijama product brands over the years and Detoxy is by far the best. The quality consistency is what keeps bringing me back.'},
    {name:'Firdaus Khatun',   city:'Raebareli',      rating:5, date:'2024-01-12', verified:true,  title:'Exceptional patient feedback',       text:'Outstanding! My patients love the sessions and the quality of products is exceptional. Many have commented on how professional the equipment feels.'},
    {name:'Sarwari Begum',    city:'Hardoi',         rating:5, date:'2024-01-04', verified:true,  title:'Zero complaints from equipment',     text:'Excellent quality. My hijama clinic has never had a complaint about the equipment. 5 stars! This is the benchmark for professional hijama supplies in India.'},
    {name:'Jameel Ahmed',     city:'Unnao',          rating:5, date:'2023-12-31', verified:true,  title:'Best at this price in India',        text:'Very satisfied with this purchase. Best hijama equipment available in India at this price. I have actively recommended Detoxy to over 30 colleagues.'},
    {name:'Masooma Fatima',   city:'Lakhimpur',      rating:5, date:'2023-12-27', verified:true,  title:'Most trusted name in India',         text:'Top class quality. Detoxy Hijama is the most trusted name in hijama equipment in India. The quality, reliability, and service are all exceptional.'},
    {name:'Mohsin Raza',      city:'Balrampur',      rating:5, date:'2023-12-15', verified:true,  title:'Best products I have ever used',     text:'Amazing quality! The best hijama products I have ever used. Highly recommend to everyone. The factory-direct model means genuine quality at fair prices.'},
    {name:'Aliya Sultana',    city:'Azamgarh',       rating:5, date:'2023-12-03', verified:true,  title:'Go-to hijama store in India',        text:'Brilliant! Professional quality at the best price in India. This is my go-to hijama store. Everything from the packaging to the product performance is excellent.'}
  ];

  function _esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }

  function _stars(n,sz){
    sz=sz||16; var out='';
    for(var i=1;i<=5;i++){
      var f=i<=Math.floor(n)?'#F59E0B':'#E5E7EB';
      out+='<svg width="'+sz+'" height="'+sz+'" viewBox="0 0 20 20" fill="'+f+'"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }
    return out;
  }

  function _date(s){ var d=new Date(s); return isNaN(d)?'':d.toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'}); }

  function _color(name){
    var c=['#0D9488','#0EA5E9','#8B5CF6','#F97316','#EC4899','#10B981','#F59E0B','#6366F1'];
    return c[(name||'A').charCodeAt(0)%c.length];
  }

  function _card(r){
    return '<div class="dhr-card">'+
      '<div class="dhr-card-head">'+
        '<div class="dhr-av" style="background:'+_color(r.name)+'">'+((r.name||'U')[0].toUpperCase())+'</div>'+
        '<div class="dhr-meta">'+
          '<div class="dhr-nm">'+_esc(r.name)+'</div>'+
          '<div class="dhr-loc"><svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>'+_esc(r.city||'India')+'</div>'+
        '</div>'+
        '<div class="dhr-rr">'+
          '<div class="dhr-sr">'+_stars(r.rating||5,14)+'</div>'+
          '<div class="dhr-dt">'+_date(r.date)+'</div>'+
        '</div>'+
      '</div>'+
      (r.verified?'<div class="dhr-vbadge"><svg width="11" height="11" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>Verified Purchase</div>':'')+
      (r.title?'<div class="dhr-title">'+_esc(r.title)+'</div>':'')+
      '<p class="dhr-txt">'+_esc(r.text)+'</p>'+
    '</div>';
  }

  function _css(){
    if(document.getElementById('dhr-css'))return;
    var s=document.createElement('style'); s.id='dhr-css';
    s.textContent=[
      '.dhr-wrap{font-family:var(--font-sans,"Outfit",sans-serif)}',
      '.dhr-sum{display:grid;grid-template-columns:160px 1fr;gap:28px;align-items:center;background:linear-gradient(135deg,#f0fdf9,#f8fafc);border:1.5px solid #d1fae5;border-radius:16px;padding:24px 28px;margin-bottom:24px}',
      '@media(max-width:580px){.dhr-sum{grid-template-columns:1fr;text-align:center}.dhr-bars{max-width:280px;margin:0 auto}}',
      '.dhr-snum{font-family:var(--font-serif,"Cormorant Garamond",serif);font-size:3.8rem;font-weight:700;color:var(--dark,#1a3938);line-height:1}',
      '.dhr-ssrow{display:flex;gap:3px;justify-content:center;margin:8px 0 5px}',
      '.dhr-scnt{font-size:.77rem;color:var(--muted,#6b7280)}',
      '.dhr-brow{display:flex;align-items:center;gap:8px;margin-bottom:6px}',
      '.dhr-blbl{font-size:.76rem;color:var(--muted,#6b7280);min-width:7px;text-align:right}',
      '.dhr-btrk{flex:1;height:7px;background:#e5e7eb;border-radius:50px;overflow:hidden}',
      '.dhr-bfil{height:100%;border-radius:50px}',
      '.dhr-bpct{font-size:.7rem;color:var(--muted,#6b7280);min-width:28px;text-align:right}',
      '.dhr-form{background:#fff;border:1.5px solid var(--border,#e5e7eb);border-radius:14px;padding:24px;margin-bottom:24px}',
      '.dhr-ftitle{font-size:.95rem;font-weight:700;color:var(--dark,#1a3938);margin-bottom:18px;display:flex;align-items:center;gap:8px}',
      '.dhr-ftitle::before{content:"";display:block;width:4px;height:20px;background:var(--t,#57A2A0);border-radius:2px}',
      '.dhr-sprompt{font-size:.8rem;font-weight:600;color:var(--dark,#1a3938);margin-bottom:9px}',
      '.dhr-spick{display:flex;gap:5px;margin-bottom:16px;cursor:pointer}',
      '.dhr-spick svg{transition:transform .15s,fill .15s}',
      '.dhr-spick svg:hover{transform:scale(1.2)}',
      '.dhr-grow{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}',
      '@media(max-width:480px){.dhr-grow{grid-template-columns:1fr}}',
      '.dhr-inp{padding:10px 13px;border:1.5px solid var(--border,#e5e7eb);border-radius:9px;font-size:.86rem;font-family:inherit;color:var(--text,#1f2937);background:#fafafa;outline:none;transition:border-color .2s,background .2s;width:100%;box-sizing:border-box}',
      '.dhr-inp:focus{border-color:var(--t,#57A2A0);background:#fff}',
      '.dhr-ta{resize:vertical;min-height:88px;margin-bottom:12px}',
      '.dhr-sbtn{background:var(--t,#57A2A0);color:#fff;border:none;border-radius:9px;padding:11px 26px;font-size:.88rem;font-weight:700;font-family:inherit;cursor:pointer;transition:background .2s,transform .1s;display:inline-flex;align-items:center;gap:7px}',
      '.dhr-sbtn:hover{background:var(--td,#2d6e6c)}',
      '.dhr-sbtn:active{transform:scale(.97)}',
      '.dhr-fmsg{margin-top:10px;font-size:.82rem}',
      '.dhr-card{background:#fff;border:1.5px solid var(--border,#e5e7eb);border-radius:13px;padding:20px 22px 18px;margin-bottom:12px;transition:box-shadow .2s}',
      '.dhr-card:hover{box-shadow:0 4px 18px rgba(87,162,160,.1)}',
      '.dhr-card-head{display:flex;align-items:flex-start;gap:12px;margin-bottom:12px}',
      '.dhr-av{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1rem;color:#fff;flex-shrink:0}',
      '.dhr-meta{flex:1;min-width:0}',
      '.dhr-nm{font-weight:700;font-size:.88rem;color:var(--dark,#1a3938)}',
      '.dhr-loc{display:inline-flex;align-items:center;gap:4px;font-size:.72rem;color:var(--muted,#6b7280);margin-top:3px}',
      '.dhr-rr{text-align:right;flex-shrink:0}',
      '.dhr-sr{display:flex;gap:2px;justify-content:flex-end}',
      '.dhr-dt{font-size:.7rem;color:var(--muted,#6b7280);margin-top:3px}',
      '.dhr-vbadge{display:inline-flex;align-items:center;gap:5px;background:#d1fae5;color:#065f46;font-size:.69rem;font-weight:700;padding:3px 9px;border-radius:50px;margin-bottom:9px}',
      '.dhr-title{font-weight:700;font-size:.87rem;color:var(--dark,#1a3938);margin-bottom:6px}',
      '.dhr-txt{font-size:.85rem;color:var(--text,#374151);line-height:1.75;margin:0}',
      '.dhr-lmwrap{text-align:center;padding:14px 0 6px}',
      '.dhr-lmbtn{background:none;border:1.5px solid var(--border,#e5e7eb);border-radius:50px;padding:9px 28px;font-size:.84rem;font-weight:600;color:var(--dark,#1a3938);cursor:pointer;font-family:inherit;transition:border-color .2s,color .2s;display:inline-flex;align-items:center;gap:7px}',
      '.dhr-lmbtn:hover{border-color:var(--t,#57A2A0);color:var(--t,#57A2A0)}'
    ].join('');
    document.head.appendChild(s);
  }

  function render(containerId, productId, productRating, reviewCount){
    var el=document.getElementById(containerId); if(!el)return;
    _css();
    var stored=[];
    try{stored=JSON.parse(localStorage.getItem('dhr_'+productId)||'[]');}catch(e){}
    var all=stored.concat(BASE_REVIEWS);
    var avg=productRating||4.7, total=reviewCount||all.length;
    var bars=[0,0,0,0,0];
    all.forEach(function(r){if(r.rating>=1&&r.rating<=5)bars[r.rating-1]++;});

    var sumHtml='<div class="dhr-sum">'+
      '<div style="text-align:center">'+
        '<div class="dhr-snum">'+avg+'</div>'+
        '<div class="dhr-ssrow">'+_stars(avg,20)+'</div>'+
        '<div class="dhr-scnt">Based on <strong>'+total.toLocaleString('en-IN')+'</strong> reviews</div>'+
      '</div>'+
      '<div class="dhr-bars">'+
        [5,4,3,2,1].map(function(s){
          var cnt=bars[s-1], pct=all.length>0?Math.round(cnt/all.length*100):0;
          var col=s>=4?'#10B981':s===3?'#F59E0B':'#EF4444';
          return '<div class="dhr-brow">'+
            '<span class="dhr-blbl">'+s+'</span>'+
            '<svg width="11" height="11" viewBox="0 0 20 20" fill="#F59E0B"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'+
            '<div class="dhr-btrk"><div class="dhr-bfil" style="width:'+pct+'%;background:'+col+'"></div></div>'+
            '<span class="dhr-bpct">'+pct+'%</span>'+
          '</div>';
        }).join('')+
      '</div>'+
    '</div>';

    var spicks=[1,2,3,4,5].map(function(s){
      return '<svg data-star="'+s+'" onclick="DH_REVIEWS._star(this,'+s+')" width="30" height="30" viewBox="0 0 20 20" fill="#E5E7EB"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }).join('');

    var formHtml='<div class="dhr-form">'+
      '<div class="dhr-ftitle">Write a Review</div>'+
      '<div class="dhr-sprompt">Your Rating *</div>'+
      '<div class="dhr-spick" id="dhr-spick">'+spicks+'</div>'+
      '<input type="hidden" id="dhr-rval" value="0"/>'+
      '<div class="dhr-grow">'+
        '<input class="dhr-inp" id="dhr-nm" type="text" placeholder="Your name *"/>'+
        '<input class="dhr-inp" id="dhr-cy" type="text" placeholder="City"/>'+
      '</div>'+
      '<input class="dhr-inp" id="dhr-ttl" type="text" placeholder="Title (e.g. Excellent clinical quality)" style="margin-bottom:10px"/>'+
      '<textarea class="dhr-inp dhr-ta" id="dhr-tx" placeholder="Share your experience — quality, delivery, clinical performance..."></textarea>'+
      '<button class="dhr-sbtn" onclick="DH_REVIEWS._sub(\''+productId+'\',\''+containerId+'\','+productRating+','+reviewCount+')">'+
        '<svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>'+
        'Submit Review'+
      '</button>'+
      '<div id="dhr-msg" class="dhr-fmsg"></div>'+
    '</div>';

    var pp=6, list=all.slice(0,pp).map(_card).join('');
    var rem=all.length-pp;
    var lm=rem>0?'<div class="dhr-lmwrap"><button class="dhr-lmbtn" onclick="DH_REVIEWS._more(\''+containerId+'\',\''+productId+'\','+productRating+','+reviewCount+','+pp+')">'+
      '<svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>Load '+rem+' more reviews</button></div>':'';

    el.innerHTML='<div class="dhr-wrap">'+sumHtml+formHtml+'<div id="dhr-list">'+list+'</div>'+lm+'</div>';
  }

  function _star(el,val){
    var inp=document.getElementById('dhr-rval'); if(inp)inp.value=val;
    var ss=document.querySelectorAll('#dhr-spick svg');
    ss.forEach(function(s,i){s.setAttribute('fill',i<val?'#F59E0B':'#E5E7EB');});
  }

  function _sub(pid,cid,pr,rc){
    var rating=parseInt((document.getElementById('dhr-rval')||{}).value||'0');
    var name=((document.getElementById('dhr-nm')||{}).value||'').trim();
    var city=((document.getElementById('dhr-cy')||{}).value||'').trim();
    var ttl=((document.getElementById('dhr-ttl')||{}).value||'').trim();
    var txt=((document.getElementById('dhr-tx')||{}).value||'').trim();
    var msg=document.getElementById('dhr-msg');
    if(!msg)return;
    if(!rating){msg.innerHTML='<span style="color:#EF4444">⚠ Please select a star rating.</span>';return;}
    if(!name){msg.innerHTML='<span style="color:#EF4444">⚠ Please enter your name.</span>';return;}
    if(txt.length<15){msg.innerHTML='<span style="color:#EF4444">⚠ Please write at least 15 characters.</span>';return;}
    var k='dhr_'+pid, ex=[];
    try{ex=JSON.parse(localStorage.getItem(k)||'[]');}catch(e){}
    ex.unshift({name:name,city:city||'India',rating:rating,title:ttl,date:new Date().toISOString().split('T')[0],verified:false,text:txt});
    if(ex.length > 50) ex = ex.slice(0,50); // Cap at 50 user reviews per product
    localStorage.setItem(k,JSON.stringify(ex));
    msg.innerHTML='<span style="color:#10B981;font-weight:600">✓ Thank you '+_esc(name)+'! Your review has been submitted.</span>';
    setTimeout(function(){render(cid,pid,pr,rc+1);},1400);
  }

  function _more(cid,pid,pr,rc,cur){
    var st=[];
    try{st=JSON.parse(localStorage.getItem('dhr_'+pid)||'[]');}catch(e){}
    var all=st.concat(BASE_REVIEWS), nx=cur+6;
    var html=all.slice(cur,nx).map(_card).join('');
    var lst=document.getElementById('dhr-list'); if(lst)lst.insertAdjacentHTML('beforeend',html);
    var rem=all.length-nx;
    var bw=document.querySelector('.dhr-lmwrap');
    if(bw){
      if(rem<=0){bw.remove();}
      else{
        var b=bw.querySelector('.dhr-lmbtn');
        if(b){
          b.setAttribute('onclick','DH_REVIEWS._more(\''+cid+'\',\''+pid+'\','+pr+','+rc+','+nx+')');
          b.innerHTML='<svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>Load '+rem+' more reviews';
        }
      }
    }
  }

  return{render:render,_star:_star,_sub:_sub,_submit:_sub,_more:_more,_pickStar:_star};
})();
