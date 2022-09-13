import React, { useState } from "react";

import plusIcon from "../../assets/img/main/plus.png";
import minusIcon from "../../assets/img/main/minus.png";

interface IPassengerProps {
  onSelect(arg: string[]): void;
  onCancel(): void;
}

const buttonClass = `h-[40px] hover:bg-[#F3E351] bg-white hover:border-none border border-[#A9A9A9] rounded-[2px]  py-[9px] text-[#10091D] font-open_sans text-[16px] leading-[22px] text-center`;
const passengersMock = [
  ["Adult", "18-64"],
  ["Senior", "65+"],
  ["Youth", "12-17"],
  ["Child", "2-11"],
  ["Seat Infant", "under 2"],
  ["Lap Infant", "under 2"],
];

const PassengerSelect: React.FC<IPassengerProps> = ({
  onSelect,
  onCancel,
}): JSX.Element => {
  const [passengerCount, setPassengerCount] = useState({
    adult: 0,
    senior: 0,
    youth: 0,
    child: 0,
    seat: 0,
    lap: 0,
  });

  const plusCount = (index) => {
    switch (index) {
      case 0:
        setPassengerCount({
          ...passengerCount,
          adult: passengerCount.adult + 1,
        });
        break;
      case 1:
        setPassengerCount({
          ...passengerCount,
          senior: passengerCount.senior + 1,
        });
        break;
      case 2:
        setPassengerCount({
          ...passengerCount,
          youth: passengerCount.youth + 1,
        });
        break;
      case 3:
        setPassengerCount({
          ...passengerCount,
          child: passengerCount.child + 1,
        });
        break;
      case 4:
        setPassengerCount({ ...passengerCount, seat: passengerCount.seat + 1 });
        break;

      default:
        setPassengerCount({ ...passengerCount, lap: passengerCount.lap + 1 });
        break;
    }
  };

  const minusCount = (index) => {
    switch (index) {
      case 0:
        setPassengerCount({
          ...passengerCount,
          adult: passengerCount.adult - 1 > 0 ? passengerCount.adult - 1 : 0,
        });
        break;
      case 1:
        setPassengerCount({
          ...passengerCount,
          senior: passengerCount.senior - 1 > 0 ? passengerCount.senior - 1 : 0,
        });
        break;
      case 2:
        setPassengerCount({
          ...passengerCount,
          youth: passengerCount.youth - 1 > 0 ? passengerCount.youth - 1 : 0,
        });
        break;
      case 3:
        setPassengerCount({
          ...passengerCount,
          child: passengerCount.child - 1 > 0 ? passengerCount.child - 1 : 0,
        });
        break;
      case 4:
        setPassengerCount({
          ...passengerCount,
          seat: passengerCount.seat - 1 > 0 ? passengerCount.seat - 1 : 0,
        });
        break;

      default:
        setPassengerCount({
          ...passengerCount,
          lap: passengerCount.lap - 1 > 0 ? passengerCount.lap - 1 : 0,
        });
        break;
    }
  };

  const getCount = (index) => {
    switch (index) {
      case 0:
        return passengerCount.adult;
      case 1:
        return passengerCount.senior;
      case 2:
        return passengerCount.youth;
      case 3:
        return passengerCount.child;
      case 4:
        return passengerCount.seat;

      default:
        return passengerCount.lap;
    }
  };

  const totalCount = () => {
    let str = "";

    if (passengerCount.adult > 0) {
      str += `adult ${passengerCount.adult}`;
    }

    if (passengerCount.senior > 0) {
      str += `  senior ${passengerCount.senior}`;
    }

    if (passengerCount.youth > 0) {
      str += `  youth ${passengerCount.youth}`;
    }

    if (passengerCount.child > 0) {
      str += `  child ${passengerCount.child}`;
    }

    if (passengerCount.seat > 0) {
      str += `  seat ${passengerCount.seat}`;
    }

    if (passengerCount.lap > 0) {
      str += `  lap ${passengerCount.lap}`;
    }

    const { adult, senior, youth, child, seat, lap } = passengerCount;

    return `${adult + senior + youth + child + seat + lap}:${str}`;
  };

  return (
    <div className="absolute top-[67px] left-0 py-[15px] px-[30px] bg-white sm:w-[330px] w-[300px]">
      <div className="grid grid-cols-2 gap-[10px]">
        <button
          className={buttonClass}
          onClick={() => onSelect(["economy", totalCount()])}
        >
          Economy
        </button>
        <button
          className={buttonClass}
          onClick={() => onSelect(["p.economy", totalCount()])}
        >
          P. Economy
        </button>
        <button
          className={buttonClass}
          onClick={() => onSelect(["bussiness", totalCount()])}
        >
          Business
        </button>
        <button
          className={buttonClass}
          onClick={() => onSelect(["first", totalCount()])}
        >
          First
        </button>
      </div>
      <div className="my-[15px] w-[330px] h-[1px] bg-[#D7D7D7]"></div>
      <div className="space-y-[18px]">
        {passengersMock.map((data, index) => (
          <div className="flex justify-between" key={index}>
            <span className="font-open_sans text-[16px] text-[#494949] leading-[22px]">
              {data[0]}
              <span className="ml-[6px] font-open_sans text-[#10091D] text-[12px] leading-[14px]">
                {data[1]}
              </span>
            </span>
            <div className="flex items-center space-x-[10px]">
              <img src={minusIcon} onClick={() => minusCount(index)} alt="" />
              <span>{getCount(index)}</span>
              <img src={plusIcon} onClick={() => plusCount(index)} alt="" />
            </div>
          </div>
        ))}
        <div
          className="bg-gray-700 hover:bg-gray-700 border border-black text-white text-center py-2 cursor-pointer"
          onClick={() => onCancel()}
        >
          Cancel
        </div>
      </div>
    </div>
  );
};

export default PassengerSelect;
