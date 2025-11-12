/* =======================================================
   main.js — Language + Navigation + Modal handlers
   ======================================================= */

/* -----------------------
   LANG DATA (EN / BN)
   ----------------------- */
const langData = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_how: "How It Works",
    nav_jobs: "Jobs",
    nav_apply: "Apply",
    home_title: "Connecting Talent with Opportunity",
    home_desc: "WorkConnect BD helps bridge the gap between skilled professionals and employers across Bangladesh.",
    home_btn: "Get Started",
    about_subtitle: "About Us",
    about_title: "Who Are You Guys",
    about_p1: "We connect skilled Bangladeshi professionals with top employers worldwide through our easy-to-use platform.",
    about_p2: "Our mission is to empower job seekers and companies to find their perfect match — efficiently and confidently.",
    about_link: "Read more about us",
    how_title: "How WorkConnect BD Works",
    how_p: "Follow our simple step-by-step process — from building your profile to landing your dream job.",
    how_s1: "Create Your Profile",
    how_s1_d: "Build your WorkConnect BD profile — showcase your skills and experience.",
    how_s2: "Explore Roles",
    how_s2_d: "Browse verified jobs that align with your expertise — from local to remote opportunities.",
    how_s3: "Get Matched",
    how_s3_d: "Our smart system connects you directly with companies looking for skilled professionals like you.",
    how_s4: "Start Working",
    how_s4_d: "Communicate, get onboarded, and begin your next career journey with confidence.",
    jobs_title: "Explore Job Types That Suit Your Lifestyle",
    jobs_desc: "Whether you’re looking for stability, flexibility, or independence — we have opportunities for everyone.",
    jobs_full: "Full-Time",
    jobs_full_d: "Enjoy long-term stability, benefits, and career growth opportunities.",
    jobs_part: "Part-Time",
    jobs_part_d: "Find flexible roles that balance your lifestyle or family schedule.",
    jobs_free: "Freelance",
    jobs_free_d: "Work independently on projects across industries — anywhere in the world.",
    jobs_btn: "Explore Roles →",
    modal_title: "Open Roles by Category",
    modal_design: "Design & Creative",
    modal_design_list: ["Graphic Designer", "UI/UX Designer", "Illustrator"],
    modal_it: "IT & Development",
    modal_it_list: ["Frontend Developer", "Backend Developer", "DevOps Engineer"],
    modal_marketing: "Marketing & Sales",
    modal_marketing_list: ["Social Media Specialist", "Content Strategist", "Marketing Manager"],
    modal_education: "Education & Training",
    modal_education_list: ["Course Instructor", "Learning Coordinator", "Academic Coach"],
    modal_btn: "Apply Now →",
    why_title: "Why Choose WorkConnect BD?",
    why_desc: "WorkConnect BD connects you with flexible work opportunities across Bangladesh and beyond — offering full-time, part-time, and freelance options that fit your lifestyle. You can work from home, set your own schedule, and achieve financial stability while maintaining balance and freedom. We also provide free training to help you build new skills, grow your confidence, and advance your career — empowering you to build a future that truly works around you.",
    apply_title: "Apply Form",
    apply_desc: "Please fill out the form below to apply for part-time or full-time positions.",
    apply_name: "Full Name *",
    apply_email: "Email *",
    apply_phone: "Phone Number *",
    apply_age: "Age Group *",
    apply_jobtype: "Job Type *",
    apply_upload: "Resume Upload",
    apply_submit: "Submit Application",
    apply_whatsapp: "Please enter your valid WhatsApp number",
    apply_place_name: "Enter your full name",
    apply_place_email: "your.email@example.com",
    apply_place_phone: "Enter your WhatsApp number",
    apply_age_options: ["Select your age group", "17–20", "21–29", "30–49", "50–75"],
    apply_job_options: ["Part-time", "Full-time"],
    footer: "© 2025 WorkConnect BD. All rights reserved.",
  },
  bn: {
    nav_home: "হোম",
    nav_about: "আমাদের সম্পর্কে",
    nav_how: "কীভাবে কাজ করে",
    nav_jobs: "চাকরি",
    nav_apply: "আবেদন",
    home_title: "প্রতিভা এবং সুযোগের সংযোগ স্থাপন",
    home_desc: "ওয়ার্ককনেক্ট বিডি বাংলাদেশে দক্ষ পেশাজীবী এবং নিয়োগদাতাদের মধ্যে সেতুবন্ধন তৈরি করে।",
    home_btn: "শুরু করুন",
    about_subtitle: "আমাদের সম্পর্কে",
    about_title: "আমরা কারা",
    about_p1: "আমরা দক্ষ বাংলাদেশি পেশাজীবীদের বিশ্বব্যাপী শীর্ষ নিয়োগদাতাদের সাথে যুক্ত করি।",
    about_p2: "আমাদের লক্ষ্য হলো চাকরিপ্রার্থীদের এবং কোম্পানিগুলিকে তাদের সঠিক মিলটি খুঁজে পেতে সহায়তা করা — দ্রুত ও আত্মবিশ্বাসের সাথে।",
    about_link: "আমাদের সম্পর্কে আরও জানুন",
    how_title: "ওয়ার্ককনেক্ট বিডি কীভাবে কাজ করে",
    how_p: "আমাদের সহজ ধাপে ধাপে প্রক্রিয়া অনুসরণ করুন — প্রোফাইল তৈরি থেকে স্বপ্নের চাকরি পাওয়া পর্যন্ত।",
    how_s1: "আপনার প্রোফাইল তৈরি করুন",
    how_s1_d: "আপনার দক্ষতা ও অভিজ্ঞতা প্রদর্শনের জন্য প্রোফাইল তৈরি করুন।",
    how_s2: "চাকরি অনুসন্ধান করুন",
    how_s2_d: "স্থানীয় ও আন্তর্জাতিক যাচাইকৃত চাকরিগুলি ব্রাউজ করুন।",
    how_s3: "ম্যাচ পান",
    how_s3_d: "আমাদের স্মার্ট সিস্টেম আপনাকে সরাসরি সঠিক নিয়োগদাতার সাথে সংযুক্ত করে।",
    how_s4: "কাজ শুরু করুন",
    how_s4_d: "যোগাযোগ করুন, অনবোর্ডিং সম্পূর্ণ করুন এবং আত্মবিশ্বাসের সাথে কাজ শুরু করুন।",
    jobs_title: "আপনার জীবনধারার সাথে মানানসই চাকরির ধরন অন্বেষণ করুন",
    jobs_desc: "আপনি স্থায়িত্ব, নমনীয়তা বা স্বাধীনতা যাই খুঁজছেন — আমাদের কাছে সবার জন্য সুযোগ রয়েছে।",
    jobs_full: "ফুল-টাইম",
    jobs_full_d: "দীর্ঘমেয়াদি স্থিতিশীলতা, সুবিধা এবং ক্যারিয়ার বৃদ্ধির সুযোগ উপভোগ করুন।",
    jobs_part: "পার্ট-টাইম",
    jobs_part_d: "আপনার জীবনধারার সাথে ভারসাম্যপূর্ণ নমনীয় চাকরি খুঁজুন।",
    jobs_free: "ফ্রিল্যান্স",
    jobs_free_d: "বিশ্বের যেকোনো জায়গা থেকে স্বাধীনভাবে কাজ করুন।",
    jobs_btn: "চাকরি দেখুন →",
    modal_title: "বিভাগ অনুযায়ী খালি পদসমূহ",
    modal_design: "ডিজাইন ও ক্রিয়েটিভ",
    modal_design_list: ["গ্রাফিক ডিজাইনার", "UI/UX ডিজাইনার", "ইলাস্ট্রেটর"],
    modal_it: "আইটি ও ডেভেলপমেন্ট",
    modal_it_list: ["ফ্রন্টএন্ড ডেভেলপার", "ব্যাকএন্ড ডেভেলপার", "ডেভঅপস ইঞ্জিনিয়ার"],
    modal_marketing: "মার্কেটিং ও বিক্রয়",
    modal_marketing_list: ["সোশ্যাল মিডিয়া বিশেষজ্ঞ", "কনটেন্ট স্ট্র্যাটেজিস্ট", "মার্কেটিং ম্যানেজার"],
    modal_education: "শিক্ষা ও প্রশিক্ষণ",
    modal_education_list: ["কোর্স প্রশিক্ষক", "লার্নিং কো-অর্ডিনেটর", "একাডেমিক কোচ"],
    modal_btn: "এখনই আবেদন করুন →",
    why_title: "কেন ওয়ার্ককনেক্ট বিডি বেছে নেবেন?",
    why_desc: "ওয়ার্ককনেক্ট বিডি বাংলাদেশ এবং এর বাইরে নমনীয় কর্মসংস্থানের সুযোগ প্রদান করে — ফুল-টাইম, পার্ট-টাইম এবং ফ্রিল্যান্স বিকল্প যা আপনার জীবনধারার সাথে মানানসই। আপনি বাড়ি থেকে কাজ করতে পারেন, নিজের সময় নির্ধারণ করতে পারেন এবং আর্থিক স্থিতিশীলতা অর্জন করতে পারেন। আমরা বিনামূল্যে প্রশিক্ষণও প্রদান করি যাতে আপনি নতুন দক্ষতা অর্জন করতে পারেন, আত্মবিশ্বাস বাড়াতে পারেন এবং আপনার ক্যারিয়ারকে এগিয়ে নিতে পারেন।",
    apply_title: "আবেদন ফর্ম",
    apply_desc: "দয়া করে নিচের ফর্মটি পূরণ করুন পার্ট-টাইম বা ফুল-টাইম চাকরির জন্য আবেদন করতে।",
    apply_name: "পূর্ণ নাম *",
    apply_email: "ইমেইল *",
    apply_phone: "ফোন নম্বর *",
    apply_age: "বয়সের গ্রুপ *",
    apply_jobtype: "চাকরির ধরন *",
    apply_upload: "রিজিউম আপলোড করুন",
    apply_submit: "আবেদন জমা দিন",
    apply_whatsapp: "আপনার বৈধ হোয়াটসঅ্যাপ নম্বরটি লিখুন",
    apply_place_name: "আপনার পূর্ণ নাম লিখুন",
    apply_place_email: "your.email@example.com",
    apply_place_phone: "আপনার হোয়াটসঅ্যাপ নম্বর লিখুন",
    apply_age_options: ["আপনার বয়সের গ্রুপ নির্বাচন করুন", "১৭–২০", "২১–২৯", "৩০–৪৯", "৫০–৭৫"],
    apply_job_options: ["পার্ট-টাইম", "ফুল-টাইম"],
    footer: "© ২০২৫ ওয়ার্ককনেক্ট বিডি। সর্বস্বত্ব সংরক্ষিত।",
  }
};

