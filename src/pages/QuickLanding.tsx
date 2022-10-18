import React from "react";
import { useParams } from "react-router-dom";

import QuickSummary from "../components/common/QuickSummary";
import ContactUsForm from "../components/main/ContactUsForm";
import Footer from "../layouts/Footer";
import { QuickLandingData } from "../constants";
import QuickSummaryJetblue from "../components/common/QuickSummaryJetblue";
import QuickSummaryAlaska from "../components/common/QuickSummaryAlaska";
import QuickSummarySouthwest from "../components/common/QuickSummarySouthwest";
import QuickSummaryCanada from "../components/common/QuickSummaryCanada";
import QuickSummaryDelta from "../components/common/QuickSummaryDelta";
import QuickSummaryIberia from "../components/common/QuickSummaryIberia";

const QuickLanding = () => {
  let { id } = useParams();

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
          {id === "jetblue" ? (
            <QuickSummaryJetblue data={QuickLandingData[id]} />
          ) : id === "alaska" ? (
            <QuickSummaryAlaska data={QuickLandingData[id]} />
          ) : id === "southwest" ? (
            <QuickSummarySouthwest data={QuickLandingData[id]} />
          ) : id === "canada" ? (
            <QuickSummaryCanada data={QuickLandingData[id]} />
          ) : id === "delta" ? (
            <QuickSummaryDelta data={QuickLandingData[id]} />
          ) : id === "iberia" ? (
            <QuickSummaryIberia data={QuickLandingData[id]} />
          ) : (
            <QuickSummary data={QuickLandingData[id]} />
          )}
          <Footer />
        </>
      )}
    </>
  );
};

export default QuickLanding;
