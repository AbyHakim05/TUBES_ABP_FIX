import Link from 'next/link';
import styles from './Pengaturan.module.css';
import Sidebar from '@/components/Sidebar';
import UserProfileSettings from '@/components/UserProfileSettings';
import LogoutButton from '@/components/LogoutButton';

export default function PengaturanPage() {
  return (
    <div className={styles.pageWrapper}>
      <Sidebar />

      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>Pengaturan</h1>
            <p className={styles.pageSubtitle}>Atur akun dan preferensi belajar kamu</p>
          </div>
        </header>

        <section className={styles.cardSection}>
          <UserProfileSettings />

          <div className={styles.card}>
            <div className={styles.cardHeader}>Keamanan</div>
            <div className={styles.fieldRow}>
              <label>Password Lama</label>
              <input type="password" placeholder="Masukkan password lama" />
            </div>
            <div className={styles.fieldRow}>
              <label>Password Baru</label>
              <input type="password" placeholder="Masukkan password baru" />
            </div>
            <button className={styles.secondaryButton}>Ubah Password</button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>Notifikasi</div>
            <div className={styles.toggleRow}>
              <span>Notifikasi email</span>
              <button className={styles.toggleButton}>Aktif</button>
            </div>
            <div className={styles.toggleRow}>
              <span>Pemberitahuan agenda</span>
              <button className={styles.toggleButton}>Aktif</button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>Preferensi</div>
            <div className={styles.fieldRow}>
              <label htmlFor="language">Bahasa</label>
              <select id="language" title="Pilih bahasa">
                <option>Bahasa Indonesia</option>
                <option>English</option>
              </select>
            </div>
            <div className={styles.fieldRow}>
              <label htmlFor="theme">Tema</label>
              <select id="theme" title="Pilih tema">
                <option>Terang</option>
                <option>Gelap</option>
              </select>
            </div>
          </div>

          <div className={styles.cardDanger}>
            <p className={styles.dangerTitle}>Danger Zone</p>
            <p className={styles.dangerText}>Keluar dari akun atau hapus akun secara permanen.</p>
            <LogoutButton />
            <button className={styles.deleteButton}>Hapus Akun</button>
          </div>
        </section>
      </main>
    </div>
  );
}
