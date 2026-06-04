import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';

 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {

    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
console.log("Session Proxy", session);
if (!session) {
    return NextResponse.redirect(new URL('/signin', request.url))
    
}

}
 
export const config = {
  matcher: [ '/destinations/:path*', '/booking-list/:path*', '/book-destination/:path*', '/profile/:path*' ],
}