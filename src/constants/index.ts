import { ExperienceType, NavLinkType, ProjectType, SkillType } from "../types";

export const NAV_LINKS: NavLinkType[] = [
  {
    id: "about",
    title: "About",
    href: "#about",
  },
  {
    id: "skills",
    title: "Skills",
    href: "#skills",
  },
  {
    id: "projects",
    title: "Projects",
    href: "#projects",
  },
  {
    id: "experience",
    title: "Experience",
    href: "#experience",
  },
  {
    id: "contact",
    title: "Contact",
    href: "#contact",
  },
];

export const SKILLS: SkillType[] = [
  {
    id: 1,
    name: "JavaScript",
    category: "programming",
    icon: "logos:javascript",
  },
  {
    id: 2,
    name: "TypeScript",
    category: "programming",
    icon: "logos:typescript-icon",
  },
  {
    id: 3,
    name: "React",
    category: "frontend",
    icon: "logos:react",
  },
  {
    id: 4,
    name: "Next.js",
    category: "frontend",
    icon: "logos:nextjs-icon",
  },
  {
    id: 5,
    name: "Redux",
    category: "frontend",
    icon: "logos:redux",
  },
  {
    id: 6,
    name: "Node.js",
    category: "backend",
    icon: "logos:nodejs-icon",
  },
  {
    id: 7,
    name: "Express.js",
    category: "backend",
    icon: "simple-icons:express",
  },
  {
    id: 8,
    name: "MySQL",
    category: "database",
    icon: "logos:mysql",
  },
  {
    id: 9,
    name: "Prisma",
    category: "database",
    icon: "simple-icons:prisma",
  },
  {
    id: 10,
    name: "Sequelize",
    category: "database",
    icon: "simple-icons:sequelize",
  },
  {
    id: 11,
    name: "JWT",
    category: "auth",
    icon: "mdi:lock",
  },
  {
    id: 12,
    name: "NextAuth",
    category: "auth",
    icon: "simple-icons:nextdotjs", // closest match
  },
  {
    id: 13,
    name: "Git",
    category: "devops",
    icon: "logos:git-icon",
  },
  {
    id: 14,
    name: "AWS Lambda",
    category: "devops",
    icon: "logos:aws-lambda",
  },
  {
    id: 15,
    name: "AWS EC2",
    category: "devops",
    icon: "logos:aws",
  },
  {
    id: 16,
    name: "AWS ECS",
    category: "devops",
    icon: "logos:aws",
  },
  {
    id: 17,
    name: "JIRA",
    category: "devops",
    icon: "simple-icons:jira",
  },
];


