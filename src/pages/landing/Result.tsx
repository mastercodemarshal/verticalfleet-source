import React from "react";

import Services from "../../components/common/Services";
import MiddleCard from "../../components/landing/SecondMiddle";

const ResultPage: React.FC = (): JSX.Element => {
  return (
    <div className="relative">
      <div className="bg-[url('assets/img/landing/background.png')] bg-cover bg-center md:h-[1000px] h-[1000px]"></div>
      <div className="bg-[#10091D] opacity-[0.7] w-full h-[1000px] absolute top-0"></div>
      <div className="absolute lg:top-[260px] md:top-[150px] top-[100px] w-full md:px-[24px] px-[10px]">
        <MiddleCard />
      </div>
      <Services />
    </div>
  );
};

export default ResultPage;
