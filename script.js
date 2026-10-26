/* =============================================
   YOGI'S LANGUAGE SCHOOL — script.js
   GSAP 3.12.2 + ScrollTrigger
   ============================================= */

/* ── DATA ──────────────────────────────────── */

const DESTINATIONS = [
  {
    name: 'Daily Conversations for Beginners',
    abbr: 'A1 · Beginner',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    desc: 'Foundational dialogues covering greetings, introductions, shopping, food ordering, and daily essentials.',
    tags: ['A1 · Beginner', '50 Topics', 'Daily Essentials'],
    btn: 'Start Stage 01 →'
  },
  {
    name: 'Daily Conversations for Elementary Learners',
    abbr: 'A2 · Elementary',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    desc: 'Practical everyday situations including routines, weather, making plans, work and life balance.',
    tags: ['A2 · Elementary', '50 Topics', 'Conversational Fluency'],
    btn: 'Start Stage 02 →'
  },
  {
    name: 'Situational Dialogues',
    abbr: 'A2 · Practical',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    desc: 'Real-world scenarios for airports, bank transactions, doctor appointments, hotel check-ins, and interviews.',
    tags: ['A2 · Practical', '50 Situations', 'Real-World Scenarios'],
    btn: 'Start Stage 03 →'
  },
  {
    name: 'Speaking Patterns',
    abbr: 'All Levels · Patterns',
    img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80',
    desc: 'Master 70 habitual sentence starters and phrase structures native speakers use in spontaneous conversation.',
    tags: ['All Levels · Patterns', '70 Patterns', 'Sentence Habits'],
    btn: 'Start Stage 04 →'
  },
  {
    name: 'Essential Grammar Rules',
    abbr: 'Grammar · Visual',
    img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    desc: 'Key English grammar principles explained clearly through structured visual flow diagrams rather than complex jargon.',
    tags: ['Grammar · Visual', '50 Rules', 'Clear & Practical'],
    btn: 'Start Stage 05 →'
  }
];

const UNIVERSITIES_R1 = [
  { name: 'Introducing Yourself', flag: '💬' },
  { name: 'Talking About Daily Routines', flag: '⏰' },
  { name: 'At the Airport Check-in', flag: '✈️' },
  { name: 'Hotel Reservations & Inquiries', flag: '🏨' },
  { name: 'Job Interview Dialogues', flag: '💼' },
  { name: 'Doctor Consultation & Health', flag: '🩺' },
  { name: 'Ordering at a Restaurant', flag: '☕' },
  { name: 'Making Weekend Plans', flag: '📅' },
  { name: 'Asking for Directions', flag: '🗺️' },
  { name: 'Shopping & Price Inquiries', flag: '🛍️' },
  { name: 'Hobbies & Free Time', flag: '🎨' },
  { name: 'Expressing Opinions ("I think...")', flag: '💡' },
  { name: 'Polite Requests ("Could you...")', flag: '🤝' },
  { name: 'Present Simple & Continuous', flag: '📖' },
  { name: 'IELTS Speaking Mock Drills', flag: '🎯' }
];

const UNIVERSITIES_R2 = [
  { name: '70 Speaking Patterns', flag: '🗣️' },
  { name: '50 Essential Grammar Rules', flag: '📘' },
  { name: '50 Situational Dialogues', flag: '🎬' },
  { name: '50 Daily Conversations (A1)', flag: '🌱' },
  { name: '50 Daily Conversations (A2)', flag: '🌿' },
  { name: 'Overcoming Speaking Hesitation', flag: '✨' },
  { name: 'Workplace & Meeting Phrasing', flag: '📊' },
  { name: 'Prepositions of Place & Time', flag: '📍' },
  { name: 'TOEFL Academic Listening', flag: '🎧' },
  { name: 'Natural Pronunciation Drills', flag: '🎙️' },
  { name: 'Agreeing & Disagreeing Naturally', flag: '💭' },
  { name: 'Essential Sentence Starters', flag: '⚡' },
  { name: 'Guided Audio Practice', flag: '🔊' },
  { name: 'Nashik Spoken English Batches', flag: '📍' },
  { name: 'Confident Public Speaking', flag: '🏆' }
];

