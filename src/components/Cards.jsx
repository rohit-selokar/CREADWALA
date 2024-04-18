import React from "react";
import home from "../assets/home-loan.png";
import credit from "../assets/Credit-cards.png";
import business from "../assets/business.png";
import personal from "../assets/personal.png";
import "../app.css";

const Cards = () => {
  return (
    <div className=" mx-10 my-10 xl:my-20 lg:grid lg:justify-around">
      <p className="font-bold text-center text-[23px] my-3 lg:text-[34px] xl:text-[42px] md:mb-4 lg:mb-8">
        Bringing You the <span className="text-[#112FD1]">Best</span> of
        Finances
      </p>
      <div className=" grid gap-8 md:grid-cols-2">
        <img src={home} className="shadow-card cursor-pointer rounded-md" />
        <img src={credit} className="shadow-card cursor-pointer rounded-md" />
        <img src={business} className="shadow-card cursor-pointer rounded-md" />
        <img src={personal} className="shadow-card cursor-pointer rounded-md" />
      </div>
    </div>
  );
};

export default Cards;
