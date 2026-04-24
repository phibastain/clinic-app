import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDoctorBySlug, DOCTORS } from '@/lib/doctors';
import { DoctorData } from '@/data/mockData';
import DoctorProfileClient from '@/components/sections/DoctorProfileClient';
import { getDoctorJsonLd, JsonLdScript } from '@/utils/jsonLd';

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
    if (!doctor) return { title: 'Doctor Not Found | M-Trust Clinic' };

    const awaitedParams = await searchParams;
    const isThai = awaitedParams?.lang === 'th';
    const isAr = awaitedParams?.lang === 'ar';
    const basePath = `/urologist/${slug}`;
    const url = isAr ? `${basePath}?lang=ar` : isThai ? `${basePath}?lang=th` : basePath;

    const name = isAr && doctor.nameAR ? doctor.nameAR : doctor.name;
    const role = isAr && doctor.roleAR ? doctor.roleAR : doctor.role;
    const bio = isAr && doctor.bioAR ? doctor.bioAR : doctor.bio;

    return {
        title: `${name} | ${role} | M-Trust Urology Clinic`,
        description: bio.substring(0, 160),
        openGraph: {
            title: name,
            description: bio.substring(0, 160),
            images: [{ url: doctor.image }],
            locale: isAr ? 'ar_SA' : isThai ? 'th_TH' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: name,
            description: bio.substring(0, 160),
            images: [doctor.image],
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

export default async function DoctorSlugPage({ params, searchParams }: PageProps) {
    const { slug } = await params;
    const doctor = getDoctorBySlug(slug);
    if (!doctor) notFound();

    const awaitedParams = await searchParams;
    const isAr = awaitedParams?.lang === 'ar';

    return (
        <>
            <JsonLdScript data={getDoctorJsonLd('https://www.mtrusturology.com', {
                name: isAr && doctor.nameAR ? doctor.nameAR : doctor.name,
                slug: doctor.slug || slug,
                role: isAr && doctor.roleAR ? doctor.roleAR : doctor.role,
                bio: isAr && doctor.bioAR ? doctor.bioAR : doctor.bio,
                image: doctor.image,
                hospital: doctor.hospital,
                email: doctor.email,
                specialties: isAr && doctor.specialtiesAR ? doctor.specialtiesAR : doctor.specialties,
                qualifications: doctor.qualifications.map(q => ({
                    year: q.year,
                    title: isAr && q.titleAR ? q.titleAR : q.title,
                    place: isAr && q.placeAR ? q.placeAR : q.place,
                })),
            })} />
            <DoctorProfileClient doctor={doctor} />
        </>
    );
}
