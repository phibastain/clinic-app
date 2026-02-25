'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import DrProfile from '@/components/sections/DrProfile';
import { DoctorData } from '@/data/mockData';

interface DoctorProfileClientProps {
    doctor: DoctorData;
}

export default function DoctorProfileClient({ doctor }: DoctorProfileClientProps) {
    const router = useRouter();

    return (
        <div className="selection:bg-amber-500 selection:text-white">
            <DrProfile doctor={doctor} onBack={() => router.push('/')} />
        </div>
    );
}

