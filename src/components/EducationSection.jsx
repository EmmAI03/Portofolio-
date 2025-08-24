import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // <-- BARIS INI DITAMBAHKAN
import { education, certifications } from '../data/portfolioData';
import { ICONS } from '../data/icons';

const EducationSection = () => {
    // ... (kode internal lainnya tetap sama)
    const [selectedImage, setSelectedImage] = useState(null);
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i) => ({
            y: 0, opacity: 1,
            transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
        })
    };
    const CloseIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );

    return (
        <>
            {/* Diubah menjadi bg-transparent */}
            <AnimatedSection id="education" className="py-16 bg-transparent">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Education & Certifications</h2>
                    {/* ... konten section ... */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200/80 flex flex-col"
                            custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-4">
                                    <span className="bg-blue-100 p-3 rounded-full"><ICONS.BookOpen className="text-blue-600 w-6 h-6"/></span>
                                    <h3 className="text-2xl font-bold text-slate-800">Education</h3>
                                </div>
                                <img src={education.logoUrl} alt="University Logo" className="w-12 h-12 object-contain" />
                            </div>
                            <div className="flex-grow">
                                <p className="text-xl font-semibold text-slate-900">{education.institution}</p>
                                <p className="text-slate-600">{education.degree}</p>
                                <div className="flex justify-between items-baseline text-slate-500 mt-1 text-sm">
                                    <span>{education.date}</span>
                                    <span className="font-bold text-blue-600">{education.gpa}</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h4 className="font-semibold text-slate-700 mb-2 text-sm">Gallery</h4>
                                <div className="grid grid-cols-3 gap-2">
                                    {education.images.map((img, i) => (
                                        <motion.img 
                                            key={i} src={img} alt={`Education gallery ${i+1}`}
                                            className="rounded-md w-full h-20 object-cover cursor-pointer"
                                            onClick={() => setSelectedImage(img)}
                                            whileHover={{ scale: 1.05 }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200/80"
                            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="bg-purple-100 p-3 rounded-full"><ICONS.Award className="text-purple-600 w-6 h-6"/></span>
                                <h3 className="text-2xl font-bold text-slate-800">Certifications</h3>
                            </div>
                            <ul className="space-y-2">
                                {certifications.map((cert, i) => (
                                    <motion.li key={i} whileHover={{ x: 4 }} className="transition-transform">
                                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center text-sm p-2 rounded-md hover:bg-slate-100">
                                            <span className="text-slate-700 font-medium pr-4">{cert.name}</span>
                                            <span className="text-xs font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded-full flex-shrink-0">{cert.year}</span>
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </AnimatedSection>
            {/* ... (kode modal) ... */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img 
                            src={selectedImage} alt="Selected education"
                            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
                            initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                        />
                         <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white hover:text-slate-300">
                            <CloseIcon />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
export default EducationSection;