import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VipHomes | Premium Real Estate in Narsingi, Gandipet & Hyderabad',
  description: 'Vishwaprerana Creative Homes (OPC) Pvt Ltd — premium residential developments in Narsingi, Gandipet, Kokapet & Hyderabad. Your trusted real estate partner in Telangana.',
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
