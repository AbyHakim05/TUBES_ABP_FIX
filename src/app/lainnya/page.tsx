import Link from 'next/link';
import styles from './Lainnya.module.css';
import Sidebar from '@/components/Sidebar';
import LogoutButton from '@/components/LogoutButton';
import AdminRequestPanel from '@/components/AdminRequestPanel';

export default function LainnyaPage() {
  const settings = [
    { label: 'Pengaturan Akun', description: 'Ubah password, email, dll' },
    { label: 'Notifikasi', description: 'Kelola pemberitahuan' },
    { label: 'Bahasa', description: 'Pilih bahasa aplikasi' },
    { label: 'Bantuan', description: 'FAQ & support' },
    { label: 'Tentang Aplikasi', description: 'Versi & informasi' },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Sidebar />

      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>Lainnya</h1>
            <p className={styles.pageSubtitle}>Pengaturan dan informasi akun kamu</p>
          </div>
        </header>

        <section className={styles.profileCard}>
          <div className={styles.profileInfo}>
            <div className={styles.profileAvatar} />
            <div>
              <p className={styles.profileName}>Jacqueline Wright</p>
              <p className={styles.profileStatus}>Peserta Aktif • Level N5</p>
            </div>
          </div>
          <Link href="/pengaturan" className={styles.editButton}>Edit Profil</Link>
        </section>

        <section className={styles.settingsCard}>
          {settings.map((item) => (
            <div key={item.label} className={styles.settingRow}>
              <div>
                <p className={styles.settingLabel}>{item.label}</p>
                <p className={styles.settingDescription}>{item.description}</p>
              </div>
              <span className={styles.settingArrow}>›</span>
            </div>
          ))}
        </section>

        <section className={styles.actionsSection}>
          <AdminRequestPanel />
          <LogoutButton />
          <button className={styles.deleteButton}>Hapus Akun</button>
        </section>
      </main>
    </div>
  );
}
