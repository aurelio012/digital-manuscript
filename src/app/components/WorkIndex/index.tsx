"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import ProjectPlate, { type PlateVariant } from './ProjectPlate';
import styles from './work.module.css';

interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    description: string;
    contributions: string[];
    publication?: string;
    plate: PlateVariant;
    accent: string;
    caption: string;
}

const projects: Project[] = [
    {
        id: '01',
        title: 'The Charleston Project',
        category: 'Mussmann Lab',
        year: '2025',
        description: "A geospatial study with the City of Charleston exploring whether a network of sensors can reliably predict train crossing delays across the city. The project maps complex topography to model signal propagation and establishes ROI benchmarks for hardware investment.",
        contributions: ["Python", "Geospatial Modeling", "Sensor Data", "City Partnership"],
        plate: 'charleston',
        accent: '#E7A860',
        caption: 'Terrain, rail, sensors',
    },
    {
        id: '02',
        title: 'Paragon',
        category: 'NYC DOE',
        year: '2025',
        description: "A policy framework guiding the NYC Department of Education's adoption of AI tools across 1,500+ public schools. The work defines technical procurement criteria, security guardrails, data privacy standards, and more for evaluating vendor software at district scale.",
        contributions: ["AI Policy", "City Partnership", "Technical Procurement", "Data Privacy & Security", "EdTech"],
        plate: 'paragon',
        accent: '#6CC6F2',
        caption: '1,500 dots · one per school',
    },
    {
        id: '03',
        title: "Legislative Architecture",
        category: "Friendly Cities Lab",
        year: "2023",
        description: "A computational framework for analyzing alignment between legislative text and urban policy outcomes. Developed natural language processing pipelines to quantify semantic similarity between bill proposals and enacted city ordinances, revealing gaps in political representation.",
        contributions: ["Python ETL", "Geospatial Analysis", "Data Schema Design", "Policy Analysis"],
        plate: 'legislative',
        accent: '#9496F2',
        caption: 'Bills → ordinances',
    },
    {
        id: '04',
        title: 'PATHWiSE',
        category: 'LIT Lab',
        year: '2023',
        description: "An AI-powered robotic tutoring platform that translates GPT-4 outputs into pedagogical interactions. The system pairs carefully designed prompts with a physical robot, validated through longitudinal classroom field tests with K-5 students.",
        contributions: ["Product Development", "GPT-4 API", "Prompt Engineering", "HRI", "Field Testing"],
        publication: 'M. A. Rahman, I. A. Felix, et al., "PATHWiSE: An AI-Assisted Teacher Authoring Tool for Robot-Based Classroom Activities" (HRI \'24)',
        plate: 'pathwise',
        accent: '#B592F6',
        caption: 'Prompt → robot → classroom',
    },
];

// Floating previews only make sense with a hover-capable, precise pointer
const PREVIEW_QUERY = '(hover: hover) and (pointer: fine)';
const subscribePreview = (onChange: () => void) => {
    const mq = window.matchMedia(PREVIEW_QUERY);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
};

export default function WorkIndex() {
    const [openId, setOpenId] = useState<string | null>(null);
    const [hoverId, setHoverId] = useState<string | null>(null);
    const previewRef = useRef<HTMLDivElement>(null);
    const pointer = useRef({ x: 0, y: 0 });
    const canPreview = useSyncExternalStore(
        subscribePreview,
        () => window.matchMedia(PREVIEW_QUERY).matches,
        () => false,
    );

    useEffect(() => {
        const onMove = (e: PointerEvent) => {
            pointer.current.x = e.clientX;
            pointer.current.y = e.clientY;
        };
        window.addEventListener('pointermove', onMove, { passive: true });
        return () => window.removeEventListener('pointermove', onMove);
    }, []);

    const previewing = canPreview && hoverId !== null && hoverId !== openId;

    // While previewing, the plate trails the pointer and flips to stay on screen
    useEffect(() => {
        const el = previewRef.current;
        if (!el || !previewing) return;
        const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const pos = { ...pointer.current };
        let frame = 0;
        const tick = () => {
            const k = still ? 1 : 0.16;
            pos.x += (pointer.current.x - pos.x) * k;
            pos.y += (pointer.current.y - pos.y) * k;
            const w = el.offsetWidth;
            const h = el.offsetHeight;
            let x = pos.x + 28;
            let y = pos.y - h / 2;
            if (x + w > window.innerWidth - 16) x = pos.x - w - 28;
            y = Math.min(Math.max(y, 80), window.innerHeight - h - 16);
            el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
            frame = requestAnimationFrame(tick);
        };
        tick();
        return () => cancelAnimationFrame(frame);
    }, [previewing]);

    const hovered = projects.find(p => p.id === hoverId);

    return (
        <>
            <ol className={styles.list} onMouseLeave={() => setHoverId(null)}>
                {projects.map((project, i) => {
                    const isOpen = openId === project.id;
                    return (
                        <li
                            key={project.id}
                            className={`${styles.entry} ${isOpen ? styles.open : ''} rise`}
                            style={{ '--d': `${0.35 + i * 0.08}s`, '--accent-project': project.accent } as React.CSSProperties}
                        >
                            <button
                                type="button"
                                className={styles.row}
                                aria-expanded={isOpen}
                                aria-controls={`work-${project.id}`}
                                onMouseEnter={() => setHoverId(project.id)}
                                onClick={() => setOpenId(isOpen ? null : project.id)}
                            >
                                <span className={styles.id}>({project.id})</span>
                                <span className={styles.title}>{project.title}</span>
                                <span className={styles.meta}>
                                    <span>{project.category}</span>
                                    <span className={styles.year}>{project.year}</span>
                                </span>
                                <span className={styles.toggle} aria-hidden="true" />
                            </button>

                            <div id={`work-${project.id}`} className={styles.detail}>
                                <div className={styles.detailInner}>
                                    <div className={styles.detailGrid}>
                                        <figure className={styles.plateFrame}>
                                            <ProjectPlate variant={project.plate} accent={project.accent} className={styles.plate} />
                                            <figcaption className="eyebrow">{project.caption}</figcaption>
                                        </figure>

                                        <div className={styles.detailText}>
                                            <p className={styles.description}>{project.description}</p>

                                            <div className={styles.detailMeta}>
                                                <span className="eyebrow">Contributions</span>
                                                <ul className={styles.tags}>
                                                    {project.contributions.map(item => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {project.publication && (
                                                <div className={styles.detailMeta}>
                                                    <span className="eyebrow">Publication</span>
                                                    <p className={styles.publicationText}>{project.publication}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ol>

            {/* Floating preview — a glimpse of each plate before the row is opened */}
            <div
                ref={previewRef}
                className={`${styles.preview} ${previewing ? styles.previewOn : ''}`}
                aria-hidden="true"
            >
                <div className={styles.previewStack}>
                    {projects.map(project => (
                        <ProjectPlate
                            key={project.id}
                            variant={project.plate}
                            accent={project.accent}
                            decorative
                            className={`${styles.previewPlate} ${hovered?.id === project.id ? styles.previewPlateOn : ''}`}
                        />
                    ))}
                </div>
                <span className={`eyebrow ${styles.previewCaption}`}>
                    {hovered?.caption}
                </span>
            </div>
        </>
    );
}
