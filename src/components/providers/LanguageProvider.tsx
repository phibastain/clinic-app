'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'TH' | 'AR' | 'RU';

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
        } else if (urlLang === 'ar') {
            setLangState('AR');
            localStorage.setItem('language', 'AR');
        } else if (urlLang === 'ru') {
            setLangState('RU');
            localStorage.setItem('language', 'RU');
        } else {
            const savedLang = localStorage.getItem('language') as Language;
            if (savedLang && (savedLang === 'EN' || savedLang === 'TH' || savedLang === 'AR' || savedLang === 'RU')) {
                setLangState(savedLang);
            }
        }
    }, []);

    // Sync <html lang="..."> and dir attribute whenever language changes
    useEffect(() => {
        const langMap: Record<Language, string> = { EN: 'en', TH: 'th', AR: 'ar', RU: 'ru' };
        document.documentElement.lang = langMap[lang];
        document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
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
