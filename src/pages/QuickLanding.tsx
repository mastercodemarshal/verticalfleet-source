import React from "react";
import { useParams } from "react-router-dom";

import QuickSummary from "../components/common/QuickSummary";
import ContactUsForm from "../components/main/ContactUsForm";
import Footer from "../layouts/Footer";
import { QuickLandingData } from "../constants";

const QuickLanding = () => {
  let { id } = useParams();

  // id = "france";

  return (
    <>
      {!(id && QuickLandingData[id]) ? (
        <div className="text-center mt-[200px] text-[30px] font-bold">
          Page Not Found
        </div>
      ) : (
        <>
          <div className="bg-[#F5F5F5] md:pt-[150px] pt-[100px] pb-[60px] xl:px-0 px-[10px]">
            <div className="uppercase text-center font-bold md:text-[80px] leading-[100px] text-[44px] text-[#10091D]/[.1]">
              ask us anything
            </div>
            <ContactUsForm />
          </div>
          <QuickSummary data={QuickLandingData[id]} />
          <Footer />
        </>
      )}
    </>
  );
};

export default QuickLanding;
