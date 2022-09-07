import React, { useContext } from "react";

import f192Icon from "../../assets/img/landing/f192.png";
import f0c8Icon from "../../assets/img/landing/f0c8.png";
import FlightSchdule from "./FlightSchedule";
import ContactForm from "./ContactForm";
import { FlightContext } from "../../App";

const MiddleCard: React.FC = (): JSX.Element => {
  const { flightState: FlightSchedules } = useContext(FlightContext);

  console.log(FlightSchedules);

  const getPriceForBussiness = FlightSchedules[0].type.includes("one-way")
    ? Math.floor(Math.random() * (1500 - 1200) + 1200)
    : Math.floor(Math.random() * (2600 - 2200) + 2200);

  const getPriceForEconomy = FlightSchedules[0].type.includes("one-way")
    ? Math.floor(Math.random() * (425 - 350) + 350)
    : Math.floor(Math.random() * (715 - 490) + 1200);

  const getPriceForFirst = FlightSchedules[0].type.includes("one-way")
    ? Math.floor(Math.random() * (2900 - 2500) + 2500)
    : Math.floor(Math.random() * (4900 - 4500) + 4500);

  return (
    <div className="max-w-[952px] mx-auto bg-[#10091D]/[.7] rounded-[10px] backdrop-blur-[5px] px-[30px] pt-[30px] pb-[40px]">
      <div className="grid xl:grid-cols-2 text-white flex items-center">
        <div className="mx-auto">
          {FlightSchedules.map((schedule, index) => (
            <FlightSchdule schedule={schedule} key={index} />
          ))}
        </div>
        <div className="grid grid-cols-3 max-w-[450px] gap-[30px] mx-auto xl:mt-0 mt-[20px]">
          <div className="bg-white/[.2] rounded-[10px] cursor-pointer px-[17px] py-[20px]">
            <div className="flex justify-between">
              <p className="font-bold font-open_sans text-[20px] leading-[27px]">
                ${getPriceForBussiness}
              </p>
              <p className="font-bold font-open_sans text-[16px] leading-[22px]">
                *
              </p>
            </div>
            <div className="font-open_sans text-center font-bold text-[12px] leading-none tracking-[0.45em] opacity-[0.5] uppercase border-t">
              {FlightSchedules[0].type.includes("one-way")
                ? "one way"
                : "round trip"}
            </div>
            <div className="mt-[19px] flex items-center">
              <img src={f192Icon} width="16px" height="20px" alt="icon" />
              <p className="ml-[6px] font-hind font-bold uppercase text-[12px] leading-[12px]">
                business
              </p>
            </div>
          </div>

          <div className="bg-white/[.05] rounded-[10px] cursor-pointer px-[17px] py-[20px]">
            <div className="flex justify-between">
              <p className="font-bold font-open_sans text-[20px] leading-[27px]">
                ${getPriceForFirst}
              </p>
              <p className="font-bold font-open_sans text-[16px] leading-[22px]">
                *
              </p>
            </div>
            <div className="font-open_sans text-center font-bold text-[12px] leading-none tracking-[0.45em] opacity-[0.5] uppercase border-t">
              {FlightSchedules[0].type.includes("one-way")
                ? "one way"
                : "round trip"}
            </div>
            <div className="mt-[19px] flex items-center">
              <img src={f0c8Icon} width="14px" height="14px" alt="icon" />
              <p className="ml-[6px] font-hind font-bold uppercase text-[12px] leading-[12px]">
                first class
              </p>
            </div>
          </div>

          <div className="bg-white/[.05] rounded-[10px] cursor-pointer px-[17px] py-[20px]">
            <div className="flex justify-between">
              <p className="font-bold font-open_sans text-[20px] leading-[27px]">
                ${getPriceForEconomy}
              </p>
              <p className="font-bold font-open_sans text-[16px] leading-[22px]">
                *
              </p>
            </div>
            <div className="font-open_sans text-center font-bold text-[12px] leading-none tracking-[0.45em] opacity-[0.5] uppercase border-t">
              {FlightSchedules[0].type.includes("one-way")
                ? "one way"
                : "round trip"}
            </div>
            <div className="mt-[19px] flex items-center">
              <img src={f0c8Icon} width="14px" height="14px" alt="icon" />
              <p className="ml-[6px] font-hind font-bold uppercase text-[12px] ">
                p.economy
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-[37px] font-open_sans font-bold text-[16px] leading-[22px] text-white">
        Submit contact details or call us at 1-888-883-4146 to secure best price
      </p>
      <div className="md:flex my-[10px] justify-between md:space-y-0 space-y-[20px]">
        <ContactForm />
      </div>
      <p className="font-open_sans font-normal text-[12px] leading-[14px] text-white">
        By submitting my contact information I agree to discuss my travel
        arrangements.{" "}
      </p>
      <p className="font-open_sans font-normal text-[12px] leading-[14px] text-white/[.5] mt-[40px]">
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
