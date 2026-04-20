'use client';

import React, { useEffect, useState } from 'react';
import styles from './Verify.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { verifyEmail, resendVerificationEmail } from '../actions';

export default function VerifyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const email = searchParams.get('email') || '';
  const nama = searchParams.get('nama') || '';
  const domisili = searchParams.get('domisili') || '';
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (!email) {
      setErrorMessage('Email tidak ditemukan. Silakan daftar kembali.');
    }
  }, [email]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0 && !canResend) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown, canResend]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token) {
      setErrorMessage('Kode verifikasi harus diisi.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    const formData = new FormData();
    formData.append('email', email);
    formData.append('token', token);
    formData.append('nama', nama);
    formData.append('domisili', domisili);

    const res = await verifyEmail(formData);
    
    if (res?.error) {
      setErrorMessage(res.error);
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (!canResend) return;

    setIsLoading(true);
    setErrorMessage('');

    const formData = new FormData();
    formData.append('email', email);

    const res = await resendVerificationEmail(formData);

    if (res?.error) {
      setErrorMessage(res.error);
    } else {
      setSuccessMessage(res?.message || 'Kode verifikasi baru telah dikirim!');
      setCanResend(false);
      setCountdown(60);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.wrapper}>
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

      <div className={styles.verifyCard}>
        <h2 className={styles.title}>Verifikasi Email</h2>
        
        <p className={styles.emailInfo}>
          Kode verifikasi telah dikirim ke:<br />
          <strong>{email}</strong>
        </p>

        {errorMessage && (
          <div className={styles.errorBox}>
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className={styles.successBox}>
            {successMessage}
          </div>
        )}

        <form onSubmit={handleVerify}>
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              placeholder="Masukkan Kode Verifikasi (8 digit)" 
              className={styles.input}
              value={token}
              onChange={(e) => setToken(e.target.value)}
              disabled={isLoading}
              maxLength={8}
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={isLoading || !token}
          >
            {isLoading ? 'Memproses...' : 'Verifikasi'}
          </button>
        </form>
        
        <div className={styles.resendSection}>
          <p className={styles.resendText}>
            Tidak menerima kode?
          </p>
          <button 
            onClick={handleResend}
            className={styles.resendBtn}
            disabled={!canResend || isLoading}
          >
            {canResend ? 'Kirim Ulang Kode' : `Tunggu ${countdown}s`}
          </button>
        </div>
      </div>
    </div>
  );
}
