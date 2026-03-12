"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line
        setIsVisible(false);
        // Trigger animation on next frame
        const frame = requestAnimationFrame(() => {
            setIsVisible(true);
        });
        return () => cancelAnimationFrame(frame);
    }, [pathname]);

    return (
        <div
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                    ? 'translateY(0) scale(1)'
                    : 'translateY(12px) scale(0.995)',
                filter: isVisible
                    ? 'blur(0px)'
                    : 'blur(2px)',
                transition: [
                    'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    'filter 0.5s ease-out',
                ].join(', '),
            }}
        >
            {children}
        </div>
    );
}
