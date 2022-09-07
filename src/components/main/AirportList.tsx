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
  return (
    <ul className="absolute top-[67px] left-0 lg:w-[760px] w-[600px] bg-white max-h-[350px] overflow-auto z-50">
      {airportList?.map((data, index) => {
        if (!data) {
          return (
            <li
              key={index}
              className="text-[#10091D] border-t font-open_sans px-[15px] py-[9px] flex justify-between items-cemter"
            >
              <p className="text-[16px] leading-[22px]">Type to search</p>
            </li>
          );
        } else {
          return (
            <li
              key={index}
              onClick={() => onSelect(data)}
              className="text-[#10091D] border-t font-open_sans hover:bg-[#F3E351] active:bg-[#F3E351]/[.7] px-[15px] py-[9px] flex justify-between items-cemter"
            >
              <p className="text-[16px] leading-[22px]">
                ({data.city_code}) <span>{data.city}</span> {data.country} -{" "}
                {data.airport}
              </p>
              <p className="text-[14px] leading-[19px]">
                Press enter to select
              </p>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default AirportList;
