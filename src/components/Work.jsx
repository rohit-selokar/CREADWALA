import React from "react";
import work from "../assets/work.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Work = () => {
  return (
    <div className=" lg:flex lg:my-10 lg:justify-around">
      <div className="mx-10">
        <div className="text-center my-4  lg:text-start">
          <p className="text-[25px] font-bold lg:text-[34px] xl:text-[45px]">
            How <span className="text-[#474FFF] ">credwala</span> works ?
          </p>
          <p className="text-[#111111] text-[15px] lg:my-2 lg:text-[18px] xl:text-[22px]">
            Credwala connects personal loan borrowers with investors
          </p>
        </div>
        <div className=" lg:p-3">
          <div className="flex items-center my-2 lg:my-4 xl:my-8">
            <img src={img1} className="w-20" />
            <p className="font-semibold text-[15px] p-5 lg:text-[17px] xl:text-[22px]">
              Digitally Connect borrowers and investors
            </p>
          </div>

          <div className="flex items-center my-2 lg:my-4 xl:my-8">
            <img src={img2} className="lg:w-20" />
            <p className="font-semibold text-[15px] p-5 lg:text-[17px] xl:text-[22px]">
              Documentation & Disbursement of Loans
            </p>
          </div>

          <div className="flex items-center my-2 lg:my-4 xl:my-8">
            <img src={img3} className="lg:w-20" />
            <p className="font-semibold text-[15px] p-5 lg:text-[17px] xl:text-[22px]">
              Automated monthly EMI collection & transfer
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:items-center">
        <img src={work} className="lg:w-[500px] xl:w-[600px]" />
      </div>
    </div>
  );
};

export default Work;
