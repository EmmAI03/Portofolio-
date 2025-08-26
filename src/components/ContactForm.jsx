import React from 'react';
import AnimatedSection from './AnimatedSection';

const ContactForm = () => {
    return (
        <AnimatedSection id="contact" className="py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-slate-800">Let's Collaborate</h2>
                <p className="text-slate-600 mt-4 mb-8 max-w-xl mx-auto">
                    I'm currently seeking new opportunities. If you have a project in mind or just want to connect, feel free to send me a message.
                </p>
                
                {/* Ganti URL action ini dengan URL Formspree Anda */}
                <form 
                    action="https://formspree.io/f/YOUR_UNIQUE_ID" 
                    method="POST"
                    className="max-w-xl mx-auto text-left"
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Name</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Message</label>
                        <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </AnimatedSection>
    );
};

export default ContactForm;
