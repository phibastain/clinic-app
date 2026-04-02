import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDoctorBySlug, DOCTORS } from '@/lib/doctors';
import { DoctorData } from '@/data/mockData';
import DoctorProfileClient from '@/components/sections/DoctorProfileClient';

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
    return DOCTORS.map((doc: DoctorData) => ({
        slug: doc.slug,
    }));
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const doctor = getDoctorBySlug(slug);

    if (!doctor) {
        return {
            title: 'Doctor Not Found | M-Trust Clinic',
        };
    }

    const awaitedParams = await searchParams;
    const isThai = awaitedParams?.lang === 'th';
    const basePath = `/urologist/${slug}`;
    const url = isThai ? `${basePath}?lang=th` : basePath;

    return {
        title: `${doctor.name} | ${doctor.role} | M-Trust Urology Clinic`,
        description: doctor.bio.substring(0, 160),
        openGraph: {
            title: doctor.name,
            description: doctor.bio.substring(0, 160),
            images: [{ url: doctor.image }],
        },
        twitter: {
            card: 'summary_large_image',
            title: doctor.name,
            description: doctor.bio.substring(0, 160),
            images: [doctor.image],
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

export default async function DoctorSlugPage({ params }: PageProps) {
    const { slug } = await params;
    const doctor = getDoctorBySlug(slug);

    if (!doctor) {
        notFound();
    }

    return <DoctorProfileClient doctor={doctor} />;
}
