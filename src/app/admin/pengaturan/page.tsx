import React from 'react';
import styles from '../AdminPages.module.css';

export default function AdminManagementPage() {
  return (
    <>
      <header className={styles.topNav}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Cari admin..." className={styles.searchInput} />
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
          <h1>Manajemen Admin</h1>
          <p>ADMIN MANAGEMENT</p>
          <span>Kelola akun administrator dan hak akses</span>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>Daftar Administrator</h2>
        </div>

        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Nama Admin</th>
              <th>Email</th>
              <th>Role</th>
              <th>Bergabung Sejak</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Jacqueline Wright</strong></td>
              <td>jacqueline@lpkmugiwara.com</td>
              <td><span style={{background: '#3b82f6', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.85rem'}}>Super Admin</span></td>
              <td>01 Jan 2024</td>
              <td><span className={styles.badgeSuccess}>Aktif</span></td>
              <td><button style={{padding: '0.4rem 0.8rem', borderRadius: '4px', border: 'none', background: '#e0f2fe', color: '#0284c7', cursor: 'pointer', fontWeight: '600'}}>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.panel} style={{marginTop: '2rem'}}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>Permintaan Promosi Admin</h2>
        </div>

        <div style={{padding: '1rem', textAlign: 'center', color: '#64748b'}}>
          <p>Tidak ada permintaan promosi saat ini</p>
        </div>
      </div>
    </>
  );
}
