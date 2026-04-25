'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_CATEGORIES } from '@/data/mockData';
import { serviceNameToSlug } from '@/utils/serviceUtils';
import GradientButton from '@/components/ui/GradientButton';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useTranslation } from '@/hooks/useTranslation';

interface MegaMenuProps {
    submenu: Record<string, any[]> | undefined;
    onServiceClick?: (name: string) => void;
}

const MegaMenu = ({ submenu, onServiceClick }: MegaMenuProps) => {
    const { lang } = useLanguage();
    const { t } = useTranslation();
    const navT = (key: string): string => lang === 'AR' ? t(key) : key;
    const getFirstImage = () => {
        if (!submenu) return null;
        const firstKey = Object.keys(submenu)[0];
        if (submenu[firstKey] && submenu[firstKey].length > 0) {
            return submenu[firstKey][0].image || null;
        }
        return null;
    };

    const getFirstName = () => {
        if (!submenu) return null;
        const firstKey = Object.keys(submenu)[0];
        if (submenu[firstKey] && submenu[firstKey].length > 0) {
            return submenu[firstKey][0].name || submenu[firstKey][0];
        }
        return 'Menu Item';
    };

    const [activeImg, setActiveImg] = useState<string | null>(getFirstImage());
    const [activeName, setActiveName] = useState<string | null>(getFirstName());

    if (!submenu || Object.keys(submenu).length === 0) return null;

    useEffect(() => {
        setActiveImg(getFirstImage());
        setActiveName(getFirstName());
    }, [submenu]);

    const gridCols = Object.keys(submenu).length >= 4 ? 'grid-cols-4' : `grid-cols-${Object.keys(submenu).length}`;

    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[940px] opacity-0 invisible pointer-events-none group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:pointer-events-auto transition-[opacity,visibility,transform] duration-300 ease-out transform translate-y-1 group-hover/nav:translate-y-0 z-[110]">
            <div className="absolute -top-2 left-0 w-full h-4 bg-transparent" />
            <div className="flex bg-white dark:bg-[#121212] shadow-[0_40px_100px_rgba(0,0,0,0.25)] rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 w-full mt-2">
                {/* Content Side - Fixed Width, Dynamic Height */}
                <div className="w-[620px] px-8 pt-5 pb-6 shrink-0 border-r border-slate-100 dark:border-white/5 flex flex-col">
                    {/* Headers Row - Single Continuous Border */}
                    <div className={`grid ${gridCols} gap-x-0 border-b-2 border-amber-600/60 pb-3 mb-5`}>
                        {Object.entries(submenu).map(([title], i) => (
                            <div key={i} className="text-left flex flex-col">
                                <h4 className="font-black text-slate-900 dark:text-white text-[12px] uppercase tracking-tight leading-[1.3] min-h-[42px] flex items-end pr-4">
                                    <span className="max-w-[110px] block">{navT(title)}</span>
                                </h4>
                            </div>
                        ))}
                    </div>

                    {/* Links Row */}
                    <div className={`grid ${gridCols} gap-x-0 gap-y-10`}>
                        {Object.entries(submenu).map(([, links], i) => (
                            <ul key={i} className="space-y-3 pr-5">
                                {links.map((link: any, j: number) => {
                                    const baseUrl = `/services/${serviceNameToSlug(link.name)}`;
                                    const url = lang === 'EN' ? baseUrl : `${baseUrl}?lang=${lang.toLowerCase()}`;
                                    return (
                                    <li key={j}>
                                        <Link href={url} onMouseEnter={() => {
                                            if (link.image) setActiveImg(link.image);
                                            setActiveName(link.name || link);
                                        }}
                                            className="text-[11px] text-slate-500 dark:text-slate-400 hover:text-amber-600 font-bold transition-all flex items-start group/link uppercase tracking-wider text-left relative">
                                            <span className="absolute left-0 top-[0.55rem] w-3 h-0.5 bg-amber-600 opacity-0 -translate-x-2 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-300" />
                                            <span className="leading-snug transition-transform duration-300 group-hover/link:translate-x-5 block">{navT(link.name || link)}</span>
                                        </Link>
                                    </li>
                                )})}
                            </ul>
                        ))}
                    </div>
                </div>

                {/* Preview Side - Fixed Width */}
                <div className="w-[320px] relative overflow-hidden flex-shrink-0 bg-slate-900 group/img">
                    <div className="absolute inset-0 w-full h-full">
                        {activeImg && (
                            <Image
                                key={activeImg}
                                src={activeImg}
                                alt={activeName || 'Service preview'}
                                fill
                                sizes="320px"
                                className="object-cover animate-in fade-in zoom-in duration-700"
                            />
                        )}
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-left">
                        <p className="text-amber-500 text-[8px] font-black uppercase tracking-[0.3em] mb-2">{navT('Featured Service')}</p>
                        <div className="min-h-[54px] flex flex-col justify-end mb-4">
                            <h5 className="text-white font-black text-lg uppercase tracking-tighter leading-tight">
                                {activeName ? navT(activeName) : ''}
                            </h5>
                        </div>
                        <Link href={activeName ? (lang === 'EN' ? `/services/${serviceNameToSlug(activeName)}` : `/services/${serviceNameToSlug(activeName)}?lang=${lang.toLowerCase()}`) : '#'} className="w-full">
                            <GradientButton variant="primary" className="px-5 py-2.5 text-[8px] w-full">{navT('View Details')}</GradientButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
