'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
    Calendar, Clock, MapPin, Share2, Facebook, Twitter,
    MessageCircle, ChevronRight, Tag, Mail, Phone,
    ArrowLeft, Video, Briefcase, User
} from 'lucide-react';
import Container from '@/components/ui/Container';
import GradientButton from '@/components/ui/GradientButton';

interface EventDetailClientProps {
    event: any;
    relatedEvents: any[];
}

export default function EventDetailClient({ event, relatedEvents }: EventDetailClientProps) {
    const router = useRouter();

    const getCategoryColor = (category: string) => {
        switch (category.toUpperCase()) {
            case 'SEMINAR': return 'from-purple-500 to-pink-500';
            case 'WORKSHOP': return 'from-blue-500 to-cyan-500';
            case 'WEBINAR': return 'from-green-500 to-emerald-500';
            case 'ACTIVITY': return 'from-orange-500 to-amber-500';
            default: return 'from-purple-500 to-pink-500';
        }
    };

    const shareEvent = (platform: string) => {
        const url = typeof window !== 'undefined' ? window.location.href : '';
        const text = `${event.title} - ${event.subtitle}`;

        const shareUrls: Record<string, string> = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
            line: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    };

    return (
        <div className="min-h-screen relative overflow-x-hidden text-left bg-slate-900 selection:bg-amber-500 selection:text-white font-sans">
            {/* Hero Section */}
            <div className="relative pb-20">
                <div className="relative h-[500px] overflow-hidden rounded-b-3xl">
                    <div className="absolute inset-0 bg-cover bg-center transform scale-105" style={{ backgroundImage: `url(${event.image})` }} />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />
                    <div className="absolute top-8 right-8 bg-linear-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center shadow-2xl">
                        <div className="text-5xl font-bold text-white mb-1">{event.day}</div>
                        <div className="text-sm font-semibold text-cyan-300 tracking-wider uppercase">{event.month}</div>
                        <div className="text-xs text-slate-300 mt-1">{event.year}</div>
                    </div>

                    <Container className="relative h-full flex items-end pb-12">
                        <div className="max-w-3xl">
                            <span className={`inline-block px-4 py-2 rounded-full text-xs font-semibold bg-linear-to-r ${getCategoryColor(event.category)} text-white mb-4`}>
                                {event.category}
                            </span>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight uppercase tracking-tight">{event.title}</h1>
                            <p className="text-xl text-cyan-200 mb-6 font-medium">{event.subtitle}</p>
                            <div className="flex flex-wrap items-center gap-6 text-slate-300">
                                <div className="flex items-center space-x-2">
                                    <MapPin size={20} className="text-cyan-400" />
                                    <span className="font-medium text-sm">{event.location}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock size={20} className="text-cyan-400" />
                                    <span className="font-medium text-sm">{event.time}</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-12">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-linear-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">About This Event</h2>
                                <p className="text-slate-100 leading-relaxed text-lg font-medium whitespace-pre-line">{event.description}</p>
                            </div>

                            <div className="bg-linear-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Share This Event</h3>
                                <div className="flex flex-wrap gap-4">
                                    <button onClick={() => shareEvent('facebook')} className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition-all font-bold text-sm shadow-lg">
                                        <Facebook size={20} /><span>Facebook</span>
                                    </button>
                                    <button onClick={() => shareEvent('twitter')} className="flex items-center space-x-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-xl text-white transition-all font-bold text-sm shadow-lg">
                                        <Twitter size={20} /><span>Twitter</span>
                                    </button>
                                    <button onClick={() => shareEvent('line')} className="flex items-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-white transition-all font-bold text-sm shadow-lg">
                                        <MessageCircle size={20} /><span>LINE</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 bg-linear-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-6 border border-cyan-400/20 space-y-6 shadow-2xl">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Event Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <Calendar size={20} className="text-cyan-400 mt-1" />
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-black mb-1">Date</p>
                                            <p className="text-white font-bold">{event.day} {event.month} {event.year}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Clock size={20} className="text-cyan-400 mt-1" />
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-black mb-1">Time</p>
                                            <p className="text-white font-bold">{event.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <MapPin size={20} className="text-cyan-400 mt-1" />
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-black mb-1">Location</p>
                                            <p className="text-white font-bold">{event.location}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-white/10">
                                    <GradientButton onClick={() => router.push('/#contact')} className="w-full justify-center py-4">Register Now</GradientButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
