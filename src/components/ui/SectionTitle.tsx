
import React from 'react';

interface SectionTitleProps {
    tag: string;
    title: string;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ tag, title, className = "" }) => (
    <div className={`flex flex-col mb-4 text-left ${className}`}>
        <div className="flex items-center space-x-4 mb-2">
            <div className="w-12 h-[2px] bg-amber-600"></div>
            <span className="text-[9px] md:text-[10px] font-black text-amber-700 uppercase tracking-[0.4em]">{tag}</span>
        </div>
        <h2 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">{title}</h2>
    </div>
);

export default SectionTitle;
