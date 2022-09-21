import React, { BaseSyntheticEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

import { forePhoneNumbers } from "../../constants";

interface IFlightProps {
  flightStates: any;
}

const ContactForm: React.FC<IFlightProps> = ({ flightStates }): JSX.Element => {
  const [state, setState] = useState({
    name: "",
    email: "",
    countryCode: "1",
    phonenumber: "",
  });

  const [showValidationError, setShowValidationError] = useState(false);
  const [showCountryCode, setShowCountryCode] = useState(false);
  const [filteredCountryCode, setFilteredCountryCode] = useState(
    [] as string[]
  );

  useEffect(() => {
    const numbers: string[] = forePhoneNumbers.filter((item, index) =>
      item.toString().includes(state.countryCode)
    );

    setFilteredCountryCode(numbers);
  }, [state.countryCode]);

  const navigate = useNavigate();

  const handleChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleChangePhoneNumber = (e: BaseSyntheticEvent) => {
    if (!isNaN(e.target.value)) {
      setState({ ...state, phonenumber: e.target.value });
    }
  };

  const handleSubmit = () => {
    if (checkValidation()) {
      toast("Submitted successfully!", {
        type: "success",
      });
      navigate("/result");

      emailjs.send(
        "service_qgxwut5",
        "template_9r50pbw",
        {
          name: `${state.name}`,
          email: state.email,
          mobile: `+${state.countryCode} ${state.phonenumber}`,
          departure_city: flightStates[0].current,
          departure_date: flightStates[0].dateFrom,
          arrival_city: flightStates[0].destination,
          arrival_date: flightStates[0].dateTo,
          person: flightStates[0].passengers.split(":")[1],
          class: flightStates[0].passengers.split(":")[0],
        },
        "4eY4rhuUqS2MvMcSS"
      );
    } else {
      // toast("Please fill all inputs", {
      //   type: "error",
      // });
      setShowValidationError(true);
    }
  };

  const checkValidation = () => {
    const { name, email, countryCode, phonenumber } = state;

    return name && email && countryCode && phonenumber;
  };

  return (
    <>
      <form className="md:flex text-[#494949] md:space-y-0 space-y-[20px]">
        <div className="relative px-[15px] py-[14px] md:w-1/3 w-full bg-white border-r border-[#D7D7D7] md:rounded-l-[4px] md:rounded-r-none rounded-[4px] box-border">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="peer font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9]"
            placeholder="Your name"
            required
            autoComplete="off"
          />
          {showValidationError && (
            <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white px-[5px] py-[2px] absolute -top-[10px] bg-white right-[10px]">
              Please enter your name
            </div>
          )}
        </div>
        <div className="relative px-[15px] py-[14px] md:w-1/3 w-full bg-white border-r border-[#D7D7D7] md:rounded-none rounded-[4px] box-border">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            className="peer font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9]"
            placeholder="E-mail"
            required
            autoComplete="off"
          />
          {showValidationError && (
            <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white px-[5px] py-[2px] absolute -top-[10px] bg-white right-[10px]">
              Please enter your email
            </div>
          )}
        </div>
        <div className="flex md:w-1/3 min-w-[220px] w-full relative">
          <input
            type="number"
            name="countryCode"
            onFocus={() => setShowCountryCode(true)}
            onChange={(e) => {
              handleChange(e);
              setShowCountryCode(true);
            }}
            onBlur={() =>
              setTimeout(() => {
                setShowCountryCode(false);
              }, 200)
            }
            onKeyUp={(e) => {
              if (e.key === "Enter" && filteredCountryCode.length) {
                setState({ ...state, countryCode: filteredCountryCode[0] });
                setShowCountryCode(false);
              }
            }}
            value={state.countryCode}
            className="w-1/3 px-[15px] py-[14px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white md:rounded-none rounded-l-[4px]"
          />
          {showCountryCode && (
            <div className="max-h-[150px] overflow-auto w-1/3 border bg-white absolute top-[52px] left-0">
              {filteredCountryCode.length ? (
                filteredCountryCode.map((phone, index) => (
                  <div
                    key={index}
                    className="cursor-pointer hover:bg-gray-300 px-[5px]"
                    onClick={() => {
                      setState({ ...state, countryCode: `${phone}` });
                      setShowCountryCode(false);
                    }}
                  >
                    {phone}
                  </div>
                ))
              ) : (
                <div className="cursor-pointer hover:bg-gray-300 px-[5px]">
                  No result
                </div>
              )}
            </div>
          )}
          <input
            type="text"
            name="phonenumber"
            value={state.phonenumber}
            onChange={handleChangePhoneNumber}
            className="peer px-[15px] w-2/3 py-[14px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white rounded-r-[4px]"
            placeholder="Phone number"
            required
            autoComplete="off"
          />
          {showValidationError && (
            <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white px-[5px] py-[2px] absolute -top-[10px] bg-white right-[10px]">
              Please enter your phone number
            </div>
          )}
        </div>
      </form>
      <button
        onClick={handleSubmit}
        className="py-[14px] md:ml-[10px] md:w-[160px] w-full text-center text-[#10091D] font-open_sans font-bold text-[16px] leading-[22px] bg-[#F3E351] hover:bg-[#F3E351]/[.8] active:bg-[#F3E351]/[.6] rounded-[4px]"
      >
        Submit
      </button>
    </>
  );
};

export default ContactForm;
