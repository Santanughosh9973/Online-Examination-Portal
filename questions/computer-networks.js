window.computerNetworksQuestions = [

    // 1-10: Networking Fundamentals
    {
        question: "What is a computer network?",
        options: [
            "A collection of connected devices that communicate and share resources",
            "A single computer",
            "A programming language",
            "A database"
        ],
        answer: 0
    },
    {
        question: "What does LAN stand for?",
        options: [
            "Local Area Network",
            "Large Area Network",
            "Logical Area Network",
            "Local Access Node"
        ],
        answer: 0
    },
    {
        question: "What does WAN stand for?",
        options: [
            "Wide Area Network",
            "Wireless Area Network",
            "Web Access Network",
            "Wide Access Node"
        ],
        answer: 0
    },
    {
        question: "What does MAN stand for?",
        options: [
            "Metropolitan Area Network",
            "Main Area Network",
            "Medium Access Network",
            "Machine Area Network"
        ],
        answer: 0
    },
    {
        question: "Which network typically covers a small geographical area such as an office?",
        options: ["LAN", "WAN", "MAN", "GAN"],
        answer: 0
    },
    {
        question: "Which network can span countries or continents?",
        options: ["LAN", "WAN", "PAN", "CAN"],
        answer: 1
    },
    {
        question: "What does PAN stand for?",
        options: [
            "Personal Area Network",
            "Private Access Network",
            "Public Area Network",
            "Personal Access Node"
        ],
        answer: 0
    },
    {
        question: "Which device commonly connects multiple devices within a LAN?",
        options: ["Switch", "Modem only", "Printer", "Scanner"],
        answer: 0
    },
    {
        question: "Which device forwards packets between different networks?",
        options: ["Router", "Switch", "Hub", "Repeater"],
        answer: 0
    },
    {
        question: "What is bandwidth?",
        options: [
            "The capacity of a communication link to carry data",
            "The physical length of a cable",
            "The number of computers",
            "The IP address"
        ],
        answer: 0
    },

    // 11-20: OSI Model
    {
        question: "How many layers are in the OSI model?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        question: "Which is the lowest layer of the OSI model?",
        options: [
            "Physical",
            "Data Link",
            "Network",
            "Transport"
        ],
        answer: 0
    },
    {
        question: "Which is the highest layer of the OSI model?",
        options: [
            "Session",
            "Presentation",
            "Application",
            "Transport"
        ],
        answer: 2
    },
    {
        question: "Which OSI layer handles logical addressing and routing?",
        options: [
            "Physical",
            "Data Link",
            "Network",
            "Transport"
        ],
        answer: 2
    },
    {
        question: "Which OSI layer is responsible for reliable end-to-end delivery?",
        options: [
            "Network",
            "Transport",
            "Session",
            "Physical"
        ],
        answer: 1
    },
    {
        question: "Which layer is responsible for framing?",
        options: [
            "Physical",
            "Data Link",
            "Network",
            "Transport"
        ],
        answer: 1
    },
    {
        question: "Which layer deals with data formatting and encryption in the traditional OSI model?",
        options: [
            "Presentation",
            "Session",
            "Transport",
            "Network"
        ],
        answer: 0
    },
    {
        question: "Which OSI layer establishes and manages communication sessions?",
        options: [
            "Session",
            "Network",
            "Data Link",
            "Physical"
        ],
        answer: 0
    },
    {
        question: "Which OSI layer provides services directly to applications?",
        options: [
            "Application",
            "Presentation",
            "Session",
            "Transport"
        ],
        answer: 0
    },
    {
        question: "Which protocol is associated with the Network layer?",
        options: ["IP", "Ethernet", "HTTP", "TCP"],
        answer: 0
    },

    // 21-30: TCP/IP Model
    {
        question: "Which protocol suite is the foundation of the modern Internet?",
        options: ["TCP/IP", "OSI only", "FTP only", "HTTP only"],
        answer: 0
    },
    {
        question: "Which protocol provides reliable transport?",
        options: ["TCP", "UDP", "IP", "ARP"],
        answer: 0
    },
    {
        question: "Which protocol is connectionless?",
        options: ["TCP", "UDP", "HTTP", "FTP"],
        answer: 1
    },
    {
        question: "Which protocol is generally faster because it does not establish TCP-style connections?",
        options: ["TCP", "UDP", "IPSec", "FTP"],
        answer: 1
    },
    {
        question: "Which protocol is commonly used for web browsing?",
        options: ["HTTP", "FTP", "SMTP", "SSH"],
        answer: 0
    },
    {
        question: "Which protocol is commonly used for secure web browsing?",
        options: ["HTTP", "HTTPS", "FTP", "Telnet"],
        answer: 1
    },
    {
        question: "Which protocol is commonly used to transfer files?",
        options: ["FTP", "SMTP", "DNS", "ARP"],
        answer: 0
    },
    {
        question: "Which protocol is used to send email?",
        options: ["SMTP", "POP3", "HTTP", "DNS"],
        answer: 0
    },
    {
        question: "Which protocols are commonly used to retrieve email?",
        options: ["POP3/IMAP", "SMTP only", "FTP", "ARP"],
        answer: 0
    },
    {
        question: "Which protocol translates domain names to IP addresses?",
        options: ["DNS", "DHCP", "ARP", "ICMP"],
        answer: 0
    },

    // 31-40: IP Addressing
    {
        question: "What is an IP address used for?",
        options: [
            "Identifying and addressing a device/interface on an IP network",
            "Identifying a keyboard",
            "Encrypting files",
            "Naming folders"
        ],
        answer: 0
    },
    {
        question: "How many bits are in an IPv4 address?",
        options: ["16", "32", "64", "128"],
        answer: 1
    },
    {
        question: "How many bits are in an IPv6 address?",
        options: ["32", "64", "96", "128"],
        answer: 3
    },
    {
        question: "Which is a valid IPv4 address?",
        options: [
            "192.168.1.10",
            "192.168.1.999",
            "300.1.1.1",
            "10.10.10"
        ],
        answer: 0
    },
    {
        question: "Which is a valid IPv6 address format?",
        options: [
            "2001:db8::1",
            "192.168.1.1",
            "2001.db8.1.1",
            "10:20:30"
        ],
        answer: 0
    },
    {
        question: "Which address is commonly used as the IPv4 loopback address?",
        options: [
            "127.0.0.1",
            "192.168.1.1",
            "255.255.255.255",
            "0.0.0.0"
        ],
        answer: 0
    },
    {
        question: "Which address represents an unspecified IPv4 address?",
        options: [
            "0.0.0.0",
            "127.0.0.1",
            "255.255.255.255",
            "192.168.0.1"
        ],
        answer: 0
    },
    {
        question: "Which address is used for the IPv4 limited broadcast?",
        options: [
            "255.255.255.255",
            "0.0.0.0",
            "127.0.0.1",
            "224.0.0.1"
        ],
        answer: 0
    },
    {
        question: "Which address range is commonly private in IPv4?",
        options: [
            "192.168.0.0/16",
            "8.8.8.0/24",
            "1.1.1.0/24",
            "224.0.0.0/4"
        ],
        answer: 0
    },
    {
        question: "Which protocol automatically assigns IP configuration to hosts?",
        options: ["DHCP", "DNS", "ARP", "ICMP"],
        answer: 0
    },

    // 41-50: Subnetting and Routing
    {
        question: "What is subnetting?",
        options: [
            "Dividing a network into smaller logical networks",
            "Combining all networks",
            "Encrypting an IP address",
            "Deleting IP addresses"
        ],
        answer: 0
    },
    {
        question: "What does CIDR stand for?",
        options: [
            "Classless Inter-Domain Routing",
            "Central Internet Domain Routing",
            "Class Internet Data Routing",
            "Common Internet Domain Range"
        ],
        answer: 0
    },
    {
        question: "What does /24 indicate in IPv4 CIDR notation?",
        options: [
            "24 network-prefix bits",
            "24 host bits",
            "24 total bytes",
            "24 available networks"
        ],
        answer: 0
    },
    {
        question: "What is the subnet mask for /24 IPv4?",
        options: [
            "255.255.255.0",
            "255.255.0.0",
            "255.0.0.0",
            "255.255.255.255"
        ],
        answer: 0
    },
    {
        question: "What is the subnet mask for /16?",
        options: [
            "255.255.0.0",
            "255.255.255.0",
            "255.0.0.0",
            "255.255.255.128"
        ],
        answer: 0
    },
    {
        question: "What does a router use to decide where to forward packets?",
        options: [
            "Routing table",
            "Keyboard table",
            "DNS cache only",
            "File system"
        ],
        answer: 0
    },
    {
        question: "What is a default gateway?",
        options: [
            "A router used to reach destinations outside the local network",
            "A DNS server only",
            "A web server",
            "A local file"
        ],
        answer: 0
    },
    {
        question: "Which routing protocol is a link-state protocol?",
        options: ["OSPF", "RIP", "HTTP", "FTP"],
        answer: 0
    },
    {
        question: "Which routing protocol traditionally uses hop count as its metric?",
        options: ["RIP", "OSPF", "BGP", "TCP"],
        answer: 0
    },
    {
        question: "Which protocol is used for routing between autonomous systems on the Internet?",
        options: ["BGP", "RIP", "OSPF", "ARP"],
        answer: 0
    },

    // 51-60: TCP and UDP
    {
        question: "What does TCP stand for?",
        options: [
            "Transmission Control Protocol",
            "Transfer Communication Protocol",
            "Transport Connection Program",
            "Transmission Connection Process"
        ],
        answer: 0
    },
    {
        question: "What does UDP stand for?",
        options: [
            "User Datagram Protocol",
            "Universal Data Protocol",
            "User Data Process",
            "Unified Datagram Program"
        ],
        answer: 0
    },
    {
        question: "Which protocol provides ordered and reliable delivery?",
        options: ["TCP", "UDP", "IP", "ARP"],
        answer: 0
    },
    {
        question: "Which protocol has lower overhead in general?",
        options: ["TCP", "UDP", "HTTP", "FTP"],
        answer: 1
    },
    {
        question: "Which TCP process establishes a connection?",
        options: [
            "Three-way handshake",
            "Two-way handshake",
            "Four-way handshake",
            "Single handshake"
        ],
        answer: 0
    },
    {
        question: "Which TCP flag is commonly used to initiate a connection?",
        options: ["SYN", "FIN", "ACK", "RST"],
        answer: 0
    },
    {
        question: "Which TCP flag acknowledges received data?",
        options: ["SYN", "ACK", "FIN", "PSH"],
        answer: 1
    },
    {
        question: "Which TCP flag is commonly used to terminate a connection?",
        options: ["FIN", "SYN", "ACK", "URG"],
        answer: 0
    },
    {
        question: "Which application is commonly suited to UDP?",
        options: [
            "Real-time voice/video",
            "Reliable file transfer only",
            "Database transactions only",
            "Web page HTML only"
        ],
        answer: 0
    },
    {
        question: "Which mechanism helps TCP control the amount of unacknowledged data?",
        options: [
            "Sliding window",
            "DNS",
            "ARP",
            "Subnet mask"
        ],
        answer: 0
    },

    // 61-70: Network Devices
    {
        question: "Which device forwards frames based on MAC addresses?",
        options: ["Switch", "Router", "Gateway", "Modem"],
        answer: 0
    },
    {
        question: "Which device broadcasts incoming data to all ports?",
        options: ["Hub", "Switch", "Router", "Firewall"],
        answer: 0
    },
    {
        question: "Which device operates primarily at the Network layer?",
        options: ["Router", "Hub", "Repeater", "Bridge only"],
        answer: 0
    },
    {
        question: "Which device regenerates signals?",
        options: ["Repeater", "Router", "Firewall", "Switch"],
        answer: 0
    },
    {
        question: "Which device can connect different network types/protocol environments?",
        options: ["Gateway", "Hub", "Repeater", "NIC"],
        answer: 0
    },
    {
        question: "What does NIC stand for?",
        options: [
            "Network Interface Card",
            "Network Internet Controller",
            "Node Interface Cable",
            "Network Internal Connection"
        ],
        answer: 0
    },
    {
        question: "What is a MAC address?",
        options: [
            "A link-layer hardware/interface address",
            "A domain name",
            "A port number",
            "A subnet mask"
        ],
        answer: 0
    },
    {
        question: "How long is a typical Ethernet MAC address?",
        options: ["32 bits", "48 bits", "64 bits", "128 bits"],
        answer: 1
    },
    {
        question: "Which device commonly separates broadcast domains?",
        options: ["Router", "Hub", "Repeater", "Unmanaged switch only"],
        answer: 0
    },
    {
        question: "Which device is commonly used to protect a network by filtering traffic?",
        options: ["Firewall", "Hub", "Repeater", "NIC"],
        answer: 0
    },

    // 71-80: DNS, HTTP and Web
    {
        question: "What does DNS stand for?",
        options: [
            "Domain Name System",
            "Digital Network Service",
            "Domain Network Server",
            "Data Name System"
        ],
        answer: 0
    },
    {
        question: "What is the main purpose of DNS?",
        options: [
            "Resolve domain names to IP addresses and related records",
            "Encrypt all files",
            "Route packets only",
            "Assign MAC addresses"
        ],
        answer: 0
    },
    {
        question: "What does HTTP stand for?",
        options: [
            "HyperText Transfer Protocol",
            "High Transfer Text Protocol",
            "Hyperlink Transmission Process",
            "Host Transfer Text Protocol"
        ],
        answer: 0
    },
    {
        question: "Which protocol is HTTP normally carried over for traditional secure web traffic?",
        options: ["TLS over TCP", "UDP only", "FTP", "ARP"],
        answer: 0
    },
    {
        question: "Which HTTP method is commonly used to retrieve a resource?",
        options: ["GET", "FETCH", "READ", "RETRIEVE"],
        answer: 0
    },
    {
        question: "Which HTTP method is commonly used to submit data for processing?",
        options: ["POST", "SEND", "SUBMITONLY", "PUSH"],
        answer: 0
    },
    {
        question: "What does HTTPS add to HTTP?",
        options: [
            "TLS-based security",
            "DNS",
            "DHCP",
            "ARP"
        ],
        answer: 0
    },
    {
        question: "What is a URL?",
        options: [
            "A Uniform Resource Locator",
            "A Universal Routing Link",
            "A User Resource Login",
            "A Unified Resource Language"
        ],
        answer: 0
    },
    {
        question: "Which HTTP status code means Not Found?",
        options: ["200", "301", "404", "500"],
        answer: 2
    },
    {
        question: "Which HTTP status code commonly indicates success?",
        options: ["200", "301", "404", "500"],
        answer: 0
    },

    // 81-90: Network Services and Protocols
    {
        question: "Which protocol securely provides remote command-line access?",
        options: ["SSH", "Telnet", "FTP", "SMTP"],
        answer: 0
    },
    {
        question: "Which older remote-login protocol sends data without built-in encryption?",
        options: ["Telnet", "SSH", "HTTPS", "SFTP"],
        answer: 0
    },
    {
        question: "Which protocol maps an IPv4 address to a MAC address on a local network?",
        options: ["ARP", "DNS", "DHCP", "ICMP"],
        answer: 0
    },
    {
        question: "What does ARP stand for?",
        options: [
            "Address Resolution Protocol",
            "Address Routing Protocol",
            "Automatic Resolution Process",
            "Access Routing Protocol"
        ],
        answer: 0
    },
    {
        question: "Which protocol is used for diagnostic/control messages in IP networks?",
        options: ["ICMP", "FTP", "SMTP", "HTTP"],
        answer: 0
    },
    {
        question: "Which command is commonly used to test IP reachability using ICMP Echo?",
        options: ["ping", "ftp", "route", "ssh"],
        answer: 0
    },
    {
        question: "Which protocol is commonly used to synchronize computer clocks?",
        options: ["NTP", "DNS", "ARP", "FTP"],
        answer: 0
    },
    {
        question: "What does NTP stand for?",
        options: [
            "Network Time Protocol",
            "Network Transfer Protocol",
            "Node Time Process",
            "Network Transport Program"
        ],
        answer: 0
    },
    {
        question: "Which protocol is commonly used to securely transfer files over SSH?",
        options: ["SFTP", "HTTP", "SMTP", "ARP"],
        answer: 0
    },
    {
        question: "Which protocol is commonly used for network address assignment?",
        options: ["DHCP", "DNS", "ARP", "ICMP"],
        answer: 0
    },

    // 91-100: Network Security
    {
        question: "What is network security?",
        options: [
            "Protecting network systems and data from unauthorized access and attacks",
            "Increasing network cable length",
            "Creating websites",
            "Sorting packets alphabetically"
        ],
        answer: 0
    },
    {
        question: "What is encryption?",
        options: [
            "Transforming data into a form intended to prevent unauthorized reading",
            "Deleting data",
            "Sorting data",
            "Compressing every packet"
        ],
        answer: 0
    },
    {
        question: "What is authentication?",
        options: [
            "Verifying the identity of a user or system",
            "Giving everyone access",
            "Encrypting a hard disk only",
            "Deleting a password"
        ],
        answer: 0
    },
    {
        question: "What is authorization?",
        options: [
            "Determining what an authenticated user is allowed to access",
            "Verifying a password only",
            "Encrypting a network",
            "Assigning an IP address"
        ],
        answer: 0
    },
    {
        question: "What is a firewall?",
        options: [
            "A system that filters network traffic according to security rules",
            "A type of cable",
            "A DNS server",
            "A web browser"
        ],
        answer: 0
    },
    {
        question: "What is phishing?",
        options: [
            "A social-engineering technique used to trick users into revealing information",
            "A routing protocol",
            "A network cable",
            "A database index"
        ],
        answer: 0
    },
    {
        question: "What is malware?",
        options: [
            "Malicious software",
            "Network hardware",
            "A routing algorithm",
            "A database language"
        ],
        answer: 0
    },
    {
        question: "What is a denial-of-service attack?",
        options: [
            "An attack intended to make a service unavailable to users",
            "A method of encryption",
            "A routing protocol",
            "A file transfer protocol"
        ],
        answer: 0
    },
    {
        question: "What does VPN stand for?",
        options: [
            "Virtual Private Network",
            "Verified Public Network",
            "Virtual Protected Node",
            "Variable Private Network"
        ],
        answer: 0
    },
    {
        question: "What is the main purpose of a VPN?",
        options: [
            "Create a protected logical connection over an underlying network",
            "Increase CPU speed",
            "Replace DNS permanently",
            "Remove all network security"
        ],
        answer: 0
    }
];

console.log(
    "Computer Networks questions loaded:",
    window.computerNetworksQuestions.length
);

if (window.computerNetworksQuestions.length !== 100) {
    console.warn(
        "Warning: Computer Networks question bank should contain exactly 100 questions."
    );
}