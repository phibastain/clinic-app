'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HERO_SLIDES } from '@/data/mockData';
import { TH_TRANSLATIONS } from '@/data/translations';
import { AR_TRANSLATIONS } from '@/data/arTranslations';
import { RU_HERO_TRANSLATIONS } from '@/data/ruUiTranslations';
import GradientButton from '@/components/ui/GradientButton';
import { useLanguage } from '@/components/providers/LanguageProvider';

const HeroSection = () => {
    const [current, setCurrent] = useState(0);
    const { lang } = useLanguage();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 15000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" dir="ltr" className="relative min-h-dvh lg:h-[calc(100dvh-100px)] lg:min-h-[700px] w-full overflow-hidden flex flex-col items-center justify-center">
            {/* 1. Dynamic Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/assets/image/hero section/M-Trust Urology Clinic background 5.webp"
                    alt="M-Trust Urology Clinic - Background"
                    fill
                    sizes="100vw"
                    className="object-cover brightness-[0.95] saturate-[0.9]"
                    priority
                    fetchPriority="high"
                />
            </div>

            {/* Container for aligned content */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-16 md:mt-24 lg:mt-0 flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center transition-all duration-500">

                {/* 0. Top Hero Logo - Positioned at top of section */}
                <div className="absolute top-[-50px] md:top-[-100px] lg:top-[-120px] left-1/2 -translate-x-1/2 w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] z-50 px-4 transition-all duration-500 pointer-events-auto">
                    <Image
                        src="/assets/image/hero section/image font hero.webp"
                        alt="M-Trust Urology Clinic Logo"
                        width={600}
                        height={200}
                        sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 500px"
                        className="w-full h-auto drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] opacity-95"
                        priority
                    />
                </div>

                {/* 2. Photo Slider - Left Side on Desktop */}
                <div className="relative w-full lg:max-w-[calc(100%-30px)] aspect-video md:h-[350px] lg:h-[304px] xl:h-[361px] lg:translate-y-[100px] lg:translate-x-[70px] z-20 overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50 backdrop-blur-sm pointer-events-auto order-2 lg:order-1 mt-8 lg:mt-0 shadow-amber-500/10 transition-transform duration-500 hover:scale-[1.01]">
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
                                priority={index === 0}
                                fetchPriority={index === 0 ? "high" : "auto"}
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
                                className={`flex items-center justify-center w-6 h-6 cursor-pointer`}
                            >
                                <span className={`block rounded-full transition-all duration-300 ${index === current
                                    ? 'w-8 h-2.5 bg-white shadow-lg shadow-white/30'
                                    : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
                                    }`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3. Text Content - Right Side on Desktop */}
                <div className="relative w-full text-center lg:text-right z-30 flex flex-col items-center lg:items-end pointer-events-auto order-1 mb-8 lg:mb-0 lg:pl-8 lg:-translate-x-[80px] lg:translate-y-[120px] translate-y-[50px]">
                    {HERO_SLIDES.map((slide, index) => {
                        // Get translation based on language
                        const thData = lang === 'TH' ? (TH_TRANSLATIONS[slide.title] as any) : null;
                        const arData = lang === 'AR' ? (AR_TRANSLATIONS[slide.title] as any) : null;
                        const ruData = lang === 'RU' ? (RU_HERO_TRANSLATIONS[slide.title] as any) : null;
                        const langData = ruData || arData || thData;
                        const displayTitle = langData?.title || slide.title;
                        const displayDesc = langData?.desc || slide.desc;
                        const displayBtn = langData?.btn || slide.btnText;

                        return (
                            <div
                                key={slide.id}
                                className={`transition-all duration-700 ease-out flex flex-col items-center lg:items-end w-full ${index === current
                                    ? 'opacity-100 translate-y-0 relative'
                                    : 'opacity-0 translate-y-8 absolute pointer-events-none'
                                    }`}
                            >
                                {(() => {
                                    const Tag = index === 0 ? 'h1' : 'h2' as any;
                                    return (
                                        <Tag dir={lang === 'AR' ? 'rtl' : 'ltr'} className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-slate-500 lg:text-slate-900 mb-4 leading-tight tracking-tighter uppercase drop-shadow-sm text-center lg:text-right">
                                            {displayTitle.split('\n').map((line: string, i: number) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    {i < displayTitle.split('\n').length - 1 && <span className="hidden lg:inline"><br /></span>}
                                                    {i < displayTitle.split('\n').length - 1 && <span className="lg:hidden"> </span>}
                                                </React.Fragment>
                                            ))}
                                        </Tag>
                                    );
                                })()}

                                <p dir={lang === 'AR' ? 'rtl' : 'ltr'} className="text-slate-600 lg:text-slate-700 text-sm md:text-base lg:text-lg mb-8 font-medium leading-relaxed max-w-md text-center lg:text-right px-4 lg:px-0">
                                    {displayDesc}
                                </p>

                                <div className="flex items-center justify-center lg:justify-end gap-4 w-full px-4 lg:px-0 mt-4 md:mt-0">
                                    <a href="#contact" className="w-auto">
                                        <GradientButton className="px-8 py-3.5 md:py-4 text-xs md:text-sm font-bold shadow-xl shadow-amber-500/20 hover:shadow-amber-400/40 transition-all hover:scale-105">
                                            {displayBtn}
                                        </GradientButton>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
