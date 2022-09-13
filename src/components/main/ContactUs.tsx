import React, { BaseSyntheticEvent, useState } from "react";
import { toast } from "react-toastify";

import { forePhoneNumbers } from "../../constants";

const ContactUs: React.FC = (): JSX.Element => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const [showValidationError, setShowValidationError] = useState(false);

  const handleChange = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkValidation()) {
      toast("Submitted successfully", {
        type: "success",
      });

      setState({
        firstName: "",
        lastName: "",
        email: "",
        description: "",
        phoneNumber: "",
      });
      setShowValidationError(false);
    } else {
      // toast("Please fill all inputs", {
      //   type: "error",
      // });
      setShowValidationError(true);
    }
  };

  const checkValidation = () => {
    const { firstName, lastName, email, phoneNumber, description } = state;

    return firstName && lastName && email && phoneNumber && description;
  };

  return (
    <form className="bg-[#F5F5F5] pt-[80px] xl:px-0 px-[10px]">
      <div className="uppercase text-center font-hind font-bold md:text-[80px] leading-[100px] text-[44px] text-[#10091D]/[.1]">
        contact us
      </div>
      <div className="mt-[20px] flex justify-center">
        <div className="grid xl:grid-rows-2 grid-rows-6 grid-flow-col gap-x-[40px] gap-y-[20px]">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              className="py-[9px] h-[40px] peer rounded-[5px] px-[15px] xl:w-[320px] xl:max-w-[320px] max-w-[296px] w-full bg-white border border-[#D7D7D7] focus:border-2 focus:border-[#86CEEB] focus:outline-none rounded-[2px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
              placeholder="First name"
              required
            />
            {showValidationError && (
              <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white absolute bg-white px-[5px] py-[2px] -top-[10px] right-[10px]">
                Please enter your first name
              </div>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              className="peer py-[9px] h-[40px] rounded-[5px] px-[15px] xl:w-[320px] xl:max-w-[320px] max-w-[296px] w-full bg-white border border-[#D7D7D7] focus:border-2 focus:border-[#86CEEB] focus:outline-none rounded-[2px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
              placeholder="Last name"
              required
            />
            {showValidationError && (
              <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white absolute bg-white px-[5px] py-[2px] -top-[10px] right-[10px]">
                Please enter your last name
              </div>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className="peer py-[9px] h-[40px] rounded-[5px] px-[15px] xl:w-[320px] xl:max-w-[320px] max-w-[296px] w-full bg-white border border-[#D7D7D7] focus:border-2 focus:border-[#86CEEB] focus:outline-none rounded-[2px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
              placeholder="E-mail"
              required
            />
            {showValidationError && (
              <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white absolute bg-white px-[5px] py-[2px] -top-[10px] right-[10px]">
                Please enter your email
              </div>
            )}
          </div>

          <div className="flex items-center h-[40px] relative">
            +
            <select className="xl:w-[100px] xl:max-w-[100px] max-w-[92px] w-full py-[9px] px-[15px] mr-[10px] bg-white border border-[#D7D7D7] focus:border-2 focus:border-[#86CEEB] focus:outline-none rounded-[5px] placeholder:text-[#494949] text-[16px] leading-[22px] font-open_sans font-normal">
              {forePhoneNumbers.map((phone, index) => (
                <option value={phone} key={index}>
                  {phone}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={handleChange}
              className="py-[9px] peer rounded-[5px] px-[15px] xl:w-[198px] xl:max-w-[198px] max-w-[182px] w-full bg-white border border-[#D7D7D7] focus:border-2 focus:border-[#86CEEB] focus:outline-none rounded-[2px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
              placeholder="Phone number*"
              required
            />
            {showValidationError && (
              <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white absolute bg-white px-[5px] py-[2px] -top-[10px] right-[10px]">
                Please fill this field
              </div>
            )}
          </div>
          <div className="row-span-2 relative">
            <textarea
              name="description"
              value={state.description}
              onChange={handleChange}
              className="peer py-[9px] px-[15px] xl:w-[320px] xl:max-w-[320px] max-w-[296px] w-full bg-white border border-[#D7D7D7] focus:border-2 focus:border-[#86CEEB] focus:outline-none rounded-[5px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
              placeholder="Please describe what are you inquiring about"
              required
            ></textarea>
            {showValidationError && (
              <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white absolute bg-white px-[5px] py-[2px] -top-[10px] right-[10px]">
                Please enter the description
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="xl:flex justify-between mt-[31px] mx-auto xl:w-[1040px]">
        <div className="flex xl:justify-start justify-center xl:ml-0 mx-auto items-center xl:w-[550px] xl:max-w-[550px] max-w-[285px] w-full">
          <input
            type="checkbox"
            className="w-[14px] h-[16px] bg-white border border-[#D7D7D7] focus:border-2 focus:border-[#86CEEB] focus:outline-none rounded-[2px]"
          />
          <p className="text-[12px] leading-[14px] font-open_sans font-normal text-[#A9A9A9] ml-[5px]">
            By submitting my contact information I agree to discuss my travel
            arrangements.{" "}
          </p>
        </div>
        <button
          onClick={handleSubmit}
          className="flex justify-center mx-auto xl:bg-[#F3E351] bg-white xl:border-none border rounded-[5px] border-[#494949] xl:opacity-[.5] hover:opacity-[.8] active:opacity-[1] xl:w-[205px] xl:max-w-[205px] max-w-[285px] w-full xl:mt-0 mt-[20px] uppercase xl:mr-[57px] px-[75px] py-[10px] text-[#10091D] font-open_sans font-bold text-[14px] leading-[19px]"
        >
          submit
        </button>
      </div>
      <p className="container mx-auto mt-[152px] pb-[40px] text-[#10091D]/[.5] font-hind font-light text-[14px] leading-[19px] px-5 text-justify">
        * Price displayed is estimated and fluctuates based on route and
        destination, date and time of travel as well as how far ahead you’re
        booking. The fares will also vary based on class of travel availability.
        Savings of up to 75% off the retail price on Business & First Class
        Fares are based on unrestricted fares of major airlines and can vary
        based on fare rules.
      </p>
    </form>
  );
};

export default ContactUs;
