import React from "react";
import { navData } from "./header.data";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Header = () => {
  return (
    <div className="flex gap-5 justify-around">
      <Link>logo</Link>
      {/* desktop na  */}
      <div>
        <div className="hidden md:flex gap-5">
          {navData.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              smooth={true}
              activeClass="active"
              className="cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <button className="hidden md:block">Sign In</button>
      </div>
    </div>
  );
};

export default Header;
