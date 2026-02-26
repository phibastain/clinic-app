'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Award, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '@/data/mockData';
import GradientButton from '@/components/ui/GradientButton';
import SpinningBadge from '@/components/ui/SpinningBadge';


const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 15000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-[90vh] lg:h-[calc(100vh-100px)] w-full overflow-hidden flex flex-col justify-end">
            {/* 1. Dynamic Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/assets/image/hero section/M-Trust Urology Clinic background 5.webp"
                    alt="M-Trust Urology Clinic - Background"
                    fill
                    sizes="100vw"
                    className="object-cover brightness-[0.95] saturate-[0.9]"
                    priority
                />
            </div>

            {/* Container for aligned content */}
            <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-4 md:px-8 pointer-events-none flex flex-col justify-end pb-8 lg:pb-12">

                {/* 0. Top Hero Logo - Floating metallic font */}
                <div className="absolute top-[-70px] md:top-2 lg:top-[52px] left-1/2 lg:left-[calc(50%-150px)] -translate-x-1/2 w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] z-50 px-4 transition-all duration-500">
                    <Image
                        src="/assets/image/hero section/image font hero.webp"
                        alt="M-Trust Urology Clinic Logo"
                        width={600}
                        height={200}
                        className="w-full h-auto drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] opacity-90"
                        priority
                    />
                </div>

                {/* 2. Photo Slider - Responsive Positioning */}
                <div className="relative lg:absolute bottom-0 left-0 lg:left-12 xl:left-32 w-full lg:w-[42%] xl:w-[45%] h-[280px] md:h-[320px] lg:h-[55%] z-20 overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50 backdrop-blur-sm pointer-events-auto order-2 mt-12 lg:mt-0 translate-y-[20px] lg:translate-y-[-50px]">
                    {HERO_SLIDES.filter(slide => slide.slideImage).map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current
                                ? 'opacity-100 scale-100 translate-x-0'
                                : 'opacity-0 scale-110 translate-x-8'
                                }`}
                        >
                            <Image
                                src={slide.slideImage!}
                                alt={slide.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                    ))}

                    {/* Slide Navigation Tabs */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                        {HERO_SLIDES.filter(slide => slide.slideImage).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === current
                                    ? 'w-8 bg-white shadow-lg shadow-white/30'
                                    : 'w-2.5 bg-white/50 hover:bg-white/80'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* 3. Text Content - Responsive Positioning */}
                <div className="relative lg:absolute bottom-0 right-0 lg:right-12 xl:right-24 text-center lg:text-right w-full lg:max-w-md xl:max-w-xl z-30 flex flex-col items-center lg:items-end pointer-events-auto order-1 mb-8 lg:mb-0 translate-y-[40px] md:translate-y-[160px] lg:translate-y-[-50px]">
                    {HERO_SLIDES.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`transition-all duration-700 ease-out flex flex-col items-center lg:items-end ${index === current
                                ? 'opacity-100 translate-y-0 relative'
                                : 'opacity-0 translate-y-8 absolute pointer-events-none'
                                }`}
                        >
                            {index === 0 ? (
                                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-700 lg:text-slate-900 mb-4 leading-tight tracking-tighter uppercase drop-shadow-sm text-center lg:text-right">
                                    {slide.title.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < slide.title.split('\n').length - 1 && <span className="hidden lg:inline"><br /></span>}
                                            {i < slide.title.split('\n').length - 1 && <span className="lg:hidden"> </span>}
                                        </React.Fragment>
                                    ))}
                                </h1>
                            ) : (
                                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-700 lg:text-slate-900 mb-4 leading-tight tracking-tighter uppercase drop-shadow-sm text-center lg:text-right">
                                    {slide.title.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < slide.title.split('\n').length - 1 && <span className="hidden lg:inline"><br /></span>}
                                            {i < slide.title.split('\n').length - 1 && <span className="lg:hidden"> </span>}
                                        </React.Fragment>
                                    ))}
                                </h2>
                            )}

                            <p className="text-slate-500 lg:text-slate-700 text-sm md:text-base lg:text-lg mb-8 font-medium leading-relaxed max-w-md text-center lg:text-right px-4 lg:px-0">
                                {slide.desc}
                            </p>

                            <div className="flex items-center justify-center lg:justify-end gap-4 w-full px-4 lg:px-0 mt-4 md:mt-0">
                                <a href="#contact" className="w-auto">
                                    <GradientButton className="px-8 py-3.5 md:py-4 text-xs md:text-sm font-bold shadow-xl shadow-amber-500/20 hover:shadow-amber-400/40 transition-all hover:scale-105">
                                        {slide.btnText}
                                    </GradientButton>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. Spinning Badge - Responsive Visibility/Position */}
                <div className="hidden xl:block absolute top-[calc(15%+20px)] left-[calc(25%+415px)] -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-auto opacity-30">
                    <SpinningBadge />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
