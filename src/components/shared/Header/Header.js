import React from "react";
import { navData } from "./header.data";
import brand from "../../../assets/logo.svg";
import * as Scroll from "react-scroll";
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
    <nav className="fixed left-0 right-0 z-10 " id="navbar">
      <div className="flex items-center justify-around gap-5 py-6 bg-white shadow-sm">
        <NavLink to="home" smooth={true} ffset={50} duration={500}>
          <Image src={brand} alt="logo" className="cursor-pointer" />
        </NavLink>
        {/* desktop nav  */}
        <div>
          <div className="hidden gap-5 md:flex">
            {navData.map((item, index) => (
              <NavLink
                spy={true}
                to={item.path}
                key={index}
                smooth={true}
                // ffset={-200}
                duration={500}
                activeClass="active"
                className="cursor-pointer"
                spyThrottle={500}
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
    </nav>
  );
};

export default Header;
