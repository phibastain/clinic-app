'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/mockData';
import { serviceNameToSlug } from '@/utils/serviceUtils';
import Container from '@/components/ui/Container';

interface ExploreServicesProps {
    currentServiceName?: string;
}

export default function ExploreServices({ currentServiceName }: ExploreServicesProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const allServices = Object.values(SERVICE_CATEGORIES)
        .flat()
        .filter((s: any) => s.name !== currentServiceName);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth > 768 ? current.clientWidth / 2 : current.clientWidth;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (allServices.length === 0) return null;

    return (
        <div className="py-20 bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/5 text-left">
            <Container className="text-left relative">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-wide">Explore Other Services</h2>
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={() => scroll('left')}
                            aria-label="Scroll left"
                            className="p-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 transition-colors text-slate-600 dark:text-slate-300"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            aria-label="Scroll right"
                            className="p-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 transition-colors text-slate-600 dark:text-slate-300"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 snap-x snap-mandatory hide-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {allServices.map((s: any, idx: number) => (
                        <Link
                            key={idx}
                            href={`/services/${serviceNameToSlug(s.name)}`}
                            className="min-w-[280px] md:min-w-[300px] shrink-0 snap-start bg-slate-50 dark:bg-[#12141c] rounded-3xl p-6 border border-slate-100 dark:border-white/5 text-left group hover:translate-y-[-4px] transition-all hover:shadow-xl hover:border-amber-500/30 flex flex-col"
                            aria-label={`Explore service: ${s.name}`}
                        >
                            <div className="relative h-40 w-full mb-6 overflow-hidden rounded-2xl">
                                <img src={s.image} alt="" aria-hidden="true" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <h3 className="text-base font-black text-slate-900 dark:text-white uppercase leading-tight group-hover:text-amber-500 transition-colors mb-4 grow">{s.name}</h3>
                            <div className="mt-auto flex items-center text-xs font-bold text-amber-600 uppercase tracking-widest gap-2">
                                Learn More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}} />
            </Container>
        </div>
    );
}
