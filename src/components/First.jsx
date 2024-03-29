import React from "react";
import first from "../assets/first.png";
import line from "../assets/line-image.png";

const First = () => {
  return (
    <div
      className="bg-[#F1F4FF] font-manrope text-center md:flex items-center md:text-start md:px-6 xl:px-16"
      style={{
        backgroundImage: `url(${line})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="md:order-2 flex justify-center">
        <img
          src={first}
          className="w-[430px] md:w-[500px] lg:mt-2 lg:w-[420px] xl:w-[950px]"
        />
      </div>

      <div className="px-8 md:order-1 md:px-3 lg:px-6 xl:px-2">
        <p className="text-[27px] font-semibold lg:text-[34px] xl:text-[51px] xl:leading-snug">
          <span className="text-[#112FD1]">Credwala</span> today with online
          loans & more
        </p>
        <p className="my-2  md:my-4 xl:my-6 xl:text-[23px] text-[#111111] xl:pr-36">
          With Identity, Smart, Simple tools for borrowing, saving & earning
        </p>
        <button className=" bg-[#2943d3] my-4 text-white w-[130px] h-[35px] lg:h-[45px] lg:w-[200px] rounded-full lg:mt-6 xl:mt-10 xl:text-[19px] xl:h-[49px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default First;
