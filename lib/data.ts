export type SocialLink = {
  name: string;
  href: string;
  label: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageOnLeft: boolean;
  github: string;
  accent: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  icon: "frontend" | "backend" | "tools";
  skills: Skill[];
};

export const profile = {
  firstName: "Stevyne",
  fullName: "RABEARINJATOVO Stevyne Ny Aina Samuel Patricino",
  shortName: "Stevyne Rabearinjatovo",
  role: "Full-Stack Web Developer",
  title: "Software Engineer",
  email: "rabearinjatovostevyne@gmail.com",
  location: "Madagascar",
  tagline:
    "Specializing in Python backend development and React.js frontend engineering. I build fast, scalable, and user-friendly web applications — turning complex ideas into clean, efficient digital solutions.",
  contactPitch:
    "I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Have a project in mind? Let's talk!",
};

export const socials: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/Stevyne", label: "GH" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/st%C3%A8vyne-ny-aina-samuel-patricino-rabearinjatovo-585636384/",
    label: "IN",
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/stevyne.rabearinjatovo.5",
    label: "FB",
  },
];

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Expense Manager",
    description:
      "A modern web application designed to help users efficiently track and manage their daily expenses. Intuitive interface for recording transactions, monitoring spending habits, and organizing financial data in a clean, user-friendly way.",
    tags: ["React", "Django", "Modern UI/UX"],
    imageOnLeft: false,
    github: "https://github.com/Stevyne/Projet-Expense-Manager",
    accent: "from-violet-500/30 via-fuchsia-500/10 to-transparent",
  },
  {
    id: 2,
    title: "Game Project",
    description:
      "A 2D game development project built for an engaging gameplay experience. Includes core mechanics such as character movement, collision detection, animations, and dynamic environments.",
    tags: ["Python", "Game Dev", "Fun"],
    imageOnLeft: true,
    github: "https://github.com/Stevyne/Game",
    accent: "from-indigo-500/30 via-purple-500/10 to-transparent",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "Python", level: 90 },
      { name: "REST API", level: 80 },
    ],
  },
  {
    title: "Outils",
    icon: "tools",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 50 },
    ],
  },
];
