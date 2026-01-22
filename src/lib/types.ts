export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  projects: string;
  tech: string[];
  notableAchievement?: string;
}

export interface Education {
  institution: string;
  period: string;
  location: string;
  degree: string;
  details?: string;
}

export interface Certification {
  provider: string;
  year: string;
  name: string;
  verificationUrl: string;
  badgeUrl?: string;
}