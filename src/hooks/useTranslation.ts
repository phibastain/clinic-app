'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import { TH_TRANSLATIONS } from '@/data/translations';
import { UI_TRANSLATIONS } from '@/data/uiTranslations';

export const useTranslation = () => {
    const { lang } = useLanguage();

    const t = (key: string): string => {
        if (lang === 'TH') {
            // Check UI_TRANSLATIONS first (smaller, faster lookup)
            if (UI_TRANSLATIONS[key]) return UI_TRANSLATIONS[key];
            // Then check main TH_TRANSLATIONS
            const entry = TH_TRANSLATIONS[key];
            if (entry) return entry.title || entry;
        }
        return key;
    };

    return { t, lang };
};
