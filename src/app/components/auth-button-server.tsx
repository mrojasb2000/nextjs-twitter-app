import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { AuthButtonClient } from './auth-button-client'

export async function AuthButtonServer() {
  const supabase = createRouteHandlerClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return <AuthButtonClient session={session} />
}
