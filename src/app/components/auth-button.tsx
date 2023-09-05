'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export function AuthButton() {
  const supabase = createClientComponentClient()
  const handlerSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback', //
      },
    })
  }
  const handlerSignOut = async () => {
    await supabase.auth.signOut()
  }
  return (
    <header>
      <button
        onClick={handlerSignIn}
        type="button"
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
      >
        Sign in with Github
      </button>
      <button onClick={handlerSignOut}>Sign Out</button>
    </header>
  )
}
