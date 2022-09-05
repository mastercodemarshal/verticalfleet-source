import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="top-0 bg-[#10091D]/[.3] fixed w-full z-50">
      <div className="container mx-auto flex h-[80px] items-center">
        <div className="mr-auto cursor-pointer">
          <div className="font-light text-[34px] text-white font-raleway leading-[39.92px]">
            VerticalFleet
          </div>
          <div className="uppercase font-normal text-white/[0.5] font-raleway text-[14px] tracking-[.09em] leading-[16.44px]">
            full-service provider
          </div>
        </div>
        <div className="flex items-center text-[14px] text-white font-light font-open_sans leading-[19.07px]">
          <Link to="/" className="mr-5 underline">
            Main
          </Link>
          <Link to="/landing-1" className="mr-5 underline">
            Landing1
          </Link>
          <Link to="/landing-2" className="mr-[100px] underline">
            Landing2
          </Link>
          <div className="cursor-pointer mr-[30px]">info@verticalfleet.com</div>
          <div className="w-[1px] h-[40px] bg-gray-600"></div>
          <div className="ml-[30px] cursor-pointer">+1-888-883-4146</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
