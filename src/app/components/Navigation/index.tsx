"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.css';

const navItems = [
    { href: '/resume', label: 'Resume' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <header className={styles.header} data-print="hide">
            <nav className={styles.nav} aria-label="Primary">
                <Link href="/" className={styles.mark} aria-label="Isaac Felix — index">
                    {/* The asterisk: a footnote mark, drawn so it sits on the optical centre */}
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className={styles.asterisk}>
                        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
                            <line x1="12" y1="3" x2="12" y2="21" />
                            <line x1="4.2" y1="7.5" x2="19.8" y2="16.5" />
                            <line x1="4.2" y1="16.5" x2="19.8" y2="7.5" />
                        </g>
                    </svg>
                </Link>
                <ul className={styles.links}>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`${styles.link} ${isActive ? styles.active : ''}`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
