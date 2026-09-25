/* =============================================
   CRANBERRY OVERSEAS — script.js
   GSAP 3.12.2 + ScrollTrigger
   ============================================= */

/* ── DATA ──────────────────────────────────── */

const DESTINATIONS = [
  {
    name: 'United Kingdom',
    abbr: 'UK',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    desc: 'Home to globally ranked institutions, the UK offers one-year Masters programmes, a 2-year Graduate Route post-study work visa, and access to one of the world\'s strongest academic cultures.',
    tags: ['1-yr Masters', 'Graduate Route Visa', 'Top 4 globally']
  },
  {
    name: 'Australia',
    abbr: 'AUS',
    img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
    desc: 'Australia boasts 7 of the world\'s top 100 universities, a 2–4 year post-study work visa, a high quality of life, and a multicultural environment that welcomes international students.',
    tags: ['2–4 yr Post-Study Visa', 'Top 100 universities', 'High quality of life']
  },
  {
    name: 'USA',
    abbr: 'USA',
    img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80',
    desc: 'The United States hosts the world\'s largest number of top-ranked universities, world-class research facilities, and an OPT programme that allows 3 years of post-study work for STEM graduates.',
    tags: ['3-yr OPT for STEM', 'Ivy League access', 'World\'s top research']
  },
  {
    name: 'Canada',
    abbr: 'CAN',
    img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=80',
    desc: 'Canada offers a clear pathway to permanent residency, 3-year post-graduation work permits, affordable tuition compared to the US, and a globally respected education system.',
    tags: ['PR Pathway', '3-yr Work Permit', 'Affordable tuition']
  },
  {
    name: 'Ireland',
    abbr: 'IRL',
    img: 'https://images.unsplash.com/photo-1564430789644-aa45c3cc9c14?auto=format&fit=crop&w=1200&q=80',
    desc: 'Ireland is Europe\'s fastest-growing economy, home to global tech giants, offering a 2-year post-study stay-back visa, English-medium education, and access to the European job market.',
    tags: ['2-yr Stay-Back Visa', 'EU job market', 'English medium']
  },
  {
    name: 'New Zealand',
    abbr: 'NZ',
    img: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80',
    desc: 'New Zealand combines world-class universities with an exceptional quality of life, a post-study work visa of up to 3 years, and a welcoming, safe multicultural society.',
    tags: ['3-yr Post-Study Visa', 'Safe environment', 'World-class quality']
  },
  {
    name: 'Singapore',
    abbr: 'SGP',
    img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    desc: 'Singapore is Asia\'s premier education and business hub — home to top-ranked universities, a strong English-language environment, and unmatched connectivity to global careers.',
    tags: ['Asia\'s business hub', 'Top-ranked unis', 'English medium']
  },
  {
    name: 'Dubai & UAE',
    abbr: 'UAE',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Dubai\'s international campuses bring world-class education to a tax-free, globally connected gateway — with no language barriers, proximity to India, and strong career prospects.',
    tags: ['No language barrier', 'Tax-free environment', 'Global connectivity']
  },
  {
    name: 'Europe',
    abbr: 'EUR',
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
    desc: 'European universities offer world-class education — often at lower tuition than the UK or US — with programmes in English, Schengen Zone access, and a rich cultural experience.',
    tags: ['Low tuition fees', 'Schengen access', 'English programmes']
  }
];

const UNIVERSITIES_R1 = [
  { name: 'University of Oxford', flag: '🇬🇧' },
  { name: 'University of Cambridge', flag: '🇬🇧' },
  { name: 'Harvard University', flag: '🇺🇸' },
  { name: 'MIT', flag: '🇺🇸' },
  { name: 'University of Melbourne', flag: '🇦🇺' },
  { name: 'Trinity College Dublin', flag: '🇮🇪' },
  { name: 'University of Toronto', flag: '🇨🇦' },
  { name: 'NUS Singapore', flag: '🇸🇬' },
  { name: 'University of Edinburgh', flag: '🇬🇧' },
  { name: 'NYU', flag: '🇺🇸' },
  { name: 'University College Dublin', flag: '🇮🇪' },
  { name: 'University of British Columbia', flag: '🇨🇦' },
  { name: 'University of Manchester', flag: '🇬🇧' },
  { name: 'University of Sydney', flag: '🇦🇺' },
  { name: 'IE Business School', flag: '🇪🇸' }
];

