import { Metadata } from 'next';
import { notFound } from 'next/navigation';
export const dynamic = 'force-dynamic';
import { BLOG_POSTS } from '@/data/mockData';
import BlogDetailClient from '@/components/sections/BlogDetailClient';
import { getBlogPostJsonLd, JsonLdScript } from '@/utils/jsonLd';
import { blogTitleToSlug } from '@/utils/blogUtils';

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

function findPostBySlug(slug: string) {
    return BLOG_POSTS.find(p => blogTitleToSlug(p.title) === slug) || null;
}

function mapPost(p: typeof BLOG_POSTS[0]) {
    return {
        id: String(p.id),
        title: p.title,
        titleTH: '',
        titleAR: p.titleAR || '',
        slug: blogTitleToSlug(p.title),
        excerpt: p.excerpt,
        excerptTH: '',
        excerptAR: p.excerptAR || '',
        content: p.content || '',
        contentTH: '',
        contentAR: p.contentAR || '',
        category: p.category,
        image: p.image,
        date: p.date,
    };
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = findPostBySlug(slug);
    if (!post) return { title: 'Article Not Found | M-Trust Clinic' };

    const awaitedParams = await searchParams;
    const isThai = awaitedParams?.lang === 'th';
    const isAr = awaitedParams?.lang === 'ar';
    const basePath = `/blog/${slug}`;
    const url = isAr ? `${basePath}?lang=ar` : isThai ? `${basePath}?lang=th` : basePath;

    const title = isAr && post.titleAR ? post.titleAR : post.title;
    const description = isAr && post.excerptAR ? post.excerptAR : post.excerpt;

    return {
        title: `${title} | M-Trust Urology Clinic`,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: post.image }],
            locale: isAr ? 'ar_SA' : isThai ? 'th_TH' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [post.image],
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

export default async function BlogDetailPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const rawPost = findPostBySlug(slug);
    if (!rawPost) notFound();

    const awaitedParams = await searchParams;
    const isAr = awaitedParams?.lang === 'ar';

    const post = mapPost(rawPost);
    const relatedPosts = BLOG_POSTS
        .filter(p => blogTitleToSlug(p.title) !== slug)
        .map(mapPost);

    const jsonLdTitle = isAr && rawPost.titleAR ? rawPost.titleAR : rawPost.title;
    const jsonLdExcerpt = isAr && rawPost.excerptAR ? rawPost.excerptAR : rawPost.excerpt;

    return (
        <>
            <JsonLdScript data={getBlogPostJsonLd('https://www.mtrusturology.com', {
                title: jsonLdTitle,
                excerpt: jsonLdExcerpt,
                image: post.image,
                date: post.date,
                author: 'Dr. Niti Navanimitkul',
                category: post.category,
            })} />
            <BlogDetailClient post={post} relatedPosts={relatedPosts} />
        </>
    );
}
