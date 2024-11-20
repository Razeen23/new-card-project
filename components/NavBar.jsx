import React from 'react';
import {
  BiHomeAlt,
  BiUser,
} from 'react-icons/bi';
import { MdOutlineProductionQuantityLimits ,MdRateReview} from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

import { FaRegHandshake } from "react-icons/fa6";


import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-white/30 h-[60px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2x1 text-black/90">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            to="section1"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="section2"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="section3"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <MdOutlineProductionQuantityLimits />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="section4"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <FaRegHandshake />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="section5"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <MdRateReview />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="section6"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <RiContactsFill />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;