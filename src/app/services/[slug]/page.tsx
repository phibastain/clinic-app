import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICE_DETAILS_DATA } from '@/data/mockData';
import { slugToServiceName } from '@/utils/serviceUtils';
import ServiceDetailClient from '@/components/sections/ServiceDetailClient';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const serviceName = slugToServiceName(slug);
    const service = serviceName ? SERVICE_DETAILS_DATA[serviceName] : null;

    if (!service) {
        return {
            title: 'Service Not Found | M-Trust Clinic',
        };
    }

    return {
        title: `${service.title} | M-Trust Urology Clinic`,
        description: `${service.tagline} M-Trust Urology Clinic offers expert urological care and specialize in ${service.title.replace('\n', ' ')} in Thailand.`,
        openGraph: {
            title: service.title,
            description: service.tagline,
            images: [{ url: service.heroImage }],
        },
        twitter: {
            card: 'summary_large_image',
            title: service.title,
            description: service.tagline,
            images: [service.heroImage],
        },
        alternates: {
            canonical: `/services/${slug}`,
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

    return <ServiceDetailClient serviceName={serviceName} slug={slug} />;
}
