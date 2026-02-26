'use client';

import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import GradientButton from '@/components/ui/GradientButton';
import { ABOUT_SPECIALTIES } from '@/data/mockData';
import { useRouter } from 'next/navigation';

const AboutSection = () => {
    const router = useRouter();

    return (
        <section id="about" className="pt-8 pb-16 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left">
            <Container>
                <SectionTitle tag="Excellence in Care" title="M-Trust Urology Clinic" />
                <div className="grid md:grid-cols-2 gap-12 items-center mb-10 text-left">
                    <div className="space-y-4 text-left">
                        <p className="text-lg md:text-xl text-slate-800 dark:text-white font-bold leading-tight uppercase tracking-tighter text-left">Center of Excellence in Urology &amp; Men&apos;s Health</p>
                        <div className="space-y-3 text-slate-500 dark:text-slate-400 text-base leading-relaxed font-medium text-left">
                            <p>M-Trust Urology Clinic is a leading specialized clinic providing comprehensive men&apos;s health services. We focus on treating conditions with modern innovation and 100% personalized care under international standards.</p>
                            <p>Our team of expert urologists from leading medical institutions is committed to delivering the best treatment results to help you return to your life with confidence.</p>
                            <p>We combine state-of-the-art diagnostic technology with a patient-first philosophy, ensuring that every consultation is conducted with the utmost privacy, professionalism, and understanding of your unique needs.</p>
                        </div>
                        <GradientButton
                            variant="outline"
                            className="px-8 py-3.5 rounded-xl text-[10px] text-left"
                            onClick={() => router.push('/urologist/dr.niti')}
                        >
                            Credential Experts
                        </GradientButton>
                    </div>
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 dark:border-white/10">
                        <img src="/assets/image/about section/clinic inside.webp" alt="M-Trust Urology Clinic facility" className="w-full aspect-video object-cover" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
                    {ABOUT_SPECIALTIES.map((item, index) => (
                        <div key={index} className="group flex bg-linear-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/10 transition-all duration-300 hover:border-amber-600/30 dark:hover:border-amber-500/40">
                            <div className="w-32 sm:w-40 shrink-0 overflow-hidden text-left"><img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                            <div className="p-6 flex flex-col justify-center text-left">
                                <div className="flex items-center space-x-2 mb-2 text-left"><item.Icon size={16} className="text-amber-600" /><h3 className="text-sm font-black text-slate-900 dark:text-white uppercase text-left">{item.title}</h3></div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium text-left">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default AboutSection;
