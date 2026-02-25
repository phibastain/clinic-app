'use client';

import { DOCTORS, DoctorData } from '@/data/mockData';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

interface DoctorsListProps {
    onSelectDoctor: (doctor: DoctorData) => void;
}

const DoctorsList = ({ onSelectDoctor }: DoctorsListProps) => (
    <section id="doctors" className="pt-8 pb-16 bg-linear-to-b from-slate-50/90 to-indigo-50/20 dark:from-[#0f1115]/90 dark:to-[#1a1a2e]/80 backdrop-blur-sm scroll-mt-24 text-left">
        <Container>
            <SectionTitle tag="Doctors Section" title="Our Specialists" className="items-center" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                {DOCTORS.map(doc => {
                    const isDisabled = doc.id === 3;
                    return (
                        <div
                            key={doc.id}
                            onClick={() => !isDisabled && onSelectDoctor(doc)}
                            className={`group text-center ${isDisabled ? 'cursor-not-allowed opacity-75 pointer-events-none' : 'cursor-pointer'}`}
                        >
                            <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] border-2 border-white/50 dark:border-white/10 shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.02)] mb-4 text-left">
                                <img src={doc.image} alt={doc.name} className={`w-full h-full object-cover transition-transform duration-1000 ${!isDisabled ? 'group-hover:scale-110' : ''}`} />
                                {isDisabled ? (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <span className="px-4 py-2 bg-slate-800/80 backdrop-blur-md rounded-full text-slate-300 text-xs font-bold uppercase border border-white/20">Coming Soon</span>
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase border border-white/30">View Profile</span>
                                    </div>
                                )}
                            </div>
                            <p className="text-[9px] font-black text-amber-600 uppercase tracking-widest mb-1 text-center">{doc.expert}</p>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase leading-tight text-center">{doc.name}</h3>
                            <p className="text-slate-500 text-xs italic text-center">{doc.role}</p>
                        </div>
                    );
                })}
            </div>
        </Container>
    </section>
);

export default DoctorsList;
