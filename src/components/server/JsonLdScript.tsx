/**
 * JsonLdScript - Server Component for SEO Structured Data
 * Injects JSON-LD schema into page head for search engines
 */

interface JsonLdScriptProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>;
}

export default function JsonLdScript({ data }: JsonLdScriptProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
