import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/img/main/logo.png";

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="top-0 bg-[#10091D]/[.3] absolute w-full z-50">
      <div className="container mx-auto flex h-[80px] items-center px-[10px]">
        <Link className="mr-auto w-[165px] h-[15px]" to="/round-trip">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex items-center text-[14px] text-white font-light font-open_sans leading-[19.07px]">
          <div className="md:flex text-right items-center">
            <div className="cursor-pointer md:mr-[30px] text-right">
              info@verticalfleet.com
            </div>
            <div className="md:w-[1px] w-full md:h-[40px] h-[1px] bg-gray-600"></div>
            <div className="ml-[30px] cursor-pointer">+1-888-883-4146</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
