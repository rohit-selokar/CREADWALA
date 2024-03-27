import React from "react";
import loan from "../assets/loan-process.png";

const Loan = () => {
  return (
    <div className="md:mx-16 my-10 xl:my-16">
      <div className="text-center mx-10 my-6 md:mx-16 lg:mx-40">
        <p className="font-bold text-[25px] my-3 lg:text-[34px] xl:text-[35px]">
          What do I need to do for a{" "}
          <span className="text-[#474FFF]">Personal Loan</span>
        </p>
        <p className="text-[16px]">
          Credwala makes entire borrowing process simple and user friendly You
          can get your loan funded in as little as 48 hours
        </p>
      </div>
      <div className="lg:flex justify-center lg:py-4 my-4">
        <img src={loan} className="h-46 lg:h-80 xl:w-[80%] xl:h-96" />
      </div>
    </div>
  );
};

export default Loan;
