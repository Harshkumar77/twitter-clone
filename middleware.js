import { NextResponse } from 'next/server'
 
/**
 * @constructor
 * @param {import('next/server').NextRequest} request 
 */
export async function middleware(request) {
   if(new URL(request.url).pathname === "/")
    NextResponse.redirect(new URL("/home" , request.url))
}
 
