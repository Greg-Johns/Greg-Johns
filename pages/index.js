import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import Link from "next/link";
import GJHeader from "../components/GJHeader";
import Footer from "../components/Footer";

// const Footer = () => (
//   <h1>foo</h1>
// );

// const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <>
      <GJHeader />
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Writing</a>
        </Link>
        <Link href="/art">
          <a>Art</a>
        </Link>
      </nav>
      <Link href="blog/ants">
        <section>
          <h3>Ants</h3>
          <time>10 Jan. 2017</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Link href="blog/grokker">
        <section>
          <h3>Grokker</h3>
          <time>10 Jan. 2017</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Link href="blog/io.js">
        <section>
          <h3>io.js</h3>
          <time>10 Jan. 2017</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Link href="blog/qpt">
        <section>
          <h3>QPT</h3>
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
      <Link href="blog/wanderer">
        <section>
          <h3>Wanderer</h3>
          <time>10 Jan. 2017</time>
          <p>Some stuff here...</p>
        </section>
      </Link>
      <Footer />
    </>
  );
}
