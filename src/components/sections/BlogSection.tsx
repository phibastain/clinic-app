'use client';

import { Clock, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/mockData';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import GradientButton from '@/components/ui/GradientButton';

const blogTitleToSlug = (title: string): string => {
    if (!title) return '';
    return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
};

const BlogSection = () => (
    <section id="blog" className="pt-8 pb-16 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left">
        <Container>
            <div className="flex justify-between items-end mb-8 text-left">
                <SectionTitle tag="Articles & Knowledge" title="Men's Health Blog" className="mb-0" />
                <GradientButton variant="outline" className="px-8 py-3.5 rounded-xl text-[10px]">Read More</GradientButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {BLOG_POSTS.map(post => (
                    <a href={`/blog/${blogTitleToSlug(post.title)}`} key={post.id} className="group flex flex-col sm:flex-row gap-6 items-center bg-linear-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 p-4 rounded-[2rem] border border-slate-200/50 dark:border-white/10 transition-all duration-300 text-left cursor-pointer">
                        <div className="w-full sm:w-44 lg:w-48 aspect-square overflow-hidden rounded-[1.5rem] shadow-md relative shrink-0">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-md text-[8px] font-black uppercase shadow-lg">{post.category}</div>
                        </div>
                        <div className="text-left flex-1 flex flex-col justify-between py-1 text-left">
                            <div>
                                <div className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2"><Clock size={12} className="mr-1" /> {post.date}</div>
                                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase leading-tight group-hover:text-amber-600 transition-colors mb-2 line-clamp-3 text-left">{post.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 mb-3 font-medium text-left">{post.excerpt}</p>
                            </div>
                            <div className="flex items-center space-x-1 text-xs font-black uppercase text-amber-600 group/btn text-left">
                                <span>Explore Article</span><ChevronRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </Container>
    </section>
);

export default BlogSection;
