"use client";

import GhostGradient from '../components/GhostGradient';
import styles from './resume.module.css';

export default function Resume() {
    return (
        <main className={styles.main}>
            <GhostGradient />
            <header className={styles.header}>
                <h1 className={styles.headerName}>Isaac Aurelio Felix</h1>

                <div className={styles.contact}>
                    <span>New York, NY</span>
                    <span className={styles.separator}>•</span>
                    <a href="https://www.linkedin.com/in/isaacfelix/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        linkedin.com/in/isaacfelix
                    </a>
                    <span className={styles.separator}>•</span>
                    <a href="mailto:isaacfelix0987@outlook.com" className={styles.link}>
                        isaacfelix0987@outlook.com
                    </a>
                </div>

                <a
                    href="/Isaac_Felix_Resume.docx"
                    download="Isaac_Felix_Resume_Product.docx"
                    className={styles.downloadButton}
                    aria-label="Download Resume"
                >
                    Download Resume
                </a>
            </header>

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

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Experience</h2>

                <div className={styles.grid}>
                    {/* Bank of America (Consumer & Financial Crime) */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Feb 2024 — Present</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Quantitative Analyst</h3>
                            <h4 className={styles.company}>Bank of America</h4>
                            <div className={styles.description}>
                                <span className={styles.subHeader}>Financial Crime Detection Models</span>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Led the integration and launch of an AI platform now used by 1,000+ investigators as their primary tool, managing vendor due diligence and defining precision/recall acceptance gates for production deployment.</li>
                                    <li className={styles.listItem}>Defined the performance metrics and monitoring framework for an AI-powered investigation tool that auto-generates entity resolution and risk scores, tracking tool adoption and investigator sentiment post-launch.</li>
                                </ul>
                                <span className={styles.subHeader}>Consumer Portfolio Strategy & Analytics</span>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Analyzed consumer behavior by modeling credit degradation curves via cohort analysis to better predict portfolio performance; findings influenced a material strategic adjustment in risk management.</li>
                                    <li className={styles.listItem}>Built and managed a daily bankruptcy analytics pipeline (SAS, SQL), delivering critical 'beat/miss' signals to directors to drive data-informed portfolio strategy changes.</li>
                                    <li className={styles.listItem}>Validated challenger models by analyzing feature importance and conducting stress-tests, translating technical findings into actionable recommendations for directors on improving loss prediction accuracy.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Mussmann Lab */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Aug 2025 — Present</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Research Assistant</h3>
                            <h4 className={styles.company}>Georgia Institute of Technology (Mussmann Lab)</h4>
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Partnered with the City of Charleston to evaluate sensor network expansion by modeling train crossing delay predictability, establishing performance benchmarks new hardware must exceed.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Paragon Policy */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Sep 2025 — Dec 2025</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>AI Policy Fellow</h3>
                            <h4 className={styles.company}>Paragon Policy</h4>
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Consulted the NYC Dept. of Education to design the technical procurement framework for AI adoption across 1,500+ schools serving 1M+ students.</li>
                                    <li className={styles.listItem}>Defined district-wide security guardrails and data privacy standards, establishing the equitable implementation plans for vendor software.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Friendly Cities Lab */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>May 2025 — Jul 2025</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Research Assistant</h3>
                            <h4 className={styles.company}>Georgia Institute of Technology (Friendly Cities Lab)</h4>
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Created the data schema to structure processed datasets; built Python ETL pipelines (Geopandas) to normalize geospatial data for legislative congruence analysis.</li>
                                    <li className={styles.listItem}>Contributed to the draft research manuscript by conducting a comprehensive literature review on legislative congruence.</li>
                                </ul>
                            </div>
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
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Prototyped a mortgage delinquency risk engine (LSTM on Spark), identifying key consumer risk features to improve early-warning signals for loan defaults.</li>
                                    <li className={styles.listItem}>Preprocessed raw loan-level data to correct irregularities and outlier biases, optimizing data integrity for downstream risk modeling.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* LIT Lab */}
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Aug 2022 — Dec 2023</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Research Assistant</h3>
                            <h4 className={styles.company}>Learning + Interest + Technology Lab</h4>
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Co-developed PATHWiSE (published at HRI '24), an AI authoring tool co-designed with 13 teachers to create custom robot-assisted learning activities using GPT-4.</li>
                                    <li className={styles.listItem}>Iterated on product features based on field tests with educators, directly translating qualitative user feedback into technical engineering specifications.</li>
                                </ul>
                            </div>
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
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Partnered with engineering teams to drive the modernization of 5G radio-control software, reducing technical debt and accelerating system maintainability for legacy infrastructure.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Fellowships & Leadership Experience</h2>
                <div className={styles.grid}>
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Mar 2026 — Present</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>AI Safety Policy Fellow</h3>
                            <h4 className={styles.company}>Georgia Tech AISI</h4>
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Evaluating policy frameworks for the responsible deployment of transformative AI systems, analyzing frontier AI regulation, progress timelines, and national security implications.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>Aug 2023 — Dec 2023</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Mentor</h3>
                            <h4 className={styles.company}>Society of Hispanic Professional Engineers</h4>
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Mentored junior engineering students on academic planning and career development in tech.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Research and Publications</h2>
                <div className={styles.grid}>
                    <div className={styles.row}>
                        <div className={styles.leftCol}>
                            <span className={styles.date}>March 2024</span>
                        </div>
                        <div className={styles.rightCol}>
                            <h3 className={styles.role}>Publication (HRI '24)</h3>
                            <p className={styles.description}>
                                M. A. Rahman, I. A. Felix, U. Shahid, and J. E. Michaelis, "PATHWiSE: An AI-Assisted Teacher Authoring Tool for Creating Custom Robot-Assisted Learning Activities", Companion of the 2024 ACM/IEEE International Conference on Human-Robot Interaction (HRI '24), pp. 88–90, March 2024. DOI: 10.1145/3610978.3641086
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
