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

    const awaitedParams = await searchParams;
    const isThai = awaitedParams?.lang === 'th';
    const isAr = awaitedParams?.lang === 'ar';
    const basePath = `/services/${slug}`;
    const url = isAr ? `${basePath}?lang=ar` : isThai ? `${basePath}?lang=th` : basePath;

    const title = isAr && service.titleAR ? service.titleAR : service.title;
    const description = isAr && service.taglineAR
        ? service.taglineAR
        : (service.tagline || service.description?.substring(0, 160) || '');

    return {
        title: `${title} | M-Trust Urology Clinic`,
        description,
        openGraph: {
            title,
            description,
            images: service.heroImage ? [{ url: service.heroImage }] : [],
            locale: isAr ? 'ar_SA' : isThai ? 'th_TH' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: service.heroImage ? [service.heroImage] : [],
        },
        alternates: {
            canonical: url,
            languages: {
                'en': basePath,
                'th': `${basePath}?lang=th`,
                'ar': `${basePath}?lang=ar`,
            },
        },
    };
}

export default async function ServiceDetailPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const serviceName = slugToServiceName(slug);
    const service = serviceName ? SERVICE_DETAILS_DATA[serviceName] : null;

    if (!service || !serviceName) {
        notFound();
    }

    const awaitedParams = await searchParams;
    const isAr = awaitedParams?.lang === 'ar';

    const jsonLdName = isAr && service.titleAR ? service.titleAR : serviceName;
    const jsonLdDesc = isAr && service.descriptionAR ? service.descriptionAR : service.description;
    const faqSource = isAr && service.faqAR ? service.faqAR : service.faq;

    return (
        <>
            <JsonLdScript data={getServiceJsonLd('https://www.mtrusturology.com', {
                name: jsonLdName,
                description: jsonLdDesc,
                slug: slug,
                image: service.heroImage,
                faqs: faqSource
                    ?.filter((f: any) => (f.question || f.q) && (f.answer || f.a))
                    .map((f: any) => ({ question: (f.question || f.q)!, answer: (f.answer || f.a)! })) || [],
            })} />
            <ServiceDetailClient serviceName={serviceName} slug={slug} />
        </>
    );
}
