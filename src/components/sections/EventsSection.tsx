'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { EVENTS_DATA } from '@/data/mockData';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useTranslation } from '@/hooks/useTranslation';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import GradientButton from '@/components/ui/GradientButton';
import { getEventSlug } from '@/utils/eventUtils';
import { getLocalizedField } from '@/utils/langUtils';

const EventsSection = () => {
    const { lang } = useLanguage();
    const { t } = useTranslation();

    const featured = EVENTS_DATA.find(e => e.id === 3) || EVENTS_DATA[0];
    const others = EVENTS_DATA.filter(e => e.id !== featured.id);

    return (
        <section id="expertise" className="pt-12 pb-20 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left relative overflow-hidden bg-linear-to-b from-white/90 to-indigo-50/30 dark:from-[#0B0F19]/90 dark:to-[#1a1a2e]/80 backdrop-blur-md">
            <Container>
                <div className="flex justify-between items-end mb-10">
                    <SectionTitle tag={t("Medical Excellence")} title={t("Expertise & Insights")} className="mb-0" />
                    <GradientButton variant="outline" className="hidden sm:flex px-8 py-3.5 rounded-xl text-[10px]">{t("View All")}</GradientButton>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Link
                        href={`/events/${getEventSlug(featured)}`}
                        className="relative group overflow-hidden rounded-[2.5rem] shadow-xl aspect-4/3 lg:aspect-auto lg:h-full border border-white/20 dark:border-white/10 dark:bg-none dark:bg-slate-900 cursor-pointer block"
                    >
                        <Image src={featured.image || ''} alt={featured.title || 'Event'} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent p-8 md:p-10 flex flex-col justify-end">
                            <span className="inline-block px-3 py-1 bg-amber-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg mb-3 w-fit">{t(featured.category)}</span>
                            <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight mb-2">
                                {getLocalizedField(featured, 'title', lang, t)}
                            </h3>
                            <p className="text-slate-300 text-base font-medium mb-6 line-clamp-2">
                                {getLocalizedField(featured, 'description', lang, t)}
                            </p>
                            <span className="flex items-center text-xs font-black text-white uppercase group/btn w-fit hover:text-amber-500 transition-colors">
                                <span className="mr-2">{t('View Details')}</span>
                                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-amber-600 transition-colors">
                                    <ArrowRight size={10} />
                                </span>
                            </span>
                        </div>
                    </Link>

                    <div className="flex flex-col gap-5">
                        {others.map((event) => (
                            <Link
                                key={event.id}
                                href={`/events/${getEventSlug(event)}`}
                                className="flex flex-col sm:flex-row bg-linear-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 border border-slate-200/50 dark:border-white/10 rounded-4xl p-4 gap-6 group hover:border-amber-500/30 dark:hover:border-amber-500/40 transition-all duration-300 cursor-pointer"
                            >
                                <div className="relative w-full sm:w-40 aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden shrink-0">
                                    <Image src={event.image || ''} alt={event.title || 'Event'} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, 160px" />
                                </div>
                                <div className="flex flex-col justify-center flex-1 pr-2">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[8px] font-black text-amber-600 uppercase tracking-widest border border-amber-600/20 px-2 py-0.5 rounded-md">{t(event.category)}</span>
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase leading-none mb-1 group-hover:text-amber-600 transition-colors">
                                        {getLocalizedField(event, 'title', lang, t)}
                                    </h4>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-4">
                                        {getLocalizedField(event, 'subtitle', lang, t)}
                                    </p>
                                    <span className="flex items-center text-xs font-black text-slate-900 dark:text-white uppercase group/btn w-fit hover:text-amber-600 transition-colors">
                                        <span className="mr-2">{t('View Details')}</span>
                                        <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover/btn:bg-amber-600 group-hover/btn:text-white transition-colors">
                                            <ArrowRight size={10} />
                                        </span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default EventsSection;
