import React from 'react';
import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.header}>
        <h2 className={styles.title}>Mengapa Harus Memilih Kami?</h2>
        <p className={styles.subtitle}>
          Platform LPK MUGIWARA dirancang untuk memberikan pengalaman pelatihan yang efektif, terstruktur, dan sesuai dengan 
          kebutuhan kerja di Jepang. Dengan sistem pembelajaran terintegrasi, peserta dapat mengakses materi, latihan, dan 
          simulasi secara fleksibel serta mendapatkan bimbingan yang tepat untuk meningkatkan kesiapan kerja.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.imageGrid}>
          <div className={`${styles.imgWrapper} ${styles.img1}`}>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Kerja" />
          </div>
          <div className={`${styles.imgWrapper} ${styles.img2}`}>
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" alt="Belajar" />
          </div>
          <div className={`${styles.imgWrapper} ${styles.img3}`}>
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" alt="Kelas" />
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.featureItem}>
            <div className={styles.icon}>✓</div>
            <div className={styles.itemContent}>
              <h3>Persiapan Kerja</h3>
              <p>Program pelatihan yang dirancang untuk membekali peserta dengan keterampilan kerja, etika profesional, serta pemahaman budaya kerja di Jepang.</p>
            </div>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.icon}>✓</div>
            <div className={styles.itemContent}>
              <h3>Bahasa Jepang</h3>
              <p>Materi pembelajaran bahasa Jepang dari dasar hingga tingkat lanjut, dilengkapi video, modul, dan latihan soal interaktif.</p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.icon}>✓</div>
            <div className={styles.itemContent}>
              <h3>Simulasi Interview</h3>
              <p>Latihan wawancara kerja dengan pertanyaan yang sering digunakan oleh perusahaan Jepang serta tips menjawab dengan percaya diri.</p>
            </div>
          </div>

          <button className={styles.actionBtn}>Daftar</button>
        </div>
      </div>
    </section>
  );
}
