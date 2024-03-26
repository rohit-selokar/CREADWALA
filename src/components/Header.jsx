import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#FFFFFF] text-[16px] h-[72px] flex justify-between lg:justify-around px-3 items-center shadow-sm sticky top-0 z-50">
      <div>
        <p className="cursor-pointer">
          <Link to="/">
            <img src={logo} className="w-[180px] h-[40px]" />
          </Link>
        </p>
      </div>

      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        <i className="fa-solid fa-bars text-black fa-xl"></i>
      </div>

      <div
        className={`lg:flex absolute top-16 left-0 right-0 bg-blue-700 text-white py-6 lg:text-black ${
          menuOpen ? "block " : "hidden"
        } lg:static lg:bg-transparent lg:p-0`}
      >
        <ul className=" flex flex-col items-center lg:w-[564px] lg:h-[24px] lg:flex-row lg:items-center">
          <li className="cursor-pointer my-2 lg:my-0 lg:ml-10">Loans</li>
          <li className="cursor-pointer my-2 lg:my-0 lg:ml-10">Cards</li>
          <li className="cursor-pointer my-2 lg:my-0 lg:ml-10">Insurance</li>
          <li className="cursor-pointer my-2 lg:my-0 lg:ml-10">Cibil Score</li>
          <li className="cursor-pointer my-2 lg:my-0 lg:ml-10">EMI Calculator</li>
        </ul>
      </div>

      <div className="hidden lg:flex">
        <button className="bg-[#102ED0] text-white w-[125px] h-[35px] rounded-full">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Header;
