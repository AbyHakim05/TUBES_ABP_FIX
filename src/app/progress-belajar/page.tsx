import Link from 'next/link';
import styles from './ProgressBelajar.module.css';
import Sidebar from '@/components/Sidebar';

const progressItems = [
  { label: 'Bahasa Jepang', value: 72, color: styles.redBar },
  { label: 'Skill Kerja', value: 58, color: styles.blueBar },
  { label: 'Percakapan', value: 48, color: styles.greenBar },
  { label: 'Persiapan Ujian JLPT', value: 35, color: styles.purpleBar },
];

export default function ProgressBelajarPage() {
  return (
    <div className={styles.pageWrapper}>
      <Sidebar />

      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <div>
            <p className={styles.sectionLabel}>Progress Belajar</p>
            <h1>Pantau perkembangan belajar kamu</h1>
          </div>
          <div className={styles.searchBox}>
            <input type="search" placeholder="Cari topik..." />
          </div>
        </header>

        <div className={styles.statsRow}>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Total Progress</p>
            <p className={styles.statValue}>70%</p>
            <p className={styles.statNote}>+5% minggu ini</p>
          </article>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Kursus Aktif</p>
            <p className={styles.statValue}>3</p>
            <p className={styles.statNote}>Sedang berjalan</p>
          </article>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Waktu Belajar</p>
            <p className={styles.statValue}>12 Jam</p>
            <p className={styles.statNote}>Minggu ini</p>
          </article>
        </div>

        <section className={styles.progressSection}>
          <div className={styles.progressCard}>
            <div className={styles.progressHeader}>
              <h2>Detail Progress</h2>
            </div>
            <div className={styles.progressList}>
              {progressItems.map((item) => (
                <div key={item.label} className={styles.progressRow}>
                  <div className={styles.progressInfo}>
                    <span className={styles.progressBullet}></span>
                    <span>{item.label}</span>
                  </div>
                  <span className={styles.progressValue}>{item.value}%</span>
                  <div className={styles.progressTrack}>
                    <div className={`${styles.progressFill} ${item.color}`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.goalCard}>
            <p className={styles.goalLabel}>Target Belajar</p>
            <h2>Capai level N3 dalam 6 bulan</h2>
            <div className={styles.goalTrack}>
              <div className={styles.goalFill} />
            </div>
            <p className={styles.goalNote}>60% menuju target</p>
          </div>
        </section>
      </main>
    </div>
  );
}
