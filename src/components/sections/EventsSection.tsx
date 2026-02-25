'use client';

import { useRouter } from 'next/navigation';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { EVENTS_DATA } from '@/data/mockData';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import GradientButton from '@/components/ui/GradientButton';

const EventsSection = () => {
    const router = useRouter();

    return (
        <section id="events" className="pt-12 pb-20 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left relative overflow-hidden bg-linear-to-b from-white/90 to-indigo-50/30 dark:from-[#0B0F19]/90 dark:to-[#1a1a2e]/80 backdrop-blur-md">
            <Container>
                <div className="flex justify-between items-end mb-10">
                    <SectionTitle tag="Upcoming Seminars" title="Events & Workshops" className="mb-0" />
                    <GradientButton variant="outline" className="hidden sm:flex px-8 py-3.5 rounded-xl text-[10px]">View All Events</GradientButton>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div
                        onClick={() => router.push(`/events/${EVENTS_DATA[0].id}`)}
                        className="relative group overflow-hidden rounded-[2.5rem] shadow-xl aspect-[16/9] lg:aspect-auto lg:h-full border border-white/20 dark:border-white/10 dark:bg-none dark:bg-slate-900 cursor-pointer"
                    >
                        <img src={EVENTS_DATA[0].image} alt={EVENTS_DATA[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent p-8 md:p-10 flex flex-col justify-end">
                            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 text-center min-w-[70px]">
                                <span className="block text-2xl font-black text-white leading-none">{EVENTS_DATA[0].day}</span>
                                <span className="block text-[9px] font-bold text-amber-500 uppercase tracking-widest mt-1">{EVENTS_DATA[0].month}</span>
                            </div>
                            <span className="inline-block px-3 py-1 bg-amber-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg mb-3 w-fit">{EVENTS_DATA[0].category}</span>
                            <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight mb-2">{EVENTS_DATA[0].title}</h3>
                            <p className="text-slate-300 text-base font-medium mb-6 line-clamp-2">{EVENTS_DATA[0].description}</p>
                            <div className="flex flex-wrap gap-4 text-[10px] font-bold text-slate-300 uppercase tracking-wide mb-6">
                                <div className="flex items-center"><MapPin size={12} className="mr-1.5 text-amber-500" /> {EVENTS_DATA[0].location}</div>
                                <div className="flex items-center"><Clock size={12} className="mr-1.5 text-amber-500" /> {EVENTS_DATA[0].time}</div>
                            </div>
                            <GradientButton
                                variant="primary"
                                className="w-fit px-8"
                                onClick={(e) => {
                                    e?.stopPropagation();
                                    router.push(`/events/${EVENTS_DATA[0].id}`);
                                }}
                            >
                                Register Now
                            </GradientButton>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        {EVENTS_DATA.slice(1).map((event) => (
                            <div
                                key={event.id}
                                onClick={() => router.push(`/events/${event.id}`)}
                                className="flex flex-col sm:flex-row bg-linear-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 border border-slate-200/50 dark:border-white/10 rounded-[2rem] p-4 gap-6 group hover:border-amber-500/30 dark:hover:border-amber-500/40 transition-all duration-300 cursor-pointer"
                            >
                                <div className="relative w-full sm:w-40 aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shrink-0">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm rounded-lg p-2 text-center min-w-[50px]">
                                        <span className="block text-lg font-black text-white leading-none">{event.day}</span>
                                        <span className="block text-[8px] font-bold text-amber-500 uppercase">{event.month}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center flex-1 pr-2">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[8px] font-black text-amber-600 uppercase tracking-widest border border-amber-600/20 px-2 py-0.5 rounded-md">{event.category}</span>
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase leading-none mb-1 group-hover:text-amber-600 transition-colors">{event.title}</h4>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-3">{event.subtitle}</p>
                                    <div className="space-y-1.5 mb-4">
                                        <div className="flex items-center text-[10px] font-medium text-slate-400">
                                            <MapPin size={12} className="mr-2 text-slate-300" /> {event.location}
                                        </div>
                                        <div className="flex items-center text-[10px] font-medium text-slate-400">
                                            <Clock size={12} className="mr-2 text-slate-300" /> {event.time}
                                        </div>
                                    </div>
                                    <button className="flex items-center text-xs font-black text-slate-900 dark:text-white uppercase group/btn w-fit hover:text-amber-600 transition-colors">
                                        <span className="mr-2">View Details</span>
                                        <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover/btn:bg-amber-600 group-hover/btn:text-white transition-colors">
                                            <ArrowRight size={10} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default EventsSection;
