import React from "react";

import whatWeDoImg from "../../assets/img/main/whatWeDo.png";

const WhatWeDo: React.FC = (): JSX.Element => {
  return (
    <div className="grid md:grid-cols-2 gap-[100px]">
      <img src={whatWeDoImg} alt="intro-img" className="cursor-pointer" />
      <div className="mt-[30px]">
        <h2 className="font-hind font-bold text-[80px] leading-[100px] text-[#10091D]/[.1] uppercase">
          what we do
        </h2>
        <div className="w-[200px] h-[3px] bg-[#F3E351] mb-[30px]"></div>
        <p className="font-open_sans text-[16px] leading-[22px] text-[#6B6772]">
          <span className="font-bold">Vertical Fleet</span> is a full-service
          provider having expertise in traveling and smooth mobility services.
          It has been a known name in carrying forward the travel legacy and
          creating a mark in the sector.
          <br />
          <br />
          We have years of in-depth research and knowledge. We focus on finding
          discounted Business and First Class flights where you can save up to
          75% on your tickets.
          <br />
          <br />
          We are here to make a difference and assist you in all your travel
          needs. Our service is transparent and of superior quality.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
