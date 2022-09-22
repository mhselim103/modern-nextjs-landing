import React from "react";
import { navData } from "./header.data";
// import * as Scroll from "react-scroll";
import brand from "../../../assets/logo.svg";
import Link from "next/link";
import {
  Link as NavLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-around gap-5 py-6">
      <Link href="/">
        <a>
          <Image src={brand} alt="logo" className="cursor-pointer" />
        </a>
      </Link>
      {/* desktop nav  */}
      <div>
        <div className="hidden gap-5 md:flex">
          {navData.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              smooth={true}
              activeClass="active"
              className="cursor-pointer"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <button className="hidden font-medium border-2 border-custom md:block btn text-custom">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
