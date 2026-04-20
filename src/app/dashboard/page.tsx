import Link from 'next/link';
import styles from './Dashboard.module.css';
import Sidebar from '@/components/Sidebar';
import UserNameDisplay from '@/components/UserNameDisplay';

export default function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />

      <main className={styles.mainContent}>
        <header className={styles.topNav}>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Cari kursus atau materi..." className={styles.searchInput} />
          </div>
          <div className={styles.userMenu}>
            <span className={styles.icon}>🔔</span>
            <span className={styles.icon}>⚙️</span>
            <div className={styles.userProfile}>
              <div className={styles.avatarMini}></div>
              <UserNameDisplay className={styles.userName} />
              <span className={styles.icon}>⌄</span>
            </div>
          </div>
        </header>

        <div className={styles.greetingWrapper}>
          <div className={styles.greetingText}>
            <h1 className={styles.greeting}>
              Selamat Datang, <UserNameDisplay fallback="Peserta" />! 👋
            </h1>
          </div>
          
          <section className={styles.cardsSection}>
            <div className={`${styles.cardStat} ${styles.cardOrange}`}> 
              <p className={styles.statBadge}>Level</p>
              <h3>Level Bahasa Jepang</h3>
              <p>N5</p>
              <span>2 level lagi menuju N3</span>
            </div>
            <div className={styles.cardStat}>
              <p className={styles.statBadgeSuccess}>Progress</p>
              <h3>Progress Belajar</h3>
              <p>78%</p>
              <div className={styles.progressBarBackgroundSmall}><div className={styles.progressBarFillSmall} style={{width: '78%'}}></div></div>
            </div>
            <div className={styles.cardStat}>
              <p className={styles.statBadgeInfo}>Aktif</p>
              <h3>Kursus Aktif</h3>
              <p>3 <span>Kursus</span></p>
              <span>12 jam total belajar minggu ini</span>
            </div>
            <div className={styles.cardStat}>
              <p className={styles.statBadgeWarning}>Mendatang</p>
              <h3>Jadwal Ujian</h3>
              <p>12 Apr 2026</p>
              <span>153 hari lagi</span>
            </div>
          </section>
        </div>

        <section className={styles.activeClassesSection}>
          <div className={styles.sectionHeader}>
            <h2>Kelas Aktif</h2>
            <span>3 kursus sedang berlangsung</span>
          </div>
          <div className={styles.classesGrid}>
            <article className={styles.classCard}>
              <div className={styles.classTitle}>Bahasa Jepang Dasar</div>
              <div className={styles.classMeta}>Teruskan latihan huruf dan percakapan sehari-hari.</div>
              <span className={styles.classStatus}>Sedang Berlangsung</span>
            </article>
            <article className={styles.classCard}>
              <div className={styles.classTitle}>Percakapan Sehari-hari</div>
              <div className={styles.classMeta}>Fokus pada praktik dialog dan listening.</div>
              <span className={styles.classStatus}>Sedang Berlangsung</span>
            </article>
            <article className={styles.classCard}>
              <div className={styles.classTitle}>Skill/Karier Jepang</div>
              <div className={styles.classMeta}>Persiapan kerja dan budaya perusahaan Jepang.</div>
              <span className={styles.classStatus}>Sedang Berlangsung</span>
            </article>
          </div>
        </section>

        <section className={styles.progressSection}>
          <div className={styles.progressCard}>
            <div className={styles.cardHeader}>
              <h3>Progress Belajar</h3>
              <span>Perkembangan minggu ini</span>
            </div>
            <div className={styles.progressList}>
              <div className={styles.progressItem}>
                <span>Bahasa Jepang</span>
                <div className={styles.progressBarBackground}><div className={styles.progressBarFill}/></div>
              </div>
              <div className={styles.progressItem}>
                <span>Skill Kerja</span>
                <div className={styles.progressBarBackground}><div className={styles.progressBarFillBlue}/></div>
              </div>
              <div className={styles.progressItem}>
                <span>Persiapan Ujian JLPT</span>
                <div className={styles.progressBarBackground}><div className={styles.progressBarFillGreen}/></div>
              </div>
            </div>
          </div>

          <div className={styles.eventCard}>
            <div className={styles.cardHeader}>
              <h3>Jadwal Kegiatan</h3>
              <span>April 2026</span>
            </div>
            <div className={styles.timeline}>
              <div className={styles.timelineRow}>
                <span className={styles.timelineTag}>Pelatihan</span>
                <div>
                  <strong>Senin, 18 Apr</strong>
                  <p>Diskusi materi JLPT dan latihan tanya jawab.</p>
                </div>
              </div>
              <div className={styles.timelineRow}>
                <span className={styles.timelineTagSecondary}>Webinar</span>
                <div>
                  <strong>Rabu, 20 Apr</strong>
                  <p>Sesi persiapan interview kerja di Jepang.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.announcementSection}>
          <div className={styles.announcementCard}>
            <div>
              <p className={styles.announcementTitle}>Pengumuman Terbaru</p>
              <p>Pendaftaran Program Kerja Jepang Batch Baru Telah Dibuka! Segera daftar sebelum kuota penuh.</p>
            </div>
            <Link href="#" className={styles.detailButton}>Lihat Detail</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
