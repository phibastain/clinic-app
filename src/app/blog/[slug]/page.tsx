import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/mockData';
import { blogTitleToSlug } from '@/utils/blogUtils';
import BlogDetailClient from '@/components/sections/BlogDetailClient';
import { getBlogPostJsonLd, JsonLdScript } from '@/utils/jsonLd';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find(p => blogTitleToSlug(p.title) === slug);

    if (!post) {
        return {
            title: 'Article Not Found | M-Trust Clinic',
        };
    }

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
            canonical: `/blog/${slug}`,
        },
    };
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const post = BLOG_POSTS.find(p => blogTitleToSlug(p.title) === slug);
    const relatedPosts = BLOG_POSTS.filter(p => p.id !== post?.id);

    if (!post) {
        notFound();
    }

    return (
        <>
            <JsonLdScript data={getBlogPostJsonLd('https://www.mtrusturology.com', {
                title: post.title,
                excerpt: post.excerpt,
                image: post.image,
                date: post.date,
                author: 'Dr. Niti Navanimitkul',
                category: post.category
            })} />
            <BlogDetailClient post={post} relatedPosts={relatedPosts} />
        </>
    );
}
