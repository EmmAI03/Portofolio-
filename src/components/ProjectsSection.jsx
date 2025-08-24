import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { projects } from '../data/portfolioData';

// Ikon untuk tombol close yang lebih modern
const CloseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <AnimatedSection id="projects" className="py-16 bg-white/70 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">Featured Projects</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                        A curated selection of my work. Click on any project to see the details.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col cursor-pointer group"
                                onClick={() => setSelectedProject(project)}
                                layoutId={`project-card-${index}`}
                                whileHover={{ y: -5, boxShadow: "0px 20px 30px rgba(0,0,0,0.1)" }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="overflow-hidden h-48">
                                    <img 
                                        src={project.images[0]} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                                    <p className="text-slate-600 text-sm flex-grow">{project.shortDescription}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Modal Pop-up dengan Desain Baru */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border grid grid-cols-1 md:grid-cols-2"
                            layoutId={`project-card-${projects.indexOf(selectedProject)}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Kolom Kiri: Deskripsi */}
                            <div className="p-8 flex flex-col">
                                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
                                    {selectedProject.title}
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed flex-grow overflow-y-auto">
                                    {selectedProject.longDescription}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {selectedProject.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Kolom Kanan: Galeri Gambar */}
                            <div className="overflow-y-auto h-full p-4 bg-slate-50">
                                <div className="space-y-4">
                                     {selectedProject.images.map((img, i) => (
                                        <img key={i} src={img} alt={`${selectedProject.title} - image ${i+1}`} className="rounded-lg w-full h-auto object-cover" />
                                    ))}
                                </div>
                            </div>

                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 transition-colors z-10 bg-white/50 rounded-full p-1"
                            >
                                <CloseIcon />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectsSection;
