import React, { useState } from "react";

import FooterLogo from "../assets/img/main/footer-logo.png";
import CreditLogo from "../assets/img/main/credit_logo.png";
import PrivacyModal from "../components/common/PrivacyModal";
import TermsModal from "../components/common/TermsModal";

const Footer: React.FC = (): JSX.Element => {
  const [openPrivacyModal, setOpenPrivacyModal] = useState(false);
  const [openTermsModal, setOpenTermsModal] = useState(false);

  return (
    <div className="bg-[#10091D]/[.95]">
      <div className="container mx-auto pt-[40px] pb-[20px] font-open_sans font-normal text-[12px] leading-[14px] text-white">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-[60px]">
          <div className="w-[230px] md:mx-0 mx-auto md:text-left text-center">
            <img src={FooterLogo} alt="" className="mb-[35px]" />
            <p className="text-[12px] leading-[28px]">
              1810 E Sahara Ave Ste 212 #2180 Las Vegas, Nevada, 89104 United
              States
            </p>
            <br />
            <br />
            <p className="text-[14px] underline cursor-pointer">
              <a href="tel:+1-888-832-8777">+1-888-832-8777</a>
            </p>
            <br />
            <p>
              <a href="mailto:info@verticalfleet.com">info@verticalfleet.com</a>
            </p>
            <p className="md:mt-[65px] mt-[35px] md:mx-0 mx-auto lg:flex hidden">
              © 2022 Vertical Fleet | All rights reserved
            </p>
          </div>
          <div className="mx-auto md:text-left text-center md:mt-0 mt-[30px]">
            <p className="uppercase text-center tracking-[1.15em] mb-[15px] text-[18px] border-b-2 pb-2">
              we offer
            </p>
            <div className="grid grid-cols-1 text-left gap-y-[12px] mt-[30px]">
              <div>
                <p className="uppercase text-[18px] leading-[25px]">
                  24/7 cUSTOMER sUPPORT
                </p>
                <p className="text-[12px] leading-[17px]">
                  Success in each case
                </p>
              </div>
              <div>
                <p className="uppercase text-[18px] leading-[25px]">
                  10+ Years Experience
                </p>
                <p className="text-[12px] leading-[17px]">
                  In the Travel Industry
                </p>
              </div>
              <div>
                <p className="uppercase text-[18px] leading-[25px]">
                  Unpublished Inventory
                </p>
                <p className="text-[12px] leading-[17px]">
                  From all over the world
                </p>
              </div>
              <div>
                <p className="uppercase text-[18px] leading-[25px]">
                  Best Rates and Experience
                </p>
                <p className="text-[12px] leading-[17px]">At your service</p>
              </div>
            </div>
          </div>
          <div className="lg:mx-auto md:ml-0 mx-auto md:text-left text-center md:mt-0 mt-[30px]">
            <p className="uppercase text-center tracking-[.6em] mb-[40px] text-[18px] border-b-2 pb-2">
              our partners
            </p>
            <img src={CreditLogo} alt="" />
            <p className="mt-[35px] md:mx-0 mx-auto lg:hidden md:flex hidden">
              © 2022 Vertical Fleet | All rights reserved
            </p>
          </div>
          <div className="lg:ml-auto mx-auto md:text-left text-center md:mt-0 mt-[30px]">
            <p className="uppercase text-center tracking-[.6em] mb-[15px] text-[18px] border-b-2 pb-2">
              quick links
            </p>
            <div className="grid grid-cols-2 text-left gap-y-[12px] mt-[30px]">
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/france">Air France</a>
              </div>
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/british">British Airways</a>
              </div>
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/lufthansa">Lufthansa</a>
              </div>
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/virgin">Virgin Atlantic</a>
              </div>
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/alaska">Alaska Airlines</a>
              </div>
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/southwest">Southwest Airlines</a>
              </div>
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/jetblue">Jetblue Airways</a>
              </div>
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/american">American Airlines</a>
              </div>
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/delta">Delta Airlines</a>
              </div>
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/iberia">Iberia Airlines</a>
              </div>
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/united">United Airlines</a>
              </div>
              <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                <a href="/landing/canada">Air Canada</a>
              </div>
            </div>
            <p className="md:mx-0 mx-auto md:mt-[30px] mt-[80px]">
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
            <p className="md:mt-[56px] mt-[35px] md:mx-0 mx-auto md:hidden flex">
              © 2022 Vertical Fleet | All rights reserved
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col md:hidden md:justify-between">
          <div className="w-[230px] md:mx-0 mx-auto md:text-left text-center">
            <img src={FooterLogo} alt="" className="mb-[35px]" />
            <div className="ml-auto md:mr-[100px] mr-auto md:text-left text-center mb-[40px]">
              <p className="md:mx-0 mx-auto mb-[30px]">
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
              <p className="uppercase text-center tracking-[.6em] mb-[15px] text-[18px] border-b-2 pb-2">
                quick links
              </p>
              <div className="grid grid-cols-2 text-left gap-y-[12px] mt-[30px]">
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/france">Air France</a>
                </div>
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/british">British Airways</a>
                </div>
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/lufthansa">Lufthansa</a>
                </div>
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/virgin">Virgin Atlantic</a>
                </div>
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/alaska">Alaska Airlines</a>
                </div>
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/southwest">Southwest Airlines</a>
                </div>
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/jetblue">Jetblue Airways</a>
                </div>
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/american">American Airlines</a>
                </div>
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/delta">Delta Airlines</a>
                </div>
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/iberia">Iberia Airlines</a>
                </div>
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/united">United Airlines</a>
                </div>
                <div className="text-[13px] hover:text-gray-400 mb-[5px]">
                  <a href="/landing/canada">Air Canada</a>
                </div>
              </div>
            </div>
            1810 E Sahara Ave Ste 212 #2180 Las Vegas, Nevada, 89104 United
            States
            <br />
            <br />
            +1-888-832-8777
            <br />
            info@verticalfleet.com
            <img src={CreditLogo} alt="" className="mt-[33px]" />
            <p className="md:mt-[56px] mt-[35px] md:mx-0 mx-auto">
              © 2022 Vertical Fleet | All rights reserved
            </p>
          </div>
        </div> */}
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
