import React from 'react';
import AnimatedSection from './AnimatedSection'; // Pastikan komponen ini ada
import { workExperience, volunteerExperience } from '../data/portfolioData';
import { ICONS } from '../data/icons'; // Pastikan ikon Briefcase dan Users ada

const ExperienceSection = () => {
    // Komponen internal untuk setiap item di dalam timeline
    const TimelineItem = ({ item, isLast }) => (
        <div className="relative pl-8">
            {/* Titik dan garis vertikal pada timeline */}
            <div className="absolute left-0 top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-white ring-4 ring-slate-200"></div>
            {!isLast && <div className="absolute left-[7px] top-4 w-0.5 h-full bg-slate-200"></div>}
            
            {/* Konten teks */}
            <h3 className="text-lg font-semibold text-slate-800">{item.role}</h3>
            <p className="text-blue-600 font-medium">{item.company}</p>
            <p className="text-sm text-slate-500 my-1">{item.date}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
        </div>
    );

    return (
        // Menggunakan padding vertikal 'py-16' agar lebih padat
        <AnimatedSection id="experience" className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Work & Volunteer Experience</h2>
                
                {/* Grid untuk membagi pengalaman kerja dan sukarela */}
                <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    
                    {/* Kolom Pengalaman Kerja */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                            <ICONS.Briefcase className="text-blue-600" /> Work Experience
                        </h3>
                        <div className="space-y-8">
                            {workExperience.map((item, index) => (
                                <TimelineItem key={index} item={item} isLast={index === workExperience.length - 1} />
                            ))}
                        </div>
                    </div>

                    {/* Kolom Pengalaman Sukarela */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                            <ICONS.Users className="text-blue-600" /> Volunteer Experience
                        </h3>
                        <div className="space-y-8">
                            {volunteerExperience.map((item, index) => (
                                <TimelineItem key={index} item={item} isLast={index === volunteerExperience.length - 1} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default ExperienceSection;
