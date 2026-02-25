'use client';

import React, { useState } from 'react';
import { ArrowLeft, Award, GraduationCap, Star, CheckCircle2, Trophy, Sparkles, ChevronLeft, ChevronRight, X, Quote, MapPin, ZoomIn, Play, Youtube } from 'lucide-react';
import { DoctorData, GOOGLE_REVIEWS, GOOGLE_AVERAGE_RATING, GOOGLE_REVIEW_COUNT } from '@/data/mockData';
import Container from '@/components/ui/Container';
import CertificateMarquee from '@/components/sections/CertificateMarquee';
import VideoPlayer from '@/components/client/VideoPlayer';

const AutoSlider = ({ images, caption }: { images: string[], caption?: string }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group border-4 border-white dark:border-white/10">
            {images.map((img, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ${i === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover" />
                </div>
            ))}

            {/* Controls */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                {caption && <p className="text-white text-sm font-medium italic mb-4">{caption}</p>}
                <div className="flex gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'bg-amber-500 w-8' : 'bg-white/40 w-4'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Manual arrows */}
            <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

interface DrProfileProps {
    doctor: DoctorData;
    onBack: () => void;
}

const DrProfile = ({ doctor, onBack }: DrProfileProps) => {
    const [activePhotoIndex, setActivePhotoIndex] = useState(0);
    const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(null);
    const photos = doctor.activities || [];

    return (
        <section className="pt-8 pb-16 scroll-mt-24 text-left">
            <Container>

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-10 mb-12">
                    {/* Doctor Image */}
                    <div className="lg:w-1/4">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border-2 border-white/50 dark:border-white/10 shadow-2xl">
                            <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                            <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg z-10 border-4 border-white dark:border-slate-900">
                                <div className="text-center leading-none">
                                    <span className="block text-base font-black">15+</span>
                                    <span className="block text-[4px] uppercase font-bold tracking-widest">Years</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                            <Sparkles size={14} />
                            {doctor.expert}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase mb-2">
                            {doctor.name}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm italic mb-6">{doctor.role}</p>

                        {/* Bio */}
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">{doctor.bio}</p>

                        {/* Specialties */}
                        <div className="mb-6">
                            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Star size={14} className="text-amber-500" />
                                Specialties
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {doctor.specialties.map((s, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-xs text-slate-700 dark:text-slate-300 font-medium">
                                        <CheckCircle2 size={12} className="inline mr-1 text-green-500" />{s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificates Auto-Slide Marquee */}
                {doctor.certificates && doctor.certificates.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Award size={18} className="text-amber-500" />
                            Certificates & Credentials
                        </h3>
                        <CertificateMarquee certificates={doctor.certificates} />
                    </div>
                )}

                {/* Bio Content (Redesigned 2-Column Zig-Zag Layout) */}
                {doctor.bioContent && doctor.bioContent.length > 0 && (
                    <div className="mb-16">
                        {doctor.slug === 'dr.phanpon' ? (
                            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                                {/* Left Column: Information #01-#05 */}
                                <div className="space-y-16">
                                    {(() => {
                                        // Group blocks by header
                                        const groups: { title: string, blocks: any[] }[] = [];
                                        let currentGroup: { title: string, blocks: any[] } | null = null;

                                        doctor.bioContent.forEach(block => {
                                            if (block.type === 'header') {
                                                if (currentGroup) groups.push(currentGroup);
                                                currentGroup = { title: block.content || '', blocks: [] };
                                            } else {
                                                if (!currentGroup) {
                                                    currentGroup = { title: '', blocks: [] };
                                                }
                                                currentGroup.blocks.push(block);
                                            }
                                        });
                                        if (currentGroup) groups.push(currentGroup);

                                        return groups.map((group, groupIdx) => (
                                            <div key={groupIdx} className="space-y-6">
                                                {group.title && (
                                                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                                                        <span className="text-amber-500 mr-2 text-3xl font-serif italic">#0{groupIdx + 1}</span>
                                                        {group.title}
                                                    </h3>
                                                )}

                                                {group.blocks.map((block: any, i: number) => {
                                                    if (block.type === 'paragraph') return (
                                                        <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg italic font-medium">
                                                            {block.content}
                                                        </p>
                                                    );
                                                    if (block.type === 'list' && block.items) return (
                                                        <ul key={i} className="space-y-3">
                                                            {block.items.map((item: string, j: number) => (
                                                                <li key={j} className="text-slate-600 dark:text-slate-300 flex items-start gap-3 p-4 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm transition-all hover:border-amber-500/30">
                                                                    <CheckCircle2 size={18} className="text-amber-500 mt-1 shrink-0" />
                                                                    <span className="text-base font-medium">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    );
                                                    return null;
                                                })}
                                            </div>
                                        ));
                                    })()}
                                </div>

                                {/* Right Column: Images extracted from bioContent */}
                                <div className="space-y-8 lg:sticky lg:top-24">
                                    {(doctor.bioContent || [])
                                        .filter(block => block.type === 'image')
                                        .map((block, i) => (
                                            <figure key={i} className="relative group">
                                                <div className="absolute -inset-4 bg-linear-to-br from-amber-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                                    <img src={block.image} alt={block.caption || `Professional Profile ${i + 1}`} className="w-full h-auto object-cover" />
                                                    {block.caption && (
                                                        <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                                                            <p className="text-white text-xs font-medium italic">
                                                                {block.caption}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </figure>
                                        ))}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-20">
                                {(() => {
                                    // Group blocks by header
                                    const groups: { title: string, blocks: any[] }[] = [];
                                    let currentGroup: { title: string, blocks: any[] } | null = null;

                                    doctor.bioContent.forEach(block => {
                                        if (block.type === 'header') {
                                            if (currentGroup) groups.push(currentGroup);
                                            currentGroup = { title: block.content || '', blocks: [] };
                                        } else {
                                            if (!currentGroup) {
                                                currentGroup = { title: '', blocks: [] };
                                            }
                                            currentGroup.blocks.push(block);
                                        }
                                    });
                                    if (currentGroup) groups.push(currentGroup);

                                    return groups.map((group, groupIdx) => {
                                        const hasImage = group.blocks.some(b => b.type === 'image');
                                        const isAlternate = groupIdx % 2 !== 0;

                                        return (
                                            <div
                                                key={groupIdx}
                                                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${hasImage && isAlternate ? 'lg:flex-row-reverse' : ''}`}
                                            >
                                                {/* Text Side */}
                                                <div className={`w-full ${hasImage ? 'lg:w-1/2' : 'w-full'} space-y-6`}>
                                                    {group.title && (
                                                        <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                                                            <span className="text-amber-500 mr-2 text-3xl font-serif italic">#0{groupIdx + 1}</span>
                                                            {group.title}
                                                        </h3>
                                                    )}

                                                    {group.blocks.filter(b => b.type !== 'image').map((block: any, i: number) => {
                                                        if (block.type === 'paragraph') return (
                                                            <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                                                {block.content}
                                                            </p>
                                                        );
                                                        if (block.type === 'slider' && block.images) return (
                                                            <div key={i} className="w-full">
                                                                <AutoSlider images={block.images} caption={block.caption} />
                                                            </div>
                                                        );
                                                        if (block.type === 'list' && block.items) return (
                                                            <ul key={i} className="grid sm:grid-cols-1 gap-3">
                                                                {block.items.map((item: string, j: number) => (
                                                                    <li key={j} className="text-slate-600 dark:text-slate-300 flex items-start gap-3 p-3 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl shadow-sm">
                                                                        <CheckCircle2 size={18} className="text-amber-500 mt-1 shrink-0" />
                                                                        <span className="text-sm font-medium">{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        );
                                                        return null;
                                                    })}
                                                </div>

                                                {/* Image Side (only if present) */}
                                                {hasImage && (
                                                    <div className="w-full lg:w-1/2">
                                                        {group.blocks.filter(b => b.type === 'image').map((block: any, i: number) => (
                                                            <figure key={i} className="relative group">
                                                                <div className="absolute -inset-4 bg-linear-to-br from-amber-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                                                    <img src={block.image} alt={block.caption || ''} className="w-full h-auto object-cover" />
                                                                    {block.caption && (
                                                                        <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                                                                            <p className="text-white text-xs font-medium italic translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                                                {block.caption}
                                                                            </p>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </figure>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    });
                                })()}
                            </div>
                        )}
                    </div>
                )}


                {/* Activity Photos Slider */}
                {photos.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Star size={18} className="text-amber-500" />
                            Activities & Gallery
                        </h3>
                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl border border-white/30 dark:border-white/10 shadow-xl">
                                <img
                                    src={photos[activePhotoIndex]}
                                    alt={`${doctor.name} activity ${activePhotoIndex + 1}`}
                                    className="w-full aspect-video object-cover transition-opacity duration-500"
                                />
                            </div>
                            {photos.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 transition"
                                        aria-label="Previous photo"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={() => setActivePhotoIndex((prev) => (prev + 1) % photos.length)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 transition"
                                        aria-label="Next photo"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                    <div className="flex justify-center gap-2 mt-4">
                                        {photos.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActivePhotoIndex(i)}
                                                className={`w-2.5 h-2.5 rounded-full transition-all ${i === activePhotoIndex ? 'bg-amber-500 w-6' : 'bg-slate-300 dark:bg-slate-600'}`}
                                                aria-label={`Photo ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Awards & Qualifications Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Qualifications */}
                    <div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                            <GraduationCap size={18} className="text-purple-500" />
                            Education & Training
                        </h3>
                        <div className="space-y-3">
                            {doctor.qualifications.map((qual, i) => (
                                <div key={i} className="flex gap-3 p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl">
                                    <div className="shrink-0 w-14 h-14 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                        <span className="text-purple-600 font-bold text-xs">{qual.year}</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm">{qual.title}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{qual.place}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards */}
                    <div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Trophy size={18} className="text-yellow-500" />
                            Awards & Recognition
                        </h3>
                        <div className="space-y-3">
                            {doctor.awards.map((award, i) => (
                                <div key={i} className="p-4 bg-linear-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-700/30 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <Award className="text-amber-600 shrink-0" size={18} />
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white text-sm">{award.title}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{award.issuer} • {award.year}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Patient Testimonials */}
                {!doctor.hideTestimonials && (
                    <div className="mb-12">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Quote size={18} className="text-amber-500" />
                            Patient Testimonials
                        </h3>

                        {doctor.handwrittenTestimonials && doctor.handwrittenTestimonials.length > 0 ? (
                            <>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2">
                                    <Sparkles size={14} className="text-amber-500" />
                                    Real Patient Success Stories & Handwritten Feedback
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {doctor.handwrittenTestimonials.map((testimonial) => (
                                        <div
                                            key={testimonial.id}
                                            className="group flex flex-col h-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                                            itemScope
                                            itemType="https://schema.org/Review"
                                        >
                                            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="hidden">
                                                <meta itemProp="ratingValue" content={(testimonial.rating || 5).toString()} />
                                                <meta itemProp="bestRating" content="5" />
                                            </div>

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
                                                {testimonial.language && (
                                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200 dark:border-white/10">
                                                        {testimonial.language}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex gap-1" aria-label={`Rating: ${testimonial.rating || 5} stars`}>
                                                        {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                                                            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                                                        ))}
                                                    </div>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Patient</span>
                                                </div>

                                                <blockquote className="flex-1">
                                                    <Quote className="text-amber-500/20 mb-2" size={24} />
                                                    <p itemProp="reviewBody" className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">
                                                        {testimonial.text}
                                                    </p>
                                                </blockquote>

                                                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                                                    <cite itemProp="author" itemScope itemType="https://schema.org/Person" className="not-italic">
                                                        <span itemProp="name" className="text-slate-900 dark:text-white font-black text-base uppercase tracking-tight">
                                                            {testimonial.name}
                                                        </span>
                                                    </cite>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2">
                                    <MapPin size={14} />
                                    Google Reviews — {GOOGLE_AVERAGE_RATING} ★ ({GOOGLE_REVIEW_COUNT} reviews)
                                </p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {GOOGLE_REVIEWS.map(review => (
                                        <div key={review.id} className="p-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3 mb-3">
                                                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover border-2 border-amber-400" />
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white text-sm">{review.name}</p>
                                                    <p className="text-[10px] text-slate-400">{review.date}</p>
                                                </div>
                                                {review.verified && (
                                                    <span className="ml-auto text-[9px] font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full uppercase">Verified</span>
                                                )}
                                            </div>
                                            <div className="flex gap-0.5 mb-2">
                                                {Array.from({ length: review.rating }).map((_, i) => (
                                                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                                                ))}
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{review.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* Video Testimonials Grid - 12 Videos, 4 Columns */}
                {doctor.videos && doctor.videos.length > 0 && (
                    <div className="mb-20">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                            <div>
                                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                                    <Play size={18} className="text-amber-500 fill-amber-500/20" />
                                    Video Testimonials
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                    Watch our patients share their successful recovery journeys
                                </p>
                            </div>
                            <div className="hidden md:block h-px flex-1 bg-linear-to-r from-slate-200 to-transparent dark:from-white/10 mx-6" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {doctor.videos.map((video) => {
                                const videoId = video.url.split('/').pop()?.split('?')[0] || '';
                                return (
                                    <div key={video.id} className="space-y-3">
                                        <VideoPlayer
                                            videoId={videoId}
                                            title={video.title}
                                            thumbnail={video.thumbnail}
                                        />
                                        <h5 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                                            {video.title}
                                        </h5>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
                {selectedTestimonial && (
                    <div
                        className="fixed inset-0 z-6000 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedTestimonial(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedTestimonial(null)}
                        >
                            <X size={40} />
                        </button>
                        <img
                            src={selectedTestimonial}
                            alt="Testimonial zoom view"
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-in fade-in zoom-in duration-300"
                        />
                    </div>
                )}

                {/* Video Section */}
                {doctor.videoUrl && (
                    <div className="mb-12">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Youtube size={18} className="text-red-500" />
                            Featured Video
                        </h3>
                        <div className="rounded-2xl overflow-hidden border border-white/30 dark:border-white/10 shadow-xl">
                            <VideoPlayer
                                videoId={doctor.videoUrl.split('/').pop()?.split('?')[0] || ''}
                                title={`${doctor.name} featured video`}
                            />
                        </div>
                    </div>
                )}
            </Container>
        </section >
    );
};

export default DrProfile;
