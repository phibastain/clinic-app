import { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/mockData';
import { blogTitleToSlug } from '@/utils/blogUtils';

const BASE_URL = 'https://www.mtrusturology.com';

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: blogTitleToSlug(post.title),
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => blogTitleToSlug(p.title) === slug);

    if (!post) {
        return {
            title: 'Article Not Found | M-Trust Urology Clinic',
            description: 'The requested article could not be found.',
        };
    }

    const pageTitle = `${post.title} | M-Trust Urology Clinic Blog`;
    const pageDescription = post.excerpt || `Read about ${post.title} on the M-Trust Urology Clinic blog.`;

    return {
        title: pageTitle,
        description: pageDescription,
        keywords: [
            post.category,
            "Men's Health",
            'Urology',
            'M-Trust Clinic',
            'Medical Blog',
        ],
        alternates: {
            canonical: `${BASE_URL}/blog/${slug}`,
        },
        openGraph: {
            type: 'article',
            title: pageTitle,
            description: pageDescription,
            url: `${BASE_URL}/blog/${slug}`,
            siteName: 'M-Trust Urology Clinic',
            images: post.image
                ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
                : [],
            locale: 'en_US',
            publishedTime: post.date,
            authors: ['Dr. Niti Navanimitkul'],
        },
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description: pageDescription,
            images: post.image ? [post.image] : [],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large' as const,
                'max-snippet': -1,
            },
        },
    };
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
