import React from "react";

interface IAirportListProps {
  airportList: AirPort[] | undefined;
  onSelect(arg: object): void;
}

type AirPort = {
  [x: string]: any;
  airport: string;
  country: string;
  city: string;
  iata_code: string;
};

const AirportList: React.FC<IAirportListProps> = ({
  airportList,
  onSelect,
}): JSX.Element => {
  const unique = airportList?.filter(
    (item, index, array) =>
      array.findIndex((t) => t.iata_code === item.iata_code) === index
  );

  return (
    <ul className="absolute top-[67px] left-0 lg:w-[760px] sm:w-[500px] bg-white max-h-[350px] overflow-auto shadow-[0px_4px_10px_rgba(0,0,0,0.2)] z-50">
      {unique?.map((data, index) => {
        return (
          <li
            key={index}
            onClick={() => onSelect(data)}
            className="text-[#10091D] font-open_sans border-b hover:bg-[#F3E351] active:bg-[#F3E351]/[.7] px-[15px] py-[9px] flex justify-between items-cemter"
          >
            <p className="sm:text-[16px] text-[14px] leading-[22px]">
              ({data.iata_code}) <span>{data.city}</span> {data.country} -{" "}
              {data.airport}
            </p>
            <p className="text-[14px] leading-[19px] xl:inline hidden">
              Press enter to select
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default AirportList;
