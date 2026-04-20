import React from 'react';
import styles from '../AdminPages.module.css';

export default function AdminDashboardPage() {
  return (
    <>
      <header className={styles.topNav}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Cari..." className={styles.searchInput} />
        </div>
        <div className={styles.userMenu}>
          <span className={styles.icon}>🔔</span>
          <span className={styles.icon}>⚙️</span>
          <div className={styles.userProfile}>
            <div className={styles.avatarMini}></div>
            <span className={styles.userName}>Nama Admin</span>
            <span className={styles.icon}>⌄</span>
          </div>
        </div>
      </header>

      <div className={styles.headerRow}>
        <div className={styles.greeting}>
          <h1>Selamat Datang, Admin! 👋</h1>
          <p>DASHBOARD ADMIN</p>
          <span>Monitoring peserta, pelatihan, dokumen, dan penempatan</span>
        </div>
        <button className={styles.actionButton}>Kelola Peserta</button>
      </div>

      {/* Stat Widgets */}
      <div className={styles.widgetRow}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Peserta</span>
          <span className={styles.statValue}>1,248</span>
          <span className={styles.statTrend}>+12% bulan ini</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Peserta Aktif</span>
          <span className={styles.statValue}>892</span>
          <span className={styles.statTrend}>+5% bulan ini</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Kelas Berjalan</span>
          <span className={styles.statValue}>24</span>
          <span className={styles.statTrend}>Stabil</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Lulus Interview</span>
          <span className={styles.statValue}>156</span>
          <span className={styles.statTrend}>+18% bulan ini</span>
        </div>
      </div>

      <div className={styles.gridSection}>
        {/* Main Panel: Recent Table */}
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>Aktivitas Peserta Terkini</h2>
            <span style={{ fontSize: '0.85rem', color: '#3b82f6', cursor: 'pointer', fontWeight: '600' }}>Lihat Semua</span>
          </div>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Nama Peserta</th>
                <th>Program/Aktivitas</th>
                <th>Status</th>
                <th>Waktu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Budi Santoso</td>
                <td>Ujian N4 Selesai</td>
                <td><span className={styles.badgeSuccess}>Lulus</span></td>
                <td>10 mnt lalu</td>
              </tr>
              <tr>
                <td>Siti Aminah</td>
                <td>Upload Dokumen Visa</td>
                <td><span className={styles.badgeWarning}>Pending Review</span></td>
                <td>1 jam lalu</td>
              </tr>
              <tr>
                <td>Andi Wijaya</td>
                <td>Mendaftar Program Basic</td>
                <td><span className={styles.badgeSuccess}>Aktif</span></td>
                <td>2 jam lalu</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Side Panel: System Logs or something */}
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>Notifikasi Sistem</h2>
          </div>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>📄</div>
              <div className={styles.activityDetail}>
                <p>30 Dokumen menunggu verifikasi</p>
                <span>Segera periksa tab dokumen</span>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>👥</div>
              <div className={styles.activityDetail}>
                <p>Jadwal Kelas Besok: 3 Sesi</p>
                <span>Instruktur: Bapak Tanaka</span>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>🏢</div>
              <div className={styles.activityDetail}>
                <p>2 Lowongan Baru Tayang</p>
                <span>Perusahaan Manufaktur Osaka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
