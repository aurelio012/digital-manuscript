"use client";

import styles from './ghost.module.css';

export default function GhostGradient() {
    return (
        <div className={styles.container}>
            <div className={styles.orb1} />
            <div className={styles.orb2} />
            <div className={styles.noise} />
        </div>
    );
}
