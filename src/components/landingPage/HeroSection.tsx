import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Belajar & Kerja di Jepang Lebih Mudah</h1>
        <p className={styles.description}>
          Platform pelatihan kerja berbasis blended learning yang membantu tenaga
          kerja Indonesia mempersiapkan diri untuk bekerja di Jepang melalui
          materi bahasa, pelatihan kerja, dan simulasi interview.
        </p>
        <button className={styles.ctaBtn}>Daftar Sekarang</button>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.heroImage}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Belajar di Jepang" />
        </div>
        
        {/* Floating Glassmorphism Badge */}
        <div className={styles.floatingBadge}>
          <div className={styles.badgeIcon}>🇯🇵</div>
          <div>
            <p className={styles.badgeTitle}>Akses Cepat</p>
            <p className={styles.badgeSub}>Belajar & Bekerja</p>
          </div>
        </div>
      </div>
    </section>
  );
}
