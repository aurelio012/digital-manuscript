"use client";

import GhostGradient from '../components/GhostGradient';
import Navigation from '../components/Navigation';
import styles from './resume.module.css';

const experience = [
    {
        role: "Quantitative Analyst",
        company: "Bank of America",
        period: "Feb 2024 — Present",
        description: "Financial Crime Detection — Engineered fine-tuning data strategies to align external models with bank risk frameworks. Led technical integration of proprietary third-party AI platforms for transaction monitoring.\n\nConsumer Portfolio Strategy — Built daily bankruptcy ETL workflows powering executive forecasting dashboards. Developed automated pipelines for consumer credit risk modeling."
    },
    {
        role: "Research Assistant",
        company: "Mussmann Lab — Georgia Tech",
        period: "Aug 2025 — Present",
        description: "Partnered with the City of Charleston to evaluate sensor network viability for predicting train crossing delays. Engineered geospatial feature pipelines across complex port topography."
    },
    {
        role: "AI Policy Fellow",
        company: "Paragon Fellowship — NYC DOE",
        period: "Sep 2025 — Dec 2025",
        description: "Consulted the NYC Department of Education on responsible AI adoption frameworks for 1,500+ public schools. Defined district-wide security guardrails and data privacy standards."
    },
    {
        role: "Research Assistant",
        company: "Friendly Cities Lab — Georgia Tech",
        period: "May 2025 — Jul 2025",
        description: "Developed data pipelines and codebooks for legislative congruence analysis. Normalized heterogeneous geospatial datasets using Geopandas and QGIS."
    },
    {
        role: "Quantitative Analyst Intern",
        company: "Bank of America",
        period: "Jun 2023 — Aug 2023",
        description: "Trained multiclass LSTM network using Apache Spark to predict mortgage delinquency. Preprocessed raw loan-level data to correct irregularities."
    },
    {
        role: "Research Assistant",
        company: "LIT Lab — UIC",
        period: "Aug 2022 — Dec 2023",
        description: "Built the API backbone for PATHWiSE, an AI-powered robotic tutor. Designed system prompts mapping GPT-4 outputs to pedagogically aligned goals through classroom field tests."
    },
    {
        role: "Mobile Networks Co-op",
        company: "Nokia",
        period: "Sep 2022 — Dec 2022",
        description: "Optimized radio-control software for 5G cellular radios, ensuring stability within high-throughput network environments."
    }
];

const skills = [
    "Python", "Apache Spark", "SQL", "TensorFlow", "PyTorch",
    "Geopandas", "QGIS", "NLP / LLMs", "Prompt Engineering",
    "React / Next.js", "TypeScript", "ETL Pipelines",
    "Data Visualization", "Geospatial Analysis"
];

export default function Resume() {
    return (
        <main className={styles.main}>
            <GhostGradient />

            <div className={styles.contentWrapper}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Resume</h1>
                    <div className={styles.divider} aria-hidden="true" />
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.itemHeader}>
                                <h3 className={styles.role}>Georgia Institute of Technology</h3>
                                <span className={styles.company}>M.S. Computer Science</span>
                            </div>
                            <div className={styles.period}>Jan 2025 — Dec 2026</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemHeader}>
                                <h3 className={styles.role}>University of Illinois at Chicago</h3>
                                <span className={styles.company}>B.S. Computer Science &amp; Linguistics</span>
                            </div>
                            <div className={styles.period}>Jan 2022 — Dec 2023</div>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Experience</h2>
                    <div className={styles.list}>
                        {experience.map((job, index) => (
                            <div key={index} className={styles.item}>
                                <div className={styles.itemHeader}>
                                    <h3 className={styles.role}>{job.role}</h3>
                                    <span className={styles.company}>{job.company}</span>
                                </div>
                                <div className={styles.period}>{job.period}</div>
                                {job.description.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className={styles.description}>{paragraph}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Research &amp; Publications</h2>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <p className={styles.publication}>
                                M. A. Rahman, <strong>I. A. Felix</strong>, U. Shahid, and J. E. Michaelis, &ldquo;PATHWiSE: An AI-Assisted Teacher Authoring Tool for Creating Custom Robot-Assisted Learning Activities&rdquo;, <em>Companion of the 2024 ACM/IEEE International Conference on Human-Robot Interaction (HRI &apos;24)</em>, pp. 88&ndash;90, March 2024.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Skills</h2>
                    <div className={styles.skillsList}>
                        {skills.map((skill) => (
                            <span key={skill}>{skill}</span>
                        ))}
                    </div>
                </section>

                <div className={styles.navContainer}>
                    <Navigation />
                </div>
            </div>
        </main>
    );
}
