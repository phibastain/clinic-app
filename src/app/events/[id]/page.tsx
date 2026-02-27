import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EVENTS_DATA } from '@/data/mockData';
import EventDetailClient from '@/components/sections/EventDetailClient';
import { getEventJsonLd, JsonLdScript } from '@/utils/jsonLd';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const event = EVENTS_DATA.find(e => e.id.toString() === id);

    if (!event) {
        return {
            title: 'Event Not Found | M-Trust Clinic',
        };
    }

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
            canonical: `/events/${id}`,
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
                id: event.id,
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
