import React from "react";

import arrow from "../../assets/img/landing/arrow.png";

interface IFlightScheduleProps {
  schedule: {
    current: string;
    destination: string;
    dateFrom: Date;
    dateTo: Date;
    passengers: string;
  };
}

const FlightSchdule: React.FC<IFlightScheduleProps> = ({
  schedule,
}): JSX.Element => {
  return (
    <div className="flex items-center cursor-pointer">
      <p className="font-bold text-[33px] font-hind leading-[45.54px] uppercase">
        {schedule.current.split(", ")[0]}
      </p>
      <div className="ml-[10px]">
        <p className="font-bold text-[12px] font-open_sans leading-[17px]">
          {`${schedule.dateFrom.toLocaleDateString("en-US", {
            month: "short",
          })} ${schedule.dateFrom.getDate()}`}
        </p>
        <p className="font-bold text-[10px] font-open_sans leading-[14px]">
          {`${schedule.current.split(", ")[3]}, ${
            schedule.current.split(", ")[2]
          }`}
        </p>
      </div>
      <img src={arrow} className="mx-[20px]" alt="arrow" />
      <p className="font-bold text-[33px] font-hind leading-[45.54px] uppercase">
        {schedule.destination.split(",")[0]}
      </p>
      <div className="ml-[10px]">
        <p className="font-bold text-[12px] font-open_sans leading-[17px]">
          {`${schedule.dateTo.toLocaleDateString("en-US", {
            month: "short",
          })} ${schedule.dateTo.getDate()}`}
        </p>
        <p className="font-bold text-[10px] font-open_sans leading-[14px]">
          {`${schedule.destination.split(", ")[3]}, ${
            schedule.destination.split(", ")[2]
          }`}
        </p>
      </div>
    </div>
  );
};

export default FlightSchdule;
