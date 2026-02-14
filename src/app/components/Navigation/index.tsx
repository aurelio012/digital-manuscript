"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.css';

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className={styles.centerNav}>
            <Link
                href="/"
                className={pathname === '/' ? styles.active : ''}
            >
                Home
            </Link>
            <span className={styles.dot} />
            <Link
                href="/about"
                className={pathname === '/about' ? styles.active : ''}
            >
                About
            </Link>
            <span className={styles.dot} />
            <Link
                href="/resume"
                className={pathname === '/resume' ? styles.active : ''}
            >
                Resume
            </Link>
            <span className={styles.dot} />
            <Link
                href="/portfolio"
                className={pathname === '/portfolio' ? styles.active : ''}
            >
                Portfolio
            </Link>
        </nav>
    );
}