export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: "TVL Website 2.0",
    description: "A comprehensive web application for managing TV License activities for BBC, including license applications and payment management.",
    image: "https://images.pexels.com/photos/27906254/pexels-photo-27906254.jpeg",
    technologies: ["Next.js", "React", "Carbon Components", "NextAuth"],
    details: {
      client: "BBC, United Kingdom",
      applicationName: "TVL Website(2.0)",
      projectDescription: "The Capita TVL Website is a web application that facilitates various activities related to the TV License for BBC, including applying for a license, managing payments, and handling customer inquiries. The project involves multiple teams working on different aspects of the system.",
      designation: "Application Developer (Experienced Frontend)",
      role: [
        "Assisted in migrating the frontend to Next.js, improving performance, SEO, and scalability of the web application.",
        "Developed reusable React components using Carbon Components, ensuring consistency and ease of maintenance across the platform.",
        "Worked with Bloomreach CMS to efficiently manage and render dynamic content, enhancing content delivery and user experience.",
        "Assisted in Authentication using NextAuth, ensuring secure and seamless user login and session management.",
        "Contributed to documentation and CI/CD processes, streamlining deployment pipelines and improving team collaboration.",
        "Participated in daily stand-ups and sprint planning, actively contributing to project timelines and team collaboration.",
        "Collaborated with senior developers to implement industry best practices in code architecture and design patterns.",
        "Worked closely with the design team to audit and document existing UI components, enhancing consistency and usability.",
        "Performed unit testing and debugged frontend code, ensuring the application's stability, performance, and reliability."
      ],
      duration: "May 2024 to Present",
      environment: "Next.js, React.js, Bloomreach CMS, HTML, SCSS, GIT, JavaScript, Carbon Components, Next Auth",
      teamSize: "10 professionals",
      workCompany: "IBM, Mysore"
    }
  },
  {
    id: 2,
    title: "Price Wizard",
    description: "Dynamic hotel price prediction system using competitor data and market trends.",
    image: "https://images.pexels.com/photos/9740338/pexels-photo-9740338.jpeg",
    demoLink: "",
    githubLink: "",
    technologies: ["React.js", "Serverless", "Node.js", "Redux Saga", "JWT", "AWS", "R-programming"],
    details: {
      client: "Spring Field Hotel",
      applicationName: "Price Wizard",
      projectDescription: "Price Wizard is a price suggestion application that analyzes and predicts hotel prices by comparing factors such as competitor prices, hotel infrastructure, seasonal trends, festivals, and market dynamics. It helps hotel managers set competitive rates using dynamic 365-day forecasts.",
      designation: "Software Development Engineer",
      role: [
        "Implemented a feature to list backend SQL queries using ?q=1, improving system transparency.",
        "Optimized pricing algorithm, reducing execution time from 7 to 3 hours.",
        "Fixed application bugs, enhancing stability and user experience.",
        "Created Puppeteer web scraping script for data collection, delivered in one day.",
        "Converted business logic into R code to enable real estate transactions.",
        "Deployed features on EC2 and ECS, ensuring scalability.",
        "Worked with serverless functions to improve operational efficiency.",
        "Monitored logs to maintain reliability and uptime."
      ],
      duration: "Aug 2023 to Nov 2023",
      environment: "React.js, Serverless, Node.js, Redux Saga, JWT, Axios, HTML, CSS, JavaScript, R-programming, Bit Bucket, AWS Services",
      teamSize: "3 professionals",
      workCompany: "Calibraint Technologies, Chennai"
    }
  },
  {
    id: 3,
    title: "Maxis QA",
    description: "A centralized platform for managing the Software Testing Life Cycle (STLC).",
    image: "https://images.pexels.com/photos/1181252/pexels-photo-1181252.jpeg", 
    demoLink: "",
    githubLink: "",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "Axios", "SCSS"],
    details: {
      client: "Calibraint Technologies (Internal Project)",
      applicationName: "Maxis QA",
      projectDescription: "Maxis QA is a web application for managing the Software Testing Life Cycle, tracking test cases, and enhancing collaboration across testing teams.",
      designation: "Software Development Engineer",
      role: [
        "Developed full-stack application using React.js, Node.js, and MySQL.",
        "Implemented JWT authentication for secure access.",
        "Built RESTful APIs for test and project management.",
        "Designed a responsive UI using SCSS and HTML."
      ],
      duration: "March 2023 to June 2023",
      environment: "React.js, Express.js, Node.js, Redux Toolkit, JWT, Axios, WebSocket, HTML, SCSS, JavaScript, Bit Bucket",
      teamSize: "2 professionals",
      workCompany: "Calibraint Technologies, Chennai"
    }
  },
  {
    id: 4,
    title: "Hari Estate",
    description: "Real estate platform for property rentals, sales, and real-time owner chats.",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg", 
    demoLink: "",
    githubLink: "https://github.com/Cyberfreak08/estate_backend",
    technologies: ["React.js", "Node.js", "Express.js", "JWT", "WebSocket", "Prisma"],
    details: {
      client: "Self-initiated project",
      applicationName: "Hari Estate",
      projectDescription: "A real estate platform for listing, renting, and selling properties with chat functionality between users and property owners.",
      designation: "Independent Developer / Freelancer",
      role: [
        "Handled requirement analysis, design, and full-stack development.",
        "Developed backend APIs and integrated real-time chat.",
        "Performed testing and deployed the app.",
        "Documented architecture and API references."
      ],
      duration: "Nov 2024 to March 2025",
      environment: "React.js, Express.js, Node.js, Context API, JWT, Axios, WebSocket, HTML, SCSS, JavaScript, GIT, Prisma",
      teamSize: "Solo Project",
      workCompany: "Independent / Personal Project"
    }
  },
  {
    id: 5,
    title: "E-Commerce Shopping Application",
    description: "Hardware e-commerce platform with cart, payment, and order tracking features.",
    image: "https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg",
    demoLink: "",
    githubLink: "https://github.com/Cyberfreak08/E-Commerce-Application",
    technologies: ["React.js", "Node.js", "Express.js", "Stripe", "JWT", "Sequelize ORM"],
    details: {
      client: "Self-initiated project",
      applicationName: "E-Commerce Shopping Application",
      projectDescription: "A full-stack platform for buying computer hardware with Stripe payment integration, JWT authentication, and order management.",
      designation: "Independent Developer / Freelancer",
      role: [
        "Built single-page app using React, Node.js, and MySQL.",
        "Implemented secure JWT-based login and Stripe payments.",
        "Designed cart functionality and optimized API calls.",
        "Developed a responsive UI using Ant Design."
      ],
      duration: "July 2023",
      environment: "React.js, Express.js, Node.js, Context API, JWT, Axios, Sequelize ORM, HTML, CSS, JavaScript, GIT",
      teamSize: "Solo Project",
      workCompany: "Independent / Personal Project"
    }
  }
  
];

export const EXPERIENCES: ExperienceType[] = [
  {
    id: 1,
    role: "Application Developer",
    company: "IBM",
    period: "Apr 2024 - Present",
    description: [
      "Developing and maintaining enterprise applications using modern JavaScript frameworks",
      "Collaborating with cross-functional teams to deliver high-quality software solutions",
      "Implementing best practices for code quality and performance optimization"
    ],
    logo: "ibm",
  },
  {
    id: 2,
    role: "Software Dev Engineer",
    company: "Calibraint",
    period: "Jan 2023 - Nov 2023",
    description: [
      "Designed and developed web applications using React.js and Node.js",
      "Implemented RESTful APIs and database integrations",
      "Collaborated with UX/UI designers to create intuitive user interfaces",
      "Participated in agile development processes and sprint planning"
    ],
    logo: "calibraint",
  },
];