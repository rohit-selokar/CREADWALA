import React from "react";
import cal from "../assets/emi-cal.png";
import { Link } from "react-router-dom";

const Emi_Calculator = () => {
  return (
    <div className="font-manrope">
      <p className="text-center font-semibold tracking-wider text-[25px] my-10 lg:text-[35px]">
        <span className="text-[#3A55E8]">EMI</span> Calculators
      </p>
      <div className="my-4 grid mx-20 gap-6 md:mx-28 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:mx-28 xl:grid-cols-4 xl:gap-10 xl:mx-40 lg:my-10">
        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">
            EMI Calculator
          </p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/emicalculator">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">SIP</p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="sipcalculator">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">RD</p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/rdcalulator">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">SSY</p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="ssycalculator">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">PPF</p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/ppfcalculator">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">
            Lumpsum
          </p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/lumpsumcalculator">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">
            MF Returns
          </p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="mfcalculator">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">SWP</p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/swpcalculator">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">EPF</p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/EPF">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">
            Car Loan EMI
          </p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/CarLoanEMI">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">
            Home Loan EMI
          </p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/HomeLoanEMI">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">Insurance Calculator</p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/InsuranceCalculator">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">
            Personal Loan
          </p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/PersonalLoan">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">
            Gold Loan
          </p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/GoldLoan">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">
            Mortage Loan
          </p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/MortageLoan">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>

        <div className="border border-[#F0E3E3] rounded-xl p-5 hover:shadow-lg">
          <img src={cal} />
          <p className="font-semibold text-[#44475B] text-[16px] my-2">
            Business Loan
          </p>
          <p className="text-[15px] my-2 text-[#44475B]">
            Calculate your personal loan, home loan, or car loan EMI with
            CREDWALA EMI Calculator.
          </p>
          <Link to="/BusinessLoan">
            <button className="mt-8 bg-[#3551E7] text-[#FFFFFF] w-[120px] h-[40px] rounded-full hover:bg-[#5b6fe1] hover:transition duration-500">
              Calculate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Emi_Calculator;
