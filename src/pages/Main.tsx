import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Services from "../components/common/Services";
import SearchPanel from "../components/main/SearchPanel";
import MainContent from "../components/main/MainContent";
import ContactUs from "../components/main/ContactUs";
import Footer from "../layouts/Footer";
import { FlightContext } from "../App";

const MainPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const flightContext = useContext(FlightContext);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  window.scrollTo(0, 0);

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/round-trip/");
    }

    flightContext.setFlightState(
      JSON.parse(localStorage.getItem("data") || "[]")
    );

    !flightContext.flightState.length &&
      flightContext.setFlightState([
        {
          current: "",
          destination: "",
          dateFrom: new Date(),
          dateTo: tomorrow,
          passengers: "",
          type: "",
        },
      ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="relative">
        <div className="bg-[url('assets/img/landing/background.png')] bg-cover bg-center md:h-[1000px] h-[1200px]"></div>
        <div className="bg-[#10091D] opacity-[0.7] w-full h-[1000px] absolute top-0"></div>
        <div className="absolute xl:top-[260px] md:top-[200px] top-[120px] w-full px-[20px] z-10">
          <SearchPanel />
          <div className="container text-center uppercase text-[32px] text-white mt-[20px]">
            save up to 75% off your flight
          </div>
        </div>
        <Services />
      </div>
      <MainContent />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MainPage;
