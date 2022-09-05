import React from "react";

import locationIcon from "../../assets/img/main/location.png";
import calendarIcon from "../../assets/img/main/calendar.png";
import usersIcon from "../../assets/img/main/users.png";

const SearchForm: React.FC = (): JSX.Element => {
  return (
    <div className="flex main-search-form">
      {/* <input
          type="text"
          className="py-[19px] px-[30px] rounded-l-[4px] border-r border-[#D7D7D7] focus:outline-none placeholder:text-[#A9A9A9]"
        /> */}
      <div className="h-[67px] cursor-pointer pl-[30px] from-input rounded-l-[4px] border-r border-[#D7D7D7] bg-white flex items-center">
        <div className="flex">
          <div className="mr-[9px]">
            <img src={locationIcon} alt="from" />
          </div>
          <div>
            <p className="font-hind font-bold text-[16px] leading-[107.5%] text-[#494949]">
              (SFO) San Francisco
            </p>
            <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
              UNITED STATES - California
            </p>
          </div>
        </div>
      </div>

      <div className="h-[67px] cursor-pointer pl-[30px] to-input border-r border-[#D7D7D7] bg-white flex items-center">
        <div className="flex">
          <div className="mr-[9px]">
            <img src={locationIcon} alt="from" />
          </div>
          <div>
            <p className="font-hind font-bold text-[16px] leading-[107.5%] text-[#494949]">
              (SLC) Salt Lake City
            </p>
            <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
              UNITED STATES - Utah
            </p>
          </div>
        </div>
      </div>

      <div className="date h-[67px] border-r border-[#D7D7D7] bg-white flex items-center justify-center">
        <div className="w-[50%] cursor-pointer flex items-center justify-center">
          <p className="font-hind font-normal text-[38px] leading-[38px] text-[#494949] mr-[5px] pt-[6px]">
            20
          </p>
          <div>
            <p className="flex items-center font-open_sans font-normal text-[16px] leading-[22px] text-[#494949]">
              Dec{" "}
              <div className="ml-[8px]">
                <img src={calendarIcon} alt="" />
              </div>
            </p>
            <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
              Tuesday
            </p>
          </div>
        </div>

        <div className="bg-[#D7D7D7] w-[1px] h-[52px]"></div>

        <div className="w-[50%] cursor-pointer flex items-center justify-center">
          <p className="font-hind font-normal text-[38px] leading-[38px] text-[#494949] mr-[5px] pt-[6px]">
            21
          </p>
          <div>
            <p className="flex items-center font-open_sans font-normal text-[16px] leading-[22px] text-[#494949]">
              Dec{" "}
              <div className="ml-[8px]">
                <img src={calendarIcon} alt="" />
              </div>
            </p>
            <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
              Wednesday
            </p>
          </div>
        </div>
      </div>

      <div className="users cursor-pointer h-[67px] pl-[40px] border-r border-[#D7D7D7] bg-white flex items-center">
        <div>
          <p className="font-hind font-bold text-[16px] leading-[18px] text-[#494949]">
            1 Passengers, BUSINESS
          </p>
          <div className="flex">
            <div className="mr-[5px]">
              <img src={usersIcon} alt="users-icon" />
            </div>
            <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
              1 Adult
            </p>
          </div>
        </div>
      </div>

      <button className="btn bg-[#F3E351] hover:bg-[#F3E351]/[.8] active:bg-[#F3E351]/[.6] rounded-r-[4px] flex items-center justify-center text-[#10091D] font-open_sans font-bold text-[18px] leading-[25px]">
        Get a quote
      </button>
    </div>
  );
};

export default SearchForm;
