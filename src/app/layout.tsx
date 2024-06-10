import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/provider/Provider'
import { ClerkProvider } from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'
import { Toaster } from 'sonner'

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
      <ClerkProvider
        appearance={{
          baseTheme: neobrutalism,
        }}
      >
        <Provider>
          <Toaster theme={'light'} richColors />
          <body className={`${inter.className} overflow-x-hidden`}>
            {children}
          </body>
        </Provider>
      </ClerkProvider>
    </html>
  )
}
