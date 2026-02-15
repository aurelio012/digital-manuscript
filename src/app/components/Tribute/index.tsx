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
