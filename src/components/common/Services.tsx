import React from "react";

import ReportItem from "../../components/common/ReportItem";
import { reportItemsArray } from "../../constants";

const Services: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="xl:h-[136px] md:h-[216px] sm:h-[376px] bg-[#10091D]/[.5] absolute bottom-0 w-full backdrop-blur-[5px] flex items-center">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[30px]">
            {reportItemsArray.map((report, index) => (
              <ReportItem
                key={index}
                title={report.title}
                description={report.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
