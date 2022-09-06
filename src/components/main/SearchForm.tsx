import React, { useState } from "react";

import SearchFormItem from "./SearchFormItem";

const SearchForm: React.FC = (): JSX.Element => {
  let [flights, setFlights] = useState([0]);

  const handleAddFlight = () => {
    // const lastForm = document.getElementById(
    //   String(flights.length - 1)
    // ) as HTMLFormElement;
    // console.log(lastForm);
    // lastForm?.submit();
    // console.error(
    //   (document.forms[flights.length - 1].elements[0] as HTMLInputElement).value
    // );
    setFlights([...flights, 0]);
  };

  const handleItemSubmit = () => {};

  return (
    <div>
      {flights.map((flight, index) => (
        <SearchFormItem
          key={index}
          idx={String(index)}
          length={flights.length}
          handleAddFlight={handleAddFlight}
        />
      ))}
    </div>
  );
};

export default SearchForm;
