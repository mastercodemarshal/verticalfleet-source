import React from "react";

import Services from "../components/common/Services";
import SearchPanel from "../components/main/SearchPanel";
import MainContent from "../components/main/MainContent";
import ContactUs from "../components/main/ContactUs";
import Footer from "../layouts/Footer";

const MainPage: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="relative">
        <div className="bg-[url('assets/img/landing/background.png')] bg-cover bg-center h-[1000px]"></div>
        <div className="bg-[#10091D] opacity-[0.7] w-full h-[1000px] absolute top-0"></div>
        <div className="absolute top-[260px] w-full px-[24px]">
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
