import type { Metadata } from 'next';
import RunningHead from '../components/RunningHead';
import CopyEmail from './CopyEmail';
import styles from './contact.module.css';

export const metadata: Metadata = {
    title: 'Contact',
};

const EMAIL = 'isaacfelix0987@outlook.com';

export default function Contact() {
    return (
        <main className={styles.main}>
            <div className={styles.contentWrapper}>
                <RunningHead folio="04" label="Contact" />
                <h1 className="visually-hidden">Contact</h1>

                <a href={`mailto:${EMAIL}`} className={styles.email}>
                    {EMAIL}
                </a>

                <div className={styles.buttonGrid}>
                    <CopyEmail email={EMAIL} className={styles.button} />
                    <a
                        href="https://www.linkedin.com/in/isaacfelix/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                    >
                        LinkedIn
                        <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
                            <path d="M3.5 8.5l5-5M4.5 3.5h4v4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="visually-hidden">(opens in a new tab)</span>
                    </a>
                </div>

                <p className={styles.location}>New York, NY</p>
            </div>
        </main>
    );
}
