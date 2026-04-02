import { BLOG_POSTS } from '@/data/mockData';
import { blogTitleToSlug } from '@/utils/blogUtils';

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: blogTitleToSlug(post.title),
    }));
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