const UNIVERSITIES_R2 = [
  { name: 'University of Queensland', flag: '🇦🇺' },
  { name: 'McGill University', flag: '🇨🇦' },
  { name: 'NTU Singapore', flag: '🇸🇬' },
  { name: 'Auckland University', flag: '🇳🇿' },
  { name: 'Monash University', flag: '🇦🇺' },
  { name: 'University of Leeds', flag: '🇬🇧' },
  { name: 'University of Warwick', flag: '🇬🇧' },
  { name: 'Purdue University', flag: '🇺🇸' },
  { name: 'University of Galway', flag: '🇮🇪' },
  { name: 'University of Calgary', flag: '🇨🇦' },
  { name: 'University of Otago', flag: '🇳🇿' },
  { name: 'ESCP Business School', flag: '🇫🇷' },
  { name: 'RMIT University', flag: '🇦🇺' },
  { name: 'Maastricht University', flag: '🇳🇱' },
  { name: 'University of Nottingham', flag: '🇬🇧' }
];

const TESTIMONIALS = [
  /* NOTE: Replace with real student testimonials from https://www.cranberryoverseas.com */
  {
    quote: "Cranberry guided me through every step — from choosing the right programme at University of Melbourne to getting my visa approved in the first attempt. Their team genuinely cares about your success.",
    name: "Priya Mehta",
    detail: "Masters in Data Science · University of Melbourne, Australia",
    init: "PM"
  },
  {
    quote: "I was completely overwhelmed by the UK application process, but the Cranberry team made it feel manageable. They helped me secure a partial scholarship and my visa was approved within three weeks.",
    name: "Rohan Desai",
    detail: "MSc Computer Science · University of Edinburgh, UK",
    init: "RD"
  },
  {
    quote: "The counsellors at Cranberry understood exactly what I was looking for — they matched me with the perfect university in Canada that fit my budget AND my career goals. I can't thank them enough.",
    name: "Ananya Sharma",
    detail: "MBA · University of Toronto, Canada",
    init: "AS"
  },
  {
    quote: "From IELTS coaching to visa documentation, Cranberry handled everything professionally. Their 99.4% visa success rate is real — I'm living proof. My dream of studying in Ireland came true.",
    name: "Vikram Joshi",
    detail: "MSc Finance · Trinity College Dublin, Ireland",
    init: "VJ"
  },
  {
    quote: "My parents were very hesitant about sending me abroad, but Cranberry's counsellors took the time to address all their concerns. That personal touch made all the difference. Now I'm thriving in Singapore.",
    name: "Sneha Patil",
    detail: "Bachelor of Business · NUS Singapore",
    init: "SP"
  }
];

