import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Services from "../components/common/Services";
import SearchPanel from "../components/main/SearchPanel";
import MainContent from "../components/main/MainContent";
import ContactUs from "../components/main/ContactUs";
import Footer from "../layouts/Footer";

const MainPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  useEffect(() => {
    if (path === "/") {
      navigate("/round-trip");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="relative">
        <div className="bg-[url('assets/img/landing/background.png')] bg-cover bg-center md:h-[1000px] h-[1400px]"></div>
        <div className="bg-[#10091D] opacity-[0.7] w-full h-[1000px] absolute top-0"></div>
        <div className="absolute xl:top-[260px] top-[200px] w-full px-[24px]">
          <SearchPanel />
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
