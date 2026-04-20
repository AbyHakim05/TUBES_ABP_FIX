'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { createClient } from '@/utils/supabase/client'

type UserMetadataType = {
  email: string
  nama?: string
  domisili?: string
}

type Props = {
  children: (user: UserMetadataType | null) => ReactNode
}

export default function UserMetadata({ children }: Props) {
  const [user, setUser] = useState<UserMetadataType | null>(null)

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data.user) {
        setUser(null)
        return
      }

      const { email, user_metadata } = data.user
      setUser({
        email: email ?? '',
        nama: user_metadata?.nama ?? '',
        domisili: user_metadata?.domisili ?? '',
      })
    })
  }, [])

  return <>{children(user)}</>
}
