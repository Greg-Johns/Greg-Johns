import { AnalyticsWrapper } from './Analytics';
import './globals.css';
import Header from './Header';
import Footer from './Footer';

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
          <Footer />
        </main>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
