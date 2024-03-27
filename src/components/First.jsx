import React from "react";
import first from "../assets/first.png";
import line from "../assets/line-image.png";

const First = () => {
  return (
    <div
      className="bg-[#f2f2f5] font-manrope text-center lg:flex items-center lg:text-start lg:px-6 xl:px-12"
      style={{
        backgroundImage: `url(${line})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:order-2 md:flex items-center justify-center xl:justify-start lg:w-1/2">
        <img
          src={first}
          className="ml-8 md:ml-0 w-[360px] lg:mt-10 lg:w-[420px] xl:w-[480px]"
        />
      </div>

      <div className="p-2 my-2mx-4 lg:order-1 lg:w-1/2 xl:p-10 lg:px-6">
        <p className="text-[25px] font-semibold lg:text-[34px] xl:text-[35px]">
          <span className="text-[#112FD1]">Credwala</span> today with online
          loans & more
        </p>
        <p className="my-2 lg:my-4">
          With Identity, Smart, Simple tools for borrowing, saving & earning
        </p>
        <button class="btn btn-get-started bg-[#102ED0] my-2 text-white w-[160px] h-[45px] lg:w-[180px] rounded-full lg:mt-6">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default First;
