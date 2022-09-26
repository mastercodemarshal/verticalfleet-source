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
          <p className="w-[222px] md:mx-0 mx-auto md:text-left text-center">
            1810 E Sahara Ave Ste 212 #2180 Las Vegas, Nevada, 89104 United
            States
            <br />
            <br />
            +1-888-832-8777
            <br />
            info@verticalfleet.com
          </p>
          <div className="md:mx-0 mx-auto">
            <img src={FooterLogo} alt="" className="md:mb-0 mb-[70px]" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-between mt-[56px]">
          <p className="md:mt-0 mt-[16px] md:mx-0 mx-auto">
            © 2022 Vertical Fleet | All rights reserved
          </p>
          <p className="md:mx-0 mx-auto">
            <span
              className="mr-[20px] cursor-pointer"
              onClick={() => setOpenPrivacyModal(true)}
            >
              Privacy Policy
            </span>
            <span
              className="cursor-pointer"
              onClick={() => setOpenTermsModal(true)}
            >
              Terms and Conditions
            </span>
          </p>
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
