import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mtrusturology.com'),
  title: {
    default: 'M-Trust Urology Clinic | Best Urologist in Thailand | Men\'s Health Specialist',
    template: '%s | M-Trust Urology Clinic'
  },
  description: 'M-Trust Urology Clinic - Thailand\'s leading center for men\'s health. Expert treatment for erectile dysfunction, prostate conditions, penile prosthesis surgery by Dr. Niti Navanimitkul. Book consultation today.',
  keywords: [
    'Urologist Thailand', 'Men\'s Health Clinic Bangkok', 'Erectile Dysfunction Treatment',
    'Penile Prosthesis Surgery', 'Dr. Niti Navanimitkul', 'UroLift Thailand',
    'Rezum Treatment', 'BPH Treatment', 'Prostate Specialist', 'Sexual Dysfunction Specialist',
    'Best Urologist Bangkok', 'M-Trust Clinic'
  ],
  authors: [{ name: 'Dr. Niti Navanimitkul' }],
  creator: 'M-Trust Urology Clinic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mtrusturology.com',
    siteName: 'M-Trust Urology Clinic',
    title: 'M-Trust Urology Clinic | Best Urologist in Thailand',
    description: 'Thailand\'s leading center for men\'s health. Expert treatment by Dr. Niti Navanimitkul.',
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
    title: 'M-Trust Urology Clinic | Best Urologist in Thailand',
    description: 'Thailand\'s leading center for men\'s health and urology.'
  },
  alternates: {
    canonical: '/',
  },
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
  verification: {
    google: 'google-site-verification-code',
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* suppressHydrationWarning ช่วยแก้ปัญหาแจ้งเตือนตอนสลับ Theme เพราะเราจัดการ class ที่ html เอง */
    <html lang="en" suppressHydrationWarning>
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <div className="selection:bg-amber-500 selection:text-white">
              <div className="min-h-screen transition-colors duration-1000 font-sans relative overflow-x-hidden text-left text-slate-900 dark:text-slate-100">
                <ModernBackground />
                <Header />
                <main className="relative z-10 pt-[100px] text-left">
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