const FAQS = [
  {
    q: "What is the process for getting admission to a foreign university?",
    a: "The admission process involves several stages: initial counselling to identify the right destination and programme, shortlisting universities based on your profile, preparing and submitting applications with required documents (academic transcripts, SOP, LORs), receiving offer letters, applying for a student visa, and finally pre-departure briefing. Cranberry guides you through every single step."
  },
  {
    q: "How much does it cost to study abroad?",
    a: "Costs vary widely by country, university, and programme. For example, UK Masters programmes typically cost £15,000–£35,000 per year in tuition, while Australia ranges from AUD 20,000–45,000 annually. Living expenses add another £800–£1,500/month depending on the city. Our counsellors will help you find the best fit for your budget, including scholarship and loan options."
  },
  {
    q: "Is studying abroad safe for Indian students?",
    a: "Yes — the countries we send students to (UK, Australia, USA, Canada, Ireland, Singapore, New Zealand, UAE, Europe) are all safe destinations with large Indian student communities, dedicated international student support offices at universities, and strong law enforcement. Our pre-departure briefing covers safety tips and practical guidance for each destination."
  },
  {
    q: "Can I work while studying abroad?",
    a: "Most countries allow international students to work part-time during their studies. The UK, Australia, and New Zealand allow 20 hours/week during term time and full-time during vacations. Canada allows 20 hours/week on-campus without a separate permit. The USA requires Curricular Practical Training (CPT) for off-campus work. Our counsellors will brief you on exact regulations for your chosen destination."
  },
  {
    q: "How does Cranberry's scholarship assistance work?",
    a: "Our scholarship guidance improves your chances by up to 70% through profile building, early applications, and strong SOPs. We identify scholarships available at your target universities, advise on eligibility, help craft compelling applications, and ensure you apply well ahead of deadlines. Many of our students have secured partial or full scholarships."
  },
  {
    q: "What is Cranberry's visa success rate and how do you achieve it?",
    a: "Our visa success rate is 99.4% — achieved through meticulous documentation, thorough mock interviews, and ensuring every application is prepared in complete compliance with the destination country's requirements. Our visa specialists have deep knowledge of immigration rules for all 9+ countries we cover and stay continuously updated on policy changes."
  },
  {
    q: "Which test scores do I need for studying abroad?",
    a: "The requirements vary by destination: UK/Australia/Canada/NZ typically require IELTS (6.0–7.0) or PTE; USA often requires TOEFL (80–100) and GRE/GMAT for postgraduate courses; some European universities accept IELTS or TOEFL. SAT is needed for US undergraduate admissions. Cranberry offers coaching for all these exams at our branches."
  },
  {
    q: "How soon should I start the application process?",
    a: "We recommend starting at least 12–18 months before your intended intake. This allows sufficient time for test preparation, shortlisting universities, preparing documents, applying for universities, waiting for offer letters, arranging finances, and completing the visa process. Starting early also improves your scholarship chances significantly."
  }
];

const BRANCHES = {
  thane: {
    name: "Thane (HQ)",
    address: "105-106, City Centre, Ghodbunder Road, Thane West – 400615",
    phone: "+91 22 4123 4444",
    mobile: "+91 98672 36666",
    email: "thane@cranberryoverseas.com",
    hours: "Mon–Sat: 10:00 AM – 7:00 PM"
  },
  dadar: {
    name: "Dadar",
    address: "3rd Floor, Guru Building, Dadar West, Mumbai – 400028",
    phone: "+91 22 4123 4445",
    mobile: "+91 98672 36667",
    email: "dadar@cranberryoverseas.com",
    hours: "Mon–Sat: 10:00 AM – 7:00 PM"
  },
  nashik: {
    name: "Nashik",
    address: "2nd Floor, Trade Center, College Road, Nashik – 422005",
    phone: "+91 253 2318 000",
    mobile: "+91 98672 36668",
    email: "nashik@cranberryoverseas.com",
    hours: "Mon–Sat: 10:00 AM – 7:00 PM"
  },
  dombivli: {
    name: "Dombivli",
    address: "Shop No. 5, Arihant Arcade, Manpada Road, Dombivli East – 421201",
    phone: "+91 251 2873 000",
    mobile: "+91 98672 36669",
    email: "dombivli@cranberryoverseas.com",
    hours: "Mon–Sat: 10:00 AM – 7:00 PM"
  },
  vashi: {
    name: "Vashi",
    address: "305, Aravali Business Centre, Sector 17, Vashi, Navi Mumbai – 400703",
    phone: "+91 22 4123 4446",
    mobile: "+91 98672 36670",
    email: "vashi@cranberryoverseas.com",
    hours: "Mon–Sat: 10:00 AM – 7:00 PM"
  }
};

