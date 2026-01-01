
export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  hasReport?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  organization?: string;
  description?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image?: string;
}

export interface CVData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    profileImage: string;
    socials: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      website?: string;
    };
  };
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  certificates: Certificate[];
  education: {
    institution: string;
    degree: string;
    period: string;
    location?: string;
    details?: string[];
  }[];
  awards: Award[];
}
