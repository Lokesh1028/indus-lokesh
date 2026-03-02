import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Indus Homes | Abhi\'s Aloha - Premium Luxury Villas in Hyderabad',
  description: 'Discover Abhi\'s Aloha by Indus Homes — 240 premium 3 BHK luxury villas on 16.1 acres at Pasumamula, Hayathnagar, Hyderabad. Ready to move. Starting ₹1.22 Cr.',
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
