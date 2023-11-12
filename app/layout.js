import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })
export const revalidate = 1


export const metadata = {
  title: 'Twitter',
  description: 'Created my own since elon killed the old one',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex `}>
        <NavBar />
        <div className='md:w-[60vw] mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
