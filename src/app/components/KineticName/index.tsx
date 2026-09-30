"use client";

import { useEffect, useRef } from 'react';
import styles from './kinetic.module.css';

// Newsreader's weight axis runs 200–800. At rest the name sits at BASE;
// letters inside the lamp's radius swell toward PEAK.
const BASE = 380;
const PEAK = 640;
const RADIUS = 280;

/**
 * The name as a field of letters lit by a lamp that follows the pointer.
 * Nearby letters gain weight and warmth; the rest stay in shadow.
 * Touch devices and reduced-motion users get the still, resting name.
 */
export default function KineticName({ text, id }: { text: string; id?: string }) {
    const nameRef = useRef<HTMLHeadingElement>(null);
    const lampRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const name = nameRef.current;
        const lamp = lampRef.current;
        if (!name || !lamp) return;
        const pointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!pointer || still) return;

        const letters = Array.from(name.querySelectorAll<HTMLSpanElement>('[data-letter]'));
        let centers: { x: number; y: number }[] = [];
        const measure = () => {
            centers = letters.map(l => {
                const r = l.getBoundingClientRect();
                return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
            });
        };

        const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const pos = { ...target };
        let glow = 0;
        let glowTarget = 0;
        let frame = 0;
        let running = false;

        const tick = () => {
            pos.x += (target.x - pos.x) * 0.1;
            pos.y += (target.y - pos.y) * 0.1;
            glow += (glowTarget - glow) * 0.06;

            lamp.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
            lamp.style.opacity = glow.toFixed(3);

            letters.forEach((letter, i) => {
                const c = centers[i];
                if (!c) return;
                const t = Math.max(0, 1 - Math.hypot(c.x - pos.x, c.y - pos.y) / RADIUS);
                const lit = t * t * (3 - 2 * t) * glow; // smoothstep falloff
                letter.style.fontWeight = String(Math.round(BASE + (PEAK - BASE) * lit));
                letter.style.setProperty('--lit', lit.toFixed(3));
            });

            const settled =
                Math.abs(target.x - pos.x) < 0.2 &&
                Math.abs(target.y - pos.y) < 0.2 &&
                Math.abs(glowTarget - glow) < 0.002;
            if (settled) {
                running = false;
                return;
            }
            frame = requestAnimationFrame(tick);
        };
        const wake = () => {
            if (running) return;
            running = true;
            frame = requestAnimationFrame(tick);
        };

        const onMove = (e: PointerEvent) => {
            target.x = e.clientX;
            target.y = e.clientY;
            glowTarget = 1;
            wake();
        };
        const onLeave = () => {
            glowTarget = 0;
            wake();
        };

        // Measure once the entrance has settled and the webfont is in
        const introDone = window.setTimeout(measure, 1800);
        document.fonts?.ready.then(measure);
        window.addEventListener('resize', measure);
        window.addEventListener('pointermove', onMove, { passive: true });
        document.documentElement.addEventListener('pointerleave', onLeave);

        return () => {
            cancelAnimationFrame(frame);
            window.clearTimeout(introDone);
            window.removeEventListener('resize', measure);
            window.removeEventListener('pointermove', onMove);
            document.documentElement.removeEventListener('pointerleave', onLeave);
        };
    }, []);

    const words = text.split(' ');
    // Running letter index across words, for the staggered entrance
    const offsets = words.map((_, w) => words.slice(0, w).join('').length);

    return (
        <>
            <div ref={lampRef} className={styles.lamp} aria-hidden="true" />
            <h1 ref={nameRef} id={id} className={styles.name}>
                <span className="visually-hidden">{text}</span>
                <span className={styles.mask} aria-hidden="true">
                    {words.map((word, w) => (
                        <span key={w} className={styles.word}>
                            {Array.from(word).map((ch, c) => (
                                <span
                                    key={c}
                                    data-letter=""
                                    className={styles.letter}
                                    style={{ '--i': offsets[w] + c } as React.CSSProperties}
                                >
                                    {ch}
                                </span>
                            ))}
                        </span>
                    ))}
                </span>
            </h1>
        </>
    );
}