/* ── LOADER ────────────────────────────────── */

function initLoader() {
  const loader = document.getElementById('loader');
  const fill   = document.getElementById('loaderFill');
  if (!loader) return;

  let progress = 0;
  const tick = () => {
    progress += Math.random() * 18 + 4;
    if (progress > 100) progress = 100;
    fill.style.width = progress + '%';
    if (progress < 100) {
      setTimeout(tick, 80 + Math.random() * 60);
    } else {
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.6s ease';
        setTimeout(() => {
          loader.style.display = 'none';
          document.body.classList.remove('is-loading');
        }, 600);
      }, 200);
    }
  };
  tick();
}

/* ── CURSOR FOLLOWER ───────────────────────── */

function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  const dot  = cursor.querySelector('.cursor__dot');
  const ring = cursor.querySelector('.cursor__ring');

  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
  });

  const lerp = (a, b, t) => a + (b - a) * t;

  function animate() {
    rx = lerp(rx, mx, 0.1);
    ry = lerp(ry, my, 0.1);
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  const hoverEls = document.querySelectorAll('a, button, .tmember, .testcard, .svc, .abroad__item');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ── NAV ───────────────────────────────────── */

function initNav() {
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('navBurger');
  const menu   = document.getElementById('mMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    menu.setAttribute('aria-hidden', !open);
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    });
  });
}

/* ── DESTINATIONS ──────────────────────────── */

function initDestinations() {
  /* Populate desktop sticky panel images */
  const imgPanel = document.getElementById('destImages');
  const triggers = document.getElementById('destTriggers');
  const mobile   = document.getElementById('destMobile');

  if (!imgPanel || !triggers || !mobile) return;

  /* Build images */
  DESTINATIONS.forEach((d, i) => {
    const div = document.createElement('div');
    div.className = 'dest-img' + (i === 0 ? ' active' : '');
    div.setAttribute('data-idx', i);
    div.innerHTML = `<img src="${d.img}" alt="${d.name}" loading="${i === 0 ? 'eager' : 'lazy'}">`;
    imgPanel.appendChild(div);
  });

  /* Build triggers (invisible scroll spacers) */
  DESTINATIONS.forEach((_d, i) => {
    const div = document.createElement('div');
    div.className = 'dest-trigger';
    div.setAttribute('data-idx', i);
    triggers.appendChild(div);
  });

  /* Build mobile cards */
  DESTINATIONS.forEach(d => {
    const div = document.createElement('div');
    div.className = 'dest-card-m';
    div.innerHTML = `
      <div class="dest-card-m__img">
        <img src="${d.img}" alt="${d.name}" loading="lazy">
      </div>
      <div class="dest-card-m__body">
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
        <div class="dest-card-m__tags">${d.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>`;
    mobile.appendChild(div);
  });

  /* Desktop: IntersectionObserver to switch active destination */
  const leftCount = document.getElementById('destCount');
  const leftName  = document.getElementById('destName');
  const leftAbbr  = document.getElementById('destAbbr');
  const leftDesc  = document.getElementById('destDesc');
  const leftTags  = document.getElementById('destTags');

  if (window.matchMedia('(max-width: 768px)').matches) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const idx = parseInt(entry.target.getAttribute('data-idx'), 10);
      const d   = DESTINATIONS[idx];

      /* Swap images */
      document.querySelectorAll('.dest-img').forEach((el, i) => {
        el.classList.toggle('active', i === idx);
      });

      /* Update left panel with brief cross-fade */
      const panel = document.getElementById('destLeft');
      panel.style.opacity = '0';
      panel.style.transform = 'translateY(10px)';
      setTimeout(() => {
        leftCount.textContent = String(idx + 1).padStart(2, '0');
        leftName.textContent  = d.name;
        leftAbbr.textContent  = d.abbr;
        leftDesc.textContent  = d.desc;
        leftTags.innerHTML    = d.tags.map(t => `<span>${t}</span>`).join('');
        panel.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
        panel.style.opacity   = '1';
        panel.style.transform = 'none';
      }, 120);
    });
  }, {
    threshold: 0.5,
    rootMargin: '-20% 0px -20% 0px'
  });

  document.querySelectorAll('.dest-trigger').forEach(el => observer.observe(el));
}

