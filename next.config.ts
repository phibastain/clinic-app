import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent MIME type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Prevent clickjacking — deny all framing
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Legacy XSS filter for older browsers
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // Control referrer information leakage
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Force HTTPS (HSTS) — 1 year with subdomains
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // Restrict browser features
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  // Content Security Policy (Stricter Expert Version)
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline' ${process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ""} https://embed.tawk.to https://cdn.jsdelivr.net`, // Tawk.to + emoji CDN
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://embed.tawk.to",
      "font-src 'self' https://fonts.gstatic.com https://embed.tawk.to https://*.tawk.to",
      "img-src 'self' data: blob: https://flagcdn.com https://images.unsplash.com https://cdn-icons-png.flaticon.com https://img.youtube.com https://embed.tawk.to https://*.tawk.to https://cdn.jsdelivr.net",
      "connect-src 'self' https://api.web3forms.com https://embed.tawk.to wss://*.tawk.to https://*.tawk.to", // Added Web3Forms and Tawk.to
      "frame-src 'self' https://www.google.com https://www.youtube.com https://embed.tawk.to",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'", // Forms route through /api/contact server-side
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
  // Prevent DNS prefetching to external domains
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'off', // Turning off to prevent information leakage
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'flagcdn.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  // Disable the X-Powered-By header (hides Next.js fingerprint)
  poweredByHeader: false,
};

export default nextConfig;
