"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './tribute.module.css';

export default function Tribute() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Preload Sandy's photo on mount to prevent 'glitch' during first view
    useEffect(() => {
        const img = new Image();
        img.src = "/sandy_tribute.png";
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
        setIsClosing(false);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 800);
    };

    if (!isHome) return null;

    return (
        <>
            <footer className={styles.footer}>
                <span className={styles.text}>
                    Made in loving memory of{' '}
                    <button
                        className={styles.trigger}
                        onClick={handleOpen}
                        type="button"
                    >
                        Sandy
                    </button>
                </span>
            </footer>

            {isOpen && (
                <div
                    className={`${styles.overlay} ${isClosing ? styles.closing : ''}`}
                    onClick={handleClose}
                >
                    {/* Intense Aura Backgrounds */}
                    <div className={`${styles.aura} ${styles.aura1}`} />
                    <div className={`${styles.aura} ${styles.aura2}`} />
                    <div className={`${styles.aura} ${styles.aura3}`} />
                    <div className={`${styles.aura} ${styles.aura4}`} />
                    <div className={`${styles.aura} ${styles.aura5}`} />

                    <div className={styles.content}>
                        {/* SVG filter: sharp center, progressively blurred edges */}
                        <svg width="0" height="0" style={{ position: 'absolute' }}>
                            <defs>
                                <filter id="edgeBlur" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
                                    {/* Blurred copy of the source */}
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blurred" />
                                    {/* Radial gradient mask: white center (sharp), black edges (blurred) */}
                                    <feImage href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='48%25' rx='42%25' ry='42%25'%3E%3Cstop offset='0%25' stop-color='white'/%3E%3Cstop offset='55%25' stop-color='white'/%3E%3Cstop offset='85%25' stop-color='black'/%3E%3Cstop offset='100%25' stop-color='black'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='400' height='500' fill='url(%23g)'/%3E%3C/svg%3E" result="mask" preserveAspectRatio="none" />
                                    {/* Use mask to composite: where white → show sharp, where black → show blurred */}
                                    <feComposite in="SourceGraphic" in2="mask" operator="in" result="sharpCenter" />
                                    <feComposite in="blurred" in2="mask" operator="out" result="blurredEdges" />
                                    <feMerge>
                                        <feMergeNode in="blurredEdges" />
                                        <feMergeNode in="sharpCenter" />
                                    </feMerge>
                                </filter>
                            </defs>
                        </svg>
                        <div className={styles.imageWrapper}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/sandy_tribute.png"
                                alt="Sandy"
                                className={styles.image}
                            />
                        </div>
                        <p className={styles.tributeText}>Forever in our hearts.</p>
                    </div>
                </div>
            )}
        </>
    );
}
