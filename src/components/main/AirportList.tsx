import React from "react";

interface IAirportListProps {
  airportList: AirPort[] | undefined;
  onSelect(arg: object): void;
}

type AirPort = {
  airport: string;
  country: string;
  city: string;
  city_code: string;
};

const AirportList: React.FC<IAirportListProps> = ({
  airportList,
  onSelect,
}): JSX.Element => {
  return airportList?.length ? (
    <ul className="absolute top-[67px] left-0 lg:w-[760px] sm:w-[500px] bg-white max-h-[350px] overflow-auto z-50">
      {airportList?.map((data, index) => {
        return (
          <li
            key={index}
            onClick={() => onSelect(data)}
            className="text-[#10091D] font-open_sans border-b hover:bg-[#F3E351] active:bg-[#F3E351]/[.7] px-[15px] py-[9px] flex justify-between items-cemter"
          >
            <p className="sm:text-[16px] text-[14px] leading-[22px]">
              ({data.city_code}) <span>{data.city}</span> {data.country} -{" "}
              {data.airport}
            </p>
            <p className="text-[14px] leading-[19px] xl:inline hidden">
              Press enter to select
            </p>
          </li>
        );
      })}
    </ul>
  ) : (
    <div>
      {
        <ul className="absolute top-[67px] left-0 lg:w-[760px] sm:w-[500px] w-full bg-white max-h-[350px] overflow-auto z-50 shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
          <li className="text-[#10091D] font-open_sans border px-[15px] py-[9px] flex justify-between items-cemter">
            <p className="text-[16px] leading-[22px]">Type to search</p>
          </li>
        </ul>
      }
    </div>
  );
};

export default AirportList;
