import { Metadata } from 'next';
import { EVENTS_DATA } from '@/data/mockData';

const BASE_URL = 'https://www.mtrusturology.com';

export async function generateStaticParams() {
    return EVENTS_DATA.map((event) => ({
        id: event.id.toString(),
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const event = EVENTS_DATA.find((e) => e.id.toString() === id);

    if (!event) {
        return {
            title: 'Event Not Found | M-Trust Urology Clinic',
            description: 'The requested event could not be found.',
        };
    }

    const pageTitle = `${event.title} | M-Trust Urology Clinic Events`;
    const pageDescription = event.description || `${event.title} - ${event.subtitle}. ${event.day} ${event.month} ${event.year} at ${event.location}.`;

    return {
        title: pageTitle,
        description: pageDescription,
        keywords: [
            event.title,
            event.category,
            "Men's Health Event",
            'Urology Seminar',
            'M-Trust Clinic',
        ],
        alternates: {
            canonical: `${BASE_URL}/events/${id}`,
        },
        openGraph: {
            type: 'article',
            title: pageTitle,
            description: pageDescription,
            url: `${BASE_URL}/events/${id}`,
            siteName: 'M-Trust Urology Clinic',
            images: event.image
                ? [{ url: event.image, width: 1200, height: 630, alt: event.title }]
                : [],
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description: pageDescription,
            images: event.image ? [event.image] : [],
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

export default function EventLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
