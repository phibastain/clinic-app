import { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
        slug: blogTitleToSlug(p.title),
        excerpt: p.excerpt,
        excerptTH: '',
        content: p.content || '',
        contentTH: '',
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
    const basePath = `/blog/${slug}`;
    const url = isThai ? `${basePath}?lang=th` : basePath;

    return {
        title: `${post.title} | M-Trust Urology Clinic`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [{ url: post.image }],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
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

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const rawPost = findPostBySlug(slug);
    if (!rawPost) notFound();

    const post = mapPost(rawPost);
    const relatedPosts = BLOG_POSTS
        .filter(p => blogTitleToSlug(p.title) !== slug)
        .map(mapPost);

    return (
        <>
            <JsonLdScript data={getBlogPostJsonLd('https://www.mtrusturology.com', {
                title: post.title,
                excerpt: post.excerpt,
                image: post.image,
                date: post.date,
                author: 'Dr. Niti Navanimitkul',
                category: post.category,
            })} />
            <BlogDetailClient post={post} relatedPosts={relatedPosts} />
        </>
    );
}
