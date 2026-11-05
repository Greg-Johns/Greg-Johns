
// import { DM_Serif_Display } from 'next/font/google';
import { Spectral } from 'next/font/google'
import { AnalyticsWrapper } from '../components/Analytics';
import '../components/globals.css';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-DM-Display',
  display: 'swap',
});

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spectral.className}>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
