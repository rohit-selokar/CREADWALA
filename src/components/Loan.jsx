import React from "react";
import loan from "../assets/loan-process.png";

const Loan = () => {
  return (
    <div className="md:mx-16 my-10 xl:my-20 ">
      <div className="text-center mx-10 my-6 md:mx-16">
        <p className="font-bold text-[25px] md:text-[26px] my-3 lg:text-[35px] xl:text-[45px]">
          What do I need to do for a{" "}
          <span className="text-[#474FFF]">Personal Loan</span>
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[21px] md:px-6 lg:px-16 xl:text-[26px] xl:px-52">
          Credwala makes entire borrowing process simple and user friendly You
          can get your loan funded in as little as 48 hours
        </p>
      </div>
      <div className="lg:flex justify-center my-8">
        <img src={loan} className=" xl:w-[1280px]" />
      </div>
    </div>
  );
};

export default Loan;
