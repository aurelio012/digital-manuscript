"use client";

import GhostGradient from '../components/GhostGradient';
import WorkIndex from '../components/WorkIndex';
import styles from './portfolio.module.css';

export default function Portfolio() {
    return (
        <main className={styles.main}>
            <GhostGradient />

            <div className={styles.contentWrapper}>
                <section className={styles.workSection}>
                    <WorkIndex />
                </section>
            </div>
        </main>
    );
}
