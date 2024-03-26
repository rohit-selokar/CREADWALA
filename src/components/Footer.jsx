import React from "react";
import bank1 from "../assets/bank1.png";
import bank2 from "../assets/bank2.png";
import bank3 from "../assets/bank3.png";
import bank4 from "../assets/bank4.png";
import bank5 from "../assets/bank5.png";
import bank6 from "../assets/bank6.png";
import bank7 from "../assets/bank7.png";

const Footer = () => {
  return (
    <div className="bg-[#0C3033] text-white p-8">
      <div className="text-center">
        <p className="font-bold text-[25px] my-4 xl:text-[30px]">
          Trusted by{" "}
          <span className="text-[#FFE70E] text-[30px] xl:text-[35px]">150+ Banks</span>
        </p>
        <p>Choose best from 150+ Banks</p>
      </div>
      <div className="grid gap-2 grid-cols-4 my-10 md:grid-cols-8  lg:mx-20 xl:mx-60">
        <img src={bank1} className="h-20 w-20 lg:h-24 lg:w-24" />
        <img src={bank2} className="h-20 w-20 lg:h-24 lg:w-24" />
        <img src={bank3} className="h-20 w-20 lg:h-24 lg:w-24" />
        <img src={bank4} className="h-20 w-20 lg:h-24 lg:w-24" />
        <img src={bank5} className="h-20 w-20 lg:h-24 lg:w-24" />
        <img src={bank6} className="h-20 w-20 lg:h-24 lg:w-24" />
        <img src={bank7} className="h-20 w-20 lg:h-24 lg:w-24" />
        <img src={bank3} className="h-20 w-20 lg:h-24 lg:w-24" />
      </div>
    </div>
  );
};

export default Footer;
