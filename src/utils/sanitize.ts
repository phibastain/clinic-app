/**
 * Input Sanitization Utilities
 * Prevents XSS, injection attacks, and malicious input
 */

/**
 * Strip all HTML tags from a string
 */
export function stripHtml(input: string): string {
    return input.replace(/<[^>]*>/g, '');
}

/**
 * Sanitize a general text input — strip tags, trim, and limit length
 */
export function sanitizeText(input: string, maxLength: number = 500): string {
    return stripHtml(input).trim().slice(0, maxLength);
}

/**
 * Sanitize and validate an email address
 * Returns the sanitized email or empty string if invalid
 */
export function sanitizeEmail(input: string): string {
    const cleaned = input.trim().toLowerCase().slice(0, 254);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(cleaned) ? cleaned : '';
}

/**
 * Sanitize a phone number — keep only digits, +, -, spaces, and parentheses
 */
export function sanitizePhone(input: string): string {
    return input.replace(/[^0-9+\-() ]/g, '').trim().slice(0, 20);
}

/**
 * Sanitize HTML content for safe rendering (blog posts, etc.)
 * Removes dangerous tags and attributes while keeping safe formatting
 */
export function sanitizeHtmlContent(html: string): string {
    // Remove script tags and their content
    let safe = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    // Remove event handler attributes (onclick, onerror, onload, etc.)
    safe = safe.replace(/\s*on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
    // Remove javascript: protocol in href/src
    safe = safe.replace(/(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, '');
    // Remove data: protocol in src (can be used for XSS)
    safe = safe.replace(/src\s*=\s*(?:"data:[^"]*"|'data:[^']*')/gi, '');
    // Remove iframe tags EXCEPT trusted video embeds (YouTube, Vimeo)
    safe = safe.replace(/<iframe\b([^<]*)(?:(?!<\/iframe>)<[^<])*<\/iframe>/gi, (match) => {
        const isTrusted = /src\s*=\s*["']https?:\/\/(www\.)?(youtube\.com|youtu\.be|vimeo\.com)/.test(match);
        return isTrusted ? match : '';
    });
    // Remove object/embed tags
    safe = safe.replace(/<(?:object|embed)\b[^<]*(?:(?!<\/(?:object|embed)>)<[^<]*)*<\/(?:object|embed)>/gi, '');
    // Remove style attributes that could contain expressions
    safe = safe.replace(/style\s*=\s*(?:"[^"]*expression\s*\([^"]*"|'[^']*expression\s*\([^']*')/gi, '');
    // Remove base tags
    safe = safe.replace(/<base\b[^>]*>/gi, '');
    // Remove form tags
    safe = safe.replace(/<\/?form\b[^>]*>/gi, '');

    return safe;
}
