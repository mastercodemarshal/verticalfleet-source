import React from "react";

import { Link } from "react-router-dom";

const SearchTags: React.FC = (): JSX.Element => {
  const path = window.location.pathname;

  return (
    <>
      <div className="xl:justify-center md:justify-start justify-between flex uppercase md:text-[18px] text-[14px] md:leading-[25px] leading-[22px] font-open_sans font-bold text-white">
        <Link
          to="/round-trip"
          className={`md:pb-[3px] md:mr-[109px] mr-[10px] focus:border-white text-center md:p-0 sm:px-[20px] px-[10px] py-[15px] md:bg-inherit bg-[#F3E351] md:rounded-none rounded-[10px] md:text-white text-black ${
            path.includes("round-trip") && "md:border-b-[3px]"
          }`}
        >
          round trip
        </Link>
        <Link
          to="/one-way"
          className="md:pb-[3px] md:mr-[109px] mr-[10px] focus:border-b-[3px] focus:border-white text-center md:p-0 sm:px-[20px] px-[10px] py-[15px] md:bg-inherit bg-white/[.2] md:rounded-none rounded-[10px]"
        >
          one way
        </Link>
        <Link
          to="/multy-city"
          className="md:pb-[3px] focus:border-b-[3px] focus:border-white text-center md:p-0 sm:px-[20px] px-[10px] py-[15px] md:bg-inherit bg-white/[.2] md:rounded-none rounded-[10px]"
        >
          multy-city
        </Link>
      </div>
    </>
  );
};

export default SearchTags;
