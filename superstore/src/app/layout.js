import Navbar  from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import GlobalState from '@/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Super Store',
  description: 'Buy What You Want',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar/>
          <main>{children}</main>
        </GlobalState>
        </body>
    </html>
  )
}
