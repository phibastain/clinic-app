import { MetadataRoute } from 'next';
import { SERVICE_SLUGS } from '@/utils/serviceUtils';
import { BLOG_POSTS, DOCTORS, EVENTS_DATA } from '@/data/mockData';
import { blogTitleToSlug } from '@/utils/blogUtils';

const BASE_URL = 'https://www.mtrusturology.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
    ];

    // Service pages
    const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
        url: `${BASE_URL}/services/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Doctor pages
    const doctorPages: MetadataRoute.Sitemap = DOCTORS
        .filter((doctor) => doctor.slug && doctor.slug !== 'dr.none')
        .map((doctor) => ({
            url: `${BASE_URL}/urologist/${doctor.slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }));

    // Blog pages
    const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
        url: `${BASE_URL}/blog/${blogTitleToSlug(post.title)}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Event pages
    const eventPages: MetadataRoute.Sitemap = EVENTS_DATA.map((event) => ({
        url: `${BASE_URL}/events/${event.id}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [
        ...staticPages,
        ...servicePages,
        ...doctorPages,
        ...blogPages,
        ...eventPages,
    ];
}
