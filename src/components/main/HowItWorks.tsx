import React from "react";

import timelineImg from "../../assets/img/main/timeline.png";

const HowItWorks: React.FC = (): JSX.Element => {
  return (
    <div className="pt-[70px] md:px-0 px-[20px] ">
      <h2 className="uppercase text-[#10091D]/[.1] font-bold md:text-[80px] leading-[100px] text-[44px]">
        how it works
      </h2>
      <div className="bg-[#F3E351] w-[200px] h-[3px] mb-[17px]"></div>
      <img src={timelineImg} className="w-full" alt="timeline-img" />
    </div>
  );
};

export default HowItWorks;
