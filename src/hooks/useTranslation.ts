'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import { TH_TRANSLATIONS } from '@/data/translations';
import { AR_TRANSLATIONS } from '@/data/arTranslations';
import { UI_TRANSLATIONS } from '@/data/uiTranslations';
import { AR_UI_TRANSLATIONS } from '@/data/arUiTranslations';
import { RU_UI_TRANSLATIONS } from '@/data/ruUiTranslations';

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
        if (lang === 'AR') {
            // Check AR UI translations first
            if (AR_UI_TRANSLATIONS[key]) return AR_UI_TRANSLATIONS[key];
            // Then check main AR_TRANSLATIONS
            const entry = AR_TRANSLATIONS[key];
            if (entry) return entry.title || entry;
        }
        if (lang === 'RU') {
            // Check RU UI translations first
            if (RU_UI_TRANSLATIONS[key]) return RU_UI_TRANSLATIONS[key];
        }
        return key;
    };

    return { t, lang };
};
