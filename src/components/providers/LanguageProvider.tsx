'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'TH';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Language>('EN');

    useEffect(() => {
        // Priority: URL param > localStorage
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        
        if (urlLang === 'th') {
            setLangState('TH');
            localStorage.setItem('language', 'TH');
        } else {
            const savedLang = localStorage.getItem('language') as Language;
            if (savedLang && (savedLang === 'EN' || savedLang === 'TH')) {
                setLangState(savedLang);
            }
        }
    }, []);

    // Sync <html lang="..."> attribute whenever language changes
    useEffect(() => {
        document.documentElement.lang = lang === 'TH' ? 'th' : 'en';
    }, [lang]);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('language', newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
