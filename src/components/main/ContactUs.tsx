import React from "react";
import { forePhoneNumbers } from "../../constants";

const ContactUs: React.FC = (): JSX.Element => {
  return (
    <div className="bg-[#F5F5F5] pt-[80px]">
      <div className="uppercase text-center font-hind font-bold text-[80px] leading-[100px] text-[#10091D]/[.1]">
        contact us
      </div>
      <div className="mt-[20px] flex justify-center">
        <div className="grid grid-rows-2 grid-flow-col gap-x-[40px] gap-y-[20px]">
          <input
            type="text"
            className="py-[9px] px-[15px] w-[320px] bg-white border border-[#D7D7D7] focus:outline-none rounded-[2px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
            placeholder="First name"
          />
          <input
            type="text"
            className="py-[9px] px-[15px] w-[320px] bg-white border border-[#D7D7D7] focus:outline-none rounded-[2px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
            placeholder="Last name"
          />
          <input
            type="email"
            className="py-[9px] px-[15px] w-[320px] bg-white border border-[#D7D7D7] focus:outline-none rounded-[2px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
            placeholder="E-mail"
          />
          <div className="flex items-center">
            +
            <select className="w-[100px] py-[9px] px-[15px] mr-[10px] bg-white border border-[#D7D7D7] focus:outline-none rounded-[2px] placeholder:text-[#494949] text-[16px] leading-[22px] font-open_sans font-normal">
              {forePhoneNumbers.map((phone, index) => (
                <option value={phone} key={index}>
                  {phone}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="py-[9px] px-[15px] w-[198px] bg-white border border-[#D7D7D7] focus:outline-none rounded-[2px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
              placeholder="Phone number*"
            />
          </div>
          <textarea
            className="row-span-2 py-[9px] px-[15px] w-[320px] bg-white border border-[#D7D7D7] focus:outline-none rounded-[2px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
            placeholder="Please describe what are you inquiring about"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-between mt-[31px] mx-auto w-[1040px]">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-[14px] h-[16px] bg-white border border-[#D7D7D7] focus:outline-none rounded-[2px]"
          />
          <p className="text-[12px] leading-[14px] font-open_sans font-normal text-[#A9A9A9] ml-[5px]">
            By submitting my contact information I agree to discuss my travel
            arrangements.{" "}
          </p>
        </div>
        <button className="bg-[#F3E351] opacity-[.5] hover:opacity-[.8] active:opacity-[1]  uppercase mr-[57px] px-[75px] py-[10px] text-[#10091D] font-open_sans font-bold text-[14px] leading-[19px]">
          submit
        </button>
      </div>
      <p className="container mx-auto mt-[152px] pb-[40px] text-[#10091D]/[.5] font-hind font-light text-[14px] leading-[19px]">
        * Price displayed is estimated and fluctuates based on route and
        destination, date and time of travel as well as how far ahead you’re
        booking. The fares will also vary based on class of travel availability.
        Savings of up to 75% off the retail price on Business & First Class
        Fares are based on unrestricted fares of major airlines and can vary
        based on fare rules.
      </p>
    </div>
  );
};

export default ContactUs;
