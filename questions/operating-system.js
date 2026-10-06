window.operatingSystemQuestions = [

    // 1-10: OS Fundamentals
    {
        question: "What does OS stand for?",
        options: [
            "Operating System",
            "Operating Software",
            "Output System",
            "Online System"
        ],
        answer: 0
    },
    {
        question: "What is the main purpose of an operating system?",
        options: [
            "Manage computer resources and provide services",
            "Only create documents",
            "Only browse the internet",
            "Only compile programs"
        ],
        answer: 0
    },
    {
        question: "Which of the following is an operating system?",
        options: ["Linux", "MySQL", "Python", "HTML"],
        answer: 0
    },
    {
        question: "Which component of an OS manages hardware resources?",
        options: ["Kernel", "Browser", "Compiler", "Editor"],
        answer: 0
    },
    {
        question: "Which mode has unrestricted access to system resources?",
        options: [
            "User mode",
            "Kernel mode",
            "Application mode",
            "Normal mode"
        ],
        answer: 1
    },
    {
        question: "Which interface allows users to interact with an OS using commands?",
        options: ["CLI", "GUI", "BIOS", "API"],
        answer: 0
    },
    {
        question: "Which interface provides graphical interaction?",
        options: ["CLI", "GUI", "API", "Kernel"],
        answer: 1
    },
    {
        question: "Which OS concept allows multiple programs to stay in memory?",
        options: [
            "Multiprogramming",
            "Multiplication",
            "Compilation",
            "Spooling"
        ],
        answer: 0
    },
    {
        question: "Which OS concept allows multiple tasks to appear to run simultaneously?",
        options: [
            "Multitasking",
            "Multiprocessing",
            "Spooling",
            "Batching"
        ],
        answer: 0
    },
    {
        question: "Which OS type is designed to respond within strict timing constraints?",
        options: [
            "Batch OS",
            "Real-time OS",
            "Distributed OS",
            "Desktop OS"
        ],
        answer: 1
    },

    // 11-20: Processes
    {
        question: "What is a process?",
        options: [
            "A program in execution",
            "A source code file",
            "A compiler",
            "A hardware device"
        ],
        answer: 0
    },
    {
        question: "Which structure stores information about a process?",
        options: [
            "PCB",
            "CPU",
            "RAM",
            "ALU"
        ],
        answer: 0
    },
    {
        question: "What does PCB stand for?",
        options: [
            "Process Control Block",
            "Program Control Buffer",
            "Process Computer Block",
            "Program Control Block"
        ],
        answer: 0
    },
    {
        question: "Which information is typically stored in a PCB?",
        options: [
            "Process state",
            "Keyboard layout only",
            "Monitor resolution only",
            "Source code only"
        ],
        answer: 0
    },
    {
        question: "Which state means a process is currently executing?",
        options: ["Ready", "Running", "Waiting", "New"],
        answer: 1
    },
    {
        question: "Which state means a process is waiting for CPU time?",
        options: ["Ready", "Running", "Terminated", "Blocked"],
        answer: 0
    },
    {
        question: "Which state means a process is waiting for an event or I/O?",
        options: ["Ready", "Running", "Waiting/Blocked", "New"],
        answer: 2
    },
    {
        question: "Which state represents a newly created process?",
        options: ["New", "Ready", "Running", "Exit"],
        answer: 0
    },
    {
        question: "Which state represents a completed process?",
        options: ["Ready", "Waiting", "Terminated", "New"],
        answer: 2
    },
    {
        question: "What is a context switch?",
        options: [
            "Switching CPU from one process/thread to another",
            "Changing the operating system",
            "Changing the monitor",
            "Restarting the computer"
        ],
        answer: 0
    },

    // 21-30: Threads
    {
        question: "What is a thread?",
        options: [
            "A lightweight unit of execution",
            "A hard disk",
            "A file system",
            "A compiler"
        ],
        answer: 0
    },
    {
        question: "Threads belonging to the same process generally share what?",
        options: [
            "Address space",
            "Separate operating systems",
            "Separate CPUs always",
            "Separate programs"
        ],
        answer: 0
    },
    {
        question: "Which is usually cheaper to create?",
        options: ["Process", "Thread", "Operating system", "Disk"],
        answer: 1
    },
    {
        question: "What is multithreading?",
        options: [
            "Executing multiple threads within a process",
            "Running multiple operating systems",
            "Creating multiple hard disks",
            "Using multiple keyboards"
        ],
        answer: 0
    },
    {
        question: "Which type of thread is managed by the kernel?",
        options: [
            "Kernel-level thread",
            "User-only thread",
            "Application thread",
            "File thread"
        ],
        answer: 0
    },
    {
        question: "Which threads are managed primarily by a user-level library?",
        options: [
            "User-level threads",
            "Kernel threads",
            "System threads",
            "Hardware threads"
        ],
        answer: 0
    },
    {
        question: "A thread is often called what?",
        options: [
            "Lightweight process",
            "Heavy process",
            "Virtual machine",
            "System call"
        ],
        answer: 0
    },
    {
        question: "Which resource is normally private to each thread?",
        options: ["Stack", "Code segment", "Heap", "Process address space"],
        answer: 0
    },
    {
        question: "Which is a benefit of multithreading?",
        options: [
            "Improved responsiveness",
            "Always lower memory usage",
            "Eliminates all errors",
            "Removes the need for an OS"
        ],
        answer: 0
    },
    {
        question: "Which operation can occur when a running thread waits for I/O?",
        options: [
            "It may become blocked",
            "It must terminate",
            "It becomes a new process",
            "It shuts down the OS"
        ],
        answer: 0
    },

    // 31-40: CPU Scheduling
    {
        question: "What is CPU scheduling?",
        options: [
            "Selecting a process to execute next",
            "Formatting a disk",
            "Installing software",
            "Creating a file"
        ],
        answer: 0
    },
    {
        question: "Which scheduling algorithm serves processes in arrival order?",
        options: ["FCFS", "SJF", "Round Robin", "Priority"],
        answer: 0
    },
    {
        question: "What does FCFS stand for?",
        options: [
            "First Come First Served",
            "First CPU First Served",
            "Fast Come Fast Served",
            "First Control First System"
        ],
        answer: 0
    },
    {
        question: "Which algorithm selects the process with the shortest CPU burst?",
        options: ["FCFS", "SJF", "RR", "FIFO"],
        answer: 1
    },
    {
        question: "What does SJF stand for?",
        options: [
            "Shortest Job First",
            "Small Job First",
            "System Job Function",
            "Shortest Java Function"
        ],
        answer: 0
    },
    {
        question: "Which scheduling algorithm uses a time quantum?",
        options: [
            "Round Robin",
            "FCFS",
            "SJF",
            "FIFO"
        ],
        answer: 0
    },
    {
        question: "What is the main parameter of Round Robin scheduling?",
        options: [
            "Time quantum",
            "Disk size",
            "Page size",
            "File size"
        ],
        answer: 0
    },
    {
        question: "Which scheduling algorithm can cause starvation?",
        options: [
            "Priority scheduling",
            "FCFS only",
            "Round Robin only",
            "FIFO only"
        ],
        answer: 0
    },
    {
        question: "What is starvation?",
        options: [
            "A process waits indefinitely for CPU/resources",
            "A process finishes early",
            "The CPU becomes faster",
            "Memory becomes empty"
        ],
        answer: 0
    },
    {
        question: "What is turnaround time?",
        options: [
            "Completion time minus arrival time",
            "Arrival time minus burst time",
            "Burst time minus waiting time",
            "Response time minus arrival time"
        ],
        answer: 0
    },

    // 41-50: Synchronization
    {
        question: "What is process synchronization used for?",
        options: [
            "Coordinating processes accessing shared resources",
            "Increasing disk capacity",
            "Installing programs",
            "Changing screen resolution"
        ],
        answer: 0
    },
    {
        question: "What is a critical section?",
        options: [
            "Code that accesses shared data/resources",
            "A bootloader",
            "A file system",
            "A CPU register"
        ],
        answer: 0
    },
    {
        question: "What does mutual exclusion ensure?",
        options: [
            "Only one process enters a critical section at a time",
            "All processes run simultaneously",
            "No process runs",
            "All memory is shared"
        ],
        answer: 0
    },
    {
        question: "Which mechanism is commonly used for synchronization?",
        options: ["Semaphore", "Compiler", "Browser", "File"],
        answer: 0
    },
    {
        question: "What is a semaphore?",
        options: [
            "A synchronization mechanism",
            "A type of CPU",
            "A file format",
            "A programming language"
        ],
        answer: 0
    },
    {
        question: "Which operation decreases a semaphore?",
        options: ["wait", "signal", "increase", "releaseOnly"],
        answer: 0
    },
    {
        question: "Which operation increases a semaphore?",
        options: ["wait", "signal", "block", "sleep"],
        answer: 1
    },
    {
        question: "What is a race condition?",
        options: [
            "Output depends on the timing/order of concurrent operations",
            "CPU is too fast",
            "Disk is full",
            "A process terminates normally"
        ],
        answer: 0
    },
    {
        question: "Which problem is commonly associated with synchronization?",
        options: [
            "Race condition",
            "Syntax error",
            "Compilation only",
            "Formatting"
        ],
        answer: 0
    },
    {
        question: "Which technique can provide mutual exclusion?",
        options: [
            "Mutex",
            "Compiler",
            "Cache",
            "Loader"
        ],
        answer: 0
    },

    // 51-60: Deadlocks
    {
        question: "What is a deadlock?",
        options: [
            "Processes waiting indefinitely for resources held by each other",
            "A process finishing successfully",
            "A CPU running normally",
            "A file being deleted"
        ],
        answer: 0
    },
    {
        question: "How many necessary conditions are associated with deadlock?",
        options: ["2", "3", "4", "5"],
        answer: 2
    },
    {
        question: "Which is a necessary deadlock condition?",
        options: [
            "Mutual exclusion",
            "Compilation",
            "Caching",
            "Paging only"
        ],
        answer: 0
    },
    {
        question: "Which is another deadlock condition?",
        options: [
            "Hold and wait",
            "Fast execution",
            "File sharing",
            "Multitasking"
        ],
        answer: 0
    },
    {
        question: "Which condition means resources cannot be forcibly taken?",
        options: [
            "No preemption",
            "Mutual exclusion",
            "Hold and wait",
            "Circular wait"
        ],
        answer: 0
    },
    {
        question: "Which condition involves a circular chain of processes?",
        options: [
            "Circular wait",
            "Mutual exclusion",
            "Preemption",
            "Paging"
        ],
        answer: 0
    },
    {
        question: "Which algorithm is used for deadlock avoidance?",
        options: [
            "Banker's algorithm",
            "Round Robin",
            "FCFS",
            "FIFO"
        ],
        answer: 0
    },
    {
        question: "What is deadlock prevention?",
        options: [
            "Designing the system so at least one deadlock condition cannot hold",
            "Waiting for deadlock to occur",
            "Restarting every process",
            "Increasing CPU speed"
        ],
        answer: 0
    },
    {
        question: "What is deadlock detection?",
        options: [
            "Checking whether a deadlock has occurred",
            "Preventing every process",
            "Increasing RAM",
            "Deleting files"
        ],
        answer: 0
    },
    {
        question: "What is a safe state?",
        options: [
            "A state where there is an execution sequence that can allow all processes to finish",
            "A state where no process exists",
            "A state where CPU is off",
            "A state where memory is empty"
        ],
        answer: 0
    },

    // 61-70: Memory Management
    {
        question: "What is memory management?",
        options: [
            "Managing allocation and deallocation of memory",
            "Managing keyboard input",
            "Managing only files",
            "Managing network cables"
        ],
        answer: 0
    },
    {
        question: "Which memory is directly accessed by the CPU for active program execution?",
        options: ["RAM", "Hard disk", "DVD", "USB"],
        answer: 0
    },
    {
        question: "What is paging?",
        options: [
            "A memory management technique using fixed-size pages and frames",
            "A file compression method",
            "A CPU scheduling algorithm",
            "A networking protocol"
        ],
        answer: 0
    },
    {
        question: "A page is mapped into what physical memory unit?",
        options: ["Frame", "Sector", "Block only", "Segment"],
        answer: 0
    },
    {
        question: "What is a page table used for?",
        options: [
            "Mapping virtual pages to physical frames",
            "Scheduling processes",
            "Managing files",
            "Storing passwords only"
        ],
        answer: 0
    },
    {
        question: "What is fragmentation?",
        options: [
            "Unused memory caused by allocation patterns",
            "A CPU scheduling method",
            "A file encryption method",
            "A network protocol"
        ],
        answer: 0
    },
    {
        question: "What is internal fragmentation?",
        options: [
            "Unused space inside an allocated memory block",
            "Unused space between allocated blocks",
            "Unused disk files",
            "Unused CPU cycles"
        ],
        answer: 0
    },
    {
        question: "What is external fragmentation?",
        options: [
            "Free memory scattered between allocated blocks",
            "Unused space inside a block",
            "Unused CPU registers",
            "Unused files"
        ],
        answer: 0
    },
    {
        question: "What is virtual memory?",
        options: [
            "A technique that allows programs to use an address space larger than physical memory",
            "Only RAM",
            "A type of CPU",
            "A disk partition"
        ],
        answer: 0
    },
    {
        question: "What is a page fault?",
        options: [
            "An access to a page that is not currently in physical memory",
            "A CPU failure",
            "A file deletion",
            "A syntax error"
        ],
        answer: 0
    },

    // 71-80: Page Replacement
    {
        question: "Why are page replacement algorithms used?",
        options: [
            "To decide which page to replace when a new page is needed",
            "To schedule CPU processes",
            "To manage keyboard input",
            "To create files"
        ],
        answer: 0
    },
    {
        question: "Which page replacement algorithm removes the oldest page?",
        options: ["FIFO", "LRU", "Optimal", "SJF"],
        answer: 0
    },
    {
        question: "What does FIFO stand for?",
        options: [
            "First In First Out",
            "First Input First Output",
            "Fast In Fast Out",
            "File In File Out"
        ],
        answer: 0
    },
    {
        question: "Which algorithm replaces the page that has not been used for the longest time?",
        options: ["FIFO", "LRU", "FCFS", "SJF"],
        answer: 1
    },
    {
        question: "What does LRU stand for?",
        options: [
            "Least Recently Used",
            "Last Recently Used",
            "Least Resource Used",
            "Last Resource Utility"
        ],
        answer: 0
    },
    {
        question: "Which page replacement algorithm theoretically gives the minimum possible page faults?",
        options: [
            "Optimal",
            "FIFO",
            "LRU",
            "Random"
        ],
        answer: 0
    },
    {
        question: "Which algorithm may suffer from Belady's anomaly?",
        options: [
            "FIFO",
            "LRU",
            "Optimal",
            "MRU always"
        ],
        answer: 0
    },
    {
        question: "What is thrashing?",
        options: [
            "Excessive paging that leaves little time for useful execution",
            "A CPU scheduling algorithm",
            "A file allocation technique",
            "A deadlock condition"
        ],
        answer: 0
    },
    {
        question: "What is demand paging?",
        options: [
            "Loading pages into memory only when they are needed",
            "Loading every page at startup",
            "Deleting pages permanently",
            "Scheduling pages as processes"
        ],
        answer: 0
    },
    {
        question: "Which hardware component can speed up virtual address translation?",
        options: [
            "TLB",
            "ALU",
            "DMA",
            "GPU"
        ],
        answer: 0
    },

    // 81-90: File Systems
    {
        question: "What is a file system?",
        options: [
            "A system for organizing and managing files",
            "A CPU scheduler",
            "A memory chip",
            "A compiler"
        ],
        answer: 0
    },
    {
        question: "Which structure organizes files into folders/directories?",
        options: [
            "Directory structure",
            "PCB",
            "Page table",
            "Semaphore"
        ],
        answer: 0
    },
    {
        question: "What is a directory?",
        options: [
            "A structure that contains information about files and subdirectories",
            "A CPU register",
            "A process",
            "A page frame"
        ],
        answer: 0
    },
    {
        question: "Which file allocation method stores a file in consecutive disk blocks?",
        options: [
            "Contiguous allocation",
            "Linked allocation",
            "Indexed allocation",
            "Random allocation"
        ],
        answer: 0
    },
    {
        question: "Which allocation method uses pointers between file blocks?",
        options: [
            "Linked allocation",
            "Contiguous allocation",
            "Indexed allocation",
            "Direct allocation"
        ],
        answer: 0
    },
    {
        question: "Which allocation method uses an index block containing pointers?",
        options: [
            "Indexed allocation",
            "Contiguous allocation",
            "Linked allocation",
            "Sequential allocation"
        ],
        answer: 0
    },
    {
        question: "Which permission commonly controls reading a file?",
        options: ["Read", "Write", "Execute", "Delete"],
        answer: 0
    },
    {
        question: "Which permission allows modification of a file?",
        options: ["Read", "Write", "Execute", "Open"],
        answer: 1
    },
    {
        question: "Which permission allows executing a file/program?",
        options: ["Read", "Write", "Execute", "RunOnly"],
        answer: 2
    },
    {
        question: "What is an absolute path?",
        options: [
            "A path beginning from the root/base location",
            "A path relative to the current directory",
            "A file name only",
            "A process ID"
        ],
        answer: 0
    },

    // 91-100: System Calls, IPC and I/O
    {
        question: "What is a system call?",
        options: [
            "An interface through which a program requests OS services",
            "A normal function only",
            "A hardware interrupt only",
            "A compiler command"
        ],
        answer: 0
    },
    {
        question: "Which system call is associated with creating a new process in Unix-like systems?",
        options: ["fork()", "createProcess()", "new()", "spawnOnly()"],
        answer: 0
    },
    {
        question: "Which system call is commonly associated with ending a process?",
        options: ["exit()", "stopProcess()", "end()", "terminateOnly()"],
        answer: 0
    },
    {
        question: "What does IPC stand for?",
        options: [
            "Inter-Process Communication",
            "Internal Program Control",
            "Internet Process Connection",
            "Inter-Program Compiler"
        ],
        answer: 0
    },
    {
        question: "Which is an IPC mechanism?",
        options: [
            "Shared memory",
            "Compiler",
            "Cache",
            "BIOS"
        ],
        answer: 0
    },
    {
        question: "Which IPC mechanism sends messages between processes?",
        options: [
            "Message passing",
            "Paging",
            "Spooling",
            "Compilation"
        ],
        answer: 0
    },
    {
        question: "What is DMA?",
        options: [
            "Direct Memory Access",
            "Dynamic Memory Allocation",
            "Direct Machine Access",
            "Data Memory Algorithm"
        ],
        answer: 0
    },
    {
        question: "What is an interrupt?",
        options: [
            "A signal that causes the CPU to temporarily handle an event",
            "A file format",
            "A memory page",
            "A scheduling algorithm"
        ],
        answer: 0
    },
    {
        question: "Which device is commonly used for persistent secondary storage?",
        options: ["SSD", "RAM", "Cache", "Register"],
        answer: 0
    },
    {
        question: "Which OS component commonly handles hardware device interaction?",
        options: [
            "Device driver",
            "Text editor",
            "Compiler",
            "Browser"
        ],
        answer: 0
    }
];

console.log(
    "Operating System questions loaded:",
    window.operatingSystemQuestions.length
);

if (window.operatingSystemQuestions.length !== 100) {
    console.warn(
        "Warning: Operating System question bank should contain exactly 100 questions."
    );
}