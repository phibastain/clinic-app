'use server';

/**
 * Server action to securely retrieve the Web3Forms access key
 * This allows the client component to get the key from server environment variables
 * without requiring NEXT_PUBLIC_ prefix configuration in Vercel.
 */
export async function getWeb3FormsKey() {
    return process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';
}
