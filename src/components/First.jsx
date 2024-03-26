import React from "react";
import first from "../assets/first.png";

const First = () => {
  return (
    <div className=" bg-[#f2f2f5] font-manrope text-center lg:flex items-center lg:text-start lg:px-6">
      <div className=" lg:order-2 md:flex items-center justify-center xl:justify-start lg:w-1/2">
        <img
          src={first}
          className=" ml-8 md:ml-0 w-[360px] lg:mt-10 lg:w-[430px] xl:mt-20 xl:ml-0 xl:w-[470px]"
        />
      </div>

      <div className=" p-2 my-2mx-4 lg:order-1 lg:w-1/2 xl:p-10 lg:px-6 xl:py-20">
        <p className="text-[25px] font-semibold lg:text-[34px]">
          <span className="text-[#112FD1]">Credwala</span> today with online
          loans & more
        </p>
        <p className="my-2 lg:my-4">
          With Identity, Smart, Simple tools for borrowing, saving & earning
        </p>
        <button className="bg-[#102ED0] my-2 text-white w-[160px] h-[45px] lg:w-[180px] rounded-full lg:mt-6">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default First;
