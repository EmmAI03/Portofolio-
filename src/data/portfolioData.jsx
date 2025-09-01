import React from 'react';
import { ICONS } from './icons';
import { SKILL_ICONS } from './skillIcons.jsx';

export const personalInfo = {
  name: "Emmy Rahmaniasari",
  // Headline yang lebih kuat dan langsung ke intinya
  title: "Bachelor of Agriculture | Data Analysis | Community Leadership",
  email: "emmyrahmania@gmail.com",
  phone: "+6287870637183",
  linkedin: "https://linkedin.com/in/emmyraniasa",
  socialLinks: {
    instagram: "https://www.instagram.com/emmyrahma_/",
    github: "https://github.com/emmyraniasa",
  },
  // Narasi singkat untuk bagian "About Me"
  about: [
    "Hi, I'm Emmy. A Bachelor of Agriculture with a passion for leveraging technology and data to create sustainable and efficient agricultural solutions.",
    "My work philosophy is rooted in user-centered problem-solving and clear communication, ensuring every project not only meets its goals but also delivers real-world impact."
  ],
  imageUrl: "/profil.png" 
};

export const techStack = [
    { name: 'React', logo: '/logos/react.png' },
    { name: 'JavaScript', logo: '/logos/javascript.png' },
    { name: 'Node.js', logo: '/logos/nodejs.png' },
    { name: 'Python', logo: '/logos/python.png' },
    { name: 'RStudio', logo: '/logos/rstudio.png' },
    { name: 'MongoDB', logo: '/logos/mongodb.png' },
    { name: 'MySQL', logo: '/logos/mysql.png' },
    { name: 'AWS', logo: '/logos/aws.png' },
    { name: 'Figma', logo: '/logos/figma.png' },
    { name: 'Tailwind CSS', logo: '/logos/tailwind.png' },
    { name: 'Asana', logo: '/logos/asana.png' },
    { name: 'ClickUp', logo: '/logos/clickup.png' },
    { name: 'MS Office', logo: '/logos/office.png' },
    { name: 'MS Teams', logo: '/logos/teams.png' },
    { name: 'Zoom', logo: '/logos/zoom.png' },
];
export const competences = [
  { 
    icon: <ICONS.Code />, 
    title: "Data & Analytics", 
    description: "Analyzing data to derive actionable insights.",
    hardSkills: [
        { name: 'Python', icon: <SKILL_ICONS.Python /> },
        { name: 'RStudio', icon: <SKILL_ICONS.RStudio /> },
        { name: 'Statistics', icon: <SKILL_ICONS.RStudio /> },
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
    title: "Agronomy & Research",
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
        date: "Agu 2021 - Jan 2025",
        gpa: "IPK: 3.67/4",
        logoUrl: "/logo-ub.png",
        description: "Bachelor of Agroecotechnology (Plant Pests and Diseases - Bacteriology) at Universitas Brawijaya : Dive into a comprehensive program at UB’s Faculty of Agriculture in Malang, focusing on bacteriology within plant pest and disease management, combining coursework, lab research, and field studies to develop skills in identifying, controlling, and preventing bacterial crop diseases for sustainable agriculture.",
        skills: ["Agriculture", "Agribusiness", "Sustainable Agriculture", "Research", "Bacteriology"],
        images: ["/education/ub-1.png", "/education/ub-2.png"]
    },
    {
        institution: "International Islamic University Malaysia",
        degree: "Plant Sciences Exchange Program",
        date: "Mei 2024",
        logoUrl: "/logo-iium.png",
        description: "Explored plant biology, biodiversity, and sustainable practices through hands-on labs and field trips at IIUM’s Kuantan campus.",
        skills: ["International Relations", "Agricultural Research"],
        images: ["/education/iium-1.png"]
    },
    {
        institution: "Wageningen University & Research",
        degree: "Summer Course: Smart Farming System",
        date: "Agu 2023",
        logoUrl: "/logo-wageningen.png",
        description: "Summer Course in Smart Farming System at UB, IPB University, and Wageningen University : Engage in a collaborative program exploring innovative smart farming technologies through lectures, field trips to dairy farms, and interdisciplinary projects, fostering global networking and practical skills for sustainable agriculture.",
        skills: ["Sustainable Agriculture", "Smart Farming"],
        images: ["/education/wur-1.png"]
    }
];

export const certifications = [
    { 
        name: "Microsoft Office Specialist", 
        issuer: "Trust Training Partners", 
        year: "2024", 
        url: "/certificates/mos.pdf",
        images: ["/certificates/mos-cert.png"] // Tambahkan path gambar sertifikat
    },
    { 
        name: "Korea-ASEAN Digital Academy (KADA)", 
        issuer: "KADA Program", 
        year: "2024", 
        url: "/certificates/kada.pdf",
        images: ["/certificates/kada-cert.png"]
    },
];

// PROYEK DIPERBARUI DENGAN FORMAT STUDI KASUS
export const projects = [
    {
        title: "PGPB Innovation on Strawberry",
        shortDescription: "Led an R&D project to apply PGPB, resulting in improved crop quality and yield.",
        images: ["placeholder-1.png", "placeholder-2.png"],
        tags: ["R&D", "Agriculture Tech", "Data Analysis"],
        challenge: "Local strawberry varieties in Malang faced issues with inconsistent fruit quality and susceptibility to disease, impacting their market value.",
        myRole: "As the lead agronomist on this R&D project, I was responsible for the entire experimental lifecycle, from research design and bacterial isolation to field implementation and data analysis.",
        solution: "We developed and applied a consortium of Plant Growth-Promoting Bacteria (PGPB) tailored to the local ecosystem. The process involved lab testing to identify the most effective strains and creating a stable liquid organic fertilizer for easy application.",
        impact: "The PGPB application led to a measurable improvement in fruit resilience and a more consistent harvest quality, demonstrating a viable and sustainable solution with commercial potential.",
        techStack: ["R&D", "Bacteriology", "Field Trials", "Data Analysis"]
    },
    {
        title: "Financial System Optimization for BEM",
        shortDescription: "Successfully utilized 100% of the faculty budget and stabilized the endowment fund.",
        images: ["placeholder-3.png", "placeholder-4.png"],
        tags: ["Financial Management", "Project Management", "Leadership"],
        challenge: "The student executive board (BEM) faced challenges with budget tracking, fund allocation, and ensuring financial accountability across 24 different work programs.",
        myRole: "As the Head of the Administration and Finance Bureau, I acted as the central financial controller, responsible for budgeting, reporting, and strategic financial planning.",
        solution: "I implemented a centralized system for proposals and accountability reports using project management tools. This streamlined communication between 8 ministries and ensured all financial activities were transparent and properly documented.",
        impact: "Achieved 100% utilization of the faculty budget for two consecutive years and successfully stabilized the student endowment fund, ensuring long-term financial health for the organization.",
        techStack: ["Financial Planning", "Budgeting", "MS Office", "Team Leadership"]
    },
     {
        title: "Statistical Analysis of Plant Growth",
        shortDescription: "Utilized RStudio to analyze experimental data and visualize the impact of various treatments on plant growth parameters.",
        images: [
            "r-boxplot-1.png", // Ganti dengan path gambar Anda
            "r-boxplot-2.png", // Ganti dengan path gambar Anda
            "r-boxplot-3.png"  // Ganti dengan path gambar Anda
        ],
        tags: ["RStudio", "Data Visualization", "Statistics"],
        challenge: "Raw experimental data from an agricultural trial needed to be processed and analyzed to determine if different treatments had a statistically significant effect on key growth metrics like flower count, leaf count, and plant height.",
        myRole: "As the Data Analyst, I was responsible for the entire analysis pipeline: data cleaning, transformation, visualization, and statistical interpretation using RStudio and the ggplot2 package.",
        solution: "I created a series of comprehensive boxplots to visualize the distribution and variance of each growth parameter across different treatments and observation times. This visual approach made it easy to identify potential trends and outliers before conducting formal statistical tests (like ANOVA).",
        impact: "The visualizations provided clear, immediate insights into the data, showing which treatments were most effective over time. This data-driven evidence was crucial for making informed recommendations for future research and practical application.",
        techStack: ["RStudio", "ggplot2", "Data Visualization", "Statistical Analysis"]
    },
    {
        title: "Land Suitability Analysis for Shallots",
        shortDescription: "Conducted spatial analysis using ArcGIS to map land suitability for shallot cultivation in Batu City, East Java.",
        images: [
            "peta-bawang-merah.png", // Ganti dengan path gambar Anda
        ],
        tags: ["ArcGIS", "Spatial Analysis", "GIS"],
        challenge: "Farmers in the Junrejo sub-district needed to identify optimal locations for shallot cultivation to increase yield and reduce risks. This required a comprehensive analysis of various environmental factors.",
        myRole: "As the GIS Analyst, I was responsible for collecting spatial data, performing weighted overlay analysis, and creating the final suitability map. This included processing data on rainfall, soil type, and land elevation.",
        solution: "Using ArcGIS, I created a detailed map that classified land into four suitability categories: Highly Suitable (S1), Moderately Suitable (S2), Marginally Suitable (S3), and Not Suitable (N). This provided a clear visual guide for agricultural planning.",
        impact: "The resulting map serves as a crucial decision-making tool for local farmers and agricultural stakeholders, enabling them to optimize land use, improve crop management strategies, and potentially increase overall productivity in the region.",
        techStack: ["ArcGIS", "GIS", "Spatial Data", "Cartography"]
    },
    {
    title: "Insect Family Identification & Collection",
    shortDescription: "A comprehensive entomology project involving field collection, preservation, and taxonomic identification of various insect orders and families.",
    images: [
        "entomology-collection.png", // Ganti dengan path gambar Anda
        "entomology-collection-2.png", // Ganti dengan path gambar Anda
        "entomology-collection-3.png"  // Ganti dengan path gambar Anda
    ],
    tags: ["Entomology", "Taxonomy", "Biology", "Research"],
    challenge: "To build a comprehensive insect collection representing diverse orders and families, requiring meticulous field collection techniques and precise taxonomic identification skills.",
    myRole: "As the lead researcher, I managed the entire project lifecycle, from planning collection trips and preserving specimens to identifying each insect to the family level using taxonomic keys and microscopy.",
    solution: "A systematic approach was employed, involving various trapping methods for collection, proper pinning and mounting for preservation, and detailed morphological analysis for identification. The final collection was organized taxonomically in insect boxes.",
    impact: "This project resulted in a well-curated entomological collection that serves as a valuable reference. It demonstrates strong practical skills in scientific research, specimen preservation, and taxonomic identification.",
    techStack: ["Microscopy", "Taxonomic Keys", "Field Research", "Specimen Preservation"]
},
 {
        title: "UB Seagrology: Marine Farming Innovation",
        shortDescription: "A conceptual project for the PKM-GFK competition proposing an integrated marine farming system to enhance coastal food security.",
        images: [ "/projects/ub-seagrology.png" ],
        tags: ["Innovation", "Agro-Maritime", "Sustainability"],
        challenge: "To develop a futuristic written concept that addresses Indonesia's food security challenges by leveraging untapped marine agricultural potential, specifically through seagrass and seaweed cultivation.",
        myRole: "As the project leader, I orchestrated the conceptualization, research, and writing of the proposal. My role involved integrating agro-maritime science with sustainable development principles to create a cohesive and innovative solution.",
        solution: "The 'UB Seagrology' concept proposed a closed-loop, multi-trophic aquaculture system that cultivates seagrass and seaweed alongside marine fauna. This system was designed to maximize productivity, minimize environmental impact, and create economic opportunities for coastal communities.",
        impact: "The project was successfully submitted to the Dekan Cup, showcasing strong conceptual thinking, scientific writing, and the ability to formulate innovative solutions for complex national-level problems.",
        techStack: ["Conceptual Design", "Scientific Writing", "Research", "Sustainable Development"]
    },
    {
        title: "KADA Capstone: Project Management Mockup",
        shortDescription: "Developed a functional UI mockup of a project management tool, similar to Trello and Monday.com, as a capstone project for the Korea-ASEAN Digital Academy.",
        images: [ "/projects/kada-mockup.png" ],
        tags: ["UI/UX", "Figma", "Project Management"],
        challenge: "To apply theoretical knowledge of digital project management into a tangible product. The goal was to design a user-friendly interface that incorporated key features of modern collaborative platforms.",
        myRole: "As the lead designer and project manager, I was responsible for the entire design lifecycle, from initial wireframing and feature planning in Figma to creating the final high-fidelity mockup and presenting the concept.",
        solution: "A clean and intuitive dashboard was designed, featuring drag-and-drop task cards, customizable workflows, and team collaboration widgets. The design prioritized clarity and ease of use, inspired by industry-leading tools. The project can be viewed on GitHub.",
        impact: "This capstone project successfully demonstrated a strong understanding of UI/UX principles and the practical application of project management concepts, earning positive feedback from mentors.",
        techStack: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Agile Methodology"]
    },
    {
        title: "Plant Pathogen Identification",
        shortDescription: "A laboratory-based project focused on the microscopic and macroscopic identification of key pathogens causing diseases in agricultural crops.",
        images: [ "/projects/pathogen-microscope.png" ],
        tags: ["Bacteriology", "Microscopy", "Lab Research"],
        challenge: "To accurately identify various plant pathogens (bacteria, fungi) from infected plant samples, which is a critical first step in diagnosing and managing crop diseases effectively.",
        myRole: "I conducted the hands-on laboratory work, which included sample preparation, culturing microorganisms, performing microscopic analysis, and documenting morphological characteristics to identify pathogens to the genus or species level.",
        solution: "Standard laboratory protocols were meticulously followed, including slide preparation, staining techniques, and observation under a compound microscope. Macroscopic characteristics were observed from pure cultures grown on agar plates.",
        impact: "This project sharpened my practical laboratory skills and deepened my expertise in plant bacteriology and pathology, reinforcing my ability to conduct precise scientific analysis.",
        techStack: ["Microscopy", "Aseptic Technique", "Pathogen Culturing", "Scientific Documentation"]
    },
    {
        title: "KKN UB: Community Nutrition Project",
        shortDescription: "Led a community service project as part of the 'Mahasiswa Membangun Desa' program, focusing on nutrition education for elementary school children.",
        images: [ "/projects/kkn-gizi.png" ],
        tags: ["Community Service", "Project Management", "Education"],
        challenge: "To address the issue of poor nutritional awareness among second-grade students in a rural village. The project needed to be engaging, educational, and impactful within a limited timeframe.",
        myRole: "As the project secretary, I was responsible for planning, documentation, and coordination. I designed the educational materials and structured the interactive sessions to ensure the program's objectives were met effectively.",
        solution: "An interactive educational program was developed and implemented, featuring fun learning activities, visual aids, and healthy snack demonstrations to teach the importance of balanced nutrition.",
        impact: "The program was successfully delivered to over 50 students, leading to a noticeable increase in their nutritional knowledge and enthusiasm for healthy eating, as measured by pre- and post-activity quizzes.",
        techStack: ["Project Coordination", "Public Speaking", "Community Engagement", "Educational Material Design"]
    },
    {
        title: "Advanced Financial Management",
        shortDescription: "A comprehensive project showcasing end-to-end financial management skills, including budgeting (RAB), tax compliance (PPh 21 & 22), and auditing.",
        images: [ "/projects/finance-report.png" ],
        tags: ["Finance", "Budgeting", "Taxation", "Auditing"],
        challenge: "To manage the complete financial lifecycle for organizational programs, ensuring full compliance with tax regulations, maintaining budgetary control, and ensuring transparency.",
        myRole: "As the lead financial officer, I was responsible for creating detailed budgets (RAB), calculating and reporting PPh 21 and PPh 22 taxes, monitoring all expenditures against the budget, and conducting internal audits to verify financial integrity.",
        solution: "Developed comprehensive budget spreadsheets to track planned versus actual spending. Implemented a systematic process for tax documentation and timely reporting. Regular internal audits were conducted to ensure accountability.",
        impact: "Achieved 100% compliance with financial regulations and maintained a balanced budget across multiple high-stakes projects. The clear financial reporting provided crucial data for future strategic planning.",
        techStack: ["Advanced Excel", "Financial Modeling", "Tax Compliance", "Auditing Principles"]
    },
    {
        title: "Systematic Administrative Workflow",
        shortDescription: "Developed and managed a professional administrative system covering proposal creation, correspondence, archiving, and inventory management.",
        images: [ "/projects/admin-docs.png" ],
        tags: ["Administration", "Documentation", "Organization"],
        challenge: "To create a streamlined and efficient administrative workflow that ensures all official documentation is standardized, easily accessible, and properly archived for future reference.",
        myRole: "I led all administrative functions, where I was responsible for drafting official proposals and letters, establishing a logical archiving system (both digital and physical), and managing the inventory of organizational assets.",
        solution: "Implemented a digital-first documentation strategy using collaborative platforms. I designed standardized templates for proposals and official correspondence to ensure consistency and professionalism.",
        impact: "Improved administrative process efficiency by over 30%, significantly reducing time spent on locating documents and ensuring all outgoing communications met professional standards.",
        techStack: ["Microsoft Office Suite", "Google Workspace", "Archiving Systems", "Document Management"]
    },
    {
        title: "Sea Turtle Conservation Volunteer",
        shortDescription: "Engaged in hands-on conservation efforts for sea turtle hatchlings and coastal ecosystem restoration through mangrove planting.",
        images: [ "/projects/turtle-conservation.png" ],
        tags: ["Conservation", "Volunteer", "Marine Biology"],
        challenge: "To actively contribute to the protection of endangered sea turtles and the restoration of their fragile coastal habitats, which are threatened by environmental changes.",
        myRole: "As a conservation volunteer, I was directly involved in daily on-site activities. This included monitoring turtle nests, caring for hatchlings to ensure their safe release, and participating in mangrove reforestation programs.",
        solution: "Provided hands-on care for turtle hatchlings to maximize their survival rate before release. I also participated in planting hundreds of mangrove saplings to help restore the coastal ecosystem, which serves as a natural barrier and vital marine habitat.",
        impact: "Directly contributed to the release of healthy sea turtle hatchlings and the expansion of a critical mangrove forest, enhancing local biodiversity and long-term ecosystem resilience.",
        techStack: ["Environmental Monitoring", "Field Research", "Conservation Practices", "Teamwork"]
    },
];

// DATA BARU UNTUK TESTIMONIALS
export const testimonials = [
    {
        quote: "Emmy's leadership and meticulous financial management were instrumental to our success. Her ability to streamline complex processes and ensure accountability was truly impressive.",
        name: "John Doe",
        title: "Former President, BEM Faculty of Agriculture",
        image: "/testimonials/john-doe.png" // Ganti dengan foto asli
    },
    {
        quote: "Working with Emmy on the KADA program was a fantastic experience. She is a creative problem-solver with a strong grasp of both technical and strategic aspects of project development.",
        name: "Jane Smith",
        title: "Mentor, Korea-ASEAN Digital Academy",
        image: "/testimonials/jane-smith.png" // Ganti dengan foto asli
    }
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
        description: "Designed, executed, and managed a 3-month professional education program for 142 participants. Supervised 86 committee members across 8 divisions, distributed tasks strategically, and monitored progress through reports and open discussions."
    },
    {
        role: "Sea Turtle Conservation Volunteer",
        company: "Involunteer - South Coast (Banjulmati Beach)",
        date: "May 2024",
        description: "Cared for turtle hatchlings, contributed to coastal conservation through mangrove planting, and learned about sustainable coastal ecosystem management."
    },
    {
        role: "Treasurer",
        company: "Poster, PKKMB & PPM Faculty of Agriculture",
        date: "July 2023 – Nov 2023",
        description: "Planned and managed the budget with 100% fund absorption, prepared financial and tax reports (PKP & Non-PKP) for ±70 faculty partners, and facilitated communication between faculty bureaucracy and student committees."
    },
    {
        role: "Treasurer",
        company: "Dies Natalis Faculty of Agriculture & Feast of Agriculture",
        date: "Nov 2023 – Dec 2023",
        description: "Coordinated fundraising, managed budget planning, ensured compliance with financial and tax reporting, and facilitated collaboration between faculty and student committees."
    },
    {
        role: "Field Coordinator",
        company: "Kampung Budaya Universitas Brawijaya",
        date: "Sep 2023 – Oct 2023",
        description: "Led the main event series, developed technical guidelines (SOP) for event execution, and coordinated implementation of the Gelora Puncak Kampung Budaya program."
    },
    {
        role: "Executive Secretary",
        company: "Open House Faculty of Agriculture",
        date: "Aug 2022 – Nov 2022",
        description: "Documented meeting minutes, maintained inter-team communication, and prepared proposals and accountability reports."
    },
    {
        role: "Administrative Staff (Kestari)",
        company: "Kampung Budaya Universitas Brawijaya",
        date: "Sep 2022 – Oct 2022",
        description: "Managed administrative correspondence and documentation for Kampung Budaya events from preparation to execution."
    },
    {
        role: "Public Relations & Sponsorship Staff",
        company: "Brawijaya Future Talk",
        date: "Aug 2022",
        description: "Served as liaison officer for 4 main speakers and engaged 20 media partners for event promotion."
    },
    {
        role: "Event Staff & MC",
        company: "Knowledge of Administration",
        date: "Apr 2022",
        description: "Created event rundown and acted as master of ceremony for an event involving 19 Student Sovereignty Institutions of the Faculty of Agriculture."
    }
];
