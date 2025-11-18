export interface Project {
  title: string;
  technologies: string[];
  description: string[];
  link?: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  duration: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  gpa: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Lucide icon name
}