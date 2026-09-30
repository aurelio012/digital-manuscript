import type { Metadata } from 'next';
import RunningHead from '../components/RunningHead';
import styles from './resume.module.css';

export const metadata: Metadata = {
    title: 'Resume',
};

interface Entry {
    date: string;
    role: string;
    org: string;
    groups?: { heading?: string; points: string[] }[];
}

const education: Entry[] = [
    {
        date: 'Jan 2025 — Dec 2026',
        role: 'M.S. Computer Science',
        org: 'Georgia Institute of Technology',
    },
    {
        date: 'Jan 2022 — Dec 2023',
        role: 'B.S. Computer Science & Linguistics',
        org: 'University of Illinois at Chicago',
    },
];

const experience: Entry[] = [
    {
        date: 'Feb 2024 — Present',
        role: 'Quantitative Analyst',
        org: 'Bank of America',
        groups: [
            {
                heading: 'Financial Crime Detection Models',
                points: [
                    'Led the integration and launch of an AI platform now used by 1,000+ investigators as their primary tool, managing vendor due diligence and defining precision/recall acceptance gates for production deployment.',
                    'Defined the performance metrics and monitoring framework for an AI-powered investigation tool that auto-generates entity resolution and risk scores, tracking tool adoption and investigator sentiment post-launch.',
                ],
            },
            {
                heading: 'Consumer Portfolio Strategy & Analytics',
                points: [
                    'Analyzed consumer behavior by modeling credit degradation curves via cohort analysis to better predict portfolio performance; findings influenced a material strategic adjustment in risk management.',
                    'Built and managed a daily bankruptcy analytics pipeline (SAS, SQL), delivering critical ‘beat/miss’ signals to directors to drive data-informed portfolio strategy changes.',
                    'Validated challenger models by analyzing feature importance and conducting stress-tests, translating technical findings into actionable recommendations for directors on improving loss prediction accuracy.',
                ],
            },
        ],
    },
    {
        date: 'Aug 2025 — Present',
        role: 'Research Assistant',
        org: 'Georgia Institute of Technology (Mussmann Lab)',
        groups: [
            {
                points: [
                    'Partnered with the City of Charleston to evaluate sensor network expansion by modeling train crossing delay predictability, establishing performance benchmarks new hardware must exceed.',
                ],
            },
        ],
    },
    {
        date: 'Sep 2025 — Dec 2025',
        role: 'AI Policy Fellow',
        org: 'Paragon Policy',
        groups: [
            {
                points: [
                    'Consulted the NYC Dept. of Education to design the technical procurement framework for AI adoption across 1,500+ schools serving 1M+ students.',
                    'Defined district-wide security guardrails and data privacy standards, establishing the equitable implementation plans for vendor software.',
                ],
            },
        ],
    },
    {
        date: 'May 2025 — Jul 2025',
        role: 'Research Assistant',
        org: 'Georgia Institute of Technology (Friendly Cities Lab)',
        groups: [
            {
                points: [
                    'Created the data schema to structure processed datasets; built Python ETL pipelines (Geopandas) to normalize geospatial data for legislative congruence analysis.',
                    'Contributed to the draft research manuscript by conducting a comprehensive literature review on legislative congruence.',
                ],
            },
        ],
    },
    {
        date: 'Jun 2023 — Aug 2023',
        role: 'Quantitative Analyst Intern',
        org: 'Bank of America',
        groups: [
            {
                points: [
                    'Prototyped a mortgage delinquency risk engine (LSTM on Spark), identifying key consumer risk features to improve early-warning signals for loan defaults.',
                    'Preprocessed raw loan-level data to correct irregularities and outlier biases, optimizing data integrity for downstream risk modeling.',
                ],
            },
        ],
    },
    {
        date: 'Aug 2022 — Dec 2023',
        role: 'Research Assistant',
        org: 'Learning + Interest + Technology Lab',
        groups: [
            {
                points: [
                    'Co-developed PATHWiSE (published at HRI ’24), an AI authoring tool co-designed with 13 teachers to create custom robot-assisted learning activities using GPT-4.',
                    'Iterated on product features based on field tests with educators, directly translating qualitative user feedback into technical engineering specifications.',
                ],
            },
        ],
    },
    {
        date: 'Sep 2022 — Dec 2022',
        role: 'Mobile Networks Co-op',
        org: 'Nokia',
        groups: [
            {
                points: [
                    'Partnered with engineering teams to drive the modernization of 5G radio-control software, reducing technical debt and accelerating system maintainability for legacy infrastructure.',
                ],
            },
        ],
    },
];

