'use client';

import { useState, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { SERVICE_CATEGORIES } from '@/data/mockData';
import { serviceNameToSlug } from '@/utils/serviceUtils';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', ...Object.keys(SERVICE_CATEGORIES)];
    const displayServices = useMemo(() => {
        if (activeTab === 'All') return Object.values(SERVICE_CATEGORIES).flat();
        return SERVICE_CATEGORIES[activeTab] || [];
    }, [activeTab]);

    return (
        <section id="services" className="pt-8 pb-16 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left">
            <Container>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 text-left">
                    <SectionTitle tag="World-Class Care" title="Our Services" className="mb-0" />
                    <div className="flex flex-wrap gap-2 text-left">
                        {tabs.map((tab) => (
                            <button key={tab} onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all border ${activeTab === tab ? 'bg-slate-900 text-white border-slate-900 dark:bg-amber-600 dark:border-amber-600' : 'bg-white/50 backdrop-blur-sm text-slate-500 border-slate-200 hover:border-amber-600 dark:bg-white/5 dark:text-slate-300 dark:border-white/10 dark:hover:border-amber-500'}`}>{tab}</button>
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
                            <div className="w-32 sm:w-40 shrink-0 overflow-hidden text-left"><img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                            <div className="p-6 flex flex-col justify-center text-left">
                                <div className="flex items-center space-x-2 mb-2 text-left"><service.Icon size={16} className="text-amber-600" /><h3 className="text-sm font-black text-slate-900 dark:text-white uppercase text-left">{service.name}</h3></div>
                                <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed font-medium text-left">{service.desc}</p>
                                <span className="flex items-center space-x-1 text-xs font-black uppercase text-amber-600 group/btn mt-3 text-left"><span>Learn More</span><ChevronRight size={14} className="transition-transform group-hover/btn:translate-x-1 text-left" /></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServicesSection;
