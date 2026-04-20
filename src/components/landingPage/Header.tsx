import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoEmoji}>🎓</span>
        <span className={styles.logoText}>LPK <span className={styles.logoHighlight}>MUGIWARA</span></span>
      </div>
      <nav className={styles.nav}>
        <a href="#" className={`${styles.navLink} ${styles.navLinkActive}`}>Home</a>
        <a href="#program" className={styles.navLink}>Program</a>
        <a href="#contact" className={styles.navLink}>Contact Us</a>
        <a href="#lowongan" className={styles.navLink}>Lowongan</a>
      </nav>
      <Link href="/auth">
        <button className={styles.loginBtn}>Login</button>
      </Link>
    </header>
  );
}
