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
    icon: "javascript",
  },
  {
    id: 2,
    name: "TypeScript",
    category: "programming",
    icon: "typescript",
  },
  {
    id: 3,
    name: "React",
    category: "frontend",
    icon: "react",
  },
  {
    id: 4,
    name: "Next.js",
    category: "frontend",
    icon: "nextjs",
  },
  {
    id: 5,
    name: "Redux",
    category: "frontend",
    icon: "redux",
  },
  {
    id: 6,
    name: "Node.js",
    category: "backend",
    icon: "nodejs",
  },
  {
    id: 7,
    name: "Express",
    category: "backend",
    icon: "express",
  },
  {
    id: 8,
    name: "MySQL",
    category: "database",
    icon: "mysql",
  },
  {
    id: 9,
    name: "Prisma",
    category: "database",
    icon: "prisma",
  },
  {
    id: 10,
    name: "Sequelize",
    category: "database",
    icon: "sequelize",
  },
  {
    id: 11,
    name: "JWT",
    category: "auth",
    icon: "jwt",
  },
  {
    id: 12,
    name: "NextAuth",
    category: "auth",
    icon: "nextauth",
  },
  {
    id: 13,
    name: "Git",
    category: "devops",
    icon: "git",
  },
  {
    id: 14,
    name: "AWS Lambda",
    category: "devops",
    icon: "aws",
  },
  {
    id: 15,
    name: "AWS EC2",
    category: "devops",
    icon: "aws",
  },
  {
    id: 16,
    name: "AWS ECS",
    category: "devops",
    icon: "aws",
  },
];

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment processing, user authentication, and product management.",
    image: "https://images.pexels.com/photos/18104030/pexels-photo-18104030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://demo-ecommerce.example.com",
    githubLink: "https://github.com/harisundar/ecommerce-platform",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://task-manager.example.com",
    githubLink: "https://github.com/harisundar/task-manager",
    technologies: ["React", "Node.js", "WebSocket", "Express"],
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that generates content based on user prompts and preferences.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://ai-content.example.com",
    githubLink: "https://github.com/harisundar/ai-content-generator",
    technologies: ["React", "OpenAI API", "Node.js", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Health & Fitness Tracker",
    description: "A comprehensive health and fitness application that tracks workouts, nutrition, and progress.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://fitness-tracker.example.com",
    githubLink: "https://github.com/harisundar/fitness-tracker",
    technologies: ["React Native", "GraphQL", "Node.js", "MongoDB"],
  },
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