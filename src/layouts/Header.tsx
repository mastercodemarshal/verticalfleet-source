import React from "react";

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="top-0 bg-[#10091D]/[.3] fixed w-full z-50">
      <div className="container mx-auto flex h-[80px] items-center">
        <div className="mr-auto flex-none">
          <div className="font-light text-[34px] text-white font-raleway leading-[39.92px]">
            VerticalFleet
          </div>
          <div className="uppercase font-normal text-white/[0.5] font-raleway text-[14px] tracking-[.09em] leading-[16.44px]">
            full-service provider
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-[14px] text-white font-light mr-[30px] font-open_sans leading-[19.07px]">
            info@verticalfleet.com
          </div>
          <div className="w-[1px] h-[40px] bg-gray-600"></div>
          <div className="text-[14px] ml-[30px] text-white font-light font-open_sans leading-[19.07px]">
            +1-888-883-4146
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
