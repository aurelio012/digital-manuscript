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

const MAX_FIREFLIES = 50;

export default function GhostGradient() {
    const [fireflies, setFireflies] = useState<Firefly[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const idRef = useRef(0);

    // Click anywhere: a soft, heavily blurred light blooms somewhere in the field
    const spawnFirefly = useCallback(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const fly: Firefly = {
            id: idRef.current++,
            top: Math.random() * 100,
            left: Math.random() * 100,
            hue: Math.floor(Math.random() * 360), // Full spectrum
            size: `${100 + Math.random() * 150}px`, // 100px - 250px
            delay: `${Math.random() * 0.2 + 0.05}s`, // 0.05s - 0.25s
        };
        setFireflies(prev => [...prev.slice(-(MAX_FIREFLIES - 1)), fly]);
    }, []);

    useEffect(() => {
        window.addEventListener('click', spawnFirefly);
        return () => window.removeEventListener('click', spawnFirefly);
    }, [spawnFirefly]);

    // Pointer parallax for the ambient orbs — fine pointers only, rAF-throttled.
    useEffect(() => {
        const fine = window.matchMedia('(pointer: fine)').matches;
        const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const el = containerRef.current;
        if (!fine || still || !el) return;

        let frame = 0;
        const onMove = (e: PointerEvent) => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                el.style.setProperty('--mouse-x', (e.clientX / window.innerWidth - 0.5).toFixed(3));
                el.style.setProperty('--mouse-y', (e.clientY / window.innerHeight - 0.5).toFixed(3));
            });
        };
        window.addEventListener('pointermove', onMove, { passive: true });
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('pointermove', onMove);
        };
    }, []);

    const retire = (id: number) => setFireflies(prev => prev.filter(f => f.id !== id));

    return (
        <div ref={containerRef} className={styles.container} aria-hidden="true" data-print="hide">
            <div className={styles.parallax}>
                <div className={styles.orb1} />
            </div>
            <div className={styles.parallaxReverse}>
                <div className={styles.orb2} />
            </div>

            <div className={styles.fireflies}>
                {fireflies.map(fly => (
                    <div
                        key={fly.id}
                        className={styles.firefly}
                        onAnimationEnd={() => retire(fly.id)}
                        style={{
                            top: `${fly.top}%`,
                            left: `${fly.left}%`,
                            width: fly.size,
                            height: fly.size,
                            '--hue': `${fly.hue}`,
                            animationDelay: fly.delay,
                        } as React.CSSProperties}
                    />
                ))}
            </div>

            <div className={styles.noise} />
        </div>
    );
}
