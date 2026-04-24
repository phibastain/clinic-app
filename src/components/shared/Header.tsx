'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Home, Info, Stethoscope, Users, FileText, Calendar, HelpCircle, ChevronDown, Mail, Clock, User, Menu, X, Headset, Award } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/mockData';
import Container from '@/components/ui/Container';
import GradientButton from '@/components/ui/GradientButton';
import Logo from '@/components/ui/Logo';
import ThemeSwitch from '@/components/shared/ThemeSwitch';
import LanguageDropdown from '@/components/shared/LanguageDropdown';
import MegaMenu from '@/components/shared/MegaMenu';
import { serviceNameToSlug } from '@/utils/serviceUtils';
import Link from 'next/link';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useTranslation } from '@/hooks/useTranslation';

interface HeaderProps {
    activeSection?: string;
    scrollToSection?: (id: string) => void;
    onBackToHome?: () => void;
    onServiceClick?: (name: string) => void;
}

const Header = ({ activeSection, scrollToSection, onBackToHome, onServiceClick }: HeaderProps) => {
    const router = useRouter();
    const { isDark, toggleTheme } = useTheme();
    const { lang, setLang } = useLanguage();
    const { t } = useTranslation();

    const setIsDark = (val: boolean) => {
        // Support the existing prop-like usage if needed, but primarily use toggleTheme
        if (val !== isDark) toggleTheme();
    };
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState("");

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        setMounted(true);
        const updateTime = () => setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }));
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    const menuItems = [
        { title: 'Home', icon: Home },
        { title: 'About', icon: Info },
        { title: 'Services', icon: Stethoscope, mega: true, submenu: SERVICE_CATEGORIES },
        { title: 'Doctors', icon: Users },
        { title: 'Blog', icon: FileText },
        { title: 'Expertise', icon: Award, disabled: false },
        { title: 'FAQ', icon: HelpCircle },
    ];

    const handleNavClick = (sectionId: string) => {
        if (onBackToHome) {
            onBackToHome();
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) {
                    const offset = 85;
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 100);
        } else if (scrollToSection) {
            scrollToSection(sectionId);
        } else {
            // Default behavior for Layout Header: check if we are on home
            if (window.location.pathname === '/') {
                const el = document.getElementById(sectionId);
                if (el) {
                    const offset = 85;
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            } else {
                router.push(`/#${sectionId}`);
            }
        }
    };

    const handleServiceClick = (name: string) => {
        if (onServiceClick) {
            onServiceClick(name);
        }
    };

    const renderMobileMenu = () => (
        <div className={`fixed inset-0 z-[200] bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-xl transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-white/10">
                <Logo onClick={() => { handleNavClick('home'); setIsMobileMenuOpen(false); }} />
                <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close navigation menu" className="p-2 text-slate-500 hover:text-amber-600 transition-colors">
                    <X size={24} />
                </button>
            </div>
            <div className="p-6 flex flex-col space-y-4 overflow-y-auto h-[calc(100vh-180px)]">
                {menuItems.map((item, idx) => (
                    <div key={idx}>
                        {item.mega ? (
                            <div>
                                <button
                                    onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === item.title ? null : item.title)}
                                    className="flex justify-between items-center w-full text-lg font-bold text-slate-900 dark:text-white py-2"
                                >
                                    {item.title}
                                    <ChevronDown size={16} className={`transition-transform ${activeMobileSubmenu === item.title ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`pl-4 space-y-4 overflow-hidden transition-all duration-300 ${activeMobileSubmenu === item.title ? 'max-h-[1000px] mt-2' : 'max-h-0'}`}>
                                    {Object.entries(item.submenu as Record<string, any[]>).map(([cat, links], i) => (
                                        <div key={i}>
                                            <h5 className="text-xs font-black text-amber-600 uppercase tracking-widest mb-2">{cat}</h5>
                                            <ul className="space-y-2 border-l-2 border-slate-100 dark:border-slate-800 pl-4">
                                                {links.map((link: any, j: number) => (
                                                    <li key={j}>
                                                        <Link
                                                            href={`/services/${serviceNameToSlug(link.name)}`}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="text-sm text-slate-500 dark:text-slate-400 font-medium hover:text-amber-600 w-full text-left block"
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => {
                                    if (!item.disabled) {
                                        handleNavClick(item.title.toLowerCase());
                                        setIsMobileMenuOpen(false);
                                    }
                                }}
                                className={`text-lg font-bold py-2 block text-left w-full ${item.disabled ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed opacity-50' : 'text-slate-900 dark:text-white hover:text-amber-600'}`}
                            >
                                {item.title}
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 border-t border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/5">
                <GradientButton onClick={() => { handleNavClick('contact'); setIsMobileMenuOpen(false); }} className="w-full justify-center" icon={Calendar}>{t('Book Appointment')}</GradientButton>
            </div>
        </div>
    );

    return (
        <header className="fixed top-0 w-full z-[100] transition-all duration-500">
            {/* Top Bar */}
            <div className={`relative z-[110] bg-[#020617] border-b border-white/5 transition-all duration-500 ${isScrolled ? 'max-h-0 opacity-0 transform -translate-y-full overflow-hidden' : 'max-h-10 opacity-100 overflow-visible'}`}>
                <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#0f172a] to-[#020617]"></div>
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_70%)]"></div>
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                    <div className="absolute top-0 bottom-0 w-[150%] h-full bg-linear-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 blur-xl animate-shimmer-natural left-[-150%]"></div>
                    <div className="absolute top-0 bottom-0 w-[50%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 blur-lg animate-shimmer-natural delay-150 left-[-150%] opacity-80"></div>
                </div>

                <Container className="relative z-10 flex justify-between items-center h-10 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    {/* Left: Tele Consultation (Desktop Only) */}
                    <div className="hidden lg:flex flex-1 items-center justify-start">
                        <div className="flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-full border border-white/5 hover:border-amber-500/30 transition-colors group cursor-pointer backdrop-blur-sm">
                            <Headset size={12} className="text-amber-500 group-hover:text-amber-400 transition-colors" />
                            <span className="tracking-wide font-medium normal-case text-slate-300 group-hover:text-white transition-colors">
                                Free Tele Consultation with our Specialists
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 text-center truncate text-slate-500 px-4">
                        {t('Center of Excellence in Urology & Men\'s Health')}
                    </div>

                    {/* Right: Controls */}
                    <div className="flex-1 flex justify-end items-center space-x-3 sm:space-x-6 text-left">
                        <div className="hidden sm:flex items-center space-x-1.5 cursor-pointer hover:text-amber-500 transition-colors text-slate-400">
                            <User size={14} />
                        </div>

                        <div className="flex items-center space-x-3 border-l border-white/10 pl-4 h-full">
                            <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
                            <LanguageDropdown lang={lang} setLang={setLang} />
                        </div>

                        <div className="hidden xs:flex items-center space-x-1.5 text-slate-400 font-medium pl-2 border-l border-white/10">
                            <Clock size={12} className="text-amber-500" />
                            <span className="text-[10px] font-mono tracking-widest text-slate-300">{mounted ? time : "00:00"}</span>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Nav */}
            <nav className={`relative z-[100] transition-all duration-500 ${isScrolled ? 'bg-white dark:bg-slate-950 shadow-xl border-b border-white/10' : 'bg-white dark:bg-slate-950 border-b border-white/10'}`}>
                <Container className="flex items-center justify-between h-[60px] sm:h-auto">
                    <Logo onClick={() => handleNavClick('home')} />
                    <div className="hidden lg:flex items-center gap-0">
                        {menuItems.map((item, idx) => {
                            const sectionId = item.title.toLowerCase();
                            const isActive = activeSection === sectionId;
                            const IconComp = item.icon;
                            return (
                                <div key={idx} className="relative group/nav h-full">
                                    <button
                                        onClick={() => !item.disabled && handleNavClick(sectionId)}
                                        className={`
                                            relative flex items-center space-x-2 px-2 py-5 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300
                                            ${isActive ? 'text-amber-600' : 'text-slate-700 dark:text-slate-300 hover:text-amber-600'}
                                            ${item.disabled ? 'opacity-40 cursor-not-allowed grayscale' : ''}
                                        `}
                                        disabled={item.disabled}
                                    >
                                        <IconComp size={16} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover/nav:scale-110'}`} />
                                        <span>{t(item.title)}</span>
                                        {item.mega && <ChevronDown size={12} className="transition-transform duration-300 group-hover/nav:rotate-180 opacity-70" />}
                                        <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-amber-600 rounded-full transition-all duration-300 ease-out ${isActive ? 'w-[80%] opacity-100 shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'w-0 opacity-0 group-hover/nav:w-[40%] group-hover/nav:opacity-60'}`} />
                                        <span className={`absolute inset-0 bg-amber-500/5 rounded-lg -z-10 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover/nav:opacity-50'}`} />
                                    </button>
                                    {item.mega && <MegaMenu submenu={item.submenu} onServiceClick={handleServiceClick} />}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex items-center space-x-4">
                        <GradientButton onClick={() => handleNavClick('contact')} className="hidden sm:flex px-5 py-2 rounded-full text-[9px]" icon={Calendar}>{t('Book Now')}</GradientButton>
                        <button className="lg:hidden p-2 text-slate-700 dark:text-white hover:text-amber-600 transition-colors" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open navigation menu">
                            <Menu size={24} />
                        </button>
                    </div>
                </Container>
            </nav>
            {renderMobileMenu()}
        </header>
    );
};

export default Header;
