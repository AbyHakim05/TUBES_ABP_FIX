'use client';

import React, { FormEvent, useState } from 'react';
import styles from '../Auth.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signup } from '../actions';

export default function RegisterPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const password = formData.get('password') as string;
    const repassword = formData.get('repassword') as string;

    if (password !== repassword) {
      setErrorMessage('Password tidak cocok.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    const res = await signup(formData);
    
    if (res?.error) {
      let errorMsg = res.error;
      if (errorMsg.toLowerCase().includes('rate limit')) {
        errorMsg = 'Terlalu banyak permintaan email. Tunggu beberapa saat sebelum mencoba lagi.';
      }
      setErrorMessage(errorMsg);
      setIsLoading(false);
    } else if (res?.success) {
      // Redirect to verify page with email, nama, and domisili parameters
      const email = formData.get('email') as string;
      const nama = formData.get('nama') as string;
      const domisili = formData.get('domisili') as string;
      router.push(`/auth/verify?email=${encodeURIComponent(email)}&nama=${encodeURIComponent(nama)}&domisili=${encodeURIComponent(domisili)}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        {/* Background handled in CSS */}
      </div>
      
      <div className={styles.formSection}>
        <div className={styles.logoWrapper}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div className={styles.logoContent}>
              <div className={styles.logoImageBox}>
                <Image 
                  src="/Gambar_logo.png"
                  alt="Logo LPK Mugiwara"
                  width={50}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className={styles.logoText}>
                <span className={styles.logoTextBlue}>LPK</span> <span className={styles.logoHighlight}>MUGIWARA</span>
              </span>
            </div>
          </Link>
        </div>

        <form className={styles.loginCard} onSubmit={handleSubmit}>
          {/* Using Register for clarity, even though mockup says Login internally */}
          <h2 className={styles.title}>Register</h2>
          
          {errorMessage && (
            <div style={{
              background: '#fee2e2',
              color: '#991b1b',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              border: '1px solid #fca5a5'
            }}>
              <span>{errorMessage}</span>
              <button
                type="button"
                onClick={() => setErrorMessage('')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#991b1b',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  padding: '0',
                  lineHeight: '1'
                }}
              >
                ✕
              </button>
            </div>
          )}
          
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              name="nama"
              placeholder="Nama Lengkap" 
              className={styles.input} 
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              name="email"
              placeholder="Email Aktif" 
              className={styles.input} 
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              className={styles.input} 
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="password" 
              name="repassword"
              placeholder="Ulangi Password" 
              className={styles.input} 
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="text" 
              name="domisili"
              placeholder="Lokasi Domisili" 
              className={styles.input} 
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isLoading}>
            {isLoading ? 'Memproses...' : 'Daftar Sekarang'}
          </button>

          <div className={styles.links}>
            <span className={styles.registerText}>Sudah Memiliki Akun?</span>
            <Link href="/auth" style={{ textDecoration: 'none', color: 'currentcolor' }}>
              <span className={styles.registerLink}>Login di sini</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
