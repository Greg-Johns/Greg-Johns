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

      {/* <Link href="/gardens"> */}
      {/*   <section> */}
      {/*     <h3>Crop rotation</h3> */}
      {/*     <time>06 Feb. 2023</time> */}
      {/*   </section> */}
      {/* </Link> */}
      <Link href="daws">
        <section>
          <h3>Dawn of the DAWs</h3>
          <time>31 May 2023</time>
        </section>
      </Link>
      {/* <Link href="auction_design"> */}
      {/*   <section> */}
      {/*     <h3>On auction designs</h3> */}
      {/*     <time>31 May 2023</time> */}
      {/*   </section> */}
      {/* </Link> */}
      <Link href="art_nft">
        <section>
          <h3>On art & NFTs</h3>
          <time>24 May 2023</time>
        </section>
      </Link>
      <Link href="stateofplay">
        <section>
          <h3>The state of play (on Ethereum today)</h3>
          <time>17 May 2023</time>
        </section>
      </Link>
      <Link href="nodegardens">
        <section>
          <h3>Node gardens</h3>
          <time>06 Feb. 2023</time>
        </section>
      </Link>
      <Link href="web3">
        <section>
          <h3>Web 3 & me</h3>
          <time>04 May 2022</time>
        </section>
      </Link>
      <Link href="teaparty">
        <section>
          <h3>A tea party</h3>
          <time>04 Mar. 2018</time>
        </section>
      </Link>
      <Link href="qpt">
        <section>
          <h3>A quicker pricing tool</h3>
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
