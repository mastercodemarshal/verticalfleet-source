import React from "react";

import arrow from "../../assets/img/landing/arrow.png";

interface IFlightScheduleProps {
  schedule: {
    current: string;
    destination: string;
    dateFrom: Date;
    dateTo: Date;
    passengers: string;
    type: string;
  };
}

const FlightSchedule: React.FC<IFlightScheduleProps> = ({
  schedule,
}): JSX.Element => {
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <div className="flex items-center lg:w-[45%] md:w-[30%] w-[45%]">
        <p className="font-bold text-[33px] leading-[45.54px] uppercase">
          {schedule.current.split(", ")[0]}
        </p>
        <div className="ml-[10px]">
          <p className="font-bold text-[12px] font-open_sans leading-[17px]">
            {`${new Date(schedule.dateFrom).toLocaleDateString("en-US", {
              month: "short",
            })} ${new Date(schedule.dateFrom).getDate()}`}
          </p>
          <p className="font-bold text-[10px] font-open_sans leading-[14px]">
            {`${schedule.current.split(", ")[3]}, ${
              schedule.current.split(", ")[2]
            }`}
          </p>
        </div>
      </div>
      <div className="w-[10%] xl:mr-[10px] sm:mr-[30px] mr-[5px]">
        <img src={arrow} alt="arrow" />
        {schedule.type.includes("round-trip") ? (
          <img src={arrow} alt="arrow" className="rotate-[180deg] mt-[5px]" />
        ) : null}
      </div>
      <div className="flex items-center lg:w-[45%] md:w-[30%] w-[45%] ">
        <p className="font-bold text-[33px] leading-[45.54px] uppercase">
          {schedule.destination.split(",")[0]}
        </p>
        <div className="ml-[10px]">
          <p className="font-bold text-[12px] font-open_sans leading-[17px]">
            {`${new Date(schedule.dateTo).toLocaleDateString("en-US", {
              month: "short",
            })} ${new Date(schedule.dateTo).getDate()}`}
          </p>
          <p className="font-bold text-[10px] font-open_sans leading-[14px]">
            {`${schedule.destination.split(", ")[3]}, ${
              schedule.destination.split(", ")[2]
            }`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightSchedule;
