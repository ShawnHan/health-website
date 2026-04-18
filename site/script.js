(function () {
  function detectLanguage() {
    try {
      var saved = window.localStorage.getItem("recova-language");
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
      window.localStorage.setItem("recova-language", nextLanguage);
    } catch (error) {
      // Ignore storage issues.
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(detectLanguage());

    document.querySelectorAll("[data-lang-toggle]").forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-language") === "zh" ? "zh" : "en";
        applyLanguage(current === "zh" ? "en" : "zh");
      });
    });
  });
})();
