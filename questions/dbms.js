window.dbmsQuestions = [

    // 1-10: DBMS Fundamentals
    {
        question: "What does DBMS stand for?",
        options: [
            "Database Management System",
            "Data Backup Management System",
            "Database Machine System",
            "Data Management Software"
        ],
        answer: 0
    },
    {
        question: "What is a database?",
        options: [
            "An organized collection of related data",
            "A programming language",
            "An operating system",
            "A computer network"
        ],
        answer: 0
    },
    {
        question: "What is the main purpose of a DBMS?",
        options: [
            "Store, organize, and retrieve data",
            "Only create websites",
            "Only compile programs",
            "Only manage hardware"
        ],
        answer: 0
    },
    {
        question: "Which of the following is a DBMS?",
        options: ["MySQL", "HTML", "Python", "Linux"],
        answer: 0
    },
    {
        question: "Which of the following is an RDBMS?",
        options: ["MySQL", "Windows", "Python", "Git"],
        answer: 0
    },
    {
        question: "In a relational database, data is primarily organized into what?",
        options: ["Tables", "Trees", "Graphs", "Files only"],
        answer: 0
    },
    {
        question: "A row in a relational table is called a:",
        options: ["Attribute", "Tuple", "Domain", "Schema"],
        answer: 1
    },
    {
        question: "A column in a relational table is called a:",
        options: ["Tuple", "Record", "Attribute", "Relation"],
        answer: 2
    },
    {
        question: "A collection of related tables is commonly called a:",
        options: ["Database", "Tuple", "Attribute", "Query"],
        answer: 0
    },
    {
        question: "Which language is commonly used to interact with relational databases?",
        options: ["SQL", "HTML", "CSS", "XML"],
        answer: 0
    },

    // 11-20: Keys and Constraints
    {
        question: "What is a primary key?",
        options: [
            "A key that uniquely identifies each row",
            "A key used only for sorting",
            "A key used only for encryption",
            "A duplicate column"
        ],
        answer: 0
    },
    {
        question: "Can a primary key contain NULL values?",
        options: ["Yes", "No", "Sometimes", "Only in MySQL"],
        answer: 1
    },
    {
        question: "Can a table have more than one primary key?",
        options: [
            "Yes",
            "No",
            "Only in Oracle",
            "Only if there are no rows"
        ],
        answer: 1
    },
    {
        question: "What is a foreign key?",
        options: [
            "A field referencing a key in another table",
            "A duplicate primary key",
            "A temporary key",
            "An encrypted key"
        ],
        answer: 0
    },
    {
        question: "What does a UNIQUE constraint ensure?",
        options: [
            "Values are not duplicated",
            "Values are always NULL",
            "Values are always numbers",
            "Rows are automatically deleted"
        ],
        answer: 0
    },
    {
        question: "What does NOT NULL ensure?",
        options: [
            "A column must contain a value",
            "A column must contain numbers",
            "A column must be unique",
            "A column must be a primary key"
        ],
        answer: 0
    },
    {
        question: "What does a CHECK constraint do?",
        options: [
            "Enforces a specified condition on values",
            "Creates a backup",
            "Creates an index only",
            "Deletes invalid tables"
        ],
        answer: 0
    },
    {
        question: "What is a candidate key?",
        options: [
            "A minimal key that can uniquely identify a tuple",
            "A foreign key only",
            "A duplicate key",
            "A temporary key"
        ],
        answer: 0
    },
    {
        question: "What is a super key?",
        options: [
            "A set of attributes that uniquely identifies a tuple",
            "Only the primary key",
            "Only a foreign key",
            "A key with NULL values"
        ],
        answer: 0
    },
    {
        question: "A composite key consists of:",
        options: [
            "Multiple attributes",
            "Only one attribute",
            "Only foreign keys",
            "Only numeric values"
        ],
        answer: 0
    },

    // 21-30: ER Model
    {
        question: "What does ER stand for?",
        options: [
            "Entity Relationship",
            "External Relation",
            "Entity Record",
            "Extended Resource"
        ],
        answer: 0
    },
    {
        question: "What is an entity?",
        options: [
            "A distinguishable real-world object",
            "A SQL command",
            "A database password",
            "A table constraint"
        ],
        answer: 0
    },
    {
        question: "What is an attribute?",
        options: [
            "A property describing an entity",
            "A database server",
            "A query",
            "A relationship only"
        ],
        answer: 0
    },
    {
        question: "What is a relationship?",
        options: [
            "An association between entities",
            "A database password",
            "A data type",
            "A query result"
        ],
        answer: 0
    },
    {
        question: "Which shape traditionally represents an entity in an ER diagram?",
        options: ["Rectangle", "Oval", "Diamond", "Triangle"],
        answer: 0
    },
    {
        question: "Which shape traditionally represents an attribute?",
        options: ["Rectangle", "Oval", "Diamond", "Circle"],
        answer: 1
    },
    {
        question: "Which shape traditionally represents a relationship?",
        options: ["Rectangle", "Oval", "Diamond", "Square"],
        answer: 2
    },
    {
        question: "What does cardinality describe?",
        options: [
            "Number of entity instances participating in a relationship",
            "Number of database users",
            "Size of a table",
            "Number of SQL commands"
        ],
        answer: 0
    },
    {
        question: "Which is a common relationship cardinality?",
        options: [
            "One-to-many",
            "One-to-one-only",
            "Zero-to-zero",
            "None-to-many"
        ],
        answer: 0
    },
    {
        question: "A student can enroll in many courses and a course can have many students. What relationship is this?",
        options: [
            "One-to-one",
            "One-to-many",
            "Many-to-many",
            "Many-to-one"
        ],
        answer: 2
    },

    // 31-40: SQL Basics
    {
        question: "Which SQL command retrieves data?",
        options: ["SELECT", "GET", "FETCHDATA", "READ"],
        answer: 0
    },
    {
        question: "Which SQL command adds new rows?",
        options: ["ADD", "INSERT", "CREATE", "APPEND"],
        answer: 1
    },
    {
        question: "Which SQL command modifies existing rows?",
        options: ["CHANGE", "MODIFY", "UPDATE", "ALTERROW"],
        answer: 2
    },
    {
        question: "Which SQL command removes rows?",
        options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
        answer: 1
    },
    {
        question: "Which SQL command creates a table?",
        options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD TABLE"],
        answer: 1
    },
    {
        question: "Which command changes the structure of an existing table?",
        options: ["CHANGE", "ALTER", "UPDATE", "MODIFY TABLE"],
        answer: 1
    },
    {
        question: "Which command removes a table completely?",
        options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
        answer: 2
    },
    {
        question: "Which SQL clause filters rows?",
        options: ["WHERE", "FILTER", "HAVING", "CHECK"],
        answer: 0
    },
    {
        question: "Which clause sorts query results?",
        options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
        answer: 1
    },
    {
        question: "Which keyword removes duplicate rows from a SELECT result?",
        options: ["UNIQUE", "DISTINCT", "DIFFERENT", "ONLY"],
        answer: 1
    },

    // 41-50: SQL Functions and Grouping
    {
        question: "Which function calculates the number of rows?",
        options: ["COUNT()", "NUMBER()", "ROWS()", "TOTALROWS()"],
        answer: 0
    },
    {
        question: "Which function calculates the average?",
        options: ["AVG()", "AVERAGE()", "MEAN()", "MID()"],
        answer: 0
    },
    {
        question: "Which function calculates the total?",
        options: ["SUM()", "TOTAL()", "ADD()", "COUNT()"],
        answer: 0
    },
    {
        question: "Which function returns the largest value?",
        options: ["HIGH()", "MAX()", "LARGE()", "TOP()"],
        answer: 1
    },
    {
        question: "Which function returns the smallest value?",
        options: ["LOW()", "MIN()", "SMALL()", "BOTTOM()"],
        answer: 1
    },
    {
        question: "Which clause groups rows with the same values?",
        options: ["GROUP BY", "ORDER BY", "WHERE", "COMBINE BY"],
        answer: 0
    },
    {
        question: "Which clause filters groups?",
        options: ["WHERE", "HAVING", "GROUP FILTER", "FILTER GROUP"],
        answer: 1
    },
    {
        question: "Which clause is generally evaluated before GROUP BY to filter individual rows?",
        options: ["WHERE", "HAVING", "ORDER BY", "LIMIT"],
        answer: 0
    },
    {
        question: "Which SQL keyword is used to give a temporary name to a column or table?",
        options: ["AS", "NAME", "RENAME", "ALIAS"],
        answer: 0
    },
    {
        question: "Which wildcard represents any sequence of characters in a LIKE pattern?",
        options: ["_", "%", "*", "#"],
        answer: 1
    },

    // 51-60: Joins
    {
        question: "What is a JOIN used for?",
        options: [
            "Combining rows from related tables",
            "Deleting tables",
            "Creating databases",
            "Encrypting columns"
        ],
        answer: 0
    },
    {
        question: "Which JOIN returns matching rows from both tables?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
        answer: 0
    },
    {
        question: "Which JOIN returns all rows from the left table and matching rows from the right?",
        options: [
            "LEFT JOIN",
            "INNER JOIN",
            "RIGHT JOIN",
            "CROSS JOIN"
        ],
        answer: 0
    },
    {
        question: "Which JOIN returns all rows from the right table and matching rows from the left?",
        options: [
            "RIGHT JOIN",
            "LEFT JOIN",
            "INNER JOIN",
            "SELF JOIN"
        ],
        answer: 0
    },
    {
        question: "Which JOIN can return all rows from both tables?",
        options: [
            "FULL OUTER JOIN",
            "INNER JOIN",
            "LEFT JOIN",
            "CROSS JOIN"
        ],
        answer: 0
    },
    {
        question: "Which JOIN produces the Cartesian product?",
        options: [
            "CROSS JOIN",
            "INNER JOIN",
            "LEFT JOIN",
            "SELF JOIN"
        ],
        answer: 0
    },
    {
        question: "What is a self join?",
        options: [
            "A table joined with itself",
            "A table joined with no table",
            "A database joined with itself",
            "A query without a WHERE clause"
        ],
        answer: 0
    },
    {
        question: "Which JOIN requires a matching condition in its common use?",
        options: [
            "INNER JOIN",
            "CROSS JOIN",
            "FULL JOIN only",
            "SELF JOIN only"
        ],
        answer: 0
    },
    {
        question: "Which keyword commonly specifies the condition for a JOIN?",
        options: ["ON", "WITH", "USINGONLY", "MATCH"],
        answer: 0
    },
    {
        question: "A foreign key is commonly used to establish a relationship between:",
        options: [
            "Two tables",
            "Two databases only",
            "Two columns in one row only",
            "Two SQL commands"
        ],
        answer: 0
    },

    // 61-70: Normalization
    {
        question: "What is normalization?",
        options: [
            "Organizing data to reduce redundancy and improve integrity",
            "Increasing duplicate data",
            "Encrypting a database",
            "Deleting all NULL values"
        ],
        answer: 0
    },
    {
        question: "What is the main purpose of normalization?",
        options: [
            "Reduce redundancy and update anomalies",
            "Increase duplication",
            "Make tables larger",
            "Remove primary keys"
        ],
        answer: 0
    },
    {
        question: "What is 1NF?",
        options: [
            "First Normal Form",
            "First Numeric Form",
            "First Network Form",
            "First Normal File"
        ],
        answer: 0
    },
    {
        question: "A relation in 1NF should have:",
        options: [
            "Atomic values",
            "Only numeric values",
            "No primary key",
            "No foreign keys"
        ],
        answer: 0
    },
    {
        question: "What does 2NF primarily remove?",
        options: [
            "Partial dependency",
            "All foreign keys",
            "All NULL values",
            "All indexes"
        ],
        answer: 0
    },
    {
        question: "What does 3NF primarily address?",
        options: [
            "Transitive dependency",
            "Duplicate rows only",
            "Primary keys only",
            "Indexes"
        ],
        answer: 0
    },
    {
        question: "BCNF stands for:",
        options: [
            "Boyce-Codd Normal Form",
            "Basic Column Normal Form",
            "Binary Coded Normal Form",
            "Boyce Column Network Form"
        ],
        answer: 0
    },
    {
        question: "Which normal form is generally stricter than 3NF?",
        options: ["1NF", "2NF", "BCNF", "0NF"],
        answer: 2
    },
    {
        question: "What is data redundancy?",
        options: [
            "Unnecessary duplication of data",
            "Data encryption",
            "Data sorting",
            "Data indexing"
        ],
        answer: 0
    },
    {
        question: "Which problem can occur because of redundant data?",
        options: [
            "Update anomaly",
            "Compilation error",
            "Syntax error",
            "CPU scheduling"
        ],
        answer: 0
    },

    // 71-80: Transactions and ACID
    {
        question: "What is a transaction?",
        options: [
            "A logical unit of database work",
            "A database table",
            "A column",
            "An index"
        ],
        answer: 0
    },
    {
        question: "What does ACID stand for?",
        options: [
            "Atomicity, Consistency, Isolation, Durability",
            "Access, Control, Integrity, Data",
            "Atomicity, Control, Index, Durability",
            "Access, Consistency, Isolation, Data"
        ],
        answer: 0
    },
    {
        question: "What does Atomicity mean?",
        options: [
            "All operations of a transaction happen or none do",
            "Transactions run faster",
            "Data is always duplicated",
            "Only one user can access a database"
        ],
        answer: 0
    },
    {
        question: "What does Consistency mean?",
        options: [
            "A transaction preserves database rules and integrity",
            "A transaction never ends",
            "All data is duplicated",
            "All users have the same password"
        ],
        answer: 0
    },
    {
        question: "What does Isolation mean?",
        options: [
            "Concurrent transactions are controlled so their intermediate effects do not improperly interfere",
            "Only one database exists",
            "A table has one column",
            "Data is encrypted"
        ],
        answer: 0
    },
    {
        question: "What does Durability mean?",
        options: [
            "Committed changes persist",
            "Uncommitted changes persist",
            "Queries cannot fail",
            "Tables cannot be deleted"
        ],
        answer: 0
    },
    {
        question: "Which command makes a transaction's changes permanent?",
        options: ["COMMIT", "SAVE", "APPLY", "PERMANENT"],
        answer: 0
    },
    {
        question: "Which command undoes uncommitted changes?",
        options: ["UNDO", "ROLLBACK", "REVERSE", "CANCEL"],
        answer: 1
    },
    {
        question: "Which command creates a point to which a transaction can roll back?",
        options: ["SAVEPOINT", "CHECKPOINT", "MARKPOINT", "ROLLPOINT"],
        answer: 0
    },
    {
        question: "Why are transactions important in a multi-user database?",
        options: [
            "They help maintain consistency and control concurrent changes",
            "They eliminate all tables",
            "They remove the need for SQL",
            "They increase data duplication"
        ],
        answer: 0
    },

    // 81-90: Concurrency and Recovery
    {
        question: "What is concurrency control?",
        options: [
            "Managing simultaneous database operations safely",
            "Creating tables",
            "Deleting indexes",
            "Backing up only files"
        ],
        answer: 0
    },
    {
        question: "What is a lock?",
        options: [
            "A mechanism for controlling concurrent access to data",
            "A type of SQL table",
            "A database password",
            "A query optimizer"
        ],
        answer: 0
    },
    {
        question: "Which lock generally allows multiple transactions to read data?",
        options: [
            "Shared lock",
            "Exclusive lock",
            "Write lock only",
            "Delete lock"
        ],
        answer: 0
    },
    {
        question: "Which lock generally prevents other transactions from modifying locked data?",
        options: [
            "Exclusive lock",
            "Shared lock",
            "Read lock",
            "Open lock"
        ],
        answer: 0
    },
    {
        question: "What is a dirty read?",
        options: [
            "Reading uncommitted data from another transaction",
            "Reading duplicate data",
            "Reading deleted data only",
            "Reading indexed data"
        ],
        answer: 0
    },
    {
        question: "What is an unrepeatable read?",
        options: [
            "Reading the same row twice and getting different committed values",
            "Reading a NULL value",
            "Reading an indexed row",
            "Reading a duplicate row"
        ],
        answer: 0
    },
    {
        question: "What is a phantom read?",
        options: [
            "A repeated query sees newly inserted/deleted matching rows",
            "A query returns NULL",
            "A table disappears",
            "A transaction is rolled back"
        ],
        answer: 0
    },
    {
        question: "Which isolation level provides the strongest standard SQL isolation?",
        options: [
            "READ UNCOMMITTED",
            "READ COMMITTED",
            "REPEATABLE READ",
            "SERIALIZABLE"
        ],
        answer: 3
    },
    {
        question: "What is database recovery?",
        options: [
            "Restoring the database to a consistent state after failure",
            "Creating a new database",
            "Sorting tables",
            "Adding columns"
        ],
        answer: 0
    },
    {
        question: "What is a database backup?",
        options: [
            "A copy of database data kept for recovery",
            "A temporary query",
            "A database index",
            "A primary key"
        ],
        answer: 0
    },

    // 91-100: Indexing, Views and Security
    {
        question: "What is an index?",
        options: [
            "A data structure that can speed up data retrieval",
            "A duplicate table",
            "A backup file",
            "A transaction"
        ],
        answer: 0
    },
    {
        question: "What is the main benefit of an index?",
        options: [
            "Faster retrieval for suitable queries",
            "Always less storage",
            "Automatic encryption",
            "Automatic normalization"
        ],
        answer: 0
    },
    {
        question: "What can be a disadvantage of having many indexes?",
        options: [
            "Additional storage and maintenance overhead",
            "Tables cannot be queried",
            "Primary keys disappear",
            "SQL stops working"
        ],
        answer: 0
    },
    {
        question: "What is a view?",
        options: [
            "A virtual table based on a query",
            "A physical hard disk",
            "A backup",
            "A database password"
        ],
        answer: 0
    },
    {
        question: "Which SQL command is used to create a view?",
        options: [
            "CREATE VIEW",
            "MAKE VIEW",
            "NEW VIEW",
            "BUILD VIEW"
        ],
        answer: 0
    },
    {
        question: "What is data security in a DBMS?",
        options: [
            "Protecting data from unauthorized access or modification",
            "Sorting data",
            "Increasing table size",
            "Creating duplicate rows"
        ],
        answer: 0
    },
    {
        question: "Which SQL command can be used to give privileges?",
        options: ["GRANT", "GIVE", "ALLOW", "PERMIT"],
        answer: 0
    },
    {
        question: "Which SQL command removes privileges?",
        options: ["REMOVE", "REVOKE", "DENY", "DELETE"],
        answer: 1
    },
    {
        question: "What is SQL injection?",
        options: [
            "An attack that attempts to manipulate SQL through untrusted input",
            "A database backup technique",
            "A normalization technique",
            "An indexing method"
        ],
        answer: 0
    },
    {
        question: "Which practice helps reduce SQL injection risk?",
        options: [
            "Parameterized queries",
            "Using more passwords in SQL",
            "Removing all indexes",
            "Using duplicate tables"
        ],
        answer: 0
    }
];

console.log(
    "DBMS questions loaded:",
    window.dbmsQuestions.length
);

if (window.dbmsQuestions.length !== 100) {
    console.warn(
        "Warning: DBMS question bank should contain exactly 100 questions."
    );
}