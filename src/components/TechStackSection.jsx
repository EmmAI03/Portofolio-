import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { techStack } from '../data/portfolioData';

const TechStackSection = () => {
    const duplicatedLogos = [...techStack, ...techStack];

    return (
        <AnimatedSection id="techstack" className="py-16 bg-transparent">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Technology Toolbox</h2>
                
                <div className="w-full overflow-hidden relative group">
                    <motion.div
                        className="flex gap-12" // Jarak diubah dari gap-16 menjadi gap-12
                        animate={{
                            x: ['0%', '-100%'],
                            transition: {
                                ease: 'linear',
                                duration: 30,
                                repeat: Infinity,
                            }
                        }}
                        // Animasi akan berhenti saat di-hover
                        whileHover={{ animationPlayState: 'paused' }}
                    >
                        {duplicatedLogos.map((tech, index) => (
                            <div key={index} className="flex-shrink-0 flex items-center justify-center w-32">
                                <motion.img 
                                    src={tech.logo} 
                                    alt={tech.name} 
                                    className="h-14 object-contain transition-all duration-300" 
                                    title={tech.name}
                                    // Animasi membesar saat di-hover
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default TechStackSection;
