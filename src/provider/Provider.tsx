'use client'

import { Provider as ReduxProvider } from 'react-redux'
import store from '@/lib/store'
import { registerAccount } from '@/app/(auth)/utils/auth'
import { useEffect } from 'react'
import { useSession } from '@clerk/nextjs'
const Provider = ({ children }: { children: React.ReactNode }) => {
  const { session, isLoaded } = useSession()
  useEffect(() => {
    registerAccount()
  }, [isLoaded, session])

  return <ReduxProvider store={store}>{children}</ReduxProvider>
}

export default Provider
