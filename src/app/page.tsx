import KineticName from './components/KineticName';
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

          <KineticName text="Isaac Felix" id="home-name" />
        </div>
      </section>
    </main>
  );
}
