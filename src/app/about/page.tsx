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
                        I am Isaac Felix, a creative developer crafting digital experiences that bridge the gap between
                        editorial design and interactive technology.
                    </p>
                    <p>
                        My work is defined by a rigorous attention to typography, motion, and the subtle details that
                        transform a functional website into a memorable artifact.
                    </p>
                    <p>
                        Currently, I am exploring the intersection of AI interfaces and human-centric design, looking for
                        ways to make complex systems feel intuitive and alive.
                    </p>
                </div>

                <div className={styles.navContainer}>
                    <Navigation />
                </div>
            </div>
        </main>
    );
}
