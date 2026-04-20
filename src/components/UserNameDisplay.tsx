'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

type Props = {
  fallback?: string
  className?: string
}

export default function UserNameDisplay({ fallback = 'Pengguna', className }: Props) {
  const [name, setName] = useState<string>(fallback)

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data.user) return
      const userMetadata = data.user.user_metadata as { nama?: string } | undefined
      setName(userMetadata?.nama || data.user.email || fallback)
    })
  }, [fallback])

  return <span className={className}>{name}</span>
}
