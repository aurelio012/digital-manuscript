"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ghost.module.css';

interface Flare {
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
    const [flares, setFlares] = useState<Flare[]>([]);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const energyRef = useRef(0); // 0 to 100
    const hueRef = useRef(0);
    const requestRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const flareIdRef = useRef(0);

    const spawnFlare = useCallback((x: number, y: number) => {
        const id = flareIdRef.current++;
        const newFlare: Flare = {
            id,
            x,
            y,
            scale: 0.8 + Math.random() * 0.8, // 0.8 - 1.6
            hue: Math.floor(Math.random() * 360),
        };

        setFlares(prev => [...prev, newFlare]);

        // Boost energy
        energyRef.current = Math.min(energyRef.current + 20, 100);

        // Auto-remove flare after animation
        setTimeout(() => {
            setFlares(prev => prev.filter(f => f.id !== id));
        }, 1000); // Match CSS duration
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
            spawnFlare(e.clientX, e.clientY);
        };

        window.addEventListener('pointermove', handleMove);
        window.addEventListener('pointerdown', handleDown);

        const animate = () => {
            // Lerp mouse position
            currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
            currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;

            // Decay energy
            energyRef.current = Math.max(energyRef.current - 0.5, 0);

            // Rotate ambient hue based on energy (faster when high energy)
            hueRef.current += 0.1 + (energyRef.current * 0.05);

            if (containerRef.current) {
                containerRef.current.style.setProperty('--mouse-x', currentRef.current.x.toString());
                containerRef.current.style.setProperty('--mouse-y', currentRef.current.y.toString());
                containerRef.current.style.setProperty('--energy-hue', `${hueRef.current}deg`);
                containerRef.current.style.setProperty('--energy-scale', `${1 + (energyRef.current * 0.005)}`); // Mild pulsate
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('pointermove', handleMove);
            window.removeEventListener('pointerdown', handleDown);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [spawnFlare]);

    return (
        <div ref={containerRef} className={styles.container}>
            {/* Ambient Orbs (React to energy) */}
            <div className={styles.interactiveWrapper}>
                <div className={styles.orb1} />
            </div>
            <div className={styles.interactiveWrapperReverse}>
                <div className={styles.orb2} />
            </div>

            {/* Click Flares */}
            {flares.map(flare => (
                <div
                    key={flare.id}
                    className={styles.flare}
                    style={{
                        left: flare.x,
                        top: flare.y,
                        '--flare-hue': `${flare.hue}deg`,
                        '--flare-scale': flare.scale,
                    } as React.CSSProperties}
                />
            ))}

            <div className={styles.noise} />
        </div>
    );
}
