import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EVENTS_DATA } from '@/data/mockData';
import EventDetailClient from '@/components/sections/EventDetailClient';
import { getEventJsonLd, JsonLdScript } from '@/utils/jsonLd';

interface Props {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { id } = await params;
    const event = EVENTS_DATA.find(e => e.id.toString() === id);

    if (!event) {
        return {
            title: 'Event Not Found | M-Trust Clinic',
        };
    }

    const awaitedParams = await searchParams;
    const isThai = awaitedParams?.lang === 'th';
    const basePath = `/events/${id}`;
    const url = isThai ? `${basePath}?lang=th` : basePath;

    return {
        title: `${event.title} | M-Trust Urology Clinic`,
        description: event.description,
        openGraph: {
            title: event.title,
            description: event.description,
            images: [{ url: event.image }],
        },
        twitter: {
            card: 'summary_large_image',
            title: event.title,
            description: event.description,
            images: [event.image],
        },
        alternates: {
            canonical: url,
            languages: {
                'en': basePath,
                'th': `${basePath}?lang=th`,
            },
        },
    };
}

export default async function EventDetailPage({ params }: Props) {
    const { id } = await params;
    const event = EVENTS_DATA.find(e => e.id.toString() === id);
    const relatedEvents = EVENTS_DATA.filter(e => e.id.toString() !== id);

    if (!event) {
        notFound();
    }

    return (
        <>
            <JsonLdScript data={getEventJsonLd('https://www.mtrusturology.com', {
                id: Number(event.id),
                title: event.title,
                description: event.description,
                image: event.image,
                location: event.location,
                day: event.day.toString(),
                month: event.month,
                time: event.time
            })} />
            <EventDetailClient event={event} relatedEvents={relatedEvents} />
        </>
    );
}
