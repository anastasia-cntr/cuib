"use client";

import Container from "../Container";
import Logo from "./Logo";
import Links from "./Links";
import UserMenu from "./UserMenu";
import Socials from "./Socials";
import LinksMenu from "./LinksMenu";

const Navbar = () => {
  return (
    <nav className="fixed w-full py-2">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <div className="md:block hidden">
            <Logo />
          </div>
          <div className="lg:gap-[1rem] lg:w-auto md:w-auto md:px-0 px-2 w-full justify-between flex flex-row items-center gap-2">
            <LinksMenu />
            <Links />
            <div className="flex flex-row gap-2">
              <Socials />
              <UserMenu />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;