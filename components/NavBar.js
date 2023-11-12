"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function() {
  const pathName = usePathname()
  return <nav className='w-[20vw] fixed'>
    <Link href="/home" className={`${pathName.startsWith("/home") ? "text-[red]" : ""} block`}>Home</Link>
    <Link href="/search" className={`${pathName.startsWith("/search") ? "text-[red]" : ""} block`}>Search</Link>
    <Link href="/profile" className={`${pathName.startsWith("/profile") ? "text-[red]" : ""} block`}>Profiles</Link>
  </nav>
}
