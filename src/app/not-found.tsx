import Link from 'next/link';
import RunningHead from './components/RunningHead';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <RunningHead folio="404" label="Not found" />
                <h1 className={styles.title}>This page isn&rsquo;t in the manuscript.</h1>
                <Link href="/" className={styles.link}>
                    Return to the index <span aria-hidden="true">→</span>
                </Link>
            </div>
        </main>
    );
}
