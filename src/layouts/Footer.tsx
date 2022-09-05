import React from "react";

import FooterLogo from "../assets/img/main/footer-logo.png";

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="bg-[#10091D]/[.95]">
      <div className="container mx-auto pt-[40px] pb-[20px] font-open_sans font-normal text-[12px] leading-[14px] text-white">
        <div className="flex justify-between">
          <p className="w-[222px]">
            1810 E Sahara Ave Ste 212 #2180 Las Vegas, Nevada, 89104 United
            States
            <br />
            <br />
            +1-888-883-4146 info@verticalfleet.com
          </p>
          <div>
            <img src={FooterLogo} alt="" />
          </div>
        </div>
        <div className="flex justify-between mt-[56px]">
          <p>© 2022 Vertical Fleet | All rights reserved</p>
          <p>Privacy Policy & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