/* -----------------------
   UTIL: get navbar offset
   ----------------------- */
function getNavOffset() {
  const navbar = document.querySelector('.navbar');
  return navbar ? navbar.offsetHeight + 8 : 80;
}

/* =======================================================
   SMOOTH SCROLL + NAV ACTIVE HIGHLIGHT
   ======================================================= */
function initNavScroll() {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Smooth scroll behavior for nav links (and any anchor links with hashes)
  function handleLinkClick(e) {
    const href = this.getAttribute('href') || this.dataset.href;
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - getNavOffset();
    window.scrollTo({ top, behavior: 'smooth' });
    // collapse navbar on small screens
    const bsCollapse = document.querySelector('.navbar-collapse');
    if (bsCollapse && bsCollapse.classList.contains('show')) {
      const collapseInstance = bootstrap.Collapse.getInstance(bsCollapse) || new bootstrap.Collapse(bsCollapse);
      collapseInstance.hide();
    }
  }

  navLinks.forEach(link => {
    link.removeEventListener('click', handleLinkClick); // safe remove
    link.addEventListener('click', handleLinkClick);
  });

  // Active link on scroll
  function refreshActiveOnScroll() {
    const scrollY = window.pageYOffset;
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - getNavOffset() - 10;
      const bottom = top + sec.offsetHeight;
      if (scrollY >= top && scrollY < bottom) current = sec.id;
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current) link.classList.add('active');
    });
  }

  // Run on scroll and on load/resize
  window.removeEventListener('scroll', refreshActiveOnScroll);
  window.addEventListener('scroll', refreshActiveOnScroll);
  window.addEventListener('resize', refreshActiveOnScroll);
  setTimeout(refreshActiveOnScroll, 100); // initial
}

