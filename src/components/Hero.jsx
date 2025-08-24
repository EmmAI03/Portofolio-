import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import TextType from './TextType';

const ICONS = {
    Download: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
    ExternalLink: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 md:pt-0">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            
            <motion.div 
                className="md:w-2/3 text-center md:text-left"
                variants={containerVariants} initial="hidden" animate="visible"
            >
                <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
                    variants={itemVariants}
                >
                    <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[200%_auto] animate-animated-gradient">
                        Emmy Rahmaniasari
                    </span>
                </motion.h1>

                <motion.p 
                    className="mt-2 text-lg md:text-xl text-slate-700 font-semibold"
                    variants={itemVariants}
                >
                    {personalInfo.title}
                </motion.p>
                
                <motion.div 
                    variants={itemVariants} 
                    className="mt-4 text-md md:text-lg text-slate-600 max-w-2xl min-h-[120px] sm:min-h-[96px]"
                >
                    <TextType
                        text={personalInfo.about}
                        typingSpeed={40} deletingSpeed={20} pauseDuration={2500}
                        className="h-full"
                    />
                </motion.div>
                
                <motion.div 
                    className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                    variants={itemVariants}
                >
                    <a href="/Emmy_Rahmaniasari_CV.pdf" download className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                        <ICONS.Download className="w-5 h-5" /> Download CV
                    </a>
                    <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="border-2 border-slate-400 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 hover:border-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                        <ICONS.ExternalLink className="w-5 h-5" /> View Projects
                    </a>
                </motion.div>
            </motion.div>
            
            <motion.div 
                className="md:w-1/3"
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.div
                    className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
                    animate={{ y: ["0%", "-3%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-xl"></div>
                    <img src={personalInfo.imageUrl} alt={personalInfo.name} className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white object-top" />
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default Hero;
