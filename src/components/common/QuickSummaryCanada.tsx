import React from "react";

import ListIcon from "../../assets/img/quick-landing/list-icon.png";
import FirstImage from "../../assets/img/quick-landing/first-class.png";

const QuickSummaryCanada = ({ data }) => {
  return (
    <div className="md:py-[100px] py-[50px] px-[15px]">
      <div className="text-center font-bold md:text-[80px] text-[44px] leading-[100px] uppercase text-[#10091D]/[.1]">
        {data.title}
      </div>
      <div className="mx-auto w-[200px] h-[3px] bg-[#F3E351]"></div>
      <div
        className="container mx-auto text-[16px] leading-[22px] text-[#6B6772] mt-[30px] text-justify"
        dangerouslySetInnerHTML={{ __html: data.summary }}
      ></div>
      <div className="container mx-auto grid md:grid-cols-3 gap-[90px] mt-[75px] items-center">
        <div className="relative z-20 md:block hidden">
          <img src={FirstImage} alt="first-class" />
        </div>
        <div className="col-span-2 relative z-10">
          <p className="uppercase text-[24px] leading-[33px] md:tracking-[.8em] tracking-[.3em] text-[#10091D] font-bold mb-[10px]">
            business class
          </p>
          {data.first.content.map((content, index) => (
            <div
              className="text-[16px] text-[#6B6772] leading-[22px]"
              key={`content_${index}`}
            >
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
              <br />
            </div>
          ))}
          {data.first.list.map((item, index) => (
            <div
              className="text-[16px] text-[#6B6772] leading-[30px] flex items-center"
              key={`item_${index}`}
            >
              <img className="mr-[10px]" src={ListIcon} alt="icon" />
              <span dangerouslySetInnerHTML={{ __html: item }}></span>
            </div>
          ))}
          <div className="w-[200px] h-[3px] bg-[#F3E351] mt-[20px]"></div>
          <div className="bg-[#F3E351] w-full h-full absolute right-[100%] top-0 mr-[50px]"></div>
        </div>
      </div>
    </div>
  );
};

export default QuickSummaryCanada;
