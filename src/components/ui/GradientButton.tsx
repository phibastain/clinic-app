
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { IconProps } from '@/data/mockData';

interface GradientButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'dark' | 'outline';
    icon?: LucideIcon | React.FC<IconProps>;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, className = "", variant = "primary", icon: Icon, onClick }) => {
    const variants = {
        primary: "bg-linear-to-br from-amber-600 via-amber-500 to-amber-700 text-white shadow-lg shadow-amber-900/20",
        dark: "bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-xl",
        outline: "bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
    };
    return (
        <button onClick={onClick} className={`group relative overflow-hidden flex items-center justify-center space-x-3 transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] rounded-xl px-6 py-3 font-black uppercase text-[10px] tracking-widest ${variants[variant]} ${className}`}>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">{children}</span>
            {Icon && <Icon className="relative z-10 transition-transform group-hover:translate-x-1" size={16} />}
        </button>
    );
};

export default GradientButton;
