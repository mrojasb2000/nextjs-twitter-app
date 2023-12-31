import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Twitter Next App',
  description: 'Generated by BRAM solutions & Co.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
