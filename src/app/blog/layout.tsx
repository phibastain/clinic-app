import { Metadata } from 'next';
import { cookies } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
    const cookieStore = await cookies();
    const lang = cookieStore.get('lang')?.value || 'en';
    const isAr = lang === 'ar';
    const isThai = lang === 'th';
    const isRu = lang === 'ru';

    const title = isRu
        ? 'Блог о мужском здоровье | Урологическая клиника M-Trust'
        : isAr
        ? 'مدونة صحة الرجل | عيادة إم-ترست لجراحة المسالك البولية'
        : isThai
        ? 'บล็อกสุขภาพเพศชาย | M-Trust Urology Clinic'
        : "Men's Health Blog | M-Trust Urology Clinic";
    const description = isRu
        ? 'Статьи и информация о мужском здоровье, урологических заболеваниях, лечении эректильной дисфункции и новейших медицинских технологиях.'
        : isAr
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
            locale: isRu ? 'ru_RU' : isAr ? 'ar_SA' : isThai ? 'th_TH' : 'en_US',
        },
        alternates: {
            canonical: '/blog',
            languages: {
                'en': '/blog',
                'th': '/blog?lang=th',
                'ar': '/blog?lang=ar',
                'ru': '/blog?lang=ru',
                'x-default': '/blog',
            },
        },
    };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
