"use client";

import GhostGradient from '../components/GhostGradient';
import Navigation from '../components/Navigation';
import styles from './about.module.css';

export default function About() {
    return (
        <main className={styles.main}>
            <GhostGradient />

            <div className={styles.contentWrapper}>
                <header className={styles.header}>
                    <h1 className={styles.title}>About Me</h1>
                    <div className={styles.divider} aria-hidden="true" />
                </header>

                <div className={styles.bioContainer}>
                    <p>
                        I research how AI systems earn trust&mdash;and what happens when they don&apos;t.
                    </p>
                    <p>
                        As a Computer Science M.S. candidate at Georgia Tech, my work focuses on the gap between what AI can do and what it should do. I&apos;ve helped the NYC Department of Education define security guardrails and privacy standards for AI adoption across 1,500+ schools, co-authored research on AI-assisted educational robotics at ACM/IEEE HRI, and built geospatial models that help cities understand how infrastructure decisions ripple through communities.
                    </p>
                    <p>
                        I also work as a Quantitative Analyst at Bank of America, where I apply machine learning to financial risk&mdash;but my deeper interest lives in the research lab, asking harder questions about alignment, safety, and the systems we&apos;re building for people who never asked for them.
                    </p>
                    <p>
                        I studied Computer Science and Linguistics at UIC&mdash;a pairing that taught me that the most important problems in AI aren&apos;t just technical. They&apos;re about language, power, and who gets to decide what &ldquo;intelligent&rdquo; means.
                    </p>
                </div>

                <div className={styles.navContainer}>
                    <Navigation />
                </div>
            </div>
        </main>
    );
}
