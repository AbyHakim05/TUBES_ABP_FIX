import Link from 'next/link';
import styles from './Materi.module.css';
import Sidebar from '@/components/Sidebar';

const MateriPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Sidebar />

      <main className={styles['main-content']}>
        <header className={styles.header}>
          <h2 className={styles['page-title']}>Materi Belajar</h2>
          <div className={styles['search-bar']}>
            <input type="text" placeholder="Cari pekerjaan..." />
          </div>
        </header>

        <div className={styles['hero-banner']}>
          <h3>Materi Belajar</h3>
          <p>Akses semua materi bahasa & kerja Jepang</p>
          <button className={styles['btn-start']}>Mulai</button>
        </div>

        <div className={styles['filter-group']}>
          {['semua', 'N5', 'Speaking', 'Skill'].map((filter, index) => (
            <button
              key={index}
              className={`${styles['filter-btn']} ${filter === 'semua' ? styles.active : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles['cards-grid']}>
          <div className={styles['cards-left']}>
            <div className={styles.card}>
              <div className={styles['card-header']}>
                <div>
                  <h4>Bahasa Jepang Dasar</h4>
                  <p className={styles['sub-text']}>Hiragana & Katakana</p>
                </div>
                <span className={`${styles.badge} ${styles.n5}`}>N5</span>
              </div>
              <div className={styles['progress-section']}>
                <div className={styles['progress-labels']}>
                  <span>Progress</span>
                  <span>60%</span>
                </div>
                <div className={styles['progress-bar-bg']}>
                  <div className={`${styles['progress-fill']} ${styles.orange} ${styles.w60}`}></div>
                </div>
              </div>
              <Link href="/kelas-saya/1" style={{textDecoration: 'none'}}>
                <button className={styles['btn-continue']}>Lanjutkan</button>
              </Link>
            </div>

            <div className={styles.card}>
              <div className={styles['card-header']}>
                <div>
                  <h4>Percakapan Sehari-hari</h4>
                  <p className={styles['sub-text']}>Latihan komunikasi</p>
                </div>
                <span className={`${styles.badge} ${styles.speaking}`}>Speaking</span>
              </div>
              <div className={styles['progress-section']}>
                <div className={styles['progress-labels']}>
                  <span>Progress</span>
                  <span>45%</span>
                </div>
                <div className={styles['progress-bar-bg']}>
                  <div className={`${styles['progress-fill']} ${styles.blue} ${styles.w45}`}></div>
                </div>
              </div>
              <Link href="/kelas-saya/2" style={{textDecoration: 'none'}}>
                <button className={styles['btn-continue']}>Lanjutkan</button>
              </Link>
            </div>

            <div className={styles.card}>
              <div className={styles['card-header']}>
                <div>
                  <h4>Skill Kerja Jepang</h4>
                  <p className={styles['sub-text']}>Etika & budaya kerja</p>
                </div>
                <span className={`${styles.badge} ${styles.skill}`}>Skill</span>
              </div>
              <div className={styles['progress-section']}>
                <div className={styles['progress-labels']}>
                  <span>Progress</span>
                  <span>30%</span>
                </div>
                <div className={styles['progress-bar-bg']}>
                  <div className={`${styles['progress-fill']} ${styles.green} ${styles.w30}`}></div>
                </div>
              </div>
              <Link href="/kelas-saya/3" style={{textDecoration: 'none'}}>
                <button className={styles['btn-continue']}>Lanjutkan</button>
              </Link>
            </div>
          </div>

          <div className={styles['cards-right']}>
            <div className={`${styles['card-highlight']} ${styles['orange-bg']}`}>
              <h4>Program JLPT</h4>
              <p>Target N3 🚀</p>
            </div>
            
            <div className={`${styles['card-highlight']} ${styles['white-bg']}`}>
              <h4 className={styles['text-black']}>Total Progress</h4>
              <p className={styles['text-gray']}>70%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MateriPage;