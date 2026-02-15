"use client";

import GhostGradient from '../components/GhostGradient';
import styles from './resume.module.css';

export default function Resume() {
    return (
        <main className={styles.main}>
            <GhostGradient />
            <header className={styles.header}>
                <div className={styles.contact}>
                    <span className={styles.headerName}>Isaac Aurelio Felix</span>
                    <span className={styles.separator}>•</span>
                    <span>New York, NY</span>
                    <span className={styles.separator}>•</span>
                    {/* Obfuscated Contact Info: Reversed in HTML, corrected via CSS */}
                    <span className={styles.obfuscated}>xilefcaasi/ni/moc.nideknil.www</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.obfuscated}>moc.kooltuo@7890xilefcaasi</span>
                </div>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Experience</h2>

                <div className={styles.grid}>
                    {/* Bank of America */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Feb 2024 — Present</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Quantitative Analyst</h3>
                            <h4 className={styles.company}>Bank of America</h4>
                            <p className={styles.description}>
                                <strong>Financial Crime Detection Models:</strong> Engineered fine-tuning data strategy to align external models with bank risk frameworks. Curated ground-truth corpus by standardizing historical fraud records. Led technical integration of proprietary third-party AI platform, managing due diligence and precision/recall acceptance gates.
                            </p>
                            <p className={styles.description}>
                                <strong>Consumer Portfolio Strategy:</strong> Engineered daily bankruptcy ETL workflows (SAS/SQL) for real-time forecasting. Modeled credit degradation curves via cohort analysis, influencing strategic risk management adjustments. Validated challenger models via stress-testing and interpretability analysis.
                            </p>
                        </div>
                    </div>

                    {/* Paragon Policy */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Sep 2025 — Dec 2025</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>AI Policy Fellow</h3>
                            <h4 className={styles.company}>Paragon</h4>
                            <p className={styles.description}>
                                Advised the NYC Department of Education to architect technical procurement frameworks for AI adoption across 1,500+ schools. Defined district-wide security guardrails and data privacy standards for vendor software implementation.
                            </p>
                        </div>
                    </div>

                    {/* Bank of America Intern */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Jun 2023 — Aug 2023</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Quantitative Analyst Intern</h3>
                            <h4 className={styles.company}>Bank of America</h4>
                            <p className={styles.description}>
                                Trained multiclass LSTM network using Apache Spark to predict mortgage delinquency. Preprocessed raw loan-level data to correct irregularities and optimize data integrity for downstream risk modeling.
                            </p>
                        </div>
                    </div>

                    {/* Nokia */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Sep 2022 — Dec 2022</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Mobile Networks Co-op</h3>
                            <h4 className={styles.company}>Nokia</h4>
                            <p className={styles.description}>
                                Collaborated with engineering teams to optimize radio-control software for 5G cellular radios, ensuring stability within high-throughput network environments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Research</h2>

                <div className={styles.grid}>
                    {/* Mussmann Lab */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Aug 2025 — Present</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Research Assistant</h3>
                            <h4 className={styles.company}>Georgia Tech (Mussmann Lab)</h4>
                            <p className={styles.description}>
                                Spearheaded analysis for the City of Charleston to model train crossing delay predictability. Engineered geospatial features to analyze complex port topography and established performance benchmarks for new sensor hardware ROI.
                            </p>
                        </div>
                    </div>

                    {/* Friendly Cities Lab */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>May 2025 — Jul 2025</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Research Assistant</h3>
                            <h4 className={styles.company}>Friendly Cities Lab</h4>
                            <p className={styles.description}>
                                Created codebook and data schema for legislative congruence analysis. Engineered Python ETL pipelines (Geopandas/QGIS) to normalize geospatial data. Contributed to draft research manuscript via comprehensive literature review.
                            </p>
                        </div>
                    </div>

                    {/* LIT Lab */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Aug 2022 — Dec 2023</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Research Assistant</h3>
                            <h4 className={styles.company}>Georgia Tech (LIT Lab)</h4>
                            <p className={styles.description}>
                                Engineered API integration for robotic AI tutor. Designed system prompts to map GPT-4 outputs to pedagogical goals. Iterated on features based on field tests with educators.
                            </p>
                        </div>
                    </div>

                    {/* Publication */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>March 2024</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Publication (HRI '24)</h3>
                            <h4 className={styles.company}>"PATHWiSE: An AI-Assisted Teacher Authoring Tool..."</h4>
                            <p className={styles.description}>
                                M. A. Rahman, I. A. Felix, et al. Companion of the 2024 ACM/IEEE International Conference on Human-Robot Interaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Leadership</h2>
                <div className={styles.grid}>
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Aug 2023 — Dec 2023</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Mentor</h3>
                            <h4 className={styles.company}>Society of Hispanic Professional Engineers</h4>
                            <p className={styles.description}>
                                Mentored junior engineering students on academic planning and career development in tech.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Education</h2>
                <div className={styles.grid}>
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Jan 2025 — Dec 2026</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>M.S. Computer Science</h3>
                            <h4 className={styles.company}>Georgia Institute of Technology</h4>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Jan 2022 — Dec 2023</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>B.S. Computer Science & Linguistics</h3>
                            <h4 className={styles.company}>University of Illinois at Chicago</h4>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
