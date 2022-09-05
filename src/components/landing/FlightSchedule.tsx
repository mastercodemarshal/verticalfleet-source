import React from "react";

import arrow from "../../assets/img/landing/arrow.png";

interface IFlightScheduleProps {
  schedule: {
    from: {
      ground: string;
      date: string;
      destination: string;
    };
    to: {
      ground: string;
      date: string;
      destination: string;
    };
  };
}

const FlightSchdule: React.FC<IFlightScheduleProps> = ({
  schedule,
}): JSX.Element => {
  return (
    <div className="flex items-center">
      <p className="font-bold text-[33px] font-hind leading-[45.54px] uppercase">
        {schedule.from.ground}
      </p>
      <div className="ml-[10px]">
        <p className="font-bold text-[12px] font-open_sans leading-[17px]">
          {schedule.from.date}
        </p>
        <p className="font-bold text-[10px] font-open_sans leading-[14px]">
          {schedule.from.destination}
        </p>
      </div>
      <img src={arrow} className="mx-[20px]" alt="arrow" />
      <p className="font-bold text-[33px] font-hind leading-[45.54px] uppercase">
        {schedule.to.ground}
      </p>
      <div className="ml-[10px]">
        <p className="font-bold text-[12px] font-open_sans leading-[17px]">
          {schedule.to.date}
        </p>
        <p className="font-bold text-[10px] font-open_sans leading-[14px]">
          {schedule.to.destination}
        </p>
      </div>
    </div>
  );
};

export default FlightSchdule;
