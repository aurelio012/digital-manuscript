"use client";

import { useState, useEffect } from 'react';
import styles from './tribute.module.css';

export default function Tribute() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleOpen = () => {
        setIsOpen(true);
        setIsClosing(false);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 800); // 0.8s to match CSS transition
    };

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
