import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '  novix vpn',
  description: ' novix vpn',
  generator: ' novix vpn'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
