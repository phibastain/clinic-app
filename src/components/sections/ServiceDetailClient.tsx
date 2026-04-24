'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    Calendar, ChevronLeft, Users2, CheckSquare, Zap, Stethoscope,
    BarChart3, TrendingUp, Timer, ShieldCheck, CheckCircle2, HelpCircle
} from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICE_DETAILS_DATA } from '@/data/mockData';
import { serviceNameToSlug } from '@/utils/serviceUtils';
import Container from '@/components/ui/Container';
import GradientButton from '@/components/ui/GradientButton';
import { sanitizeHtmlContent } from '@/utils/sanitize';
import ExploreServices from './ExploreServices';
import { useTranslation } from '@/hooks/useTranslation';

const formatContent = (content: string) => {
    if (!content) return '';

    // Sanitize first
    let html = sanitizeHtmlContent(content);

    // Handle Markdown headers
    html = html.replace(/^#### (.*$)/gim, '<h4 class="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase tracking-tight">$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-black text-slate-900 dark:text-white mt-10 mb-6 uppercase tracking-wider border-l-4 border-amber-500 pl-4">$1</h3>');

    // Handle Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white font-black">$1</strong>');

    // Handle Lists (simple bullet points)
    html = html.replace(/^\* (.*$)/gim, '<li class="ml-4 mb-2 list-disc">$1</li>');

    // Handle Line Breaks
    html = html.replace(/\n\n/g, '<br/><br/>');
    html = html.replace(/\n/g, '<br/>');

    return html;
};

interface ServiceDetailClientProps {
    serviceName: string;
    slug: string;
}

export default function ServiceDetailClient({ serviceName, slug }: ServiceDetailClientProps) {
    const router = useRouter();
    const [service] = useState(SERVICE_DETAILS_DATA[serviceName]);
    const { t, lang } = useTranslation();

    if (!service) return null;

    const isAR = lang === 'AR';

    // Helper: pick AR field if available, else fall back to EN
    const ar = <T,>(en: T, arField: T | undefined): T =>
        (isAR && arField !== undefined && arField !== null) ? arField : en;

    // Core display fields
    const sTitle       = ar(service.title,      service.titleAR);
    const sTagline     = ar(service.tagline,     service.taglineAR);
    const sDescription = ar(service.description, service.descriptionAR);
    const sWhatIsItTitle = ar(service.whatIsIt?.title,       service.whatIsItAR?.title);
    const sWhatIsItDesc  = ar(service.whatIsIt?.description, service.whatIsItAR?.description);

    // Array fields
    const sProcedure   = ar(service.procedure,  service.procedureAR)  ?? [];
    const sFaq         = ar(service.faq,         service.faqAR)        ?? [];
    const sCandidates  = ar(service.candidates,  service.candidatesAR) ?? [];

    // Safety
    const sSafetyTitle   = ar(service.safety?.title,   service.safetyAR?.title);
    const sSafetyContent = ar(service.safety?.content, service.safetyAR?.content);

    // Stats: values stay as numbers; only labels translate
    const getStatLabel = (idx: number) =>
        (isAR && service.statsAR?.[idx]?.label) ? service.statsAR[idx].label : (service.stats?.[idx]?.label ?? '');

    // Comparison
    const comp    = (isAR && service.comparisonAR) ? service.comparisonAR : service.comparison;
    const compHeader0 = comp?.headers?.[0] ?? '';
    const compHeader1 = comp?.headers?.[1] ?? '';

    // Timeline
    const tl = (isAR && service.timelineAR) ? service.timelineAR : service.timeline;

    // STD / Lab Testing
    const sTestPanels = ar(service.testPanels, service.testPanelsAR);
    const sDiseaseTable = ar(service.diseaseTable, service.diseaseTableAR);

    return (
        <>
            {/* Main Content */}
            <main className="relative z-10 text-left">
                <div className="animate-slide-in-up">
                    {/* Hero Section */}
                    <div className="relative min-h-[70vh] h-auto flex items-center overflow-hidden border-b border-white/5 py-24 md:py-0 text-left">
                        <div className="absolute inset-0 z-0 bg-slate-900 text-left">
                            <Image src={service.heroImage || ''} alt={service.title} fill sizes="100vw" className="object-cover opacity-50 blur-[2px]" priority />
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-size-[40px_40px] opacity-20 dark:opacity-40" />
                            <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/80 to-slate-900/40 dark:from-[#050505] dark:via-[#050505]/90 dark:to-transparent" />
                        </div>

                        <Container className="relative z-10 text-white w-full text-left">
                            <button onClick={() => router.push('/#services')} className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-amber-500 mb-8 transition-colors group backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full w-fit border border-white/10 hover:border-amber-500/50">
                                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                <span>{t('Back to Services')}</span>
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center text-left">
                                <div className="md:col-span-8 text-left">
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[0.9] uppercase tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 drop-shadow-2xl whitespace-pre-line text-left">
                                        {sTitle}
                                    </h1>
                                    <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl border-l-2 border-amber-500 pl-6 mb-8 text-left">
                                        {sTagline}
                                    </p>
                                    <div className="flex gap-4 mt-10 text-left">
                                        <GradientButton icon={Calendar} onClick={() => router.push('/#contact')} className="px-8 border border-white/10">{t('Book Session')}</GradientButton>
                                    </div>
                                </div>

                                {service.stats && (
                                    <div className="md:col-span-4 grid grid-cols-2 gap-3 mt-8 md:mt-0 text-left">
                                        {service.stats.map((stat: any, idx: number) => (
                                            <div key={idx} className="bg-black/30 backdrop-blur-md border border-white/10 p-4 rounded-xl text-left">
                                                <stat.icon className="text-amber-500 mb-2" size={20} />
                                                <div className="text-2xl font-black text-white leading-none mb-1">{stat.value}</div>
                                                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">{getStatLabel(idx)}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Container>
                    </div>

                    {/* Content Section */}
                    <div className="bg-slate-50 dark:bg-[#080a10] py-16 relative text-left">
                        <Container className="text-left">
                            {/* What is It Section */}
                            {service.whatIsIt && (
                                <div className={`mb-20 ${service.whatIsIt.image ? 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' : 'w-full text-left'}`}>
                                    {service.whatIsIt.image && (
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group h-auto order-2 lg:order-1 text-left">
                                            <Image src={service.whatIsIt.image || ''} alt={service.whatIsIt.title || 'Service Image'} width={800} height={600} className="w-full h-auto object-contain" />
                                        </div>
                                    )}
                                    <div className={service.whatIsIt.image ? 'order-1 lg:order-2' : ''}>
                                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase mb-8 flex items-center gap-3 text-left">
                                            <Zap className="text-amber-600" size={32} /> {sWhatIsItTitle}
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-loose font-medium whitespace-pre-line text-justify">
                                            {sWhatIsItDesc}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Clinical Mechanism */}
                            <div className="mb-16 text-left">
                                {service.description && (
                                    <>
                                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase mb-8 flex items-center gap-3 text-left">
                                            <Stethoscope className="text-amber-600" size={28} /> {t('Clinical Mechanism')}
                                        </h2>

                                        <div className={`mb-10 ${service.descriptionImage ? 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-start' : 'w-full'}`}>
                                            <div className="space-y-6">
                                                <div
                                                    className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium text-justify richness-content"
                                                    dangerouslySetInnerHTML={{ __html: formatContent(sDescription) }}
                                                />
                                            </div>

                                            {service.descriptionImage && (
                                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center">
                                                    <Image
                                                        src={service.descriptionImage || ''}
                                                        alt="Clinical Mechanism"
                                                        width={800}
                                                        height={600}
                                                        className="w-full h-auto block"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                                {sTestPanels && (
                                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                                        {sTestPanels.map((panel: any, pIdx: number) => (
                                            <div key={pIdx} className="bg-white dark:bg-[#12141c] p-6 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-3 bg-amber-500/10 rounded-2xl">
                                                        {panel.icon ? <panel.icon className="text-amber-600" size={24} /> : <div className="w-6 h-6 bg-amber-500/20 rounded-full" />}
                                                    </div>
                                                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">{t(panel.title)}</h3>
                                                </div>
                                                <ul className="space-y-3">
                                                    {panel.items.map((item: string, iIdx: number) => (
                                                        <li key={iIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                                                            <CheckSquare className="text-amber-500 shrink-0 mt-0.5" size={16} />
                                                            <span>{t(item)}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {sDiseaseTable && (
                                    <div className="space-y-8 text-left mb-16">
                                        {sDiseaseTable.categories.map((cat: any, idx: number) => (
                                            <div key={idx} className="bg-white dark:bg-[#12141c] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-lg text-left">
                                                <div className="bg-slate-900 dark:bg-slate-800 p-4 text-white font-bold uppercase text-sm text-left flex items-center justify-between">
                                                    <span>{t(cat.category)}</span>
                                                    {cat.curable !== undefined && (
                                                        <span className={`text-[10px] px-2 py-1 rounded-full ${cat.curable ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                                                            {cat.curable ? t('Curable') : t('Manageable')}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="p-6 overflow-x-auto text-left">
                                                    <table className="w-full text-left">
                                                        <thead>
                                                            <tr className="border-b border-slate-100 dark:border-white/5 text-left">
                                                                <th className="py-2 text-xs uppercase tracking-widest text-slate-400 text-left w-1/3">{t('Condition')}</th>
                                                                <th className="py-2 text-xs uppercase tracking-widest text-slate-400 text-left">{t('Symptoms & Signs')}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-slate-50 dark:divide-white/5 text-left">
                                                            {cat.diseases.map((disease: any, dIdx: number) => (
                                                                <tr key={dIdx} className="text-left group">
                                                                    <td className="py-4 pr-4 transition-colors group-hover:text-amber-500 text-left">
                                                                        <div className="flex items-center gap-3">
                                                                            {disease.icon && <disease.icon size={18} className="text-amber-600/50" />}
                                                                            <span className="font-bold text-slate-900 dark:text-white text-sm">{t(disease.name)}</span>
                                                                        </div>
                                                                    </td>
                                                                    <td className="py-4 text-sm text-slate-600 dark:text-slate-400 text-left leading-relaxed">{t(disease.symptoms)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Procedure & Safety */}
                            <div className="grid lg:grid-cols-2 gap-8 mb-16">
                                {sProcedure.length > 0 && (
                                    <div className="bg-slate-900 dark:bg-black rounded-3xl border border-white/10 overflow-hidden text-left flex flex-col p-8">
                                        <h3 className="text-xl font-black text-white uppercase mb-8 flex items-center gap-3">
                                            <Timer className="text-amber-500" /> {t('Treatment Procedure')}
                                        </h3>
                                        <div className="space-y-8">
                                            {sProcedure.map((p: any, idx: number) => (
                                                <div key={idx} className="flex gap-4 group">
                                                    <div className="shrink-0 w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-500 font-bold text-xs group-hover:bg-amber-500 group-hover:text-black transition-colors">
                                                        {p.step}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-bold mb-1">{p.title}</h4>
                                                        <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-8">
                                    {service.safety && (
                                        <div className="bg-white dark:bg-[#12141c] p-8 rounded-3xl border border-slate-200 dark:border-white/5 text-left">
                                            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase mb-6 flex items-center gap-3">
                                                <ShieldCheck className="text-emerald-500" /> {sSafetyTitle}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                                                {sSafetyContent}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs font-bold text-emerald-500 uppercase tracking-widest">
                                                <CheckCircle2 size={16} />
                                                <span>{t('Medical Standard Guaranteed')}</span>
                                            </div>
                                        </div>
                                    )}

                                    {sCandidates.length > 0 && (
                                        <div className="bg-white dark:bg-[#12141c] p-8 rounded-3xl border border-slate-200 dark:border-white/5 text-left">
                                            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase mb-6 flex items-center gap-3">
                                                <Users2 className="text-amber-600" /> {t('Suitable Candidates')}
                                            </h3>
                                            <ul className="space-y-4">
                                                {sCandidates.map((c: string, idx: number) => (
                                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                                        <span>{c}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Comparison & Timeline */}
                            <div className="grid lg:grid-cols-2 gap-8 mb-16 text-left">
                                {comp && (
                                    <div className="bg-slate-900 dark:bg-black rounded-3xl border border-white/10 overflow-hidden text-left h-full flex flex-col">
                                        <div className="p-6 border-b border-white/10 bg-white/5 flex flex-col gap-2 text-left">
                                            <h3 className="text-white font-black uppercase text-sm flex items-center gap-2 text-left">
                                                <BarChart3 className="text-amber-500" /> {comp.title}
                                            </h3>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest">{comp.subtitle}</p>
                                        </div>
                                        <div className="p-0 flex-1 text-left">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="border-b border-white/5 bg-white/5">
                                                        <th className="p-4 text-[10px] uppercase font-bold text-slate-500">{t('Feature')}</th>
                                                        <th className="p-4 text-[10px] uppercase font-bold text-amber-500 text-center">{compHeader0}</th>
                                                        <th className="p-4 text-[10px] uppercase font-bold text-slate-500 text-center">{compHeader1}</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-white/5">
                                                    {comp.items.map((item: any, idx: number) => (
                                                        <tr key={idx} className="group hover:bg-white/5 transition-colors">
                                                            <td className="p-4">
                                                                <div className="flex items-center gap-2">
                                                                    {item.icon && <item.icon size={14} className="text-slate-600" />}
                                                                    <span className="text-slate-400 text-[11px] font-bold uppercase">{item.feature}</span>
                                                                </div>
                                                            </td>
                                                            <td className="p-4 text-center">
                                                                <span className="text-amber-500 font-black text-xs">{item.focus}</span>
                                                            </td>
                                                            <td className="p-4 text-center">
                                                                <span className="text-slate-500 font-medium text-xs">{item.radial}</span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {tl && (
                                    <div className="bg-white dark:bg-[#12141c] p-8 rounded-3xl border border-slate-200 dark:border-white/5 text-left h-full flex flex-col">
                                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase mb-8 flex items-center gap-2 text-left">
                                            <TrendingUp className="text-amber-600" /> {tl.title}
                                        </h3>
                                        <div className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800 space-y-10 text-left">
                                            {tl.steps.map((step: any, idx: number) => (
                                                <div key={idx} className="relative text-left">
                                                    <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-900 dark:bg-white border-4 border-white dark:border-slate-900 shadow-xl flex items-center justify-center text-[10px] font-bold z-10 text-left">
                                                        {idx + 1}
                                                    </div>
                                                    <div className="text-[10px] uppercase font-black text-amber-600 mb-1">{step.time}</div>
                                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white text-left mb-1">{step.title}</h4>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 text-left leading-relaxed">{step.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* FAQ */}
                            {sFaq.length > 0 && (
                                <div className="mb-16 text-left">
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-8 text-left flex items-center gap-3">
                                        <HelpCircle className="text-amber-600" /> {t('Frequently Asked Questions')}
                                    </h2>
                                    <div className="grid gap-4 text-left">
                                        {sFaq.map((item: any, idx: number) => (
                                            <div key={idx} className="bg-white dark:bg-[#12141c] p-6 rounded-2xl border border-slate-200 dark:border-white/5 text-left group hover:border-amber-500/30 transition-all shadow-sm hover:shadow-md">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-left flex items-start gap-4">
                                                    <span className="shrink-0 w-6 h-6 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 text-xs">Q</span>
                                                    {item.q || item.question}
                                                </h3>
                                                <div className="pl-10">
                                                    <p className="text-sm text-slate-600 dark:text-slate-400 text-left leading-relaxed">{item.a || item.answer}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4 text-center tracking-tight">{t('Ready to Start?')}</h2>
                                    <p className="text-slate-400 max-w-xl mx-auto text-base md:text-lg mb-10 leading-relaxed font-medium">
                                        {t('Consult with our Board-certified specialists at M-Trust Urology for')} <span className="text-amber-500">{sTitle}</span>.
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-4 text-left">
                                        <GradientButton onClick={() => router.push('/#contact')} className="px-10 py-4 h-14">{t('BOOK APPOINTMENT')}</GradientButton>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>

                    {/* Explore Other Services */}
                    <ExploreServices currentServiceName={serviceName} />
                </div >
            </main >
        </>
    );
}
