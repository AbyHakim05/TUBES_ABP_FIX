'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import styles from '@/app/pengaturan/Pengaturan.module.css'

type UserProfile = {
  email: string
  nama: string
  domisili: string
}

export default function UserProfileSettings() {
  const [profile, setProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data.user) return
      const { email, user_metadata } = data.user
      setProfile({
        email: email ?? '',
        nama: user_metadata?.nama ?? '',
        domisili: user_metadata?.domisili ?? '',
      })
    })
  }, [])

  if (!profile) {
    return <p>Memuat data pengguna...</p>
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div>
          <p className={styles.cardLabel}>Profil</p>
          <h2>{profile.nama || 'Nama Tidak Tersedia'}</h2>
        </div>
        <div className={styles.avatarCircle} />
      </div>
      <div className={styles.fieldRow}>
        <label htmlFor="fullname">Nama Lengkap</label>
        <input id="fullname" type="text" value={profile.nama} readOnly />
      </div>
      <div className={styles.fieldRow}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={profile.email} readOnly />
      </div>
      <div className={styles.fieldRow}>
        <label htmlFor="domisili">Domisili</label>
        <input id="domisili" type="text" value={profile.domisili} readOnly />
      </div>
    </div>
  )
}
