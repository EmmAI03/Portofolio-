import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { competences } from '../data/portfolioData';

// Ikon panah untuk tombol expand
const ChevronDown = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const CompetencesSection = () => {
    // State untuk melacak kartu mana yang sedang terbuka (expand)
    const [expandedIndex, setExpandedIndex] = useState(null);

    const categoryColors = {
        "Data & Analytics": "bg-blue-100 text-blue-600",
        "Project Management": "bg-green-100 text-green-600",
        "Design & Development": "bg-indigo-100 text-indigo-600",
        "Professional Skills": "bg-amber-100 text-amber-600",
    };

    return (
        <AnimatedSection id="competences" className="py-16 bg-transparent">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">Skills Showcase</h2>
                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                    An integrated look at my capabilities. Click a category to expand.
                </p>
                
                <div className="space-y-4 max-w-3xl mx-auto">
                    {competences.map((category, index) => {
                        const isExpanded = index === expandedIndex;
                        return (
                            <motion.div
                                key={category.title}
                                className="bg-white/90 p-4 rounded-2xl shadow-lg border border-slate-200/80 overflow-hidden"
                                layout
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                {/* Header Kartu yang Bisa Di-klik */}
                                <motion.div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`p-3 rounded-full ${categoryColors[category.title]}`}>
                                            {React.cloneElement(category.icon, { className: "w-6 h-6" })}
                                        </span>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                                            <p className="text-sm text-slate-500">{category.description}</p>
                                        </div>
                                    </div>
                                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                                        <ChevronDown className="text-slate-500" />
                                    </motion.div>
                                </motion.div>

                                {/* Konten yang Bisa Expand/Collapse */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                            animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="border-t pt-4"
                                        >
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="font-semibold text-slate-700 mb-2">Hard Skills</h4>
                                                    <div className="space-y-2">
                                                        {category.hardSkills.map(skill => (
                                                            <div key={skill.name} className="flex items-center gap-2">
                                                                <div className="w-5 h-5 flex-shrink-0 text-slate-500">{skill.icon}</div>
                                                                <span className="text-sm text-slate-600">{skill.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-700 mb-2">Soft Skills</h4>
                                                    <div className="space-y-2">
                                                        {category.softSkills.map(skill => (
                                                            <div key={skill.name} className="flex items-center gap-2">
                                                                <span className="text-sm text-slate-600">&#8226; {skill.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default CompetencesSection;