"use client";

import { useState } from 'react';
import styles from './work.module.css';

const projects = [
    {
        id: '01',
        title: 'Charleston Project',
        category: 'Mussmann Lab',
        year: '2025',
        link: '#',
        description: "Partnered with the City of Charleston to evaluate sensor network viability for predicting train crossing delays. Built geospatial feature pipelines across complex port topography to benchmark hardware performance.",
        contributions: ["Python", "Geospatial Modeling", "Sensor Data", "City Partnership"]
    },
    {
        id: '02',
        title: 'Paragon Fellowship',
        category: 'NYC DOE',
        year: '2025',
        link: '#',
        description: "Consulted the NYC Department of Education on responsible AI adoption across 1,500+ public schools. Defined technical procurement criteria, security guardrails, and data privacy standards for district-wide deployment.",
        contributions: ["AI Policy", "Risk Assessment", "Stakeholder Communication", "EdTech"]
    },
    {
        id: '03',
        title: 'Friendly Cities',
        category: 'Research',
        year: '2025',
        link: '#',
        description: "Developed data pipelines and codebooks for analyzing legislative congruence between municipal policy and community needs. Normalized heterogeneous geospatial datasets using Geopandas and QGIS.",
        contributions: ["Python", "Geopandas", "QGIS", "ETL Design", "Policy Analysis"]
    },
    {
        id: '04',
        title: 'LIT Lab',
        category: 'EdTech / AI',
        year: '2023',
        link: '#',
        description: "Built the API backbone for PATHWiSE, an AI-powered robotic tutor. Designed system prompts mapping GPT-4 outputs to age-appropriate pedagogical goals through classroom field tests.",
        contributions: ["GPT-4 API", "Prompt Engineering", "HRI", "Field Testing"],
        publication: 'M. A. Rahman, I. A. Felix, et al., "PATHWiSE: An AI-Assisted Teacher Authoring Tool..." (HRI \'24)'
    },
];

export default function WorkIndex() {
    const [activeProject, setActiveProject] = useState(projects[0]);
    const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

    const handleMouseEnter = (project: typeof projects[0]) => {
        setActiveProject(project);
    };

    const handleMobileClick = (e: React.MouseEvent, projectId: string) => {
        e.preventDefault();
        setExpandedProjectId(expandedProjectId === projectId ? null : projectId);
        const proj = projects.find(p => p.id === projectId);
        if (proj) setActiveProject(proj);
    };

    return (
        <section id="work" className={styles.container}>
            <div className={styles.header}>
                <h2>Selected Works</h2>
                <span className={styles.meta}>INDEX / 2022—2025</span>
            </div>

            <div className={styles.list}>
                {projects.map((project) => {
                    const isExpanded = expandedProjectId === project.id;
                    const isActive = activeProject.id === project.id;

                    return (
                        <div key={project.id} className={`${styles.itemWrapper} ${isActive ? styles.activeWrapper : ''}`}>
                            <a
                                href={project.link}
                                className={`${styles.item} ${isActive ? styles.activeItem : ''}`}
                                onMouseEnter={() => handleMouseEnter(project)}
                                onClick={(e) => handleMobileClick(e, project.id)}
                            >
                                <span className={styles.id}>({project.id})</span>
                                <span className={styles.title}>{project.title}</span>
                                <span className={styles.category}>{project.category}</span>
                                <span className={styles.year}>{project.year}</span>
                            </a>

                            {/* Mobile Accordion Content */}
                            <div className={`${styles.mobileDetails} ${isExpanded ? styles.expanded : ''}`}>
                                <p className={styles.mobileDesc}>{project.description}</p>
                                <div className={styles.mobileTags}>
                                    {project.contributions.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Desktop Sticky Details Panel */}
            <div className={styles.detailsPanel}>
                <div className={styles.detailsContent} key={activeProject.id}>
                    <h3 className={styles.detailTitle}>{activeProject.title}</h3>
                    <p className={styles.detailDesc}>{activeProject.description}</p>

                    <div className={styles.detailMeta}>
                        <span className={styles.metaLabel}>Contributions</span>
                        <ul className={styles.contributionList}>
                            {activeProject.contributions.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Publication Highlight if available */}
                    {(activeProject as any).publication && (
                        <div className={styles.detailMeta}>
                            <span className={styles.metaLabel}>Publication</span>
                            <p className={styles.publicationText}>{(activeProject as any).publication}</p>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
