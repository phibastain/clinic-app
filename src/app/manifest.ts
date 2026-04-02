import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'M-Trust Urology Clinic',
        short_name: 'M-Trust Clinic',
        description: "Thailand's leading center for men's health. Expert urological treatments by Dr. Niti Navanimitkul.",
        start_url: '/',
        display: 'standalone',
        background_color: '#0B0F19',
        theme_color: '#f59e0b',
        orientation: 'portrait',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '64x64',
                type: 'image/x-icon',
            },
        ],
        categories: ['medical', 'health'],
        lang: 'en',
    };
}
