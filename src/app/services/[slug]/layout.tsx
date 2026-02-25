import { Metadata } from 'next';
import { SERVICE_DETAILS_DATA } from '@/data/mockData';
import { slugToServiceName, SERVICE_SLUGS } from '@/utils/serviceUtils';

const BASE_URL = 'https://www.menshealth-thailand.com';

export async function generateStaticParams() {
    return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const serviceName = slugToServiceName(slug);

    if (!serviceName || !SERVICE_DETAILS_DATA[serviceName]) {
        return {
            title: 'Service Not Found | M-Trust Urology Clinic',
            description: 'The requested service could not be found.',
        };
    }

    const service = SERVICE_DETAILS_DATA[serviceName];
    const cleanTitle = service.title.replace(/\n/g, ' ');
    const pageTitle = `${cleanTitle} | M-Trust Urology Clinic`;
    const pageDescription = service.tagline || `Learn about ${cleanTitle} treatment at M-Trust Urology Clinic, Thailand's leading men's health center.`;

    return {
        title: pageTitle,
        description: pageDescription,
        keywords: [
            cleanTitle,
            serviceName,
            'Urology Treatment',
            "Men's Health Thailand",
            'M-Trust Clinic',
            'Dr. Niti Navanimitkul',
        ],
        alternates: {
            canonical: `${BASE_URL}/services/${slug}`,
        },
        openGraph: {
            type: 'article',
            title: pageTitle,
            description: pageDescription,
            url: `${BASE_URL}/services/${slug}`,
            siteName: 'M-Trust Urology Clinic',
            images: service.heroImage
                ? [{ url: service.heroImage, width: 1200, height: 630, alt: cleanTitle }]
                : [],
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description: pageDescription,
            images: service.heroImage ? [service.heroImage] : [],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large' as const,
                'max-snippet': -1,
            },
        },
    };
}

export default function ServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