/* ── UNIVERSITIES MARQUEE ──────────────────── */

function initUniversities() {
  function buildRow(container, unis) {
    if (!container) return;
    const doubled = [...unis, ...unis];
    const html = doubled.map(u =>
      `<span class="uni-chip"><span class="uni-chip-flag">${u.flag}</span>${u.name}</span>`
    ).join('');
    container.innerHTML = html;
  }
  buildRow(document.getElementById('univ1'), UNIVERSITIES_R1);
  buildRow(document.getElementById('univ2'), UNIVERSITIES_R2);
}

/* ── TESTIMONIALS ──────────────────────────── */

function initTestimonials() {
  const track = document.getElementById('testiTrack');
  const dots  = document.getElementById('testiDots');
  const prev  = document.getElementById('testiPrev');
  const next  = document.getElementById('testiNext');
  if (!track) return;

  TESTIMONIALS.forEach((t, i) => {
    const slide = document.createElement('div');
    slide.className = 'testi-card';
    slide.innerHTML = `
      <div class="testi-card__inner">
        <p class="testi-card__quote">${t.quote}</p>
        <div class="testi-card__meta">
          <div class="testi-card__avatar">${t.init}</div>
          <div>
            <div class="testi-card__name">${t.name}</div>
            <div class="testi-card__detail">${t.detail}</div>
          </div>
        </div>
      </div>`;
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'testi__dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dots.appendChild(dot);
  });

  let current = 0;
  let autoTimer;

  function go(n) {
    current = (n + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.testi__dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function startAuto() {
    autoTimer = setInterval(() => go(current + 1), 6000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  prev.addEventListener('click', () => { go(current - 1); resetAuto(); });
  next.addEventListener('click', () => { go(current + 1); resetAuto(); });

  document.querySelectorAll('.testi__dot').forEach((d, i) => {
    d.addEventListener('click', () => { go(i); resetAuto(); });
  });

  startAuto();
}

/* ── FAQ ────────────────────────────────────── */

function initFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;

  FAQS.forEach(item => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <button class="faq-item__q" aria-expanded="false">
        <span>${item.q}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>
      <div class="faq-item__a">
        <div class="faq-item__a-inner">${item.a}</div>
      </div>`;
    list.appendChild(el);
  });

  list.addEventListener('click', e => {
    const btn = e.target.closest('.faq-item__q');
    if (!btn) return;
    const item   = btn.parentElement;
    const answer = item.querySelector('.faq-item__a');
    const isOpen = item.classList.contains('open');

    /* Close all */
    list.querySelectorAll('.faq-item.open').forEach(open => {
      open.classList.remove('open');
      open.querySelector('.faq-item__a').style.maxHeight = '0';
      open.querySelector('.faq-item__q').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

/* ── BRANCHES ───────────────────────────────── */

function initBranches() {
  const info = document.getElementById('branchInfo');
  const tabs = document.querySelectorAll('.branch-tab');
  if (!info || !tabs.length) return;

  function showBranch(key) {
    const b = BRANCHES[key];
    if (!b) return;
    info.innerHTML = `
      <p class="branch-name">${b.name}</p>
      <p>${b.address}</p>
      <a href="tel:${b.phone.replace(/\s/g, '')}">${b.phone}</a>
      <a href="tel:${b.mobile.replace(/\s/g, '')}">${b.mobile}</a>
      <a href="mailto:${b.email}">${b.email}</a>
      <p style="margin-top:0.75rem;font-size:0.75rem;letter-spacing:0.08em;color:var(--t-dim)">${b.hours}</p>`;
  }

  showBranch('thane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      showBranch(tab.getAttribute('data-b'));
    });
  });
}

/* ── CONTACT FORM ───────────────────────────── */

function initForm() {
  const form = document.getElementById('cForm');
  const ok   = document.getElementById('formOk');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-btn');
    btn.disabled = true;
    btn.querySelector('span').textContent = 'Sending…';

    setTimeout(() => {
      form.hidden = true;
      ok.hidden   = false;
    }, 1200);
  });
}

/* ── SLOT-MACHINE REEL COUNTERS ─────────────── */

function buildReel(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const dec    = parseInt(el.getAttribute('data-dec') || '0', 10);
  const sfx    = el.getAttribute('data-sfx') || '';

  const display = dec > 0
    ? (target / Math.pow(10, dec)).toFixed(dec)
    : String(target);

  const reel = document.createElement('div');
  reel.className = 'reel';

  const allChars = (display + sfx).split('');
  allChars.forEach(ch => {
    const digit = parseInt(ch, 10);
    if (!isNaN(digit)) {
      const col   = document.createElement('div');
      col.className = 'reel__col';
      col.setAttribute('data-digit', digit);
      const strip = document.createElement('div');
      strip.className = 'reel__strip';
      for (let d = 0; d <= 9; d++) {
        const span   = document.createElement('span');
        span.className = 'reel__digit';
        span.textContent = d;
        strip.appendChild(span);
      }
      col.appendChild(strip);
      reel.appendChild(col);
    } else {
      const s = document.createElement('span');
      s.className = 'reel__static';
      s.textContent = ch;
      reel.appendChild(s);
    }
  });

  el.replaceWith(reel);
  return reel;
}

function initReels() {
  document.querySelectorAll('.counter').forEach(el => {
    const reel = buildReel(el);
    const cols  = reel.querySelectorAll('.reel__col');

    const obs = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      obs.disconnect();

      if (typeof gsap !== 'undefined') {
        cols.forEach((col, i) => {
          const d = parseInt(col.getAttribute('data-digit'), 10);
          gsap.fromTo(
            col.querySelector('.reel__strip'),
            { yPercent: 0 },
            {
              yPercent: -(d * 10),
              duration: 1.4 + i * 0.06,
              ease: 'power4.out',
              delay: i * 0.04,
            }
          );
        });
      }
    }, { threshold: 0.5 });

    obs.observe(reel);
  });
}

/* ── LENIS SMOOTH SCROLL ────────────────────── */

function initLenis() {
  /* Lenis is loaded via CDN — access via window to satisfy strict TS linters */
  const LenisCtor = window['Lenis'];
  if (!LenisCtor) return null;

  const lenis = new LenisCtor({
    lerp: 0.1,
    smoothWheel: true,
    syncTouch: false,
  });

  /* Drive GSAP ScrollTrigger from Lenis virtual scroll */
  lenis.on('scroll', () => {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.update();
  });

  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

/* ── STATEMENT WORD-BY-WORD SCRUB ───────────── */

function initStatementScrub() {
  const big = document.querySelector('.statement__big');
  if (!big || typeof gsap === 'undefined') return;

  const raw   = big.innerHTML;
  const words = raw.trim().split(/\s+/);
  big.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');

  const wordEls = big.querySelectorAll('.word');
  gsap.set(wordEls, { color: 'rgba(23,45,74,0.15)' });

  gsap.to(wordEls, {
    color: 'rgba(23,45,74,1)',
    stagger: 0.06,
    ease: 'none',
    scrollTrigger: {
      trigger: '.statement',
      start: 'top 75%',
      end: 'bottom 35%',
      scrub: 0.8,
    }
  });
}

/* ── GSAP ANIMATIONS ────────────────────────── */

function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  /* ─ HERO ───────────────────────────────── */

  /* Hero line reveals — on load, staggered */
  const heroLines = document.querySelectorAll('.hero__h .ln span');
  gsap.set(heroLines, { yPercent: 115 });
  gsap.to(heroLines, {
    yPercent: 0,
    duration: 1.3,
    ease: 'power4.out',
    stagger: 0.14,
    delay: 0.25,
  });

  /* Hero supporting elements */
  const heroSupport = ['#heroEyebrow', '#heroSub', '#heroBtns', '#heroFoot'];
  gsap.set(heroSupport, { opacity: 0, y: 20 });
  gsap.to(heroSupport, {
    opacity: 1,
    y: 0,
    duration: 1.0,
    ease: 'power3.out',
    stagger: 0.12,
    delay: 0.85,
  });

  /* Hero: dramatic parallax — image and veil separate rates */
  gsap.to('#heroBgImg', {
    yPercent: 42,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });
  gsap.to('.hero__bg-veil', {
    opacity: 0.95,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: '60% top', scrub: true },
  });

  /* ─ SECTION HEADINGS — scroll-scrubbed line reveals ── */

  document.querySelectorAll('h2 .ln span').forEach(span => {
    const h2 = span.closest('h2');
    /* Skip headings with their own dedicated ScrollTrigger blocks below */
    if (h2.closest('.mvv__panel')) return;
    if (h2.classList.contains('services__hed')) return;
    if (h2.classList.contains('cta-full__h')) return;
    if (h2.classList.contains('dest__hed')) return;
    const trigger = span.closest('.ln');
    gsap.from(span, {
      yPercent: 110,
      ease: 'power4.out',
      scrollTrigger: {
        trigger,
        start: 'top 88%',
        end: 'top 55%',
        scrub: 0.5,
      }
    });
  });

  /* ─ ABOUT ──────────────────────────────── */

  /* Clip-path image reveals — scroll-scrubbed */
  document.querySelectorAll('.clip-reveal img').forEach(img => {
    gsap.fromTo(img,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        ease: 'power3.out',
        scrollTrigger: {
          trigger: img.closest('.clip-reveal'),
          start: 'top 85%',
          end: 'top 35%',
          scrub: 0.6,
        }
      }
    );
  });

  /* About images: asymmetric parallax for depth */
  gsap.to('.about__img-main img', {
    yPercent: -12,
    ease: 'none',
    scrollTrigger: { trigger: '.about', start: 'top bottom', end: 'bottom top', scrub: true },
  });
  gsap.to('.about__img-sm img', {
    yPercent: -24,
    ease: 'none',
    scrollTrigger: { trigger: '.about', start: 'top bottom', end: 'bottom top', scrub: true },
  });

  /* ─ MVV STICKY PANELS — content reveals ── */

  document.querySelectorAll('.mvv__panel').forEach(panel => {
    /* Each panel's heading lines: scrub-in as panel enters */
    panel.querySelectorAll('.mvv__h .ln span').forEach(span => {
      gsap.from(span, {
        yPercent: 110,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: panel,
          start: 'top 90%',
          end: 'top 45%',
          scrub: 0.5,
        }
      });
    });

    /* Eyebrow + body copy: staggered fade-up */
    const copy = panel.querySelectorAll('.eyebrow, .mvv__p');
    gsap.from(copy, {
      opacity: 0,
      y: 30,
      duration: 0.9,
      stagger: 0.14,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: panel,
        start: 'top 70%',
        toggleActions: 'play none none reset',
      }
    });

  });

  /* ─ SERVICES — clip-path wipe reveal ───── */

  /* Section heading */
  document.querySelectorAll('.services__hed .ln span').forEach(span => {
    gsap.from(span, {
      yPercent: 110,
      ease: 'power4.out',
      scrollTrigger: { trigger: span.closest('.ln'), start: 'top 88%', end: 'top 50%', scrub: 0.5 }
    });
  });

  /* Each service row wipes in from left */
  document.querySelectorAll('.svc').forEach((svc, i) => {
    gsap.fromTo(svc,
      { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
      {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: svc,
          start: 'top 88%',
          toggleActions: 'play none none reset',
        },
        delay: (i % 3) * 0.06,
      }
    );
  });

  /* ─ CTA SECTION ────────────────────────── */

  gsap.to('.cta-full__img', {
    yPercent: 22,
    ease: 'none',
    scrollTrigger: { trigger: '.cta-full', start: 'top bottom', end: 'bottom top', scrub: true },
  });

  document.querySelectorAll('.cta-full__h .ln span').forEach(span => {
    gsap.from(span, {
      yPercent: 110,
      ease: 'power4.out',
      scrollTrigger: { trigger: '.cta-full', start: 'top 88%', end: 'top 50%', scrub: 0.5 }
    });
  });

  /* ─ DESTINATIONS heading ────────────────── */

  document.querySelectorAll('.dest__hed .ln span').forEach(span => {
    gsap.from(span, {
      yPercent: 110,
      ease: 'power4.out',
      scrollTrigger: { trigger: span.closest('.ln'), start: 'top 90%', end: 'top 55%', scrub: 0.5 }
    });
  });

  /* ─ WHY CRANBERRY — reasons scrub in ───── */

  gsap.from('.why__photo img', {
    scale: 1.12,
    ease: 'none',
    scrollTrigger: { trigger: '.why', start: 'top bottom', end: 'bottom top', scrub: true },
  });

  /* ─ TEAM GRID ──────────────────────────── */

  gsap.from('.tmember', {
    opacity: 0,
    y: 44,
    duration: 0.85,
    stagger: 0.09,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.team__grid', start: 'top 82%', toggleActions: 'play none none reset' },
  });

  /* ─ IMPACT NUMBERS — section entrance ──── */

  gsap.from('.impact__inner', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.impact', start: 'top 78%', toggleActions: 'play none none reset' },
  });

  /* ─ UNIVERSITIES marquee entrance ──────── */

  gsap.from('.univs__track-wrap', {
    opacity: 0,
    y: 28,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.univs__header', start: 'top 80%', toggleActions: 'play none none reset' },
  });
}

/* ── INTERSECTION OBSERVER REVEALS ──────────── */

function initRevealObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;

      /* Staggered delay for siblings */
      const siblings = el.parentElement.querySelectorAll(
        '.fade-up, .fade-right, .fade-svc, .testcard, .jstep'
      );
      const idx = Array.from(siblings).indexOf(el);
      el.style.transitionDelay = (idx * 0.07) + 's';
      el.classList.add('revealed');
      obs.unobserve(el);
    });
  }, { threshold: 0.15 });

  /* .svc/.fade-svc handled by GSAP ScrollTrigger; exclude here */
  document.querySelectorAll('.fade-up, .fade-right, .testcard, .jstep').forEach(el => {
    obs.observe(el);
  });
}

/* ── BOOT ───────────────────────────────────── */

function boot() {
  initLoader();
  initNav();
  initDestinations();
  initUniversities();
  initTestimonials();
  initFAQ();
  initBranches();
  initForm();
  initRevealObserver();
  initCursor();

  /* Wait for GSAP + Lenis (both deferred) */
  let elapsed = 0;
  const check = setInterval(() => {
    elapsed += 50;
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      clearInterval(check);
      initLenis();          /* Smooth scroll — must be before ScrollTrigger usage */
      initGSAP();           /* All scroll-driven animations */
      initStatementScrub(); /* Needs ScrollTrigger, runs after initGSAP sets it up */
      initReels();          /* Slot-machine counters — uses GSAP internally */
    } else if (elapsed > 4000) {
      clearInterval(check);
    }
  }, 50);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
