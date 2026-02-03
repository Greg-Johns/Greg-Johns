
import { AnalyticsWrapper } from '../components/Analytics';
import '../components/globals.css';

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
