import React, { FunctionComponent, useContext } from "react";

import arrow from "../../assets/img/landing/arrow.png";
import { FlightContext } from "../../App";

interface IFlightScheduleProps {
  schedule: {
    current: string;
    destination: string;
    dateFrom: Date;
    dateTo: Date;
    passengers: string;
  };
}

const FligthItem: FunctionComponent<IFlightScheduleProps> = ({
  schedule,
}): JSX.Element => {
  return (
    <div className="text-white opacity-[.3] flex items-center justify-center">
      <div className="flex items-center md:w-[30%] w-[45%]">
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
      </div>
      <div className="w-[10%] flex justify-center md:mr-[30px]">
        <img src={arrow} className="mx-[20px]" alt="arrow" />
      </div>
      <div className="flex items-center md:w-[30%] w-[45%]">
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
    </div>
  );
};

const MiddleCard: React.FC = (): JSX.Element => {
  const { flightState: FlightSchedules } = useContext(FlightContext);

  return (
    <div className="max-w-[952px] mx-auto bg-[#10091D]/[.7] rounded-[10px] backdrop-blur-[5px] sm:px-[30px] px-[10px] lg:pt-[60px] pt-[30px] pb-[40px]">
      <div className="mx-auto w-full">
        {FlightSchedules.map((schedule, index) => (
          <FligthItem schedule={schedule} key={index} />
        ))}
      </div>
      <p className="text-center mt-[30px] text-white font-open_sans font-bold text-[16px] leading-[22px]">
        THANK YOU FOR YOUR REQUEST
        <br />
        We will send you a detailed quote shortly!
      </p>
      <p className="text-justify font-open_sans font-normal text-[12px] leading-[14px] text-white/[.5] mt-[100px]">
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
