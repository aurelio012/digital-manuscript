"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import styles from './tribute.module.css';

export default function Tribute() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

    // Preload Sandy's photo on mount to prevent 'glitch' during first view
    useEffect(() => {
        const img = new Image();
        img.src = "/sandy_tribute.png";
        return () => clearTimeout(closeTimer.current);
    }, []);

    const handleOpen = () => {
        clearTimeout(closeTimer.current);
        setIsOpen(true);
        setIsClosing(false);
    };

    const handleClose = useCallback(() => {
        clearTimeout(closeTimer.current);
        setIsClosing(true);
        closeTimer.current = setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
            triggerRef.current?.focus();
        }, 800);
    }, []);

    // Focus the dialog on open; Escape closes it
    useEffect(() => {
        if (!isOpen) return;
        overlayRef.current?.focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, handleClose]);

    if (!isHome) return null;

    return (
        <>
            <footer className={styles.footer} data-print="hide">
                <span className={styles.text}>
                    Made in loving memory of{' '}
                    <button
                        ref={triggerRef}
                        className={styles.trigger}
                        onClick={handleOpen}
                        type="button"
                        aria-haspopup="dialog"
                    >
                        Sandy
                    </button>
                </span>
            </footer>

            {isOpen && (
                <div
                    ref={overlayRef}
                    className={`${styles.overlay} ${isClosing ? styles.closing : ''}`}
                    onClick={handleClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label="In loving memory of Sandy"
                    tabIndex={-1}
                >
                    {/* Intense Aura Backgrounds */}
                    <div className={`${styles.aura} ${styles.aura1}`} aria-hidden="true" />
                    <div className={`${styles.aura} ${styles.aura2}`} aria-hidden="true" />
                    <div className={`${styles.aura} ${styles.aura3}`} aria-hidden="true" />
                    <div className={`${styles.aura} ${styles.aura4}`} aria-hidden="true" />
                    <div className={`${styles.aura} ${styles.aura5}`} aria-hidden="true" />

                    <div className={styles.content}>
                        <div className={styles.imageWrapper}>
                            {/* Blurred background glow */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/sandy_tribute.png"
                                alt=""
                                className={styles.imageBlurred}
                                aria-hidden="true"
                            />
                            {/* Sharp foreground photo */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/sandy_tribute.png"
                                alt="Sandy"
                                className={styles.image}
                            />
                        </div>
                        <p className={styles.tributeText}>Forever in our hearts.</p>
                    </div>

                    {/* Its click bubbles to the overlay, which closes the dialog */}
                    <button type="button" className="visually-hidden">
                        Close
                    </button>
                </div>
            )}
        </>
    );
}
