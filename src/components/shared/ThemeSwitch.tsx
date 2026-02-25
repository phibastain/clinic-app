'use client';

import { Sun, Moon } from 'lucide-react';

interface ThemeSwitchProps {
    isDark: boolean;
    setIsDark: (val: boolean) => void;
}

const ThemeSwitch = ({ isDark, setIsDark }: ThemeSwitchProps) => (
    <button
        onClick={() => setIsDark(!isDark)}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none bg-white/10 border border-white/20`}
    >
        <span
            className={`absolute top-0.5 left-0.5 bg-white rounded-full w-4 h-4 shadow-sm transform transition-transform duration-300 flex items-center justify-center ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
        >
            {isDark ? <Moon size={10} className="text-slate-800" /> : <Sun size={10} className="text-amber-500" />}
        </span>
    </button>
);

export default ThemeSwitch;
