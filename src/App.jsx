import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
//import CompetencesSection from './components/CompetencesSection';
import ExperienceSection from './components/ExperienceSection';
import OrganizationSection from './components/OrganizationSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
//import Testimonials from './components/Testimonials'; // Impor baru
//import ContactForm from './components/ContactForm'; // Impor baru
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';
import ContactDock from './components/ContactDock';
import StaticBackground from './components/StaticBackground';
import TechStackSection from './components/TechStackSection';
import VideoSection from './components/VideoSection';

function App() {
  return (
    <div className="relative bg-transparent font-sans selection:bg-blue-200">
      <StaticBackground />
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none"><AuroraBackground /></div>
      <Navbar />
      <main>
        <Hero />
        <TechStackSection />
        {/* <CompetencesSection /> */}
        {/* <Testimonials /> */}
        {/* <ContactForm /> */}
        <ExperienceSection />
        <OrganizationSection />
        <EducationSection />
        <ProjectsSection />
        <VideoSection />
      </main>
      <Footer />
      <ContactDock />
    </div>
  );
}
export default App;