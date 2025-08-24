import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

// Ikon untuk setiap link kontak
const ICONS = {
    Mail: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
    Phone: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
    LinkedIn: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    Instagram: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
    GitHub: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
};

const ContactDock = () => {
    const contacts = [
        { href: `mailto:${personalInfo.email}`, icon: <ICONS.Mail />, label: 'Email' },
        { href: `tel:${personalInfo.phone}`, icon: <ICONS.Phone />, label: 'Phone' },
        { href: personalInfo.linkedin, icon: <ICONS.LinkedIn />, label: 'LinkedIn' },
        { href: personalInfo.socialLinks.instagram, icon: <ICONS.Instagram />, label: 'Instagram' },
        { href: personalInfo.socialLinks.github, icon: <ICONS.GitHub />, label: 'GitHub' },
    ];

    return (
        // Container untuk memposisikan dock di tengah bawah
        <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 1 }} // Animasi muncul dari bawah
        >
            {/* Dock dengan latar belakang kaca (glassmorphism) */}
            <div className="flex items-center gap-2 p-2 bg-white/50 backdrop-blur-lg rounded-full border border-slate-300/50 shadow-lg">
                {contacts.map((contact) => (
                    <motion.a
                        key={contact.label}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
                        aria-label={contact.label}
                        whileHover={{ scale: 1.2, y: -5 }} // Animasi magnet yang catchy
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        {contact.icon}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default ContactDock;
