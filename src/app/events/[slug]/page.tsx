import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EVENTS_DATA } from '@/data/mockData';
import EventDetailClient from '@/components/sections/EventDetailClient';
import { getEventJsonLd, JsonLdScript } from '@/utils/jsonLd';
import { getEventSlug } from '@/utils/eventUtils';

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
    return EVENTS_DATA.map((event) => ({
        slug: getEventSlug(event),
    }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { slug } = await params;
    const event = EVENTS_DATA.find(e => getEventSlug(e) === slug);
    if (!event) return { title: 'Event Not Found | M-Trust Clinic' };

    const awaitedParams = await searchParams;
    const isThai = awaitedParams?.lang === 'th';
    const isAr = awaitedParams?.lang === 'ar';
    const isRu = awaitedParams?.lang === 'ru';
    const basePath = `/events/${slug}`;
    const url = isRu ? `${basePath}?lang=ru` : isAr ? `${basePath}?lang=ar` : isThai ? `${basePath}?lang=th` : basePath;

    const title = isRu && event.titleRU ? event.titleRU : isAr && event.titleAR ? event.titleAR : event.title;
    const description = isRu && event.descriptionRU ? event.descriptionRU : isAr && event.descriptionAR ? event.descriptionAR : event.description;

    return {
        title: `${title} | M-Trust Urology Clinic`,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: event.image }],
            locale: isRu ? 'ru_RU' : isAr ? 'ar_SA' : isThai ? 'th_TH' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [event.image],
        },
        alternates: {
            canonical: url,
            languages: {
                'en': basePath,
                'th': `${basePath}?lang=th`,
                'ar': `${basePath}?lang=ar`,
                'ru': `${basePath}?lang=ru`,
            },
        },
    };
}

export default async function EventDetailPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const event = EVENTS_DATA.find(e => getEventSlug(e) === slug);
    const relatedEvents = EVENTS_DATA.filter(e => getEventSlug(e) !== slug);
    if (!event) notFound();

    const awaitedParams = await searchParams;
    const isAr = awaitedParams?.lang === 'ar';
    const isRu = awaitedParams?.lang === 'ru';

    const jsonLdTitle = isRu && event.titleRU ? event.titleRU : isAr && event.titleAR ? event.titleAR : event.title;
    const jsonLdDesc = isRu && event.descriptionRU ? event.descriptionRU : isAr && event.descriptionAR ? event.descriptionAR : event.description;

    return (
        <>
            <JsonLdScript data={getEventJsonLd('https://www.mtrusturology.com', {
                id: Number(event.id),
                title: jsonLdTitle,
                description: jsonLdDesc,
                image: event.image,
                location: event.location,
                day: event.day.toString(),
                month: event.month,
                time: event.time,
                slug: slug
            })} />
            <EventDetailClient event={event} relatedEvents={relatedEvents} />
        </>
    );
}
