"use client";

import { useEffect, useState } from 'react';
import styles from './resume.module.css';

export interface IndexEntry {
    id: string;
    label: string;
    count: number;
}

// A table of contents that tracks the reader: the section crossing the
// upper third of the viewport is marked as current.
export default function SectionIndex({ sections }: { sections: IndexEntry[] }) {
    const [current, setCurrent] = useState(sections[0]?.id);

    useEffect(() => {
        const targets = sections
            .map(s => document.getElementById(s.id))
            .filter((el): el is HTMLElement => el !== null);
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setCurrent(entry.target.id);
                });
            },
            { rootMargin: '-30% 0px -65% 0px' },
        );
        targets.forEach(t => observer.observe(t));
        return () => observer.disconnect();
    }, [sections]);

    return (
        <nav className={styles.index} aria-label="Resume sections" data-print="hide">
            <ol>
                {sections.map((s, i) => (
                    <li key={s.id}>
                        <a
                            href={`#${s.id}`}
                            className={`${styles.indexLink} ${current === s.id ? styles.indexCurrent : ''}`}
                            aria-current={current === s.id ? 'true' : undefined}
                        >
                            <span className={styles.indexNum}>{String(i + 1).padStart(2, '0')}</span>
                            <span className={styles.indexLabel}>{s.label}</span>
                            <span className={styles.indexCount}>{s.count}</span>
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
