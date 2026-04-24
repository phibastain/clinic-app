'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { languages } from '@/data/mockData';

interface LanguageDropdownProps {
    lang: 'EN' | 'TH' | 'AR';
    setLang: (lang: 'EN' | 'TH' | 'AR') => void;
}

const LanguageDropdown = ({ lang, setLang }: LanguageDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const getLangUrl = (code: string) => {
        // Prevent hydration errors or missing hooks on edge cases
        if (!pathname) return '/';
        const params = new URLSearchParams(searchParams?.toString() || '');
        if (code === 'EN') {
            params.delete('lang');
        } else {
            params.set('lang', code.toLowerCase());
        }
        const queryStr = params.toString();
        return `${pathname}${queryStr ? `?${queryStr}` : ''}`;
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLang = languages.find(l => l.code === lang) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full transition-all border border-white/10 group min-w-[70px]"
            >
                <Image
                    src={currentLang.flag}
                    alt={currentLang.label}
                    width={20}
                    height={14}
                    className="object-cover rounded-[2px] shadow-sm"
                />
                <span className="text-[10px] font-bold text-slate-200">{currentLang.code}</span>
                <ChevronDown size={12} className={`text-slate-300 group-hover:text-amber-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute top-full right-0 mt-2 w-40 bg-[#1a1a2e]/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/10 overflow-hidden z-[200] origin-top-right transition-all duration-200 ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="py-1">
                    {languages.map((l) => (
                        <Link
                            key={l.code}
                            href={getLangUrl(l.code)}
                            onClick={() => { setLang(l.code as 'EN' | 'TH' | 'AR'); setIsOpen(false); }}
                            className={`w-full flex items-center space-x-3 px-4 py-2.5 text-left hover:bg-white/5 transition-colors ${lang === l.code ? 'bg-amber-900/10' : ''}`}
                        >
                            <Image
                                src={l.flag}
                                alt={l.label}
                                width={24}
                                height={16}
                                className="object-cover rounded-[2px] shadow-sm"
                            />
                            <span className={`text-[10px] font-bold uppercase tracking-wide ${lang === l.code ? 'text-amber-500' : 'text-slate-400'}`}>
                                {l.label}
                            </span>
                            {lang === l.code && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500"></div>}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageDropdown;
