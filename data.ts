
import { CVData } from './types';

export const cvData: CVData = {
  personal: {
    name: "Kevin Muhoro",
    title: "Founder & Strategic Analyst | Physics Graduate | Cybersecurity Specialist",
    email: "kevinmuhoro@proton.me",
    phone: "+254 728 999 073",
    location: "Nairobi, Kenya",
    profileImage: "https://i.imgur.com/pADVOmg.jpg",
    bio: "Driven and visionary graduate with an entrepreneurial mindset and a recently completed degree in Physics. Passionate about transforming ideas into impactful ventures, with hands-on experience building a premium team-building and experiential learning platform. Actively exploring opportunities in AI, cybersecurity, and innovative team-based solutions. Combines strong analytical thinking with creativity, initiative, and a results-oriented approach. Faith-centered and purpose-driven, with a commitment to excellence, continuous growth, and creating meaningful, real-world impact.",
    socials: {
      linkedin: "https://www.linkedin.com/in/kevin-muhoro-a794ba28b/",
      github: "https://github.com/muhorokevin",
      website: "https://cross-connect-africa.vercel.app"
    }
  },
  experiences: [
    {
      company: "Otheniel Enterprises Limited",
      role: "Customer Relations & Web Systems Officer",
      period: "2023 – Present",
      location: "Nairobi, Kenya",
      description: [
        "Managed customer and client care, serving as the primary point of contact for inquiries and service updates.",
        "Designed, developed, and continue to maintain the company website to improve service visibility and accessibility.",
        "Liaised directly with clients to keep them informed on application progress and immigration processes.",
        "Coordinated internal and client communication to ensure smooth, transparent, and timely service delivery."
      ],
      skills: ["Customer Care", "Web Development", "Stakeholder Communication", "System Maintenance"]
    },
    {
      company: "CrossConnect Africa",
      role: "Founder & Technical Lead (Part-Time Business)",
      period: "2023 – Present",
      location: "Nairobi, Kenya",
      description: [
        "Founded and operate a part-time business focused on team building, experiential learning, and technology-driven collaboration.",
        "Mission: To build strong, value-driven teams by combining technology, experiential learning, and purpose-centered leadership.",
        "Designed and developed the organization's digital platform and online presence."
      ],
      skills: ["Entrepreneurship", "Strategic Leadership", "Team Building", "Digital Presence"]
    },
    {
      company: "Independent Freelance",
      role: "Web Developer & Penetration Tester",
      period: "Aug 2023 – Nov 2025",
      location: "Remote",
      description: [
        "Delivered web development and penetration testing services to global clients.",
        "Conducted vulnerability assessments and basic security audits.",
        "Built responsive front-end interfaces and secure web applications."
      ],
      skills: ["Front End Coding", "Penetration Testing", "Security Audits", "Responsive Design"]
    },
    {
      company: "Specialized Power Systems Ltd",
      role: "Industrial Attachment",
      period: "May 2024 – Jul 2024",
      location: "Nairobi, Kenya",
      description: [
        "Applied principles of Electricity and Magnetism in industrial environments.",
        "Assisted in the assembly of power control boxes and electrical distribution boards.",
        "Supported testing and inspection of electrical systems."
      ],
      skills: ["Industrial Engineering", "Analytical Logic", "Power Systems Design"]
    }
  ],
  skills: [
    {
      category: "Digital Engineering",
      items: ["Web Development (Front-End & Basic Full-Stack)", "UI/UX Design", "Responsive Web Design"]
    },
    {
      category: "Security & Logic",
      items: ["Penetration Testing", "Vulnerability Assessment", "Cyber Security Fundamentals", "Analytical Thinking"]
    },
    {
      category: "Programming & Tools",
      items: ["C++", "Java", "Python", "DFT (SIESTA Framework)"]
    },
    {
      category: "Leadership & Strategy",
      items: ["Team Building & Leadership", "Strong Communication Skills", "Customer Care", "Problem Solving"]
    }
  ],
  projects: [
    {
      title: "Cross Connect Africa Digital Ecosystem",
      description: "A centralized platform for experiential learning management. It streamlines participant portals, automated scheduling, and program scaling for high-impact leadership training.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      link: "https://cross-connect-africa.vercel.app/",
      tags: ["Business Systems", "EdTech", "Venture Strategy"]
    },
    {
      title: "Material Science Research: TiNiSn",
      description: "A First-Principles Investigation into the optical properties of Half-Heusler semiconductors using Density Functional Theory (DFT) and the SIESTA framework.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
      link: "#",
      tags: ["Computational Physics", "DFT", "SIESTA Framework"],
      hasReport: true
    }
  ],
  certificates: [
    {
      title: "Cyber Security Specialist Track",
      issuer: "Excel Global College",
      date: "2023",
      image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Full Stack Development",
      issuer: "Excel Global College",
      date: "2023",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
    }
  ],
  education: [
    {
      institution: "The Catholic University of Eastern Africa",
      degree: "Bachelor of Science in Physics",
      period: "2021 – 2025",
      location: "Nairobi, Kenya"
    },
    {
      institution: "Excel Global College",
      degree: "Cyber Security & Software Development",
      period: "2022 – 2023",
      location: "Nairobi, Kenya",
      details: ["Full Stack Development (HTML, CSS, JavaScript)", "Programming Languages: Java, C++", "Cyber Security Fundamentals"]
    },
    {
      institution: "Sunshine Secondary School",
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      period: "2014 – 2017",
      location: "Nairobi, Kenya"
    },
    {
      institution: "Riverbank Academy",
      degree: "Kenya Certificate of Primary Education (KCPE)",
      period: "2007 – 2013",
      location: "Nairobi, Kenya"
    }
  ],
  awards: [
    {
      title: "HoD, Youth Ministry",
      organization: "CITAM Parklands",
      description: "Directing youth engagement and spiritual development initiatives."
    },
    {
      title: "First Runners-Up",
      organization: "Ruck Walking Race Event",
      description: "Recognized for high endurance and excellence in competitive athletic events."
    },
    {
      title: "Academic Focus: Density Functional Theory",
      organization: "Physics Department",
      description: "Specialized focus on First-Principles Investigation of TiNiSn properties."
    }
  ]
};