const TESTIMONIALS = [
  {
    quote: "Yogi Sir’s dialogue drills completely removed my fear of speaking in English. Before joining, I used to hesitate in conversations, but practicing real situational dialogues gave me the confidence to speak fluently and naturally.",
    name: "Rohan Kulkarni",
    detail: "Spoken English & Communication Skills · Nashik",
    init: "RK"
  },
  {
    quote: "The 3-step method — Listen, Read, Speak — makes learning so intuitive. Rather than memorizing rules from a textbook, we practiced speaking out loud every day. My pronunciation and fluency improved dramatically.",
    name: "Pooja Patil",
    detail: "Everyday English Fluency · Yogi's Language School",
    init: "PP"
  },
  {
    quote: "The visual grammar diagrams made concepts click that I had struggled with for years. Yogi's Language School provides such a supportive and positive atmosphere where you never feel judged when making mistakes.",
    name: "Amit Deshmukh",
    detail: "English Enhancement Batch · Nashik",
    init: "AD"
  },
  {
    quote: "The IELTS preparation with Yogi Sir was thorough and practical. The speaking mock tests and personalized feedback on my phrasing helped me achieve my target band score on the first attempt.",
    name: "Snehal Shinde",
    detail: "IELTS Preparation Batch · Yogi's Language School",
    init: "SS"
  },
  {
    quote: "Learning the 70 speaking patterns gave me the sentence structures native speakers use every day. Now I don't have to pause and translate in my head before answering. Truly the best language institute in Nashik!",
    name: "Gaurav Joshi",
    detail: "Communication Skills & Dialogue Drills · Nashik",
    init: "GJ"
  }
];

const FAQS = [
  {
    q: "How does the learning method work at Yogi's Language School?",
    a: "Every lesson follows our proven 3-step format: 1. Listen — hit play and hear real conversations at natural, everyday speed; 2. Read — follow along with the complete transcript and phrase glossary; 3. Speak — practice out loud with guided dialogue prompts. This active approach builds natural speaking habits."
  },
  {
    q: "Who are the courses designed for?",
    a: "Our courses are designed for students, job seekers, and working professionals who want to overcome hesitation, improve spoken English fluency, and develop strong communication skills. We offer levels from A1 (Beginner) to A2 (Elementary) and advanced communication."
  },
  {
    q: "Do you teach grammar, or only spoken English?",
    a: "We teach both! Our 50 Essential Grammar Rules break down English grammar using simple, structured visual diagrams rather than confusing textbook jargon. You learn how grammar works naturally within real-world dialogue."
  },
  {
    q: "What are the 70 Speaking Patterns?",
    a: "Speaking patterns are habitual sentence starters and phrase structures that fluent speakers use in spontaneous conversation (e.g., expressing opinions, polite requests, agreeing, disagreeing). Mastering these patterns helps you speak without pausing to translate in your head."
  },
  {
    q: "Do you offer IELTS and TOEFL preparation?",
    a: "Yes. In addition to Spoken English and English Enhancement, Yogi's Language School provides focused preparation for both IELTS and TOEFL exams, covering Listening, Reading, Writing, and intensive Speaking mock sessions."
  },
  {
    q: "Can beginners with very basic English join?",
    a: "Absolutely. Our A1 Daily Conversations track starts with absolute basics — greetings, introductions, shopping, food ordering, and asking for directions. Our supportive mentors ensure a friendly, encouraging environment for all beginners."
  },
  {
    q: "What are Situational Dialogues?",
    a: "Situational Dialogues prepare you for real-world scenarios you encounter in daily life, work, and travel — such as checking in at an airport, speaking to a doctor, hotel reservations, bank transactions, and job interviews."
  },
  {
    q: "Where is Yogi's Language School located?",
    a: "Yogi's Language School is based in Nashik, Maharashtra. You can explore our Learning Hub online, follow our lessons on Instagram (@yogislanguageschool / @imyogisir), or get in touch for batch timings and enrollment details."
  }
];

