import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import "../app.css";

const Slide = () => {
  return (
    <div className="text-center py-6 bg-[#e3faf5]">
      <p className="font-bold text-[25px] lg:text-[33px] md:mx-52 lg:mx-72 xl:mx-[30%] tracking-wide xl:text-[42px] xl:mb-2">
        <span className="text-[#474FFF]">Our partners</span> from across the
        industry
      </p>
      <div className="overflow-hidden">
        <div className="my-2 inset-y-0 left-0 right-0 flex justify-center items-center space-x-3 animate-slide-Right">
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
          <img src={logo3} alt="Logo 3" className="w-44 h-20" />
          <img src={logo4} alt="Logo 4" className="w-44 h-20" />
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
          <img src={logo3} alt="Logo 3" className="w-44 h-20" />
          <img src={logo4} alt="Logo 4" className="w-44 h-20" />
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
        </div>

        <div className="my-2 inset-y-0 left-0 right-0 flex justify-center items-center space-x-3 animate-slide-Left">
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
          <img src={logo3} alt="Logo 3" className="w-44 h-20" />
          <img src={logo4} alt="Logo 4" className="w-44 h-20" />
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
          <img src={logo3} alt="Logo 3" className="w-44 h-20" />
          <img src={logo4} alt="Logo 4" className="w-44 h-20" />
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
        </div>

        <div className="inset-y-0 left-0 right-0 flex justify-center items-center space-x-3 animate-slide-Right">
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
          <img src={logo3} alt="Logo 3" className="w-44 h-20" />
          <img src={logo4} alt="Logo 4" className="w-44 h-20" />
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
          <img src={logo3} alt="Logo 3" className="w-44 h-20" />
          <img src={logo4} alt="Logo 4" className="w-44 h-20" />
          <img src={logo1} alt="Logo 1" className="w-44 h-20" />
          <img src={logo2} alt="Logo 2" className="w-44 h-20" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
