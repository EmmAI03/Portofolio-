import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { competences } from '../data/portfolioData';

const CompetencesSection = () => {
    // ... (kode internal lainnya tetap sama)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const categoryColors = {
        "Data & Analytics": "bg-blue-100 text-blue-600",
        "Project Management": "bg-green-100 text-green-600",
        "Design & Development": "bg-indigo-100 text-indigo-600",
        "Professional Skills": "bg-amber-100 text-amber-600",
    };

    return (
        // Diubah menjadi bg-transparent
        <AnimatedSection id="competences" className="py-16 bg-transparent">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">Core Competences</h2>
                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                    A blend of technical, managerial, and creative skills honed through practical experience.
                </p>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {competences.map((category) => (
                        <motion.div
                            key={category.title}
                            className="bg-white/90 p-6 rounded-2xl shadow-lg border border-slate-200/80 group"
                            variants={cardVariants}
                            whileHover={{ y: -5, boxShadow: "0px 20px 30px rgba(0,0,0,0.08)" }}
                        >
                           {/* ... konten kartu ... */}
                           <div className="flex items-center gap-4 mb-4">
                                <span className={`p-3 rounded-full transition-colors duration-300 ${categoryColors[category.title] || 'bg-slate-100 text-slate-600'}`}>
                                    {React.cloneElement(category.icon, { className: "w-6 h-6" })}
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                                    <p className="text-sm text-slate-500">{category.description}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 pt-4 border-t">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-2 p-2 rounded-md group-hover:bg-slate-50 transition-colors">
                                        <div className="w-6 h-6 flex-shrink-0 text-slate-500">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    );
};
export default CompetencesSection;