import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import Header from './Header'
import Footer from './Footer'
//import error from './error'
//import ErrorBoundary from 'react'

/* export default function RootLayout({ children }: { */
/*   children: React.ReactNode */
/* }) { */
export default function RootLayout({ children }: AppProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className='mainGrid'>
          <Header />
            <div className='scroll-shadows'>
            {children}
            </div>
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  )
}
