import Link from 'next/link';
import styles from './KelasSaya.module.css';
import Sidebar from '@/components/Sidebar';

export default function KelasSayaPage() {
  return (
    <div className={styles.container}>
      <Sidebar />

      <main className={styles.content}>
        <div className={styles.headerRow}>
          <div>
            <p className={styles.sectionLabel}>Kelas Saya</p>
            <h1 className={styles.title}>Semua kursus aktif kamu</h1>
          </div>
          <div className={styles.searchWrapper}>
            <input type="search" placeholder="Cari kelas..." />
          </div>
        </div>

        <div className={styles.cardGrid}>
          <article className={styles.classCard}>
            <div className={`${styles.cardImage} ${styles.cardImage1}`} />
            <div className={styles.cardBody}>
              <h2>Bahasa Jepang N5</h2>
              <p>Guru: Sensei Tanaka</p>
              <div className={styles.progressLabel}>Progress 71%</div>
              <div className={styles.progressTrack}><div className={`${styles.progressBar} ${styles.bar71}`} /></div>
              <button className={styles.cardButton}>Lanjutkan</button>
            </div>
          </article>

          <article className={styles.classCard}>
            <div className={`${styles.cardImage} ${styles.cardImage2}`} />
            <div className={styles.cardBody}>
              <h2>Percakapan Jepang</h2>
              <p>Guru: Sensei Kenjiro</p>
              <div className={styles.progressLabel}>Progress 48%</div>
              <div className={styles.progressTrack}><div className={`${styles.progressBar} ${styles.barBlue} ${styles.bar48}`} /></div>
              <button className={styles.cardButton}>Lanjutkan</button>
            </div>
          </article>

          <article className={styles.classCard}>
            <div className={`${styles.cardImage} ${styles.cardImage3}`} />
            <div className={styles.cardBody}>
              <h2>Skill Kerja Jepang</h2>
              <p>Guru: Sensei Sato</p>
              <div className={styles.progressLabel}>Progress 59%</div>
              <div className={styles.progressTrack}><div className={`${styles.progressBar} ${styles.barGreen} ${styles.bar59}`} /></div>
              <button className={styles.cardButton}>Lanjutkan</button>
            </div>
          </article>
        </div>

        <section className={styles.progressSection}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2>Progress Belajar</h2>
              <span>Update hari ini</span>
            </div>
            <div className={styles.panelBody}>
              <div className={styles.progressItem}>
                <span>Bahasa Jepang</span>
                <div className={styles.progressTrack}><div className={`${styles.progressBar} ${styles.bar71}`} /></div>
              </div>
              <div className={styles.progressItem}>
                <span>Skill Kerja</span>
                <div className={styles.progressTrack}><div className={`${styles.progressBar} ${styles.barBlue} ${styles.bar59}`} /></div>
              </div>
              <div className={styles.progressItem}>
                <span>Percakapan</span>
                <div className={styles.progressTrack}><div className={`${styles.progressBar} ${styles.barGreen} ${styles.bar48}`} /></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
