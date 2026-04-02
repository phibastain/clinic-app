import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { sanitizeText, sanitizeEmail, sanitizePhone } from '@/utils/sanitize';

/**
 * Server-side rate limiter for API route
 * Limits form submissions per IP to prevent spam
 */
const submitRateLimit = new Map<string, { count: number; resetTime: number }>();
const SUBMIT_WINDOW_MS = 60 * 1000; // 1 minute
const SUBMIT_MAX_REQUESTS = 3; // Max 3 submissions per minute per IP

function isSubmitRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = submitRateLimit.get(ip);

    if (!entry || now > entry.resetTime) {
        submitRateLimit.set(ip, { count: 1, resetTime: now + SUBMIT_WINDOW_MS });
        return false;
    }

    entry.count++;
    return entry.count > SUBMIT_MAX_REQUESTS;
}

function getClientIp(headersList: Headers): string {
    const forwarded = headersList.get('x-forwarded-for');
    if (forwarded) return forwarded.split(',')[0].trim();
    const realIp = headersList.get('x-real-ip');
    if (realIp) return realIp;
    return '127.0.0.1';
}

export async function POST(request: Request) {
    try {
        const headersList = await headers();

        // 0. Rate limiting per IP (stricter than global middleware)
        const ip = getClientIp(headersList);
        if (isSubmitRateLimited(ip)) {
            return NextResponse.json(
                { success: false, message: 'Too many submissions. Please wait a moment.' },
                { status: 429, headers: { 'Retry-After': '60' } }
            );
        }

        const formData = await request.formData();

        // 1. Honeypot check (Double check on server)
        const botcheck = formData.get('botcheck');
        if (botcheck === 'on' || botcheck === 'true') {
            // Return success to avoid revealing bot detection to attackers
            return NextResponse.json({ success: true });
        }

        // 2. Extract and Sanitize data
        const name = sanitizeText(formData.get('Full Name')?.toString() || '', 100);
        const phone = sanitizePhone(formData.get('Phone')?.toString() || '');
        const email = sanitizeEmail(formData.get('Email')?.toString() || '');
        const service = sanitizeText(formData.get('Service')?.toString() || '', 50);
        const date = sanitizeText(formData.get('Preferred Date')?.toString() || '', 20);
        const time = sanitizeText(formData.get('Preferred Time')?.toString() || '', 20);
        const message = sanitizeText(formData.get('Message')?.toString() || '', 1000);

        // 3. Server-side Validation
        if (!name || !phone || !email) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        // 4. Forward to Web3Forms (Server-to-Server) — API key stays on server only
        const ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
        if (!ACCESS_KEY) {
            console.error('WEB3FORMS_ACCESS_KEY environment variable is not set');
            return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
        }

        const web3FormData = new FormData();
        web3FormData.append('access_key', ACCESS_KEY);
        web3FormData.append('name', name);
        web3FormData.append('phone', phone);
        web3FormData.append('email', email);
        web3FormData.append('service', service);
        web3FormData.append('date', date);
        web3FormData.append('time', time);
        web3FormData.append('message', message);
        web3FormData.append('subject', 'New Appointment Request — M-Trust Urology Clinic');
        web3FormData.append('from_name', 'M-Trust Clinic Website');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: web3FormData,
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, message: result.message }, { status: 500 });
        }
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
