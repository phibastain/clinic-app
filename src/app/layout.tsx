import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mtrusturology.com'),
  title: {
    default: 'M-Trust Urology Clinic | Urologist & Men\'s Health Specialist, Pattaya, Chonburi, Rayong',
    template: '%s | M-Trust Urology Clinic'
  },
  description: 'M-Trust Urology Clinic - Thailand\'s leading center for men\'s health. Expert treatment for erectile dysfunction, prostate conditions, penile prosthesis surgery in Pattaya, Chonburi, Rayong by Dr. Niti Navanimitkul.',
  keywords: [
    'Urologist Thailand', 'Urologist Pattaya', 'Men\'s Health Clinic Pattaya',
    'Erectile Dysfunction Treatment', 'Penile Prosthesis Surgery', 'Dr. Niti Navanimitkul',
    'UroLift Thailand', 'Rezum Treatment', 'BPH Treatment', 'Prostate Specialist',
    'Sexual Dysfunction Specialist', 'Best Urologist Chon Buri', 'M-Trust Clinic',
    'Men\'s Health Clinic Bangkok',
    'คลินิกทางเดินปัสสาวะพัทยา', 'หมอทางเดินปัสสาวะพัทยา', 'ศูนย์สุขภาพเพศชายพัทยา',
    'คลินิกทางเดินปัสสาวะศรีราชา', 'หมอทางเดินปัสสาวะศรีราชา',
    'คลินิกทางเดินปัสสาวะชลบุรี', 'หมอทางเดินปัสสาวะชลบุรี',
    'คลินิกทางเดินปัสสาวะระยอง', 'หมอทางเดินปัสสาวะระยอง',
    'คลินิกทางเดินปัสสาวะไทยแลนด์', 'Urology Clinic Thailand',
    'รักษาหย่อนสมรรถภาพทางเพศ', 'ผ่าตัดแกนองคชาตเทียม', 'หมอนิติ นวนิมิตกุล',
    'ต่อมลูกหมากโต พัทยา', 'ขลิบไร้เลือด พัทยา', 'ทำหมันชาย พัทยา',
    'طبيب مسالك بولية تايلاند', 'صحة الرجل باتايا', 'علاج ضعف الانتصاب',
    'زراعة دعامة القضيب', 'عيادة إم ترست', 'طبيب مسالك بولية باتايا',
    'уролог Таиланд', 'мужское здоровье Паттайя', 'лечение эректильной дисфункции',
    'имплант полового члена', 'клиника M-Trust', 'уролог Паттайя'
  ],
  authors: [{ name: 'Dr. Niti Navanimitkul' }],
  creator: 'M-Trust Urology Clinic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['th_TH', 'ar_SA', 'ru_RU'],
    url: 'https://www.mtrusturology.com',
    siteName: 'M-Trust Urology Clinic',
    title: 'M-Trust Urology Clinic | Urologist & Men\'s Health Specialist, Pattaya, Chonburi, Rayong',
    description: 'Thailand\'s leading center for men\'s health in Pattaya, Chonburi, Rayong. Expert treatment by Dr. Niti Navanimitkul.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'M-Trust Urology Clinic - Men\'s Health Excellence'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M-Trust Urology Clinic | Urologist & Men\'s Health Specialist, Pattaya, Chonburi, Rayong',
    description: 'Thailand\'s leading center for men\'s health and urology in Pattaya, Chonburi, Rayong.'
  },
  // Generates alternates dynamically per page
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  // Google Search Console verification — ใส่ code จริงเมื่อพร้อม
  verification: {
    google: 'ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE',
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // ตั้งค่าสีของ Browser Toolbar (เช่น บน Safari/Chrome มือถือ) ให้เปลี่ยนตามโหมด
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e2e8f0" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

// Shared components for the layout
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import TawkToWidget from "@/components/shared/TawkToWidget";
import ModernBackground from "@/components/ui/ModernBackground";

import { cookies, headers } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('lang')?.value;

  // Also detect language from URL query param for Googlebot (which doesn't send cookies)
  const headersList = await headers();
  const url = headersList.get('x-url') || headersList.get('referer') || '';
  const urlLangMatch = url.match(/[?&]lang=(th|ar|ru)\b/);
  const urlLang = urlLangMatch?.[1] || null;

  // Priority: cookie → URL query param → default 'en'
  const detectedLang = langCookie || urlLang || 'en';
  const htmlLang = detectedLang === 'th' ? 'th' : detectedLang === 'ar' ? 'ar' : detectedLang === 'ru' ? 'ru' : 'en';
  const htmlDir = detectedLang === 'ar' ? 'rtl' : 'ltr';
  const providerLang = detectedLang === 'th' ? 'TH' : detectedLang === 'ar' ? 'AR' : detectedLang === 'ru' ? 'RU' : 'EN';

  return (
    /* suppressHydrationWarning ช่วยแก้ปัญหาแจ้งเตือนตอนสลับ Theme เพราะเราจัดการ class ที่ html เอง */
    <html lang={htmlLang} dir={htmlDir} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoArabic.variable} antialiased min-h-screen`}
      >
        <ThemeProvider>
          <LanguageProvider initialLang={providerLang}>
            <div className="selection:bg-amber-500 selection:text-white">
              <div className="min-h-screen transition-colors duration-1000 font-sans relative overflow-x-hidden text-start text-slate-900 dark:text-slate-100">
                <ModernBackground />
                <Header />
                <main className="relative z-10 pt-[100px] text-start">
                  {children}
                </main>
                <Footer />
                <TawkToWidget />
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}