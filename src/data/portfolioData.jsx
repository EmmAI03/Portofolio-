import React from 'react';
import { ICONS } from './icons';
import { SKILL_ICONS } from './skillIcons.jsx';

// This file contains all the textual content for the portfolio.
export const personalInfo = {
  name: "Emmy Rahmaniasari",
  title: "Data Analysis & Project Management Professional",
  location: "South Jakarta",
  email: "emmyrahmania@gmail.com",
  phone: "+6287870637183",
  linkedin: "https://linkedin.com/in/emmyraniasa",
  // TAMBAHKAN OBJEK BARU DI SINI
  socialLinks: {
    instagram: "https://www.instagram.com/emmyyyra_/", // Ganti dengan URL Instagram Anda
    github: "https://github.com/EmmAI03", // Ganti dengan URL GitHub Anda
  },
  about: [
     "A highly adaptable and fast-learning recent graduate. Proven foundation in project management and data analysis.Passionate about technology and developing innovative solutions.Committed to driving project success."
  ],
  imageUrl: "/profil.png" 
};

export const competences = [
  { 
    icon: <ICONS.Code />, 
    title: "Data & Analytics", 
    description: "Analyzing data to derive actionable insights.",
    skills: [
        { name: 'Python', icon: <SKILL_ICONS.Python /> },
        { name: 'RStudio', icon: <SKILL_ICONS.RStudio /> },
        { name: 'Advanced Excel', icon: <SKILL_ICONS.Excel /> },
        { name: 'MongoDB', icon: <SKILL_ICONS.MongoDB /> },
    ]
  },
  { 
    icon: <ICONS.Clipboard />, 
    title: "Project Management", 
    description: "Tools for efficient and collaborative workflows.",
    skills: [
        { name: 'Asana', icon: <SKILL_ICONS.Asana /> },
        { name: 'Notion', icon: <SKILL_ICONS.Notion /> },
        { name: 'ClickUp' }, 
        { name: 'MS Teams' },
    ]
  },
  { 
    icon: <ICONS.Award />, 
    title: "Design & Development", 
    description: "Skills in UI design and web fundamentals.",
    skills: [
        { name: 'Figma', icon: <SKILL_ICONS.Figma /> },
        { name: 'Web Development' },
        { name: 'AWS', icon: <SKILL_ICONS.AWS /> },
    ]
  },
  { 
    icon: <ICONS.MessageSquare />, 
    title: "Professional Skills", 
    description: "Finance administration and multilingual capabilities.",
    skills: [
        { name: 'Financial Admin' }, 
        { name: 'English' }, 
        { name: 'Korean' },
        { name: 'Chinese (Basic)' },
    ]
  },
];


export const workExperience = [
  {
    role: "Agriculture Development Intern",
    company: "Lily Harvest – Malang",
    date: "July 2024 – Dec 2024",
    description: "Developed cultivation systems for 50 crop types and innovated with PGPB application to enhance strawberry harvest quality and value.",
  },
];

export const volunteerExperience = [
    {
        role: "Chief Organizer",
        company: "Dept. of Plant Pest and Disease",
        date: "Aug 2024 – Oct 2024",
        description: "Designed, executed, and managed all committee work for a cadre system event involving 142 participants and supervising 86 members across 8 divisions."
    },
    {
        role: "Head of Admin & Finance Bureau",
        company: "BEM Fakultas Pertanian UB",
        date: "Feb 2022 – Jan 2024",
        description: "Managed budgets, stabilized financial corporations, and organized administration for 24 main work programs, acting as a key liaison for student bureaucracy."
    },
    {
        role: "Treasurer",
        company: "Dies Natalis & Feast Of Agriculture",
        date: "Nov 2023 – Dec 2023",
        description: "Coordinated funding, prepared comprehensive budget plans, and managed all financial bookkeeping and tax responsibilities for the event."
    },
];

export const education = {
    institution: "Universitas Brawijaya",
    degree: "S1 Agroekoteknologi (Bachelor of Agroecotechnology)",
    date: "2021–2025",
    gpa: "3.67 GPA",
    // Tambahkan URL logo di sini
    logoUrl: "/logo-ub.png", // Ganti dengan path logo Anda
    // Tambahkan galeri foto kegiatan di sini
    images: [
        "/education/placeholder-1.png", // Ganti dengan path foto Anda
        "/education/placeholder-2.png",
        "/education/placeholder-3.png",
    ],
    awards: [
        "International Class Student Awardee in Agroecotechnology",
        "Best Staff of Administration and Finance Bureau, Rumah Inti Cabinet"
    ]
};

export const certifications = [
    // Tambahkan URL untuk setiap sertifikat
    { name: "Korea-ASEAN Digital Academy (KADA) Program", year: "2024", url: "/certificates/kada.pdf" }, // Ganti dengan path PDF Anda
    { name: "Microsoft Office Specialist: Excel Advanced", year: "2023", url: "/certificates/mos-excel.pdf" },
    { name: "Microsoft Office Specialist: PowerPoint", year: "2023", url: "/certificates/mos-ppt.pdf" },
    { name: "Microsoft Office Specialist: Word", year: "2023", url: "/certificates/mos-word.pdf" },
];

export const projects = [
    {
        title: "PGPB Innovation on Strawberry Cultivation",
        shortDescription: "Led a research and development project at Lily Harvest to apply Plant Growth-Promoting Bacteria (PGPB), resulting in improved crop quality and yield.",
        longDescription: "This project focused on agricultural innovation by implementing PGPB on local strawberry varieties in Malang. The research involved sample collection, bacterial isolation, lab testing, and field trials. The primary goal was to enhance plant resilience and fruit quality, which was successfully achieved, demonstrating a significant potential for commercial application.",
        images: [
            "/projects/placeholder-1.png",
            "/projects/placeholder-2.png",
        ],
        tags: ["R&D", "Agriculture Tech", "Data Analysis"]
    },
    {
        title: "Financial System Optimization for BEM",
        shortDescription: "As Head of Finance, successfully utilized 100% of the faculty budget and stabilized the endowment fund through meticulous planning and administration.",
        longDescription: "During my tenure as Head of the Admin & Finance Bureau, I was responsible for the complete financial lifecycle of 24 main work programs. This included budget planning, fund allocation, meticulous bookkeeping, and preparing accountability reports. A key achievement was stabilizing the student endowment fund, ensuring financial sustainability for future activities.",
        images: [
            "/projects/placeholder-3.png",
            "/projects/placeholder-4.png",
        ],
        tags: ["Financial Management", "Project Management", "Leadership"]
    },
    {
        title: "Digital Project Development Simulation",
        shortDescription: "Participated in the KADA program, gaining hands-on experience with DevOps, AI, and modern web development methodologies.",
        longDescription: "The Korea-ASEAN Digital Academy was an intensive program simulating a real-world digital project environment. Working in a collaborative team, we applied Agile methodologies to develop a web application prototype. My role involved data pipeline design and utilizing tools like Figma for UI/UX mockups, providing a comprehensive understanding of the modern tech stack.",
        images: [
            "/projects/placeholder-5.png",
            "/projects/placeholder-6.png",
        ],
        tags: ["DevOps", "AI", "Web Development", "Agile"]
    }
];

// TAMBAHKAN ARRAY BARU INI UNTUK GALERI
export const galleryItems = projects.map(p => ({
    image: p.images[0], // Mengambil gambar pertama dari setiap proyek
    text: p.title
}));

