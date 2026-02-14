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
                        I build at the intersection of data, policy, and human-centered AI.
                    </p>
                    <p>
                        I&apos;m a Computer Science M.S. candidate at Georgia Tech and a Quantitative Analyst at Bank of America, where I engineer financial crime detection models and bankruptcy forecasting pipelines. Before that, I studied Computer Science and Linguistics at the University of Illinois at Chicago&mdash;a combination that shaped how I think about language, systems, and the spaces between them.
                    </p>
                    <p>
                        My research spans geospatial analysis of urban infrastructure, AI-assisted educational robotics, and legislative congruence modeling. I&apos;ve consulted the NYC Department of Education on AI adoption frameworks for 1,500+ schools through the Paragon Fellowship, and co-authored work on AI tutoring systems presented at ACM/IEEE HRI.
                    </p>
                    <p>
                        I&apos;m drawn to problems where technical rigor meets real-world consequence&mdash;where a model doesn&apos;t just optimize a metric, but shapes how a city moves, how a student learns, or how a system earns trust.
                    </p>
                </div>

                <div className={styles.navContainer}>
                    <Navigation />
                </div>
            </div>
        </main>
    );
}
