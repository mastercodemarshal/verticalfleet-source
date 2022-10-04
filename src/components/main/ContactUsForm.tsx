import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

import { forePhoneNumbers } from "../../constants";

const ContactUsForm: React.FC = (): JSX.Element => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "1",
    phoneNumber: "",
    description: "",
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

  const handleChange = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleChangePhoneNumber = (e: BaseSyntheticEvent) => {
    if (!isNaN(e.target.value)) {
      setState({ ...state, phoneNumber: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkValidation()) {
      toast("Submitted successfully", {
        type: "success",
      });

      emailjs.send(
        "service_ianvuaa",
        "template_p07dede",
        {
          name: `${state.firstName} ${state.lastName}`,
          email: state.email,
          mobile: `+${state.countryCode} ${state.phoneNumber}`,
          message: state.description,
        },
        "4eY4rhuUqS2MvMcSS"
      );

      setState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "1",
        description: "",
        phoneNumber: "",
      });
      setShowValidationError(false);
    } else {
      setShowValidationError(true);
    }
  };

  const checkValidation = () => {
    const { firstName, lastName, email, phoneNumber, description } = state;

    return firstName && lastName && email && phoneNumber && description;
  };

  return (
    <form>
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
            />
            {showValidationError && (
              <div className="invisible peer-invalid:visible text-red-700 text-[14px] text-white absolute bg-white px-[5px] py-[2px] -top-[10px] right-[10px]">
                Please enter your email
              </div>
            )}
          </div>

          <div className="flex items-center max-h-[150px] relative">
            +
            <input
              type="text"
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
              className="xl:w-[100px] h-[40px] xl:max-w-[100px] max-w-[92px] w-full py-[9px] px-[15px] mr-[10px] bg-white border border-[#D7D7D7] focus:border-2 focus:border-[#86CEEB] focus:outline-none rounded-[5px] placeholder:text-[#494949] text-[16px] leading-[22px] font-open_sans font-normal"
            />
            {showCountryCode && (
              <div className="max-h-[150px] overflow-auto xl:w-[100px] w-[92px] border bg-white absolute top-[40px] left-[10px] z-10">
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
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={handleChangePhoneNumber}
              className="py-[9px] h-[40px] peer rounded-[5px] px-[15px] xl:w-[198px] xl:max-w-[198px] max-w-[182px] w-full bg-white border border-[#D7D7D7] focus:border-2 focus:border-[#86CEEB] focus:outline-none rounded-[2px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
              placeholder="Phone number*"
              required
              autoComplete="off"
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
              className="peer py-[9px] h-full px-[15px] xl:w-[320px] xl:max-w-[320px] max-w-[296px] w-full bg-white border border-[#D7D7D7] focus:border-2 focus:border-[#86CEEB] focus:outline-none rounded-[5px] placeholder:text-[#A9A9A9] text-[16px] leading-[22px] font-open_sans font-normal"
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
          <p className="text-[12px] leading-[14px] font-open_sans font-normal text-[#A9A9A9] ml-[5px]">
            By submitting my contact information I agree to discuss my travel
            arrangements.{" "}
          </p>
        </div>
        <div
          onClick={handleSubmit}
          className="cursor-pointer flex justify-center mx-auto xl:bg-[#F3E351] bg-white xl:border-none border rounded-[5px] border-[#494949] xl:opacity-[.5] hover:opacity-[.8] active:opacity-[1] xl:w-[205px] xl:max-w-[205px] max-w-[285px] w-full xl:mt-0 mt-[20px] uppercase xl:mr-[57px] px-[75px] py-[10px] text-[#10091D] font-open_sans font-bold text-[14px] leading-[19px]"
        >
          submit
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
