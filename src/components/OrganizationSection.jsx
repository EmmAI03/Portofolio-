import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { organizationExperience } from '../data/portfolioData';

const OrganizationSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <AnimatedSection id="organization" className="py-16 bg-transparent">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Organizational Experience</h2>
                
                <motion.div 
                    className="space-y-8 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {organizationExperience.map((org, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/90 p-6 rounded-2xl shadow-lg border border-slate-200/80"
                            variants={cardVariants}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-slate-800">{org.organization}</h3>
                                <span className="text-sm font-semibold text-slate-500 flex-shrink-0 ml-4">{org.date}</span>
                            </div>
                            
                            <div className="space-y-4">
                                {org.roles.map((role, roleIndex) => (
                                    <div key={roleIndex} className="pl-4 border-l-2 border-blue-200">
                                        <h4 className="font-semibold text-blue-600">{role.title}</h4>
                                        <ul className="list-disc list-inside mt-1 space-y-1">
                                            {role.description.map((desc, descIndex) => (
                                                <li key={descIndex} className="text-sm text-slate-600">{desc}</li>
                                            ))}
                                        </ul>
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

export default OrganizationSection;
