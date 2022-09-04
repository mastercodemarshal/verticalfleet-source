import React from "react";

import arrow from "../../assets/img/landing/arrow.png";

const MiddleCard: React.FC = (): JSX.Element => {
  return (
    <div className="max-w-[952px] mx-auto bg-[#10091D]/[.7] rounded-[10px] backdrop-blur-[5px] px-[30px] pt-[60px] pb-[40px]">
      <div className="text-white opacity-[.3] flex justify-center">
        <div className="flex items-center">
          <p className="font-bold text-[33px] font-hind leading-[45.54px] uppercase">
            jfk
          </p>
          <div className="ml-[10px]">
            <p className="font-bold text-[12px] font-open_sans leading-[17px]">
              Aug 18
            </p>
            <p className="font-bold text-[10px] font-open_sans leading-[14px]">
              New-York, NY
            </p>
          </div>
          <img src={arrow} className="mx-[20px]" alt="arrow" />
          <p className="font-bold text-[33px] font-hind leading-[45.54px] uppercase">
            slc
          </p>
          <div className="ml-[10px]">
            <p className="font-bold text-[12px] font-open_sans leading-[17px]">
              Aug 22
            </p>
            <p className="font-bold text-[10px] font-open_sans leading-[14px]">
              Salt-Lake City, UT
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mt-[30px] text-white font-open_sans font-bold text-[16px] leading-[22px]">
        THANK YOU FOR YOUR REQUEST
        <br />
        We will send you a detailed quote in the next 5 minutes or less!
      </p>
      <p className="font-open_sans font-normal text-[12px] leading-[14px] text-white/[.5] mt-[100px]">
        *Price displayed is estimated and fluctuates based on route and
        destination, date and time of travel as well as how far ahead you’re
        booking. The fares will also vary based on class of travel availability.
        Savings of up to 75% off the retail price on Business & First Class
        Fares are based on unrestricted fares of major airlines and can vary
        based on fare rules.
        <br />
        <br />
        All fares are non-refundable and cannot be exchanged or transferred.
        Other restrictions may apply. All fares are subject to change until
        ticketed
      </p>
    </div>
  );
};

export default MiddleCard;
