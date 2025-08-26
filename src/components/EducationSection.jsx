import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { educationHistory, certifications } from '../data/portfolioData';
import { ICONS } from '../data/icons';

const CloseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const EducationSection = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    // Komponen Kartu yang bisa di-klik
    const InfoCard = ({ item, onClick, type }) => (
        <motion.div
            className="bg-white/80 p-6 rounded-xl shadow-lg border border-slate-200/80 cursor-pointer group"
            onClick={onClick}
            whileHover={{ y: -5, boxShadow: "0px 15px 25px rgba(0,0,0,0.08)" }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="flex items-start gap-4">
                {item.logoUrl && <img src={item.logoUrl} alt={`${item.institution} logo`} className="w-12 h-12 object-contain flex-shrink-0" />}
                <div>
                    <p className="text-sm text-slate-500 mb-1">{type === 'edu' ? item.date : item.year}</p>
                    <h3 className="text-lg font-bold text-slate-800">{type === 'edu' ? item.institution : item.name}</h3>
                    <p className="text-blue-600 font-semibold">{type === 'edu' ? item.degree : item.issuer}</p>
                </div>
            </div>
        </motion.div>
    );

    return (
        <>
            <AnimatedSection id="education" className="py-16 bg-transparent">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Education & Certifications</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        
                        {/* Kolom Pendidikan */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold flex items-center gap-3 text-slate-800">
                                <ICONS.BookOpen className="text-blue-600" /> Education
                            </h3>
                            {educationHistory.map((item, index) => (
                                <InfoCard key={index} item={item} onClick={() => setSelectedItem(item)} type="edu" />
                            ))}
                        </div>

                        {/* Kolom Sertifikasi */}
                        <div className="space-y-8">
                             <h3 className="text-2xl font-semibold flex items-center gap-3 text-slate-800">
                                <ICONS.Award className="text-purple-600" /> Certifications
                            </h3>
                            {certifications.map((item, index) => (
                                <InfoCard key={index} item={item} onClick={() => setSelectedItem(item)} type="cert" />
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Modal Pop-up untuk Galeri Foto */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl border"
                            initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 z-10">
                                <CloseIcon />
                            </button>
                            <h2 className="text-2xl font-bold text-slate-800">{selectedItem.institution || selectedItem.name}</h2>
                            <p className="text-slate-500 mb-6">{selectedItem.degree || selectedItem.issuer}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {selectedItem.images && selectedItem.images.map((img, i) => (
                                    <img key={i} src={img} alt={`Gallery image ${i+1}`} className="rounded-lg w-full h-auto object-cover border" />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default EducationSection;
