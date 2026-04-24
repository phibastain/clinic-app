'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Facebook, Twitter, MessageCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { IEvent } from '@/types';
import { getEventSlug } from '@/utils/eventUtils';
import { useTranslation } from '@/hooks/useTranslation';
import Container from '@/components/ui/Container';
import GradientButton from '@/components/ui/GradientButton';
import { sanitizeHtmlContent } from '@/utils/sanitize';
import { getLocalizedField } from '@/utils/langUtils';

interface EventDetailClientProps {
    event: IEvent;
    relatedEvents: IEvent[];
}

export default function EventDetailClient({ event, relatedEvents }: EventDetailClientProps) {
    const { lang } = useLanguage();
    const { t } = useTranslation();

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
            <div className="relative pb-8">
                <div className="relative h-[380px] overflow-hidden rounded-b-3xl">
                    <div className="absolute inset-0 bg-cover bg-center transform scale-105" style={{ backgroundImage: `url(${event.image})` }} />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />

                    <Container className="relative h-full flex items-center">
                        <div className="max-w-3xl pt-8">
                            <Link 
                                href="/" 
                                className="group flex items-center space-x-2 text-white/90 hover:text-white transition-all text-sm font-bold bg-black/30 hover:bg-black/50 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg hover:shadow-cyan-500/20 mb-8 w-fit"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                <span>{t('Back to Home')}</span>
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-[1.15] uppercase tracking-tight drop-shadow-lg">
                                {getLocalizedField(event, 'title', lang, t)}
                            </h1>
                            <p className="text-base md:text-lg text-cyan-100/90 font-medium leading-relaxed max-w-2xl drop-shadow-md">
                                {getLocalizedField(event, 'subtitle', lang, t)}
                            </p>
                        </div>
                    </Container>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-4 pb-12">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-linear-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">{t('About This Event')}</h2>
                                {event.content || (lang !== 'EN' && (event.contentTH || event.contentAR)) ? (
                                    <div 
                                        className="prose prose-lg prose-invert max-w-none text-slate-100 font-medium" 
                                        dangerouslySetInnerHTML={{ __html: sanitizeHtmlContent(getLocalizedField(event, 'content', lang, t) || '') }} 
                                    />
                                ) : (
                                    <p className="text-slate-100 leading-relaxed text-lg font-medium whitespace-pre-line">
                                        {getLocalizedField(event, 'description', lang, t)}
                                    </p>
                                )}
                            </div>

                            <div className="bg-linear-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{t('Share This Event')}</h3>
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

                        <div className="lg:col-span-1 space-y-8">
                            <div className="sticky top-24 space-y-8">

                                {relatedEvents.length > 0 && (
                                    <div className="bg-linear-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                                        <h3 className="text-xl font-black text-white mb-6 flex items-center">
                                            <span className="w-1 h-6 bg-cyan-400 rounded-full mr-3 shadow-lg shadow-cyan-400/50"></span>
                                            {t('More Expertise')}
                                        </h3>
                                        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                                            {relatedEvents.map((relatedEvent) => (
                                                <Link
                                                    key={relatedEvent.id}
                                                    href={`/events/${getEventSlug(relatedEvent)}`}
                                                    className="group w-full text-left block p-3 rounded-xl hover:bg-white/5 transition-all"
                                                >
                                                    <div className="flex space-x-3">
                                                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                                                            <Image src={relatedEvent.image} alt={relatedEvent.title} fill className="object-cover group-hover:scale-110 transition-transform duration-300" sizes="64px" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-linear-to-r ${getCategoryColor(relatedEvent.category)} text-white mb-1`}>
                                                                {relatedEvent.category}
                                                            </span>
                                                            <h4 className="text-sm font-bold text-white line-clamp-2 group-hover:text-cyan-400 transition-colors">
                                                                {getLocalizedField(relatedEvent, 'title', lang, t)}
                                                            </h4>
                                                            <span className="text-xs text-slate-400 flex items-center mt-1">
                                                                <Calendar size={10} className="mr-1" />{relatedEvent.day} {relatedEvent.month}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
