/* =======================================================
   🌐 FULL LANGUAGE SWITCHER (ENGLISH ↔ বাংলা)
   + Popup Job Categories Translation
   + Fixed "Apply Now" scroll & close behavior
   ======================================================= */

const langData = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_how: "How It Works",
    nav_jobs: "Jobs",
    nav_apply: "Apply",

    home_title: "Connecting Talent with Opportunity",
    home_desc:
      "WorkConnect BD helps bridge the gap between skilled professionals and employers across Bangladesh.",
    home_btn: "Get Started",

    about_subtitle: "About Us",
    about_title: "Who Are You Guys",
    about_p1:
      "We connect skilled Bangladeshi professionals with top employers worldwide through our easy-to-use platform.",
    about_p2:
      "Our mission is to empower job seekers and companies to find their perfect match — efficiently and confidently.",
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
    why_desc:
      "WorkConnect BD connects you with flexible work opportunities across Bangladesh and beyond — offering full-time, part-time, and freelance options that fit your lifestyle. You can work from home, set your own schedule, and achieve financial stability while maintaining balance and freedom. We also provide free training to help you build new skills, grow your confidence, and advance your career — empowering you to build a future that truly works around you.",

    apply_title: "Apply Form",
    apply_desc:
      "Please fill out the form below to apply for part-time or full-time positions.",
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
    home_desc:
      "ওয়ার্ককনেক্ট বিডি বাংলাদেশে দক্ষ পেশাজীবী এবং নিয়োগদাতাদের মধ্যে সেতুবন্ধন তৈরি করে।",
    home_btn: "শুরু করুন",

    about_subtitle: "আমাদের সম্পর্কে",
    about_title: "আমরা কারা",
    about_p1:
      "আমরা দক্ষ বাংলাদেশি পেশাজীবীদের বিশ্বব্যাপী শীর্ষ নিয়োগদাতাদের সাথে যুক্ত করি।",
    about_p2:
      "আমাদের লক্ষ্য হলো চাকরিপ্রার্থীদের এবং কোম্পানিগুলিকে তাদের সঠিক মিলটি খুঁজে পেতে সহায়তা করা — দ্রুত ও আত্মবিশ্বাসের সাথে।",
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
    why_desc:
      "ওয়ার্ককনেক্ট বিডি বাংলাদেশ এবং এর বাইরে নমনীয় কর্মসংস্থানের সুযোগ প্রদান করে — ফুল-টাইম, পার্ট-টাইম এবং ফ্রিল্যান্স বিকল্প যা আপনার জীবনধারার সাথে মানানসই। আপনি বাড়ি থেকে কাজ করতে পারেন, নিজের সময় নির্ধারণ করতে পারেন এবং আর্থিক স্থিতিশীলতা অর্জন করতে পারেন। আমরা বিনামূল্যে প্রশিক্ষণও প্রদান করি যাতে আপনি নতুন দক্ষতা অর্জন করতে পারেন, আত্মবিশ্বাস বাড়াতে পারেন এবং আপনার ক্যারিয়ারকে এগিয়ে নিতে পারেন।",

    apply_title: "আবেদন ফর্ম",
    apply_desc:
      "দয়া করে নিচের ফর্মটি পূরণ করুন পার্ট-টাইম বা ফুল-টাইম চাকরির জন্য আবেদন করতে।",
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
  },
};

/* =======================================================
   APPLY NOW → Close modal & scroll to form
   ======================================================= */
function attachApplyNowHandlers() {
  const modalEl = document.getElementById("jobCategoryModal");
  if (!modalEl) return;

  // Helper to smooth-scroll to #apply
  const scrollToApply = () => {
    const target = document.querySelector("#apply");
    if (!target) return;
    const navbar = document.querySelector(".navbar");
    const offset = (navbar ? navbar.offsetHeight : 0) + 10;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Find all apply buttons inside modal
  const rawBtns = modalEl.querySelectorAll(".apply-now-btn");
  if (!rawBtns || rawBtns.length === 0) return;

  // Replace each button with a clone (removes old event listeners)
  rawBtns.forEach(btn => {
    // Remove bootstrap auto-dismiss if present to avoid racing behavior
    if (btn.hasAttribute("data-bs-dismiss")) {
      btn.removeAttribute("data-bs-dismiss");
    }

    // Ensure it's a button role and not a plain link visual (optional)
    btn.setAttribute("role", "button");
    btn.style.cursor = "pointer";

    // Clone to strip old listeners then replace
    const clone = btn.cloneNode(true);
    btn.parentNode.replaceChild(clone, btn);
  });

  // Now re-query clones and attach our stable handler
  const applyBtns = modalEl.querySelectorAll(".apply-now-btn");
  applyBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Get Bootstrap modal instance or create one
      const bsModal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);

      // One-time handler for after modal hidden
      const onHidden = () => {
        // small delay to ensure DOM settled and animation finished
        setTimeout(() => scrollToApply(), 60);
        modalEl.removeEventListener("hidden.bs.modal", onHidden);
      };

      // Attach the listener and then hide modal
      modalEl.addEventListener("hidden.bs.modal", onHidden);
      bsModal.hide();
    });
  });
}

// Call it initially and after language changes (example usage)
// run on DOMContentLoaded so it exists
document.addEventListener("DOMContentLoaded", () => {
  attachApplyNowHandlers();
});

/* =======================================================
   SET LANGUAGE FUNCTION
   ======================================================= */
