import React from "react";

import Services from "../../components/common/Services";
import MiddleCard from "../../components/landing/FirstMiddle";

const LandingPage: React.FC = (): JSX.Element => {
  return (
    <div className="relative">
      <div className="bg-[url('assets/img/landing/background.png')] bg-cover bg-center xl:h-[1000px] md:h-[1200px] h-[1450px]"></div>
      <div className="bg-[#10091D] opacity-[0.7] w-full h-[1000px] absolute top-0"></div>
      <div className="absolute xl:top-[260px] md:top-[150px] top-[80px] w-full md:px-[24px] px-[10px]">
        <MiddleCard />
      </div>
      <Services />
    </div>
  );
};

export default LandingPage;
