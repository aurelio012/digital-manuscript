"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ghost.module.css';

interface Firefly {
    id: number;
    x: number;
    y: number;
    hue: number;
    size: number;
}

// Curated hues drawn from the ambient field (indigo, violet, sky, amber).
// Rose is deliberately absent — it belongs to the tribute.
const HUES = [236, 258, 200, 38];
const MAX_FIREFLIES = 24;

export default function GhostGradient() {
    const [fireflies, setFireflies] = useState<Firefly[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const idRef = useRef(0);

    // Click anywhere: a soft light blooms where you touched the page.
    const spawnFirefly = useCallback((e: MouseEvent) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const jitter = () => (Math.random() - 0.5) * 40;
        const base = HUES[Math.floor(Math.random() * HUES.length)];
        const fly: Firefly = {
            id: idRef.current++,
            x: e.clientX + jitter(),
            y: e.clientY + jitter(),
            hue: base + (Math.random() - 0.5) * 24,
            size: 150 + Math.random() * 140,
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

            {fireflies.map(fly => (
                <div
                    key={fly.id}
                    className={styles.firefly}
                    onAnimationEnd={() => retire(fly.id)}
                    style={{
                        left: fly.x,
                        top: fly.y,
                        width: fly.size,
                        height: fly.size,
                        '--hue': fly.hue.toFixed(0),
                    } as React.CSSProperties}
                />
            ))}

            <div className={styles.noise} />
        </div>
    );
}
