'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './AdminSidebar.module.css';
import LogoutButton from './LogoutButton';

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Data Peserta', href: '/admin/data-peserta' },
    { name: 'Program & Materi', href: '/admin/program-materi' },
    { name: 'Pengaturan', href: '/admin/pengaturan' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo} style={{ textDecoration: 'none' }}>
          <div className={styles.logoImageBox}>
            <Image 
              src="/Gambar_logo.png"
              alt="Logo LPK Mugiwara"
              width={40}
              height={40}
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
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Admin Profile Footer matching the screenshot */}
      <div className={styles.footerProfile}>
        <div className={styles.avatar}></div>
        <div>
          <span className={styles.userName}>Jacqueline Wright</span>
          <span className={styles.userRole}>Administrator</span>
        </div>
      </div>

      <div className={styles.logoutWrapper}>
        <LogoutButton />
      </div>
    </aside>
  );
}
