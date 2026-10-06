window.javaQuestions = [

    // 1-10: Java Basics
    {
        question: "Who originally developed Java?",
        options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"],
        answer: 0
    },
    {
        question: "Which company originally developed Java?",
        options: ["Microsoft", "Sun Microsystems", "IBM", "Apple"],
        answer: 1
    },
    {
        question: "Which file extension is used for Java source files?",
        options: [".java", ".jav", ".class", ".js"],
        answer: 0
    },
    {
        question: "Which command compiles a Java source file?",
        options: ["java", "javac", "compile", "jcompile"],
        answer: 1
    },
    {
        question: "Which command runs a compiled Java class?",
        options: ["run", "java", "javac", "execute"],
        answer: 1
    },
    {
        question: "What does JVM stand for?",
        options: [
            "Java Virtual Machine",
            "Java Variable Machine",
            "Java Visual Machine",
            "Java Verified Machine"
        ],
        answer: 0
    },
    {
        question: "What does JDK stand for?",
        options: [
            "Java Development Kit",
            "Java Design Kit",
            "Java Deployment Kernel",
            "Java Development Kernel"
        ],
        answer: 0
    },
    {
        question: "What does JRE stand for?",
        options: [
            "Java Runtime Environment",
            "Java Running Engine",
            "Java Runtime Extension",
            "Java Resource Environment"
        ],
        answer: 0
    },
    {
        question: "Which method is the traditional entry point of a Java application?",
        options: ["start()", "run()", "main()", "execute()"],
        answer: 2
    },
    {
        question: "Which keyword is used to define a class?",
        options: ["class", "Class", "define", "object"],
        answer: 0
    },

    // 11-20: Data Types and Variables
    {
        question: "Which of the following is a primitive data type?",
        options: ["String", "Integer", "int", "Array"],
        answer: 2
    },
    {
        question: "How many primitive data types does Java have?",
        options: ["6", "7", "8", "9"],
        answer: 2
    },
    {
        question: "Which data type stores true or false?",
        options: ["boolean", "bool", "BooleanValue", "bit"],
        answer: 0
    },
    {
        question: "Which data type stores a single 16-bit Unicode character?",
        options: ["char", "character", "String", "byte"],
        answer: 0
    },
    {
        question: "Which data type is commonly used for whole numbers?",
        options: ["float", "int", "double", "char"],
        answer: 1
    },
    {
        question: "Which data type stores a 64-bit floating-point value?",
        options: ["float", "double", "decimal", "real"],
        answer: 1
    },
    {
        question: "Which keyword declares a constant variable?",
        options: ["constant", "const", "final", "static"],
        answer: 2
    },
    {
        question: "Which keyword declares a variable?",
        options: ["var", "variable", "data", "declare"],
        answer: 0
    },
    {
        question: "What is the default value of an instance int variable?",
        options: ["1", "0", "null", "undefined"],
        answer: 1
    },
    {
        question: "What is the default value of an instance boolean variable?",
        options: ["true", "false", "0", "null"],
        answer: 1
    },

    // 21-30: Operators
    {
        question: "Which operator is used for assignment?",
        options: ["==", "=", "=>", ":="],
        answer: 1
    },
    {
        question: "Which operator checks equality of primitive values?",
        options: ["=", "==", "===", "equals"],
        answer: 1
    },
    {
        question: "Which operator means logical AND?",
        options: ["&", "&&", "and", "AND"],
        answer: 1
    },
    {
        question: "Which operator means logical OR?",
        options: ["|", "||", "or", "OR"],
        answer: 1
    },
    {
        question: "Which operator means logical NOT?",
        options: ["!", "not", "~", "!="],
        answer: 0
    },
    {
        question: "What is 10 % 3?",
        options: ["0", "1", "2", "3"],
        answer: 1
    },
    {
        question: "Which operator performs multiplication?",
        options: ["x", "*", "#", "%"],
        answer: 1
    },
    {
        question: "Which operator increments a variable by one?",
        options: ["++", "+=", "**", "--"],
        answer: 0
    },
    {
        question: "Which operator decrements a variable by one?",
        options: ["--", "-=", "++", "**"],
        answer: 0
    },
    {
        question: "Which operator is the conditional/ternary operator?",
        options: ["::", "?:", "??", "=>"],
        answer: 1
    },

    // 31-40: Control Flow
    {
        question: "Which statement is used for conditional execution?",
        options: ["if", "when", "check", "condition"],
        answer: 0
    },
    {
        question: "Which keyword provides an alternative branch?",
        options: ["otherwise", "else", "alternative", "default"],
        answer: 1
    },
    {
        question: "Which statement is used for multiple branches?",
        options: ["switch", "select", "choose", "multiple"],
        answer: 0
    },
    {
        question: "Which loop is commonly used when the number of iterations is known?",
        options: ["while", "for", "do", "repeat"],
        answer: 1
    },
    {
        question: "Which loop checks the condition before execution?",
        options: ["while", "do-while", "repeat", "foreach"],
        answer: 0
    },
    {
        question: "Which loop executes its body at least once?",
        options: ["for", "while", "do-while", "foreach"],
        answer: 2
    },
    {
        question: "Which keyword terminates a loop?",
        options: ["stop", "break", "exit", "end"],
        answer: 1
    },
    {
        question: "Which keyword skips the current iteration?",
        options: ["skip", "continue", "next", "pass"],
        answer: 1
    },
    {
        question: "Which keyword exits a method and optionally returns a value?",
        options: ["exit", "return", "break", "end"],
        answer: 1
    },
    {
        question: "Which keyword is used for a case in a switch statement?",
        options: ["option", "case", "when", "choice"],
        answer: 1
    },

    // 41-50: Arrays and Strings
    {
        question: "Which syntax creates an array?",
        options: [
            "int[] numbers;",
            "array numbers;",
            "int numbers[]();",
            "array<int> numbers;"
        ],
        answer: 0
    },
    {
        question: "What is the first index of a Java array?",
        options: ["0", "1", "-1", "2"],
        answer: 0
    },
    {
        question: "Which property gives the size of an array?",
        options: ["size()", "length", "length()", "count"],
        answer: 1
    },
    {
        question: "Can a Java array change its size after creation?",
        options: ["Yes", "No", "Only int arrays", "Only String arrays"],
        answer: 1
    },
    {
        question: "Which class represents strings in Java?",
        options: ["String", "Text", "StringValue", "CharacterString"],
        answer: 0
    },
    {
        question: "Are Java String objects immutable?",
        options: ["Yes", "No", "Only sometimes", "Only static strings"],
        answer: 0
    },
    {
        question: "Which method returns the length of a String?",
        options: ["size()", "length()", "count()", "getLength()"],
        answer: 1
    },
    {
        question: "Which method compares String contents?",
        options: ["==", "equals()", "compare()", "same()"],
        answer: 1
    },
    {
        question: "Which class is useful for mutable strings?",
        options: ["StringBuilder", "MutableString", "StringChange", "TextBuilderOnly"],
        answer: 0
    },
    {
        question: "Which method converts a String to lowercase?",
        options: ["lower()", "toLowerCase()", "lowercase()", "convertLower()"],
        answer: 1
    },

    // 51-60: Classes and Objects
    {
        question: "What is a class?",
        options: [
            "A blueprint for objects",
            "A loop",
            "A variable",
            "A package"
        ],
        answer: 0
    },
    {
        question: "What is an object?",
        options: [
            "An instance of a class",
            "A data type only",
            "A method",
            "A package"
        ],
        answer: 0
    },
    {
        question: "Which keyword creates an object?",
        options: ["create", "new", "object", "make"],
        answer: 1
    },
    {
        question: "Which keyword refers to the current object?",
        options: ["current", "self", "this", "object"],
        answer: 2
    },
    {
        question: "What is a constructor?",
        options: [
            "A special member used during object creation",
            "A normal variable",
            "A loop",
            "A package"
        ],
        answer: 0
    },
    {
        question: "Does a constructor have a return type?",
        options: ["Yes", "No", "Only int", "Only void"],
        answer: 1
    },
    {
        question: "Which constructor is supplied if no constructor is explicitly declared?",
        options: [
            "Default constructor",
            "Main constructor",
            "Static constructor",
            "Final constructor"
        ],
        answer: 0
    },
    {
        question: "Which operator accesses members of an object?",
        options: [".", "->", "::", ":"],
        answer: 0
    },
    {
        question: "Can a class contain fields and methods?",
        options: ["Yes", "No", "Only methods", "Only fields"],
        answer: 0
    },
    {
        question: "Which access modifier gives the widest general access?",
        options: ["private", "protected", "public", "default"],
        answer: 2
    },

    // 61-70: OOP
    {
        question: "What does OOP stand for?",
        options: [
            "Object-Oriented Programming",
            "Object Operating Program",
            "Open Object Programming",
            "Object Output Process"
        ],
        answer: 0
    },
    {
        question: "Which OOP concept hides internal implementation details?",
        options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"],
        answer: 1
    },
    {
        question: "Which OOP concept allows one class to acquire features of another?",
        options: ["Inheritance", "Encapsulation", "Abstraction", "Overloading"],
        answer: 0
    },
    {
        question: "Which concept allows the same interface to have different implementations?",
        options: ["Inheritance", "Polymorphism", "Encapsulation", "Compilation"],
        answer: 1
    },
    {
        question: "Which concept focuses on essential features while hiding details?",
        options: ["Abstraction", "Inheritance", "Overloading", "Casting"],
        answer: 0
    },
    {
        question: "Which keyword is used for class inheritance?",
        options: ["inherits", "extends", "implements", "super"],
        answer: 1
    },
    {
        question: "Which keyword refers to the parent class?",
        options: ["parent", "base", "super", "this"],
        answer: 2
    },
    {
        question: "Which keyword prevents a class from being inherited?",
        options: ["static", "private", "final", "sealedOnly"],
        answer: 2
    },
    {
        question: "Can Java classes directly extend more than one class?",
        options: ["Yes", "No", "Only abstract classes", "Only interfaces"],
        answer: 1
    },
    {
        question: "Can a Java class implement multiple interfaces?",
        options: ["Yes", "No", "Only one", "Only two"],
        answer: 0
    },

    // 71-80: Methods and Interfaces
    {
        question: "What is method overloading?",
        options: [
            "Same method name with different parameter lists",
            "Same method in two classes",
            "Deleting a method",
            "Changing a class name"
        ],
        answer: 0
    },
    {
        question: "What is method overriding?",
        options: [
            "Subclass providing a new implementation of an inherited method",
            "Creating two methods with different parameters",
            "Deleting a method",
            "Changing a variable"
        ],
        answer: 0
    },
    {
        question: "Which annotation commonly indicates an overridden method?",
        options: ["@Override", "@Overload", "@Inherited", "@Method"],
        answer: 0
    },
    {
        question: "Which keyword makes a method belong to the class rather than an instance?",
        options: ["static", "class", "shared", "global"],
        answer: 0
    },
    {
        question: "Which keyword prevents a method from being overridden?",
        options: ["final", "static", "privateOnly", "fixed"],
        answer: 0
    },
    {
        question: "What is an interface?",
        options: [
            "A contract that classes can implement",
            "A normal variable",
            "A loop",
            "A constructor"
        ],
        answer: 0
    },
    {
        question: "Which keyword implements an interface?",
        options: ["extends", "implements", "interface", "uses"],
        answer: 1
    },
    {
        question: "Which keyword declares an interface?",
        options: ["interface", "Interface", "implements", "contract"],
        answer: 0
    },
    {
        question: "Can an interface be implemented by multiple classes?",
        options: ["Yes", "No", "Only one class", "Only abstract classes"],
        answer: 0
    },
    {
        question: "Which type cannot normally be instantiated directly?",
        options: ["Concrete class", "Abstract class", "Object", "String"],
        answer: 1
    },

    // 81-90: Exceptions
    {
        question: "What is an exception?",
        options: [
            "An event that disrupts normal program execution",
            "A variable",
            "A class name",
            "A package"
        ],
        answer: 0
    },
    {
        question: "Which block contains code that may throw an exception?",
        options: ["try", "catch", "finally", "throw"],
        answer: 0
    },
    {
        question: "Which block handles an exception?",
        options: ["try", "catch", "finally", "handle"],
        answer: 1
    },
    {
        question: "Which block generally executes after try/catch?",
        options: ["final", "finally", "finish", "end"],
        answer: 1
    },
    {
        question: "Which keyword explicitly throws an exception?",
        options: ["throw", "throws", "raise", "exception"],
        answer: 0
    },
    {
        question: "Which keyword declares exceptions a method may throw?",
        options: ["throw", "throws", "exception", "declare"],
        answer: 1
    },
    {
        question: "Which exception can occur when dividing an integer by zero?",
        options: [
            "ArithmeticException",
            "DivideException",
            "ZeroException",
            "MathException"
        ],
        answer: 0
    },
    {
        question: "Which exception occurs when accessing an object through a null reference?",
        options: [
            "NullPointerException",
            "NullReferenceException",
            "ObjectNullException",
            "ReferenceError"
        ],
        answer: 0
    },
    {
        question: "Which exception occurs when accessing an invalid array index?",
        options: [
            "ArrayIndexOutOfBoundsException",
            "IndexError",
            "ArrayError",
            "BoundsException"
        ],
        answer: 0
    },
    {
        question: "Which superclass is at the top of the Java exception hierarchy?",
        options: ["Exception", "Throwable", "Error", "Object"],
        answer: 1
    },

    // 91-100: Collections, Generics and Advanced
    {
        question: "Which interface represents an ordered collection that can contain duplicates?",
        options: ["Set", "List", "Map", "QueueOnly"],
        answer: 1
    },
    {
        question: "Which interface does not allow duplicate elements?",
        options: ["List", "Set", "Map", "ArrayList"],
        answer: 1
    },
    {
        question: "Which collection stores key-value mappings?",
        options: ["List", "Set", "Map", "Queue"],
        answer: 2
    },
    {
        question: "Which class is a resizable-array implementation of List?",
        options: ["ArrayList", "Array", "ListArray", "VectorList"],
        answer: 0
    },
    {
        question: "Which class is commonly used for a hash-based Set?",
        options: ["HashSet", "HashList", "SetHash", "TreeList"],
        answer: 0
    },
    {
        question: "Which class implements a hash-based Map?",
        options: ["HashMap", "HashTableList", "MapHash", "HashSet"],
        answer: 0
    },
    {
        question: "What are generics mainly used for?",
        options: [
            "Type-safe reusable code",
            "Creating threads",
            "Handling exceptions",
            "Compiling programs"
        ],
        answer: 0
    },
    {
        question: "Which symbol is commonly used for generic type parameters?",
        options: ["()", "[]", "<>", "{}"],
        answer: 2
    },
    {
        question: "Which class is the root of the Java class hierarchy?",
        options: ["Main", "Object", "Class", "Root"],
        answer: 1
    },
    {
        question: "Which package is automatically available in every Java source file?",
        options: ["java.util", "java.io", "java.lang", "java.system"],
        answer: 2
    }
];

console.log(
    "Java questions loaded:",
    window.javaQuestions.length
);

if (window.javaQuestions.length !== 100) {
    console.warn(
        "Warning: Java question bank should contain exactly 100 questions."
    );
}