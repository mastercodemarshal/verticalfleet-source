import React, { useState } from "react";

import SearchFormItem from "./SearchFormItem";

const SearchForm: React.FC = (): JSX.Element => {
  let [flights, setFlights] = useState([0]);

  return (
    <div>
      {flights.map((flight, index) => (
        <SearchFormItem
          key={index}
          idx={String(index)}
          length={flights.length}
          handleAddFlight={() => setFlights([...flights, 0])}
        />
      ))}
    </div>
  );
};

export default SearchForm;
