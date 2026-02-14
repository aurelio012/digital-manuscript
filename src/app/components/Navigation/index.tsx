"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.css';

const navItems = [
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/portfolio', label: 'Portfolio' },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.logo} aria-label="Home">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            </Link>
            <div className={styles.links}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.link} ${pathname === item.href ? styles.active : ''}`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
