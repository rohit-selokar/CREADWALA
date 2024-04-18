import React from "react";
import first from "../assets/first.png";
import line from "../assets/line-image.png";

const First = () => {
  return (
    <div
      className="bg-[#F1F4FF]"
      style={{
        backgroundImage: `url(${line})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="md:mx-4 container xl:mx-auto font-manrope text-center md:flex items-center md:text-start">
        <div className=" md:order-2 flex justify-center">
          <img src={first} className="lg:mt-2 w-[420px] xl:w-[750px]" />
        </div>

        <div className="md:order-1">
          <p className="text-[27px] font-semibold lg:text-[35px] xl:text-[50px] xl:leading-snug ">
            <span className="text-[#112FD1]">Credwala</span> today with online
            loans & more
          </p>
          <p className="my-4 xl:my-6 lg:text-[18px] xl:text-[22px] text-[#111111]">
            With Identity, Smart, Simple tools for borrowing, saving & earning
          </p>
          <button className="ripple btn btn-hover bg-[#2943d3] my-4 text-white w-[130px] h-[35px] lg:h-[45px] lg:w-[200px] rounded-full lg:mt-6 xl:mt-10 xl:text-[19px] xl:h-[49px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default First;
