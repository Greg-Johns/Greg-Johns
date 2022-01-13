import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import Link from "next/link";
import GJHeader from "../components/GJHeader";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
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
      <p>@greg_johns greg_johns.eth Designer/Deverloper/Writer</p>
      <ul>
        <li>@greg_johns</li>
        <li>greg_johns.eth</li>
        <li>Designer | Developer | Writer</li>
      </ul>
      <h6>from</h6>
      <h5>Texas</h5>
      <ThemeToggle />
    </main>
  );
}
