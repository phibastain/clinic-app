import { NextResponse } from 'next/server';
import { sanitizeText, sanitizeEmail, sanitizePhone } from '@/utils/sanitize';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        // 1. Honeypot check (Double check on server)
        const botcheck = formData.get('botcheck');
        if (botcheck === 'on' || botcheck === 'true') {
            return NextResponse.json({ success: false, message: 'Bot detected' }, { status: 400 });
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

        // 4. Forward to Web3Forms (Server-to-Server)
        const web3FormData = new FormData();
        // Hardcoded access key to ensure it works on every deployment without manual setup
        const ACCESS_KEY = '88ddf2f1-99bc-4a39-b6af-5fdb7d6e0588';
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
