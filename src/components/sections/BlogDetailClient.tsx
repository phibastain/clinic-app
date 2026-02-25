'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
    Calendar, Clock, User as UserIcon, Share2, Facebook, Twitter,
    MessageCircle, Bookmark, Tag, Home
} from 'lucide-react';
import { sanitizeHtmlContent } from '@/utils/sanitize';
import { blogTitleToSlug } from '@/utils/blogUtils';
import Container from '@/components/ui/Container';
import GradientButton from '@/components/ui/GradientButton';

interface BlogDetailClientProps {
    post: any;
    relatedPosts: any[];
}

export default function BlogDetailClient({ post, relatedPosts }: BlogDetailClientProps) {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#050505] pt-8 pb-20 text-left selection:bg-amber-500 selection:text-white">
            <Container className="max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-white/10">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-500 rounded-full text-xs font-black uppercase tracking-wider">
                                    {post.category}
                                </span>
                                <span className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                                    <Calendar size={14} className="mr-1.5" />
                                    {post.date}
                                </span>
                                <span className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                                    <Clock size={14} className="mr-1.5" />
                                    5 min read
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>

                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-white/10">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200/50 dark:border-white/10">
                            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-white prose-li:text-slate-700 dark:prose-li:text-slate-300">
                                <div className="article-content leading-relaxed" dangerouslySetInnerHTML={{ __html: sanitizeHtmlContent(post.content || '') }} />
                            </article>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-8">
                            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-slate-200/50 dark:border-white/10">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center">
                                    <span className="w-1 h-6 bg-amber-600 rounded-full mr-3 shadow-lg shadow-amber-600/50"></span>
                                    More Articles
                                </h3>
                                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                                    {relatedPosts.map((relatedPost) => (
                                        <button
                                            key={relatedPost.id}
                                            onClick={() => router.push(`/blog/${blogTitleToSlug(relatedPost.title)}`)}
                                            className="group w-full text-left block p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                                        >
                                            <div className="flex space-x-4">
                                                <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                                    <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <span className="text-xs text-amber-600 dark:text-amber-500 font-bold uppercase tracking-wider mb-1 block">{relatedPost.category}</span>
                                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-amber-600 transition-colors">{relatedPost.title}</h4>
                                                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                                                        <Calendar size={12} className="mr-1" />{relatedPost.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-linear-to-br from-amber-500 to-amber-600 backdrop-blur-md rounded-3xl p-8 shadow-2xl text-white border border-amber-400/20 text-center">
                                <h3 className="text-xl font-black mb-3 text-white">Ready to Start?</h3>
                                <GradientButton variant="dark" onClick={() => router.push('/#contact')} className="w-full justify-center">
                                    Book Appointment
                                </GradientButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
