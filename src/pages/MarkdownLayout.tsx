import '../app/globals.css'
import Footer from '../app/Footer'
import HmLink from '../app/HmLink'

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

