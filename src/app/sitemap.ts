import { MetadataRoute } from 'next';
import { SERVICE_SLUGS } from '@/utils/serviceUtils';
import { BLOG_POSTS, DOCTORS, EVENTS_DATA } from '@/data/mockData';
import { blogTitleToSlug } from '@/utils/blogUtils';
import { getEventSlug } from '@/utils/eventUtils';

const BASE_URL = 'https://www.mtrusturology.com';

// Helper to generate alternateRefs for all supported languages
const langAlternates = (path: string) => [
    { hreflang: 'en', href: `${BASE_URL}${path}` },
    { hreflang: 'th', href: `${BASE_URL}${path}?lang=th` },
    { hreflang: 'ar', href: `${BASE_URL}${path}?lang=ar` },
    { hreflang: 'ru', href: `${BASE_URL}${path}?lang=ru` },
    { hreflang: 'x-default', href: `${BASE_URL}${path}` },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
            alternates: { languages: { en: BASE_URL, th: `${BASE_URL}?lang=th`, ar: `${BASE_URL}?lang=ar`, ru: `${BASE_URL}?lang=ru` } },
        },
        {
            url: `${BASE_URL}/vasectomy`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
            alternates: { languages: { en: `${BASE_URL}/vasectomy`, th: `${BASE_URL}/vasectomy?lang=th`, ar: `${BASE_URL}/vasectomy?lang=ar`, ru: `${BASE_URL}/vasectomy?lang=ru` } },
        },
    ];

    // Service pages
    const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
        url: `${BASE_URL}/services/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
        alternates: { languages: { en: `${BASE_URL}/services/${slug}`, th: `${BASE_URL}/services/${slug}?lang=th`, ar: `${BASE_URL}/services/${slug}?lang=ar`, ru: `${BASE_URL}/services/${slug}?lang=ru` } },
    }));

    // Doctor pages
    const doctorPages: MetadataRoute.Sitemap = DOCTORS
        .filter((doctor) => doctor.slug && doctor.slug !== 'dr.none')
        .map((doctor) => ({
            url: `${BASE_URL}/urologist/${doctor.slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
            alternates: { languages: { en: `${BASE_URL}/urologist/${doctor.slug}`, th: `${BASE_URL}/urologist/${doctor.slug}?lang=th`, ar: `${BASE_URL}/urologist/${doctor.slug}?lang=ar`, ru: `${BASE_URL}/urologist/${doctor.slug}?lang=ru` } },
        }));

    // Blog pages
    const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
        url: `${BASE_URL}/blog/${blogTitleToSlug(post.title)}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
        alternates: { languages: { en: `${BASE_URL}/blog/${blogTitleToSlug(post.title)}`, th: `${BASE_URL}/blog/${blogTitleToSlug(post.title)}?lang=th`, ar: `${BASE_URL}/blog/${blogTitleToSlug(post.title)}?lang=ar`, ru: `${BASE_URL}/blog/${blogTitleToSlug(post.title)}?lang=ru` } },
    }));

    // Event pages
    const eventPages: MetadataRoute.Sitemap = EVENTS_DATA.map((event) => ({
        url: `${BASE_URL}/events/${getEventSlug(event)}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
        alternates: { languages: { en: `${BASE_URL}/events/${getEventSlug(event)}`, th: `${BASE_URL}/events/${getEventSlug(event)}?lang=th`, ar: `${BASE_URL}/events/${getEventSlug(event)}?lang=ar`, ru: `${BASE_URL}/events/${getEventSlug(event)}?lang=ru` } },
    }));

    return [
        ...staticPages,
        ...servicePages,
        ...doctorPages,
        ...blogPages,
        ...eventPages,
    ];
}
