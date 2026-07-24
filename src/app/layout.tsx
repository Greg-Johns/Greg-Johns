
import { Nunito_Sans } from 'next/font/google';
import { AnalyticsWrapper } from '../components/Analytics';
import '../components/globals.css';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['900'],
  style: ['normal', 'italic'],
  variable: '--font-nunito-sans',
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
