import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bangalore Clothing Guide',
  description: 'Curated list of 70+ Thrift Stores, Surplus Warehouses & Factory Outlets',
  icons: {
    icon: 'https://res.cloudinary.com/dqwbkjfuh/image/upload/v1764588498/Screenshot_2025-11-26_at_6.58.01_PM_m1stjx.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}