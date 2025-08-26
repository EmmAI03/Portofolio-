import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { educationHistory, certifications } from '../data/portfolioData';
import { ICONS } from '../data/icons';

const CloseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const EducationSection = () => {
    // State untuk pop-up galeri gambar (fungsionalitas yang hilang)
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        // Menggunakan Fragment <>...</> karena ada lebih dari satu elemen utama (section dan modal)
        <>
            <AnimatedSection id="education" className="py-16 bg-transparent">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Education & Certifications</h2>
                    
                    <div className="max-w-4xl mx-auto">
                        {/* Bagian Pendidikan dengan Timeline */}
                        <div className="relative">
                            <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-200"></div>
                            {educationHistory.map((edu, index) => (
                                <motion.div 
                                    key={index} 
                                    className="relative pl-12 mb-12"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="absolute top-1 left-4 w-4 h-4 bg-blue-500 rounded-full border-4 border-white ring-4 ring-slate-200 -translate-x-1/2 z-10"></div>
                                    <div className="flex items-start gap-4">
                                        <img src={edu.logoUrl} alt={`${edu.institution} logo`} className="w-12 h-12 object-contain flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-sm text-slate-500">{edu.date}</p>
                                            <h3 className="text-xl font-bold text-slate-800">{edu.institution}</h3>
                                            <p className="font-medium text-slate-700">{edu.degree}</p>
                                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{edu.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bagian Sertifikasi */}
                        <div className="mt-8 pt-8 border-t">
                             <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <ICONS.Award className="text-purple-600" /> Certifications
                            </h3>
                            <div className="space-y-4">
                                {certifications.map((cert, i) => (
                                    <motion.a 
                                        key={i} 
                                        href={cert.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex justify-between items-center p-4 rounded-lg bg-white/80 border hover:bg-slate-50 transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div>
                                            <p className="font-semibold text-slate-800">{cert.name}</p>
                                            <p className="text-sm text-slate-500">{cert.issuer}</p>
                                        </div>
                                        <span className="text-sm font-bold text-slate-600">{cert.year}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Modal untuk menampilkan gambar (fungsionalitas yang hilang) */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img 
                            src={selectedImage} 
                            alt="Selected education"
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
