import Link from 'next/link';
import Container from '@/components/ui/Container';
import { cookies } from 'next/headers';

export default async function NotFound() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('lang')?.value || 'en';
    const isAr = lang === 'ar';

    const t = {
        title: isAr ? 'الصفحة غير موجودة' : 'Page Not Found',
        desc: isAr
            ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نساعدك في العثور على ما تحتاجه.'
            : "The page you're looking for doesn't exist or has been moved. Let us help you find what you need.",
        backHome: isAr ? 'العودة للرئيسية' : 'Back to Home',
        contactUs: isAr ? 'تواصل معنا' : 'Contact Us',
        popular: isAr ? 'صفحات شائعة' : 'Popular Pages',
        services: isAr ? 'الخدمات' : 'Services',
        blog: isAr ? 'المدونة' : 'Blog',
        doctors: isAr ? 'أطباؤنا' : 'Our Doctors',
        faq: isAr ? 'الأسئلة الشائعة' : 'FAQ',
        expertise: isAr ? 'الخبرات' : 'Expertise',
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center py-20" dir={isAr ? 'rtl' : 'ltr'}>
            <Container className="max-w-2xl text-center">
                <div className="mb-8">
                    <span className="text-8xl md:text-9xl font-black bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                        404
                    </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">
                    {t.title}
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-md mx-auto">
                    {t.desc}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-8 py-3.5 bg-linear-to-r from-amber-500 to-orange-500 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:shadow-xl hover:shadow-amber-500/25 hover:scale-[1.02] transition-all duration-300"
                    >
                        {t.backHome}
                    </Link>
                    <Link
                        href="/#contact"
                        className="px-8 py-3.5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:border-amber-500/50 hover:text-amber-600 transition-all duration-300"
                    >
                        {t.contactUs}
                    </Link>
                </div>
                <div className="mt-16 pt-8 border-t border-slate-200/50 dark:border-white/10">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t.popular}</p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link href="/#services" className="text-sm text-slate-500 hover:text-amber-600 font-medium transition-colors">{t.services}</Link>
                        <span className="text-slate-300 dark:text-slate-700">&bull;</span>
                        <Link href="/#blog" className="text-sm text-slate-500 hover:text-amber-600 font-medium transition-colors">{t.blog}</Link>
                        <span className="text-slate-300 dark:text-slate-700">&bull;</span>
                        <Link href="/#doctors" className="text-sm text-slate-500 hover:text-amber-600 font-medium transition-colors">{t.doctors}</Link>
                        <span className="text-slate-300 dark:text-slate-700">&bull;</span>
                        <Link href="/#faq" className="text-sm text-slate-500 hover:text-amber-600 font-medium transition-colors">{t.faq}</Link>
                        <span className="text-slate-300 dark:text-slate-700">&bull;</span>
                        <Link href="/#expertise" className="text-sm text-slate-500 hover:text-amber-600 font-medium transition-colors">{t.expertise}</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
