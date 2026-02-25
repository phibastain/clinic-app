'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

interface BackButtonProps {
    label?: string;
    href?: string;
}

/**
 * BackButton - Client Island for Navigation
 * Uses 'use client' for useRouter
 */
export default function BackButton({ label = "Back", href }: BackButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        } else {
            router.back();
        }
    };

    return (
        <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-amber-600 transition-colors group"
            aria-label={label}
        >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>{label}</span>
        </button>
    );
}
