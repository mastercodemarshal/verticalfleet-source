import React from "react";

import SearchForm from "./SearchForm";
import SearchTags from "./SearchTags";

const SearchPanel: React.FC = (): JSX.Element => {
  return (
    <div className="container mx-auto bg-[#10091D]/[.2] backdrop-blur-[5px] rounded-[5px] px-[30px] py-[20px]">
      <SearchTags />
      <div className="mt-[30px]">
        <SearchForm />
      </div>
    </div>
  );
};

export default SearchPanel;
