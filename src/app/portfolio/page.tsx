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
                <RunningHead folio="03" label="Portfolio" className={styles.head} />
                <WorkIndex />
            </div>
        </main>
    );
}
