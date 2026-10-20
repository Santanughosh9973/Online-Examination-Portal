// Authentication — stores session in localStorage, flushes IndexedDB on logout

const ExamAuth = (function () {
  const KEY = "examProUser";

  const USERS = [
    { username: "student",  password: "123456", name: "Student",       rollNo: "CS-2024-001", department: "Computer Science & Engineering" },
    { username: "santanu",  password: "123456", name: "Santanu Ghosh", rollNo: "IT-2024-104", department: "Information Technology"          }
  ];

  function getCurrentUser() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; }
  }

  function login(username, password) {
    const u = (username || "").trim().toLowerCase();
    const p = (password || "").trim();
    if (!u || !p) return { success: false, message: "Please enter username and password." };

    let user = USERS.find(x => x.username === u && x.password === p);
    if (!user) {
      if (p.length >= 4) {
        user = { username: u, name: u.charAt(0).toUpperCase() + u.slice(1), rollNo: "STU-" + Math.floor(1000 + Math.random() * 9000), department: "Computer Science" };
      } else {
        return { success: false, message: "Invalid credentials. (Demo: student / 123456)" };
      }
    }

    const session = { username: user.username, name: user.name, rollNo: user.rollNo, department: user.department, loginTimestamp: Date.now() };
    localStorage.setItem(KEY, JSON.stringify(session));
    return { success: true, user: session };
  }

  async function logout() {
    if (!confirm("Are you sure you want to log out?")) return;
    if (window.ExamDB) { try { await ExamDB.flushDatabase(); } catch {} }
    localStorage.removeItem(KEY);
    const base = window.location.pathname.includes("/topics/") ? "../" : "";
    window.location.href = base + "index.html";
  }

  function syncUserData() {
    const user = getCurrentUser();
    const path = window.location.pathname;
    const isProtected = path.includes("dashboard.html") || path.includes("attempts.html") || path.includes("certificates.html") || path.includes("/topics/");

    if (!user) {
      if (isProtected) {
        window.location.href = path.includes("/topics/") ? "../index.html" : "index.html";
      }
      return;
    }

    if (!isProtected && !window.location.search.includes("relogin=true")) {
      window.location.href = "dashboard.html";
      return;
    }

    document.querySelectorAll(".user-name-display").forEach(el => el.textContent = user.name || user.username);
    document.querySelectorAll(".user-avatar").forEach(el => {
      el.textContent = (user.name || user.username || "U").split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    });

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set("studentRollDisplay", user.rollNo || "N/A");
    set("studentDeptDisplay", user.department || "N/A");
    set("welcomeUserName", user.name || user.username);
  }

  window.addEventListener("DOMContentLoaded", syncUserData);

  return { getCurrentUser, login, logout };
})();

window.ExamAuth = ExamAuth;
