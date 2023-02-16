import './globals.css'
import Footer from './Footer'
import HmLink from './HmLink'
import React from 'react'

export default function GalleryLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main className='mainGrid'>
      <HmLink />
        {children}
      <Footer />
    </main>
  )
}

