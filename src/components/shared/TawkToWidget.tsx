'use client';

import Script from 'next/script';

/**
 * TawkToWidget component
 * This component integrates the Tawk.to live chat system.
 * It uses 'next/script' with 'afterInteractive' strategy to ensure
 * the script loads after the page is interactive, which is better for SEO and performance.
 */
const TawkToWidget = () => {
    return (
        <Script
            id="tawk-to-script"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
                __html: `
                    window.Tawk_API = window.Tawk_API || {};
                    window.Tawk_LoadStart = new Date();
                    (function(){
                        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                        s1.async=true;
                        s1.src='https://embed.tawk.to/699fee974afa321c34c78c17/1jicbo05c';
                        s1.charset='UTF-8';
                        s1.setAttribute('crossorigin','*');
                        s0.parentNode.insertBefore(s1,s0);
                    })();
                `,
            }}
        />
    );
};

export default TawkToWidget;
