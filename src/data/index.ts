import {
  Project,
  Experience,
  Education,
  Certification,
  Achievement,
  SkillCategory,
  SocialLink,
} from "@/types";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export const personalInfo = {
  name: "Jeffrey Hasan C",
  title: "Full-Stack Developer",
  email: "jefyjery10@gmail.com",
  phone: "8220742419",
  location: "Nagercoil, India",
  profileImage: "/Profile/Jeffrey.png",
  about:
    "Passionate full-stack developer and Computer Science graduate with extensive expertise in modern web technologies. I blend creativity with technical precision to build innovative digital solutions that push boundaries. My experience spans front-end and back-end development, with a focus on creating seamless, user-centered applications.",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/jeffreyhasan10",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/jeffreyhasan",
    icon: "Linkedin",
  },
  {
    platform: "Medium",
    url: "https://medium.com/@jefyjery10",
    icon: "FileText",
  },
  {
    platform: "Email",
    url: "mailto:jefyjery10@gmail.com",
    icon: "Mail",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Front-End",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Back-End",
    skills: ["Node.js", "Java", "Express.js", "RESTful APIs"],
  },
  {
    category: "Database",
    skills: ["MySQL"],
  },
  {
    category: "Design",
    skills: ["Adobe Photoshop"],
  },
  {
    category: "Other",
    skills: ["Python", "OpenCV", "IoT (ESP32, MPU6050, ThingSpeak)"],
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    company: "Mirtz & Fritz",
    role: "Front-End Developer",
    duration: "June 01, 2024 - Present",
    location: "Onsite",
    type: "Full-time",
    description: [
      "Built responsive web applications for Someli AI's social media content generation platform.",
      "Used Vue.js, Nuxt.js, TypeScript, Tailwind CSS, and JavaScript for dynamic, AI-powered tools.",
    ],
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    id: 2,
    company: "AK Infopark",
    role: "Web Developer Intern",
    duration: "March 13 - April 12, 2024",
    location: "Onsite",
    type: "Internship",
    description: [
      "Developed a React-based Nike shoe e-commerce platform.",
      "Implemented RESTful API integration (99% accuracy) and optimized performance (25% load time reduction).",
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "RESTful APIs"],
    github:
      "https://github.com/jeffreyhasan10/Portfolio-Projects/tree/main/5-AKinfopark/nike-ecommerce",
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Nehru Institute of Engineering and Technology",
    degree: "Bachelor of Computer Science and Engineering",
    duration: "2020-2024",
    grade: "7.84 CGPA",
  },
  {
    id: 2,
    institution: "Carmel Hr. Sec. School",
    degree: "State Board of Tamil Nadu (HSC)",
    duration: "2018-2020",
    grade: "61%",
  },
  {
    id: 3,
    institution: "CMC Matric. Hr. Sec. School",
    degree: "State Board of Tamil Nadu (SSLC)",
    duration: "2017-2018",
    grade: "90%",
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Programming in Java",
    issuer: "NPTEL",
    date: "April 2024",
    score: "54%",
  },
  {
    id: 2,
    name: "Mastering Visual Studio Code",
    issuer: "Udemy",
    date: "August 2023",
  },
  {
    id: 3,
    name: "Agile Scrum Advanced Software Development & Program Management",
    issuer: "Udemy",
    date: "August 2023",
  },
  {
    id: 4,
    name: "SQL Programming Essentials",
    issuer: "Udemy",
    date: "July 2023",
  },
  {
    id: 5,
    name: "Introduction to Cloud",
    issuer: "IBM",
    date: "May 2023",
  },
  {
    id: 6,
    name: "Full Web Development",
    issuer: "Infosys Springboard",
    date: "November 2022",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "IPL 2025 Live Dashboard",
    description:
      "Dynamic web app for real-time IPL 2025 insights (match tracking, stats, predictions).",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/jeffreyhasan10/ipl-2025-dashboard",
    live: "https://ipl-2025-dashboard.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Mary Tailoring & Garments",
    description:
      "Premium uniform manufacturer website with responsive, SEO-friendly design.",
    technologies: ["React", "React Router", "Tailwind CSS"],
    github: "https://github.com/jeffreyhasan10/mary-tailoring-garments",
    live: "https://mary-tailoring-garments.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "MomCare",
    description:
      "A supportive digital platform for new and expectant mothers, featuring health tracking, expert-backed resources, and a vibrant community.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/jeffreyhasan10/Momcare",
    live: "https://momcare-ten.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Student Attendance Monitoring System Using Deep Learning",
    description:
      "AI-powered attendance system with facial recognition and geolocation.",
    technologies: [
      "Python",
      "OpenCV",
      "Haar Cascade",
      "LBPH algorithm",
      "MySQL",
    ],
    github:
      "https://github.com/jeffreyhasan10/Portfolio-Projects",
  },
  {
    id: 5,
    title: "AI-Powered Nutrition Assistant and Step Tracker (Foody Buddy)",
    description:
      "Mobile app with AI-driven meal planning and IoT fitness tracking.",
    technologies: [
      "Python",
      "Vector Embeddings",
      "MPU6050",
      "ESP32",
      "ThingSpeak IoT",
    ],
    github:
      "https://github.com/jeffreyhasan10/Portfolio-Projects/tree/main/FoodyBuddy-main",
  },
  {
    id: 6,
    title: "Nike E-commerce Platform",
    description: "React-based e-commerce site with RESTful API integration.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    github:
      "https://github.com/jeffreyhasan10/Portfolio-Projects/tree/main/5-AKinfopark/nike-ecommerce",
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title:
      "IBM-Recognized Machine Learning Project: 'Airline Passenger Satisfaction Identification'",
    description: [
      "Developed and deployed using ML on IBM Cloud; selected as a top project by Tamil Nadu Skill Development Corporation.",
      "Presented to IBM officials; showcased skills in ML, customer data analysis, and personalization.",
    ],
    // link: "https://github.com/naanmudhalvan-SI/IBM--18463-1682491867",
  },
];
