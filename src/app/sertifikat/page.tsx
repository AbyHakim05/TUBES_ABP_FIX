import Link from 'next/link';
import styles from './Sertifikat.module.css';
import Sidebar from '@/components/Sidebar';

const certificates = [
  {
    id: 1,
    title: 'Bahasa Jepang N5',
    institution: 'LPK Mugiwara',
    date: '10 April 2026', 
    status: 'Lulus',
    colorClass: styles.cardRed,
  },
  {
    id: 2,
    title: 'Percakapan Jepang',
    institution: 'LPK Mugiwara',
    date: '20 Mei 2026',
    status: 'Lulus',
    colorClass: styles.cardBlue,
  },
  {
    id: 3,
    title: 'Skill Kerja Jepang',
    institution: 'LPK Mugiwara',
    date: '2 Juni 2026',
    status: 'Lulus',
    colorClass: styles.cardGreen,
  },
];

export default function SertifikatPage() {
  return (
    <div className={styles.pageWrapper}>
      <Sidebar />

      <main className={styles.mainContent}>
        
        <header className={styles.pageHeader}>
          <div>
            <h1>Sertifikat Saya</h1>
            <p className={styles.pageSubtitle}>Kumpulan sertifikat hasil belajar kamu 🏆</p>
          </div>
          <div className={styles.searchBox}>
            <input type="search" placeholder="Cari Sertifikat..." />
          </div>
        </header>

        <div className={styles.statsRow}>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Total Sertifikat</p>
            <p className={`${styles.statValue} ${styles.textRed}`}>4</p>
          </article>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Level Tertinggi</p>
            <p className={styles.statValue}>N5</p>
          </article>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Status</p>
            <p className={`${styles.statValue} ${styles.textGreen}`}>Aktif</p>
          </article>
        </div>

        <section className={styles.certificatesGrid}>
          {certificates.map((cert) => (
            <div key={cert.id} className={styles.certCard}>
              <div className={`${styles.certTop} ${cert.colorClass}`}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certInstitution}>{cert.institution}</p>
              </div>
              <div className={styles.certBottom}>
                <div className={styles.certInfo}>
                  <p className={styles.certDateLabel}>Tanggal Lulus</p>
                  <p className={styles.certDate}>{cert.date}</p>
                  <span className={styles.certBadge}>{cert.status}</span>
                </div>
                <button className={styles.btnDownload}>Download</button>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}