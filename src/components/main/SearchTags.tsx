import React from "react";

import { Link } from "react-router-dom";

const SearchTags: React.FC = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default SearchTags;
