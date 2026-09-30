"use client";

import { useState } from 'react';
import styles from './work.module.css';

interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    description: string;
    contributions: string[];
    publication?: string;
}

const projects: Project[] = [
    {
        id: '01',
        title: 'The Charleston Project',
        category: 'Mussmann Lab',
        year: '2025',
        description: "A geospatial study with the City of Charleston exploring whether a network of sensors can reliably predict train crossing delays across the city. The project maps complex topography to model signal propagation and establishes ROI benchmarks for hardware investment.",
        contributions: ["Python", "Geospatial Modeling", "Sensor Data", "City Partnership"]
    },
    {
        id: '02',
        title: 'Paragon',
        category: 'NYC DOE',
        year: '2025',
        description: "A policy framework guiding the NYC Department of Education's adoption of AI tools across 1,500+ public schools. The work defines technical procurement criteria, security guardrails, data privacy standards, and more for evaluating vendor software at district scale.",
        contributions: ["AI Policy", "City Partnership", "Technical Procurement", "Data Privacy & Security", "EdTech"]
    },
    {
        id: '03',
        title: "Legislative Architecture",
        category: "Friendly Cities Lab",
        year: "2023",
        description: "A computational framework for analyzing alignment between legislative text and urban policy outcomes. Developed natural language processing pipelines to quantify semantic similarity between bill proposals and enacted city ordinances, revealing gaps in political representation.",
        contributions: ["Python ETL", "Geospatial Analysis", "Data Schema Design", "Policy Analysis"]
    },
    {
        id: '04',
        title: 'PATHWiSE',
        category: 'LIT Lab',
        year: '2023',
        description: "An AI-powered robotic tutoring platform that translates GPT-4 outputs into pedagogical interactions. The system pairs carefully designed prompts with a physical robot, validated through longitudinal classroom field tests with K-5 students.",
        contributions: ["Product Development", "GPT-4 API", "Prompt Engineering", "HRI", "Field Testing"],
        publication: 'M. A. Rahman, I. A. Felix, et al., "PATHWiSE: An AI-Assisted Teacher Authoring Tool for Robot-Based Classroom Activities" (HRI \'24)'
    },
];

function Details({ project }: { project: Project }) {
    return (
        <>
            <p className={styles.detailDesc}>{project.description}</p>

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
        </>
    );
}

export default function WorkIndex() {
    const [active, setActive] = useState<Project>(projects[0]);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section className={styles.container} aria-labelledby="work-title">
            <header className={styles.header}>
                <h1 id="work-title" className={styles.title}>Selected Works</h1>
                <span className="eyebrow">Index / 2022—2025</span>
            </header>

            <ol className={styles.list}>
                {projects.map(project => {
                    const isActive = active.id === project.id;
                    const isExpanded = expandedId === project.id;
                    return (
                        <li
                            key={project.id}
                            className={`${styles.entry} ${isActive ? styles.activeEntry : ''}`}
                        >
                            <button
                                type="button"
                                className={styles.row}
                                aria-expanded={isExpanded}
                                aria-controls={`work-${project.id}`}
                                onMouseEnter={() => setActive(project)}
                                onFocus={() => setActive(project)}
                                onClick={() => {
                                    setActive(project);
                                    setExpandedId(isExpanded ? null : project.id);
                                }}
                            >
                                <span className={styles.id}>({project.id})</span>
                                <span className={styles.name}>
                                    <span className={styles.projectTitle}>{project.title}</span>
                                    <span className={styles.category}>{project.category}</span>
                                </span>
                                <span className={styles.year}>{project.year}</span>
                            </button>

                            {/* Inline details — the accordion on narrow screens */}
                            <div
                                id={`work-${project.id}`}
                                className={`${styles.inline} ${isExpanded ? styles.expanded : ''}`}
                            >
                                <div className={styles.inlineInner}>
                                    <Details project={project} />
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ol>

            {/* Wide screens: the details sit beside the index */}
            <div className={styles.panel} aria-live="polite">
                <div className={styles.panelContent} key={active.id}>
                    <span className="eyebrow">
                        {active.category}<span className={styles.dot} aria-hidden="true">·</span>{active.year}
                    </span>
                    <Details project={active} />
                </div>
            </div>
        </section>
    );
}
