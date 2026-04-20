'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const identifier = (formData.get('identifier') as string)?.trim() || ''
  const password = formData.get('password') as string

  // Validation
  if (!identifier || !password) {
    return { error: 'Email atau nama pengguna dan password harus diisi.' }
  }

  let email = identifier

  // Jika identifier bukan email, cari by nama di profiles table
  if (!identifier.includes('@')) {
    try {
      const { data, error: searchError } = await supabase
        .from('profiles')
        .select('email')
        .ilike('nama', identifier)
        .single()

      if (searchError || !data) {
        return { error: 'Email atau nama pengguna tidak ditemukan.' }
      }

      email = data.email
    } catch (error) {
      console.error('Error searching profile:', error)
      return { error: 'Terjadi kesalahan saat mencari akun.' }
    }
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  const role = data?.user?.user_metadata?.role || 'peserta'
  revalidatePath('/', 'layout')
  if (role === 'admin') {
    redirect('/admin/dashboard')
  }
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const repassword = formData.get('repassword') as string

  const nama = formData.get('nama') as string
  const domisili = formData.get('domisili') as string

  if (!email || !password || !nama || !domisili) {
    return { error: 'Semua kolom harap diisi.' }
  }

  if (password !== repassword) {
    return { error: 'Password tidak cocok.' }
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nama,
        domisili,
        role: 'peserta',
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    }
  })

  if (error) {
    return { error: error.message }
  }

  // Store email in session for verification page
  return { 
    success: true, 
    email,
    message: 'Kode verifikasi telah dikirim ke email Anda.' 
  }
}

export async function verifyEmail(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const token = formData.get('token') as string
  const nama = formData.get('nama') as string
  const domisili = formData.get('domisili') as string

  if (!email || !token) {
    return { error: 'Email dan kode verifikasi harus diisi.' }
  }

  const { error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: 'email',
  })

  if (error) {
    return { error: error.message }
  }

  // Get user ID yang baru saja di-verify
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  
  if (userError || !user) {
    return { error: 'Gagal mendapatkan data user.' }
  }

  // Insert ke profiles table
  try {
    await supabase
      .from('profiles')
      .insert([
        {
          id: user.id,
          email,
          nama,
          domisili,
          role: 'peserta',
        }
      ])
  } catch (error) {
    console.error('Error inserting profile:', error)
    // Tetap lanjut meskipun error insert (user sudah terverifikasi)
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function resendVerificationEmail(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string

  if (!email) {
    return { error: 'Email harus diisi.' }
  }

  const { error } = await supabase.auth.resend({
    type: 'signup',
    email,
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true, message: 'Kode verifikasi baru telah dikirim.' }
}
