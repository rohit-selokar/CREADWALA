import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#FFFFFF] text-[16px] h-[72px] flex justify-between lg:justify-around px-3 items-center shadow-md sticky top-0 z-50">
      <div className="xl:pr-20">
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
        <ul className="flex flex-col items-center lg:flex-row lg:items-center lg:text-[16px] xl:text-[17px]">
          <li className="flex cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-[#1634D4]">
            Loans
            <span>
              <svg
                fill="none"
                height="14"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="16"
                className="mt-2 ml-0.5 hover:text-[#1634D4]"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </li>
          <li className="flex items-center cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-[#1634D4]">
            Cards
            <span>
              <svg
                fill="none"
                height="14"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="16"
                className="mt-1 ml-0.5 hover:text-[#1634D4]"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </li>
          <li className="cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-[#1634D4]">
            Insurance
          </li>
          <li className="flex cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-[#1634D4]">
            Cibil Score
            <span>
              <svg
                fill="none"
                height="14"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="16"
                className="mt-2 ml-0.5 hover:text-[#1634D4]"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </li>
          <li className="cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-[#1634D4]">
            <Link to="/calculator">EMI Calculator</Link>
          </li>
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
