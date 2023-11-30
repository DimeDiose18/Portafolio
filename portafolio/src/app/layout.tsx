import type { Metadata } from 'next'
import './ui/globals.css'


export const metadata: Metadata = {
  title: 'Diose Lemus',
  description: 'Portafolio web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
