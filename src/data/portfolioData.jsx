import React from 'react';
import { ICONS } from './icons';
import { SKILL_ICONS } from './skillIcons.jsx';

export const personalInfo = {
  name: "Emmy Rahmaniasari",
  title: "Data Analysis & Project Management Professional",
  email: "emmyrahmania@gmail.com",
  phone: "+6287870637183",
  linkedin: "https://linkedin.com/in/emmyraniasa",
  socialLinks: {
    instagram: "https://www.instagram.com/emmyrahma_/",
    github: "https://github.com/emmyraniasa",
  },
  about: [
    "A Bachelor's graduate in Agroecotechnology with a 3.67 GPA from Universitas Brawijaya.",
    "Specializing in agronomy research, organic farming systems, and sustainable agriculture.",
    "Experienced in organizational leadership, finance management, and strategic problem-solving."
  ],
  imageUrl: "/profil.png" 
};

export const competences = [
  { 
    icon: <ICONS.Code />, 
    title: "Data & Analytics", 
    description: "Analyzing data to derive actionable insights.",
    hardSkills: [
        { name: 'Python', icon: <SKILL_ICONS.Python /> },
        { name: 'RStudio', icon: <SKILL_ICONS.RStudio /> },
        { name: 'Statistics', icon: <SKILL_ICONS.RStudio /> }, // Added from CV
        { name: 'Advanced Excel', icon: <SKILL_ICONS.Excel /> },
    ],
    softSkills: [ { name: 'Problem Solving' }, { name: 'Critical Thinking' }, { name: 'Analytical Skills' } ]
  },
  { 
    icon: <ICONS.Clipboard />, 
    title: "Project Management", 
    description: "Tools for efficient and collaborative workflows.",
    hardSkills: [
        { name: 'Asana', icon: <SKILL_ICONS.Asana /> },
        { name: 'Notion', icon: <SKILL_ICONS.Notion /> },
        { name: 'ClickUp' }, 
        { name: 'MS Teams' },
    ],
    softSkills: [ { name: 'Leadership' }, { name: 'Coordination' }, { name: 'Decision Making' } ]
  },
  { 
    icon: <ICONS.Award />, 
    title: "Agronomy & Research", // New relevant category
    description: "Skills in agriculture technology and research.",
    hardSkills: [
        { name: 'Organic Farming' },
        { name: 'PGPB Application' },
        { name: 'Fertilizer Tech' },
    ],
    softSkills: [ { name: 'Research' }, { name: 'Field Practice' } ]
  },
  { 
    icon: <ICONS.MessageSquare />, 
    title: "Professional Skills", 
    description: "Finance administration and multilingual capabilities.",
    hardSkills: [ { name: 'Financial Admin' }, { name: 'Public Speaking' } ],
    softSkills: [ { name: 'English (TOEFL: 437)' }, { name: 'Indonesian (Native)' } ]
  },
];

// WORK EXPERIENCE UPDATED with Assistant roles
export const workExperience = [
  {
    role: "Agronomist (Intern)",
    company: "Lily Harvest – Malang",
    date: "July 2024 – Dec 2024",
    description: "Developed cultivation for ±50 types of horticultural crops in an organic greenhouse system, ensuring quality from seeding to market distribution."
  },
  {
    role: "Teaching Assistant - Integrated Pest Management",
    company: "Universitas Brawijaya",
    date: "Aug 2024 – Nov 2024",
    description: "Guided 22 students in laboratory and field practices, developing practical materials and supervising sessions to meet learning objectives."
  },
  {
    role: "Teaching Assistant - Fertilizer Technology",
    company: "Universitas Brawijaya",
    date: "Aug 2023 – Nov 2023",
    description: "Led project-based learning for an international class of 10 students, producing compost and liquid organic fertilizer prototypes with commercial potential."
  },
  {
    role: "Teaching Assistant - Statistics",
    company: "Universitas Brawijaya",
    date: "Aug 2022 – Nov 22",
    description: "Assisted 45 students in understanding basic statistical concepts through 14 practical sessions based on real-world case studies."
  },
];

// VOLUNTEER EXPERIENCE UPDATED with all new roles from CV
export const volunteerExperience = [
    {
        role: "Chief Organizer",
        company: "Proteksi - Dept. of Plant Pests and Diseases",
        date: "Aug 2024 – Oct 2024",
        description: "Designed and managed all committee work for a 3-month professional education event, overseeing 86 committee members across 8 divisions for 142 participants."
    },
    {
        role: "Sea Turtle Conservation Volunteer",
        company: "Involunteer - South Coast",
        date: "May 2024",
        description: "Cared for turtle hatchlings and participated in coastal conservation efforts, including mangrove planting at Banjulmati Beach."
    },
    {
        role: "Treasurer",
        company: "Poster, PKKMB & PPM Faculty of Agriculture",
        date: "July 2023 – Nov 2023",
        description: "Managed budget planning with 100% fund absorption and handled financial & tax reporting for ±70 faculty partners."
    },
];

