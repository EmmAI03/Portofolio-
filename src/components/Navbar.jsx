import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const CloseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ["About", "Competences", "Experience", "Education", "Projects"];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#about" className="text-xl font-bold text-slate-800">Emmy R.</a>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800">
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-0 left-0 w-full h-screen bg-white z-30 pt-24"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            {navLinks.map(link => (
                                <a 
                                    key={link} 
                                    href={`#${link.toLowerCase()}`} 
                                    className="text-2xl text-slate-700 hover:text-blue-600"
                                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
