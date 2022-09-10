import React, { useState } from "react";

import RoundTripFormItem from "./RoundTripFormItem";
import OneWayFormItem from "./OneWayFormItem";
import MultyCityFormItem from "./MultyCityFormItem";

const SearchForm: React.FC = (): JSX.Element => {
  let [flights, setFlights] = useState([0]);

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
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchForm;
