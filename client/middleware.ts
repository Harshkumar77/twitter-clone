import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname === '/') {
  //   return NextResponse.redirect(new URL('/profile', request.url))
  // }
  // if (request.nextUrl.pathname === '/profile') {
  //   console.log(44);
  //   return NextResponse.next()
  // }
  //
  // const cookiesStore = cookies()
  // if (
  //   cookiesStore.has('ACCESS_TOKEN') &&
  //   (await validateToken(cookiesStore.get('ACCESS_TOKEN')?.value!))
  // ) {
  //   return <></>
  // }
}
