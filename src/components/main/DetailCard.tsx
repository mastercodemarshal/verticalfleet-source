import React from "react";

// import ImgURL from "../../assets/img/main/dubai.png";

interface IDetailCardDataProps {
  data: {
    imgURL: string;
    city: string;
    from: string;
    price: string;
    num: number;
    img: string;
  };
}

const DetailCard: React.FC<IDetailCardDataProps> = ({ data }): JSX.Element => {
  return (
    <div
      className={`cursor-pointer ${
        // ""
        data.num % 2 === 0 ? "md:mt-0 mt-[50px]" : "mt-[50px]"
      }`}
    >
      <img
        className={`object-cover w-full ${
          ""
          //   data.num % 2 === 0 ? "-mt-[50px]" : ""
        }`}
        src={data.img}
        alt="img"
      />
      <div className="px-[16px] pt-[12px] shadow-[20px_10px_60px_rgba(0,0,0,0.15)] bg-white">
        <div className="flex justify-between text-[#645E70] font-hind font-normal text-[24px] leading-[24px]">
          <span>{data.city}</span>
          <span className="font-semibold">{data.price}</span>
        </div>
        <div className="flex justify-between text-[#645E70]/[.5] font-hind">
          <span className="text-[14px] leading-[19px] font-light">
            {data.from}
          </span>
          <span className="text-[12px] leading-[17px] font-normal">from</span>
        </div>
        <p className="text-[#645E70]/[.15] xl:tracking-[.2em] 2xl:tracking-[.42em] md:tracking-[.7em] tracking-[.25em] font-bold font-hind text-[21px] leading-[29px] mt-[16px] uppercase">
          business class
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
