/**
 * ExamPro IndexedDB Database Service
 * Handles storing, retrieving, and flushing quiz attempts and results
 * Requirements:
 * - 9. Save result of each quiz with marks, attempts, attempted answers, correct answers to IndexedDB
 * - 10. Show all attempts
 * - 11. Flush IndexedDB on logout
 */

const ExamDB = (function () {
  const DB_NAME = "ExamProDatabase";
  const DB_VERSION = 1;
  const STORE_NAME = "attempts";

  let dbInstance = null;

  function openDB() {
    return new Promise((resolve, reject) => {
      if (dbInstance) {
        return resolve(dbInstance);
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, {
            keyPath: "id",
            autoIncrement: true
          });
          store.createIndex("username", "username", { unique: false });
          store.createIndex("quizId", "quizId", { unique: false });
          store.createIndex("timestamp", "timestamp", { unique: false });
          store.createIndex("passed", "passed", { unique: false });
        }
      };

      request.onsuccess = (event) => {
        dbInstance = event.target.result;
        resolve(dbInstance);
      };

      request.onerror = (event) => {
        console.error("IndexedDB open error:", event.target.error);
        reject(event.target.error);
      };
    });
  }

  /**
   * Save a completed exam attempt record
   */
  async function saveAttempt(record) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);

      // Ensure timestamp and formatting
      const attemptData = {
        ...record,
        timestamp: record.timestamp || Date.now(),
        dateFormatted: record.dateFormatted || new Date().toLocaleString()
      };

      const request = store.add(attemptData);

      request.onsuccess = (event) => {
        resolve(event.target.result); // Returns newly generated ID
      };

      request.onerror = (event) => {
        console.error("Error saving attempt to IndexedDB:", event.target.error);
        reject(event.target.error);
      };
    });
  }

  /**
   * Retrieve all attempts, optionally filtered by username
   */
  async function getAllAttempts(username = null) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = (event) => {
        let results = event.target.result || [];
        if (username) {
          results = results.filter(
            (item) => item.username && item.username.toLowerCase() === username.toLowerCase()
          );
        }
        // Sort descending (latest attempt first)
        results.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        resolve(results);
      };

      request.onerror = (event) => {
        console.error("Error fetching attempts:", event.target.error);
        reject(event.target.error);
      };
    });
  }

  /**
   * Retrieve a specific attempt by ID
   */
  async function getAttemptById(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(Number(id));

      request.onsuccess = (event) => {
        resolve(event.target.result || null);
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }

  /**
   * Retrieve passed attempts for certificates
   */
  async function getPassedAttempts(username = null) {
    const all = await getAllAttempts(username);
    return all.filter((item) => item.passed === true);
  }

  /**
   * Calculate attempt count for a specific quiz and user
   */
  async function getAttemptCount(username, quizId) {
    const all = await getAllAttempts(username);
    return all.filter((item) => item.quizId === quizId).length;
  }

  /**
   * Flush/Clear all attempts from IndexedDB (Called on Logout)
   * Requirement 11: after logout indexdb will be flushed
   */
  async function flushDatabase() {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], "readwrite");
        const store = transaction.objectStore(STORE_NAME);
        const request = store.clear();

        request.onsuccess = () => {
          console.log("IndexedDB attempts store successfully flushed.");
          resolve(true);
        };

        request.onerror = (event) => {
          console.error("Error clearing IndexedDB:", event.target.error);
          reject(event.target.error);
        };
      });
    } catch (err) {
      console.warn("Could not open DB to flush, attempting deleteDatabase:", err);
      return new Promise((resolve) => {
        if (dbInstance) {
          dbInstance.close();
          dbInstance = null;
        }
        const delReq = indexedDB.deleteDatabase(DB_NAME);
        delReq.onsuccess = () => resolve(true);
        delReq.onerror = () => resolve(false);
      });
    }
  }

  return {
    openDB,
    saveAttempt,
    getAllAttempts,
    getAttemptById,
    getPassedAttempts,
    getAttemptCount,
    flushDatabase
  };
})();

// Attach to window
window.ExamDB = ExamDB;
