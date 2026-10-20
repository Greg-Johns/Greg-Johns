import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
        An online journal of finally crafted, digital stuff by Greg Johns
        <b>
          <Link href="https://twitter.com/greg_johns">@Greg_Johns</Link>
        </b>
      </p>
      <ThemeToggle />
    </footer>
  )
}
