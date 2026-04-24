import { Metadata } from 'next';
import { cookies } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
    const cookieStore = await cookies();
    const lang = cookieStore.get('lang')?.value || 'en';
    const isAr = lang === 'ar';
    const isThai = lang === 'th';

    const title = isAr
        ? 'مدونة صحة الرجل | عيادة إم-ترست لجراحة المسالك البولية'
        : isThai
        ? 'บล็อกสุขภาพเพศชาย | M-Trust Urology Clinic'
        : "Men's Health Blog | M-Trust Urology Clinic";
    const description = isAr
        ? 'مقالات ومعلومات شاملة حول صحة الرجل وأمراض المسالك البولية وعلاج ضعف الانتصاب وأحدث التقنيات الطبية.'
        : isThai
        ? 'บทความและความรู้ด้านสุขภาพเพศชาย ระบบทางเดินปัสสาวะ และเทคโนโลยีการรักษาล่าสุด'
        : 'Articles and knowledge about men\'s health, urology conditions, ED treatments, and latest medical innovations.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            locale: isAr ? 'ar_SA' : isThai ? 'th_TH' : 'en_US',
        },
        alternates: {
            canonical: '/blog',
            languages: {
                'en': '/blog',
                'th': '/blog?lang=th',
                'ar': '/blog?lang=ar',
            },
        },
    };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
