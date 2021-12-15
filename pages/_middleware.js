import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
  const token = await getToken({
    req,
    secret: process.env.JWT_SECRET
  })

  const { pathname } = req.nextUrl
  console.log(pathname)

  // allow request if the following true
  if(pathname.includes('/api/auth') || token){
    return NextResponse.next()
  }

  if(!token && pathname !== '/login'){
    return NextResponse.redirect('/login')
  }
}