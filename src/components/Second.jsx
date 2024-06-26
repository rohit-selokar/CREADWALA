import React from "react";
import img1 from "../assets/iconoir_bank.png";
import img2 from "../assets/ph_timer-light.png";
import img3 from "../assets/uiw_user.png";
import img4 from "../assets/material-symbols-light_featured-seasonal-and-gifts.png";

const Second = () => {
  return (
    <div className=" bg-[#474FFF] text-white">
      <div className="xl:container xl:mx-auto max-w-7xl text-[13px] font-semibold font-manrope grid grid-cols-2 gap-2 p-2 md:grid-cols-4 xl:gap-2">
        <div className="flex p-2 items-center lg:justify-center">
          <img src={img1} />
          <p className="pl-2">150+ Banks</p>
        </div>
        <div className="flex pl-3 items-center lg:justify-center">
          <img src={img2} />
          <p className="pl-4 lg:pl-2">Contactless KYC & Paperless Approval</p>
        </div>
        <div className="flex pl-4 items-center lg:justify-center">
          <img src={img3} />
          <p className="pl-4">1,00,000+ Users</p>
        </div>
        <div className="flex pl-3 md:pl-2 items-center lg:justify-center">
          <img src={img4} />
          <p className="pl-2">Exclusive Offers & Rates</p>
        </div>
      </div>
    </div>
  );
};

export default Second;
