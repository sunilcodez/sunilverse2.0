import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiNestjs,
  SiMysql,
  SiFramer,
  SiAntdesign,
} from "react-icons/si";

export const personalInfo = {
  name: "Sunil Kumar",
  title: "MERN Full Stack Developer",
  // summary: "Building Scalable & High-Performance Web Applications",
  summary:
    // "Passionate Full Stack Developer with 2 years of experience building scalable, responsive, and user-friendly web applications. Specialized in the MERN stack with a strong focus on clean code, performance optimization, and delivering seamless digital experiences.",
    "Passionate Full Stack Developer with 2+ years of experience building scalable and user-friendly web applications using the MERN stack, focused on clean code and performance-driven solutions.",
  email: "sunilkumar2001.n@gmail.com",
  linkedin: "https://linkedin.com/in/sunilkumar",
  github: "https://github.com/sunilcodez",
  resumeLink: "#",
  typingSequences: [
    'React.js Developer', 1500,
    'Node.js Engineer', 1500,
    'Full Stack Builder', 1500,
    'MongoDB Expert', 1500,
    'API Architect', 1500,
  ],
};

export const skills = [
  {
    category: "Frontend Development",
    description: "Building responsive, performant user interfaces with modern frameworks and tools",
    items: [
      {
        name: "React.js",
        icon: FaReact,
        color: "#61DAFB",
        points: [
          "Component-based architecture with hooks and context API",
          "State management and performance optimization",
          "Integration with RESTful APIs and real-time data"
        ]
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        points: [
          "Rapid UI development with utility-first approach",
          "Custom theme configuration and responsive design",
          "Production-ready, optimized builds"
        ]
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "#FF0055",
        points: [
          "Smooth animations and page transitions",
          "Interactive UI elements and gesture handling",
          "Enhanced user experience with motion design"
        ]
      },
      {
        name: "Ant Design",
        icon: SiAntdesign,
        color: "#1677FF",
        points: [
          "Built enterprise-level UI using pre-designed Ant Design components",
          "Implemented complex forms with validation and dynamic form handling",
          "Developed dashboards with charts and structured data visualization",
          "Improved development speed using consistent and scalable UI patterns"
        ]
      }
    ],
  },
  {
    category: "Backend Development",
    description: "Designing scalable server-side applications and RESTful APIs",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
        points: [
          "Asynchronous programming and event-driven architecture",
          "Building scalable server-side applications",
          "Integration with databases and third-party services"
        ]
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#ffffff",
        points: [
          "RESTful API development with proper routing",
          "Middleware implementation for authentication and validation",
          "Error handling and production-ready deployments"
        ]
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
        points: [
          "TypeScript-based enterprise application development",
          "Modular architecture with dependency injection",
          "Building maintainable and testable APIs"
        ]
      },
    ],
  },
  {
    category: "Database Management",
    description: "Working with both SQL and NoSQL databases for optimal data storage",
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        points: [
          "Schema design and document modeling",
          "Aggregation pipelines and indexing strategies",
          "Performance optimization for large datasets"
        ]
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        points: [
          "Relational database design and normalization",
          "Complex queries and stored procedures",
          "Transaction management and data integrity"
        ]
      },
    ],
  },
  {
    category: "Development Tools",
    description: "Version control, API testing, and agile development workflows",
    items: [
      {
        name: "Git & GitHub",
        icon: FaGitAlt,
        color: "#F05032",
        points: [
          "Version control with branching strategies",
          "Code collaboration and pull request workflows",
          "CI/CD integration and deployment automation"
        ]
      },
      {
        name: "REST APIs",
        icon: FaCode,
        color: "#00D8FF",
        points: [
          "API design following REST principles",
          "Postman for testing and documentation",
          "Integration with third-party services"
        ]
      },
    ],
  },
  {
    category: "Core Strengths",
    description: "Professional skills developed through real-world project delivery",
    items: [
      {
        name: "Full-Stack Development",
        icon: FaRocket,
        color: "#9333EA",
        points: [
          "End-to-end feature development from UI to database",
          "Performance optimization and code refactoring",
          "Production bug fixes and maintenance"
        ]
      },
      {
        name: "Agile Practices",
        icon: FaDatabase,
        color: "#06B6D4",
        points: [
          "Sprint planning and daily standups",
          "Code reviews and collaborative development",
          "Iterative development with continuous feedback"
        ]
      },
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce application with user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with performance and scalability in mind.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    image: "🛒",
    gradient: 'from-indigo-600 to-blue-600',
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, team workspaces, and progress tracking. Features a clean and intuitive UI.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "CSS3"],
    liveLink: "#",
    githubLink: "#",
    gradient: 'from-purple-600 to-pink-600',
    image: "📋",
  },
  {
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for social media management with interactive charts, scheduled posting, engagement metrics, and multi-platform support.",
    tech: ["React.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    gradient: 'from-cyan-600 to-teal-600',
    image: "📊",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A modern chat application with real-time messaging, file sharing, group chats, and end-to-end encryption. Features typing indicators and online status.",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js"],
    liveLink: "#",
    githubLink: "#",
    gradient: 'from-amber-600 to-orange-600',
    image: "💬",
  },
];

export const experience = [
  {
    role: "MERN Full Stack Developer",
    company: "App Brigade Technologies Pvt. Ltd.",
    duration: "2024 – Present",
    responsibilities: [
      "Designed and developed full-stack web applications using React.js and Node.js (Express.js & NestJS), working with both MongoDB and MySQL databases",
      "Built RESTful APIs and integrated third-party services for enhanced functionality",
      "Implemented responsive and pixel-perfect UI components using Tailwind CSS",
      "Optimized application performance, reducing load times by 40%",
      "Collaborated with cross-functional teams using Agile methodologies",
    ],
  },
  {
    role: "Self-Learning MERN Stack Developer",
    company: "Personal Projects & Continuous Learning",
    duration: "2023 – 2024",
    responsibilities: [
      "Learned and built full-stack applications using MongoDB, Express.js, React.js, and Node.js",
      "Developed multiple personal projects to strengthen frontend and backend concepts",
      "Practiced REST API development and database design principles",
      "Implemented authentication, authorization, and CRUD operations in projects",
      "Continuously improved problem-solving skills and understanding of scalable application architecture",
    ],
  },
];

export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Expertise", to: "expertise" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

export const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/sunilkumar" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/sunilkumar" },
];

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};
