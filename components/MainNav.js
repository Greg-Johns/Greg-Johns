import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const MainNav = (props) => {

  return (
    <nav>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/">
        <a>Writingz</a>
      </Link>
      <Link href="/art">
        <a>Art</a>
      </Link>
    </nav>
  );
};

export default MainNav;
