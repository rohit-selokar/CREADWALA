import React from "react";
import work from "../assets/work.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Work = () => {
  return (
    <div className=" lg:flex lg:mx-8 items-center justify-center">
      <div className="mx-8 xl:pr-32">
        <div className="text-center my-4  lg:text-start lg:my-8">
          <p className="text-[25px] font-bold lg:text-[34px] xl:text-[35px]">
            how <span className="text-[#474FFF]">credwala</span> works ?
          </p>
          <p className="text-[#111111] text-[15px] lg:my-2">
            Credwala connects personal loan borrowers with investors
          </p>
        </div>
        <div className=" md:mx-32 lg:mx-0">
          <div className="flex items-center my-2">
            <img src={img1} className="h-16 w-auto" />
            <p className="font-semibold text-[15px] p-3">
              Digitally Connect borrowers and investors
            </p>
          </div>
          <div className="flex items-center my-2">
            <img src={img2} className="h-16 w-auto" />
            <p className="font-semibold text-[15px] p-3">
              Documentation & Disbursement of Loans
            </p>
          </div>
          <div className="flex items-center my-2">
            <img src={img3} className="h-16 w-auto" />
            <p className="font-semibold text-[15px] p-3">
              Automated monthly EMI collection & transfer
            </p>
          </div>
        </div>
      </div>
      <div className=" md:mx-32 lg:mx-0">
        <img src={work} className="md:h-96 lg:h-80" />
      </div>
    </div>
  );
};

export default Work;
