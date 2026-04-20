'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'

export async function requestAdminAccess(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: 'Anda harus login terlebih dahulu.' }
  }

  // Check if already admin
  if (user.user_metadata?.role === 'admin') {
    return { error: 'Anda sudah merupakan admin.' }
  }

  const reason = formData.get('reason') as string

  if (!reason || reason.trim().length < 10) {
    return { error: 'Alasan harus minimal 10 karakter.' }
  }

  try {
    // Insert request into admin_requests table
    const { error } = await supabase
      .from('admin_requests')
      .insert([
        {
          user_id: user.id,
          email: user.email,
          reason,
          status: 'pending',
        }
      ])

    if (error) {
      console.error('Admin request error:', error)
      return { error: 'Gagal mengirim permintaan. Silakan coba lagi.' }
    }

    revalidatePath('/lainnya')
    return { success: true, message: 'Permintaan akses admin telah dikirim.' }
  } catch (error) {
    console.error('Error:', error)
    return { error: 'Terjadi kesalahan. Silakan coba lagi.' }
  }
}
