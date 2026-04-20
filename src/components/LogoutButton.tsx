'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import styles from './LogoutButton.module.css'

interface LogoutButtonProps {
  variant?: 'default' | 'danger'
  showIcon?: boolean
}

export default function LogoutButton({ variant = 'default', showIcon = false }: LogoutButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      const supabase = createClient()
      await supabase.auth.signOut()
      router.push('/auth')
    } catch (error) {
      console.error('Logout error:', error)
      setIsLoading(false)
    }
  }

  const buttonClass = variant === 'danger' ? styles.dangerLogoutButton : styles.logoutButton

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isLoading}
      className={buttonClass}
    >
      {showIcon && <span className={styles.icon}>🚪</span>}
      {isLoading ? 'Keluar...' : 'Logout'}
    </button>
  )
}
