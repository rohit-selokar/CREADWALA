import React from "react";
import first from "../assets/first.png";
import line from "../assets/line-image.png";

const First = () => {
  return (
    <div
      className="bg-[#F1F4FF] font-manrope text-center lg:flex items-center lg:text-start lg:px-6 xl:px-16"
      style={{
        backgroundImage: `url(${line})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:order-2 md:flex items-center justify-center lg:w-1/2">
        <img
          src={first}
          className="ml-8 md:ml-0 w-[360px] lg:mt-10 lg:w-[420px] xl:w-[630px]"
        />
      </div>

      <div className=" lg:order-1 lg:w-1/2 lg:px-6 xl:px-1">
        <p className="text-[25px] font-semibold lg:text-[34px] xl:text-[50px] xl:leading-snug">
          <span className="text-[#112FD1]">Credwala</span> today with online
          loans & more
        </p>
        <p className="my-2 lg:my-4 xl:my-6 xl:text-[23px] text-[#111111] xl:pr-36">
          With Identity, Smart, Simple tools for borrowing, saving & earning
        </p>
        <button class="btn btn-get-started bg-[#2943d3] my-2 text-white w-[160px] h-[45px] lg:w-[200px] rounded-full lg:mt-6 xl:mt-10 xl:text-[19px] xl:h-[49px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default First;
