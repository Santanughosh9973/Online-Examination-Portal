// IndexedDB service — save, retrieve, and clear quiz attempts

const ExamDB = (function () {
  const DB_NAME = "ExamProDatabase";
  const STORE   = "attempts";
  let db = null;

  function openDB() {
    return new Promise((resolve, reject) => {
      if (db) return resolve(db);
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = e => {
        const store = e.target.result.createObjectStore(STORE, { keyPath: "id", autoIncrement: true });
        store.createIndex("username",  "username",  { unique: false });
        store.createIndex("quizId",    "quizId",    { unique: false });
        store.createIndex("timestamp", "timestamp", { unique: false });
      };
      req.onsuccess = e => { db = e.target.result; resolve(db); };
      req.onerror   = e => reject(e.target.error);
    });
  }

  async function saveAttempt(record) {
    const store = (await openDB()).transaction(STORE, "readwrite").objectStore(STORE);
    return new Promise((resolve, reject) => {
      const req = store.add({ ...record, timestamp: Date.now(), dateFormatted: new Date().toLocaleString() });
      req.onsuccess = e => resolve(e.target.result);
      req.onerror   = e => reject(e.target.error);
    });
  }

  async function getAllAttempts(username = null) {
    const store = (await openDB()).transaction(STORE, "readonly").objectStore(STORE);
    return new Promise((resolve, reject) => {
      const req = store.getAll();
      req.onsuccess = e => {
        let results = e.target.result || [];
        if (username) results = results.filter(r => (r.username || "").toLowerCase() === username.toLowerCase());
        results.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        resolve(results);
      };
      req.onerror = e => reject(e.target.error);
    });
  }

  async function getAttemptById(id) {
    const store = (await openDB()).transaction(STORE, "readonly").objectStore(STORE);
    return new Promise((resolve, reject) => {
      const req = store.get(Number(id));
      req.onsuccess = e => resolve(e.target.result || null);
      req.onerror   = e => reject(e.target.error);
    });
  }

  async function getPassedAttempts(username = null) {
    return (await getAllAttempts(username)).filter(r => r.passed);
  }

  async function getAttemptCount(username, quizId) {
    return (await getAllAttempts(username)).filter(r => r.quizId === quizId).length;
  }

  async function flushDatabase() {
    const store = (await openDB()).transaction(STORE, "readwrite").objectStore(STORE);
    return new Promise((resolve, reject) => {
      const req = store.clear();
      req.onsuccess = () => resolve(true);
      req.onerror   = e => reject(e.target.error);
    });
  }

  return { saveAttempt, getAllAttempts, getAttemptById, getPassedAttempts, getAttemptCount, flushDatabase };
})();

window.ExamDB = ExamDB;
