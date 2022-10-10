import React, { useState } from "react";

import FooterLogo from "../assets/img/main/footer-logo.png";
import PrivacyModal from "../components/common/PrivacyModal";
import TermsModal from "../components/common/TermsModal";

const Footer: React.FC = (): JSX.Element => {
  const [openPrivacyModal, setOpenPrivacyModal] = useState(false);
  const [openTermsModal, setOpenTermsModal] = useState(false);

  return (
    <div className="bg-[#10091D]/[.95]">
      <div className="container mx-auto pt-[40px] pb-[20px] font-open_sans font-normal text-[12px] leading-[14px] text-white">
        <div className="flex md:flex-row flex-col-reverse md:justify-between">
          <div className="w-[222px] md:mx-0 mx-auto md:text-left text-center">
            1810 E Sahara Ave Ste 212 #2180 Las Vegas, Nevada, 89104 United
            States
            <br />
            <br />
            +1-888-832-8777
            <br />
            info@verticalfleet.com
            <p className="md:mt-[56px] mt-[16px] md:mx-0 mx-auto">
              © 2022 Vertical Fleet | All rights reserved
            </p>
          </div>
          <div className="ml-auto md:mr-[100px] mr-auto md:text-left text-center mb-[30px]">
            <p className="uppercase font-bold mb-[15px] text-[14px] border-b-2 pb-2">
              quick links
            </p>
            <div className="text-[13px] hover:text-gray-400 mb-[5px]">
              <a href="/landing/france">Air France</a>
            </div>
            <div className="text-[13px] hover:text-gray-400 mb-[5px]">
              <a href="/landing/british">British Airways</a>
            </div>
            <div className="text-[13px] hover:text-gray-400 mb-[5px]">
              <a href="/landing/lufthansa">Lufthansa</a>
            </div>
          </div>
          <div className="md:mx-0 mx-auto">
            <img src={FooterLogo} alt="" className="md:mb-[110px] mb-[20px]" />
            <p className="md:mx-0 mx-auto md:mb-0 mb-[30px]">
              <span
                className="mr-[20px] cursor-pointer hover:text-gray-400"
                onClick={() => setOpenPrivacyModal(true)}
              >
                Privacy Policy
              </span>
              <span
                className="cursor-pointer hover:text-gray-400"
                onClick={() => setOpenTermsModal(true)}
              >
                Terms and Conditions
              </span>
            </p>
          </div>
        </div>
      </div>
      {openPrivacyModal ? (
        <PrivacyModal onClose={() => setOpenPrivacyModal(false)} />
      ) : null}
      {openTermsModal ? (
        <TermsModal onClose={() => setOpenTermsModal(false)} />
      ) : null}
    </div>
  );
};

export default Footer;
