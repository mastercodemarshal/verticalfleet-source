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
      toast("Please fill all inputs", {
        type: "error",
      });
    }
  };

  const checkValidation = () => {
    const { name, email, preNumber, phonenumber } = state;

    return name && email && preNumber && phonenumber;
  };

  return (
    <>
      <form className="md:flex text-[#494949] md:space-y-0 space-y-[20px]">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="px-[15px] py-[14px] md:w-1/3 w-full font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white border-r border-[#D7D7D7] md:rounded-l-[4px] md:rounded-r-none rounded-[4px] box-border"
          placeholder="Your name"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="px-[15px] py-[14px] md:w-1/3 w-full font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white border-r border-[#D7D7D7] md:rounded-none rounded-[4px] box-border"
          placeholder="E-mail"
        />
        <div className="flex md:w-1/3 min-w-[220px] w-full">
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
            className="px-[15px] w-2/3 py-[14px] font-open_sans font-bold text-[16px] leading-[22px] focus:outline-none placeholder:text-[#A9A9A9] bg-white rounded-r-[4px]"
            placeholder="Phone number"
          />
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
