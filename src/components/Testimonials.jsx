import React from 'react';
import AnimatedSection from './AnimatedSection';
import { testimonials } from '../data/portfolioData';
import { motion } from 'framer-motion';

const Testimonials = () => (
    <AnimatedSection id="testimonials" className="py-16 bg-transparent">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">What Others Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                        key={index}
                        className="bg-white/80 p-6 rounded-2xl shadow-lg border border-slate-200/80"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <p className="text-slate-600 italic mb-4">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4">
                            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <p className="font-bold text-slate-800">{testimonial.name}</p>
                                <p className="text-sm text-slate-500">{testimonial.title}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);
export default Testimonials;