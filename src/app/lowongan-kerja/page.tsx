import Link from 'next/link';
import styles from './LowonganKerja.module.css';
import Sidebar from '@/components/Sidebar';

const jobs = [
  {
    title: 'Teknisi Produksi Jepang',
    company: 'PT. Sakura Industrial',
    type: 'Full Time',
    location: 'Jepang',
    deadline: '31 Mei 2026',
    badge: 'Baru',
  },
  {
    title: 'Operator Mesin CNC',
    company: 'Nihon Tech',
    type: 'Contract',
    location: 'Jepang',
    deadline: '10 Juni 2026',
    badge: 'Urgent',
  },
  {
    title: 'Customer Service Jepang',
    company: 'Hanami Group',
    type: 'Part Time',
    location: 'Jepang',
    deadline: '15 Juni 2026',
    badge: 'Rekomendasi',
  },
];

export default function LowonganKerjaPage() {
  return (
    <div className={styles.pageWrapper}>
      <Sidebar />

      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <div>
            <p className={styles.sectionLabel}>Lowongan Kerja</p>
            <h1>Temukan peluang kerja di Jepang</h1>
          </div>
          <div className={styles.searchBox}>
            <input type="search" placeholder="Cari lowongan..." />
          </div>
        </header>

        <div className={styles.filterPanel}>
          {['Semua', 'Teknisi', 'Admin', 'Skill', 'Full Time'].map((filter) => (
            <button key={filter} className={filter === 'Semua' ? `${styles.filterBtn} ${styles.activeFilter}` : styles.filterBtn}>
              {filter}
            </button>
          ))}
        </div>

        <section className={styles.cardsSection}>
          <div className={styles.statisticsCard}>
            <p className={styles.cardLabel}>Lowongan Premium</p>
            <h2>10+ peluang kerja terbaru</h2>
            <p>Segera ajukan CV dan persiapkan dokumenmu.</p>
            <Link href="#" className={styles.detailButton}>Lihat Detail</Link>
          </div>

          <div className={styles.infoCard}>
            <p className={styles.cardLabel}>Tips Lolos</p>
            <ul className={styles.tipList}>
              <li>Perbarui CV & surat lamaran</li>
              <li>Persiapkan bahasa Jepang dasar</li>
              <li>Kenali budaya kerja Jepang</li>
            </ul>
          </div>
        </section>

        <section className={styles.jobListSection}>
          {jobs.map((job) => (
            <article key={job.title} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div>
                  <p className={styles.jobTitle}>{job.title}</p>
                  <p className={styles.company}>{job.company} · {job.type}</p>
                </div>
                <span className={styles.badge}>{job.badge}</span>
              </div>
              <div className={styles.jobBody}>
                <p>{job.location}</p>
                <p>Batas lamaran: {job.deadline}</p>
              </div>
              <div className={styles.jobActions}>
                <button className={styles.applyButton}>Lihat Detail</button>
                <button className={styles.saveButton}>Simpan</button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
