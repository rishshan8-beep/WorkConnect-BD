/* =======================================================
   🌐 LANGUAGE SWITCHER
   ======================================================= */
const langData = {
  en: {
    home_title: "Connecting Talent with Opportunity",
    home_desc:
      "WorkConnect BD helps bridge the gap between skilled professionals and employers across Bangladesh.",
    about_title: "Who Are You Guys",
    about_text1:
      "We connect skilled Bangladeshi professionals with top employers worldwide through our easy-to-use platform.",
    about_text2:
      "Our mission is to empower job seekers and companies to find their perfect match — efficiently and confidently.",
    how_title: "How WorkConnect BD Works",
    how_step1: "Create Your Profile",
    how_step2: "Explore Roles",
    how_step3: "Get Matched",
    how_step4: "Start Working",
    jobs_title: "Explore Job Types That Suit Your Lifestyle",
    apply_title: "Apply Form",
    apply_text:
      "Please fill out the form below to apply for part-time or full-time positions.",
    footer_text: "© 2025 WorkConnect BD. All rights reserved.",
  },

  bn: {
    home_title: "প্রতিভা এবং সুযোগের সংযোগ স্থাপন",
    home_desc:
      "ওয়ার্ককনেক্ট বিডি বাংলাদেশে দক্ষ পেশাজীবী এবং নিয়োগদাতাদের মধ্যে সেতুবন্ধন তৈরি করে।",
    about_title: "আমরা কারা",
    about_text1:
      "আমরা দক্ষ বাংলাদেশি পেশাজীবীদের বিশ্বব্যাপী শীর্ষ নিয়োগদাতাদের সাথে যুক্ত করি।",
    about_text2:
      "আমাদের লক্ষ্য হলো চাকরিপ্রার্থীদের এবং কোম্পানিগুলিকে তাদের সঠিক মিলটি খুঁজে পেতে সহায়তা করা — দ্রুত ও আত্মবিশ্বাসের সাথে।",
    how_title: "ওয়ার্ককনেক্ট বিডি কীভাবে কাজ করে",
    how_step1: "আপনার প্রোফাইল তৈরি করুন",
    how_step2: "চাকরি অনুসন্ধান করুন",
    how_step3: "ম্যাচ পান",
    how_step4: "কাজ শুরু করুন",
    jobs_title: "আপনার জীবনধারার সাথে মানানসই চাকরির ধরন অন্বেষণ করুন",
    apply_title: "আবেদন ফর্ম",
    apply_text:
      "দয়া করে পার্ট-টাইম বা ফুল-টাইম পজিশনের জন্য আবেদন করতে নিচের ফর্মটি পূরণ করুন।",
    footer_text: "© ২০২৫ ওয়ার্ককনেক্ট বিডি। সর্বস্বত্ব সংরক্ষিত।",
  },
};

// === Set Language ===
function setLanguage(lang) {
  localStorage.setItem("selectedLang", lang);
  document.getElementById("currentLang").innerText = lang === "en" ? "EN" : "BN";

  const t = langData[lang];

  // Update text dynamically across sections
  if (document.querySelector("#home h1")) document.querySelector("#home h1").textContent = t.home_title;
  if (document.querySelector("#home p")) document.querySelector("#home p").textContent = t.home_desc;
  if (document.querySelector("#about .section-title")) document.querySelector("#about .section-title").textContent = t.about_title;

  const aboutP = document.querySelectorAll("#about p");
  if (aboutP.length >= 2) {
    aboutP[0].textContent = t.about_text1;
    aboutP[1].textContent = t.about_text2;
  }

  if (document.querySelector("#how h2")) document.querySelector("#how h2").textContent = t.how_title;

  const steps = document.querySelectorAll("#how .flow-card h4");
  if (steps.length === 4) {
    steps[0].textContent = t.how_step1;
    steps[1].textContent = t.how_step2;
    steps[2].textContent = t.how_step3;
    steps[3].textContent = t.how_step4;
  }

  if (document.querySelector("#jobs h2")) document.querySelector("#jobs h2").textContent = t.jobs_title;
  if (document.querySelector("#apply h3")) document.querySelector("#apply h3").textContent = t.apply_title;
  if (document.querySelector("#apply p")) document.querySelector("#apply p").textContent = t.apply_text;
  if (document.querySelector("footer p")) document.querySelector("footer p").textContent = t.footer_text;

  // Highlight active dropdown item
  document.querySelectorAll(".lang-option").forEach(el => el.classList.remove("active"));
  document.querySelector(`.lang-option[data-lang='${lang}']`).classList.add("active");
}

// === Language dropdown handling ===
document.querySelectorAll(".lang-option").forEach(option => {
  option.addEventListener("click", e => {
    e.preventDefault();
    const lang = e.target.getAttribute("data-lang");
    setLanguage(lang);
  });
});

// === Load saved preference ===
const savedLang = localStorage.getItem("selectedLang") || "en";
setLanguage(savedLang);


/* =======================================================
   🧭 NAVBAR SCROLL + ACTIVE LINK DETECTION
   ======================================================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");
const navbar = document.querySelector(".navbar");

// Smooth scroll for nav links
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      const offset = navbar.offsetHeight - 10;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    }
  });
});

// Scroll event — highlight current nav link
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  const offset = navbar.offsetHeight + 120;
  let currentSection = "";

  sections.forEach(sec => {
    const top = sec.offsetTop - offset;
    const bottom = top + sec.offsetHeight;
    if (scrollY >= top && scrollY < bottom) currentSection = sec.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) link.classList.add("active");
  });

  // Navbar background on scroll
  if (scrollY > 80) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});


/* =======================================================
   💼 APPLY NOW BUTTON — MODAL SCROLL FIX
   ======================================================= */
document.querySelectorAll(".apply-now-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(btn.getAttribute("href"));
    const modal = bootstrap.Modal.getInstance(document.querySelector("#jobCategoryModal"));

    if (modal) {
      modal.hide();
      // Wait until modal closes before smooth scrolling
      const observer = new MutationObserver(() => {
        if (!document.querySelector(".modal.show")) {
          observer.disconnect();
          if (target) {
            const offset = target.offsetTop - 70;
            window.scrollTo({
              top: offset,
              behavior: "smooth",
            });
          }
        }
      });
      observer.observe(document.body, { attributes: true, subtree: true });
    }
  });
});
