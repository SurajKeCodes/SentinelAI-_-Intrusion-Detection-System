export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  description: string[];
}

export interface Project {
  title: string;
  tech: string[];
  description: string[];
  role?: string;
  link?: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  issuer?: string;
  link?: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  CONTACT = 'contact'
}