import React from "react";

interface IReportItemProps {
  title: string;
  description: string;
}

const ReportItem: React.FC<IReportItemProps> = ({
  title,
  description,
}): JSX.Element => {
  return (
    <div className="font-hind w-[255px] text-white py-[3px] md:ml-0 ml-[80px] px-[10px] border-l-2 border-[#EDDF63]">
      <p className="text-[18px] font-normal leading-[25px] uppercase">
        {title}
      </p>
      <p className="text-[12px] leading-[17px] font-light">{description}</p>
    </div>
  );
};

export default ReportItem;
