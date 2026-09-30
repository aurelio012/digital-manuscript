import type { Metadata } from 'next';
import RunningHead from '../components/RunningHead';
import CopyEmail from './CopyEmail';
import LocalTime from './LocalTime';
import styles from './contact.module.css';

export const metadata: Metadata = {
    title: 'Contact',
};

const USER = 'isaacfelix0987';
const DOMAIN = 'outlook.com';
const EMAIL = `${USER}@${DOMAIN}`;

const delay = (d: string) => ({ '--d': d }) as React.CSSProperties;

export default function Contact() {
    return (
        <main className={styles.main}>
            <div className={styles.frame}>
                <RunningHead folio="03" label="Contact" className="rise" />
                <h1 className="visually-hidden">Contact</h1>

                {/* The address is the page: split at the @ into two lines of display type */}
                <a href={`mailto:${EMAIL}`} className={styles.email} aria-label={EMAIL}>
                    <span className="reveal"><span style={delay('0.1s')}>{USER}</span></span>
                    <span className="reveal"><span className={styles.domain} style={delay('0.22s')}>@{DOMAIN}</span></span>
                </a>

                <div className={`${styles.footer} rise`} style={delay('0.55s')}>
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

                    <dl className={styles.facts}>
                        <div>
                            <dt className="eyebrow">Based in</dt>
                            <dd>New York, NY</dd>
                        </div>
                        <div>
                            <dt className="eyebrow">Local time</dt>
                            <dd><LocalTime /></dd>
                        </div>
                    </dl>
                </div>
            </div>
        </main>
    );
}
