// GitHub related types
export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  homepage: string;
}

// Experience related types
export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

// Project related types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
}

// Skills related types
export interface TechnicalSkill {
  id: number;
  name: string;
  level: number;
}

export interface ToolSkill {
  id: number;
  name: string;
  icon: string;
}

export interface Language {
  id: number;
  name: string;
  level: number;
  description: string;
}

// Education related types
export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  gpa?: string;
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
