window.dsaQuestions = [

    // 1-10: DSA Fundamentals
    {
        question: "What does DSA stand for?",
        options: [
            "Data Structures and Algorithms",
            "Data System Application",
            "Data Software Architecture",
            "Digital Structure Algorithm"
        ],
        answer: 0
    },
    {
        question: "What is a data structure?",
        options: [
            "A way of organizing and storing data",
            "A programming language",
            "A compiler",
            "An operating system"
        ],
        answer: 0
    },
    {
        question: "What is an algorithm?",
        options: [
            "A finite sequence of steps for solving a problem",
            "A programming language",
            "A database",
            "A hardware device"
        ],
        answer: 0
    },
    {
        question: "Which notation is commonly used to describe algorithmic time complexity?",
        options: ["Big O", "Big X", "Big S", "Big D"],
        answer: 0
    },
    {
        question: "What does O(1) represent?",
        options: [
            "Constant time",
            "Linear time",
            "Quadratic time",
            "Logarithmic time"
        ],
        answer: 0
    },
    {
        question: "What does O(n) represent?",
        options: [
            "Constant time",
            "Linear time",
            "Quadratic time",
            "Exponential time"
        ],
        answer: 1
    },
    {
        question: "What does O(n²) represent?",
        options: [
            "Constant complexity",
            "Linear complexity",
            "Quadratic complexity",
            "Logarithmic complexity"
        ],
        answer: 2
    },
    {
        question: "Which is generally more efficient for large n?",
        options: ["O(n²)", "O(n)", "O(2ⁿ)", "O(n!)"],
        answer: 1
    },
    {
        question: "What is space complexity?",
        options: [
            "Amount of memory used by an algorithm",
            "Execution time",
            "Number of inputs",
            "Number of functions"
        ],
        answer: 0
    },
    {
        question: "Which data structure stores elements in sequential positions?",
        options: ["Array", "Tree", "Graph", "Hash table"],
        answer: 0
    },

    // 11-20: Arrays
    {
        question: "What is the index of the first element of a typical zero-based array?",
        options: ["0", "1", "-1", "2"],
        answer: 0
    },
    {
        question: "What is the time complexity of accessing an array element by index?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        answer: 0
    },
    {
        question: "Which operation is generally O(n) in an array?",
        options: [
            "Access by index",
            "Searching an unsorted array",
            "Reading first element",
            "Reading last element"
        ],
        answer: 1
    },
    {
        question: "What is a major advantage of arrays?",
        options: [
            "Fast indexed access",
            "Dynamic size always",
            "No memory required",
            "Automatic sorting"
        ],
        answer: 0
    },
    {
        question: "What is a major disadvantage of a fixed-size array?",
        options: [
            "Its size cannot easily grow",
            "It cannot store numbers",
            "It cannot be indexed",
            "It cannot store strings"
        ],
        answer: 0
    },
    {
        question: "Which operation inserts an element at the beginning of an array?",
        options: ["Insertion", "Traversal", "Searching", "Sorting"],
        answer: 0
    },
    {
        question: "What happens to later elements when an item is inserted in the middle of an array?",
        options: [
            "They may need to be shifted",
            "They are always deleted",
            "They are sorted",
            "Nothing happens"
        ],
        answer: 0
    },
    {
        question: "Which structure is commonly used to represent a matrix?",
        options: ["Two-dimensional array", "Stack", "Queue", "Linked list only"],
        answer: 0
    },
    {
        question: "What is traversal?",
        options: [
            "Visiting each element of a data structure",
            "Deleting all elements",
            "Sorting only",
            "Searching only"
        ],
        answer: 0
    },
    {
        question: "Which array index is invalid for an array of length 5?",
        options: ["0", "2", "4", "5"],
        answer: 3
    },

    // 21-30: Linked Lists
    {
        question: "What is a linked list?",
        options: [
            "A collection of nodes connected through links",
            "A sorted array",
            "A tree only",
            "A database table"
        ],
        answer: 0
    },
    {
        question: "What does a typical singly linked-list node contain?",
        options: [
            "Data and a pointer/reference to the next node",
            "Only data",
            "Only a pointer",
            "Two arrays"
        ],
        answer: 0
    },
    {
        question: "What does the last node of a singly linked list usually point to?",
        options: ["First node", "NULL", "Middle node", "Previous node"],
        answer: 1
    },
    {
        question: "What is the first node of a linked list commonly called?",
        options: ["Head", "Root", "Top", "Frontier"],
        answer: 0
    },
    {
        question: "What is the main advantage of linked lists over fixed arrays?",
        options: [
            "Easy insertion/deletion without shifting all elements",
            "Constant-time random access",
            "Less pointer usage",
            "Automatic sorting"
        ],
        answer: 0
    },
    {
        question: "What is the time complexity of accessing the kth element of a singly linked list?",
        options: ["O(1)", "O(k)", "O(log k)", "O(n²)"],
        answer: 1
    },
    {
        question: "A doubly linked list node commonly contains:",
        options: [
            "Data, next and previous links",
            "Only data",
            "Only next",
            "Only previous"
        ],
        answer: 0
    },
    {
        question: "What is a circular linked list?",
        options: [
            "A list whose last node links back to a node in the list, commonly the head",
            "A list with no nodes",
            "A sorted list",
            "An array"
        ],
        answer: 0
    },
    {
        question: "Which pointer/reference is commonly used to traverse a linked list?",
        options: ["Temporary/current pointer", "Root only", "Top only", "Index variable only"],
        answer: 0
    },
    {
        question: "Which operation can be O(1) in a linked list if the node position is already known?",
        options: [
            "Insertion/removal around that node",
            "Random access",
            "Binary search",
            "Sorting"
        ],
        answer: 0
    },

    // 31-40: Stack
    {
        question: "What principle does a stack follow?",
        options: [
            "LIFO",
            "FIFO",
            "Random access",
            "Priority only"
        ],
        answer: 0
    },
    {
        question: "What does LIFO stand for?",
        options: [
            "Last In First Out",
            "Last Input First Output",
            "Linear In First Out",
            "Last Index First Output"
        ],
        answer: 0
    },
    {
        question: "Which operation adds an element to a stack?",
        options: ["Push", "Pop", "Peek", "Delete"],
        answer: 0
    },
    {
        question: "Which operation removes the top element?",
        options: ["Push", "Pop", "Peek", "Insert"],
        answer: 1
    },
    {
        question: "Which operation views the top element without removing it?",
        options: ["Peek", "Pop", "Push", "Search"],
        answer: 0
    },
    {
        question: "What is stack overflow?",
        options: [
            "Trying to push into a full fixed-capacity stack",
            "Trying to pop an empty stack",
            "Sorting a stack",
            "Searching a stack"
        ],
        answer: 0
    },
    {
        question: "What is stack underflow?",
        options: [
            "Trying to remove an element from an empty stack",
            "Trying to push into a full stack",
            "A stack becoming sorted",
            "A stack becoming circular"
        ],
        answer: 0
    },
    {
        question: "Which application commonly uses a stack?",
        options: [
            "Function call management",
            "Printer scheduling only",
            "CPU cache only",
            "Database indexing only"
        ],
        answer: 0
    },
    {
        question: "Which data structure is commonly used to check balanced parentheses?",
        options: ["Stack", "Queue", "Heap", "Graph"],
        answer: 0
    },
    {
        question: "Which traversal of a binary tree can be implemented using a stack?",
        options: ["Depth-first traversal", "Breadth-first traversal only", "Level count", "Hash traversal"],
        answer: 0
    },

    // 41-50: Queue
    {
        question: "What principle does a queue follow?",
        options: ["LIFO", "FIFO", "Random", "Priority only"],
        answer: 1
    },
    {
        question: "What does FIFO stand for?",
        options: [
            "First In First Out",
            "First Input First Output",
            "Fast In Fast Out",
            "First Index First Output"
        ],
        answer: 0
    },
    {
        question: "Which operation adds an element to a queue?",
        options: ["Enqueue", "Dequeue", "Peek", "Pop"],
        answer: 0
    },
    {
        question: "Which operation removes an element from a queue?",
        options: ["Push", "Enqueue", "Dequeue", "Insert"],
        answer: 2
    },
    {
        question: "From which end are elements normally removed in a queue?",
        options: ["Front", "Rear", "Middle", "Top"],
        answer: 0
    },
    {
        question: "From which end are elements normally inserted?",
        options: ["Front", "Rear", "Middle", "Top"],
        answer: 1
    },
    {
        question: "What is a circular queue?",
        options: [
            "A queue where the end connects back to the beginning",
            "A queue with no elements",
            "A sorted queue",
            "A queue implemented only using trees"
        ],
        answer: 0
    },
    {
        question: "Which data structure is commonly used for BFS?",
        options: ["Queue", "Stack", "Heap", "Array only"],
        answer: 0
    },
    {
        question: "Which data structure is commonly used in printer job scheduling?",
        options: ["Queue", "Stack", "Tree", "Graph"],
        answer: 0
    },
    {
        question: "What is queue underflow?",
        options: [
            "Removing from an empty queue",
            "Adding to a full queue",
            "Sorting the queue",
            "Searching the queue"
        ],
        answer: 0
    },

    // 51-60: Trees
    {
        question: "What is a tree?",
        options: [
            "A hierarchical data structure",
            "A linear data structure only",
            "A sorting algorithm",
            "A database query"
        ],
        answer: 0
    },
    {
        question: "What is the top node of a tree called?",
        options: ["Root", "Head", "Top", "Parent"],
        answer: 0
    },
    {
        question: "What is a node with no children called?",
        options: ["Leaf", "Root", "Parent", "Branch"],
        answer: 0
    },
    {
        question: "What is the relationship between a node and the node directly above it?",
        options: ["Parent-child", "Sibling", "Cousin", "Root-leaf"],
        answer: 0
    },
    {
        question: "Nodes having the same parent are called:",
        options: ["Siblings", "Children", "Roots", "Leaves"],
        answer: 0
    },
    {
        question: "What is the maximum number of children a node can have in a binary tree?",
        options: ["1", "2", "3", "Unlimited"],
        answer: 1
    },
    {
        question: "Which traversal visits Root, Left, Right?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        answer: 0
    },
    {
        question: "Which traversal visits Left, Root, Right?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        answer: 1
    },
    {
        question: "Which traversal visits Left, Right, Root?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        answer: 2
    },
    {
        question: "Which traversal generally visits nodes level by level?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        answer: 3
    },

    // 61-70: BST and Heaps
    {
        question: "What does BST stand for?",
        options: [
            "Binary Search Tree",
            "Binary Sorting Tree",
            "Basic Search Table",
            "Binary Structure Tree"
        ],
        answer: 0
    },
    {
        question: "In a typical BST, values in the left subtree are:",
        options: [
            "Less than the node value",
            "Greater than the node value",
            "Always equal",
            "Random"
        ],
        answer: 0
    },
    {
        question: "In a typical BST, values in the right subtree are:",
        options: [
            "Less than the node value",
            "Greater than the node value",
            "Always equal",
            "Random"
        ],
        answer: 1
    },
    {
        question: "What traversal of a BST produces sorted order?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        answer: 1
    },
    {
        question: "What is the average search complexity of a balanced BST?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 1
    },
    {
        question: "What can happen to a badly unbalanced BST?",
        options: [
            "Its operations can degrade to O(n)",
            "It always becomes O(1)",
            "It becomes a graph",
            "It cannot store values"
        ],
        answer: 0
    },
    {
        question: "What is a heap?",
        options: [
            "A complete binary tree satisfying a heap property",
            "A linked list",
            "A graph only",
            "A hash table"
        ],
        answer: 0
    },
    {
        question: "In a max heap, the root contains:",
        options: [
            "The maximum value",
            "The minimum value",
            "The average value",
            "A random value"
        ],
        answer: 0
    },
    {
        question: "In a min heap, the root contains:",
        options: [
            "The minimum value",
            "The maximum value",
            "The average value",
            "A random value"
        ],
        answer: 0
    },
    {
        question: "Which data structure is commonly used to implement a priority queue?",
        options: ["Heap", "Stack", "Linked list only", "Array only"],
        answer: 0
    },

    // 71-80: Searching
    {
        question: "What is linear search?",
        options: [
            "Checking elements one by one",
            "Dividing the search space in half",
            "Sorting the data",
            "Using a tree only"
        ],
        answer: 0
    },
    {
        question: "What is the worst-case time complexity of linear search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 2
    },
    {
        question: "Binary search requires the data to be:",
        options: [
            "Sorted",
            "Unsorted",
            "Random",
            "Duplicated"
        ],
        answer: 0
    },
    {
        question: "What is the time complexity of binary search in a sorted array?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 1
    },
    {
        question: "What does binary search do at each step?",
        options: [
            "Divides the search interval approximately in half",
            "Checks every element",
            "Sorts the array",
            "Deletes half the array"
        ],
        answer: 0
    },
    {
        question: "Which search is usually better for a sorted large array?",
        options: [
            "Binary search",
            "Linear search",
            "Random search",
            "Sequential sorting"
        ],
        answer: 0
    },
    {
        question: "What is the best-case complexity of linear search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 0
    },
    {
        question: "What is the worst-case complexity of binary search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 1
    },
    {
        question: "Can binary search be applied directly to an unsorted array?",
        options: ["Yes", "No", "Only for strings", "Only for integers"],
        answer: 1
    },
    {
        question: "Which search technique repeatedly compares with a middle element?",
        options: ["Linear search", "Binary search", "DFS", "BFS"],
        answer: 1
    },

    // 81-90: Sorting
    {
        question: "Which sorting algorithm repeatedly swaps adjacent elements when they are in the wrong order?",
        options: [
            "Bubble sort",
            "Merge sort",
            "Quick sort",
            "Heap sort"
        ],
        answer: 0
    },
    {
        question: "What is the average time complexity of Bubble Sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 3
    },
    {
        question: "Which sorting algorithm selects the minimum element repeatedly?",
        options: [
            "Selection sort",
            "Bubble sort",
            "Merge sort",
            "Quick sort"
        ],
        answer: 0
    },
    {
        question: "Which sorting algorithm builds a sorted portion one element at a time?",
        options: [
            "Insertion sort",
            "Selection sort",
            "Heap sort",
            "Radix sort"
        ],
        answer: 0
    },
    {
        question: "Which sorting algorithm uses divide and conquer?",
        options: [
            "Merge sort",
            "Bubble sort",
            "Selection sort",
            "Linear sort"
        ],
        answer: 0
    },
    {
        question: "What is the typical time complexity of Merge Sort?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
        answer: 2
    },
    {
        question: "Which sorting algorithm commonly uses a pivot?",
        options: [
            "Quick Sort",
            "Bubble Sort",
            "Selection Sort",
            "Insertion Sort"
        ],
        answer: 0
    },
    {
        question: "What is the average time complexity of Quick Sort?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
        answer: 2
    },
    {
        question: "Which sorting algorithm uses a heap data structure?",
        options: [
            "Heap Sort",
            "Bubble Sort",
            "Insertion Sort",
            "Counting Sort"
        ],
        answer: 0
    },
    {
        question: "Which sorting algorithm is non-comparison based?",
        options: [
            "Counting Sort",
            "Merge Sort",
            "Quick Sort",
            "Heap Sort"
        ],
        answer: 0
    },

    // 91-100: Graphs, Hashing and Recursion
    {
        question: "What is a graph?",
        options: [
            "A collection of vertices and edges",
            "A sorted array",
            "A linked list only",
            "A stack"
        ],
        answer: 0
    },
    {
        question: "What are the nodes of a graph called?",
        options: ["Vertices", "Leaves", "Roots", "Keys"],
        answer: 0
    },
    {
        question: "What connects two vertices in a graph?",
        options: ["Edge", "Pointer only", "Root", "Index"],
        answer: 0
    },
    {
        question: "Which traversal explores neighbors level by level?",
        options: ["DFS", "BFS", "Inorder", "Postorder"],
        answer: 1
    },
    {
        question: "Which traversal commonly uses a stack or recursion?",
        options: ["BFS", "DFS", "Level order", "Hash traversal"],
        answer: 1
    },
    {
        question: "What is hashing?",
        options: [
            "Mapping data to positions using a hash function",
            "Sorting data",
            "Compressing every file",
            "Traversing a tree"
        ],
        answer: 0
    },
    {
        question: "What is a hash collision?",
        options: [
            "Two keys producing the same hash location",
            "Two arrays having the same length",
            "A failed sort",
            "A deleted node"
        ],
        answer: 0
    },
    {
        question: "Which is a collision resolution technique?",
        options: [
            "Chaining",
            "Binary search",
            "Merge sort",
            "DFS"
        ],
        answer: 0
    },
    {
        question: "What is recursion?",
        options: [
            "A function calling itself",
            "A loop without a condition",
            "Sorting an array",
            "Creating a graph"
        ],
        answer: 0
    },
    {
        question: "What is essential to stop recursive calls?",
        options: [
            "Base case",
            "Hash function",
            "Queue",
            "Pointer"
        ],
        answer: 0
    }
];

console.log(
    "DSA questions loaded:",
    window.dsaQuestions.length
);

if (window.dsaQuestions.length !== 100) {
    console.warn(
        "Warning: DSA question bank should contain exactly 100 questions."
    );
}