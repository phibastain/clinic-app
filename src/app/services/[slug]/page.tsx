import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICE_DETAILS_DATA, SERVICE_CATEGORIES } from '@/data/mockData';
import { slugToServiceName, serviceNameToSlug } from '@/utils/serviceUtils';
import { getServiceJsonLd, JsonLdScript } from '@/utils/jsonLd';
import ServiceDetailClient from '@/components/sections/ServiceDetailClient';

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
    const allServices = Object.values(SERVICE_CATEGORIES).flat();
    return allServices.map((s: any) => ({
        slug: serviceNameToSlug(s.name),
    }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { slug } = await params;
    const serviceName = slugToServiceName(slug);
    const service = serviceName ? SERVICE_DETAILS_DATA[serviceName] : null;

    if (!service || !serviceName) {
        return { title: 'Service Not Found | M-Trust Clinic' };
    }

    const description = service.tagline || service.description?.substring(0, 160) || '';

    const awaitedParams = await searchParams;
    const isThai = awaitedParams?.lang === 'th';
    const basePath = `/services/${slug}`;
    const url = isThai ? `${basePath}?lang=th` : basePath;

    return {
        title: `${service.title} | M-Trust Urology Clinic`,
        description,
        openGraph: {
            title: service.title,
            description,
            images: service.heroImage ? [{ url: service.heroImage }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: service.title,
            description,
            images: service.heroImage ? [service.heroImage] : [],
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

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const serviceName = slugToServiceName(slug);
    const service = serviceName ? SERVICE_DETAILS_DATA[serviceName] : null;

    if (!service || !serviceName) {
        notFound();
    }

    return (
        <>
            <JsonLdScript data={getServiceJsonLd('https://www.mtrusturology.com', {
                name: serviceName,
                description: service.description,
                slug: slug,
                image: service.heroImage,
                faqs: service.faq
                    ?.filter((f: any) => (f.question || f.q) && (f.answer || f.a))
                    .map((f: any) => ({ question: (f.question || f.q)!, answer: (f.answer || f.a)! })) || [],
            })} />
            <ServiceDetailClient serviceName={serviceName} slug={slug} />
        </>
    );
}
