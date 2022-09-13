import React from "react";

import { DetailCardsData } from "../../constants";
import DetailCard from "./DetailCard";
import dubaiImg from "../../assets/img/main/dubai.png";
import sydneyImg from "../../assets/img/main/sydney.png";
import tokyoImg from "../../assets/img/main/tokyo.png";
import londonImg from "../../assets/img/main/london.png";
import casablancaImg from "../../assets/img/main/casablanca.png";
import barcelonaImg from "../../assets/img/main/barcelona.png";
import romeImg from "../../assets/img/main/rome.png";

const imgArray = [
  dubaiImg,
  sydneyImg,
  tokyoImg,
  londonImg,
  casablancaImg,
  barcelonaImg,
  romeImg,
];

const BestDetails: React.FC = (): JSX.Element => {
  return (
    <div className="bg-[#F3E351] pt-[70px] pl-[50px] pr-[50px] pb-[100px]">
      <h2 className="uppercase font-hind font-bold md:text-[80px] leading-[100px] text-[44px] text-white">
        best deals
      </h2>
      <div className="w-[200px] h-[3px] bg-white"></div>
      <div className="md:mt-[107px] mt-[57px] grid md:grid-cols-2 gap-x-[40px]">
        {DetailCardsData.map((data, index) => (
          <DetailCard
            data={{ ...data, num: index, img: imgArray[index] }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default BestDetails;
