'use client';

import { useState, useEffect } from 'react';

/**
 * TawkToWidget component
 * This component integrates the Tawk.to live chat system.
 * It waits for user interaction (scroll, mousemove, touch) before loading
 * to prevent third-party cookie flags in Lighthouse and improve performance.
 */
const TawkToWidget = () => {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const handleInteraction = () => {
            setShouldLoad(true);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };

        window.addEventListener('scroll', handleInteraction, { passive: true });
        window.addEventListener('mousemove', handleInteraction, { passive: true });
        window.addEventListener('touchstart', handleInteraction, { passive: true });

        // Fallback: Load after 10 seconds empty idle time anyway
        const timer = setTimeout(() => {
            handleInteraction();
        }, 10000);

        return () => {
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        if (!shouldLoad) return;

        // @ts-ignore
        window.Tawk_API = window.Tawk_API || {};
        // @ts-ignore
        window.Tawk_LoadStart = new Date();
        
        const s1 = document.createElement("script");
        const s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/699fee974afa321c34c78c17/1jicbo05c';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        
        if (s0 && s0.parentNode) {
            s0.parentNode.insertBefore(s1, s0);
        } else {
            document.head.appendChild(s1);
        }
    }, [shouldLoad]);

    return null; // Render nothing, purely handles the script injection
};

export default TawkToWidget;
