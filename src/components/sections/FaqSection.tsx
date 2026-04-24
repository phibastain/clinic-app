'use client';

import { useState } from 'react';
import { MessageCircle, Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '@/data/mockData';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import GradientButton from '@/components/ui/GradientButton';
import { useTranslation } from '@/hooks/useTranslation';
import { TH_TRANSLATIONS } from '@/data/translations';
import { AR_TRANSLATIONS } from '@/data/arTranslations';
import { useLanguage } from '@/components/providers/LanguageProvider';

interface FaqSectionProps {
    faqs?: Array<{ question?: string; q?: string; answer?: string; a?: string; title?: string }>;
}

const FaqSection = ({ faqs }: FaqSectionProps = {}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { t } = useTranslation();
    const { lang } = useLanguage();

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const displayData = faqs?.length ? faqs : FAQ_DATA;

    return (
        <section id="faq" className="pt-12 pb-20 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left">
            <Container>
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <SectionTitle tag={t("Common Questions")} title={t("Frequently Asked Questions")} />
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                            {t("Find answers to the most common questions about our services, procedures, and patient care policies.")}
                        </p>
                        <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm uppercase tracking-wide">{t("Still have questions?")}</h3>
                                </div>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-[10px] md:text-xs mb-4">{t("Can't find the answer you're looking for? Please chat to our friendly team.")}</p>
                            <GradientButton variant="primary" className="w-full text-[9px] py-2.5">{t("Chat with us")}</GradientButton>
                        </div>
                    </div>
                    <div className="lg:col-span-8 space-y-4">
                        {displayData.map((item: any, index) => {
                            // Try translation for question/answer based on language
                            const qStr = item.question || item.q || '';
                            const aStr = item.answer || item.a || '';
                            const thEntry = lang === 'TH' ? (TH_TRANSLATIONS[qStr as keyof typeof TH_TRANSLATIONS] as any) : null;
                            const arEntry = lang === 'AR' ? (AR_TRANSLATIONS[qStr as keyof typeof AR_TRANSLATIONS] as any) : null;
                            const langEntry = arEntry || thEntry;
                            const displayQ: string = langEntry?.title ?? item.title ?? t(qStr) ?? qStr;
                            const displayA: string = langEntry?.answer ?? t(aStr) ?? aStr;
                            return (
                                <div
                                    key={index}
                                    className={`group border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-white shadow-lg dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900'}`}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className={`text-[13px] md:text-base font-bold uppercase tracking-wide transition-colors ${activeIndex === index ? 'text-amber-600' : 'text-slate-700 dark:text-slate-300'}`}>
                                            {displayQ}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-amber-600 text-white rotate-180' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                                            {activeIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                                        </div>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-6 pt-0 text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium border-t border-slate-100 dark:border-slate-800/50 mt-2">
                                            {displayA}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FaqSection;
