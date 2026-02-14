"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ghost.module.css';

interface TransientOrb {
    id: number;
    x: number;
    y: number;
    scale: number;
    hue: number;
}

export default function GhostGradient() {
    return <InteractiveWrapper />;
}

function InteractiveWrapper() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);
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
    const [transientOrbs, setTransientOrbs] = useState<TransientOrb[]>([]);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const energyRef = useRef(0); // 0 to 100
    const hueRef = useRef(0);
    const requestRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const orbIdRef = useRef(0);

    const spawnTransientOrb = useCallback((x: number, y: number) => {
        const id = orbIdRef.current++;
        // Create a large, soft aura similar to the background ones
        const newOrb: TransientOrb = {
            id,
            x,
            y,
            scale: 0.8 + Math.random() * 0.5,
            hue: Math.floor(Math.random() * 60) - 30, // Subtle hue shift relative to base
        };

        setTransientOrbs(prev => [...prev, newOrb]);

        // Boost energy for global color speed
        energyRef.current = Math.min(energyRef.current + 15, 100);

        // Slow fade out
        setTimeout(() => {
            setTransientOrbs(prev => prev.filter(o => o.id !== id));
        }, 2000); // 2s duration for atmospheric feel
    }, []);

    useEffect(() => {
        const handleMove = (e: PointerEvent) => {
            const { innerWidth, innerHeight } = window;
            targetRef.current = {
                x: (e.clientX / innerWidth) * 2 - 1,
                y: (e.clientY / innerHeight) * 2 - 1
            };
        };

        const handleDown = (e: PointerEvent) => {
            spawnTransientOrb(e.clientX, e.clientY);
        };

        window.addEventListener('pointermove', handleMove);
        window.addEventListener('pointerdown', handleDown);

        const animate = () => {
            // Lerp mouse position
            currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
            currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;

            // Decay energy
            energyRef.current = Math.max(energyRef.current - 0.5, 0);

            // Rotate hue
            hueRef.current += 0.1 + (energyRef.current * 0.05);

            if (containerRef.current) {
                containerRef.current.style.setProperty('--mouse-x', currentRef.current.x.toString());
                containerRef.current.style.setProperty('--mouse-y', currentRef.current.y.toString());
                containerRef.current.style.setProperty('--energy-hue', `${hueRef.current}deg`);
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('pointermove', handleMove);
            window.removeEventListener('pointerdown', handleDown);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [spawnTransientOrb]);

    return (
        <div ref={containerRef} className={styles.container}>
            {/* Base Ambient Orbs */}
            <div className={styles.interactiveWrapper}>
                <div className={styles.orb1} />
            </div>
            <div className={styles.interactiveWrapperReverse}>
                <div className={styles.orb2} />
            </div>

            {/* Transient Orbs (Dynamic Aura Accumulation) */}
            {transientOrbs.map(orb => (
                <div
                    key={orb.id}
                    className={styles.transientOrb}
                    style={{
                        left: orb.x,
                        top: orb.y,
                        '--orb-hue': `${orb.hue}deg`,
                        '--orb-scale': orb.scale,
                    } as React.CSSProperties}
                />
            ))}

            <div className={styles.noise} />
        </div>
    );
}
