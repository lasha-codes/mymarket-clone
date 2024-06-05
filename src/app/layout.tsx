import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/provider/Provider'
import { ClerkProvider } from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Provider>
        <ClerkProvider
          appearance={{
            baseTheme: neobrutalism,
          }}
        >
          <body className={`${inter.className} px-7 p-5`}>{children}</body>
        </ClerkProvider>
      </Provider>
    </html>
  )
}
