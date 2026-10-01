window.javascriptQuestions = [

    // 1-10: Basics
    {
        question: "Which keyword is used to declare a block-scoped variable?",
        options: ["var", "let", "define", "variable"],
        answer: 1
    },
    {
        question: "Which keyword is used to declare a constant?",
        options: ["constant", "let", "const", "static"],
        answer: 2
    },
    {
        question: "Which symbol is used for a single-line comment?",
        options: ["//", "/*", "#", "<!--"],
        answer: 0
    },
    {
        question: "Which function displays a message in the browser console?",
        options: ["print()", "display()", "console.log()", "write()"],
        answer: 2
    },
    {
        question: "Which of the following is a primitive data type?",
        options: ["Array", "Object", "String", "Function"],
        answer: 2
    },
    {
        question: "What is the type of true?",
        options: ["String", "Boolean", "Number", "Object"],
        answer: 1
    },
    {
        question: "What does typeof return for a string?",
        options: ["text", "string", "String", "char"],
        answer: 1
    },
    {
        question: "What is the result of typeof null?",
        options: ["null", "undefined", "object", "boolean"],
        answer: 2
    },
    {
        question: "Which value represents an unassigned value?",
        options: ["null", "undefined", "empty", "NaN"],
        answer: 1
    },
    {
        question: "What does NaN mean?",
        options: [
            "Not a Number",
            "No assigned Number",
            "New and Null",
            "Negative Number"
        ],
        answer: 0
    },

    // 11-20: Operators
    {
        question: "What is the result of 5 + 3?",
        options: ["6", "7", "8", "9"],
        answer: 2
    },
    {
        question: "Which operator is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: 2
    },
    {
        question: "What does === compare?",
        options: [
            "Only values",
            "Only types",
            "Value and type",
            "Variable names"
        ],
        answer: 2
    },
    {
        question: "What is 10 % 3?",
        options: ["0", "1", "2", "3"],
        answer: 1
    },
    {
        question: "Which operator means logical AND?",
        options: ["||", "&&", "!", "&"],
        answer: 1
    },
    {
        question: "Which operator means logical OR?",
        options: ["&&", "||", "!", "|"],
        answer: 1
    },
    {
        question: "Which operator is used for exponentiation?",
        options: ["^", "**", "//", "^^"],
        answer: 1
    },
    {
        question: "What is the result of 2 ** 3?",
        options: ["5", "6", "8", "9"],
        answer: 2
    },
    {
        question: "What does the ! operator do?",
        options: [
            "Adds values",
            "Negates a Boolean value",
            "Multiplies values",
            "Compares strings"
        ],
        answer: 1
    },
    {
        question: "What is the result of 10 > 5?",
        options: ["true", "false", "10", "5"],
        answer: 0
    },

    // 21-30: Conditions and Loops
    {
        question: "Which statement is used for conditional execution?",
        options: ["if", "loop", "repeat", "check"],
        answer: 0
    },
    {
        question: "Which statement provides multiple conditions?",
        options: ["if-else", "switch", "repeat", "select"],
        answer: 1
    },
    {
        question: "Which loop is commonly used when the number of iterations is known?",
        options: ["for", "while", "do-while", "foreach"],
        answer: 0
    },
    {
        question: "Which loop executes at least once?",
        options: ["for", "while", "do-while", "for-of"],
        answer: 2
    },
    {
        question: "Which keyword exits a loop?",
        options: ["stop", "exit", "break", "end"],
        answer: 2
    },
    {
        question: "Which keyword skips the current loop iteration?",
        options: ["skip", "continue", "pass", "next"],
        answer: 1
    },
    {
        question: "Which loop is useful for iterating over iterable values?",
        options: ["for-in", "for-of", "repeat", "loop-of"],
        answer: 1
    },
    {
        question: "What does a while loop check before each iteration?",
        options: [
            "A condition",
            "A function",
            "A class",
            "An object"
        ],
        answer: 0
    },
    {
        question: "Which statement is used to handle multiple cases?",
        options: ["switch", "multiple", "case-if", "choose"],
        answer: 0
    },
    {
        question: "Which keyword is used inside switch?",
        options: ["option", "case", "choice", "when"],
        answer: 1
    },

    // 31-40: Functions
    {
        question: "Which keyword declares a function?",
        options: ["function", "def", "func", "method"],
        answer: 0
    },
    {
        question: "Which keyword sends a value back from a function?",
        options: ["send", "return", "output", "back"],
        answer: 1
    },
    {
        question: "What is an anonymous function?",
        options: [
            "A function without a name",
            "A function without parameters",
            "A function without return",
            "A private function"
        ],
        answer: 0
    },
    {
        question: "Which syntax represents an arrow function?",
        options: [
            "function =>",
            "() =>",
            "=> function",
            "<= ()"
        ],
        answer: 1
    },
    {
        question: "What is a parameter?",
        options: [
            "A value returned by a function",
            "A variable defined in a function declaration",
            "A loop",
            "An object"
        ],
        answer: 1
    },
    {
        question: "What is an argument?",
        options: [
            "A value passed to a function",
            "A function name",
            "A return type",
            "A class"
        ],
        answer: 0
    },
    {
        question: "Can a JavaScript function return another function?",
        options: ["Yes", "No", "Only in Node.js", "Only in classes"],
        answer: 0
    },
    {
        question: "What are functions in JavaScript considered?",
        options: [
            "Only statements",
            "First-class objects",
            "Only variables",
            "Primitive values"
        ],
        answer: 1
    },
    {
        question: "Which method executes a function after a specified delay?",
        options: ["setDelay()", "setTimeout()", "delay()", "wait()"],
        answer: 1
    },
    {
        question: "Which method repeatedly executes code after a time interval?",
        options: ["setInterval()", "repeat()", "loopTime()", "setRepeat()"],
        answer: 0
    },

    // 41-50: Arrays
    {
        question: "Which brackets are used to create an array?",
        options: ["{}", "[]", "()", "<>"],
        answer: 1
    },
    {
        question: "What is the index of the first array element?",
        options: ["0", "1", "-1", "2"],
        answer: 0
    },
    {
        question: "Which property gives the number of elements in an array?",
        options: ["size", "count", "length", "items"],
        answer: 2
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "add()", "append()", "insert()"],
        answer: 0
    },
    {
        question: "Which method removes the last element?",
        options: ["remove()", "delete()", "pop()", "last()"],
        answer: 2
    },
    {
        question: "Which method removes the first element?",
        options: ["shift()", "removeFirst()", "delete()", "first()"],
        answer: 0
    },
    {
        question: "Which method adds an element to the beginning?",
        options: ["push()", "unshift()", "prepend()", "addFirst()"],
        answer: 1
    },
    {
        question: "Which method creates a new array by transforming elements?",
        options: ["map()", "change()", "transform()", "modify()"],
        answer: 0
    },
    {
        question: "Which method returns elements that satisfy a condition?",
        options: ["findAll()", "filter()", "select()", "search()"],
        answer: 1
    },
    {
        question: "Which method combines array elements into one value?",
        options: ["combine()", "reduce()", "merge()", "joinAll()"],
        answer: 1
    },

    // 51-60: Strings
    {
        question: "Which property returns the length of a string?",
        options: ["size", "length", "count", "characters"],
        answer: 1
    },
    {
        question: "Which method converts a string to uppercase?",
        options: ["upper()", "toUpperCase()", "uppercase()", "capitalize()"],
        answer: 1
    },
    {
        question: "Which method converts a string to lowercase?",
        options: ["lower()", "toLowerCase()", "lowercase()", "small()"],
        answer: 1
    },
    {
        question: "Which method removes whitespace from both ends of a string?",
        options: ["clean()", "trim()", "removeSpace()", "strip()"],
        answer: 1
    },
    {
        question: "Which method checks whether a string contains another string?",
        options: ["contains()", "includes()", "hasText()", "find()"],
        answer: 1
    },
    {
        question: "Which method returns part of a string?",
        options: ["slice()", "part()", "cut()", "section()"],
        answer: 0
    },
    {
        question: "Which symbol is commonly used for template literals?",
        options: ["'", "\"", "`", "#"],
        answer: 2
    },
    {
        question: "Which syntax inserts an expression into a template literal?",
        options: [
            "${expression}",
            "#{expression}",
            "<%expression%>",
            "{{expression}}"
        ],
        answer: 0
    },
    {
        question: "Which method splits a string into an array?",
        options: ["split()", "divide()", "explode()", "separate()"],
        answer: 0
    },
    {
        question: "Which method joins array elements into a string?",
        options: ["join()", "combine()", "merge()", "concatArray()"],
        answer: 0
    },

    // 61-70: Objects
    {
        question: "Which brackets are normally used for an object literal?",
        options: ["[]", "{}", "()", "<>"],
        answer: 1
    },
    {
        question: "How are object properties commonly written?",
        options: [
            "key = value",
            "key: value",
            "key -> value",
            "key => value"
        ],
        answer: 1
    },
    {
        question: "Which notation accesses an object property?",
        options: [
            "object.property",
            "object->property",
            "object::property",
            "object/property"
        ],
        answer: 0
    },
    {
        question: "Which notation allows a dynamic property name?",
        options: [
            "Dot notation only",
            "Bracket notation",
            "Arrow notation",
            "Colon notation"
        ],
        answer: 1
    },
    {
        question: "Which keyword creates a new object using a constructor?",
        options: ["create", "new", "object", "make"],
        answer: 1
    },
    {
        question: "Which keyword refers to the current object context?",
        options: ["self", "current", "this", "object"],
        answer: 2
    },
    {
        question: "Which method returns an array of object keys?",
        options: [
            "Object.keys()",
            "Object.values()",
            "Object.entries()",
            "Object.names()"
        ],
        answer: 0
    },
    {
        question: "Which method returns an array of object values?",
        options: [
            "Object.keys()",
            "Object.values()",
            "Object.items()",
            "Object.data()"
        ],
        answer: 1
    },
    {
        question: "Which method returns key-value pairs?",
        options: [
            "Object.keys()",
            "Object.values()",
            "Object.entries()",
            "Object.pairs()"
        ],
        answer: 2
    },
    {
        question: "What is destructuring?",
        options: [
            "Deleting an object",
            "Extracting values from arrays or objects",
            "Creating a class",
            "Sorting an array"
        ],
        answer: 1
    },

    // 71-80: DOM and Events
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Model",
            "Digital Object Management"
        ],
        answer: 0
    },
    {
        question: "Which method selects an element by its ID?",
        options: [
            "getElementById()",
            "getById()",
            "selectId()",
            "queryId()"
        ],
        answer: 0
    },
    {
        question: "Which method selects the first element matching a CSS selector?",
        options: [
            "querySelector()",
            "selectFirst()",
            "getSelector()",
            "findElement()"
        ],
        answer: 0
    },
    {
        question: "Which method selects all matching elements?",
        options: [
            "querySelectorAll()",
            "selectAll()",
            "getAll()",
            "findAllElements()"
        ],
        answer: 0
    },
    {
        question: "Which property can change the HTML content of an element?",
        options: ["innerHTML", "htmlText", "contentHTML", "changeHTML"],
        answer: 0
    },
    {
        question: "Which property changes only the text content?",
        options: ["innerTextOnly", "textContent", "textHTML", "contentTextOnly"],
        answer: 1
    },
    {
        question: "Which method creates a new HTML element?",
        options: [
            "createElement()",
            "newElement()",
            "addElement()",
            "makeElement()"
        ],
        answer: 0
    },
    {
        question: "Which method adds an event listener?",
        options: [
            "addEventListener()",
            "addEvent()",
            "listenEvent()",
            "onEvent()"
        ],
        answer: 0
    },
    {
        question: "Which event occurs when a user clicks an element?",
        options: ["hover", "click", "press", "select"],
        answer: 1
    },
    {
        question: "Which event occurs when a form is submitted?",
        options: ["send", "submit", "form", "post"],
        answer: 1
    },

    // 81-90: ES6, Classes and Modern JS
    {
        question: "Which keyword is block-scoped and can be reassigned?",
        options: ["const", "let", "static", "fixed"],
        answer: 1
    },
    {
        question: "Which keyword prevents reassignment of a variable?",
        options: ["let", "const", "fixed", "immutable"],
        answer: 1
    },
    {
        question: "Which syntax is used for an arrow function?",
        options: ["=>", "<=", "->", "::"],
        answer: 0
    },
    {
        question: "Which keyword defines a class?",
        options: ["class", "object", "struct", "type"],
        answer: 0
    },
    {
        question: "Which method initializes a class object?",
        options: ["init()", "constructor()", "start()", "create()"],
        answer: 1
    },
    {
        question: "Which keyword is used for class inheritance?",
        options: ["inherits", "extends", "implements", "inheritsFrom"],
        answer: 1
    },
    {
        question: "Which keyword calls the parent class constructor?",
        options: ["parent", "base", "super", "main"],
        answer: 2
    },
    {
        question: "What does the spread operator look like?",
        options: ["...", "***", "..", "==="],
        answer: 0
    },
    {
        question: "What does the rest parameter use?",
        options: ["...", "&&", "??", "::"],
        answer: 0
    },
    {
        question: "Which feature allows default values for function parameters?",
        options: [
            "Default parameters",
            "Static parameters",
            "Fixed parameters",
            "Constant parameters"
        ],
        answer: 0
    },

    // 91-100: Async, JSON, Errors and Advanced
    {
        question: "What does a Promise represent?",
        options: [
            "A future completion or failure of an asynchronous operation",
            "A CSS rule",
            "An HTML element",
            "A loop"
        ],
        answer: 0
    },
    {
        question: "Which keyword pauses an async function until a Promise settles?",
        options: ["wait", "pause", "await", "hold"],
        answer: 2
    },
    {
        question: "Which keyword declares an asynchronous function?",
        options: ["async", "await", "promise", "defer"],
        answer: 0
    },
    {
        question: "Which method handles a fulfilled Promise?",
        options: [".then()", ".success()", ".done()", ".resolve()"],
        answer: 0
    },
    {
        question: "Which method handles a rejected Promise?",
        options: [".error()", ".catch()", ".reject()", ".fail()"],
        answer: 1
    },
    {
        question: "What does JSON stand for?",
        options: [
            "JavaScript Object Notation",
            "Java Standard Object Network",
            "JavaScript Online Notation",
            "JSON Object Network"
        ],
        answer: 0
    },
    {
        question: "Which method converts a JSON string into a JavaScript value?",
        options: [
            "JSON.parse()",
            "JSON.convert()",
            "JSON.toObject()",
            "JSON.read()"
        ],
        answer: 0
    },
    {
        question: "Which method converts a JavaScript value into a JSON string?",
        options: [
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.toStringObject()",
            "JSON.encodeObject()"
        ],
        answer: 0
    },
    {
        question: "Which block is used to handle exceptions?",
        options: [
            "try...catch",
            "if...else",
            "switch...case",
            "check...error"
        ],
        answer: 0
    },
    {
        question: "Which keyword manually throws an exception?",
        options: ["throw", "error", "exception", "raise"],
        answer: 0
    }
];

console.log(
    "JavaScript questions loaded:",
    window.javascriptQuestions.length
);

if (window.javascriptQuestions.length !== 100) {
    console.warn(
        "Warning: JavaScript question bank should contain exactly 100 questions."
    );
}