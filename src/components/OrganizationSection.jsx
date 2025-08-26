import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { organizationExperience } from '../data/portfolioData';

const OrganizationSection = () => {
    return (
        <AnimatedSection id="organization" className="py-16 bg-transparent">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Organizational Experience</h2>
                
                <div className="relative max-w-4xl mx-auto">
                    {/* Garis Timeline Vertikal di Kiri */}
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-200"></div>

                    {organizationExperience.map((org, index) => (
                        <motion.div 
                            key={index} 
                            className="relative pl-12 mb-12"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Titik pada Timeline */}
                            <div className="absolute top-1 left-4 w-4 h-4 bg-blue-500 rounded-full border-4 border-white ring-4 ring-slate-200 -translate-x-1/2 z-10"></div>
                            
                            {/* Konten Teks */}
                            <div>
                                <p className="text-sm text-slate-500 mb-1">{org.date}</p>
                                <h3 className="text-xl font-bold text-slate-800">{org.organization}</h3>
                            </div>
                            
                            {/* Detail Peran */}
                            <div className="mt-4 space-y-4">
                                {org.roles.map((role, roleIndex) => (
                                    <div key={roleIndex}>
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
                </div>
            </div>
        </AnimatedSection>
    );
};

export default OrganizationSection;
