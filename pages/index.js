import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import Link from "next/link";
import GJHeader from "../components/GJHeader";
// import MainNav from "../components/MainNav";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <GJHeader />

      <Link href="blog/grokker">
        <section>
          <h3>Grokker</h3>
          <time>10 Jan. 2017</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Link href="blog/iojs">
        <section>
          <h3>iojs</h3>
          <time>10 Jan. 2017</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Link href="blog/qpt">
        <section>
          <h3>A Quicker Pricing Tool</h3>
          <time>10 Jan. 2017</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Link href="blog/teaparty">
        <section>
          <h3>Tea Party</h3>
          <time>10 Jan. 2017</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Link href="blog/time">
        <section>
          <h3>Time</h3>
          <time>10 Jan. 2017</time>
          <p>Some stuff here...</p>
        </section>
      </Link>

      <Footer />
    </>
  );
}