const BRANCHES = {
  nashik: {
    name: "Nashik Institute (Offline Classroom)",
    address: "College Road / Ramdas Colony, Nashik, Maharashtra",
    phone: "Nashik, Maharashtra",
    mobile: "@yogislanguageschool",
    email: "Instagram: @imyogisir",
    hours: "Mon–Sat: 9:00 AM – 7:00 PM"
  },
  online: {
    name: "Online Interactive Batches",
    address: "Live Virtual Sessions · Pan-India & Global Learners",
    phone: "Live Zoom / Google Meet",
    mobile: "@yogislanguageschool",
    email: "DM via Instagram",
    hours: "Flexible Morning & Evening Batches"
  },
  ielts: {
    name: "IELTS & TOEFL Prep Wing",
    address: "Dedicated Exam Coaching · Nashik & Online",
    phone: "Listening, Reading, Writing & Speaking",
    mobile: "@yogislanguageschool",
    email: "Exam Practice & Mock Tests",
    hours: "Mon–Sat: 10:00 AM – 6:30 PM"
  },
  spoken: {
    name: "Daily Dialogue & Speaking Club",
    address: "Interactive Conversation Practice Groups",
    phone: "A1 to B2 Dialogue Drills",
    mobile: "@yogislanguageschool",
    email: "Pronunciation & Confidence Coaching",
    hours: "Daily Practice Sessions"
  },
  mentorship: {
    name: "One-on-One Confidence Mentoring",
    address: "Personalized Coaching with Yogi Sir",
    phone: "Individual Accent & Hesitation Review",
    mobile: "@imyogisir",
    email: "Personalized Study Roadmap",
    hours: "By Appointment"
  }
};

/* ── LOADER ────────────────────────────────── */

function initLoader() {
  const loader = document.getElementById('loader');
  const fill   = document.getElementById('loaderFill');
  if (!loader) {
    document.body.classList.remove('is-loading');
    return;
  }

  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    loader.classList.add('done');
    document.body.classList.remove('is-loading');
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    loader.style.pointerEvents = 'none';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 600);
    // trigger hero reveal
    if (typeof gsap !== 'undefined') {
      try {
        gsap.timeline()
          .to('.hero__bg-img', { scale: 1, duration: 1.8, ease: 'power2.out' }, 0);
      } catch (err) {}
    }
  };

  let progress = 0;
  const tick = () => {
    progress += Math.random() * 20 + 10;
    if (progress > 100) progress = 100;
    if (fill) fill.style.width = progress + '%';

    if (progress < 100) {
      setTimeout(tick, 35);
    } else {
      setTimeout(dismiss, 250);
    }
  };
  setTimeout(tick, 50);

  // Safety fallback: ensure loader is NEVER stuck on live deployments
  setTimeout(dismiss, 1800);
}

/* ── CUSTOM CURSOR ─────────────────────────── */

function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  // Disable on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) {
    cursor.style.display = 'none';
    return;
  }

  const dot  = cursor.querySelector('.cursor__dot');
  const ring = cursor.querySelector('.cursor__ring');

  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  window.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    if (dot) {
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    }
  });

  const lerp = (a, b, t) => a + (b - a) * t;

  function animate() {
    rx = lerp(rx, mx, 0.15);
    ry = lerp(ry, my, 0.15);
    if (ring) {
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    }
    requestAnimationFrame(animate);
  }
  animate();

  // Hover states on interactive elements
  const hoverEls = document.querySelectorAll('a, button, [role="button"], input, select, .dest__trigger');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

/* ── NAV & MOBILE MENU ─────────────────────── */

