(function () {
  var STORAGE_KEY = "swimtrace-language";

  function detectLanguage() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "zh") {
        return saved;
      }
    } catch (error) {
      // Ignore storage issues and fall back to browser language.
    }

    var language = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return language.indexOf("zh") === 0 ? "zh" : "en";
  }

  function applyLanguage(language) {
    var nextLanguage = language === "zh" ? "zh" : "en";
    document.documentElement.setAttribute("data-language", nextLanguage);
    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";

    var toggles = document.querySelectorAll("[data-lang-toggle]");
    toggles.forEach(function (toggle) {
      var nextLabel = nextLanguage === "zh" ? "English" : "中文";
      toggle.textContent = nextLabel;
      toggle.setAttribute("aria-label", nextLanguage === "zh" ? "Switch to English" : "切换到中文");
      toggle.setAttribute("title", nextLanguage === "zh" ? "Switch to English" : "切换到中文");
    });

    try {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch (error) {
      // Ignore storage issues.
    }
  }

  function setupReveal() {
    var targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) {
      return;
    }

    var prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Only opt into the hidden initial state when we can actually reveal.
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      return;
    }

    document.documentElement.classList.add("reveal-ready");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    targets.forEach(function (target) {
      observer.observe(target);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(detectLanguage());

    document.querySelectorAll("[data-lang-toggle]").forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-language") === "zh" ? "zh" : "en";
        applyLanguage(current === "zh" ? "en" : "zh");
      });
    });

    setupReveal();
  });
})();
