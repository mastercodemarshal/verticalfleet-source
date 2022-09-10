import React from "react";

import { Link } from "react-router-dom";

const SearchTags: React.FC = (): JSX.Element => {
  const path = window.location.pathname;

  return (
    <>
      <div className="xl:justify-center md:justify-start justify-between flex uppercase md:text-[18px] text-[14px] md:leading-[25px] leading-[22px] font-open_sans font-bold text-white">
        <Link
          to="/round-trip"
          className={`md:pb-[3px] md:mr-[109px] md:bg-inherit mr-[10px] text-center md:p-0 sm:px-[20px] px-[10px] py-[15px] md:rounded-none rounded-[10px] md:text-white ${
            path.includes("round-trip")
              ? "md:border-b-[3px] bg-[#F3E351] text-black"
              : "bg-white/[.2] md:no-underline underline"
          }`}
        >
          round trip
        </Link>
        <Link
          to="/one-way"
          className={`md:pb-[3px] md:mr-[109px] md:bg-inherit mr-[10px] text-center md:p-0 sm:px-[20px] px-[20px] py-[15px] md:rounded-none rounded-[10px] md:text-white ${
            path.includes("one-way")
              ? "md:border-b-[3px] bg-[#F3E351] text-black"
              : "bg-white/[.2] md:no-underline underline"
          }`}
        >
          one way
        </Link>
        <Link
          to="/multy-city"
          className={`md:pb-[3px] md:mr-[109px] md:bg-inherit mr-[10px] text-center md:p-0 sm:px-[20px] px-[10px] py-[15px] md:rounded-none rounded-[10px] md:text-white ${
            path.includes("multy-city")
              ? "md:border-b-[3px] bg-[#F3E351] text-black"
              : "bg-white/[.2] md:no-underline underline"
          }`}
        >
          multy city
        </Link>
      </div>
    </>
  );
};

export default SearchTags;
