import React, { BaseSyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { forePhoneNumbers } from "../../constants";

const ContactForm: React.FC = (): JSX.Element => {
  const [state, setState] = useState({
    name: "",
    email: "",
    preNumber: "1",
    phonenumber: "",
  });

  const [showValidationError, setShowValidationError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (checkValidation()) {
      toast("Submitted successfully!", {
        type: "success",
      });
      navigate("/result");
    } else {
      // toast("Please fill all inputs", {
      //   type: "error",
      // });
      setShowValidationError(true);
    }
  };

  const checkValidation = () => {
    const { name, email, preNumber, phonenumber } = state;

    return name && email && preNumber && phonenumber;
  };

  return (
    <>
      <form className="md:flex text-[#494949] md:space-y-0 space-y-[20px]">
        <div className="relative">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="peer px-[15px] py-[14px] md:w-1/3 w-full font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white border-r border-[#D7D7D7] md:rounded-l-[4px] md:rounded-r-none rounded-[4px] box-border"
            placeholder="Your name"
            required
          />
          {showValidationError && (
            <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white px-[5px] py-[2px] absolute -top-[10px] bg-white right-[10px]">
              Please enter your name
            </div>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            className="peer px-[15px] py-[14px] md:w-1/3 w-full font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white border-r border-[#D7D7D7] md:rounded-none rounded-[4px] box-border"
            placeholder="E-mail"
            required
          />
          {showValidationError && (
            <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white px-[5px] py-[2px] absolute -top-[10px] bg-white right-[10px]">
              Please enter your email
            </div>
          )}
        </div>
        <div className="flex md:w-1/3 min-w-[220px] w-full relative">
          <select
            name="preNumber"
            id="phonenumber"
            onChange={handleChange}
            defaultValue="1"
            className="px-[15px] w-1/3 px-[5px] py-[14px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white md:rounded-none rounded-l-[4px]"
          >
            {forePhoneNumbers.map((phone, index) => (
              <option value={phone} key={index}>
                +{phone}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="phonenumber"
            onChange={handleChange}
            className="peer px-[15px] w-2/3 py-[14px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white rounded-r-[4px]"
            placeholder="Phone number"
            required
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
