import React from "react";
import work from "../assets/work.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Work = () => {
  return (
    <div className="my-10 px-12 md:flex md:justify-around md:items-center">
      <div>
        <div className="text-center  md:text-start">
          <p className="text-[30px] font-bold lg:text-[34px] xl:text-[44px]">
            How <span className="text-[#474FFF] ">credwala</span> works ?
          </p>
          <p className="text-[#111111] text-[16px] md:my-2 lg:text-[18px] xl:text-[21px]">
            Credwala connects personal loan borrowers with investors
          </p>
        </div>
        <div className="md:p-3">
          <div className="flex items-center my-2 lg:my-4 xl:my-8">
            <img src={img1} className="w-14 lg:w-20 xl:w-24" />
            <p className="font-semibold text-[15px] p-2 md:p-5 lg:text-[17px] xl:text-[20px]">
              Digitally Connect borrowers and investors
            </p>
          </div>

          <div className="flex items-center my-2 lg:my-4 xl:my-8">
            <img src={img2} className="w-14 lg:w-20 xl:w-24" />
            <p className="font-semibold text-[15px] p-2 md:p-5 lg:text-[17px] xl:text-[20px]">
              Documentation & Disbursement of Loans
            </p>
          </div>

          <div className="flex items-center my-2 lg:my-4 xl:my-8">
            <img src={img3} className="w-14 lg:w-20 xl:w-24" />
            <p className="font-semibold text-[15px] p-2 md:p-5 lg:text-[17px] xl:text-[20px]">
              Automated monthly EMI collection & transfer
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:items-center">
        <img src={work} className="md:w-[350px] lg:w-[500px] xl:w-[600px]" />
      </div>
    </div>
  );
};

export default Work;
