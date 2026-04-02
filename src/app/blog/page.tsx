'use client';

import { useState, useEffect, useMemo } from 'react';
import { Clock, ChevronRight, Search, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useTranslation } from '@/hooks/useTranslation';
import { BLOG_POSTS } from '@/data/mockData';
import { blogTitleToSlug } from '@/utils/blogUtils';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

interface BlogPostItem {
    id: string;
    title: string;
    titleTH?: string;
    excerpt: string;
    excerptTH?: string;
    date: string;
    category: string;
    image: string;
    slug: string;
}

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
    const { lang } = useLanguage();
    const { t } = useTranslation();
    const posts: BlogPostItem[] = useMemo(() => BLOG_POSTS.map(p => ({
        id: String(p.id),
        title: p.title,
        titleTH: '',
        slug: blogTitleToSlug(p.title),
        excerpt: p.excerpt,
        excerptTH: '',
        category: p.category,
        image: p.image,
        date: p.date,
    })), []);
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    // Reset to page 1 when filter/search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [search, activeCategory]);

    const categories = ['All', ...Array.from(new Set(posts.map(p => p.category).filter(Boolean)))];

    const filtered = posts.filter(p => {
        const titleContent = lang === 'TH' ? (p.titleTH || t(p.title)) : p.title;
        const excerptContent = lang === 'TH' ? (p.excerptTH || t(p.excerpt)) : p.excerpt;
        const matchCat = activeCategory === 'All' || p.category === activeCategory;
        const matchSearch = !search || titleContent.toLowerCase().includes(search.toLowerCase()) || excerptContent?.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
    const paginated = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    return (
        <section className="pt-8 pb-20 min-h-screen text-left">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <SectionTitle tag="Articles & Knowledge" title="Men's Health Blog" className="mb-0" />
                    <div className="relative">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:border-amber-500 w-full md:w-64"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${activeCategory === cat
                                ? 'bg-slate-900 text-white border-slate-900 dark:bg-amber-600 dark:border-amber-600'
                                : 'bg-white/50 text-slate-500 border-slate-200 hover:border-amber-600 dark:bg-white/5 dark:text-slate-300 dark:border-white/10'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {filtered.length === 0 ? (
                    <div className="text-center py-20 text-slate-400">
                        <p className="text-lg font-medium">No articles found.</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {paginated.map(post => (
                                <a
                                    href={`/blog/${post.slug}`}
                                    key={post.id}
                                    className="group flex flex-col sm:flex-row gap-6 items-center bg-linear-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 p-4 rounded-4xl border border-slate-200/50 dark:border-white/10 transition-all duration-300 hover:border-amber-500/40 hover:shadow-lg cursor-pointer"
                                >
                                    <div className="w-full sm:w-44 lg:w-48 aspect-square overflow-hidden rounded-3xl shadow-md relative shrink-0">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-md text-[8px] font-black uppercase shadow-lg">{post.category}</div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <div className="flex items-center text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">
                                                <Clock size={12} className="mr-1" /> {post.date}
                                            </div>
                                            <h2 className="text-xs md:text-sm font-black text-slate-900 dark:text-white uppercase leading-tight group-hover:text-amber-600 transition-colors mb-2 line-clamp-3">
                                                {lang === 'TH' ? (post.titleTH || t(post.title)) : post.title}
                                            </h2>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-2 mb-3 font-medium">
                                                {lang === 'TH' ? (post.excerptTH || t(post.excerpt)) : post.excerpt}
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-1 text-xs font-black uppercase text-amber-600">
                                            <span>Explore Article</span>
                                            <ChevronRight size={12} className="transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-12">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 hover:border-amber-500 hover:text-amber-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronLeft size={16} />
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black border transition-all ${currentPage === page
                                            ? 'bg-amber-600 text-white border-amber-600 shadow-lg shadow-amber-500/20'
                                            : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700 hover:border-amber-500 hover:text-amber-600'}`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 hover:border-amber-500 hover:text-amber-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        )}

                        <p className="text-center text-slate-400 text-xs mt-4">
                            Page {currentPage} of {totalPages} &nbsp;·&nbsp; {filtered.length} articles total
                        </p>
                    </>
                )}
            </Container>
        </section>
    );
}
