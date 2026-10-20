// Theme toggle — persists dark/light preference in localStorage

(function () {
  const KEY = "examProTheme";

  function apply(theme) {
    document.body.classList.toggle("light-theme", theme === "light");
    document.querySelectorAll(".btn-theme-toggle").forEach(btn => {
      btn.innerHTML = theme === "light" ? "☀️" : "🌙";
      btn.title = theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
    });
  }

  // Apply immediately to avoid flash
  const saved = localStorage.getItem(KEY) || "dark";
  if (saved === "light") document.documentElement.classList.add("light-theme");

  window.addEventListener("DOMContentLoaded", () => {
    apply(localStorage.getItem(KEY) || "dark");
    document.querySelectorAll(".btn-theme-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const next = document.body.classList.contains("light-theme") ? "dark" : "light";
        localStorage.setItem(KEY, next);
        apply(next);
      });
    });
  });
})();
