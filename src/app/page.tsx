import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="home-name">
        <div className={styles.nameContainer}>
          {/* Ambient lights that orbit the name; colour mixes where they overlap */}
          <div className={`${styles.aura} ${styles.aura1}`} aria-hidden="true" />
          <div className={`${styles.aura} ${styles.aura2}`} aria-hidden="true" />
          <div className={`${styles.aura} ${styles.aura3}`} aria-hidden="true" />

          <h1 id="home-name" className={styles.name}>Isaac Felix</h1>
        </div>

        <p className={styles.descriptor}>
          <span className={styles.item}>AI Safety</span>
          <span className={styles.sep} aria-hidden="true">·</span>
          <span className="visually-hidden">, </span>
          <span className={styles.item}>Public Policy</span>
          <span className={`${styles.sep} ${styles.sepBreak}`} aria-hidden="true">·</span>
          <span className="visually-hidden">, </span>
          <span className={styles.item}>Human-Centered Systems</span>
        </p>
      </section>
    </main>
  );
}
