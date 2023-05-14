import Link from "next/link";
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <nav>
        <Link href="/" className='active'>
          Wrote
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/stuff">
          Stuff
        </Link>
      </nav>

      <h4>Index</h4>

      <Link href="/sketches">
        <section>
          <h3>p5 test</h3>
        </section>
      </Link>
      <Link href="nodegardens">
        <section>
          <h3>Generative Art Gardens</h3>
          <time>06 Feb. 2023</time>
        </section>
      </Link>
      <Link href="web3">
        <section>
          <h3>Web 3 & Me</h3>
          <time>04 May 2022</time>
        </section>
      </Link>
      <Link href="teaparty">
        <section>
          <h3>The Tea Party</h3>
          <time>04 Mar. 2018</time>
        </section>
      </Link>
      <Link href="qpt">
        <section>
          <h3>A Quicker Pricing Tool</h3>
          <time>06 Feb. 2015</time>
        </section>
      </Link>
      <Link href="iojs">
        <section>
          <h3>io.js</h3>
          <time>10 Jan. 2015</time>
        </section>
      </Link>
      <Link href="time">
        <section>
          <h3>Time Winder</h3>
          <time>10 Nov. 2015</time>
        </section>
      </Link>
      <Link href="grokker">
        <section>
          <h3>Grokker</h3>
          <time>3 Jul. 2014</time>
        </section>
      </Link>
    </>
  )
}
