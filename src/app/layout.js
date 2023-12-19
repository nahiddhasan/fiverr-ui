import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
const inter = Inter({ subsets: ['latin'] })
import Featured from "@/components/featured/Featured";

export const metadata = {
  title: 'Fiverr Clone',
  description: 'Fiverr Clone App',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className='container'>
          <Navbar />
          {children}
          <Footer/>
          </div>
        </body>
    </html>
  )
}
