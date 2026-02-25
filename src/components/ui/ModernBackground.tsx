
import React from 'react';

const ModernBackground: React.FC = () => (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-slate-200 dark:bg-[#000000] transition-colors duration-1000" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-amber-200/30 dark:bg-amber-600/10 blur-[120px] animate-pulse-slow mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 dark:bg-indigo-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-slate-200/30 dark:bg-slate-800/20 blur-[100px] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noise_ref"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                <rect width="100%" height="100%" filter="url(#noise_ref)" />
            </svg>
        </div>
    </div>
);

export default ModernBackground;
