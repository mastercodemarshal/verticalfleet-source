import React from "react";

import f192Icon from "../../assets/img/landing/f192.png";
import f0c8Icon from "../../assets/img/landing/f0c8.png";
import { FlightSchedules, forePhoneNumbers } from "../../constants";
import FlightSchdule from "./FlightSchedule";

const MiddleCard: React.FC = (): JSX.Element => {
  return (
    <div className="max-w-[952px] mx-auto bg-[#10091D]/[.7] rounded-[10px] backdrop-blur-[5px] px-[30px] pt-[30px] pb-[40px]">
      <div className="grid xl:grid-cols-2 text-white flex items-center">
        <div className="mx-auto">
          {FlightSchedules.map((schedule, index) => (
            <FlightSchdule schedule={schedule} key={index} />
          ))}
        </div>
        <div className="grid grid-cols-3 max-w-[450px] gap-[30px] mx-auto">
          <div className="bg-white/[.2] rounded-[10px] px-[17px] py-[20px]">
            <div className="flex justify-between">
              <p className="font-bold font-open_sans text-[20px] leading-[27px]">
                $1,567
              </p>
              <p className="font-bold font-open_sans text-[16px] leading-[22px]">
                *
              </p>
            </div>
            <div className="font-open_sans font-bold text-[12px] leading-none tracking-[0.45em] opacity-[0.5] uppercase border-t">
              one way
            </div>
            <div className="mt-[19px] flex items-center">
              <img src={f192Icon} width="16px" height="20px" alt="icon" />
              <p className="ml-[6px] font-hind font-bold uppercase text-[12px] leading-[12px]">
                business
              </p>
            </div>
          </div>

          <div className="bg-white/[.05] rounded-[10px] px-[17px] py-[20px]">
            <div className="flex justify-between">
              <p className="font-bold font-open_sans text-[20px] leading-[27px]">
                $2,523
              </p>
              <p className="font-bold font-open_sans text-[16px] leading-[22px]">
                *
              </p>
            </div>
            <div className="font-open_sans font-bold text-[12px] leading-none tracking-[0.45em] opacity-[0.5] uppercase border-t">
              one way
            </div>
            <div className="mt-[19px] flex items-center">
              <img src={f0c8Icon} width="14px" height="14px" alt="icon" />
              <p className="ml-[6px] font-hind font-bold uppercase text-[12px] leading-[12px]">
                first class
              </p>
            </div>
          </div>

          <div className="bg-white/[.05] rounded-[10px] px-[17px] py-[20px]">
            <div className="flex justify-between">
              <p className="font-bold font-open_sans text-[20px] leading-[27px]">
                $943
              </p>
              <p className="font-bold font-open_sans text-[16px] leading-[22px]">
                *
              </p>
            </div>
            <div className="font-open_sans font-bold text-[12px] leading-none tracking-[0.45em] opacity-[0.5] uppercase border-t">
              one way
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
      <div className="flex my-[10px] justify-between">
        <div className="flex text-[#494949]">
          <input
            className="px-[15px] py-[14px] w-[240px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white border border-[#D7D7D7] rounded-l-[4px] box-border"
            placeholder="Your name"
          />
          <input
            className="px-[15px] py-[14px] w-[240px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white border-r border-[#D7D7D7] box-border"
            placeholder="E-mail"
          />
          <div className="flex">
            <select
              name="phonenumber"
              id="phonenumber"
              className="px-[15px] w-[50px] py-[14px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white"
            >
              {forePhoneNumbers.map((phone, index) => (
                <option value={phone} key={index}>
                  {phone}
                </option>
              ))}
            </select>
            <input
              className="px-[15px] w-[190px] py-[14px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white rounded-r-[4px]"
              placeholder="Phone number"
            />
          </div>
        </div>
        <button className="py-[14px] ml-[10px] w-[160px] text-center text-[#10091D] font-open_sans font-bold text-[16px] leading-[22px] bg-[#F3E351] rounded-[4px]">
          Submit
        </button>
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
