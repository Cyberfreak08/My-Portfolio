export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  technologies: string[];
}

export interface ExperienceType {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  logo: string;
}

export interface SkillType {
  id: number;
  name: string;
  category: SkillCategory;
  icon: string;
}

export type SkillCategory = 
  | "programming" 
  | "frontend" 
  | "backend" 
  | "database" 
  | "auth" 
  | "devops";

export interface NavLinkType {
  id: string;
  title: string;
  href: string;
}