export const organizationExperience = [
    {
        organization: "Plant Protection Student Association",
        date: "October 2023 – December 2024",
        roles: [
            {
                title: "Member & Chief Organizer",
                description: [
                    "Assisted in conducting professional orientation for the Plant Protection Department and maintained the association’s cadre system across two student batches by serving as Chief Organizer."
                ]
            }
        ]
    },
    {
        organization: "BEM Fakultas Pertanian UB",
        date: "February 2022 – January 2024",
        roles: [
            {
                title: "Head of Administration and Finance Bureau",
                description: [
                    "Part of the responsive Daily Management Board of the Eskalasi Performa Faculty of Agriculture Cabinet.",
                    "Acted as liaison between student bureaucracy, students, and both internal and external parties, while providing strategic advice.",
                    "Successfully utilized 100% of faculty budget allocations and stabilized the institution’s endowment fund.",
                    "Organized administration and finance for 24 main work programs across 8 ministries."
                ]
            },
            {
                title: "Administration Bureau Staff",
                description: [
                    "Active Administration Bureau Staff in the Rumah Inti Cabinet of Faculty of Agriculture.",
                    "Supported the Ministry of Advocacy and Student Welfare in administrative tasks for program implementation."
                ]
            }
        ]
    },
    {
        organization: "Eksekutif Mahasiswa Universitas Brawijaya",
        date: "October 2022 – December 2022",
        roles: [
            {
                title: "Intern Staff, Ministry of Internal Affairs",
                description: [
                    "Assisted in executing work programs related to community associations and cultural preservation alongside 44 regional forums at Universitas Brawijaya."
                ]
            }
        ]
    }
];

export const educationHistory = [
    {
        institution: "Universitas Brawijaya",
        degree: "Bachelor of Science in Agriculture (B.Sc.(Agr.))",
        focus: "Agroecology and Sustainable Agriculture",
        date: "Agu 2021 - Jan 2025",
        gpa: "IPK: 3.67/4",
        logoUrl: "/logo-ub.png", // Pastikan Anda punya logo ini di folder public
        description: "A comprehensive program focusing on bacteriology within plant pest and disease management, combining coursework, lab research, and field studies.",
        skills: ["Agriculture", "Agribusiness", "Sustainable Agriculture", "Agricultural Research", "Bacteriology"]
    },
    {
        institution: "International Islamic University Malaysia (IIUM)",
        degree: "Plant Sciences Exchange Program",
        focus: "International Relations & Development",
        date: "Mei 2024 - Mei 2024",
        logoUrl: "/logo-iium.png", // Anda perlu menyediakan logo ini
        description: "Explored plant biology, biodiversity, and sustainable practices through hands-on labs and field trips at IIUM’s Kuantan campus.",
        skills: ["International Relations", "International Development", "Agricultural Research"]
    },
    {
        institution: "Wageningen University & Research",
        degree: "Summer Course",
        focus: "Smart Farming System",
        date: "Agu 2023 - Agu 2023",
        logoUrl: "/logo-wageningen.png", // Anda perlu menyediakan logo ini
        description: "Engaged in a collaborative program exploring innovative smart farming technologies through lectures, field trips, and interdisciplinary projects.",
        skills: ["Sustainable Agriculture", "Smart Farming", "International Relations"]
    }
];

// CERTIFICATIONS UPDATED with new info
export const certifications = [
    { name: "Microsoft Office Specialist", issuer: "Trust Training Partners", year: "2024", url: "/certificates/mos.pdf" },
    { name: "Korea-ASEAN Digital Academy (KADA)", issuer: "KADA Program", year: "2024", url: "/certificates/kada.pdf" },
];

export const projects = [
    {
        title: "PGPB Innovation on Strawberry",
        shortDescription: "Led an R&D project to apply PGPB, resulting in improved crop quality and yield.",
        longDescription: "This project focused on agricultural innovation by implementing PGPB on local strawberry varieties in Malang. The research involved sample collection, bacterial isolation, lab testing, and field trials to enhance plant resilience and fruit quality.",
        images: ["/projects/placeholder-1.png", "/projects/placeholder-2.png"],
        tags: ["R&D", "Agriculture Tech", "Data Analysis"]
    },
    {
        title: "Financial System Optimization for BEM",
        shortDescription: "Successfully utilized 100% of the faculty budget and stabilized the endowment fund.",
        longDescription: "As Head of the Admin & Finance Bureau, I was responsible for the complete financial lifecycle of 24 main work programs, including budget planning, fund allocation, and preparing accountability reports.",
        images: ["/projects/placeholder-3.png", "/projects/placeholder-4.png"],
        tags: ["Financial Management", "Project Management", "Leadership"]
    },
    {
        title: "Fertilizer Tech Project-Based Learning",
        shortDescription: "Led an international class in producing commercially viable organic fertilizer prototypes.",
        longDescription: "Guided 10 international students through 12 practical sessions on fertilizer technology, covering theory, application, and analysis, culminating in the creation of market-ready prototypes.",
        images: ["/projects/placeholder-5.png", "/projects/placeholder-6.png"],
        tags: ["Education", "Prototyping", "Team Leadership"]
    }
];
