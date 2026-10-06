window.cProgrammingQuestions = [

    // =========================
    // C BASICS
    // =========================

    {
        question: "Who developed the C programming language?",
        options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
        answer: "Dennis Ritchie"
    },
    {
        question: "Where was C developed?",
        options: ["Bell Labs", "Microsoft", "IBM", "Sun Microsystems"],
        answer: "Bell Labs"
    },
    {
        question: "Which extension is commonly used for a C source file?",
        options: [".c", ".cpp", ".java", ".py"],
        answer: ".c"
    },
    {
        question: "Which function is the entry point of a C program?",
        options: ["main()", "start()", "run()", "begin()"],
        answer: "main()"
    },
    {
        question: "Which symbol is used to end a C statement?",
        options: [";", ":", ".", ","],
        answer: ";"
    },
    {
        question: "Which header file is commonly used for printf()?",
        options: ["stdio.h", "stdlib.h", "string.h", "math.h"],
        answer: "stdio.h"
    },
    {
        question: "Which function is used to print output in C?",
        options: ["printf()", "print()", "display()", "cout()"],
        answer: "printf()"
    },
    {
        question: "Which function is commonly used to read formatted input?",
        options: ["scanf()", "input()", "read()", "get()"],
        answer: "scanf()"
    },
    {
        question: "Which symbol is used for a single-line comment in C?",
        options: ["//", "#", "<!--", "**"],
        answer: "//"
    },
    {
        question: "Which symbols are used for multi-line comments?",
        options: ["/* */", "// //", "< > ", "[ ]"],
        answer: "/* */"
    },

    // =========================
    // DATA TYPES
    // =========================

    {
        question: "Which data type is used to store an integer?",
        options: ["int", "float", "char", "double"],
        answer: "int"
    },
    {
        question: "Which data type is used to store a single character?",
        options: ["char", "string", "character", "text"],
        answer: "char"
    },
    {
        question: "Which data type is used for single-precision floating-point values?",
        options: ["float", "double", "int", "char"],
        answer: "float"
    },
    {
        question: "Which data type generally provides more precision than float?",
        options: ["double", "char", "short", "int"],
        answer: "double"
    },
    {
        question: "Which keyword represents no value or no return type?",
        options: ["void", "null", "empty", "none"],
        answer: "void"
    },
    {
        question: "Which operator is used to determine the size of a type or object?",
        options: ["sizeof", "size", "length", "sizeof()"],
        answer: "sizeof"
    },
    {
        question: "Which of the following is an integer type?",
        options: ["short", "float", "double", "char*"],
        answer: "short"
    },
    {
        question: "Which type can be used to store unsigned integer values?",
        options: ["unsigned int", "signed float", "unsigned float", "decimal"],
        answer: "unsigned int"
    },
    {
        question: "Which keyword is used to make a variable read-only through that identifier?",
        options: ["const", "fixed", "readonly", "static"],
        answer: "const"
    },
    {
        question: "Which type is specifically used for storing characters?",
        options: ["char", "int", "float", "void"],
        answer: "char"
    },

    // =========================
    // OPERATORS
    // =========================

    {
        question: "Which operator is used for addition?",
        options: ["+", "-", "*", "/"],
        answer: "+"
    },
    {
        question: "Which operator is used for subtraction?",
        options: ["-", "+", "%", "*"],
        answer: "-"
    },
    {
        question: "Which operator returns the remainder of integer division?",
        options: ["%", "/", "//", "mod"],
        answer: "%"
    },
    {
        question: "Which operator is used for multiplication?",
        options: ["*", "x", "%", "^"],
        answer: "*"
    },
    {
        question: "Which operator performs logical AND?",
        options: ["&&", "||", "&", "!"],
        answer: "&&"
    },
    {
        question: "Which operator performs logical OR?",
        options: ["||", "&&", "|", "!"],
        answer: "||"
    },
    {
        question: "Which operator represents logical NOT?",
        options: ["!", "~", "not", "!="],
        answer: "!"
    },
    {
        question: "Which operator is used for assignment?",
        options: ["=", "==", ":=", "=>"],
        answer: "="
    },
    {
        question: "Which operator checks equality?",
        options: ["==", "=", "===", "!="],
        answer: "=="
    },
    {
        question: "Which operator means not equal?",
        options: ["!=", "<>", "!==", "not="],
        answer: "!="
    },

    // =========================
    // CONTROL STATEMENTS
    // =========================

    {
        question: "Which statement is used for decision making?",
        options: ["if", "for", "while", "goto"],
        answer: "if"
    },
    {
        question: "Which statement provides an alternative when an if condition is false?",
        options: ["else", "otherwise", "default", "continue"],
        answer: "else"
    },
    {
        question: "Which statement is useful for selecting one case from many?",
        options: ["switch", "select", "choose", "case-if"],
        answer: "switch"
    },
    {
        question: "Which keyword exits a switch case?",
        options: ["break", "exit", "stop", "continue"],
        answer: "break"
    },
    {
        question: "Which loop is commonly used when the number of iterations is known?",
        options: ["for", "while", "do-while", "goto"],
        answer: "for"
    },
    {
        question: "Which loop checks its condition before executing its body?",
        options: ["while", "do-while", "repeat", "loop"],
        answer: "while"
    },
    {
        question: "Which loop executes its body at least once?",
        options: ["do-while", "while", "for", "if"],
        answer: "do-while"
    },
    {
        question: "Which keyword skips the remaining statements of the current iteration?",
        options: ["continue", "skip", "next", "pass"],
        answer: "continue"
    },
    {
        question: "Which keyword immediately terminates a loop?",
        options: ["break", "stop", "exitloop", "terminate"],
        answer: "break"
    },
    {
        question: "Which statement transfers control to a labeled statement?",
        options: ["goto", "jump", "transfer", "move"],
        answer: "goto"
    },

    // =========================
    // ARRAYS
    // =========================

    {
        question: "An array stores elements of what kind?",
        options: ["Same data type", "Only strings", "Only integers", "Different classes only"],
        answer: "Same data type"
    },
    {
        question: "What is the first index of a C array?",
        options: ["0", "1", "-1", "Depends on compiler"],
        answer: "0"
    },
    {
        question: "Which declaration creates an integer array of 5 elements?",
        options: ["int a[5];", "array int a(5);", "int a;", "int[5] a;"],
        answer: "int a[5];"
    },
    {
        question: "How many elements are present in int a[10]?",
        options: ["10", "9", "11", "Depends on values"],
        answer: "10"
    },
    {
        question: "What is the last valid index of int a[10]?",
        options: ["9", "10", "8", "11"],
        answer: "9"
    },
    {
        question: "Which notation accesses the third element of array a?",
        options: ["a[2]", "a[3]", "a(3)", "a{2}"],
        answer: "a[2]"
    },
    {
        question: "A two-dimensional array is commonly used to represent what?",
        options: ["Matrix", "Function", "Pointer", "Character"],
        answer: "Matrix"
    },
    {
        question: "Which declaration creates a 3x4 integer matrix?",
        options: ["int a[3][4];", "int a(3,4);", "matrix a[3,4];", "int[3,4] a;"],
        answer: "int a[3][4];"
    },
    {
        question: "What is the total number of elements in int a[2][3]?",
        options: ["6", "5", "8", "3"],
        answer: "6"
    },
    {
        question: "What happens when an array index is outside its valid range?",
        options: ["It can cause undefined behavior", "C automatically resizes it", "The program always stops safely", "The value becomes zero"],
        answer: "It can cause undefined behavior"
    },

    // =========================
    // STRINGS
    // =========================

    {
        question: "How are C strings terminated?",
        options: ["Null character '\\0'", "Newline '\\n'", "Space", "EOF"],
        answer: "Null character '\\0'"
    },
    {
        question: "Which header file contains common string functions?",
        options: ["string.h", "stdio.h", "stdlib.h", "ctype.h"],
        answer: "string.h"
    },
    {
        question: "Which function finds the length of a string?",
        options: ["strlen()", "length()", "strlength()", "size()"],
        answer: "strlen()"
    },
    {
        question: "Which function copies one string into another?",
        options: ["strcpy()", "strcopy()", "copystr()", "stringcopy()"],
        answer: "strcpy()"
    },
    {
        question: "Which function concatenates two strings?",
        options: ["strcat()", "concat()", "strjoin()", "joinstr()"],
        answer: "strcat()"
    },
    {
        question: "Which function compares two strings?",
        options: ["strcmp()", "compare()", "strcompare()", "equals()"],
        answer: "strcmp()"
    },
    {
        question: "Which character indicates the end of a C string?",
        options: ["\\0", "\\n", "\\t", "\\r"],
        answer: "\\0"
    },
    {
        question: "Which declaration creates a character array capable of storing 'Hello' including the terminator?",
        options: ["char s[6];", "char s[5];", "string s[6];", "char s[4];"],
        answer: "char s[6];"
    },
    {
        question: "Which function can read a line of text including spaces?",
        options: ["fgets()", "scanf(\"%s\")", "getword()", "readline()"],
        answer: "fgets()"
    },
    {
        question: "Which format specifier is commonly used for a string in printf()?",
        options: ["%s", "%c", "%str", "%string"],
        answer: "%s"
    },

    // =========================
    // FUNCTIONS
    // =========================

    {
        question: "What is a function in C?",
        options: ["A reusable block of code", "A variable", "A data type", "A header file"],
        answer: "A reusable block of code"
    },
    {
        question: "Which keyword is used to return a value from a function?",
        options: ["return", "send", "output", "back"],
        answer: "return"
    },
    {
        question: "What is a function prototype?",
        options: ["A declaration describing a function", "A function call", "A variable", "A loop"],
        answer: "A declaration describing a function"
    },
    {
        question: "Can a C function return a value?",
        options: ["Yes", "No", "Only integers", "Only characters"],
        answer: "Yes"
    },
    {
        question: "Which return type indicates that a function returns no value?",
        options: ["void", "null", "empty", "none"],
        answer: "void"
    },
    {
        question: "What are values passed to a function called?",
        options: ["Arguments", "Headers", "Operators", "Keywords"],
        answer: "Arguments"
    },
    {
        question: "What are variables listed in a function definition called?",
        options: ["Parameters", "Arguments", "Constants", "Macros"],
        answer: "Parameters"
    },
    {
        question: "Which function is automatically called when a hosted C program starts?",
        options: ["main()", "start()", "init()", "run()"],
        answer: "main()"
    },
    {
        question: "What is recursion?",
        options: ["A function calling itself", "A loop inside an array", "A pointer operation", "A type conversion"],
        answer: "A function calling itself"
    },
    {
        question: "Which storage class can preserve a local variable's value between function calls?",
        options: ["static", "auto", "register", "extern"],
        answer: "static"
    },

    // =========================
    // POINTERS
    // =========================

    {
        question: "What does a pointer store?",
        options: ["An address", "Only an integer", "A keyword", "A function name only"],
        answer: "An address"
    },
    {
        question: "Which operator obtains the address of an object?",
        options: ["&", "*", "#", "@"],
        answer: "&"
    },
    {
        question: "Which operator dereferences a pointer?",
        options: ["*", "&", "%", "#"],
        answer: "*"
    },
    {
        question: "Which declaration creates a pointer to an integer?",
        options: ["int *p;", "pointer int p;", "int p*;", "*int p;"],
        answer: "int *p;"
    },
    {
        question: "What is a NULL pointer?",
        options: ["A pointer that represents no valid object/function address", "A pointer to zero-sized data", "An integer", "A string"],
        answer: "A pointer that represents no valid object/function address"
    },
    {
        question: "What does *p mean when p is an integer pointer?",
        options: ["The value pointed to by p", "The address of p", "The size of p", "The type of p"],
        answer: "The value pointed to by p"
    },
    {
        question: "What does &x represent?",
        options: ["Address of x", "Value of x", "Size of x", "Type of x"],
        answer: "Address of x"
    },
    {
        question: "What is a pointer to pointer?",
        options: ["A pointer that stores the address of another pointer", "A normal integer", "An array", "A structure"],
        answer: "A pointer that stores the address of another pointer"
    },
    {
        question: "Which operator is used with a structure pointer to access a member?",
        options: ["->", ".", "::", ":"],
        answer: "->"
    },
    {
        question: "Can a pointer point to an array element?",
        options: ["Yes", "No", "Only for char arrays", "Only for static arrays"],
        answer: "Yes"
    },

    // =========================
    // STRUCTURES & UNIONS
    // =========================

    {
        question: "Which keyword defines a structure?",
        options: ["struct", "structure", "record", "class"],
        answer: "struct"
    },
    {
        question: "A structure can contain what?",
        options: ["Members of different data types", "Only integers", "Only characters", "Only pointers"],
        answer: "Members of different data types"
    },
    {
        question: "Which operator accesses a structure member using a structure variable?",
        options: [".", "->", "::", "#"],
        answer: "."
    },
    {
        question: "Which operator accesses a structure member through a pointer?",
        options: ["->", ".", "::", "&"],
        answer: "->"
    },
    {
        question: "Which keyword defines a union?",
        options: ["union", "struct", "record", "variant"],
        answer: "union"
    },
    {
        question: "In a union, members generally share what?",
        options: ["The same memory storage", "Different files", "Different functions", "The same name"],
        answer: "The same memory storage"
    },
    {
        question: "Which keyword can create an alias for a type?",
        options: ["typedef", "alias", "define", "type"],
        answer: "typedef"
    },
    {
        question: "Can a structure contain another structure as a member?",
        options: ["Yes", "No", "Only in C++", "Only if it has pointers"],
        answer: "Yes"
    },
    {
        question: "Which data structure is suitable for grouping related fields of different types?",
        options: ["struct", "array only", "enum only", "macro"],
        answer: "struct"
    },
    {
        question: "What is an enum used for?",
        options: ["Defining named integer constants", "Dynamic memory", "String manipulation", "File access"],
        answer: "Defining named integer constants"
    },

    // =========================
    // MEMORY MANAGEMENT
    // =========================

    {
        question: "Which header file provides malloc()?",
        options: ["stdlib.h", "stdio.h", "string.h", "memory.h"],
        answer: "stdlib.h"
    },
    {
        question: "Which function dynamically allocates memory?",
        options: ["malloc()", "alloc()", "new()", "create()"],
        answer: "malloc()"
    },
    {
        question: "Which function allocates memory and initializes it to zero?",
        options: ["calloc()", "malloc()", "alloczero()", "zeroalloc()"],
        answer: "calloc()"
    },
    {
        question: "Which function changes the size of previously allocated memory?",
        options: ["realloc()", "resize()", "remalloc()", "changesize()"],
        answer: "realloc()"
    },
    {
        question: "Which function releases dynamically allocated memory?",
        options: ["free()", "delete()", "release()", "remove()"],
        answer: "free()"
    },
    {
        question: "What can happen if dynamically allocated memory is not released when no longer needed?",
        options: ["Memory leak", "Syntax error", "Compilation always fails", "Automatic reset"],
        answer: "Memory leak"
    },
    {
        question: "What does malloc() return on allocation failure?",
        options: ["NULL", "0 bytes of memory with a valid pointer", "-1", "EOF"],
        answer: "NULL"
    },
    {
        question: "Dynamic memory is allocated from which memory region in typical implementations?",
        options: ["Heap", "Stack only", "Register", "Code segment"],
        answer: "Heap"
    },
    {
        question: "Local automatic variables are commonly stored in which memory region?",
        options: ["Stack", "Heap", "ROM", "Code"],
        answer: "Stack"
    },
    {
        question: "What is a dangling pointer?",
        options: ["A pointer referring to an object whose lifetime has ended", "A pointer containing zero", "A pointer to an array", "A pointer to a function"],
        answer: "A pointer referring to an object whose lifetime has ended"
    },

    // =========================
    // PREPROCESSOR
    // =========================

    {
        question: "Which symbol starts a preprocessor directive?",
        options: ["#", "$", "@", "%"],
        answer: "#"
    },
    {
        question: "Which directive includes a header file?",
        options: ["#include", "#import", "#header", "#using"],
        answer: "#include"
    },
    {
        question: "Which directive defines a macro?",
        options: ["#define", "#macro", "#const", "#set"],
        answer: "#define"
    },
    {
        question: "Which directive conditionally compiles code?",
        options: ["#if", "#condition", "#check", "#when"],
        answer: "#if"
    },
    {
        question: "Which directive ends an #if section?",
        options: ["#endif", "#end", "#fi", "#stop"],
        answer: "#endif"
    },
    {
        question: "Which directive can prevent repeated inclusion of a header?",
        options: ["#ifndef", "#repeat", "#unique", "#include_once"],
        answer: "#ifndef"
    },
    {
        question: "Are preprocessor directives normally terminated with a semicolon?",
        options: ["No", "Yes", "Only #include", "Only #define"],
        answer: "No"
    },
    {
        question: "What is a macro?",
        options: ["A preprocessor substitution mechanism", "A data structure", "A loop", "A pointer"],
        answer: "A preprocessor substitution mechanism"
    },
    {
        question: "Which directive can undefine a macro?",
        options: ["#undef", "#remove", "#delete", "#unset"],
        answer: "#undef"
    },
    {
        question: "Which header provides functions such as malloc() and free()?",
        options: ["stdlib.h", "stdio.h", "string.h", "ctype.h"],
        answer: "stdlib.h"
    },

    // =========================
    // FILE HANDLING
    // =========================

    {
        question: "Which type is used to represent a C file stream?",
        options: ["FILE", "file", "FILEPTR", "Stream"],
        answer: "FILE"
    },
    {
        question: "Which header is needed for standard file I/O functions?",
        options: ["stdio.h", "stdlib.h", "string.h", "file.h"],
        answer: "stdio.h"
    },
    {
        question: "Which function opens a file?",
        options: ["fopen()", "openfile()", "fileopen()", "open()"],
        answer: "fopen()"
    },
    {
        question: "Which function closes a file?",
        options: ["fclose()", "closefile()", "close()", "endfile()"],
        answer: "fclose()"
    },
    {
        question: "Which mode opens a file for reading?",
        options: ["r", "w", "a", "rw"],
        answer: "r"
    },
    {
        question: "Which mode opens a file for writing and can truncate an existing file?",
        options: ["w", "r", "a", "read"],
        answer: "w"
    },
    {
        question: "Which mode opens a file for appending?",
        options: ["a", "w", "r", "appendonly"],
        answer: "a"
    },
    {
        question: "Which function writes formatted output to a file?",
        options: ["fprintf()", "fileprintf()", "fwriteprintf()", "printf_file()"],
        answer: "fprintf()"
    },
    {
        question: "Which function reads formatted input from a file?",
        options: ["fscanf()", "fileread()", "freadscanf()", "scanf_file()"],
        answer: "fscanf()"
    },
    {
        question: "Which function writes a character to a file stream?",
        options: ["fputc()", "putfile()", "writec()", "filechar()"],
        answer: "fputc()"
    },

    // =========================
    // TYPE CONVERSION & MISC
    // =========================

    {
        question: "What is implicit type conversion?",
        options: ["Automatic conversion performed by the language", "Conversion written explicitly by the programmer", "Conversion of files", "Conversion of functions"],
        answer: "Automatic conversion performed by the language"
    },
    {
        question: "What is explicit type conversion commonly called?",
        options: ["Type casting", "Type linking", "Type binding", "Type compiling"],
        answer: "Type casting"
    },
    {
        question: "Which syntax is a valid cast to int?",
        options: ["(int)x", "int(x)", "cast<int>x", "x.int"],
        answer: "(int)x"
    },
    {
        question: "What does the expression 10 / 3 produce when both operands are integers?",
        options: ["3", "3.33", "4", "0"],
        answer: "3"
    },
    {
        question: "What does 10 % 3 produce?",
        options: ["1", "3", "0", "10"],
        answer: "1"
    },
    {
        question: "Which operator has higher precedence than +?",
        options: ["*", "=", "&&", "||"],
        answer: "*"
    },
    {
        question: "Which operator is used for the conditional expression?",
        options: ["?:", "??", "if:", "::"],
        answer: "?:"
    },
    {
        question: "Which keyword prevents a local variable from being automatically initialized on each function entry while preserving its stored value?",
        options: ["static", "auto", "register", "extern"],
        answer: "static"
    },
    {
        question: "Which keyword declares that a variable may be defined elsewhere?",
        options: ["extern", "global", "outside", "public"],
        answer: "extern"
    },
    {
        question: "Which keyword suggests that a variable should be stored in a CPU register?",
        options: ["register", "fast", "cpu", "cache"],
        answer: "register"
    },

    // =========================
    // MORE C PRACTICE
    // =========================

    {
        question: "What is the result of ++x when x is an integer?",
        options: ["x is incremented before its value is used", "x is decremented", "x becomes zero", "x is unchanged"],
        answer: "x is incremented before its value is used"
    },
    {
        question: "What is the result of x++?",
        options: ["The current value is used before incrementing x", "x is decremented first", "x becomes one", "x is unchanged permanently"],
        answer: "The current value is used before incrementing x"
    },
    {
        question: "What is the purpose of break in a loop?",
        options: ["Terminate the loop", "Restart the loop", "Skip compilation", "Return a value"],
        answer: "Terminate the loop"
    },
    {
        question: "What is the purpose of continue?",
        options: ["Skip to the next loop iteration", "Terminate the program", "Exit a function", "Restart the program"],
        answer: "Skip to the next loop iteration"
    },
    {
        question: "Which operator accesses a structure member directly?",
        options: [".", "->", "*", "&"],
        answer: "."
    },
    {
        question: "Which function converts a string to an integer in the standard C library?",
        options: ["atoi()", "strtoint()", "convertint()", "stoi()"],
        answer: "atoi()"
    },
    {
        question: "Which header provides character classification functions such as isdigit()?",
        options: ["ctype.h", "character.h", "string.h", "stdio.h"],
        answer: "ctype.h"
    },
    {
        question: "Which function can generate a pseudo-random integer?",
        options: ["rand()", "randomize()", "random()", "generate()"],
        answer: "rand()"
    },
    {
        question: "Which header is commonly required for rand() and srand()?",
        options: ["stdlib.h", "stdio.h", "time.h", "math.h"],
        answer: "stdlib.h"
    },
    {
        question: "Which function can initialize the pseudo-random number generator?",
        options: ["srand()", "initrand()", "seed()", "randomize()"],
        answer: "srand()"
    },

    {
        question: "Which header provides time()?",
        options: ["time.h", "datetime.h", "clock.h", "stdlib.h"],
        answer: "time.h"
    },
    {
        question: "Which function calculates the absolute value of an integer?",
        options: ["abs()", "absolute()", "intval()", "fabsint()"],
        answer: "abs()"
    },
    {
        question: "Which header commonly provides abs()?",
        options: ["stdlib.h", "math.h", "stdio.h", "string.h"],
        answer: "stdlib.h"
    },
    {
        question: "Which function is commonly used to terminate a program normally?",
        options: ["exit()", "stop()", "terminate()", "end()"],
        answer: "exit()"
    },
    {
        question: "Which header provides exit()?",
        options: ["stdlib.h", "stdio.h", "process.h", "string.h"],
        answer: "stdlib.h"
    },
    {
        question: "What is a segmentation fault commonly associated with?",
        options: ["Invalid memory access", "Correct arithmetic", "Successful file opening", "Valid string comparison"],
        answer: "Invalid memory access"
    },
    {
        question: "What does NULL commonly represent for an object pointer?",
        options: ["A null pointer value", "A valid integer object", "The first array element", "A string terminator"],
        answer: "A null pointer value"
    },
    {
        question: "What is the main purpose of a header file?",
        options: ["Provide declarations and related definitions for reuse", "Store executable machine code only", "Store database records", "Run the program"],
        answer: "Provide declarations and related definitions for reuse"
    },
    {
        question: "Which file extension is commonly used for a C header file?",
        options: [".h", ".header", ".ch", ".inc"],
        answer: ".h"
    },
    {
        question: "Which operator is used to get the remainder after integer division?",
        options: ["%", "/", "//", "rem"],
        answer: "%"
    },

    {
        question: "Which keyword is used to declare a constant enumeration value?",
        options: ["enum", "constenum", "constant", "enumerate"],
        answer: "enum"
    },
    {
        question: "Which of the following is a valid C identifier?",
        options: ["total_marks", "2marks", "total-marks", "float"],
        answer: "total_marks"
    },
    {
        question: "Which of the following cannot be used as an identifier?",
        options: ["int", "value", "student1", "_count"],
        answer: "int"
    },
    {
        question: "Are C identifiers case-sensitive?",
        options: ["Yes", "No", "Only functions", "Only variables"],
        answer: "Yes"
    },
    {
        question: "Which character can begin a C identifier?",
        options: ["Letter or underscore", "Digit only", "Special symbol only", "Space"],
        answer: "Letter or underscore"
    },
    {
        question: "Which escape sequence represents a newline?",
        options: ["\\n", "\\t", "\\r", "\\b"],
        answer: "\\n"
    },
    {
        question: "Which escape sequence represents a tab?",
        options: ["\\t", "\\n", "\\b", "\\a"],
        answer: "\\t"
    },
    {
        question: "Which escape sequence represents a backspace?",
        options: ["\\b", "\\n", "\\t", "\\f"],
        answer: "\\b"
    },
    {
        question: "Which format specifier is commonly used for an int with printf()?",
        options: ["%d", "%f", "%c", "%s"],
        answer: "%d"
    },
    {
        question: "Which format specifier is commonly used for a float with printf()?",
        options: ["%f", "%d", "%c", "%s"],
        answer: "%f"
    },

    {
        question: "Which format specifier is commonly used for a character?",
        options: ["%c", "%ch", "%char", "%s"],
        answer: "%c"
    },
    {
        question: "Which format specifier is commonly used for a double with printf()?",
        options: ["%f", "%d", "%c", "%s"],
        answer: "%f"
    },
    {
        question: "Which function is commonly used to write a character to standard output?",
        options: ["putchar()", "writechar()", "printchar()", "charout()"],
        answer: "putchar()"
    },
    {
        question: "Which function reads one character from standard input?",
        options: ["getchar()", "readchar()", "inputchar()", "charin()"],
        answer: "getchar()"
    },
    {
        question: "What does EOF commonly represent?",
        options: ["End of file/input indicator", "End of function", "Empty object format", "Error-only flag"],
        answer: "End of file/input indicator"
    },
    {
        question: "Which operator is used for bitwise AND?",
        options: ["&", "&&", "|", "^"],
        answer: "&"
    },
    {
        question: "Which operator is used for bitwise OR?",
        options: ["|", "||", "&", "^"],
        answer: "|"
    },
    {
        question: "Which operator is used for bitwise XOR?",
        options: ["^", "&", "|", "^^"],
        answer: "^"
    },
    {
        question: "Which operator performs a left bit shift?",
        options: ["<<", ">>", "<", "<<<"],
        answer: "<<"
    },
    {
        question: "Which operator performs a right bit shift?",
        options: [">>", "<<", ">", ">>>"],
        answer: ">>"
    },

    {
        question: "What is the value of sizeof(char) guaranteed to be?",
        options: ["1", "2", "4", "8"],
        answer: "1"
    },
    {
        question: "What is an array name commonly converted to in most expressions?",
        options: ["Pointer to its first element", "Pointer to its last element", "Integer size", "Structure"],
        answer: "Pointer to its first element"
    },
    {
        question: "Can a function receive an array as an argument?",
        options: ["Yes", "No", "Only static arrays", "Only character arrays"],
        answer: "Yes"
    },
    {
        question: "What does a pointer increment generally do for a pointer to an array element?",
        options: ["Moves it to the next element of its pointed-to type", "Adds exactly 1 byte always", "Sets it to NULL", "Moves it to the previous element"],
        answer: "Moves it to the next element of its pointed-to type"
    },
    {
        question: "Which function compares strings lexicographically?",
        options: ["strcmp()", "strcompare()", "comparestr()", "equals()"],
        answer: "strcmp()"
    },
    {
        question: "Which function converts a string to a long integer?",
        options: ["strtol()", "strlong()", "longstr()", "atolongint()"],
        answer: "strtol()"
    },
    {
        question: "Which standard function searches for a character in a string?",
        options: ["strchr()", "findchar()", "searchchar()", "charfind()"],
        answer: "strchr()"
    },
    {
        question: "Which standard function searches for one string inside another?",
        options: ["strstr()", "findstr()", "searchstr()", "contains()"],
        answer: "strstr()"
    },
    {
        question: "Which function can copy a specified number of characters?",
        options: ["strncpy()", "strcopy_n()", "copychars()", "strcopycount()"],
        answer: "strncpy()"
    },
    {
        question: "Which function can concatenate up to a specified number of characters?",
        options: ["strncat()", "concatn()", "strjoin_n()", "catcount()"],
        answer: "strncat()"
    },

    // =========================
    // FINAL MIXED QUESTIONS
    // =========================

    {
        question: "Which of the following is not a C keyword?",
        options: ["main", "int", "return", "while"],
        answer: "main"
    },
    {
        question: "Which keyword is used to define a variable with external linkage?",
        options: ["extern", "external", "global", "public"],
        answer: "extern"
    },
    {
        question: "Which keyword can restrict modification through a particular identifier?",
        options: ["const", "restrict", "readonly", "immutable"],
        answer: "const"
    },
    {
        question: "Which C feature allows conditional compilation?",
        options: ["Preprocessor directives", "Arrays", "Pointers", "Structures"],
        answer: "Preprocessor directives"
    },
    {
        question: "What does a compiler generally do?",
        options: ["Translates source code into executable/object code", "Only runs web pages", "Stores database records", "Creates HTML"],
        answer: "Translates source code into executable/object code"
    },
    {
        question: "What is a syntax error?",
        options: ["A violation of language syntax", "A hardware failure", "A network problem", "A database query"],
        answer: "A violation of language syntax"
    },
    {
        question: "What is a logical error?",
        options: ["A program runs but produces incorrect results", "A missing compiler", "A missing keyboard", "A file extension"],
        answer: "A program runs but produces incorrect results"
    },
    {
        question: "What is undefined behavior?",
        options: ["Behavior for which the C standard imposes no requirements", "Always a syntax error", "Always a compiler warning", "A fixed output"],
        answer: "Behavior for which the C standard imposes no requirements"
    },
    {
        question: "Which statement can immediately return from a function?",
        options: ["return", "break", "continue", "goto"],
        answer: "return"
    },
    {
        question: "Which statement can select between multiple constant-expression cases?",
        options: ["switch", "ifonly", "for", "while"],
        answer: "switch"
    }
];

console.log(
    "C Programming questions loaded:",
    window.cProgrammingQuestions.length
);

if (window.cProgrammingQuestions.length !== 100) {
    console.warn(
        "Warning: C Programming question bank should contain exactly 100 questions."
    );
}