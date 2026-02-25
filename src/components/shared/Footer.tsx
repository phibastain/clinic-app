'use client';

import { MapPin, Mail } from 'lucide-react';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-16 pb-12 border-t border-slate-200/50 dark:border-white/5 bg-white/90 dark:bg-[#050505]/95 backdrop-blur-3xl rounded-t-[4rem] text-left">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 text-left">
                    <div className="space-y-6 text-left">
                        <Logo onClick={scrollToTop} />
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium italic opacity-80 text-left">
                            M-Trust Urology Clinic delivers specialized care focusing on men&apos;s health and precision surgery.
                        </p>
                    </div>
                    <div className="text-left">
                        <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase text-[10px] tracking-[0.4em] border-l-4 border-amber-600 pl-4 leading-none text-left">Services</h4>
                        <ul className="space-y-3 text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-left">
                            <li>Men&apos;s Performance</li>
                            <li>Urology</li>
                            <li>Aesthetic Surgery</li>
                            <li>Diagnostics Center</li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase text-[10px] tracking-[0.4em] border-l-4 border-amber-600 pl-4 leading-none text-left">Info</h4>
                        <ul className="space-y-3 text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-left">
                            <li>Appointments</li>
                            <li>Our Doctors</li>
                            <li>Packages</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase text-[10px] tracking-[0.4em] border-l-4 border-amber-600 pl-4 leading-none text-left">Contact</h4>
                        <div className="space-y-4 text-xs text-slate-600 dark:text-slate-400 font-semibold tracking-tight text-left">
                            <div className="flex items-center space-x-3 text-left"><MapPin size={14} className="text-amber-600" /> <span>Medical Center, BKK</span></div>
                            <div className="flex items-center space-x-3 text-left"><Mail size={14} className="text-amber-600" /> <span>info@m-trustclinic.com</span></div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.6em] text-left">
                    <p>© 2026 M-TRUST UROLOGY CLINIC. PRECISION IN CARE.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
