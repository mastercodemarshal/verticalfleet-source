import React from "react";

import { DetailCardsData } from "../../constants";
import DetailCard from "./DetailCard";

const BestDetails: React.FC = (): JSX.Element => {
  return (
    <div className="bg-[#F3E351] pt-[70px] pl-[50px] pr-[50px] pb-[100px]">
      <h2 className="uppercase font-hind font-bold text-[80px] leading-[100px] text-white">
        best details
      </h2>
      <div className="w-[200px] h-[3px] bg-white"></div>
      <div className="mt-[107px] grid md:grid-cols-2 gap-x-[40px] gap-y-[50px]">
        {DetailCardsData.map((data, index) => (
          <DetailCard data={{ ...data, num: index }} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BestDetails;
