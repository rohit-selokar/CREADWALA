import React, { useState } from "react";
import "./stepper.css";

const Stepper = () => {
  const steps = ["Basic Details", "Financial Details"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const [age, setAge] = useState("28");
  const [retirementAge, setRetirementAge] = useState("65");
  const [existingCover, setExistingCover] = useState("0");
  const [AnnualIncome, setAnnualIncome] = useState("1000000");
  const [HomeLoan, setHomeLoan] = useState("50000");
  const [OtherLoan, setOtherLoan] = useState("0");
  const [Savings, setSavings] = useState("500000");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "age") setAge(value);
    else if (name === "retirementAge") setRetirementAge(value);
    else if (name === "existingCover") setExistingCover(value);
    else if (name === "AnnualIncome") setAnnualIncome(value);
    else if (name === "HomeLoan") setHomeLoan(value);
    else if (name === "OtherLoan") setOtherLoan(value);
    else if (name === "Savings") setSavings(value);
  };

  const handleContinue = () => {
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <>
      <div className="flex justify-between ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
              } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <p className="text-black">{step}</p>
            {complete && i + 1 === currentStep && <p className="text-black">{step}</p>}
          </div>
        ))}
      </div>

      <div className="border mt-10 bg-white rounded-2xl p-6 items-center">
        {currentStep === 1 && (
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-4">
              <div className="mb-6">
                <label className="block text-sm text-gray-700 mb-5" htmlFor="age">
                  My Age is
                </label>
                <input
                  className="text-2xl font-semibold appearance-none block w-full md:w-2/3 px-3 py-2 border-b border-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1   bg-white shadow-sm"
                  id="age"
                  type="number"
                  name="age"
                  value={age}
                  onChange={handleChange}
                  min="18"
                  max="80"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-4">
              <div className="mb-4">
                <label className="block text-sm mb-5 text-gray-700" htmlFor="retirementAge">
                  My Retirement Age
                </label>
                <input
                  className="text-2xl font-semibold appearance-none block w-full md:w-2/3 px-3 py-2 border-b border-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1   bg-white shadow-sm"
                  id="retirementAge"
                  type="number"
                  name="retirementAge"
                  value={retirementAge}
                  onChange={handleChange}
                  min="20"
                  max="100"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-5" htmlFor="existingCover">
                  Existing life cover, if any
                </label>
                <div className="flex items-center">
                  <span>₹</span>
                  <input
                    className="text-2xl font-semibold appearance-none block w-full md:w-2/3 px-3 py-2 border-b border-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 bg-white shadow-sm"
                    id="existingCover"
                    type="number"
                    name="existingCover"
                    value={existingCover}
                    onChange={handleChange}
                    min="0"
                    max="100000"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {!complete && currentStep === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="mb-4 md:mb-0 md:pr-4">
              <label className="block text-sm text-gray-700 mb-2" htmlFor="AnnualIncome">
                My Annual Income
              </label>
              <div className="flex items-center">
                <span>₹</span>
                <input
                  className="text-2xl font-semibold appearance-none block w-full px-3 py-2 border-b border-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 bg-white shadow-sm"
                  id="AnnualIncome"
                  type="number"
                  name="AnnualIncome"
                  value={AnnualIncome}
                  onChange={handleChange}
                  min="10000"
                  max="10000000"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-0 md:pr-4">
              <label className="block text-sm text-gray-700 mb-2" htmlFor="HomeLoan">
                Outstanding home loan
              </label>
              <div className="flex items-center">
                <span>₹</span>
                <input
                  className="text-2xl font-semibold appearance-none block w-full px-3 py-2 border-b border-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 bg-white shadow-sm"
                  id="HomeLoan"
                  type="number"
                  name="HomeLoan"
                  value={HomeLoan}
                  onChange={handleChange}
                  min="10000"
                  max="10000000"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-0">
              <label className="block text-sm text-gray-700 mb-2" htmlFor="OtherLoan">
                Any other running loan
              </label>
              <div className="flex items-center">
                <span>₹</span>
                <input
                  className="text-2xl font-semibold appearance-none block w-full px-3 py-2 border-b border-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 bg-white shadow-sm"
                  id="OtherLoan"
                  type="number"
                  name="OtherLoan"
                  value={OtherLoan}
                  onChange={handleChange}
                  min="0"
                  max="10000000"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-0">
              <label className="block text-sm text-gray-700 mb-2" htmlFor="Savings">
                I have existing savings of
              </label>
              <div className="flex items-center">
                <span>₹</span>
                <input
                  className="text-2xl font-semibold appearance-none block w-full px-3 py-2 border-b border-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 bg-white shadow-sm"
                  id="Savings"
                  type="number"
                  name="Savings"
                  value={Savings}
                  onChange={handleChange}
                  min="0"
                  max="10000000"
                />
              </div>
            </div>
          </div>
        )}

        {!complete && (
          <div className="flex justify-end items-end">
            <div className="mr-4">
              {currentStep !== 1 && (
                <button
                  className="mb-4 bg-[#FFFFFF] text-[#3551E7] border border-[#3551E7] w-[120px] h-[35px] rounded-full hover:bg-[#3551E7] hover:text-white"
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
            </div>
            <div>
              <button
                className="mb-4 w-[120px] h-[35px] bg-[#3551E7] text-[#FFFFFF] rounded-full hover:bg-[#1E40AF] hover:text-white"
                onClick={handleContinue}
              >
                {currentStep === steps.length ? "Finish" : "Continue"}
              </button>
            </div>
          </div>
        )}


        {complete && (
          <div className="flex flex-col justify-start items-start h-64">
          <p className="mb-4">Summary:</p>
          <ul className="m-0 font-inherit text-inherit pl-[13px] list-disc">
            <li className="mb-0">
              As per your stated savings and liabilities, we recommend an insurance cover of at least ₹1.50 crore to ensure enough coverage for your family in your absence.
            </li>
            <li className="mb-0">
              As per your stated savings and liabilities, we recommend an insurance cover of at least ₹1.50 crore to ensure enough coverage for your family in your absence.
            </li>
            <li className="mb-0">
              As per your stated savings and liabilities, we recommend an insurance cover of at least ₹1.50 crore to ensure enough coverage for your family in your absence.
            </li>
          </ul>
        </div>
        
        )}
      </div>
    </>
  );
};

export default Stepper;