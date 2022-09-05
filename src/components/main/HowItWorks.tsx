import React from "react";

import timelineImg from "../../assets/img/main/timeline.png";

const HowItWorks: React.FC = (): JSX.Element => {
  return (
    <div className="pt-[70px]">
      <h2 className="uppercase font-hind text-[#10091D]/[.1] font-bold text-[80px] leading-[100px]">
        how it works
      </h2>
      <div className="bg-[#F3E351] w-[200px] h-[3px] mb-[17px]"></div>
      <img src={timelineImg} alt="timeline-img" />
    </div>
  );
};

export default HowItWorks;
