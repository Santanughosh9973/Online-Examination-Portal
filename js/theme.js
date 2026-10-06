/**
 * ExamPro Theme Manager
 * Syncs dark and light theme across all pages using localStorage
 */

(function () {
  const THEME_KEY = "examProTheme";

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
    updateToggleIcons(theme);
  }

  function updateToggleIcons(theme) {
    const toggleBtns = document.querySelectorAll(".btn-theme-toggle");
    toggleBtns.forEach((btn) => {
      btn.innerHTML = theme === "light" ? "☀️" : "🌙";
      btn.setAttribute("title", theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode");
    });
  }

  function toggleTheme() {
    const isLight = document.body.classList.contains("light-theme");
    const newTheme = isLight ? "dark" : "light";
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
  }

  // Initialize theme immediately
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  if (savedTheme === "light") {
    document.documentElement.classList.add("light-theme");
  }

  window.addEventListener("DOMContentLoaded", () => {
    applyTheme(localStorage.getItem(THEME_KEY) || "dark");

    document.querySelectorAll(".btn-theme-toggle").forEach((btn) => {
      btn.addEventListener("click", toggleTheme);
    });
  });

  window.ExamTheme = {
    toggle: toggleTheme,
    getTheme: () => localStorage.getItem(THEME_KEY) || "dark"
  };
})();
