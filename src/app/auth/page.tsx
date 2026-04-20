'use client';

import React, { useState } from 'react';
import styles from './Auth.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { login } from './actions';

export default function AuthPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setErrorMessage('');
    const res = await login(formData);
    if (res?.error) {
      setErrorMessage(res.error);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        {/* The background image is handled by CSS, referencing /assets/login_hero.jpg */}
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

        <form className={styles.loginCard} action={handleSubmit}>
            <h2 className={styles.title}>Login</h2>
            
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
                name="identifier"
                placeholder="Email atau Nama Pengguna" 
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

          <button type="submit" className={styles.submitBtn} disabled={isLoading}>
            {isLoading ? 'Memproses...' : 'Login'}
          </button>

          <div className={styles.links}>
            <span className={styles.registerText}>Belum Memiliki Akun?</span>
            <span className={styles.orDivider}>Atau</span>
            <Link href="/auth/register">
              <span className={styles.registerLink}>Daftar</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
