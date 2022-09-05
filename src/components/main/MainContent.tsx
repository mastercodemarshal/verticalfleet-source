import React from "react";
import BestDetails from "./BestDetails";
import HowItWorks from "./HowItWorks";

import WhatWeDo from "./WhatWeDo";

const MainContent: React.FC = (): JSX.Element => {
  return (
    <div className="bg-white">
      <div className="mt-[109px] container mx-auto">
        <WhatWeDo />
      </div>
      <div className="pt-[57px] container mx-auto">
        <div className="grid grid-cols-2 gap-0">
          <HowItWorks />
          <BestDetails />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
