import './globals.css'
import Footer from './Footer'
import HmLink from './HmLink'
import React from 'react'

export default function MarkdownLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main className='mainGrid'>
      <HmLink />
      <article>
        {children}
      </article>
      <Footer />
    </main>
  )
}

