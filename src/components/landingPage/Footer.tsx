import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoEmoji}>🎓</span>
            <span>LPK <span className={styles.logoHighlight}>MUGIWARA</span></span>
          </div>
          <p className={styles.desc}>
            Lembaga pelatihan kerja yang berfokus pada persiapan tenaga kerja 
            Indonesia untuk bekerja di Jepang secara profesional, siap kerja, dan 
            berdaya saing global.
          </p>
        </div>

        <div className={styles.col}>
          <h4>Menu</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#materi">Materi</a></li>
            <li><a href="#lowongan">Lowongan</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Bantuan</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Panduan</a></li>
            <li><a href="#">Kebijakan Privasi</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Program</h4>
          <ul>
            <li><a href="#">Bahasa Jepang</a></li>
            <li><a href="#">Pelatihan Kerja</a></li>
            <li><a href="#">Simulasi Interview</a></li>
            <li><a href="#">Persiapan Kerja</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Connect with us</h4>
          <div className={styles.social}>
            <a href="#" className={`${styles.socialIcon} ${styles.ig}`}>📸</a>
            <a href="#" className={`${styles.socialIcon} ${styles.fb}`}>f</a>
            <a href="#" className={`${styles.socialIcon} ${styles.in}`}>in</a>
            <a href="#" className={`${styles.socialIcon} ${styles.tw}`}>𝕏</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
