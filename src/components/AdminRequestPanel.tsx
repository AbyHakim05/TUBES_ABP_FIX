'use client'

import { useState } from 'react'
import { requestAdminAccess } from '@/app/lainnya/actions'

export default function AdminRequestPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    const formData = new FormData()
    formData.append('reason', reason)

    const result = await requestAdminAccess(formData)

    if (result.error) {
      setMessage(result.error)
    } else {
      setMessage(result.message || 'Permintaan berhasil dikirim!')
      setReason('')
      setTimeout(() => setIsOpen(false), 2000)
    }
    setIsLoading(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '12px 24px',
          borderRadius: '12px',
          border: 'none',
          background: '#3b82f6',
          color: 'white',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLButtonElement
          el.style.background = '#2563eb'
          el.style.transform = 'translateY(-2px)'
          el.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLButtonElement
          el.style.background = '#3b82f6'
          el.style.transform = 'translateY(0)'
          el.style.boxShadow = 'none'
        }}
      >
        <span>👨‍💼</span>
        {isOpen ? 'Tutup' : 'Minta Akses Admin'}
      </button>

      {isOpen && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1.5rem',
            background: '#f0f9ff',
            borderRadius: '12px',
            border: '1px solid #bfdbfe',
          }}
        >
          <h3 style={{ margin: '0 0 0.5rem', color: '#1e40af' }}>Permintaan Akses Admin</h3>
          <p style={{ margin: '0 0 1rem', color: '#475569', fontSize: '0.9rem' }}>
            Jelaskan alasan Anda ingin menjadi admin. Admin akan meninjau permintaan Anda.
          </p>

          <form onSubmit={handleSubmit}>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Tuliskan alasan Anda di sini..."
              required
              minLength={10}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #bfdbfe',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                minHeight: '100px',
                marginBottom: '1rem',
                boxSizing: 'border-box',
              }}
            />

            {message && (
              <p
                style={{
                  margin: '0 0 1rem',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: message.includes('Terjadi kesalahan') ? '#fee2e2' : '#dbeafe',
                  color: message.includes('Terjadi kesalahan') ? '#991b1b' : '#1e40af',
                  fontSize: '0.85rem',
                }}
              >
                {message}
              </p>
            )}

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#3b82f6',
                  color: 'white',
                  fontWeight: '600',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.7 : 1,
                }}
              >
                {isLoading ? 'Mengirim...' : 'Kirim Permintaan'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false)
                  setMessage('')
                  setReason('')
                }}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #bfdbfe',
                  background: 'white',
                  color: '#3b82f6',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
