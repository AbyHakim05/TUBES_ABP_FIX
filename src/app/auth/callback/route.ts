import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

/**
 * Email verification callback route
 * Ini dipanggil ketika user klik link di email atau setelah verifyOtp
 * URL format: /auth/callback?code=xxxxx
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') || '/dashboard'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      return NextResponse.redirect(new URL(next, request.url))
    }
  }

  // Return to an error page if code is missing
  return NextResponse.redirect(new URL('/auth?error=invalid_verification', request.url))
}
