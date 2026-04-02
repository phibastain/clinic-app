'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { SERVICE_CATEGORIES } from '@/data/mockData';
import { serviceNameToSlug } from '@/utils/serviceUtils';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { useTranslation } from '@/hooks/useTranslation';

const ServicesSection = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', ...Object.keys(SERVICE_CATEGORIES)];
    const displayServices = useMemo(() => {
        if (activeTab === 'All') return Object.values(SERVICE_CATEGORIES).flat();
        return SERVICE_CATEGORIES[activeTab] || [];
    }, [activeTab]);

    return (
        <section id="services" className="pt-8 pb-16 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left">
            <Container>
                <div className="flex flex-col md:flex-row md:items-center justify-start mb-8 gap-x-8 gap-y-4 text-left">
                    <SectionTitle tag={t("World-Class Care")} title={t("Our Services")} className="mb-0 shrink-0" />
                    <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto gap-1.5 md:gap-2 text-left no-scrollbar w-full">
                        {tabs.map((tab) => (
                            <button key={tab} onClick={() => setActiveTab(tab)}
                                className={`px-2.5 md:px-4 py-1 md:py-2 rounded-xl text-[9px] md:text-[11px] whitespace-nowrap font-black uppercase tracking-widest transition-all border shrink-0 cursor-pointer ${activeTab === tab ? 'bg-slate-900 text-white border-slate-900 dark:bg-amber-600 dark:border-amber-600 shadow-md' : 'bg-white/50 backdrop-blur-sm text-slate-500 border-slate-200 hover:border-amber-600 dark:bg-white/5 dark:text-slate-300 dark:border-white/10 dark:hover:border-amber-500'}`}>
                                {t(tab)}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in text-left">
                    {displayServices.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services/${serviceNameToSlug(service.name)}`}
                            className="group flex bg-linear-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/10 transition-all duration-300 hover:border-amber-600/30 dark:hover:border-amber-500/40 text-left cursor-pointer"
                        >
                            <div className="relative w-32 sm:w-40 shrink-0 overflow-hidden text-left"><Image src={service.image} alt={service.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 128px, 160px" /></div>
                            <div className="p-6 flex flex-col justify-center text-left">
                                <div className="flex items-center space-x-2 mb-2 text-left"><service.Icon size={14} className="text-amber-600 md:w-4 md:h-4" /><h3 className="text-xs md:text-sm font-black text-slate-900 dark:text-white uppercase text-left">{t(service.name)}</h3></div>
                                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-[15px] leading-relaxed font-medium text-left">{t(service.desc)}</p>
                                <span className="flex items-center space-x-1 text-[10px] md:text-xs font-black uppercase text-amber-600 group/btn mt-3 text-left"><span>{t("Learn More")}</span><ChevronRight size={12} className="transition-transform group-hover/btn:translate-x-1 text-left md:w-[14px] md:h-[14px]" /></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServicesSection;
