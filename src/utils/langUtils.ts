/**
 * Helper utility for multi-language content resolution.
 * Provides a clean API to get localized content from data objects
 * that have per-language fields (titleTH, titleAR, etc.)
 */

type Language = 'EN' | 'TH' | 'AR';

/**
 * Get the localized value from a data object based on current language.
 * Falls back to English (default field) if no localized value exists,
 * then to the translation function t() for key-based lookup.
 * 
 * Usage:
 *   getLocalizedField(event, 'title', lang, t)
 *   // looks for event.titleAR (if AR), event.titleTH (if TH), or event.title (EN)
 */
export function getLocalizedField(
    obj: Record<string, any>,
    field: string,
    lang: Language,
    t?: (key: string) => string
): string {
    const enValue = obj[field] || '';

    if (lang === 'AR') {
        const arField = `${field}AR`;
        if (obj[arField]) return obj[arField];
        // Fallback to translation function
        if (t && enValue) return t(enValue);
        return enValue;
    }

    if (lang === 'TH') {
        const thField = `${field}TH`;
        if (obj[thField]) return obj[thField];
        // Fallback to translation function
        if (t && enValue) return t(enValue);
        return enValue;
    }

    // English — return as-is
    return enValue;
}