function initNav() {
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('navBurger');
  const menu   = document.getElementById('mMenu');
  if (!nav) return;

  // Scroll class
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile menu toggle
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      menu.classList.toggle('open', open);
      menu.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ── DESTINATIONS / PROGRAMS SECTION ──────────────────── */

function initDestinations() {
  const container = document.getElementById('destinations');
  if (!container) return;

  const imgPanel = document.getElementById('destImages');
  const triggers = document.getElementById('destTriggers');
  const mobile   = document.getElementById('destMobile');

  // Desktop: build image layers + scroll triggers
  DESTINATIONS.forEach((d, i) => {
    // Image layer
    if (imgPanel) {
      const div = document.createElement('div');
      div.className = `dest-img ${i === 0 ? 'active' : ''}`;
      div.setAttribute('data-idx', i);
      div.innerHTML = `<img src="${d.img}" alt="${d.name}" loading="lazy">`;
      imgPanel.appendChild(div);
    }

    // Scroll trigger spacer
    if (triggers) {
      const div = document.createElement('div');
      div.className = 'dest-trigger';
      div.setAttribute('data-idx', i);
      triggers.appendChild(div);
    }

    // Mobile cards
    if (mobile) {
      const div = document.createElement('div');
      div.className = 'dest-card-m';
      div.innerHTML = `
        <div class="dest-card-m__img">
          <img src="${d.img}" alt="${d.name}" loading="lazy">
        </div>
        <div class="dest-card-m__body">
          <div style="font-size:0.75rem;letter-spacing:0.12em;font-weight:700;color:var(--pink);margin-bottom:0.4rem;text-transform:uppercase;">${d.abbr}</div>
          <h3>${d.name}</h3>
          <p>${d.desc}</p>
          <div class="dest-card-m__tags">
            ${d.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
          <a href="#contact" class="dest__cta btn btn--brand" style="margin-top:1rem;display:inline-block;padding:0.5rem 1.1rem;font-size:0.8rem;">${d.btn || 'Explore →'}</a>
        </div>`;
      mobile.appendChild(div);
    }
  });

  // Left static panel elements to update
  const leftCount = document.getElementById('destCount');
  const leftName  = document.getElementById('destName');
  const leftAbbr  = document.getElementById('destAbbr');
  const leftDesc  = document.getElementById('destDesc');
  const leftTags  = document.getElementById('destTags');

  // IntersectionObserver on triggers for desktop panel updates
  if (triggers && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.getAttribute('data-idx'), 10);
          const d   = DESTINATIONS[idx];

          // Update image layer
          document.querySelectorAll('.dest-img').forEach((l, li) => {
            l.classList.toggle('active', li === idx);
          });

          // Update left panel text with micro-fade
          const panel = document.getElementById('destLeft');
          if (panel) {
            panel.classList.add('updating');
            setTimeout(() => {
              if (leftCount) leftCount.textContent = String(idx + 1).padStart(2, '0');
              if (leftName)  leftName.textContent  = d.name;
              if (leftAbbr)  leftAbbr.textContent  = d.abbr;
              if (leftDesc)  leftDesc.textContent  = d.desc;
              if (leftTags) {
                leftTags.innerHTML = d.tags.map(t => `<span>${t}</span>`).join('');
              }
              const leftCta = panel.querySelector('.dest__cta');
              if (leftCta && d.btn) leftCta.textContent = d.btn;
              panel.classList.remove('updating');
            }, 180);
          }

          // Active state on trigger item
          document.querySelectorAll('.dest-trigger').forEach((tr, tri) => {
            tr.classList.toggle('active', tri === idx);
          });
        }
      });
    }, { threshold: 0.55 });

    triggers.querySelectorAll('.dest-trigger').forEach(t => observer.observe(t));
  }
}

/* ── CURRICULUM TOPICS TICKER ──────────────── */

function initUniversities() {
  function buildRow(container, unis) {
    if (!container) return;
    const doubled = [...unis, ...unis];
    const html = doubled.map(u =>
      `<span class="uni-chip"><span class="uni-chip-flag">${u.flag}</span>${u.name}</span>`
    ).join('');
    container.innerHTML = html;
  }
  buildRow(document.getElementById('tickerRow1'), UNIVERSITIES_R1);
  buildRow(document.getElementById('tickerRow2'), UNIVERSITIES_R2);
}

/* ── TESTIMONIALS SLIDER ───────────────────── */

