/**
 * ExamPro Authentication & User Synchronization Service
 * Handles user login, session management in localStorage, page sync, and logout.
 * Requirements:
 * - 6. Sync user data among all pages using onLoad event listener checking localStorage
 * - 7. After form submission, user data saved in localStorage
 * - 8. After logout, user data removed
 * - 11. After logout, IndexedDB flushed
 */

const ExamAuth = (function () {
  const STORAGE_KEY = "examProUser";

  // Pre-configured student credentials
  const registeredUsers = [
    {
      username: "student",
      password: "123456",
      name: "Student",
      rollNo: "CS-2024-001",
      department: "Computer Science & Engineering",
      role: "student"
    },
    {
      username: "santanu",
      password: "123456",
      name: "Santanu Ghosh",
      rollNo: "IT-2024-104",
      department: "Information Technology",
      role: "student"
    }
  ];

  /**
   * Get current authenticated user from localStorage
   */
  function getCurrentUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error("Error reading currentUser from localStorage:", e);
      return null;
    }
  }

  /**
   * Requirement 7: After form submission save user data in localStorage
   */
  function login(username, password) {
    const cleanUser = (username || "").trim().toLowerCase();
    const cleanPass = (password || "").trim();

    if (!cleanUser || !cleanPass) {
      return { success: false, message: "Please enter both username and password." };
    }

    // Check predefined users first
    let user = registeredUsers.find(
      (u) => u.username.toLowerCase() === cleanUser && u.password === cleanPass
    );

    // If not found in demo, allow dynamic student sign-in if valid
    if (!user) {
      if (cleanPass.length >= 4) {
        // Create student profile
        user = {
          username: cleanUser,
          password: cleanPass,
          name: cleanUser.charAt(0).toUpperCase() + cleanUser.slice(1),
          rollNo: "STU-" + Math.floor(1000 + Math.random() * 9000),
          department: "Computer Science",
          role: "student"
        };
      } else {
        return { success: false, message: "Invalid credentials. (Demo: student / 123456)" };
      }
    }

    // Save session in localStorage
    const sessionData = {
      username: user.username,
      name: user.name,
      rollNo: user.rollNo,
      department: user.department,
      role: user.role,
      loginTimestamp: Date.now()
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));
    return { success: true, user: sessionData };
  }

  /**
   * Requirement 8 & 11: Remove data from localStorage and flush IndexedDB on logout
   */
  async function logout() {
    if (confirm("Are you sure you want to log out? All session data and IndexedDB attempts will be cleared.")) {
      // 1. Flush IndexedDB (Requirement 11)
      if (window.ExamDB && typeof window.ExamDB.flushDatabase === "function") {
        try {
          await window.ExamDB.flushDatabase();
        } catch (e) {
          console.warn("Error flushing IndexedDB on logout:", e);
        }
      }

      // 2. Remove user data from localStorage (Requirement 8)
      localStorage.removeItem(STORAGE_KEY);

      // Determine redirect path (topic subfolder vs root)
      const isInSubfolder = window.location.pathname.includes("/topics/");
      const targetUrl = isInSubfolder ? "../index.html" : "index.html";

      window.location.href = targetUrl;
    }
  }

  /**
   * Requirement 6: onLoad event listener checking localStorage for user data and syncing it
   */
  function syncUserData() {
    const user = getCurrentUser();
    const path = window.location.pathname;
    const isProtectedPage = 
      path.includes("dashboard.html") || 
      path.includes("attempts.html") || 
      path.includes("certificates.html") || 
      path.includes("/topics/");
    const isLoginPage = !isProtectedPage;

    if (!user) {
      // If user is not logged in and on a protected page, redirect to login
      if (isProtectedPage) {
        const isInSubfolder = path.includes("/topics/");
        const redirectUrl = isInSubfolder ? "../index.html" : "index.html";
        window.location.href = redirectUrl;
        return;
      }
    } else {
      // If user is already logged in and on login page, redirect to dashboard
      if (isLoginPage && !window.location.search.includes("relogin=true")) {
        window.location.href = "dashboard.html";
        return;
      }

      // Update UI elements across the page with user details
      document.querySelectorAll(".user-name-display").forEach((el) => {
        el.textContent = user.name || user.username;
      });

      document.querySelectorAll(".user-avatar").forEach((el) => {
        const initials = (user.name || user.username || "U")
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2);
        el.textContent = initials;
      });

      const rollDisplay = document.getElementById("studentRollDisplay");
      if (rollDisplay) rollDisplay.textContent = user.rollNo || "N/A";

      const deptDisplay = document.getElementById("studentDeptDisplay");
      if (deptDisplay) deptDisplay.textContent = user.department || "N/A";

      const welcomeTitle = document.getElementById("welcomeUserName");
      if (welcomeTitle) welcomeTitle.textContent = user.name || user.username;
    }
  }

  // Requirement 6: Listen on DOMContentLoaded & load
  window.addEventListener("DOMContentLoaded", syncUserData);
  window.addEventListener("load", syncUserData);

  return {
    getCurrentUser,
    login,
    logout,
    syncUserData,
    registeredUsers
  };
})();

window.ExamAuth = ExamAuth;
