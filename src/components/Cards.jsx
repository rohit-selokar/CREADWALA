import React from "react";
import home from "../assets/home-loan.png";
import credit from "../assets/Credit-cards.png";
import business from "../assets/business.png";
import personal from "../assets/personal.png";
import "../app.css";

const Cards = () => {
  return (
    <div className="container mx-4 xl:mx-auto my-10 lg:grid lg:justify-around">
      <p className="font-bold text-center text-[28px] my-3 xl:my-6 lg:text-[34px] xl:text-[40px] md:mb-4 ">
        Bringing You the <span className="text-[#112FD1]">Best</span> of
        Finances
      </p>
      <div className="grid gap-8 md:grid-cols-2"> 
        <img src={home} className="shadow-card rounded-md cursor-pointer" />
        <img src={credit} className="shadow-card rounded-md cursor-pointer" />
        <img src={business} className="shadow-card rounded-md cursor-pointer" />
        <img src={personal} className="shadow-card rounded-md cursor-pointer" />
      </div>
    </div>
  );
};

export default Cards;
