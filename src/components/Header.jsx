import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../app.css";
// import bank1 from "/public/bank_1.png";
// import bank2 from "/public/bank_2.png";
// import bank3 from "/public/bank_3.png";
import bank1 from "../assets/bank_1.png";
import bank2 from "../assets/bank_2.png";
import bank3 from "../assets/bank_3.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [dropdownOpen, setdropOpen] = useState(false);
  const [nestedDropDownOpen, setnestedDropDownOpen] = useState(false);
  const [bankWiseDropdownOpen, setBankWiseDropdownOpen] = useState(false);

  // Menu bar for small screen
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // handle mouse event
  const handleMouseEnter = () => {
    setdropOpen(true);
  };
  const handleMouseLeave = () => {
    setdropOpen(false);
  };

  // Personal Loan Section
  const handleNestedMouseEnter = () => {
    setnestedDropDownOpen(true);
  };

  const handleNestedMouseLeave = () => {
    setnestedDropDownOpen(false);
  };

  const handleBankWiseMouseEnter = () => {
    setBankWiseDropdownOpen(true);
  };

  const handleBankWiseMouseLeave = () => {
    setBankWiseDropdownOpen(false);
  };

  // Home Loan Section
  const [nestedHomeDropDownOpen, setnestedHomeDropDownOpen] = useState(false);
  const handleNestedHomeMouseEnter = () => {
    setnestedHomeDropDownOpen(true);
  };

  const handleNestedHomeMouseLeave = () => {
    setnestedHomeDropDownOpen(false);
  };

  // Loan Against Property Section
  const [
    nested_Loan_again_property_MouseEnter,
    setnested_Loan_again_property_MouseEnter,
  ] = useState(false);
  const handle_nested_Loan_again_property_MouseEnter = () => {
    setnested_Loan_again_property_MouseEnter(true);
  };
  const handle_nested_Loan_again_property_MouseLeave = () => {
    setnested_Loan_again_property_MouseEnter(false);
  };

  // Business Loan Section
  const [nested_Business_Loan_MouseEnter, setnested_Business_Loan_MouseLeave] =
    useState(false);
  const handle_nested_Business_Loan_MouseEnter = () => {
    setnested_Business_Loan_MouseLeave(true);
  };
  const handle_nested_Business_Loan_MouseLeave = () => {
    setnested_Business_Loan_MouseLeave(false);
  };

  // Gold Loan Section
  const [nested_Gold_Loan_MouseEnter, setnested_Gold_Loan_MouseLeave] =
    useState(false);
  const handle_nested_Gold_Loan_MouseEnter = () => {
    setnested_Gold_Loan_MouseLeave(true);
  };
  const handle_nested_Gold_Loan_MouseLeave = () => {
    setnested_Gold_Loan_MouseLeave(false);
  };

  // Education Loan Section
  const [
    nested_Education_Loan_MouseEnter,
    setnested_Education_Loan_MouseLeave,
  ] = useState(false);
  const handle_nested_Education_Loan_MouseEnter = () => {
    setnested_Education_Loan_MouseLeave(true);
  };
  const handle_nested_Education_Loan_MouseLeave = () => {
    setnested_Education_Loan_MouseLeave(false);
  };

  // New Car Loan Section
  const [nested_New_Car_Loan_MouseEnter, setnested_New_Car_Loan_MouseLeave] =
    useState(false);
  const handle_nested_New_Car_Loan_MouseEnter = () => {
    setnested_New_Car_Loan_MouseLeave(true);
  };
  const handle_nested_New_Car_Loan_MouseLeave = () => {
    setnested_New_Car_Loan_MouseLeave(false);
  };

  // Used Car Loan Section
  const [nested_Used_Car_Loan_MouseEnter, setnested_Used_Car_Loan_MouseLeave] =
    useState(false);
  const handle_nested_Used_Car_Loan_MouseEnter = () => {
    setnested_Used_Car_Loan_MouseLeave(true);
  };
  const handle_nested_Used_Car_Loan_MouseLeave = () => {
    setnested_Used_Car_Loan_MouseLeave(false);
  };

  // Used Car Loan Section
  const [
    nested_Health_Care_Equipment_Loan_MouseEnter,
    setnested_Health_Care_Equipment_Loan_MouseLeave,
  ] = useState(false);
  const handle_nested_Health_Care_Equipment_Loan_MouseEnter = () => {
    setnested_Health_Care_Equipment_Loan_MouseLeave(true);
  };
  const handle_nested_Health_Care_Equipment_Loan_MouseLeave = () => {
    setnested_Health_Care_Equipment_Loan_MouseLeave(false);
  };

  // Used Car Loan Section
  const [
    nested_Passenger_Commercial_Vehicle_MouseEnter,
    setnested_Passenger_Commercial_Vehicle_MouseLeave,
  ] = useState(false);
  const handle_nested_Passenger_Commercial_Vehicle_MouseEnter = () => {
    setnested_Passenger_Commercial_Vehicle_MouseLeave(true);
  };
  const handle_nested_Passenger_Commercial_Vehicle_MouseLeave = () => {
    setnested_Passenger_Commercial_Vehicle_MouseLeave(false);
  };

  return (
    <nav className="bg-[#FFFFFF] text-[16px] h-[72px] flex justify-between lg:justify-around px-3 xl:px-0 items-center shadow-md sticky top-0 z-50">
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
        <ul className="flex flex-col items-center lg:flex-row lg:items-center lg:text-[16px] xl:text-[17px] scrollable-menu">
          <li
            className="flex cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-[#1634D4] scrollable-content"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
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
            {dropdownOpen && (
              <div className="mt-6 absolute left-[22rem] pt-6 text-black bg-white">
                <ul className="border h-[450px] overflow-y-auto">
                  <li
                    className="dropdown"
                    onMouseEnter={handleNestedMouseEnter}
                    onMouseLeave={handleNestedMouseLeave}
                  >
                    Personal Loans
                    {nestedDropDownOpen && (
                      <ul className="h-[450px] overflow-y-auto px-1 absolute left-full bg-white top-6">
                        <li
                          className="dropdown1"
                          onMouseEnter={handleBankWiseMouseEnter}
                          onMouseLeave={handleBankWiseMouseLeave}
                        >
                          Bank Wise
                          {bankWiseDropdownOpen && (
                            <div className="absolute left-full border top-0 bg-white px-4 w-[25rem]">
                              <p className="text-[20px] text-[#314EE5] py-4">
                                Bank Wise
                              </p>
                              <hr />
                              <div className="grid xl:grid-cols-5 gap-4 my-6 ">
                                {/* <Link to="/bank"> */}
                                <img src={bank2} alt="Bank 2" />
                                {/* </Link> */}
                                <img src={bank1} alt="Bank 1" />
                                <img src={bank3} alt="Bank 3" />
                                <img src={bank2} alt="Bank 2" />
                                <img src={bank3} alt="Bank 3" />
                                <img src={bank1} alt="Bank 1" />
                                <img src={bank2} alt="Bank 2" />
                                <img src={bank3} alt="Bank 3" />
                                <img src={bank2} alt="Bank 2" />
                                <img src={bank1} alt="Bank 1" />
                                <img src={bank3} alt="Bank 3" />
                              </div>
                            </div>
                          )}
                        </li>

                        <li className="dropdown1">Applicant Type</li>
                        <li className="dropdown1">Monthly Salary Wise</li>
                        <li className="dropdown1">Salary Mode</li>
                        <li className="dropdown1">Loan Product</li>
                        <li className="dropdown1">Loan Program</li>
                        <li className="dropdown1">Loan Amount Wise</li>
                        <li className="dropdown1">Loan Tenure Wise</li>
                        <li className="dropdown1">Rate of Interest Wise</li>
                        <li className="dropdown1">Cibil Score</li>
                        <li className="dropdown1">Cibil History</li>
                        <li className="dropdown1">Age Wise</li>
                        <li className="dropdown1">Employer Type</li>
                        <li className="dropdown1">
                          Specific Employer Category
                        </li>
                        <li className="dropdown1">
                          Specific Degree Wise Funding
                        </li>
                        <li className="dropdown1">
                          Employee Current Job Experience
                        </li>
                      </ul>
                    )}
                  </li>

                  <li
                    className="dropdown"
                    onMouseEnter={handleNestedHomeMouseEnter}
                    onMouseLeave={handleNestedHomeMouseLeave}
                  >
                    Home Loan
                    {nestedHomeDropDownOpen && (
                      <ul className="h-[450px] overflow-y-auto px-1 absolute left-full bg-white top-6 overflow-x-scroll">
                        <li className="dropdown1">Bank Wise</li>
                        <li className="dropdown1">Applicant Type</li>
                        <li className="dropdown1">Loan Product Wise</li>
                        <li className="dropdown1">Loan Program Wise</li>
                        <li className="dropdown1">Specific Property Wise</li>
                        <li className="dropdown1">
                          LTV on Registry Value Wise
                        </li>
                        <li className="dropdown1">LTV on Market Value Wise</li>
                        <li className="dropdown1">Application Age Wise</li>
                        <li className="dropdown1">Loan Amount Wise</li>
                        <li className="dropdown1">Loan Amount Wise</li>
                        <li className="dropdown1">Loan Tensure Wise</li>
                        <li className="dropdown1">Rate Of Interest Wise</li>
                        <li className="dropdown1">Cibil Score</li>
                        <li className="dropdown1">Cibil History Wise</li>
                        <li className="dropdown1">Specific Salaried Wise</li>
                        <li className="dropdown1">
                          Specific Self Employed Wise
                        </li>
                        <li className="dropdown1">
                          Application Experience Wise
                        </li>
                        <li className="dropdown1">Application Income Wise</li>
                        <li className="dropdown1">Property Chain Wise</li>
                        <li className="dropdown1">Processing Fees Wise</li>
                        <li className="dropdown1"></li>
                      </ul>
                    )}
                  </li>

                  <li
                    className="dropdown"
                    onMouseEnter={handle_nested_Loan_again_property_MouseEnter}
                    onMouseLeave={handle_nested_Loan_again_property_MouseLeave}
                  >
                    Loan Against Property
                    {nested_Loan_again_property_MouseEnter && (
                      <ul className="h-[450px] overflow-y-auto px-1 absolute left-full bg-white top-6">
                        <li className="dropdown1">Bank Wise</li>
                        <li className="dropdown1">Applicant Type</li>
                        <li className="dropdown1">Loan Product Wise</li>
                        <li className="dropdown1">Loan Program Wise</li>
                        <li className="dropdown1">
                          Property Funding According To Title
                        </li>
                        <li className="dropdown1">
                          Property Funding According To Nature
                        </li>
                        <li className="dropdown1">
                          Property Wise Funding According To Usage
                        </li>
                        <li className="dropdown1">
                          Specific Property Wise Funding
                        </li>
                        <li className="dropdown1">LTV on Residential</li>
                      </ul>
                    )}
                  </li>

                  <li
                    className="dropdown"
                    onMouseEnter={handle_nested_Business_Loan_MouseEnter}
                    onMouseLeave={handle_nested_Business_Loan_MouseLeave}
                  >
                    Business Loan
                    {nested_Business_Loan_MouseEnter && (
                      <ul className="h-[450px] overflow-y-auto px-1 absolute left-full bg-white top-6">
                        <li className="dropdown1">Bank Wise</li>
                        <li className="dropdown1">Applicant Type</li>
                        <li className="dropdown1">Loan Product Wise</li>
                        <li className="dropdown1">Loan Program Wise</li>
                      </ul>
                    )}
                  </li>

                  <li
                    className="dropdown"
                    onMouseEnter={handle_nested_Gold_Loan_MouseEnter}
                    onMouseLeave={handle_nested_Gold_Loan_MouseLeave}
                  >
                    Gold Loan
                    {nested_Gold_Loan_MouseEnter && (
                      <ul className="h-[450px] overflow-y-auto px-1 absolute left-full bg-white top-6">
                        <li className="dropdown1">Bank Wise</li>
                        <li className="dropdown1">Applicant Type</li>
                        <li className="dropdown1">Loan Product Wise</li>
                        <li className="dropdown1">Loan Program Wise</li>
                        <li className="dropdown1">Specific Property Wise</li>
                        <li className="dropdown1">LTV on Registry Wise</li>
                        <li className="dropdown1">LTV on Market Value Wise</li>
                        <li className="dropdown1">Application Age Wise</li>
                        <li className="dropdown1">Loan Amount Wise</li>
                        <li className="dropdown1">Loan Tensure Wise</li>
                        <li className="dropdown1">Rate Of Interest Wise</li>
                        <li className="dropdown1">Cibil Score</li>
                        <li className="dropdown1">Cibil History Wise</li>
                        <li className="dropdown1">Specific Salaried Wise</li>
                        <li className="dropdown1">
                          Specific Self Employed Wise
                        </li>
                      </ul>
                    )}
                  </li>

                  <li
                    className="dropdown"
                    onMouseEnter={handle_nested_Education_Loan_MouseEnter}
                    onMouseLeave={handle_nested_Education_Loan_MouseLeave}
                  >
                    Education Loan
                    {nested_Education_Loan_MouseEnter && (
                      <ul className="h-[450px] overflow-y-auto px-1 absolute left-full bg-white top-6">
                        <li className="dropdown1">Bank Wise</li>
                        <li className="dropdown1">Applicant Type</li>
                        <li className="dropdown1">Monthly Salary Wise</li>
                        <li className="dropdown1">Salary Mode</li>
                        <li className="dropdown1">Loan Product</li>
                        <li className="dropdown1">Loan Program</li>
                        <li className="dropdown1">Loan Amount Wise</li>
                        <li className="dropdown1">Loan Tensure Wise</li>
                        <li className="dropdown1">Specific Property Wise</li>
                        <li className="dropdown1">
                          LTV on Registry Value Wise
                        </li>
                        <li className="dropdown1">LTV on Market Value Wise</li>
                        <li className="dropdown1">Applicant Age Wise</li>
                      </ul>
                    )}
                  </li>

                  <li
                    className="dropdown"
                    onMouseEnter={handle_nested_New_Car_Loan_MouseEnter}
                    onMouseLeave={handle_nested_New_Car_Loan_MouseLeave}
                  >
                    New Car Loan
                    {nested_New_Car_Loan_MouseEnter && (
                      <ul className="h-[450px] overflow-y-auto px-1 absolute left-full bg-white top-6">
                        <li className="dropdown1">Bank Wise</li>
                        <li className="dropdown1">Applicant Type</li>
                        <li className="dropdown1">Monthly Salary Wise</li>
                        <li className="dropdown1">Salary Mode</li>
                        <li className="dropdown1">Loan Product</li>
                        <li className="dropdown1">Loan Program</li>
                        <li className="dropdown1">Loan Product Wise</li>
                        <li className="dropdown1">Loan Program Wise</li>
                        <li className="dropdown1">Specific Property Wise</li>
                        <li className="dropdown1">
                          LTV on Registry Value Wise
                        </li>
                        <li className="dropdown1">LTV on Market Value Wise</li>
                        <li className="dropdown1">Applicant Age Wise</li>
                      </ul>
                    )}
                  </li>

                  <li
                    className="dropdown"
                    onMouseEnter={handle_nested_Used_Car_Loan_MouseEnter}
                    onMouseLeave={handle_nested_Used_Car_Loan_MouseLeave}
                  >
                    Used Car Loan
                    {nested_Used_Car_Loan_MouseEnter && (
                      <ul className="h-[450px] overflow-y-auto px-1 absolute left-full bg-white top-6">
                        <li className="dropdown1">Bank Wise</li>
                        <li className="dropdown1">Applicant Type</li>
                        <li className="dropdown1">Loan Product Wise</li>
                        <li className="dropdown1">Loan Program Wise</li>
                        <li className="dropdown1">Specific Property Wise</li>
                        <li className="dropdown1">
                          LTV on Registry Value Wise
                        </li>
                        <li className="dropdown1">LTV on Market Value Wise</li>
                        <li className="dropdown1">Applicant Age Wise</li>
                        <li className="dropdown1">Loan Amount Wise</li>
                        <li className="dropdown1">Loan Tensure Wise</li>
                        <li className="dropdown1">Rate Of Interest Wise</li>
                        <li className="dropdown1">Cibil Score</li>
                        <li className="dropdown1">Cibil History Wise</li>
                        <li className="dropdown1">Specific Salaried Wise</li>
                        <li className="dropdown1">Specific Self Employed</li>
                      </ul>
                    )}
                  </li>

                  <li
                    className="dropdown"
                    onMouseEnter={
                      handle_nested_Health_Care_Equipment_Loan_MouseEnter
                    }
                    onMouseLeave={
                      handle_nested_Health_Care_Equipment_Loan_MouseLeave
                    }
                  >
                    Health Care Equipment Loan
                    {nested_Health_Care_Equipment_Loan_MouseEnter && (
                      <ul className="h-[450px] overflow-y-auto px-1 absolute left-full bg-white top-6">
                        <li className="dropdown1">Bank Wise</li>
                        <li className="dropdown1">Applicant Type</li>
                        <li className="dropdown1">Loan Product Wise</li>
                        <li className="dropdown1">Loan Program Wise</li>
                        <li className="dropdown1">Specific Property Wise</li>
                        <li className="dropdown1">
                          LTV on Registry Value Wise
                        </li>
                        <li className="dropdown1">LTV on Market Value Wise</li>
                        <li className="dropdown1">Applicant Age Wise</li>
                        <li className="dropdown1">Loan Amount Wise</li>
                        <li className="dropdown1">Loan Tensure Wise</li>
                        <li className="dropdown1">Rate Of Interest Wise</li>
                        <li className="dropdown1">Cibil Score</li>
                        <li className="dropdown1">Cibil History Wise</li>
                        <li className="dropdown1">Specific Salaried Wise</li>
                        <li className="dropdown1">
                          Specific Self Employed Wise
                        </li>
                      </ul>
                    )}
                  </li>

                  <li
                    className="dropdown"
                    onMouseEnter={
                      handle_nested_Passenger_Commercial_Vehicle_MouseEnter
                    }
                    onMouseLeave={
                      handle_nested_Passenger_Commercial_Vehicle_MouseLeave
                    }
                  >
                    Passenger Commercial Vehicle
                    {nested_Passenger_Commercial_Vehicle_MouseEnter && (
                      <ul className="h-[450px] overflow-y-auto px-1 absolute left-full bg-white top-6">
                        <li className="dropdown1">Bank Wise</li>
                        <li className="dropdown1">Applicant Type</li>
                        <li className="dropdown1">Loan Product Wise</li>
                        <li className="dropdown1">Loan Program Wise</li>
                        <li className="dropdown1">Specific Property Wise</li>
                        <li className="dropdown1">
                          LTV on Registry Value Wise
                        </li>
                        <li className="dropdown1">LTV on Market Value Wise</li>
                        <li className="dropdown1">Applicant Age Wise</li>
                        <li className="dropdown1">Loan Amount Wise</li>
                        <li className="dropdown1">Loan Tensure Wise</li>
                        <li className="dropdown1">Rate Of Interest Wise</li>
                        <li className="dropdown1">Cibil Score</li>
                        <li className="dropdown1">Cibil History Wise</li>
                        <li className="dropdown1">Specific Salaried Wise</li>
                        <li className="dropdown1">
                          Specific Self Employed Wise
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="dropdown">CGTMISE</li>
                  <li className="dropdown">Loan Against Security</li>
                  <li className="dropdown">Working Capital OD Limit</li>
                </ul>
              </div>
            )}
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
        <button className="ripple btn btn-hover bg-[#102ED0] text-white w-[125px] h-[35px] rounded-full">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Header;
