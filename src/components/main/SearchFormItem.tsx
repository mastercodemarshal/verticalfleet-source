import React, {
  BaseSyntheticEvent,
  useState,
  useEffect,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Papa, { ParseResult } from "papaparse";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import locationIcon from "../../assets/img/main/location.png";
import calendarIcon from "../../assets/img/main/calendar.png";
import usersIcon from "../../assets/img/main/users.png";
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
    editingDateFrom: true,
    editingDateTo: true,
    editingUsers: true,
  });

  const [openUserSelect, setOpenUserSelect] = useState(false);

  const [dateFrom, onChangeDateFrom] = useState(new Date());
  const [dateTo, onChangeDateTo] = useState(new Date());

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

  const [flightsData, setFlightsData] = useState([] as object[]);

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    if (checkValidation()) {
      flightContext.setFlightState([
        ...flightContext.flightState,
        {
          current: flightState.current,
          destination: flightState.destination,
          dateFrom: dateFrom,
          dateTo: dateTo,
          passengers: flightState.passengers[0],
          type: window.location.pathname,
        },
      ]);
      navigate("/landing");
    } else {
      toast("Please fill all inputs", {
        type: "error",
      });
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
    // console.error([...flightsData, flightState]);

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
    const { current, destination, passengers } = flightState;

    return current && destination && dateFrom && dateTo && passengers;
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
    <div>
      <form id={idx} onSubmit={handleItemSubmit} className="main-search-form">
        <div className="grid grid-cols-12 xl:gap-0 md:gap-[15px]">
          <div className="xl:col-span-5 xl:flex md:col-span-9 col-span-12">
            {state.editingCurrent ? (
              <div className="h-[67px] cursor-pointer pl-[30px] relative xl:w-[50%] w-[100%] xl:mb-0 mb-[15px] xl:rounded-l-[4px] xl:rounded-r-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center">
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
                <AirportList
                  airportList={currentFilteredList}
                  onSelect={handleCurrentSelect}
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

            {state.editingDestination ? (
              <div className="flex h-[67px] focus:outline-none relative cursor-pointer pl-[30px] xl:w-[50%] w-[100%] md:mb-0 mb-[15px] xl:rounded-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center">
                <div className="mr-[9px]">
                  <img src={locationIcon} alt="from" />
                </div>
                <input
                  type="text"
                  placeholder="To"
                  name="destination"
                  value={flightState.destination}
                  onChange={handleChange}
                  className="focus:outline-none w-full"
                  autoFocus
                />
                <AirportList
                  airportList={destinationFilteredList}
                  onSelect={handleDestinationSelect}
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
            {!state.editingDateFrom ? (
              <div className="relative xl:w-[50%] md:w-[100%] bg-white flex items-center w-[50%] h-[67px] xl:mb-0 md:mb-[15px] mb-0 px-[20px] xl:rounded-none rounded-[4px] border-t focus:outline-none cursor-pointer text-center">
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
                  className="absolute top-[65px] xl:left-0 md:right-0 left-0 min-w-[400px] z-50"
                  onChange={(e: React.SetStateAction<Date>) => {
                    onChangeDateFrom(e);
                    setState({
                      ...state,
                      editingDateFrom: true,
                    });
                  }}
                  value={dateFrom}
                />
              </div>
            ) : (
              <div
                onClick={() => setState({ ...state, editingDateFrom: false })}
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

            <div className="bg-[#D7D7D7] xl:w-[1px] xl:h-[52px] md:w-0 md:h-0 w-[1px] h-[52px]"></div>

            {!state.editingDateTo ? (
              <div className="relative xl:w-[50%] bg-white md:w-[100%] flex items-center w-[50%] h-[67px] xl:mb-0 md:mb-[15px] mb-0 px-[20px] xl:rounded-none rounded-[4px] border-t focus:outline-none cursor-pointer text-center">
                <p className="font-hind font-normal text-[38px] leading-[38px] text-[#494949] mr-[5px] pt-[6px]">
                  20
                </p>
                <div>
                  <div className="flex items-center font-open_sans font-normal text-[16px] leading-[22px] text-[#494949]">
                    {dateTo.toLocaleDateString("en-US", { month: "long" })}{" "}
                    <div className="ml-[8px]">
                      <img src={calendarIcon} alt="" />
                    </div>
                  </div>
                  <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                    {dateTo.toLocaleDateString("en-US", { weekday: "long" })}
                  </p>
                </div>
                <Calendar
                  className="absolute top-[65px] left-0 min-w-[400px] z-50"
                  onChange={(e: React.SetStateAction<Date>) => {
                    onChangeDateTo(e);
                    setState({
                      ...state,
                      editingDateTo: true,
                    });
                  }}
                  value={dateTo}
                />
              </div>
            ) : (
              <div
                onClick={() => setState({ ...state, editingDateTo: false })}
                className="xl:w-[50%] md:w-[100%] w-[50%] h-[67px] cursor-pointer bg-white flex xl:rounded-none rounded-[4px] border-t items-center justify-center"
              >
                <p className="font-hind font-normal text-[38px] leading-[38px] text-[#494949] mr-[5px] pt-[6px]">
                  {dateTo.getDate()}
                </p>
                <div>
                  <div className="flex items-center font-open_sans font-normal text-[16px] leading-[22px] text-[#494949]">
                    {dateTo.toLocaleDateString("en-US", { month: "short" })}{" "}
                    <div className="ml-[8px]">
                      <img src={calendarIcon} alt="" />
                    </div>
                  </div>
                  <p className="font-open_sans font-normal text-[12px] leading-[14px] text-[#494949]">
                    {dateTo.toLocaleDateString("en-US", { weekday: "long" })}
                  </p>
                </div>
              </div>
            )}
          </div>

          {state.editingUsers ? (
            <div className="xl:col-span-2 relative col-span-12 cursor-pointer h-[67px] px-[30px] md:my-0 my-[15px] xl:rounded-none rounded-[4px] border-r border-t border-[#D7D7D7] bg-white flex items-center focus:outline-none">
              <input
                type="text"
                name="passengers"
                value={flightState.passengers}
                onFocus={() => setOpenUserSelect(true)}
                onChange={handleChange}
                placeholder="Passengers"
                className="focus:outline-none w-full"
              />
              {openUserSelect && (
                <PassengerSelect onSelect={handlePassengerSelect} />
              )}
            </div>
          ) : (
            <div
              onClick={() => setState({ ...state, editingUsers: true })}
              className="xl:col-span-2 col-span-12 cursor-pointer h-[67px] px-[30px] border-r border-t md:my-0 my-[15px] xl:rounded-none rounded-[4px] border-[#D7D7D7] bg-white flex items-center"
            >
              <div>
                <p className="font-hind font-bold text-[16px] leading-[18px] text-[#494949]">
                  {flightState.passengers[1]?.split(":")[0]} Passengers,{" "}
                  <span className="uppercase">{flightState.passengers[0]}</span>
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

          {idx === "0" && (
            <button
              onClick={handleSubmit}
              className="xl:col-span-2 col-span-12 h-[67px] bg-[#F3E351] hover:bg-[#F3E351]/[.8] active:bg-[#F3E351]/[.6] xl:rounded-r-[4px] xl:rounded-l-none rounded-[4px] flex items-center justify-center text-[#10091D] font-open_sans font-bold text-[18px] leading-[25px]"
            >
              Get a quote
            </button>
          )}
        </div>
        {/* {Number(idx) === length - 1 && (
          <button
            type="submit"
            className="underline bg-[#10091D]/[.5] text-white mt-[7px] px-[10px] py-[3px] font-open_sans font-bold text-[16px] leading-[22px]"
          >
            +Add flight
          </button>
        )} */}
      </form>
    </div>
  );
};

export default SearchFormItem;
