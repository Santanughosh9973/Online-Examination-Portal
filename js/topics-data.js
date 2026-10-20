// Topic metadata for all 12 examination subjects

const EXAM_TOPICS = [
  { id: "mathematics",         title: "Mathematics",                    icon: "🧮", category: "Mathematics",        description: "Arithmetic, algebra, matrices, calculus, and discrete mathematics.",                         questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "mathematicsQuestions"         },
  { id: "computer-fundamentals", title: "Computer Fundamentals",        icon: "💻", category: "Core CS",            description: "Hardware, memory, I/O systems, binary logic, and computer organization.",                   questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "computerFundamentalsQuestions" },
  { id: "web-development",     title: "Web Development",                icon: "🌐", category: "Web & Apps",         description: "HTML5, CSS3, DOM APIs, HTTP protocols, and modern web standards.",                          questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "webDevelopmentQuestions"      },
  { id: "javascript",          title: "JavaScript Programming",         icon: "⚡", category: "Programming",        description: "Scope, closures, event loop, async/await, objects, and arrays.",                            questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "javascriptQuestions"          },
  { id: "python",              title: "Python Programming",             icon: "🐍", category: "Programming",        description: "Python syntax, data types, OOP, exceptions, and standard modules.",                          questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "pythonQuestions"              },
  { id: "java",                title: "Java Programming",               icon: "☕", category: "Programming",        description: "JVM, OOP, collections, and multithreading.",                                                 questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "javaQuestions"                },
  { id: "operating-system",   title: "Operating Systems",              icon: "🖥️", category: "Core CS",            description: "Processes, scheduling, deadlock, memory management, and virtual memory.",                    questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "operatingSystemQuestions"     },
  { id: "dbms",                title: "Database Management (DBMS)",     icon: "🗄️", category: "Core CS",            description: "Relational models, SQL, joins, ACID transactions, and normalization.",                       questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "dbmsQuestions"                },
  { id: "dsa",                 title: "Data Structures & Algorithms",   icon: "🧠", category: "Core CS",            description: "Arrays, trees, graphs, Big-O, sorting, and search algorithms.",                             questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "dsaQuestions"                 },
  { id: "computer-networks",   title: "Computer Networks",              icon: "📡", category: "Core CS",            description: "OSI/TCP-IP layers, IP addressing, routing, DNS, and network security.",                     questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "computerNetworksQuestions"    },
  { id: "c-programming",       title: "C Programming Language",         icon: "⚙️", category: "Programming",        description: "Pointers, memory management, structs, preprocessor, and recursion.",                        questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "cProgrammingQuestions"        },
  { id: "software-engineering", title: "Software Engineering",          icon: "📐", category: "Applied Engineering", description: "SDLC, Agile/Scrum, design patterns, testing, and DevOps.",                                questionCount: 10, durationMinutes: 10, passingScore: 50, windowKey: "softwareEngineeringQuestions" }
];

function getTopicById(id) {
  return EXAM_TOPICS.find(t => t.id === id) || null;
}

window.EXAM_TOPICS = EXAM_TOPICS;
window.getTopicById = getTopicById;
