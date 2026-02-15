"use client";

import GhostGradient from '../components/GhostGradient';
import styles from './resume.module.css';

export default function Resume() {
    return (
        <main className={styles.main}>
            <GhostGradient />
            <header className={styles.header}>
                <span className={styles.headerName}>Isaac Aurelio Felix</span>
                <div className={styles.contact}>
                    <span>New York, NY</span>
                    <span className={styles.separator}>•</span>
                    {/* Obfuscated Contact Info: Reversed in HTML, corrected via CSS */}
                    <span className={styles.obfuscated}>xilefcaasi/ni/moc.nideknil.www</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.obfuscated}>moc.kooltuo@7890xilefcaasi</span>
                </div>
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
                                    <li className={styles.listItem}>Engineered the fine-tuning data strategy to align external models with bank risk frameworks; curated the ground-truth corpus by standardizing historical fraud records, ensuring the vendor's detection logic matched internal protocols.</li>
                                    <li className={styles.listItem}>Led the technical integration of a proprietary third-party AI platform, managing vendor due diligence and establishing precision/recall acceptance gates for production deployment.</li>
                                </ul>
                                <span className={styles.subHeader}>Consumer Portfolio Strategy & Analytics</span>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Engineered the daily bankruptcy ETL workflow using SAS and SQL, processing high-volume daily records to generate real-time "beat/miss" forecasting signals for executive leadership.</li>
                                    <li className={styles.listItem}>Modeled credit degradation curves via cohort analysis to challenge existing reserve assumptions; findings influenced a material strategic adjustment in portfolio risk management.</li>
                                    <li className={styles.listItem}>Validated challenger models by conducting stress-tests and interpretability analysis, translating black-box outputs into actionable risk memos for non-technical stakeholders.</li>
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
                                    <li className={styles.listItem}>Partnered with the City of Charleston to evaluate the viability of expanding the city’s sensor network by engineering geospatial features to model train crossing delay predictability within Charleston’s complex port topography, establishing performance benchmarks that new hardware must exceed to ensure ROI.</li>
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
                                    <li className={styles.listItem}>Consulted the NYC Dept. of Education (the largest US school district) to architect the technical procurement framework for AI adoption across 1,500+ schools.</li>
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
                                    <li className={styles.listItem}>Created the codebook and data schema to structure processed datasets; engineered Python ETL pipelines (Geopandas/QGIS) to normalize geospatial data in preparation for legislative congruence analysis.</li>
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
                                    <li className={styles.listItem}>Trained a multiclass LSTM network using Apache Spark to predict mortgage delinquency; performed feature selection to optimize validation accuracy.</li>
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
                                    <li className={styles.listItem}>Engineered the API integration for a robotic AI tutor; designed and optimized system prompts to map GPT-4 outputs to prompts engineered through interdisciplinary collaboration ensuring pedagogical alignment.</li>
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
                                    <li className={styles.listItem}>Collaborated with engineering teams to optimize radio-control software for 5G cellular radios, ensuring stability within high-throughput network environments.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Leadership Experience</h2>
                <div className={styles.grid}>
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
