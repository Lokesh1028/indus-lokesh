import type { Metadata } from 'next'
import SmoothScroll from '@/components/SmoothScroll'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sunil Reddy | VipHomes Partner Projects & Real Estate Vision',
  description: 'Sunil Reddy Kondakrindi — founder of Indus Homes and landowner-share partner in premium Telangana developments including Bliss In The Woods, Farm Hills and Indus Homes.',
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
