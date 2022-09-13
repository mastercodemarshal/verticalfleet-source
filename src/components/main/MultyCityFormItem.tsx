import React, {
  BaseSyntheticEvent,
  useState,
  useEffect,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import Papa, { ParseResult } from "papaparse";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import locationIcon from "../../assets/img/main/location.png";
import calendarIcon from "../../assets/img/main/calendar.png";
import usersIcon from "../../assets/img/main/users.png";
// import reloadIcon from "../../assets/img/main/reload.png";
import AirportList from "./AirportList";
import PassengerSelect from "./PassengerSelect";
import { FlightContext } from "../../App";

interface ISearchFormProps {
  idx: string;
  handleAddFlight: Function;
  length: number;
}

type AirPort = {
  airport: string;
  country: string;
  city: string;
  city_code: string;
};

const SearchFormItem: React.FC<ISearchFormProps> = ({
  idx,
  length,
  handleAddFlight,
}): JSX.Element => {
  const flightContext = useContext(FlightContext);

  const navigate = useNavigate();

  const [state, setState] = useState({
    editingCurrent: true,
    editingDestination: true,
    editingDateFrom: false,
    editingDateTo: false,
    editingUsers: true,
  });

  const [showValidationError, setShowValidationError] = useState(false);

  const [openUserSelect, setOpenUserSelect] = useState(false);
  const [openCurrentSelect, setOpenCurrentSelect] = useState(false);
  const [openDestinationSelect, setOpenDestinationSelect] = useState(false);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [dateFrom, onChangeDateFrom] = useState(new Date());

  const [currentFilteredList, setCurrentFilteredList] = useState<
    AirPort[] | undefined
  >();
  const [destinationFilteredList, setDestinationFilteredList] = useState<
    AirPort[] | undefined
  >();

  const [airportsData, setAirportsData] = useState<AirPort[] | undefined>();

  useEffect(() => {
    Papa.parse("/database/GlobalAirportDatabase-Final.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<AirPort>) => {
        setAirportsData(results.data);
      },
    });
  }, []);

  const [flightState, setFlightState] = useState({
    current: "",
    destination: "",
    passengers: [] as string[],
  });

  useEffect(() => {
    var filteredData = filterByCurrent();

    setCurrentFilteredList(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flightState.current]);

  useEffect(() => {
    var filteredData = filterByDestination();

    setDestinationFilteredList(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flightState.destination]);

  const filterByCurrent = () => {
    if (!flightState.current) {
      return [];
    }

    const filteredData = airportsData?.filter((airport) =>
      airport.airport.toLowerCase().includes(flightState.current.toLowerCase())
    );

    return filteredData;
  };

  const filterByDestination = () => {
    if (!flightState.destination) {
      return [];
    }

    const filteredData = airportsData?.filter((airport) =>
      airport.airport
        .toLowerCase()
        .includes(flightState.destination.toLowerCase())
    );

    return filteredData;
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    if (checkValidation()) {
      flightContext.setFlightState([
        ...flightContext.flightState,
        {
          current: flightState.current,
          destination: flightState.destination,
          dateFrom: dateFrom,
          dateTo: dateFrom,
          passengers: flightState.passengers[0],
          type: window.location.pathname,
        },
      ]);
      navigate("/landing");
    } else {
      // toast("Please fill all inputs", {
      //   type: "error",
      // });
      setShowValidationError(true);
    }
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

    if (checkValidation()) {
      flightContext.setFlightState([
        ...flightContext.flightState,
        {
          current: flightState.current,
          destination: flightState.destination,
          dateFrom: dateFrom,
          dateTo: dateFrom,
          passengers: flightState.passengers[0],
          type: window.location.pathname,
        },
      ]);

      handleAddFlight();
    } else {
      // toast("Please fill all inputs", {
      //   type: "error",
      // });
      setShowValidationError(true);
    }

    return;
  };

  const checkValidation = () => {
    const { current, destination } = flightState;

    return current && destination && dateFrom;
  };

  const handleCurrentSelect = (data: AirPort): void => {
    setState({
      ...state,
      editingCurrent: false,
    });

    setFlightState({
      ...flightState,
      current: `${data.city_code}, ${data.airport}, ${data.country}, ${data.city}`,
    });
  };

  const handleDestinationSelect = (data: AirPort): void => {
    setState({
      ...state,
      editingDestination: false,
    });

    setFlightState({
      ...flightState,
      destination: `${data.city_code}, ${data.airport}, ${data.country}, ${data.city}`,
    });
  };

  const handlePassengerSelect = (data) => {
    setFlightState({
      ...flightState,
      passengers: data,
    });
    setState({
      ...state,
      editingUsers: false,
    });
  };

  const currentArray = flightState.current.split(", ");
  const destinationArray = flightState.destination.split(", ");

  return (
    <div className="xl:mt-0 mt-[15px]">
      <form id={idx} className="main-search-form">
        <div className="grid grid-cols-12 xl:gap-0 md:gap-[15px]">
          <div className="xl:col-span-5 xl:flex md:col-span-9 col-span-12">
            <>
              {state.editingCurrent ? (
                <div className="h-[67px] cursor-pointer pl-[30px] relative xl:w-[50%] w-[100%] xl:mb-0 mb-[15px] xl:rounded-l-[4px] xl:rounded-r-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center">
                  <div className="mr-[9px]">
                    <img src={locationIcon} alt="from" />
                  </div>
                  <input
                    type="text"
                    name="current"
                    placeholder="From"
                    // value={flightState.current}
                    onBlur={() =>
                      setTimeout(() => {
                        setOpenCurrentSelect(false);
                      }, 200)
                    }
                    onChange={handleChange}
                    onFocus={() => {
                      setOpenCurrentSelect(true);
                      setOpenDestinationSelect(false);
                      setOpenUserSelect(false);
                      setState({
                        ...state,
                        editingDateFrom: false,
                        editingDateTo: false,
                      });
                    }}
                    onKeyUp={(e) => {
                      if (e.key === "Enter" && currentFilteredList?.length) {
                        handleCurrentSelect(currentFilteredList[0]);
                      }
                    }}
                    className="focus:outline-none w-full peer"
                    autoFocus
                    required
                    autoComplete="off"
                  />
                  {showValidationError && (
                    <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white px-[5px] py-[2px] bg-white absolute -top-[10px] right-[10px]">
                      Please enter a valid depart city or airport
                    </div>
                  )}
                  {openCurrentSelect && (
                    <AirportList
                      airportList={currentFilteredList}
                      onSelect={handleCurrentSelect}
                    />
                  )}
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOpenUserSelect(false);
                    setState({
                      ...state,
                      editingDateFrom: false,
                      editingDateTo: false,
                      editingCurrent: true,
                    });
                  }}
                  className="h-[67px] cursor-pointer pl-[30px] xl:w-[50%] w-[100%] xl:mb-0 mb-[15px] xl:rounded-l-[4px] xl:rounded-r-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center"
                >
                  <div className="flex">
                    <div className="mr-[9px]">
                      <img src={locationIcon} alt="from" />
                    </div>
                    <div>
                      <p className="font-hind font-bold text-[16px] leading-[107.5%] text-[#494949]">
                        {`(${currentArray[0]}) ${currentArray[1]}`}
                      </p>
                      <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                        <span className="uppercase">{currentArray[2]}</span>
                        {` - ${currentArray[3]}`}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>

            {/* <div className="bg-white w-[16px] relative flex items-center xl:inline hidden">
              <img
                src={reloadIcon}
                width="16px"
                height="16px"
                className="absolute -left-[8px] bg-white top-[26px]"
                alt=""
              />
            </div> */}

            {state.editingDestination ? (
              <div className="flex h-[67px] focus:outline-none relative cursor-pointer pl-[30px] xl:w-[50%] w-[100%] md:mb-0 mb-[15px] xl:rounded-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center">
                <div className="mr-[9px]">
                  <img src={locationIcon} alt="from" />
                </div>
                <input
                  type="text"
                  placeholder="To"
                  name="destination"
                  // value={flightState.destination}
                  onChange={handleChange}
                  onBlur={() =>
                    setTimeout(() => {
                      setOpenDestinationSelect(false);
                    }, 200)
                  }
                  onFocus={() => {
                    setOpenDestinationSelect(true);
                    setOpenCurrentSelect(false);
                    setOpenUserSelect(false);
                    setState({
                      ...state,
                      editingDateFrom: false,
                      editingDateTo: false,
                    });
                  }}
                  onKeyUp={(e) => {
                    if (e.key === "Enter" && destinationFilteredList?.length) {
                      handleDestinationSelect(destinationFilteredList[0]);
                    }
                  }}
                  className="focus:outline-none w-full peer"
                  autoFocus
                  required
                  autoComplete="off"
                />
                {showValidationError && (
                  <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white px-[5px] py-[2px] bg-white absolute -top-[10px] right-[10px]">
                    Please enter a valid arrival city or airport
                  </div>
                )}
                {openDestinationSelect && (
                  <AirportList
                    airportList={destinationFilteredList}
                    onSelect={handleDestinationSelect}
                  />
                )}
              </div>
            ) : (
              <div
                onClick={() => {
                  setOpenUserSelect(false);
                  setState({
                    ...state,
                    editingDateFrom: false,
                    editingDateTo: false,
                    editingDestination: true,
                  });
                }}
                className="h-[67px] cursor-pointer pl-[30px] xl:w-[50%] w-[100%] md:mb-0 mb-[15px] xl:rounded-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center"
              >
                <div className="flex">
                  <div className="mr-[9px]">
                    <img src={locationIcon} alt="from" />
                  </div>
                  <div>
                    <p className="font-hind font-bold text-[16px] leading-[107.5%] text-[#494949]">
                      {`(${destinationArray[0]}) ${destinationArray[1]}`}
                    </p>
                    <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                      <span className="uppercase">{destinationArray[2]}</span>
                      {` - ${destinationArray[3]}`}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="xl:col-span-3 md:col-span-3 col-span-12 xl:flex md:block flex h-[67px] xl:rounded-none rounded-[4px] border-r border-[#D7D7D7] bg-white items-center justify-center">
            {state.editingDateFrom ? (
              <div
                onBlur={() =>
                  setTimeout(() => {
                    setState({
                      ...state,
                      editingDateFrom: false,
                    });
                  }, 200)
                }
                tabIndex={1}
                onClick={() =>
                  setTimeout(() => {
                    setState({
                      ...state,
                      editingDateFrom: false,
                    });
                  }, 200)
                }
                className="relative xl:w-[100%] md:w-[100%] bg-white flex items-center w-[100%] h-[67px] xl:mb-0 md:mb-[15px] mb-0 px-[20px] xl:rounded-none rounded-[4px] border-t focus:outline-none cursor-pointer justify-center"
              >
                <p className="font-hind font-normal text-[38px] leading-[38px] text-[#494949] mr-[5px] pt-[6px]">
                  {dateFrom.getDate()}
                </p>
                <div>
                  <div className="flex items-center font-open_sans font-normal text-[16px] leading-[22px] text-[#494949]">
                    {dateFrom.toLocaleDateString("en-US", { month: "short" })}{" "}
                    <div className="ml-[8px]">
                      <img src={calendarIcon} alt="" />
                    </div>
                  </div>
                  <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                    {dateFrom.toLocaleDateString("en-US", { weekday: "long" })}
                  </p>
                </div>
                <Calendar
                  className="absolute top-[65px] xl:left-0 md:right-0 left-0 md:min-w-[320px] min-w-[299px] z-50"
                  onChange={(e: React.SetStateAction<Date>) => {
                    onChangeDateFrom(e);
                    setState({
                      ...state,
                      editingDateFrom: false,
                    });
                  }}
                  value={dateFrom}
                />
              </div>
            ) : (
              <div
                onBlur={() =>
                  setTimeout(() => {
                    setState({
                      ...state,
                      editingDateFrom: false,
                    });
                  }, 200)
                }
                tabIndex={2}
                onClick={() => {
                  setState({
                    ...state,
                    editingDateTo: false,
                    editingUsers: false,
                    editingDateFrom: true,
                  });
                  setOpenCurrentSelect(false);
                  setOpenDestinationSelect(false);
                }}
                className="xl:w-[100%] md:w-[100%] w-[100%] h-[67px] xl:mb-0 md:mb-[15px] mb-0 cursor-pointer xl:rounded-none rounded-[4px] border-t flex items-center justify-center"
              >
                <p className="font-hind font-normal text-[38px] leading-[38px] text-[#494949] mr-[5px] pt-[6px]">
                  {dateFrom.getDate()}
                </p>
                <div>
                  <div className="flex items-center font-open_sans font-normal text-[16px] leading-[22px] text-[#494949]">
                    {dateFrom.toLocaleDateString("en-US", { month: "short" })}{" "}
                    <div className="ml-[8px]">
                      <img src={calendarIcon} alt="" />
                    </div>
                  </div>
                  <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                    {dateFrom.toLocaleDateString("en-US", { weekday: "long" })}
                  </p>
                </div>
              </div>
            )}
          </div>

          {Number(idx) === length - 1 && (
            <div
              onClick={handleItemSubmit}
              className="cursor-pointer xl:hidden inline w-[150px] text-center underline bg-[#10091D]/[.5] text-white mt-[7px] px-[10px] py-[3px] font-open_sans font-bold text-[16px] leading-[22px]"
            >
              +Add flight
            </div>
          )}

          <>
            {idx === "0" && (
              <>
                {state.editingUsers ? (
                  <div className="xl:inline-flex hidden xl:col-span-2 relative col-span-12 cursor-pointer h-[67px] px-[30px] md:my-0 my-[15px] xl:rounded-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center focus:outline-none">
                    <div className="mr-[5px]">
                      <img src={usersIcon} alt="" />
                    </div>
                    <input
                      type="text"
                      name="passengers"
                      // value={flightState.passengers}
                      onClick={() => setOpenUserSelect(!openUserSelect)}
                      onChange={handleChange}
                      placeholder="Passengers"
                      className="focus:outline-none w-full"
                      autoFocus
                      autoComplete="off"
                    />
                    {openUserSelect && (
                      <PassengerSelect
                        onSelect={handlePassengerSelect}
                        onCancel={() => setOpenUserSelect(false)}
                      />
                    )}
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setState({
                        ...state,
                        editingDateFrom: false,
                        editingDateTo: false,
                        editingUsers: true,
                      });
                      setOpenCurrentSelect(false);
                      setOpenDestinationSelect(false);
                    }}
                    className="xl:inline-flex hidden xl:col-span-2 col-span-12 cursor-pointer h-[67px] px-[30px] border-r border-t md:my-0 my-[15px] xl:rounded-none rounded-[4px] border-[#D7D7D7] bg-white flex items-center"
                  >
                    <div>
                      <p className="font-hind font-bold text-[16px] leading-[18px] text-[#494949]">
                        {flightState.passengers[1]?.split(":")[0]} Passengers,{" "}
                        <span className="uppercase">
                          {flightState.passengers[0]}
                        </span>
                      </p>
                      <div className="flex">
                        <div className="mr-[5px]">
                          <img src={usersIcon} alt="users-icon" />
                        </div>
                        <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                          {flightState.passengers[1]?.split(":")[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </>

          {idx === "0" && (
            <div
              onClick={handleSubmit}
              className="cursor-pointer xl:inline-flex hidden xl:col-span-2 col-span-12 h-[67px] bg-[#F3E351] hover:bg-[#F3E351]/[.8] active:bg-[#F3E351]/[.6] xl:rounded-r-[4px] xl:rounded-l-none rounded-[4px] flex items-center justify-center text-[#10091D] font-open_sans font-bold text-[18px] leading-[25px]"
            >
              Get a quote
            </div>
          )}

          <>
            {Number(idx) === length - 1 && (
              <>
                {state.editingUsers ? (
                  <div className="xl:hidden inline-flex xl:col-span-2 relative col-span-12 cursor-pointer h-[67px] px-[30px] md:my-0 my-[15px] xl:rounded-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center focus:outline-none">
                    <div className="mr-[5px]">
                      <img src={usersIcon} alt="" />
                    </div>
                    <input
                      type="text"
                      name="passengers"
                      // value={flightState.passengers}
                      onClick={() => setOpenUserSelect(!openUserSelect)}
                      onChange={handleChange}
                      placeholder="Passengers"
                      className="focus:outline-none w-full"
                      autoFocus
                      autoComplete="off"
                    />
                    {openUserSelect && (
                      <PassengerSelect
                        onSelect={handlePassengerSelect}
                        onCancel={() => setOpenCurrentSelect(false)}
                      />
                    )}
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setState({
                        ...state,
                        editingDateFrom: false,
                        editingDateTo: false,
                        editingUsers: true,
                      });
                      setOpenCurrentSelect(false);
                      setOpenDestinationSelect(false);
                    }}
                    className="xl:hidden inline-flex xl:col-span-2 col-span-12 cursor-pointer h-[67px] px-[30px] border-r border-t md:my-0 my-[15px] xl:rounded-none rounded-[4px] border-[#D7D7D7] bg-white flex items-center"
                  >
                    <div>
                      <p className="font-hind font-bold text-[16px] leading-[18px] text-[#494949]">
                        {flightState.passengers[1]?.split(":")[0]} Passengers,{" "}
                        <span className="uppercase">
                          {flightState.passengers[0]}
                        </span>
                      </p>
                      <div className="flex">
                        <div className="mr-[5px]">
                          <img src={usersIcon} alt="users-icon" />
                        </div>
                        <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                          {flightState.passengers[1]?.split(":")[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </>

          {Number(idx) === length - 1 && (
            <div
              onClick={handleSubmit}
              className="cursor-pointer xl:hidden inline-flex xl:col-span-2 col-span-12 h-[67px] bg-[#F3E351] hover:bg-[#F3E351]/[.8] active:bg-[#F3E351]/[.6] xl:rounded-r-[4px] xl:rounded-l-none rounded-[4px] flex items-center justify-center text-[#10091D] font-open_sans font-bold text-[18px] leading-[25px]"
            >
              Get a quote
            </div>
          )}
        </div>

        {Number(idx) === length - 1 && (
          <div
            onClick={handleItemSubmit}
            className="cursor-pointer xl:inline-flex hidden underline bg-[#10091D]/[.5] text-white mt-[7px] px-[10px] py-[3px] font-open_sans font-bold text-[16px] leading-[22px]"
          >
            +Add flight
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchFormItem;
