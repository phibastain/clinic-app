import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * In-memory rate limiter store
 * Tracks request counts per IP within a sliding time window
 */
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const RATE_LIMIT_MAX_REQUESTS = 60; // Max requests per window
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes
let lastCleanup = Date.now();

// Known bot user-agents to block
const BLOCKED_BOT_PATTERNS = [
    /curl\//i,
    /python-requests/i,
    /scrapy/i,
    /httpclient/i,
    /java\//i,
    /wget/i,
    /go-http-client/i,
    /libwww-perl/i,
];

function getClientIp(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for');
    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }
    const realIp = request.headers.get('x-real-ip');
    if (realIp) {
        return realIp;
    }
    return '127.0.0.1';
}

/**
 * Passively clean up expired rate-limit entries during normal request flow.
 * This avoids setInterval which keeps the process alive and blocks build/dev exit.
 */
function cleanupExpiredEntries() {
    const now = Date.now();
    if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
    lastCleanup = now;
    for (const [ip, entry] of rateLimitStore.entries()) {
        if (now > entry.resetTime) {
            rateLimitStore.delete(ip);
        }
    }
}

function isRateLimited(ip: string): boolean {
    // Passive cleanup on each request (runs actual cleanup only every 5 min)
    cleanupExpiredEntries();

    const now = Date.now();
    const entry = rateLimitStore.get(ip);

    if (!entry || now > entry.resetTime) {
        rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    entry.count++;
    if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
        return true;
    }

    return false;
}

function isBlockedBot(userAgent: string | null): boolean {
    if (!userAgent) return false;
    return BLOCKED_BOT_PATTERNS.some(pattern => pattern.test(userAgent));
}

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent');
    const ip = getClientIp(request);

    // 1. Block known malicious bots
    if (isBlockedBot(userAgent)) {
        return new NextResponse('Forbidden', { status: 403 });
    }

    // 2. Rate limiting
    if (isRateLimited(ip)) {
        return new NextResponse(
            JSON.stringify({ error: 'Too many requests. Please try again later.' }),
            {
                status: 429,
                headers: {
                    'Content-Type': 'application/json',
                    'Retry-After': '60',
                },
            }
        );
    }

    // 3. CSRF Protection for API routes
    if (request.nextUrl.pathname.startsWith('/api/')) {
        const origin = request.headers.get('origin');
        const referer = request.headers.get('referer');
        const host = request.headers.get('host');

        // Allow requests if origin matches host OR if referer starts with our host
        // Note: Production check would be more strict with https://domain.com
        const isInternalRequest = (origin && origin.includes(host || '')) ||
            (referer && referer.includes(host || ''));

        if (!isInternalRequest && request.method !== 'GET') {
            return new NextResponse(
                JSON.stringify({ error: 'Unauthorized: CSRF validation failed' }),
                { status: 403, headers: { 'Content-Type': 'application/json' } }
            );
        }
    }

    // 4. Detect language from URL param and set cookie for SSR html lang
    const response = NextResponse.next({
        request: {
            headers: new Headers([
                ...Array.from(request.headers.entries()),
                ['x-url', request.url],
            ]),
        },
    });
    const langParam = request.nextUrl.searchParams.get('lang');
    if (langParam === 'th') {
        response.cookies.set('lang', 'th', { path: '/', sameSite: 'lax' });
    } else if (langParam === 'ar') {
        response.cookies.set('lang', 'ar', { path: '/', sameSite: 'lax' });
    } else if (langParam === 'ru') {
        response.cookies.set('lang', 'ru', { path: '/', sameSite: 'lax' });
    } else if (langParam !== null) {
        // Explicit non-th/ar/ru lang param — set to 'en'
        response.cookies.set('lang', 'en', { path: '/', sameSite: 'lax' });
    }

    // Additional security: prevent caching of sensitive pages
    if (request.nextUrl.pathname.startsWith('/api/')) {
        response.headers.set('Cache-Control', 'no-store, max-age=0');
    }

    return response;
}

// Apply proxy to all routes except static assets
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder assets
         */
        '/((?!_next/static|_next/image|favicon\\.ico|assets/).*)',
    ],
};
