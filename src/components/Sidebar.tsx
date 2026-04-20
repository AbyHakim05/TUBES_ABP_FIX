'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Menu Utama', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Kelas Saya', href: '/kelas-saya' },
    { name: 'Materi Belajar', href: '/materi' },
    { name: 'Lowongan Kerja', href: '/lowongan-kerja' },
    { name: 'Progress Belajar', href: '/progress-belajar' },
    { name: 'Sertifikat', href: '/sertifikat' },
    { name: 'Lainnya', href: '/lainnya' },
    { name: 'Pengaturan', href: '/pengaturan' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo} style={{ textDecoration: 'none' }}>
          <div className={styles.logoImageBox}>
            <Image 
              src="/Gambar_logo.png"
              alt="Logo LPK Mugiwara"
              width={50}
              height={50}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span className={styles.logoText}>
            <span className={styles.logoTextBlue}>LPK</span> <span className={styles.logoHighlight}>MUGIWARA</span>
          </span>
        </Link>
      </div>

      <nav className={styles.menuList}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`${styles.menuItem} ${
              pathname === item.href ? styles.active : ''
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
