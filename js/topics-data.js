/**
 * ExamPro Topics Metadata & Data Registry
 * Contains metadata for all 12 examination subjects
 */

const EXAM_TOPICS = [
  {
    id: "mathematics",
    title: "Mathematics",
    icon: "🧮",
    category: "Mathematics",
    description: "Fundamental mathematics, arithmetic, algebra, linear systems, matrices, calculus, and discrete theory.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "mathematics.js",
    windowKey: "mathematicsQuestions"
  },
  {
    id: "computer-fundamentals",
    title: "Computer Fundamentals",
    icon: "💻",
    category: "Core CS",
    description: "Hardware architecture, memory units, input/output systems, binary logic, and basic computer organization.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "computer-fundamentals.js",
    windowKey: "computerFundamentalsQuestions"
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: "🌐",
    category: "Web & Apps",
    description: "Semantic HTML5, CSS3 responsive grid/flexbox, browser DOM APIs, HTTP protocols, and modern web standards.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "web-development.js",
    windowKey: "webDevelopmentQuestions"
  },
  {
    id: "javascript",
    title: "JavaScript Programming",
    icon: "⚡",
    category: "Programming",
    description: "ECMAScript modern standards, scope, closures, event loop, asynchronous promises, objects, and arrays.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "javascript.js",
    windowKey: "javascriptQuestions"
  },
  {
    id: "python",
    title: "Python Programming",
    icon: "🐍",
    category: "Programming",
    description: "Python syntax, built-in data types, comprehensions, OOP, exceptions, generators, and standard modules.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "python.js",
    windowKey: "pythonQuestions"
  },
  {
    id: "java",
    title: "Java Programming",
    icon: "☕",
    category: "Programming",
    description: "Core Java principles, JVM architecture, OOP polymorphism & inheritance, collections framework, and threads.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "java.js",
    windowKey: "javaQuestions"
  },
  {
    id: "operating-system",
    title: "Operating Systems",
    icon: "🖥️",
    category: "Core CS",
    description: "Processes, threads, CPU scheduling algorithms, deadlock prevention, memory paging, and virtual memory.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "operating-system.js",
    windowKey: "operatingSystemQuestions"
  },
  {
    id: "dbms",
    title: "Database Management (DBMS)",
    icon: "🗄️",
    category: "Core CS",
    description: "Relational database modeling, ER diagrams, SQL queries, joins, ACID transactions, and normalization forms.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "dbms.js",
    windowKey: "dbmsQuestions"
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    icon: "🧠",
    category: "Core CS",
    description: "Arrays, stacks, queues, linked lists, trees, graphs, asymptotic complexity (Big-O), sorting, and search algorithms.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "dsa.js",
    windowKey: "dsaQuestions"
  },
  {
    id: "computer-networks",
    title: "Computer Networks",
    icon: "📡",
    category: "Core CS",
    description: "OSI and TCP/IP stack layers, IP addressing and subnetting, routing protocols, DNS, socket transport, and security.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "computer-networks.js",
    windowKey: "computerNetworksQuestions"
  },
  {
    id: "c-programming",
    title: "C Programming Language",
    icon: "⚙️",
    category: "Programming",
    description: "Pointers, dynamic memory management (malloc/free), structs, unions, preprocessor directives, and recursion.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "c-programming.js",
    windowKey: "cProgrammingQuestions"
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    icon: "📐",
    category: "Applied Engineering",
    description: "SDLC methodologies, Agile & Scrum, requirements engineering, design patterns, software testing, and DevOps.",
    questionCount: 100,
    durationMinutes: 60,
    passingScore: 50,
    scriptFile: "software-engineering.js",
    windowKey: "softwareEngineeringQuestions"
  }
];

function getTopicById(id) {
  return EXAM_TOPICS.find((t) => t.id === id) || null;
}

window.EXAM_TOPICS = EXAM_TOPICS;
window.getTopicById = getTopicById;
