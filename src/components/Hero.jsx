import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, techStack } from '../data/portfolioData';
import TextType from './TextType';

// Icons for the buttons
const ICONS = {
    Download: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
    ExternalLink: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>,
    Code: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
    const [hoveredTech, setHoveredTech] = useState(null);
    
    // Duplicate tech stack for seamless scrolling animation
    const duplicatedLogos = [...techStack, ...techStack];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-24 md:pt-0">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
                
                {/* Left side: Enhanced Text Content */}
                <motion.div 
                    className="md:w-2/3 text-center md:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Professional Status Badge */}
                    <motion.div 
                        className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4"
                        variants={itemVariants}
                    >
                        <motion.div 
                            className="w-2 h-2 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-sm font-medium text-green-700">Available for opportunities</span>
                    </motion.div>

                    {/* Name with animated gradient */}
                    <motion.h1 
                        className="text-4xl md:text-6xl font-extrabold leading-tight"
                        variants={itemVariants}
                    >
                        <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 text-transparent bg-clip-text">
                            Emmy Rahmaniasari
                        </span>
                    </motion.h1>

                    {/* Enhanced Title */}
                    <motion.div 
                        className="mt-3 flex flex-col md:flex-row items-center md:items-start gap-3"
                        variants={itemVariants}
                    >
                        <p className="text-lg md:text-xl text-slate-700 font-semibold">
                            {personalInfo.title}
                        </p>
                    </motion.div>
                    
                    {/* Typing animation for the description */}
                    <motion.div 
                        variants={itemVariants} 
                        className="mt-4 text-md md:text-lg text-slate-600 max-w-2xl h-24 md:h-16"
                    >
                        <TextType
                            text={personalInfo.about}
                            typingSpeed={40}
                            deletingSpeed={20}
                            pauseDuration={2500}
                            className="h-full"
                        />
                    </motion.div>

                    {/* Quick Stats for HR */}
                    <motion.div 
                        className="mt-6 flex justify-center md:justify-start gap-6"
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-2 bg-white/80 rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                            <ICONS.Code className="w-5 h-5 text-blue-600" />
                            <span className="font-bold text-slate-800">{techStack.length}+</span>
                            <span className="text-slate-600 text-sm">Technologies</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                            <span className="text-lg">⚡</span>
                            <span className="font-bold text-slate-800">1</span>
                            <span className="text-slate-600 text-sm">Years Exp</span>
                        </div>
                    </motion.div>

                    {/* Enhanced Buttons */}
                    <motion.div 
                        className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                        variants={itemVariants}
                    >
                        <motion.a 
                            href="/Emmy_Rahmaniasari_CV.pdf"
                            download
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <ICONS.Download className="w-5 h-5" />
                            Download CV
                        </motion.a>
                        
                        <motion.a 
                            href="https://www.canva.com/design/DAGum1SAyZQ/74PpOajGG7FEY1jCcthm7A/view?utm_content=DAGum1SAyZQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbb78bdc9aa"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="border-2 border-slate-400 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 hover:border-blue-600 hover:text-blue-700 transition-all flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <ICONS.ExternalLink className="w-5 h-5" />
                            View Projects
                        </motion.a>
                    </motion.div>

                    {/* HR Value Proposition */}
                    <motion.div 
                        className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50"
                        variants={itemVariants}
                    >
                        <p className="text-sm text-slate-700 font-medium mb-1">💼 Why Choose Me?</p>
                        <p className="text-sm text-slate-600">
                            Ready to contribute immediately • Modern tech expertise • Strong problem-solving • User-focused development
                        </p>
                    </motion.div>
                </motion.div>
                
                {/* Right side: Profile with Orbiting Tech Stack */}
                <motion.div 
                    className="md:w-1/3 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
                        animate={{ y: ["0%", "-3%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* Glowing background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-xl opacity-30"></div>
                        
                        {/* Orbiting Tech Stack */}
                        {techStack.slice(0, 6).map((tech, index) => {
                            const angle = (index * 60) * (Math.PI / 180); // 60 degrees apart
                            const radius = 150; // Distance from center
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;
                            
                            return (
                                <motion.div
                                    key={tech.name}
                                    className="absolute z-20"
                                    style={{
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                    animate={{ 
                                        rotate: 360,
                                        y: [0, -5, 0]
                                    }}
                                    transition={{
                                        rotate: {
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        },
                                        y: {
                                            duration: 3 + index * 0.3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    whileHover={{ scale: 1.2, y: -8 }}
                                    onHoverStart={() => setHoveredTech(tech.name)}
                                    onHoverEnd={() => setHoveredTech(null)}
                                >
                                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200">
                                        <img 
                                            src={tech.logo} 
                                            alt={tech.name} 
                                            className="w-8 h-8 object-contain"
                                            title={tech.name}
                                        />
                                    </div>
                                    
                                    {hoveredTech === tech.name && (
                                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                                            {tech.name}
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                        
                        {/* Profile image */}
                        <img 
                            src={personalInfo.imageUrl} 
                            alt={personalInfo.name} 
                            className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white object-top z-10" 
                        />

                        {/* Tech count badge */}
                        <motion.div 
                            className="absolute bottom-4 right-4 bg-white/95 rounded-full px-3 py-2 shadow-lg border border-gray-200 z-30"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            <div className="flex items-center gap-1">
                                <ICONS.Code className="w-4 h-4 text-blue-600" />
                                <span className="text-xs font-bold text-slate-800">{techStack.length}</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Tech stack info */}
                    <div className="mt-4 text-center">
                        <p className="text-xs text-slate-500">
                            <span className="font-medium">{techStack.length} Technologies</span> • 
                            <span className="ml-1">Hover to explore</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;