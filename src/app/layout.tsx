
import { DM_Serif_Display } from 'next/font/google';
import { AnalyticsWrapper } from '../components/Analytics';
import '../components/globals.css';

const nunitoSans = DM_Serif_Display({
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
    <html lang="en" className={nunitoSans.variable}>
      <head />
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
