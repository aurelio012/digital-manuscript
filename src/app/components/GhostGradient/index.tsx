"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ghost.module.css';

interface Firefly {
    id: number;
    top: number;
    left: number;
    hue: number;
    size: string;
    delay: string;
}

export default function GhostGradient() {
    return <InteractiveOrbs />;
}

function InteractiveOrbs() {
    const [fireflies, setFireflies] = useState<Firefly[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const orbIdRef = useRef(0);

    const spawnFirefly = useCallback(() => {
        // Limit total number to prevent crash, but allow a lot (e.g., 50)
        if (fireflies.length > 50) {
            setFireflies(prev => prev.slice(1)); // Remove oldest
        }

        const id = orbIdRef.current++;
        const newFirefly: Firefly = {
            id,
            top: Math.random() * 100,
            left: Math.random() * 100,
            hue: Math.floor(Math.random() * 360), // Full spectrum
            size: `${100 + Math.random() * 150}px`, // 100px - 250px
            delay: `${Math.random() * 0.2 + 0.05}s`, // Random delay 0.05s - 0.25s
        };

        setFireflies(prev => [...prev, newFirefly]);
    }, [fireflies.length]);

    // Global Click Listener - ONLY enable client-side
    useEffect(() => {
        const handleClick = () => spawnFirefly();
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, [spawnFirefly]);

    return (
        <div ref={containerRef} className={styles.container}>
            {/* Base Ambient Orbs (Fixed) */}
            <div className={styles.interactiveWrapper}>
                <div className={styles.orb1} />
            </div>
            <div className={styles.interactiveWrapperReverse}>
                <div className={styles.orb2} />
            </div>

            {/* Spawned Fireflies */}
            {fireflies.map(fly => (
                <div
                    key={fly.id}
                    className={styles.firefly}
                    style={{
                        top: `${fly.top}%`,
                        left: `${fly.left}%`,
                        width: fly.size,
                        height: fly.size,
                        '--hue': `${fly.hue}`,
                        animationDelay: fly.delay,
                        opacity: 0, // Ensure hidden before animation starts
                    } as React.CSSProperties}
                />
            ))}

            <div className={styles.noise} />
        </div>
    );
}
