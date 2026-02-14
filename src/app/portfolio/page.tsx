"use client";

import GhostGradient from '../components/GhostGradient';
import Navigation from '../components/Navigation';
import WorkIndex from '../components/WorkIndex';
import styles from './portfolio.module.css';

export default function Portfolio() {
    return (
        <main className={styles.main}>
            <GhostGradient />

            <div className={styles.contentWrapper}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Selected Works</h1>
                    <div className={styles.divider} aria-hidden="true" />
                </header>

                {/* Reusing the WorkIndex component here as requested */}
                <section className={styles.workSection}>
                    <WorkIndex />
                </section>

                <div className={styles.navContainer}>
                    <Navigation />
                </div>
            </div>
        </main>
    );
}
