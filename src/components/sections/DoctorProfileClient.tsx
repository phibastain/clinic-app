'use client';

import { useRouter } from 'next/navigation';
import DrProfile from '@/components/sections/DrProfile';
import { DoctorData } from '@/data/mockData';
import { getDoctorJsonLd, JsonLdScript } from '@/utils/jsonLd';

interface DoctorProfileClientProps {
    doctor: DoctorData;
}

export default function DoctorProfileClient({ doctor }: DoctorProfileClientProps) {
    const router = useRouter();

    return (
        <div className="selection:bg-amber-500 selection:text-white">
            <JsonLdScript data={getDoctorJsonLd('https://www.mtrusturology.com', { ...doctor, slug: doctor.slug || '' })} />
            <DrProfile doctor={doctor} onBack={() => router.push('/')} />
        </div>
    );
}

