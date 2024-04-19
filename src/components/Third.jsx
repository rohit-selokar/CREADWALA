import React from "react";
// import img1 from "../assets/6229553-removebg-preview 1.png";
import img2 from "../assets/icon.png";
import img3 from "../assets/head shape.png";
import img1 from "../assets/bg-img.png";
import "../app.css";
// import "../script.js"

const Third = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto font-manrope py-6 md:py-14 md:flex md:justify-around xl:py-16">
        <div className="text-center md:text-start">
          <p className="text-[25px] font-semibold lg:text-[30px] xl:text-[40px]">
            Get your latest Credit Score
          </p>
          <p className="my-2 xl:my-4 xl:text-[20px]">
            One powerful number that puts you in control
          </p>
          <button className="btn btn-hover ripple bg-[#102ED0] text-[15px] text-white w-[210px] h-[39px] xl:text-[17px] xl:w-[260px] xl:h-[48px] my-4 lg:my-8 rounded-full">
            Get Free Your Credit Score
          </button>
        </div>

        <div className="bg-[#FFFFFF] shadow-lg mx-10 md:mx-0 rounded-2xl md:w-[350px] lg:w-[410px] xl:w-[500px] xl:pb-6">
          <img src={img3} className="xl:w-[500px]" />
          <div className="p-4 xl:py-6">
            <p className="text-[23px] font-semibold xl:text-[25px]">Credwala</p>
            <div className="my-3 lg:p-2">
              <div className="flex items-start mt-3">
                <img
                  src={img2}
                  className=" rounded-full w-[40px] xl:w-[60px]"
                />
                <div className="ml-2 lg:ml-6">
                  <p className="text-[14px] lg:text-[15px] font-semibold xl:text-[18px]">
                    Increase chances of application approval
                  </p>
                  <p className="text-[14px] xl:my-2 xl:text-[15px]">
                    A score of 750+ boosts your chances of getting a loan /
                    Credit Card
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-6">
                <img
                  src={img2}
                  className=" rounded-full w-[40px] xl:w-[60px]"
                />
                <div className="ml-2 lg:ml-6">
                  <p className="text-[14px] lg:text-[15px] font-semibold xl:text-[18px]">
                    Better offers
                  </p>
                  <p className="text-[14px] xl:my-2 xl:text-[15px]">
                    The better your score, the more offers you'll be eligible
                    for Better Offers
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-6">
                <img
                  src={img2}
                  className=" rounded-full w-[40px] xl:w-[60px]"
                />
                <div className="ml-2 lg:ml-6">
                  <p className="text-[14px] lg:text-[15px] font-semibold xl:text-[18px]">
                    Take charge of your finances
                  </p>
                  <p className="text-[14px] xl:my-2 xl:text-[15px]">
                    Understanding your score helps you take the right next steps
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-6">
                <img
                  src={img2}
                  className=" rounded-full w-[40px] xl:w-[60px]"
                />
                <div className="ml-2 lg:ml-6">
                  <p className="text-[14px] lg:text-[15px] font-semibold xl:text-[18px]">
                    Increase chances of application approval
                  </p>
                  <p className="text-[14px] xl:my-2 xl:text-[15px]">
                    A score of 750+ boosts your chances of getting a loan /
                    Credit Card
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
