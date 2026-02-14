"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './ghost.module.css';

export default function GhostGradient() {
    return (
        <InteractiveWrapper />
    );
}

function InteractiveWrapper() {
    // Only run on client to avoid hydration mismatch
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className={styles.container}><StaticOrbs /></div>;

    return <InteractiveOrbs />;
}

function StaticOrbs() {
    return (
        <div className={styles.container}>
            <div className={styles.orb1} />
            <div className={styles.orb2} />
            <div className={styles.noise} />
        </div>
    );
}

function InteractiveOrbs() {
    const [clickActive, setClickActive] = useState(false);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const requestRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMove = (e: MouseEvent | TouchEvent) => {
            let clientX, clientY;
            if (e instanceof MouseEvent) {
                clientX = e.clientX;
                clientY = e.clientY;
            } else {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            }

            const { innerWidth, innerHeight } = window;
            // Normalize to -1 to 1 range
            targetRef.current = {
                x: (clientX / innerWidth) * 2 - 1,
                y: (clientY / innerHeight) * 2 - 1
            };
        };

        const handleClick = () => {
            setClickActive(true);
            setTimeout(() => setClickActive(false), 300);
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove);
        window.addEventListener('mousedown', handleClick);
        window.addEventListener('touchstart', handleClick);

        const animate = () => {
            // Lerp (Linear Interpolation) for softness
            // 0.03 is the "weight" — lower is softer/slower
            currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.03;
            currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.03;

            if (containerRef.current) {
                containerRef.current.style.setProperty('--mouse-x', currentRef.current.x.toString());
                containerRef.current.style.setProperty('--mouse-y', currentRef.current.y.toString());
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('mousedown', handleClick);
            window.removeEventListener('touchstart', handleClick);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`${styles.container} ${clickActive ? styles.active : ''}`}
        >
            <div className={styles.interactiveWrapper}>
                <div className={styles.orb1} />
            </div>
            <div className={styles.interactiveWrapperReverse}>
                <div className={styles.orb2} />
            </div>
            <div className={styles.noise} />
        </div>
    );
}
