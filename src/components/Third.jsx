import React from "react";
import img1 from "../assets/6229553-removebg-preview 1.png";
import img2 from "../assets/icon.png";
import img3 from "../assets/head shape.png";


const Third = () => {
  return (
    <div className="font-manrope my-10 bg-[#EEF1FF] lg:flex lg:p-4 lg:items-center lg:justify-center">
      <div className=" lg:flex lg:flex-col mx-6">
        <div className="lg:order-2 lg:my-6 lg:py-4">
          <img
            src={img1}
            className="hidden lg:flex w-[350px] h-[270px] lg:w-[440px] lg:h-[270px] xl:w-[470px] xl:h-[290px]"
          />
        </div>

        <div className="text-center lg:order-1 lg:text-start xl:mx-10">
          <p className="text-[25px] font-semibold lg:text-[34px]">
            Get your latest Credit Score
          </p>
          <p className="my-2">One powerful number that puts you in control</p>
          <button className="bg-[#102ED0] text-[15px] text-white w-[210px] h-[39px] my-4 rounded-full">
            Get Free Your Credit Score
          </button>
        </div>
      </div>

      <div className=" bg-[#FFFFFF] shadow-lg mx-6 md:mx-40 lg:mx-0 lg:w-[400px] xl:mx-8 rounded-md">
        <img src={img3} />
        <div className="p-3">
          <p className="text-[23px] font-semibold">Credwala</p>
          <div className="my-3 leading-relaxed">
            <div className="flex items-start">
              <img src={img2} className=" rounded-full w-[40px]" />
              <div className="ml-2">
                <p className="text-[15px] font-semibold">
                  Increase chances of application approval
                </p>
                <p className="text-[14px]">
                  A score of 750+ boosts your chances of getting a loan / Credit
                  Card
                </p>
              </div>
            </div>
            <div className="flex items-start my-6">
              <img src={img2} className=" rounded-full w-[40px]" />
              <div className="ml-2">
                <p className="text-[15px] font-semibold">
                  Increase chances of application approval
                </p>
                <p className="text-[14px]">
                  A score of 750+ boosts your chances of getting a loan / Credit
                  Card
                </p>
              </div>
            </div>
            <div className="flex items-start my-6">
              <img src={img2} className=" rounded-full w-[40px]" />
              <div className="ml-2">
                <p className="text-[15px] font-semibold">
                  Increase chances of application approval
                </p>
                <p className="text-[14px]">
                  A score of 750+ boosts your chances of getting a loan / Credit
                  Card
                </p>
              </div>
            </div>
            <div className="flex items-start my-6">
              <img src={img2} className=" rounded-full w-[40px]" />
              <div className="ml-2">
                <p className="text-[15px] font-semibold">
                  Increase chances of application approval
                </p>
                <p className="text-[14px]">
                  A score of 750+ boosts your chances of getting a loan / Credit
                  Card
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
