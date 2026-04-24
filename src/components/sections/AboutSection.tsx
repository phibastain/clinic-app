'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import GradientButton from '@/components/ui/GradientButton';
import { ABOUT_SPECIALTIES } from '@/data/mockData';
import { useTranslation } from '@/hooks/useTranslation';

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="pt-8 pb-16 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left">
            <Container>
                <SectionTitle tag={t("Excellence in Care")} title={t("M-Trust Urology Clinic")} />
                <div className="grid md:grid-cols-2 gap-12 items-center mb-10 text-left">
                    <div className="space-y-4 text-left">
                        <p className="text-lg md:text-xl text-slate-800 dark:text-white font-bold leading-tight uppercase tracking-tighter text-left">
                            {t("Center of Excellence in Urology & Men's Health")}
                        </p>
                        <div className="space-y-4 text-slate-500 dark:text-slate-400 text-base leading-relaxed font-medium text-left">
                            <p>{t("M-Trust Urology Clinic is a leading specialized clinic providing a full spectrum of urology and men's health services. We focus on diagnosing and treating urological diseases and restoring sexual performance through innovative medical solutions. Our clinic is powered by a team of expert urologists from top-tier medical institutions, ensuring every procedure meets international healthcare standards.")}</p>
                            <p>{t("We prioritize the utmost patient privacy and a confidential environment for all our clients. We combine clinical expertise with advanced technology to offer effective medical and surgical solutions. Whether it's diagnosis or complex surgery, our goal is to help you return to your daily life with total confidence.")}</p>
                        </div>
                        <Link href="/urologist/dr.niti">
                            <GradientButton
                                variant="outline"
                                className="px-8 py-3.5 rounded-xl text-[10px] text-left"
                            >
                                {t("Credential Experts")}
                            </GradientButton>
                        </Link>
                    </div>
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 dark:border-white/10">
                        <Image src="/assets/image/about section/clinic inside.webp" alt="M-Trust Urology Clinic facility" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
                    {ABOUT_SPECIALTIES.map((item, index) => (
                        <div key={index} className="group flex bg-linear-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/10 transition-all duration-300 hover:border-amber-600/30 dark:hover:border-amber-500/40">
                            <div className="relative w-32 sm:w-40 shrink-0 overflow-hidden text-left"><Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 128px, 160px" className="object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                            <div className="p-6 flex flex-col justify-center text-left">
                                <div className="flex items-center space-x-2 mb-2 text-left"><item.Icon size={16} className="text-amber-600" /><h3 className="text-sm font-black text-slate-900 dark:text-white uppercase text-left">{t(item.title)}</h3></div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium text-left">{t(item.desc)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default AboutSection;
