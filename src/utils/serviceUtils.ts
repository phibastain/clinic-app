import { SERVICE_DETAILS_DATA } from '@/data/mockData';

/**
 * Convert a service name to a URL-friendly slug
 * e.g. "Focus Shockwave" → "focus-shockwave"
 */
export function serviceNameToSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

/**
 * Pre-built map: slug → original service name
 */
const SLUG_TO_NAME_MAP: Record<string, string> = {};

// Build the map from all SERVICE_DETAILS_DATA keys (excluding 'Generic')
Object.keys(SERVICE_DETAILS_DATA).forEach((name) => {
    if (name === 'Generic') return;
    const slug = serviceNameToSlug(name);
    SLUG_TO_NAME_MAP[slug] = name;
});

/**
 * Look up the original service name from a slug
 */
export function slugToServiceName(slug: string): string | undefined {
    return SLUG_TO_NAME_MAP[slug];
}

/**
 * Array of all valid service slugs — for generateStaticParams or validation
 */
export const SERVICE_SLUGS: string[] = Object.keys(SLUG_TO_NAME_MAP);

/**
 * Get SEO-friendly metadata for a service
 */
export function getServiceMetadata(serviceName: string) {
    const service = SERVICE_DETAILS_DATA[serviceName];
    if (!service) return null;
    return {
        title: service.title,
        description: service.tagline,
        slug: serviceNameToSlug(serviceName),
    };
}
