import dynamic from "next/dynamic";
import Link from "next/link";
import GJHeader from "../components/GJHeader";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <GJHeader premsg="Stuff" postmsg="said" />

      <Link href="blog/teaparty">
        <section>
          <h3>The Tea Party</h3>
          <time>04 Mar. 2018</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Link href="blog/qpt">
        <section>
          <h3>A Quicker Pricing Tool</h3>
          <time>06 Feb. 2015</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Link href="blog/iojs">
        <section>
          <h3>io.js</h3>
          <time>10 Jan. 2015</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Link href="blog/time">
        <section>
          <h3>It's About Time</h3>
          <time>10 Nov. 2015</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Link href="blog/grokker">
        <section>
          <h3>Grokker</h3>
          <time>3 Jul. 2014</time>
          <p>Some stuff here...</p>
        </section>
      </Link>

      <Footer />
    </>
  );
}
