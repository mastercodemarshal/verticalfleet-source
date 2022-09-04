import React from "react";

import Services from "../components/common/Services";
import SearchPanel from "../components/main/SearchPanel";

const MainPage: React.FC = (): JSX.Element => {
  return (
    <div className="relative">
      <div className="bg-[url('assets/img/landing/background.png')] bg-cover bg-center h-[1000px]"></div>
      <div className="bg-[#10091D] opacity-[0.7] w-full h-[1000px] absolute top-0"></div>
      <SearchPanel />
      <Services />
    </div>
  );
};

export default MainPage;