function initTestimonials() {
  const track = document.getElementById('testiTrack');
  const dots  = document.getElementById('testiDots');
  const prev  = document.getElementById('testiPrev');
  const next  = document.getElementById('testiNext');
  if (!track) return;

  // Build slides
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

    // Dot
    if (dots) {
      const dot = document.createElement('button');
      dot.className = `testi__dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => go(i));
      dots.appendChild(dot);
    }
  });

  let current = 0;
  let autoTimer;

  function go(n) {
    current = (n + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    if (dots) {
      dots.querySelectorAll('.testi__dot').forEach((d, di) => {
        d.classList.toggle('active', di === current);
      });
    }
  }

  function startAuto() {
    autoTimer = setInterval(() => go(current + 1), 6000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  if (prev) prev.addEventListener('click', () => { go(current - 1); resetAuto(); });
  if (next) next.addEventListener('click', () => { go(current + 1); resetAuto(); });

  // Touch swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      go(diff > 0 ? current + 1 : current - 1);
      resetAuto();
    }
  }, { passive: true });

  startAuto();
}

/* ── FAQ ACCORDION ─────────────────────────── */

function initFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;

  FAQS.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <button class="faq-item__q" aria-expanded="false" id="faqQ${i}">
        <span>${item.q}</span>
        <svg class="faq-item__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="faq-item__a" role="region" aria-labelledby="faqQ${i}">
        <p>${item.a}</p>
      </div>`;
    list.appendChild(el);
  });

  list.addEventListener('click', e => {
    const btn = e.target.closest('.faq-item__q');
    if (!btn) return;
    const item   = btn.parentElement;
    const answer = item.querySelector('.faq-item__a');
    const isOpen = item.classList.contains('open');

    // Close all
    list.querySelectorAll('.faq-item').forEach(other => {
      other.classList.remove('open');
      other.querySelector('.faq-item__q').setAttribute('aria-expanded', 'false');
      other.querySelector('.faq-item__a').style.maxHeight = '';
    });

    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
}

/* ── BRANCHES / LOCATIONS ──────────────────── */

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
      <a href="https://www.instagram.com/yogislanguageschool/" target="_blank" rel="noopener">${b.phone}</a>
      <a href="https://www.instagram.com/yogislanguageschool/" target="_blank" rel="noopener">${b.mobile}</a>
      <a href="https://www.instagram.com/imyogisir/" target="_blank" rel="noopener">${b.email}</a>
      <p style="margin-top:0.75rem;font-size:0.75rem;letter-spacing:0.08em;color:var(--t-dim)">${b.hours}</p>`;
  }

  showBranch('nashik');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      showBranch(tab.getAttribute('data-b'));
    });
  });
}

/* ── CONTACT FORM ──────────────────────────── */

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
      form.style.display = 'none';
      if (ok) ok.style.display = 'flex';
    }, 1200);
  });
}

/* ── NUMBER REEL COUNTERS ──────────────────── */

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

  return reel;
}

function initReels() {
  document.querySelectorAll('.counter').forEach(el => {
    const reel = buildReel(el);
    const cols  = reel.querySelectorAll('.reel__col');
    el.replaceWith(reel);

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cols.forEach((col, i) => {
            const strip = col.querySelector('.reel__strip');
            if (!strip) return;
            const d = parseInt(col.getAttribute('data-digit'), 10);
            const digitEl = strip.querySelector('.reel__digit');
            const h = digitEl ? digitEl.clientHeight : (col.clientHeight || 48);
            setTimeout(() => {
              strip.style.transition = `transform ${1.2 + i * 0.15}s cubic-bezier(0.16, 1, 0.3, 1)`;
              strip.style.transform  = `translateY(-${d * h}px)`;
            }, 80 + i * 60);
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    obs.observe(reel);
  });
}

/* ── LENIS SMOOTH SCROLL ───────────────────── */

function initLenis() {
  if (typeof window['Lenis'] === 'undefined') return;
  const LenisCtor = window['Lenis'];

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const lenis = new LenisCtor({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.5
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Sync GSAP ScrollTrigger with Lenis
  if (typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
}

/* ── STATEMENT WORD SCRUB ──────────────────── */

function initStatementScrub() {
  const big = document.querySelector('.statement__big');
  if (!big || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const raw   = big.innerHTML;
  const words = raw.trim().split(/\s+/);
  big.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');

  const wordEls = big.querySelectorAll('.word');

  gsap.fromTo(wordEls,
    { opacity: 0.15, y: 6 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.04,
      ease: 'none',
      scrollTrigger: {
        trigger: '#statement',
        start: 'top 75%',
        end: 'top 25%',
        scrub: 0.8
      }
    }
  );
}

/* ── GSAP TIMELINES & SCROLLTRIGGERS ───────── */

function initGSAP() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  // Staggered reveal for About page Why Choose Us items
  const whyItems = document.querySelectorAll('.about-why__item');
  if (whyItems.length && typeof ScrollTrigger !== 'undefined') {
    gsap.from(whyItems, {
      opacity: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-why__grid',
        start: 'top 85%',
        once: true
      }
    });
  }

  // 1. Hero Reveal Timeline
  const heroLines = document.querySelectorAll('.hero__h .ln span');
  const tl = gsap.timeline({ delay: 0.3 });

  if (heroLines.length) {
    tl.from(heroLines, {
      y: '105%',
      duration: 1.1,
      ease: 'power4.out',
      stagger: 0.12
    });
  }

  const heroSupport = ['#heroRotator', '#heroSub', '#heroBtns'];
  tl.to(heroSupport, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.08
  }, '-=0.6');

  // Hero BG Parallax
  const heroBg = document.getElementById('heroBgImg');
  if (heroBg && typeof ScrollTrigger !== 'undefined') {
    gsap.to(heroBg, {
      y: '22%',
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // 2. Heading line reveals across sections
  document.querySelectorAll('h2 .ln span, .contact__locs-h .ln span').forEach(span => {
    // Skip hero
    if (span.closest('.hero')) return;
    const h2 = span.closest('h2') || span.closest('.contact__locs-h');
    if (!h2 || typeof ScrollTrigger === 'undefined') return;

    gsap.from(span, {
      y: '105%',
      duration: 1.0,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: span.closest('.ln'),
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });

  // 3. Clip reveals on photos
  document.querySelectorAll('.clip-reveal').forEach(el => {
    if (typeof ScrollTrigger === 'undefined') return;
    const rect = el.getBoundingClientRect();
    const isAboveOrInView = rect.top < window.innerHeight * 0.9;

    if (isAboveOrInView) {
      gsap.fromTo(el,
        { opacity: 0.2, clipPath: 'inset(15% 0 0 0)' },
        {
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 0.9,
          ease: 'power3.out'
        }
      );
    } else {
      gsap.fromTo(el,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  });

  // 4. Mission (MVV) horizontal pin scroll on desktop
  const mvv = document.getElementById('mission');
  const track = document.getElementById('mvvTrack');
  if (mvv && track && typeof ScrollTrigger !== 'undefined') {
    const isDesktop = window.matchMedia('(min-width: 900px)').matches;
    if (isDesktop) {
      const panels = track.querySelectorAll('.mvv__panel');
      const totalWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: mvv,
          start: 'top top',
          end: () => `+=${totalWidth + 400}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true
        }
      });

      // Panel content reveals
      panels.forEach((panel, i) => {
        const copy = panel.querySelectorAll('.eyebrow, .mvv__p');
        gsap.from(copy, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            containerAnimation: gsap.getTweensOf(track)[0],
            start: 'left 80%',
            toggleActions: 'play none none none'
          }
        });
      });
    }
  }



  // 7. Journey stages reveal
  const stages = document.querySelectorAll('.pathway__stage');
  if (stages.length && typeof ScrollTrigger !== 'undefined') {
    stages.forEach(stage => {
      const stageHead = stage.querySelector('.pathway__stage-head');
      const steps = stage.querySelectorAll('.j-step');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      });

      if (stageHead) {
        tl.from(stageHead, {
          opacity: 0,
          x: -16,
          duration: 0.45,
          ease: 'power3.out'
        });
      }

      tl.from(steps, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out'
      }, '-=0.25');
    });
  }

  // 7b. Impact benefits reveal
  const impactItems = document.querySelectorAll('.impact__point, .impact__item');
  if (impactItems.length && typeof ScrollTrigger !== 'undefined') {
    gsap.fromTo(impactItems,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#impact',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // 8. About Why Choose Us items
  const aboutWhyItems = document.querySelectorAll('.about-why__item');
  if (aboutWhyItems.length && typeof ScrollTrigger !== 'undefined') {
    gsap.from(aboutWhyItems, {
      opacity: 0,
      y: 20,
      duration: 0.55,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#why-choose-us',
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
  }

  // 10. Full CTA BG Parallax
  const ctaBg = document.querySelector('.cta-full__bg img');
  if (ctaBg && typeof ScrollTrigger !== 'undefined') {
    gsap.to(ctaBg, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: '#cta',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }
}

/* ── HERO HEADLINE ROTATOR ─────────────────── */

function initHeroHeadlineRotator() {
  const phrases = document.querySelectorAll('.hero__rotator-phrase');
  if (!phrases || phrases.length <= 1) return;

  let currentIndex = 0;
  const total = phrases.length;
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let rotatorTimer = null;

  function rotateToNext() {
    const currentEl = phrases[currentIndex];
    currentIndex = (currentIndex + 1) % total;
    const nextEl = phrases[currentIndex];

    if (prefersReducedMotion || typeof gsap === 'undefined') {
      currentEl.style.opacity = '0';
      currentEl.classList.remove('is-active');
      currentEl.setAttribute('aria-hidden', 'true');

      nextEl.classList.add('is-active');
      nextEl.removeAttribute('aria-hidden');
      nextEl.style.opacity = '1';
      rotatorTimer = setTimeout(rotateToNext, 2800);
      return;
    }

    // GSAP Smooth Fade & Subtle Vertical Float Transition
    gsap.to(currentEl, {
      opacity: 0,
      y: -10,
      duration: 0.45,
      ease: 'power2.inOut',
      onComplete: () => {
        currentEl.classList.remove('is-active');
        currentEl.setAttribute('aria-hidden', 'true');
        gsap.set(currentEl, { y: 12 });
      }
    });

    nextEl.classList.add('is-active');
    nextEl.removeAttribute('aria-hidden');
    gsap.fromTo(
      nextEl,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        delay: 0.1,
        onComplete: () => {
          gsap.delayedCall(2.8, rotateToNext);
        }
      }
    );
  }

  // Initial delay: show the first phrase for 2.8s before rotating
  if (typeof gsap !== 'undefined') {
    gsap.delayedCall(2.8, rotateToNext);
  } else {
    rotatorTimer = setTimeout(rotateToNext, 2800);
  }
}

/* ── INTERSECTION OBSERVER FALLBACKS ───────── */

function initRevealObserver() {
  if (typeof gsap !== 'undefined') return; // GSAP handles it
  if (!('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.opacity = '1';
        el.style.transform = 'none';
        const siblings = el.parentElement.querySelectorAll(
          '.j-step, .impact__point, .impact__item, .about-why__item'
        );
        const idx = Array.from(siblings).indexOf(el);
        el.style.transition = `opacity 0.6s ease ${idx * 0.07}s, transform 0.6s ease ${idx * 0.07}s`;
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(
    '.j-step, .impact__point, .impact__item, .about-why__item'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    obs.observe(el);
  });
}

/* ── BOOTSTRAP ─────────────────────────────── */

function boot() {
  const safeRun = (fn, name) => {
    try { fn(); } catch (err) { console.warn(`[Init] ${name} error:`, err); }
  };

  safeRun(initLoader, 'Loader');
  safeRun(initCursor, 'Cursor');
  safeRun(initNav, 'Nav');
  safeRun(initDestinations, 'Destinations');
  safeRun(initBranches, 'Branches');
  safeRun(initForm, 'Form');
  safeRun(initReels, 'Reels');
  safeRun(initLenis, 'Lenis');

  // GSAP animations after libraries load
  let elapsed = 0;
  const check = setInterval(() => {
    elapsed += 50;
    if (typeof gsap !== 'undefined' || elapsed > 3000) {
      clearInterval(check);
      safeRun(initStatementScrub, 'StatementScrub');
      safeRun(initGSAP, 'GSAP');
      safeRun(initHeroHeadlineRotator, 'HeroHeadlineRotator');
      safeRun(initRevealObserver, 'RevealObserver');
    }
  }, 50);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
