import React from "react";

import arrow from "../../assets/img/landing/arrow.png";

interface IFlightScheduleProps {
  schedule: object;
}

const FlightSchdule: React.FC<IFlightScheduleProps> = ({
  schedule,
}): JSX.Element => {
  return (
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
  );
};

export default FlightSchdule;
