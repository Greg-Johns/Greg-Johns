import dynamic from "next/dynamic";
import Link from "next/link";
import GJHeader from "../components/GJHeader";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <GJHeader premsg="Stuff" postmsg="wrote" />

      <Link href="blog/web3">
        <section>
          <h3>Web 3</h3>
          <time>0</time>
        </section>
      </Link>
      <Link href="blog/teaparty">
        <section>
          <h3>The Tea Party</h3>
          <time>04 Mar. 2018</time>
          <p>
            Math students + information + conversations + tea = Party
          </p>
        </section>
      </Link>
      <Link href="blog/qpt">
        <section>
          <h3>A Quicker Pricing Tool</h3>
          <time>06 Feb. 2015</time>
          <p>
            The dawning of the S.P.A. and FrontEnd frameworks.
            Today I finally got to do something I've been wanting to do for a while.
          </p>
        </section>
      </Link>
      <Link href="blog/iojs">
        <section>
          <h3>io.js</h3>
          <time>10 Jan. 2015</time>
          <p>
            When some of the core node.js developers branched the project earlier 
            this year into io.js. I thought I would pitch in the logo design frenzy 
            with a design inspired by node's green hex and the 3D boxy look that's 
            all the rage now days. 
          </p>
        </section>
      </Link>
      <Link href="blog/time">
        <section>
          <h3>It's About Time</h3>
          <time>10 Nov. 2015</time>
          <p>
            While working in Verizon's R&D lab's I had some time to think about time. 
            Not just as it pertains to the users experience but also as a function of 
            the system itself, like a clock interface. This helps you think about all 
            sorts of things as potential interfaces to measures time.
          </p>
        </section>
      </Link>
      <Link href="blog/grokker">
        <section>
          <h3>Grokker</h3>
          <time>3 Jul. 2014</time>
          <p>
            Grokker is a digital tool for analyzing customer purchasing trends and 
            better optimize inventory by intelligently measuring the connections 
            between a grocers marketing campaigns, product pricing and brand loyalty.
          </p>
        </section>
      </Link>

      <Footer />
    </>
  );
}
