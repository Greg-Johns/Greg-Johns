import '../styles/globals.css';

export default function Nextra({ Component, pageProps }) {
  return (
    <main class="mainGrid">
      <Component {...pageProps} />
    </main>
  )};
