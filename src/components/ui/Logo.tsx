
import React from 'react';
import Image from 'next/image';

const Logo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="relative flex items-center space-x-2 group cursor-pointer shrink-0 bg-[#020617] p-1.5 rounded-lg shadow-lg shadow-blue-950/50 border border-white/5 hover:shadow-xl hover:shadow-blue-900/40 transition-all duration-300 overflow-hidden" onClick={onClick}>
        {/* Same gradient as top bar */}
        <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#0f172a] to-[#020617]"></div>
        {/* Subtle radial glow like top bar */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_70%)]"></div>

        <div className="relative w-40 h-12 flex items-center justify-start overflow-hidden z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
                src="/assets/image/header/M-Trust Urology Clinic.png"
                alt="M-Trust Logo"
                width={160}
                height={48}
                className="w-full h-full object-contain object-left"
                priority
            />
        </div>
    </div>
);

export default Logo;
