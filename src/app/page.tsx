import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { type Database } from './types/database'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: posts } = await supabase.from('posts').select('*, users(*)')
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welcome Twitter NextJS
      <AuthButtonServer />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  )
}
