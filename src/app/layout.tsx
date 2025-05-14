// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SoftSell | Sell Your Unused Software Licenses',
  description: 'Get cash for your unused software licenses quickly and securely with SoftSell.',
  keywords: 'software resale, sell software licenses, unused software, license marketplace',
  openGraph: {
    title: 'SoftSell | Sell Your Unused Software Licenses',
    description: 'Get cash for your unused software licenses quickly and securely with SoftSell.',
    url: 'https://softsell.example.com',
    siteName: 'SoftSell',
    images: [
      {
        url: 'https://softsell.example.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}