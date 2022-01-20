import Link from "next/link";

const MainNav = () => (
  <nav>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/">
      <a>Writing</a>
    </Link>
    <Link href="/art">
      <a>Art</a>
    </Link>
  </nav>
);

export default MainNav;
