import { 
  Code2, Database, LayoutTemplate, Server, Settings, Smartphone, 
  Terminal, Globe, Cpu, Layers, GitBranch, Cloud
} from "lucide-react";

export const personalInfo = {
  name: "Sri Hari Hara Pandiyan",
  titles: [
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Problem Solver"
  ],
  tagline: "Building digital experiences that matter.",
  bio: "I am a passionate Full Stack Software Engineer with a strong foundation in designing and developing scalable web applications. I specialize in both front-end and back-end technologies, enabling me to build complete, user-centric solutions from concept to deployment. With experience in modern frameworks, databases, and cloud-based architectures, I focus on writing clean, efficient, and maintainable code. I enjoy solving complex problems, optimizing performance, and continuously learning new technologies to stay updated in the fast-evolving tech landscape. I am also a collaborative team player who values effective communication and strives to deliver high-quality software that creates real-world impact.",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com"
  },
  email: "sriharithesh@gmail.com"
};

export const skills = {
  frontend: [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Vue.js", level: 80 },
    { name: "Framer Motion", level: 85 }
  ],
  backend: [
    { name: "Node.js / Express", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Python / Django", level: 75 },
    { name: "GraphQL", level: 80 }
  ],
  tools: [
    { name: "Git / GitHub", level: 95 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Figma", level: 85 },
    { name: "Vite / Webpack", level: 90 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A comprehensive full-stack shopping application with real-time inventory, secure payment processing, and an intuitive admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "Real-time collaborative task management tool featuring drag-and-drop kanban boards, live updates, and team activity tracking.",
    tags: ["React", "Socket.io", "Express", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Highly detailed real-time weather tracking application utilizing multiple APIs to aggregate precise meteorological data with interactive charts.",
    tags: ["React", "Recharts", "OpenWeather API", "CSS Modules"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80"
  },
];

export const experience: {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}[] = [];

export const education = [
  {
    id: 1,
    degree: "B.Tech Computer Science and Engineering",
    school: "SRM Institute of Science and Technology, Trichy",
    period: "2023 - 2027",
    description: "Pursuing a Bachelor of Technology in Computer Science and Engineering with a focus on software development, web technologies, and computer systems."
  },
  {
    id: 2,
    degree: "Senior Secondary (Class XII)",
    school: "Oxford Matriculation Higher Secondary School",
    period: "2021 - 2023",
    description: "Completed Senior Secondary education with a focus on Science and Mathematics."
  },
  {
    id: 3,
    degree: "Secondary (Class X)",
    school: "Oxford Matriculation Higher Secondary School",
    period: "2019 - 2021",
    description: "Completed Secondary education with strong academic performance."
  }
];
