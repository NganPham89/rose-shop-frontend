import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rose Shop',
  description: 'Rose Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
