import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname;

  // Proteksi rute-rute privat
  const isPrivateRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/admin') || pathname.startsWith('/kelas-saya');
  const isAdminRoute = pathname.startsWith('/admin');
  
  if (!user && isPrivateRoute) {
    // Apabila user belum login tapi mau masuk rute privat, tendang ke login
    const url = request.nextUrl.clone()
    url.pathname = '/auth'
    return NextResponse.redirect(url)
  }

  // Proteksi admin routes - hanya admin yang bisa akses
  if (user && isAdminRoute) {
    const role = user.user_metadata?.role || 'peserta'
    if (role !== 'admin') {
      // Jika user bukan admin, redirect ke dashboard peserta
      const url = request.nextUrl.clone()
      url.pathname = '/dashboard'
      return NextResponse.redirect(url)
    }
  }

  // Jika user sudah login (punya session), dan dia mencoba buka /auth
  if (user && pathname.startsWith('/auth')) {
    const url = request.nextUrl.clone()
    const role = user.user_metadata?.role || 'peserta'
    url.pathname = role === 'admin' ? '/admin/dashboard' : '/dashboard'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
