import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompetencesSection from './components/CompetencesSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';
import ContactDock from './components/ContactDock';
import StaticBackground from './components/StaticBackground'; // 1. Impor komponen background baru

function App() {
  return (
    // Mengubah bg-white menjadi bg-transparent agar background terlihat
    <div className="relative bg-transparent font-sans selection:bg-blue-200">
      
      {/* 2. Tambahkan StaticBackground di sini */}
      <StaticBackground />

      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <AuroraBackground />
      </div>

      <Navbar />
      <main>
        <Hero />
        <CompetencesSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
      </main>
      <Footer />
      <ContactDock />
    </div>
  );
}

export default App;
