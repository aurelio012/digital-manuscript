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
        const handleMove = (e: PointerEvent) => {
            const { innerWidth, innerHeight } = window;
            targetRef.current = {
                x: (e.clientX / innerWidth) * 2 - 1,
                y: (e.clientY / innerHeight) * 2 - 1
            };
        };

        const handleDown = () => {
            setClickActive(true);
            setTimeout(() => setClickActive(false), 400); // 400ms pulse
        };

        window.addEventListener('pointermove', handleMove);
        window.addEventListener('pointerdown', handleDown);

        const animate = () => {
            // Increased lerp weight for more responsive feel (0.03 -> 0.08)
            currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
            currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;

            if (containerRef.current) {
                containerRef.current.style.setProperty('--mouse-x', currentRef.current.x.toString());
                containerRef.current.style.setProperty('--mouse-y', currentRef.current.y.toString());
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('pointermove', handleMove);
            window.removeEventListener('pointerdown', handleDown);
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
