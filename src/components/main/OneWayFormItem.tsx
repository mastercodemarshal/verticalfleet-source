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
import reloadIcon from "../../assets/img/main/reload.png";
import reFreshIcon from "../../assets/img/main/refresh.png";
import AirportList from "./AirportList";
import PassengerSelect from "./PassengerSelect";
import { FlightContext } from "../../App";

type AirPort = {
  airport: string;
  country: string;
  city: string;
  city_code: string;
  iata_code: string;
};

const OneWayFormItem: React.FC = (): JSX.Element => {
  const flightContext = useContext(FlightContext);

  const navigate = useNavigate();

  const [state, setState] = useState({
    editingCurrent:
      flightContext.flightState[0] && flightContext.flightState[0].current
        ? false
        : true,
    editingDestination:
      flightContext.flightState[0] && flightContext.flightState[0].destination
        ? false
        : true,
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

  const [dateFrom, setDateFrom] = useState(
    flightContext.flightState[0] && flightContext.flightState[0].dateFrom
      ? new Date(flightContext.flightState[0].dateFrom)
      : new Date()
  );

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
    current: flightContext.flightState[0]
      ? flightContext.flightState[0].current
      : "",
    destination: flightContext.flightState[0]
      ? flightContext.flightState[0].destination
      : "",
    passengers: ["Business", "1:1 traveler", "1,0,0,0,0,0"] as string[],
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

    const filteredData1 =
      airportsData?.filter((airport) =>
        airport.iata_code.includes(flightState.current.toUpperCase())
      ) || [];

    let filteredData2: any = [];

    if (!filteredData1.length) {
      filteredData2 =
        airportsData?.filter((airport) =>
          airport.city_code.includes(flightState.current.toUpperCase())
        ) || [];

      if (filteredData2.length) {
        filteredData2 = [
          {
            iata_code: filteredData2[0].city_code,
            city: filteredData2[0].city,
            country: filteredData2[0].country,
            airport: "All Airports",
          },
          ...filteredData2,
        ];
      }
    } else {
      filteredData2 = [];
    }

    const filteredData3 =
      airportsData?.filter(
        (airport) =>
          airport.city
            .toLowerCase()
            .includes(flightState.current.toLowerCase()) ||
          airport.airport
            .toLowerCase()
            .includes(flightState.current.toLowerCase())
      ) || [];

    return [...filteredData1, ...filteredData2, ...filteredData3];
  };

  const filterByDestination = () => {
    if (!flightState.destination) {
      return [];
    }

    const filteredData1 =
      airportsData?.filter((airport) =>
        airport.iata_code.includes(flightState.destination.toUpperCase())
      ) || [];

    let filteredData2: any = [];

    if (!filteredData1.length) {
      filteredData2 =
        airportsData?.filter((airport) =>
          airport.city_code.includes(flightState.destination.toUpperCase())
        ) || [];

      if (filteredData2.length) {
        filteredData2 = [
          {
            iata_code: filteredData2[0].city_code,
            city: filteredData2[0].city,
            country: filteredData2[0].country,
            airport: "All Airports",
          },
          ...filteredData2,
        ];
      }
    } else {
      filteredData2 = [];
    }

    const filteredData3 =
      airportsData?.filter(
        (airport) =>
          airport.city
            .toLowerCase()
            .includes(flightState.destination.toLowerCase()) ||
          airport.airport
            .toLowerCase()
            .includes(flightState.destination.toLowerCase())
      ) || [];

    return [...filteredData1, ...filteredData2, ...filteredData3];
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    if (checkValidation()) {
      flightContext.setFlightState([
        {
          ...flightContext.flightState[0],
          current: flightState.current,
          destination: flightState.destination,
          dateFrom: dateFrom,
          passengers: `${flightState.passengers[0]}:${
            flightState.passengers[1].split(":")[0]
          }`,
          type: window.location.pathname,
        },
      ]);
      navigate("/landing");
    } else {
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

  const onChangeDateFrom = (e) => {
    setDateFrom(e);

    flightContext.flightState[0].dateFrom = e;
    const nextDay = new Date();
    nextDay.setDate(e.getDate() + 1);
    flightContext.flightState[0].dateTo = nextDay;
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
      current: `${data.iata_code}, ${data.airport}, ${data.country}, ${data.city}`,
    });

    flightContext.flightState[0].current = `${data.iata_code}, ${data.airport}, ${data.country}, ${data.city}`;
  };

  const handleDestinationSelect = (data: AirPort): void => {
    setState({
      ...state,
      editingDestination: false,
    });

    setFlightState({
      ...flightState,
      destination: `${data.iata_code}, ${data.airport}, ${data.country}, ${data.city}`,
    });

    flightContext.flightState[0].destination = `${data.iata_code}, ${data.airport}, ${data.country}, ${data.city}`;
  };

  const handlePassengerSelect = (data) => {
    setFlightState({
      ...flightState,
      passengers: data,
    });
    setOpenUserSelect(false);

    flightContext.flightState[0].passengers = `${data[0]}:${
      data[1].split(":")[0]
    }`;
  };

  const changeDestination = () => {
    setFlightState({
      ...flightState,
      current: flightState.destination,
      destination: flightState.current,
    });

    setState({
      ...state,
      editingCurrent: false,
      editingDestination: false,
    });
  };

  const currentArray = flightState.current && flightState.current.split(", ");
  const destinationArray =
    flightState.destination && flightState.destination.split(", ");

  return (
    <div>
      <div className="main-search-form">
        <div className="grid grid-cols-12 xl:gap-0 md:gap-[15px]">
          <div className="xl:col-span-5 xl:flex md:col-span-9 col-span-12 relative">
            <>
              {state.editingCurrent ? (
                <div
                  onBlur={() => {
                    setTimeout(() => {
                      setOpenCurrentSelect(false);
                      // flightState.current &&
                      //   setState({ ...state, editingCurrent: false });
                      // currentFilteredList?.length &&
                      //   handleCurrentSelect(currentFilteredList[0]);
                    }, 200);
                  }}
                  className="h-[67px] cursor-pointer pl-[30px] relative xl:w-[50%] w-[100%] xl:mb-0 mb-[15px] xl:rounded-l-[4px] xl:rounded-r-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center"
                >
                  <div className="mr-[9px]">
                    <img src={locationIcon} alt="from" />
                  </div>
                  <input
                    type="text"
                    name="current"
                    placeholder="From"
                    // value={flightState.current}
                    onChange={handleChange}
                    onClick={() => {
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
                    {currentArray.length ? (
                      <div>
                        <p className="font-hind font-bold text-[16px] leading-[107.5%] text-[#494949]">
                          {`(${currentArray[0]}) ${currentArray[1]}`}
                        </p>
                        <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                          <span className="uppercase">{currentArray[2]}</span>
                          {` - ${currentArray[3]}`}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )}

              <div className="w-full flex justify-center inline-flex xl:hidden cursor-pointer absolute top-[60px]">
                <img
                  onClick={changeDestination}
                  src={reFreshIcon}
                  width="30px"
                  height="30px"
                  alt=""
                />
              </div>
            </>

            <div className="bg-white w-[16px] relative flex items-center xl:inline-flex hidden cursor-pointer">
              <img
                onClick={changeDestination}
                src={reloadIcon}
                width="16px"
                height="16px"
                className="absolute -left-[8px] bg-white top-[26px]"
                alt=""
              />
            </div>

            {state.editingDestination ? (
              <div
                onBlur={() => {
                  setTimeout(() => {
                    setOpenDestinationSelect(false);
                    // flightState.destination &&
                    //   setState({ ...state, editingDestination: false });
                    // destinationFilteredList?.length &&
                    //   handleDestinationSelect(destinationFilteredList[0]);
                  }, 200);
                }}
                className="flex h-[67px] focus:outline-none relative cursor-pointer pl-[30px] xl:w-[50%] w-[100%] md:mb-0 mb-[15px] xl:rounded-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center"
              >
                <div className="mr-[9px]">
                  <img src={locationIcon} alt="from" />
                </div>
                <input
                  type="text"
                  placeholder="To"
                  name="destination"
                  // value={flightState.destination}
                  onChange={handleChange}
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
                  {destinationArray.length ? (
                    <div>
                      <p className="font-hind font-bold text-[16px] leading-[107.5%] text-[#494949]">
                        {`(${destinationArray[0]}) ${destinationArray[1]}`}
                      </p>
                      <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                        <span className="uppercase">{destinationArray[2]}</span>
                        {` - ${destinationArray[3]}`}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="xl:col-span-3 md:col-span-3 col-span-12 xl:flex md:block flex h-[67px] xl:rounded-none rounded-[4px] border-r border-[#D7D7D7] bg-white items-center justify-center">
            {state.editingDateFrom ? (
              <div
                onBlur={(e) =>
                  !e.relatedTarget &&
                  setTimeout(() => {
                    setState({
                      ...state,
                      editingDateFrom: false,
                    });
                  }, 200)
                }
                tabIndex={1}
                // onClick={() =>
                //   setTimeout(() => {
                //     setState({
                //       ...state,
                //       editingDateFrom: false,
                //     });
                //   }, 200)
                // }
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
                  tileDisabled={({ date }) =>
                    date < new Date().setDate(new Date().getDate() - 1)
                  }
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
                    editingDateFrom: true,
                  });
                  setOpenCurrentSelect(false);
                  setOpenDestinationSelect(false);
                  setOpenUserSelect(false);
                }}
                className="xl:w-[50%] md:w-[100%] w-[50%] h-[67px] xl:mb-0 md:mb-[15px] mb-0 cursor-pointer xl:rounded-none rounded-[4px] border-t flex items-center justify-center"
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

          <div className="xl:col-span-2 relative col-span-12 cursor-pointer h-[67px] px-[30px] border-r border-t md:my-0 my-[15px] xl:rounded-none rounded-[4px] border-[#D7D7D7] bg-white flex items-center">
            <div
              onClick={() => {
                setOpenUserSelect(!openUserSelect);
                setState({
                  ...state,
                  editingDateFrom: false,
                  editingDateTo: false,
                });
                setTimeout(() => {
                  document.getElementById("selectUsers")?.focus();
                }, 200);
              }}
            >
              <p className="font-hind font-bold text-[16px] leading-[18px] text-[#494949]">
                {flightState.passengers[1]?.split(":")[0]}{" "}
                {flightState.passengers[1]?.split(":")[0] === "1"
                  ? "Passenger"
                  : "Passengers"}
                ,{" "}
                <span className="uppercase">
                  {flightState.passengers[0]
                    ? flightState.passengers[0]
                    : "business"}
                </span>
              </p>
              <div className="flex">
                <div className="mr-[5px]">
                  <img src={usersIcon} alt="users-icon" />
                </div>
                <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                  {flightState.passengers[1]?.split(":")[1]
                    ? flightState.passengers[1]?.split(":")[1]
                    : "1 traveler"}
                </p>
              </div>
            </div>
            {openUserSelect && (
              <PassengerSelect
                onSelect={handlePassengerSelect}
                preData={flightState.passengers}
              />
            )}
          </div>

          <div
            onClick={handleSubmit}
            className="cursor-pointer xl:col-span-2 col-span-12 h-[67px] bg-[#F3E351] hover:bg-[#F3E351]/[.8] active:bg-[#F3E351]/[.6] xl:rounded-r-[4px] xl:rounded-l-none rounded-[4px] flex items-center justify-center text-[#10091D] font-open_sans font-bold text-[18px] leading-[25px]"
          >
            Get a quote
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneWayFormItem;
