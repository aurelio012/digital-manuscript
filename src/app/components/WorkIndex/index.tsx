"use client";

import { useState, memo } from 'react';
import styles from './work.module.css';

interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    link: string;
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
        link: '#',
        description: "A geospatial study with the City of Charleston exploring whether a network of sensors can reliably predict train crossing delays across the city. The project maps complex topography to model signal propagation and establishes ROI benchmarks for hardware investment.",
        contributions: ["Python", "Geospatial Modeling", "Sensor Data", "City Partnership"]
    },
    {
        id: '02',
        title: 'Paragon',
        category: 'NYC DOE',
        year: '2025',
        link: '#',
        description: "A policy framework guiding the NYC Department of Education's adoption of AI tools across 1,500+ public schools. The work defines technical procurement criteria, security guardrails, data privacy standards, and more for evaluating vendor software at district scale.",
        contributions: ["AI Policy", "Risk Assessment", "Stakeholder Communication", "EdTech"]
    },
    {
        id: '03',
        title: 'Legislative Congruence Architecture',
        category: 'Research',
        year: '2025',
        link: '#',
        description: "A research methodology for measuring alignment between municipal legislation and community-level outcomes. Combines formal codebook development with Python ETL pipelines that normalize heterogeneous geospatial datasets for quantitative policy analysis.",
        contributions: ["Python", "Geopandas", "QGIS", "ETL Design", "Policy Analysis"]
    },
    {
        id: '04',
        title: 'PATHWiSE',
        category: 'EdTech / AI',
        year: '2023',
        link: '#',
        description: "An AI-powered robotic tutoring platform that translates GPT-4 outputs into pedagogical interactions. The system pairs carefully designed prompts with a physical robot, validated through longitudinal classroom field tests with K-5 students.",
        contributions: ["GPT-4 API", "Prompt Engineering", "HRI", "Field Testing"],
        publication: 'M. A. Rahman, I. A. Felix, et al., "PATHWiSE: An AI-Assisted Teacher Authoring Tool for Robot-Based Classroom Activities" (HRI \'24)'
    },
];

interface ProjectItemProps {
    project: Project;
    isActive: boolean;
    isExpanded: boolean;
    onMouseEnter: () => void;
    onClick: (e: React.MouseEvent) => void;
}

const ProjectItem = memo(({ project, isActive, isExpanded, onMouseEnter, onClick }: ProjectItemProps) => {
    return (
        <div className={`${styles.itemWrapper} ${isActive ? styles.activeWrapper : ''}`}>
            <a
                href={project.link}
                className={`${styles.item} ${isActive ? styles.activeItem : ''}`}
                onMouseEnter={onMouseEnter}
                onClick={onClick}
            >
                <span className={styles.id}>({project.id})</span>
                <span className={styles.title}>{project.title}</span>
                <span className={styles.category}>{project.category}</span>
                <span className={styles.year}>{project.year}</span>
            </a>

            {/* Mobile Accordion Content */}
            <div className={`${styles.mobileDetails} ${isExpanded ? styles.expanded : ''}`}>
                <div className={styles.mobileInner}>
                    <p className={styles.mobileDesc}>{project.description}</p>
                    <div className={styles.mobileTags}>
                        {project.contributions.map((tag: string) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

ProjectItem.displayName = 'ProjectItem';

export default function WorkIndex() {
    const [activeProject, setActiveProject] = useState<Project>(projects[0]);
    const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

    return (
        <section id="work" className={styles.container}>
            <div className={styles.header}>
                <h2>Selected Works</h2>
                <span className={styles.meta}>INDEX / 2022—2025</span>
            </div>

            <div className={styles.list}>
                {projects.map((project: Project) => (
                    <ProjectItem
                        key={project.id}
                        project={project}
                        isActive={activeProject.id === project.id}
                        isExpanded={expandedProjectId === project.id}
                        onMouseEnter={() => setActiveProject(project)}
                        onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            setExpandedProjectId(expandedProjectId === project.id ? null : project.id);
                            setActiveProject(project);
                        }}
                    />
                ))}
            </div>

            {/* Desktop Sticky Details Panel */}
            <div className={styles.detailsPanel}>
                <div className={styles.detailsContent} key={activeProject.id}>
                    <h3 className={styles.detailTitle}>{activeProject.title}</h3>
                    <p className={styles.detailDesc}>{activeProject.description}</p>

                    <div className={styles.detailMeta}>
                        <span className={styles.metaLabel}>Contributions</span>
                        <ul className={styles.contributionList}>
                            {activeProject.contributions.map((item: string, i: number) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Publication Highlight if available */}
                    {activeProject.publication && (
                        <div className={styles.detailMeta}>
                            <span className={styles.metaLabel}>Publication</span>
                            <p className={styles.publicationText}>{activeProject.publication}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
