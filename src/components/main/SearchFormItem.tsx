import React, { BaseSyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import locationIcon from "../../assets/img/main/location.png";
import calendarIcon from "../../assets/img/main/calendar.png";
import usersIcon from "../../assets/img/main/users.png";

interface ISearchFormProps {
  idx: string;
  handleAddFlight: Function;
  length: number;
}

const SearchFormItem: React.FC<ISearchFormProps> = ({
  idx,
  length,
  handleAddFlight,
}): JSX.Element => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    editingCurrent: true,
    editingDestination: true,
    editingDateFrom: true,
    editingDateTo: true,
    editingUsers: true,
  });

  const [flightState, setFlightState] = useState({
    current: "",
    destination: "",
    dateFrom: "",
    dateTo: "",
    passengers: "",
  });

  const [flightsData, setFlightsData] = useState([] as object[]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    navigate("/landing");
    return;
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    const {
      target: { value, name },
    } = e;

    setFlightState({
      ...flightState,
      [name]: value,
    });
  };

  const handleItemSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    console.error([...flightsData, flightState]);

    if (checkValidation()) {
      setFlightsData([...flightsData, flightState]);

      handleAddFlight();
    } else {
      toast("Please fill all inputs", {
        type: "error",
      });
    }

    return;
  };

  const checkValidation = () => {
    const { current, destination, dateFrom, dateTo, passengers } = flightState;

    return current && destination && dateFrom && dateTo && passengers;
  };

  return (
    <div>
      <form id={idx} onSubmit={handleItemSubmit} className="main-search-form">
        <div className="grid grid-cols-12 xl:gap-0 md:gap-[15px]">
          <div className="xl:col-span-5 xl:flex md:col-span-9 col-span-12">
            {state.editingCurrent ? (
              <div
                onBlur={() =>
                  setState({
                    ...state,
                    editingCurrent: false,
                  })
                }
                className="h-[67px] cursor-pointer pl-[30px] xl:w-[50%] w-[100%] xl:mb-0 mb-[15px] xl:rounded-l-[4px] xl:rounded-r-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center"
              >
                <div className="mr-[9px]">
                  <img src={locationIcon} alt="from" />
                </div>
                <input
                  type="text"
                  name="current"
                  placeholder="From"
                  value={flightState.current}
                  onChange={handleChange}
                  className="focus:outline-none w-full"
                  autoFocus
                />
              </div>
            ) : (
              <div
                onClick={() => setState({ ...state, editingCurrent: true })}
                className="h-[67px] cursor-pointer pl-[30px] xl:w-[50%] w-[100%] xl:mb-0 mb-[15px] xl:rounded-l-[4px] xl:rounded-r-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center"
              >
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
            )}

            {state.editingDestination ? (
              <div className="flex h-[67px] focus:outline-none cursor-pointer pl-[30px] xl:w-[50%] w-[100%] md:mb-0 mb-[15px] xl:rounded-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center">
                <div className="mr-[9px]">
                  <img src={locationIcon} alt="from" />
                </div>
                <input
                  type="text"
                  placeholder="To"
                  name="destination"
                  value={flightState.destination}
                  onBlur={() =>
                    setState({
                      ...state,
                      editingDestination: false,
                    })
                  }
                  onChange={handleChange}
                  className="focus:outline-none w-full"
                  autoFocus
                />
              </div>
            ) : (
              <div
                onClick={() => setState({ ...state, editingDestination: true })}
                className="h-[67px] cursor-pointer pl-[30px] xl:w-[50%] w-[100%] md:mb-0 mb-[15px] xl:rounded-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center"
              >
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
            )}
          </div>

          <div className="xl:col-span-3 md:col-span-3 col-span-12 xl:flex md:block flex h-[67px] xl:rounded-none rounded-[4px] border-r border-[#D7D7D7] bg-white items-center justify-center">
            {state.editingDateFrom ? (
              <input
                type="date"
                placeholder="From"
                name="dateFrom"
                value={flightState.dateFrom}
                onBlur={() =>
                  setState({
                    ...state,
                    editingDateFrom: false,
                  })
                }
                autoFocus
                onChange={handleChange}
                className="xl:w-[50%] md:w-[100%] w-[50%] h-[67px] xl:mb-0 md:mb-[15px] mb-0 px-[20px] xl:rounded-none rounded-[4px] focus:outline-none cursor-pointer text-center"
              />
            ) : (
              <div
                onClick={() => setState({ ...state, editingDateFrom: true })}
                className="xl:w-[50%] md:w-[100%] w-[50%] h-[67px] xl:mb-0 md:mb-[15px] mb-0 cursor-pointer xl:rounded-none rounded-[4px] flex items-center justify-center"
              >
                <p className="font-hind font-normal text-[38px] leading-[38px] text-[#494949] mr-[5px] pt-[6px]">
                  20
                </p>
                <div>
                  <div className="flex items-center font-open_sans font-normal text-[16px] leading-[22px] text-[#494949]">
                    Dec{" "}
                    <div className="ml-[8px]">
                      <img src={calendarIcon} alt="" />
                    </div>
                  </div>
                  <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                    Tuesday
                  </p>
                </div>
              </div>
            )}

            <div className="bg-[#D7D7D7] xl:w-[1px] xl:h-[52px] md:w-0 md:h-0 sm:w-[1px] sm:h-[52px]"></div>

            {state.editingDateTo ? (
              <input
                type="date"
                name="dateTo"
                value={flightState.dateTo}
                onBlur={() =>
                  setState({
                    ...state,
                    editingDateTo: false,
                  })
                }
                autoFocus
                onChange={handleChange}
                className="xl:w-[50%] md:w-[100%] w-[50%] h-[67px] px-[20px] bg-white cursor-pointer xl:rounded-none rounded-[4px] flex items-center justify-center focus:outline-none"
              />
            ) : (
              <div
                onClick={() => setState({ ...state, editingDateTo: true })}
                className="xl:w-[50%] md:w-[100%] w-[50%] h-[67px] cursor-pointer bg-white flex xl:rounded-none rounded-[4px] items-center justify-center"
              >
                <p className="font-hind font-normal text-[38px] leading-[38px] text-[#494949] mr-[5px] pt-[6px]">
                  21
                </p>
                <div>
                  <div className="flex items-center font-open_sans font-normal text-[16px] leading-[22px] text-[#494949]">
                    Dec{" "}
                    <div className="ml-[8px]">
                      <img src={calendarIcon} alt="" />
                    </div>
                  </div>
                  <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                    Wednesday
                  </p>
                </div>
              </div>
            )}
          </div>

          {state.editingUsers ? (
            <input
              type="text"
              name="passengers"
              value={flightState.passengers}
              onBlur={() =>
                setState({
                  ...state,
                  editingUsers: false,
                })
              }
              autoFocus
              onChange={handleChange}
              placeholder="Passengers"
              className="xl:col-span-2 col-span-12 cursor-pointer h-[67px] pl-[40px] md:my-0 my-[15px] xl:rounded-none rounded-[4px] border-r border-[#D7D7D7] bg-white flex items-center focus:outline-none"
            />
          ) : (
            <div
              onClick={() => setState({ ...state, editingUsers: true })}
              className="xl:col-span-2 col-span-12 cursor-pointer h-[67px] pl-[40px] border-r md:my-0 my-[15px] xl:rounded-none rounded-[4px] border-[#D7D7D7] bg-white flex items-center"
            >
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
          )}

          {idx === "0" && (
            <button
              onClick={handleSubmit}
              className="xl:col-span-2 col-span-12 h-[67px] bg-[#F3E351] hover:bg-[#F3E351]/[.8] active:bg-[#F3E351]/[.6] xl:rounded-r-[4px] xl:rounded-l-none rounded-[4px] flex items-center justify-center text-[#10091D] font-open_sans font-bold text-[18px] leading-[25px]"
            >
              Get a quote
            </button>
          )}
        </div>
        {Number(idx) === length - 1 && (
          <button
            type="submit"
            className="underline bg-[#10091D]/[.5] text-white mt-[7px] px-[10px] py-[3px] font-open_sans font-bold text-[16px] leading-[22px]"
          >
            +Add flight
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchFormItem;
