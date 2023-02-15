import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
        The personal website of one Gregory Johns:  designer | developer | technology tinkerer & middle-road maxi from Texas ya’ll.
        <b>
          <Link href="https://twitter.com/greg_johns">@Greg_Johns</Link>
        </b>
      </p>
      <ThemeToggle />
    </footer>
  )
}
