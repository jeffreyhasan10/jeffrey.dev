
export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
  github?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  grade: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  score?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
