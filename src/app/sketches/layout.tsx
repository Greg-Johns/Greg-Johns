import type { AppProps } from 'next/app';
import '../globals.css'
import Header from '../p5Header'
/* import Footer from '../Footer' */
//import error from './error'
//import ErrorBoundary from 'react'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className='mainGrid'>
          <Header />
            <div className='scroll-shadows'>
              {children}
            </div>
          <footer>...</footer>
        </main>
      </body>
    </html>
  )
}
