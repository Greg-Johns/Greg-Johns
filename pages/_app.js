import '../styles/globals.css';

export default function Nextra({ Component, pageProps }) {
  return (
    <main className="mainGrid">
      <Component {...pageProps} />
    </main>
  )};
