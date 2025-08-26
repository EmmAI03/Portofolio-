import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { competences } from '../data/portfolioData';

const CompetencesSection = () => {
    // Menggabungkan semua hard skill dari semua kategori menjadi satu array
    const allHardSkills = competences.flatMap(category => category.hardSkills);
    // Menduplikasi array untuk menciptakan efek scrolling tanpa akhir
    const duplicatedSkills = [...allHardSkills, ...allHardSkills];

    return (
        // Latar belakang diubah dari bg-slate-50 menjadi bg-transparent
        <AnimatedSection id="competences" className="py-16 bg-transparent">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">Core Competences</h2>
                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                    The primary tools and technologies I use to bring ideas to life.
                </p>
                
                {/* Kontainer untuk Marquee */}
                <div className="w-full overflow-hidden relative group">
                    <motion.div
                        className="flex gap-16" // Jarak antar logo
                        animate={{
                            x: ['0%', '-100%'],
                            transition: {
                                ease: 'linear',
                                duration: 25, // Atur durasi untuk kecepatan scroll
                                repeat: Infinity,
                            }
                        }}
                    >
                        {duplicatedSkills.map((skill, index) => (
                            <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center text-center w-24">
                                <img 
                                    src={skill.logo} 
                                    alt={skill.name} 
                                    className="h-12 w-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                                    title={skill.name} // Tooltip saat hover
                                />
                                <span className="text-xs font-medium text-slate-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                    {/* Efek fade di tepi dihapus agar terlihat bersih di atas background aurora */}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default CompetencesSection;
