// import React from "react";
// import bank1 from "../assets/bank1.png";
// import bank2 from "../assets/bank2.png";
// import bank3 from "../assets/bank3.png";
// import bank4 from "../assets/bank4.png";
// import bank5 from "../assets/bank5.png";
// import bank6 from "../assets/bank6.png";
// import bank7 from "../assets/bank7.png";
// import footer from "../assets/footer-bg.png";
// // import slide from "../assets/footer-slide.png";
// import "../app.css";

// const Footer = () => {
//   return (
//     <>
//       <div
//         className=" text-white p-8"
//         style={{
//           backgroundImage: `url(${footer})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         <div className="text-center">
//           <p className="font-semibold text-[25px] my-4 xl:text-[50px]">
//             Trusted by{" "}
//             <span className="text-[#FFE70E] text-[30px] xl:text-[60px]">
//               150+ Banks
//             </span>
//           </p>
//           <p className="text-[27px]">Choose best from 150+ Banks</p>
//         </div>
//         <div className="grid gap-2 grid-cols-4 my-10 xl:my-14 md:grid-cols-8  lg:mx-20">
//           <img src={bank1} className="w-20 lg:w-24 xl:w-32" />
//           <img src={bank2} className="w-20 lg:w-24 xl:w-32" />
//           <img src={bank3} className="w-20 lg:w-24 xl:w-32" />
//           <img src={bank4} className="w-20 lg:w-24 xl:w-32" />
//           <img src={bank5} className="w-20 lg:w-24 xl:w-32" />
//           <img src={bank6} className="w-20 lg:w-24 xl:w-32" />
//           <img src={bank7} className="w-20 lg:w-24 xl:w-32" />
//           <img src={bank3} className="w-20 lg:w-24 xl:w-32" />
//         </div>
//       </div>

//       <div className="bg-[#474FFF] py-6">
//         <p className="text-[17px] font-semibold text-center text-white">
//           Copyright 2024 © <span className="font-bold">CREDWALA</span>
//         </p>
//       </div>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bank1 from "../assets/bank1.png";
import bank2 from "../assets/bank2.png";
import bank3 from "../assets/bank3.png";
import bank4 from "../assets/bank4.png";
import bank5 from "../assets/bank5.png";
import bank6 from "../assets/bank6.png";
import bank7 from "../assets/bank7.png";
import footer from "../assets/footer-bg.png";

const Footer = () => {
  var settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    // cssEase:"linear"
    
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div
              className=" text-white p-8"
              style={{
                backgroundImage: `url(${footer})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="text-center">
                <p className="font-semibold my-4 text-[30px] xl:text-[40px]">
                  Trusted by{" "}
                  <span className="text-[#FFE70E] text-[40px] xl:text-[46px]">
                    150+ Banks
                  </span>
                </p>
                <p className="text-[20px] lg:text-[23px] xl:text-[25px]">Choose best from 150+ Banks</p>
              </div>
              <div className="grid gap-2 grid-cols-4 my-10 xl:my-14 md:grid-cols-8  lg:mx-20">
                <img src={bank1} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank2} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank3} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank4} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank5} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank6} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank7} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank3} className="w-16 md:w-20 lg:w-24 xl:w-28" />
              </div>
            </div>
          </div>

          <div>
            <div
              className=" text-white p-8"
              style={{
                backgroundImage: `url(${footer})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="text-center">
                <p className="font-semibold my-4 text-[30px] xl:text-[40px]">
                  Trusted by{" "}
                  <span className="text-[#FFE70E] text-[40px] xl:text-[46px]">
                    150+ Banks
                  </span>
                </p>
                <p className="text-[20px] lg:text-[23px] xl:text-[25px]">Choose best from 150+ Banks</p>
              </div>
              <div className="grid gap-2 grid-cols-4 my-10 xl:my-14 md:grid-cols-8  lg:mx-20">
                <img src={bank1} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank2} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank3} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank4} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank5} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank6} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank7} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank3} className="w-16 md:w-20 lg:w-24 xl:w-28" />
              </div>
            </div>
          </div>

          <div>
            <div
              className=" text-white p-8"
              style={{
                backgroundImage: `url(${footer})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="text-center">
                <p className="font-semibold my-4 text-[30px] xl:text-[40px]">
                  Trusted by{" "}
                  <span className="text-[#FFE70E] text-[40px] xl:text-[46px]">
                    150+ Banks
                  </span>
                </p>
                <p className="text-[20px] lg:text-[23px] xl:text-[25px]">Choose best from 150+ Banks</p>
              </div>
              <div className="grid gap-2 grid-cols-4 my-10 xl:my-14 md:grid-cols-8  lg:mx-20">
                <img src={bank1} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank2} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank3} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank4} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank5} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank6} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank7} className="w-16 md:w-20 lg:w-24 xl:w-28" />
                <img src={bank3} className="w-16 md:w-20 lg:w-24 xl:w-28" />
              </div>
            </div>
          </div>
          
        </Slider>
      </div>

      <div className="bg-[#474FFF] py-6">
        <p className="text-[17px] font-semibold text-center text-white">
          Copyright 2024 © <span className="font-bold">CREDWALA</span>
        </p>
      </div>
    </>
  );
};
export default Footer;
