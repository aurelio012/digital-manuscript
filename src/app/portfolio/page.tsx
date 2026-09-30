import type { Metadata } from 'next';
import RunningHead from '../components/RunningHead';
import WorkIndex from '../components/WorkIndex';
import styles from './portfolio.module.css';

export const metadata: Metadata = {
    title: 'Portfolio',
};

export default function Portfolio() {
    return (
        <main className={styles.main}>
            <div className={styles.frame}>
                <header className={styles.header}>
                    <RunningHead folio="02" label="Portfolio" className={`${styles.head} rise`} />
                    <div className={styles.titleRow}>
                        <h1 className={styles.title}>
                            <span className="reveal"><span style={{ '--d': '0.1s' } as React.CSSProperties}>Selected Works</span></span>
                        </h1>
                        <span className={`${styles.count} rise`} style={{ '--d': '0.5s' } as React.CSSProperties}>(04)</span>
                    </div>
                    <p className={`${styles.lede} rise`} style={{ '--d': '0.3s' } as React.CSSProperties}>
                        Research and policy work where cities, schools and classrooms meet data and AI.
                        <span className={styles.range}>Index / 2022—2025</span>
                    </p>
                </header>

                <WorkIndex />
            </div>
        </main>
    );
}
