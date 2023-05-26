import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
        An online journal of finily crafted, digital stuff by Greg Johns
        <br />
        A technical tinkerer from Texas ya&apos;ll
        <b>
          <Link href="https://twitter.com/greg_johns">@Greg_Johns</Link>
        </b>
      </p>
      <ThemeToggle />
    </footer>
  )
}
