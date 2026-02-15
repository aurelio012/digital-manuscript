"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.css';

const navItems = [
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.logo} aria-label="Index">
                <span style={{ fontSize: '1.5rem', lineHeight: 1, fontFamily: 'var(--font-serif)', fontWeight: 300 }}>*</span>
            </Link>
            <div className={styles.links}>
                {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.link} ${isActive ? styles.active : ''}`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
