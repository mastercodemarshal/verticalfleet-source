import React from "react";
import { Link } from "react-router-dom";

const SearchPanel: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="absolute top-[260px] w-full px-[24px]">
        <div className="container mx-auto h-[168px] bg-[#10091D]/[.2] backdrop-blur-[5px] rounded-[5px] px-[30px] py-[20px]">
          <div className="md:justify-center flex uppercase text-[18px] leading-[25px] font-open_sans font-bold text-white">
            <Link
              to="/main"
              className="pb-[3px] px-[10px] mr-[109px] focus:border-b-[3px] focus:border-white"
            >
              round trip
            </Link>
            <Link
              to="/main"
              className="pb-[3px] px-[10px] mr-[109px] focus:border-b-[3px] focus:border-white"
            >
              one way
            </Link>
            <Link
              to="/main"
              className="pb-[3px] px-[10px] focus:border-b-[3px] focus:border-white"
            >
              multy-city
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPanel;