/* =======================================================
   APPLY NOW → modal close then scroll (robust)
   ======================================================= */
function attachApplyNowHandlers() {
  const modalEl = document.getElementById('jobCategoryModal');
  if (!modalEl) return;

  // Helper
  const scrollToApply = () => {
    const target = document.querySelector('#apply');
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.pageYOffset - getNavOffset();
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // remove existing listeners by cloning buttons
  const rawBtns = modalEl.querySelectorAll('.apply-now-btn');
  rawBtns.forEach(btn => {
    if (btn.hasAttribute('data-bs-dismiss')) btn.removeAttribute('data-bs-dismiss');
    const clone = btn.cloneNode(true);
    btn.parentNode.replaceChild(clone, btn);
  });

  // attach new handlers
  modalEl.querySelectorAll('.apply-now-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // ensure modal instance
      const bsModal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      const onHidden = () => {
        setTimeout(() => scrollToApply(), 60);
        modalEl.removeEventListener('hidden.bs.modal', onHidden);
      };
      modalEl.addEventListener('hidden.bs.modal', onHidden);
      bsModal.hide();
    });
  });
}

/* =======================================================
   SET LANGUAGE (full page + modal)
   ======================================================= */
function setLanguage(lang) {
  if (!langData[lang]) return;
  localStorage.setItem('selectedLang', lang);
  const t = langData[lang];

  // set dropdown label
  const curLang = document.getElementById('currentLang');
  if (curLang) curLang.textContent = lang === 'en' ? 'EN' : 'BN';

  // Navbar links (assumes 5 main links in order)
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  if (navLinks.length >= 5) {
    navLinks[0].textContent = t.nav_home;
    navLinks[1].textContent = t.nav_about;
    navLinks[2].textContent = t.nav_how;
    navLinks[3].textContent = t.nav_jobs;
    navLinks[4].textContent = t.nav_apply;
  }

  // Hero
  const homeH1 = document.querySelector('#home h1');
  const homeP = document.querySelector('#home p');
  const homeBtn = document.querySelector('#home a.btn');
  if (homeH1) homeH1.textContent = t.home_title;
  if (homeP) homeP.textContent = t.home_desc;
  if (homeBtn) homeBtn.textContent = t.home_btn;

  // About
  const aboutSub = document.querySelector('#about .section-title-sub');
  const aboutTitle = document.querySelector('#about .section-title');
  const aboutPs = document.querySelectorAll('#about p');
  const aboutLink = document.querySelector('#about .special-link');
  if (aboutSub) aboutSub.textContent = t.about_subtitle;
  if (aboutTitle) aboutTitle.textContent = t.about_title;
  if (aboutPs[0]) aboutPs[0].textContent = t.about_p1;
  if (aboutPs[1]) aboutPs[1].textContent = t.about_p2;
  if (aboutLink) aboutLink.textContent = t.about_link;

  // How
  const howH2 = document.querySelector('#how h2');
  const howP = document.querySelector('#how p');
  const steps = document.querySelectorAll('#how .flow-card');
  if (howH2) howH2.textContent = t.how_title;
  if (howP) howP.textContent = t.how_p;
  if (steps.length >= 4) {
    steps[0].querySelector('h4').textContent = t.how_s1;
    steps[0].querySelector('p').textContent = t.how_s1_d;
    steps[1].querySelector('h4').textContent = t.how_s2;
    steps[1].querySelector('p').textContent = t.how_s2_d;
    steps[2].querySelector('h4').textContent = t.how_s3;
    steps[2].querySelector('p').textContent = t.how_s3_d;
    steps[3].querySelector('h4').textContent = t.how_s4;
    steps[3].querySelector('p').textContent = t.how_s4_d;
  }

  // Jobs
  const jobsH2 = document.querySelector('#jobs h2');
  const jobsP = document.querySelector('#jobs p');
  if (jobsH2) jobsH2.textContent = t.jobs_title;
  if (jobsP) jobsP.textContent = t.jobs_desc;
  const jobCards = document.querySelectorAll('#jobs .job-card');
  if (jobCards.length >= 3) {
    jobCards[0].querySelector('h5').textContent = t.jobs_full;
    jobCards[0].querySelector('p').textContent = t.jobs_full_d;
    jobCards[0].querySelector('a.job-link').textContent = t.jobs_btn;
    jobCards[1].querySelector('h5').textContent = t.jobs_part;
    jobCards[1].querySelector('p').textContent = t.jobs_part_d;
    jobCards[1].querySelector('a.job-link').textContent = t.jobs_btn;
    jobCards[2].querySelector('h5').textContent = t.jobs_free;
    jobCards[2].querySelector('p').textContent = t.jobs_free_d;
    jobCards[2].querySelector('a.job-link').textContent = t.jobs_btn;
  }

  // Modal translation (job categories)
  const modal = document.getElementById('jobCategoryModal');
  if (modal) {
    const modalTitle = modal.querySelector('.modal-title');
    if (modalTitle) modalTitle.textContent = t.modal_title;
    const categories = modal.querySelectorAll('.category-card');
    const modalData = [
      { title: t.modal_design, list: t.modal_design_list || [] },
      { title: t.modal_it, list: t.modal_it_list || [] },
      { title: t.modal_marketing, list: t.modal_marketing_list || [] },
      { title: t.modal_education, list: t.modal_education_list || [] },
    ];
    categories.forEach((cat, i) => {
      const h6 = cat.querySelector('h6');
      const ul = cat.querySelector('ul');
      const applyBtn = cat.querySelector('a.btn') || cat.querySelector('.apply-now-btn');
      if (h6 && modalData[i]) h6.textContent = modalData[i].title;
      if (ul && modalData[i]) ul.innerHTML = modalData[i].list.map(x => `<li>${x}</li>`).join('');
      if (applyBtn) {
        applyBtn.textContent = t.modal_btn;
        applyBtn.classList.add('apply-now-btn'); // ensure class present
      }
    });
  }

  // Why
  const whyH2 = document.querySelector('#why h2');
  const whyP = document.querySelector('#why p');
  if (whyH2) whyH2.textContent = t.why_title;
  if (whyP) whyP.textContent = t.why_desc;

  // Apply form
  const applyH3 = document.querySelector('#apply h3');
  const applyP = document.querySelector('#apply p');
  if (applyH3) applyH3.textContent = t.apply_title;
  if (applyP) applyP.textContent = t.apply_desc;
  const labels = document.querySelectorAll('#apply label');
  if (labels.length >= 6) {
    labels[0].textContent = t.apply_name;
    labels[1].textContent = t.apply_email;
    labels[2].textContent = t.apply_phone;
    labels[3].textContent = t.apply_age;
    labels[4].textContent = t.apply_jobtype;
    labels[5].textContent = t.apply_upload;
  }
  // placeholders / selects
  const inputs = document.querySelectorAll('#apply input');
  if (inputs[0]) inputs[0].placeholder = t.apply_place_name;
  if (inputs[1]) inputs[1].placeholder = t.apply_place_email;
  // phone input may be inputs[2] or inputs[3] depending on markup; try to find by type
  const phoneInput = Array.from(document.querySelectorAll('#apply input')).find(i => i.placeholder && i.placeholder.toLowerCase().includes('whatsapp')) || document.querySelector('#apply input[type="text"]');
  if (phoneInput) phoneInput.placeholder = t.apply_place_phone;

  const selectEl = document.querySelector('#apply select');
  if (selectEl) {
    selectEl.innerHTML = '';
    t.apply_age_options.forEach(opt => {
      const el = document.createElement('option');
      el.textContent = opt;
      selectEl.appendChild(el);
    });
  }

  // job type radio labels
  const jobTypeLabels = document.querySelectorAll('#apply .form-check-label');
  if (jobTypeLabels.length >= 2) {
    jobTypeLabels[0].textContent = t.apply_job_options[0];
    jobTypeLabels[1].textContent = t.apply_job_options[1];
  }

  // small whatsapp helper text and submit button
  const whatsappSmall = document.querySelector('#apply small.text-light');
  if (whatsappSmall) whatsappSmall.innerHTML = `<i class="bi bi-whatsapp text-success me-1"></i> ${t.apply_whatsapp}`;
  const applyBtn = document.querySelector('#apply button.btn-success');
  if (applyBtn) applyBtn.textContent = t.apply_submit;

  // Footer
  const footerP = document.querySelector('footer p');
  if (footerP) footerP.textContent = t.footer;

  // re-run attach and nav init (buttons may have been recreated)
  attachApplyNowHandlers();
  initNavScroll();

  // highlight selected language in dropdown
  document.querySelectorAll('.lang-option').forEach(el => el.classList.remove('active'));
  const activeLangEl = document.querySelector(`.lang-option[data-lang="${lang}"]`);
  if (activeLangEl) activeLangEl.classList.add('active');
}

/* =======================================================
   INIT: language toggle listeners & initial load
   ======================================================= */
document.addEventListener('DOMContentLoaded', () => {
  // language dropdown click
  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = option.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // initialize nav behavior and handlers
  initNavScroll();
  attachApplyNowHandlers();

  // load saved or default lang
  const savedLang = localStorage.getItem('selectedLang') || 'en';
  setLanguage(savedLang);
});