const fellowships: Entry[] = [
    {
        date: 'Mar 2026 — Present',
        role: 'AI Safety Policy Fellow',
        org: 'Georgia Tech AISI',
        groups: [
            {
                points: [
                    'Evaluating policy frameworks for the responsible deployment of transformative AI systems, analyzing frontier AI regulation, progress timelines, and national security implications.',
                ],
            },
        ],
    },
    {
        date: 'Aug 2023 — Dec 2023',
        role: 'Mentor',
        org: 'Society of Hispanic Professional Engineers',
        groups: [
            {
                points: [
                    'Mentored junior engineering students on academic planning and career development in tech.',
                ],
            },
        ],
    },
];

function Section({ title, entries }: { title: string; entries: Entry[] }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <ol className={styles.entries}>
                {entries.map(entry => (
                    <li key={`${entry.org}-${entry.date}`} className={styles.row}>
                        <p className={styles.date}>{entry.date}</p>
                        <div className={styles.body}>
                            <h3 className={styles.role}>{entry.role}</h3>
                            <p className={styles.org}>{entry.org}</p>
                            {entry.groups?.map((group, i) => (
                                <div key={group.heading ?? i} className={styles.group}>
                                    {group.heading && <h4 className={styles.groupHeading}>{group.heading}</h4>}
                                    <ul className={styles.points}>
                                        {group.points.map(point => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default function Resume() {
    return (
        <main className={styles.main}>
            <div className={styles.frame}>
                <header className={styles.header}>
                    <RunningHead folio="02" label="Resume" className={styles.head} />
                    <h1 className={styles.headerName}>Isaac Aurelio Felix</h1>

                    <ul className={styles.contact}>
                        <li>New York, NY</li>
                        <li>
                            <a href="https://www.linkedin.com/in/isaacfelix/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                linkedin.com/in/isaacfelix
                            </a>
                        </li>
                        <li>
                            <a href="mailto:isaacfelix0987@outlook.com" className={styles.link}>
                                isaacfelix0987@outlook.com
                            </a>
                        </li>
                    </ul>

                    <a
                        href="/Isaac_Felix_Resume.docx"
                        download="Isaac_Felix_Resume_Product.docx"
                        className={styles.downloadButton}
                        data-print="hide"
                    >
                        Download Resume
                        <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
                            <path d="M6 1.5v8M2.5 6 6 9.5 9.5 6" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </header>

                <Section title="Education" entries={education} />
                <Section title="Experience" entries={experience} />
                <Section title="Fellowships & Leadership Experience" entries={fellowships} />

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Research and Publications</h2>
                    <ol className={styles.entries}>
                        <li className={styles.row}>
                            <p className={styles.date}>March 2024</p>
                            <div className={styles.body}>
                                <h3 className={styles.role}>Publication (HRI ’24)</h3>
                                <p className={styles.citation}>
                                    M. A. Rahman, I. A. Felix, U. Shahid, and J. E. Michaelis, &ldquo;PATHWiSE: An AI-Assisted Teacher Authoring Tool for Creating Custom Robot-Assisted Learning Activities,&rdquo; <cite>Companion of the 2024 ACM/IEEE International Conference on Human-Robot Interaction (HRI &rsquo;24)</cite>, pp. 88–90, March 2024. DOI:{' '}
                                    <a href="https://doi.org/10.1145/3610978.3641086" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        10.1145/3610978.3641086
                                    </a>
                                </p>
                            </div>
                        </li>
                    </ol>
                </section>
            </div>
        </main>
    );
}
