'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DOCTORS, DoctorData } from '@/data/mockData';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

const DoctorsList = () => {
    const router = useRouter();

    return (
        <section id="doctors" className="pt-8 pb-16 bg-linear-to-b from-slate-50/90 to-indigo-50/20 dark:from-[#0f1115]/90 dark:to-[#1a1a2e]/80 backdrop-blur-sm scroll-mt-24 text-left">
            <Container>
                <SectionTitle tag="Doctors Section" title="Our Specialists" className="items-center" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto text-left">
                    {DOCTORS.filter(doc => doc.slug !== 'dr.none').map(doc => {
                        return (
                            <div
                                key={doc.id}
                                onClick={() => router.push(`/urologist/${doc.slug}`)}
                                className="group text-center cursor-pointer"
                            >
                                <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] border-2 border-white/50 dark:border-white/10 shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.02)] mb-4 text-left">
                                    <Image src={doc.image} alt={doc.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase border border-white/30">View Profile</span>
                                    </div>
                                </div>
                                <p className="text-[8px] md:text-[9px] font-black text-amber-600 uppercase tracking-widest mb-1 text-center">{doc.expert}</p>
                                <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white uppercase leading-tight text-center">{doc.name}</h3>
                                <p className="text-slate-500 text-[10px] md:text-xs italic text-center">{doc.role}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default DoctorsList;
