import React from "react";

import ContactUsForm from "./ContactUsForm";

const ContactUs: React.FC = (): JSX.Element => {
  return (
    <div className="bg-[#F5F5F5] pt-[80px] pb-[40px] xl:px-0 px-[10px]">
      <div className="uppercase text-center font-bold md:text-[80px] leading-[100px] text-[44px] text-[#10091D]/[.1]">
        contact us
      </div>
      <ContactUsForm />
      <p className="container mx-auto mt-[152px] text-[#10091D]/[.5] font-hind font-light text-[14px] leading-[19px] px-5 text-justify">
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
