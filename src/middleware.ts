import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextRequest } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/sell-item(.*)'])

export default clerkMiddleware((_, req: NextRequest) => {
  if (isProtectedRoute(req)) {
    _().protect({ unauthenticatedUrl: new URL('/login', req.url) as any })
  }
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
