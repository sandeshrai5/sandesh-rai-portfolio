// Personal Information
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  linkedin: string;
  researchGate: string;
  googleScholar: string;
  profileImage: string;
  resumeUrl?: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Education
export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  highlights?: string[];
}

// Skill
export interface Skill {
  name: string;
  level: number;
  category?: string;
}

// Project
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  details?: string[];
  images?: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

// Publication
export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal?: string;
  conference?: string;
  year: string;
  doi?: string;
  url?: string;
  status: "published" | "accepted" | "in_progress" | "submitted";
}

// Experience
export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  type: "training" | "workshop" | "research" | "certification";
}

// Achievement
export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  type: "academic" | "conference" | "research" | "award";
}

// Research Interest
export interface ResearchInterest {
  name: string;
  icon: string;
  description: string;
}