function setLanguage(lang) {
  localStorage.setItem("selectedLang", lang);
  document.getElementById("currentLang").innerText = lang === "en" ? "EN" : "BN";
  const t = langData[lang];

  // Navbar
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  if (navLinks.length >= 5) {
    navLinks[0].textContent = t.nav_home;
    navLinks[1].textContent = t.nav_about;
    navLinks[2].textContent = t.nav_how;
    navLinks[3].textContent = t.nav_jobs;
    navLinks[4].textContent = t.nav_apply;
  }

  // Hero
  document.querySelector("#home h1").textContent = t.home_title;
  document.querySelector("#home p").textContent = t.home_desc;
  document.querySelector("#home a.btn").textContent = t.home_btn;

  // About
  document.querySelector("#about .section-title-sub").textContent = t.about_subtitle;
  document.querySelector("#about .section-title").textContent = t.about_title;
  const aboutP = document.querySelectorAll("#about p");
  if (aboutP.length >= 2) {
    aboutP[0].textContent = t.about_p1;
    aboutP[1].textContent = t.about_p2;
  }
  document.querySelector("#about .special-link").textContent = t.about_link;

  // How
  document.querySelector("#how h2").textContent = t.how_title;
  document.querySelector("#how p").textContent = t.how_p;
  const steps = document.querySelectorAll("#how .flow-card");
  if (steps.length === 4) {
    steps[0].querySelector("h4").textContent = t.how_s1;
    steps[0].querySelector("p").textContent = t.how_s1_d;
    steps[1].querySelector("h4").textContent = t.how_s2;
    steps[1].querySelector("p").textContent = t.how_s2_d;
    steps[2].querySelector("h4").textContent = t.how_s3;
    steps[2].querySelector("p").textContent = t.how_s3_d;
    steps[3].querySelector("h4").textContent = t.how_s4;
    steps[3].querySelector("p").textContent = t.how_s4_d;
  }

  // Jobs
  document.querySelector("#jobs h2").textContent = t.jobs_title;
  document.querySelector("#jobs p").textContent = t.jobs_desc;
  const jobCards = document.querySelectorAll("#jobs .job-card");
  if (jobCards.length === 3) {
    jobCards[0].querySelector("h5").textContent = t.jobs_full;
    jobCards[0].querySelector("p").textContent = t.jobs_full_d;
    jobCards[1].querySelector("h5").textContent = t.jobs_part;
    jobCards[1].querySelector("p").textContent = t.jobs_part_d;
    jobCards[2].querySelector("h5").textContent = t.jobs_free;
    jobCards[2].querySelector("p").textContent = t.jobs_free_d;
  }

  // Modal Translation
  const modal = document.querySelector("#jobCategoryModal");
  if (modal) {
    modal.querySelector(".modal-title").textContent = t.modal_title;
    const categories = modal.querySelectorAll(".category-card");
    if (categories.length === 4) {
      const data = [
        { title: t.modal_design, list: t.modal_design_list },
        { title: t.modal_it, list: t.modal_it_list },
        { title: t.modal_marketing, list: t.modal_marketing_list },
        { title: t.modal_education, list: t.modal_education_list },
      ];
      categories.forEach((cat, i) => {
        cat.querySelector("h6").textContent = data[i].title;
        cat.querySelector("ul").innerHTML = data[i].list.map(li => `<li>${li}</li>`).join("");
        cat.querySelector("a").textContent = t.modal_btn;
      });
    }
  }

  // Why
  document.querySelector("#why h2").textContent = t.why_title;
  document.querySelector("#why p").textContent = t.why_desc;

  // Apply
  document.querySelector("#apply h3").textContent = t.apply_title;
  document.querySelector("#apply p").textContent = t.apply_desc;
  const labels = document.querySelectorAll("#apply label");
  if (labels.length >= 6) {
    labels[0].textContent = t.apply_name;
    labels[1].textContent = t.apply_email;
    labels[2].textContent = t.apply_phone;
    labels[3].textContent = t.apply_age;
    labels[4].textContent = t.apply_jobtype;
    labels[5].textContent = t.apply_upload;
  }

  const selects = document.querySelector("#apply select");
  if (selects) {
    selects.innerHTML = "";
    t.apply_age_options.forEach(opt => {
      const o = document.createElement("option");
      o.textContent = opt;
      selects.appendChild(o);
    });
  }

  const radios = document.querySelectorAll("#apply .form-check-label");
  if (radios.length === 2) {
    radios[0].textContent = t.apply_job_options[0];
    radios[1].textContent = t.apply_job_options[1];
  }

  document.querySelector("#apply small.text-light").innerHTML = `<i class="bi bi-whatsapp text-success me-1"></i> ${t.apply_whatsapp}`;
  document.querySelector("#apply button.btn-success").textContent = t.apply_submit;
  document.querySelector("footer p").textContent = t.footer;

  // Reattach apply handlers
  attachApplyNowHandlers();
}

/* =======================================================
   INIT LANGUAGE SWITCH
   ======================================================= */
document.querySelectorAll(".lang-option").forEach(option => {
  option.addEventListener("click", e => {
    e.preventDefault();
    const lang = e.target.getAttribute("data-lang");
    setLanguage(lang);
  });
});

const savedLang = localStorage.getItem("selectedLang") || "en";
setLanguage(savedLang);
document.addEventListener("DOMContentLoaded", attachApplyNowHandlers);
