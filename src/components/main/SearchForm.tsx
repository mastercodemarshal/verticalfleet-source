import React, { useContext, useState } from "react";

import RoundTripFormItem from "./RoundTripFormItem";
import OneWayFormItem from "./OneWayFormItem";
import MultyCityFormItem from "./MultyCityFormItem";
import { FlightContext } from "../../App";

const SearchForm: React.FC = (): JSX.Element => {
  let [flights, setFlights] = useState([0]);

  const flightContext = useContext(FlightContext);

  const path = window.location.pathname;

  return (
    <>
      {path.includes("one-way") ? (
        <OneWayFormItem />
      ) : path.includes("round-trip") ? (
        <div>
          <RoundTripFormItem />
        </div>
      ) : (
        <div>
          {flights.map((flight, index) => (
            <MultyCityFormItem
              key={index}
              idx={String(index)}
              length={flights.length}
              handleAddFlight={() => setFlights([...flights, 0])}
              lastDate={flightContext.flightState[index - 1]?.dateFrom}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchForm;
