import type { Metadata } from 'next'
import SmoothScroll from '@/components/SmoothScroll'
import './globals.css'

export const metadata: Metadata = {
  title: 'VipHomes | Our Projects & Real Estate Vision',
  description: 'VipHomes (Vishwaprerana Creative Homes) — own and partnered premium developments across Telangana, including VIP Creative Homes, Bliss In The Woods, Farm Hills and Indus Homes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
