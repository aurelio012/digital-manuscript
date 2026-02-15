"use client";

import GhostGradient from '../components/GhostGradient';
import styles from './contact.module.css';

export default function Contact() {
    return (
        <main className={styles.main}>
            <GhostGradient />

            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>Correspondence.</h1>

                <div className={styles.buttonGrid}>
                    <a
                        href="https://www.linkedin.com/in/isaacfelix/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:isaacfelix0987@outlook.com"
                        className={styles.button}
                    >
                        Email
                    </a>
                </div>
            </div>
        </main>
    );
}
