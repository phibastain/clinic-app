'use client';

import React, { useState } from 'react';
import { Star, Quote, ZoomIn, CheckCircle2, Sparkles, X } from 'lucide-react';
import { DoctorData } from '@/data/mockData';

interface DoctorTestimonialsProps {
    doctor: DoctorData;
}

export default function DoctorTestimonials({ doctor }: DoctorTestimonialsProps) {
    const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(null);

    if (!doctor.handwrittenTestimonials || doctor.handwrittenTestimonials.length === 0) {
        return null;
    }

    return (
        <section aria-labelledby="testimonials-heading" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                            <Quote className="text-amber-600" size={20} />
                        </div>
                        <h2 id="testimonials-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
                            Patient Testimonials
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl flex items-center gap-2">
                        <Sparkles size={14} className="text-amber-500" />
                        Real success stories and handwritten feedback from patients treated by {doctor.name.split(',')[0]}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {doctor.handwrittenTestimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="group flex flex-col h-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                        itemScope
                        itemType="https://schema.org/Review"
                    >
                        {/* Rating Metadata for SEO */}
                        <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="hidden">
                            <meta itemProp="ratingValue" content={(testimonial.rating || 5).toString()} />
                            <meta itemProp="bestRating" content="5" />
                        </div>

                        {/* Image Section with Zoom Button */}
                        <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800">
                            <img
                                src={testimonial.image}
                                alt={`Handwritten testimonial from ${testimonial.name}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-500 flex items-center justify-center">
                                <button
                                    onClick={() => setSelectedTestimonial(testimonial.image)}
                                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white/90 dark:bg-amber-500 text-slate-900 dark:text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95"
                                >
                                    <ZoomIn size={18} />
                                    View Original Note
                                </button>
                            </div>

                            {/* Language Badge */}
                            {testimonial.language && (
                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200 dark:border-white/10">
                                    {testimonial.language}
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex gap-1" aria-label={`Rating: ${testimonial.rating || 5} stars`}>
                                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                                        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                    <CheckCircle2 size={12} className="text-green-500" />
                                    Verified Patient
                                </span>
                            </div>

                            <blockquote className="flex-1">
                                <Quote className="text-amber-500/20 mb-2" size={24} />
                                <p
                                    itemProp="reviewBody"
                                    className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic"
                                >
                                    {testimonial.text}
                                </p>
                            </blockquote>

                            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                                <cite
                                    itemProp="author"
                                    itemScope
                                    itemType="https://schema.org/Person"
                                    className="not-italic"
                                >
                                    <span itemProp="name" className="text-slate-900 dark:text-white font-black text-base uppercase tracking-tight">
                                        {testimonial.name}
                                    </span>
                                </cite>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Testimonial Modal */}
            {selectedTestimonial && (
                <div
                    className="fixed inset-0 z-10000 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4"
                    onClick={() => setSelectedTestimonial(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        onClick={() => setSelectedTestimonial(null)}
                    >
                        <X size={40} />
                    </button>
                    <div
                        className="max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedTestimonial}
                            alt="Full Testimonial"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
