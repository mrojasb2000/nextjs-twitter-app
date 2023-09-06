import { AuthButtonServer } from '../components/auth-button-server'

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-72">
        Login to NextJS Twitter Clone
        <AuthButtonServer />
      </div>
    </>
  )
}
