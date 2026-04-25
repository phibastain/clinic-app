'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useTranslation } from '@/hooks/useTranslation';
import { BLOG_POSTS } from '@/data/mockData';
import { blogTitleToSlug } from '@/utils/blogUtils';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { getLocalizedField } from '@/utils/langUtils';

const POSTS_PER_PAGE = 6;

const BlogSection = () => {
    const { lang } = useLanguage();
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    const allPosts = useMemo(() => BLOG_POSTS.map(p => ({
        id: String(p.id),
        title: p.title,
        titleTH: '',
        titleAR: p.titleAR || '',
        slug: blogTitleToSlug(p.title),
        excerpt: p.excerpt,
        excerptTH: '',
        excerptAR: p.excerptAR || '',
        category: p.category,
        image: p.image,
        date: p.date,
    })), []);

    const categories = useMemo(() =>
        ['All', ...Array.from(new Set(BLOG_POSTS.map(p => p.category).filter(Boolean)))],
    []);

    // Reset page on category change
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory]);

    const filtered = activeCategory === 'All'
        ? allPosts
        : allPosts.filter(p => p.category === activeCategory);

    const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
    const paginated = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    return (
        <section id="blog" className="pt-8 pb-16 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <SectionTitle tag={t("Articles & Knowledge")} title={t("Men's Health Blog")} className="mb-0" />
                    <Link
                        href={lang === 'EN' ? '/blog' : `/blog?lang=${lang.toLowerCase()}`}
                        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-amber-500 hover:text-amber-600 transition-all cursor-pointer bg-white dark:bg-slate-900 shadow-sm hover:shadow-md"
                    >
                        {t('View All Articles') || t('Read More')}
                    </Link>
                </div>

                <div className="mb-8 text-left">

                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border cursor-pointer ${activeCategory === cat
                                    ? 'bg-slate-900 text-white border-slate-900 dark:bg-amber-600 dark:border-amber-600 shadow-lg'
                                    : 'bg-white/50 text-slate-500 border-slate-200 hover:border-amber-600 hover:text-amber-600 dark:bg-white/5 dark:text-slate-300 dark:border-white/10 dark:hover:border-amber-500'}`}
                            >
                                {cat === 'All' ? t('All') : t(cat)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Cards */}
                {paginated.length === 0 ? (
                    <div className="text-center py-16 text-slate-400">
                        <p className="text-sm font-medium">{t("No articles found.")}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {paginated.map(post => {
                            const baseUrl = `/blog/${post.slug}`;
                            const url = lang === 'EN' ? baseUrl : `${baseUrl}?lang=${lang.toLowerCase()}`;
                            return (
                            <Link href={url} key={post.id} className="group flex flex-col sm:flex-row gap-6 items-center bg-linear-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 p-4 rounded-4xl border border-slate-200/50 dark:border-white/10 transition-all duration-300 text-left cursor-pointer hover:border-amber-500/40 hover:shadow-lg">
                                <div className="w-full sm:w-44 lg:w-48 aspect-square overflow-hidden rounded-3xl shadow-md relative shrink-0">
                                    <Image src={post.image || ''} alt={post.title || 'Blog Art'} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" sizes="(max-width: 640px) 100vw, 192px" />
                                    <div className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-md text-[8px] font-black uppercase shadow-lg">{t(post.category)}</div>
                                </div>
                                <div className="flex-1 flex flex-col justify-between py-1 text-left">
                                    <div>
                                        <div className="flex items-center text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2"><Clock size={12} className="mr-1" /> {post.date}</div>
                                        <h3 className="text-xs md:text-sm font-black text-slate-900 dark:text-white uppercase leading-tight group-hover:text-amber-600 transition-colors mb-2 line-clamp-3">
                                            {getLocalizedField(post, 'title', lang, t)}
                                        </h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed line-clamp-2 mb-3 font-medium">
                                            {getLocalizedField(post, 'excerpt', lang, t)}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-1 text-xs font-black uppercase text-amber-600 group/btn">
                                        <span>{t("Explore Article")}</span><ChevronRight size={12} className="transition-transform group-hover/btn:translate-x-1 md:w-[14px] md:h-[14px]" />
                                    </div>
                                </div>
                            </Link>
                        )})}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex flex-col items-center mt-10 gap-3">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 hover:border-amber-500 hover:text-amber-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                            >
                                <ChevronLeft size={16} />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black border transition-all cursor-pointer ${currentPage === page
                                        ? 'bg-amber-600 text-white border-amber-600 shadow-lg shadow-amber-500/20'
                                        : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700 hover:border-amber-500 hover:text-amber-600'}`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 hover:border-amber-500 hover:text-amber-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                        <p className="text-slate-400 text-xs">
                            {t("Page")} {currentPage} / {totalPages} · {filtered.length} {t("articles")}
                        </p>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default BlogSection;
