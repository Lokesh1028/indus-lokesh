import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Indus Lokesh | AURELIA - Luxury Living Redefined',
  description: 'Experience luxury living at AURELIA by Indus Lokesh. Premium villas with world-class amenities, designed for those who seek the extraordinary.',
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
