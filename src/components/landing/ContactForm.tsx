import React from "react";

import { forePhoneNumbers } from "../../constants";

const ContactForm: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="flex text-[#494949]">
        <input
          type="text"
          className="px-[15px] py-[14px] w-[240px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white border-r border-[#D7D7D7] rounded-l-[4px] box-border"
          placeholder="Your name"
        />
        <input
          type="email"
          className="px-[15px] py-[14px] w-[240px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white border-r border-[#D7D7D7] box-border"
          placeholder="E-mail"
        />
        <div className="flex">
          <select
            name="phonenumber"
            id="phonenumber"
            className="px-[15px] px-[5px] w-[70px] py-[14px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white"
          >
            {forePhoneNumbers.map((phone, index) => (
              <option value={phone} key={index}>
                +{phone}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="px-[15px] w-[170px] py-[14px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white rounded-r-[4px]"
            placeholder="Phone number"
          />
        </div>
      </div>
      <button className="py-[14px] ml-[10px] w-[160px] text-center text-[#10091D] font-open_sans font-bold text-[16px] leading-[22px] bg-[#F3E351] hover:bg-[#F3E351]/[.8] active:bg-[#F3E351]/[.6] rounded-[4px]">
        Submit
      </button>
    </>
  );
};

export default ContactForm;
