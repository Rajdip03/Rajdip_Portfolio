export const personalInfo = {
  name: "Rajdip Mondal",
  descriptors: ["MERN Stack Developer", "Java Programmer", "Hungry Learner"],
  github: "https://github.com/Rajdip03",
  linkedin: "https://www.linkedin.com/in/rajdip-mondal-54a877296",
};

export const skills = [
  {
    id: 1,
    title: "Java",
    icon: "☕",
    description:
      "Proficient in core Java, data structures, algorithms.",
    category: "technical",
  },
  {
    id: 2,
    title: "Object-Oriented Programming",
    icon: "🧩",
    description:
      "Deep understanding of OOP principles — encapsulation, inheritance, polymorphism, and abstraction.",
    category: "technical",
  },
  {
    id: 3,
    title: "MERN Stack",
    icon: "⚛️",
    description:
      "Full-stack development with MongoDB, Express.js, React.js, and Node.js — building dynamic, scalable web applications end-to-end.",
    category: "technical",
  },
  {
    id: 4,
    title: "Disciplined Workflow",
    icon: "🎯",
    description:
      "A structured and consistent approach to development — from planning and version control to testing and deployment.",
    category: "soft",
  },
  {
    id: 5,
    title: "Quick Learner",
    icon: "🚀",
    description:
      "Passionate about staying current with emerging technologies. Rapidly adapts to new tools, frameworks, and paradigms.",
    category: "soft",
  },
];

export const experiences = [
  // {
  //   id: 1,
  //   role: "Your Role Title",
  //   company: "Company Name",
  //   duration: "Jan 2025 — Present",
  //   description:
  //     "Describe your key responsibilities, technologies used, and impact. Replace this placeholder with your actual experience.",
  //   techStack: ["React", "Node.js", "MongoDB"],
  // },
  // {
  //   id: 2,
  //   role: "Previous Role",
  //   company: "Previous Company",
  //   duration: "Jun 2024 — Dec 2024",
  //   description:
  //     "Another experience entry. Update with your internship, freelance, or project-based work details.",
  //   techStack: ["Java", "Spring Boot", "MySQL"],
  // },
  {
    id: 1,
    role: "Product Implementation Trainee",
    company: "Uphead Management Consulting",
    duration: "Feb 2026 — May 2026",
    description:
      "As a highly disciplined Software Engineer and B.Tech CSE graduate, I specialized in crafting responsive, high-performance web applications during my internship. With a strong foundation in Java and JavaScript, I excelled in building dynamic user interfaces using React.js, Next.js, and Tailwind CSS. My professional experience spanned across frontend development and QA testing on many live projects, where I successfully managed client communications to translate business needs into scalable technical solutions. I am a continuous learner who adapts quickly to new technologies and is driven to deliver seamless, bug-free user experiences.",
    techStack: ["Frontend Development","React js", "TypeScript", "Next js", "Tailwind CSS", "QA Testing", "Client Communication", "Manual Testing","Functional Testing", "Test Cases Generation"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Medicare — Smart Health Care Platform",
    shortTitle: "Medicare",
    description:
      "A robust, role-based full-stack healthcare ecosystem built to streamline hospital operations and improve patient-doctor connectivity. The platform features separate secure modules for Patients, Doctors, and Administrators, integrating automated communications, telehealth features, and AI-driven assistance. Key Features:Patient Portal: Secure registration/login with email notifications, specialty/symptom-based doctor search, automated appointment & lab test booking, integrated video calling, online payments, and download-ready digital prescriptions.Doctor Portal: Dashboard to manage assigned appointments, profile customizer, seamless PDF/image prescription uploads, and integrated AI assistant for system and medical-related queries.Admin Dashboard: Comprehensive hospital management tools to add/update doctor profiles, handle lab test inventories, manage hospital ward/bed allocations, track bookings, and oversee all uploaded prescriptions.A comprehensive smart healthcare platform that connects patients with healthcare providers. Features include appointment booking, medical records management, real-time consultations, and an intelligent symptom checker.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Rajdip03",
    live: "#",
    gradient: "from-emerald-500 to-cyan-500",
    accentColor: "#10b981",
  },
  {
    id: 2,
    title: "AI Resume Builder",
    shortTitle: "AI Resume Builder",
    description:
      "An A modern full-stack application designed to automate professional resume creation. By leveraging AI content generation and automated image processing, it removes the hassle of manual writing and formatting, providing job seekers with optimized resumes and live web-sharing capabilities.Key Features:AI Content Generation: Automates professional content creation and optimizes resume bullet points using the Google Gemini AI.Automated Background Removal: Integrated image processing tools that instantly clean profile pictures for a polished, professional look.Live URL Sharing: Generates unique, shareable web links for recruiters to view resumes instantly online alongside traditional real-time previews.Interactive Editor: Features an intuitive management dashboard to seamlessly create, edit, or delete personal information, experience, education, and skills sections.intelligent resume builder powered by AI that helps users create professional, ATS-friendly resumes. Features include AI-powered content suggestions, multiple templates, real-time preview, and PDF export.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
    github: "https://github.com/Rajdip03",
    live: "#",
    gradient: "from-violet-500 to-fuchsia-500",
    accentColor: "#8b5cf6",
  },
  {
    id: 3,
    title: "Portfolio Website",
    shortTitle: "Portfolio Website",
    description: "A modern, dynamic personal portfolio built to showcase my projects, experience, and skills. Features stunning animations, dark/light mode, a custom cursor, and a functional contact form.",
    techStack: ["HTML", "CSS3", "JavaScript", "React js"],
    github: "https://github.com/Rajdip03",
    live: "#",
    gradient: "from-yellow-400 to-orange-500",
    accentColor: "#f59e0b",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
