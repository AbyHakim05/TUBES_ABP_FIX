import React from 'react';
import styles from '../AdminPages.module.css';

export default function DataPesertaPage() {
  return (
    <>
      <header className={styles.topNav}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Cari peserta..." className={styles.searchInput} />
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
          <h1>Data Peserta Terdaftar</h1>
          <p>DATA PESERTA</p>
          <span>Kelola dan verifikasi profil peserta pelatihan</span>
        </div>
        <button className={styles.actionButton}>Tambah Peserta</button>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <select style={{ padding: '0.4rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <option>Semua Program</option>
              <option>Bahasa Jepang N5</option>
              <option>Skill Manufaktur</option>
            </select>
            <select style={{ padding: '0.4rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <option>Status: Semua</option>
              <option>Lulus Verifikasi</option>
              <option>Pending</option>
            </select>
          </div>
        </div>

        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Lengkap</th>
              <th>Program Keahlian</th>
              <th>Domisili</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1001</td>
              <td><strong>Ahmad Fadli</strong><br/><span style={{fontSize: '0.8rem', color: '#64748b'}}>ahmad@example.com</span></td>
              <td>Bahasa Jepang N4</td>
              <td>Bandung</td>
              <td><span className={styles.badgeSuccess}>Verified</span></td>
              <td><button style={{padding: '0.4rem 0.8rem', borderRadius: '4px', border: 'none', background: '#e0f2fe', color: '#0284c7', cursor: 'pointer', fontWeight: '600'}}>Detail</button></td>
            </tr>
            <tr>
              <td>#1002</td>
              <td><strong>Maya Putri</strong><br/><span style={{fontSize: '0.8rem', color: '#64748b'}}>maya@example.com</span></td>
              <td>Skill Manufaktur</td>
              <td>Surabaya</td>
              <td><span className={styles.badgeWarning}>Pending</span></td>
              <td><button style={{padding: '0.4rem 0.8rem', borderRadius: '4px', border: 'none', background: '#e0f2fe', color: '#0284c7', cursor: 'pointer', fontWeight: '600'}}>Detail</button></td>
            </tr>
            <tr>
              <td>#1003</td>
              <td><strong>Reza Pratama</strong><br/><span style={{fontSize: '0.8rem', color: '#64748b'}}>reza@example.com</span></td>
              <td>Bahasa Jepang N5</td>
              <td>Jakarta</td>
              <td><span className={styles.badgeSuccess}>Verified</span></td>
              <td><button style={{padding: '0.4rem 0.8rem', borderRadius: '4px', border: 'none', background: '#e0f2fe', color: '#0284c7', cursor: 'pointer', fontWeight: '600'}}>Detail</button></td>
            </tr>
            <tr>
              <td>#1004</td>
              <td><strong>Desi Anwar</strong><br/><span style={{fontSize: '0.8rem', color: '#64748b'}}>desi@example.com</span></td>
              <td>Keperawatan (Kaigo)</td>
              <td>Semarang</td>
              <td><span className={styles.badgeWarning}>Pending</span></td>
              <td><button style={{padding: '0.4rem 0.8rem', borderRadius: '4px', border: 'none', background: '#e0f2fe', color: '#0284c7', cursor: 'pointer', fontWeight: '600'}}>Detail</button></td>
            </tr>
          </tbody>
        </table>
        
        <div style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', marginTop: '1rem' }}>
          <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Menampilkan 1-4 dari 1,248 peserta</span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button style={{ padding: '0.4rem 0.8rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '4px' }}>Sebelumnya</button>
            <button style={{ padding: '0.4rem 0.8rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '4px' }}>Selanjutnya</button>
          </div>
        </div>
      </div>
    </>
  );
}
