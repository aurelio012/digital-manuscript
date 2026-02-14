"use client";

import GhostGradient from '../components/GhostGradient';
import styles from './about.module.css';

export default function About() {
    return (
        <main className={styles.main}>
            <GhostGradient />

            <div className={styles.contentWrapper}>
                <div className={styles.bioContainer}>
                    <p>
                        I research how AI systems earn trust&mdash;and what happens when they don&apos;t.
                    </p>
                    <p>
                        As an M.S. Computer Science candidate at Georgia Tech, my work sits at the intersection of AI safety, public policy, and human-centered systems. I&apos;ve defined security guardrails and privacy standards for AI adoption across 1,500+ NYC public schools through the Paragon Fellowship, co-authored research on AI-assisted educational robotics presented at ACM/IEEE HRI, and built geospatial models that help cities understand how infrastructure decisions affect their communities.
                    </p>
                    <p>
                        I also work as a Quantitative Analyst at Bank of America, applying machine learning to financial risk&mdash;but my deeper interest lives in the research lab, asking harder questions about alignment, safety, and the systems we build for people who never asked for them.
                    </p>
                </div>
            </div>
        </main>
    );
}
