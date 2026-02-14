"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ghost.module.css';

interface AtmosphericOrb {
    id: number;
    top: number;
    left: number;
    width: string;
    hue: number;
    duration: string;
    delay: string;
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
    const [extraOrbs, setExtraOrbs] = useState<AtmosphericOrb[]>([]);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const energyRef = useRef(0);
    const hueRef = useRef(0);
    const requestRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const orbIdRef = useRef(0);

    const spawnAtmosphericOrb = useCallback(() => {
        if (extraOrbs.length > 15) return; // Cap population for performance

        const id = orbIdRef.current++;
        const newOrb: AtmosphericOrb = {
            id,
            top: Math.random() * 100,
            left: Math.random() * 100,
            width: `${40 + Math.random() * 20}vh`, // Large and atmospheric
            hue: Math.floor(Math.random() * 60) - 30,
            duration: `${30 + Math.random() * 20}s`,
            delay: `-${Math.random() * 20}s`, // Start mid-animation
        };

        setExtraOrbs(prev => [...prev, newOrb]);
        energyRef.current = Math.min(energyRef.current + 10, 100);
    }, [extraOrbs.length]);

    useEffect(() => {
        const handleMove = (e: PointerEvent) => {
            const { innerWidth, innerHeight } = window;
            targetRef.current = {
                x: (e.clientX / innerWidth) * 2 - 1,
                y: (e.clientY / innerHeight) * 2 - 1
            };
        };

        const handleDown = () => {
            spawnAtmosphericOrb();
        };

        window.addEventListener('pointermove', handleMove);
        window.addEventListener('pointerdown', handleDown);

        const animate = () => {
            // Lerp mouse position
            currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
            currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;

            // Decay energy
            energyRef.current = Math.max(energyRef.current - 0.2, 0);

            // Rotate hue
            hueRef.current += 0.05 + (energyRef.current * 0.03);

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
    }, [spawnAtmosphericOrb]);

    return (
        <div ref={containerRef} className={styles.container}>
            {/* Base Ambient Orbs */}
            <div className={styles.interactiveWrapper}>
                <div className={styles.orb1} />
            </div>
            <div className={styles.interactiveWrapperReverse}>
                <div className={styles.orb2} />
            </div>

            {/* Increasing Population of Atmospheric Orbs */}
            {extraOrbs.map(orb => (
                <div
                    key={orb.id}
                    className={styles.atmosphericOrb}
                    style={{
                        top: `${orb.top}%`,
                        left: `${orb.left}%`,
                        width: orb.width,
                        height: orb.width, // pulsing square -> border-radius 50% = circle
                        '--orb-hue': `${orb.hue}deg`,
                        animationDuration: orb.duration,
                        animationDelay: orb.delay,
                    } as React.CSSProperties}
                />
            ))}

            <div className={styles.noise} />
        </div>
    );
}
