
import { CVData } from './types';

export const cvData: CVData = {
  personal: {
    name: "Kevin Muhoro",
    title: "Founder & Strategic Analyst | Physics Graduate | Cybersecurity Specialist",
    email: "kevinmuhoro@proton.me",
    phone: "+254728999073",
    location: "Nairobi, Kenya",
    profileImage: "https://i.imgur.com/pADVOmg.jpg",
    bio: "I am a driven and visionary individual with the mind of an entrepreneur. Having just completed my degree in Physics and awaiting graduation, I’m passionate about turning ideas into impactful ventures. I’m actively building a premium mobile car detailing business and exploring opportunities in AI, cybersecurity, and team-building. I bring a unique mix of analytical thinking, creativity, and initiative to everything I do. Faith-centered and purpose-driven, I value excellence, continuous growth, and creating solutions that make a difference.",
    socials: {
      linkedin: "https://linkedin.com/in/kevin-muhoro",
      website: "https://crossconnectafrica.com"
    }
  },
  experiences: [
    {
      company: "Cross Connect Africa",
      role: "Founder & Lead Facilitator",
      period: "01/2024 – Present",
      location: "Nairobi, Kenya",
      description: [
        "Architected and launched a premium team-building and experiential learning platform.",
        "Facilitated high-impact leadership workshops, driving significant improvements in collaboration for 500+ professionals.",
        "Integrating tactical survival principles and safety protocols into outdoor corporate training programs."
      ],
      skills: ["Entrepreneurship", "Strategic Leadership", "Venture Scaling", "Outdoor Education"]
    },
    {
      company: "CITAM Parklands",
      role: "Head of Missions",
      period: "2022 – 2023",
      location: "Nairobi, Kenya",
      description: [
        "Orchestrated large-scale community impact projects and cross-functional outreach strategies.",
        "Refined professional resilience by managing complex logistics and multi-disciplinary teams in high-pressure environments.",
        "Developed a 'mission-first' professional mindset, prioritizing objective achievement and stakeholder alignment."
      ],
      skills: ["Logistics Strategy", "Stakeholder Management", "Crisis Resolution", "Team Orchestration"]
    },
    {
      company: "CITAM Parklands",
      role: "Head of Department - Youth Ministry",
      period: "2020 – 2022",
      location: "Nairobi, Kenya",
      description: [
        "Spearheaded strategic development for youth engagement, managing engagement for 500+ active members.",
        "Built the core of my professional discipline and emotional intelligence through intensive mentoring and organizational strategy.",
        "Mastered the art of conflict resolution and leadership transition planning, essential for any corporate ecosystem."
      ],
      skills: ["Organizational Strategy", "Emotional Intelligence", "Conflict Resolution", "Public Speaking"]
    },
    {
      company: "Independent Consultant",
      role: "Web Development & Penetration Testing",
      period: "2023 – Present",
      location: "Nairobi / Remote",
      description: [
        "Executing regular web development projects for diverse clients, focusing on clean code and performance.",
        "Performing rigorous penetration tests and vulnerability assessments to secure digital assets and prevent data breaches."
      ],
      skills: ["Front End Coding", "Penetration Testing", "Security Auditing", "Problem-Solving"]
    },
    {
      company: "Specialized Power System Limited",
      role: "Engineering Consultant (Technical Attachment)",
      period: "2024",
      location: "Nairobi",
      description: [
        "Applied electromagnetic logic to optimize industrial distribution board configurations.",
        "Conducted technical analysis on power control systems, bridging the gap between theoretical physics and industrial application."
      ],
      skills: ["Industrial Engineering", "Analytical Logic", "Power Systems Design"]
    }
  ],
  skills: [
    {
      category: "Digital Engineering",
      items: ["Front End Coding", "Web Design", "UI/UX Design", "C++", "Java"]
    },
    {
      category: "Security & Logic",
      items: ["Penetration Testing", "Cyber Security", "Vulnerability Assessment", "Analytical Research"]
    },
    {
      category: "Tactical & Safety",
      items: ["Fire Marshal Training", "Emergency Response", "First Aid Training", "Outdoor Survival"]
    },
    {
      category: "Executive Leadership",
      items: ["Team Building", "Strategic Management", "Mission-Driven Leadership", "Organizational Strategy"]
    }
  ],
  projects: [
    {
      title: "Cross Connect Africa Digital Ecosystem",
      description: "A centralized platform for experiential learning management. It streamlines participant portals, automated scheduling, and program scaling for high-impact leadership training. Built to facilitate growth for 500+ participants simultaneously.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      link: "https://cross-connect-africa.vercel.app/",
      tags: ["Business Systems", "EdTech", "Venture Strategy"]
    },
    {
      title: "Material Science Research: TiNiSn",
      description: "A First-Principles Investigation into the optical properties of Half-Heusler semiconductors using Density Functional Theory (DFT) and the SIESTA framework. Focused on dielectric function analysis and band gap mapping for solar applications.",
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
      degree: "Bachelors of Science in PHYSICS",
      period: "2021 – 2025",
      location: "Nairobi, Kenya"
    },
    {
      institution: "Excel Global College",
      degree: "Full Stack Development & Cyber Security",
      period: "2022 – 2023",
      location: "Nairobi, Kenya",
      details: ["HTML, CSS, JavaScript", "Java, C++", "Cyber Security"]
    },
    {
      institution: "Sunshine Secondary School",
      degree: "Kenya Certificate of Secondary Education",
      period: "2014 – 2017",
      location: "Nairobi, Kenya"
    },
    {
      institution: "Riverbank Academy",
      degree: "Kenya Certificate of Primary Education",
      period: "2007 – 2013",
      location: "Nairobi, Kenya"
    }
  ],
  awards: [
    {
      title: "HoD Youth Ministry",
      organization: "CITAM Parklands",
      description: "Leading and directing youth engagement and spiritual development initiatives."
    },
    {
      title: "First Runners Up",
      organization: "Ruck Events",
      description: "Recognized for excellence in the competitive walking race."
    },
    {
      title: "Density Functional Theory Research",
      organization: "CUEA Physics Department",
      description: "Academic recognition for research depth in semiconductor properties."
    }
  ]
};
