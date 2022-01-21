import ActiveLink from "./ActiveLink";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const MainNav = (props) => {

  return (
    <nav>
      <ActiveLink href="/about">
        <a>about</a>
      </ActiveLink>
      <ActiveLink href="/">
        <a>Writing</a>
      </ActiveLink>
      <ActiveLink href="/art">
        <a>Art</a>
      </ActiveLink>
    </nav>
  );
};

export default MainNav;
