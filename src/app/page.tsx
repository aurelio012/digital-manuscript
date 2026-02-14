"use client";

import GhostGradient from './components/GhostGradient';
import Navigation from './components/Navigation';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <GhostGradient />

      <section className={styles.centeredHero}>
        <div className={styles.nameContainer}>
          {/* Ambient color auras that orbit around the name */}
          <div className={`${styles.aura} ${styles.aura1}`} aria-hidden="true" />
          <div className={`${styles.aura} ${styles.aura2}`} aria-hidden="true" />
          <div className={`${styles.aura} ${styles.aura3}`} aria-hidden="true" />

          <h1 className={styles.name}>Isaac Felix</h1>
        </div>

        <Navigation />
      </section>
    </main>
  );
}
