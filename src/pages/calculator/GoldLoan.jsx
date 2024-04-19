import React, { useState, useEffect } from 'react';
import { Doughnut } from "react-chartjs-2";
import InputSlider from "react-input-slider";

const GoldLoan = () => {
  const calculators = [
    "SIP Calculator",
    "Lumpsum Calculator",
    "SWP Calculator",
    "Mutual Fund Returns Calculator",
    "Sukanya Samriddhi Yojana Calculator",
    "PPF Calculator",
    "EPF Calculator",
    "FD Calculator",
    "RD Calculator",
    "EMI Calculator",
    "Income Tax Calculator",
    "HRA Calculator",
    "NPS Calculator"
  ];

  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTenure, setLoanTenure] = useState(5);

  const handleLoanAmountChange = ({ x }) => {
    setLoanAmount(x);
  };

  const handleInterestRateChange = ({ x }) => {
    setInterestRate(x);
  };

  const handleLoanTenureChange = ({ x }) => {
    setLoanTenure(x);
  };

  const totalInterest = (loanAmount * interestRate * loanTenure) / 100;

  const data = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ["#3551E7", "#E4E4E4"],
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  
    // Scroll to top again after hash links have been processed
    const handleHashChange = () => {
      window.scrollTo(0, 0);
    };
  
    window.addEventListener('hashchange', handleHashChange);
  
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  

  return (
    <div className="py-10 px-3 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="text-3xl mt-2 ml-2">
          Gold Loan EMI
        </div>
        <div className="flex flex-col lg:flex-row py-10">
          <div className="w-full lg:w-3/4 bg-white overflow-hidden flex flex-col items-start justify-start gap-0 tracking-normal">
            <div className="w-full max-w-full lg:max-w-[93%] flex flex-col items-start justify-start gap-10">
              <div className="md:p-2 w-full bg-[#f8f8f8] border rounded-2xl shadow">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start mt-5">
                  <div className="p-8 w-[100%] lg:w-[100%] xl:w-[200%] font-semibold text-l">
                    <div>
                      <p className=" flex items-center justify-between">
                        Loan Amount{" "}
                        <div>
                          <button className="px-4 p-2 border border-[#B9BABD] rounded-l-md">
                            ₹
                          </button>
                          <input
                            type="number"
                            className=" p-2 w-24 border border-[#B9BABD] rounded-r-md"
                            value={loanAmount}
                            onChange={(e) =>
                              setLoanAmount(parseInt(e.target.value))
                            }
                          />
                        </div>
                      </p>
                      <InputSlider
                        axis="x"
                        x={loanAmount}
                        xmin={0}
                        xmax={2000000}
                        onChange={handleLoanAmountChange}
                         style={{ width: "100%", height: "4px" }}
                      />
                    </div>

                    <div className="mt-12">
                      <p className="flex items-center justify-between">
                        Rate of Interest (p.a){" "}
                        <div>
                          <input
                            className="border border-[#B9BABD] p-2 rounded-l-md bg-white w-16 text-center"
                            type="number"
                            value={interestRate}
                            onChange={(e) =>
                              setInterestRate(parseInt(e.target.value))
                            }
                          />
                          <button className="px-3 p-2 border border-[#B9BABD] rounded-r-md">
                            %
                          </button>
                        </div>
                      </p>
                      <InputSlider
                        axis="x"
                        x={interestRate}
                        xmin={0}
                        xmax={30}
                        onChange={handleInterestRateChange}
                         style={{ width: "100%", height: "4px" }}
                      />
                    </div>

                    <div className="mt-12">
                      <p className="flex items-center justify-between">
                        Loan Tenure
                        <div>
                          <input
                            type="number"
                            className="border border-[#B9BABD] p-2 rounded-l-md w-14 text-center"
                            value={loanTenure}
                            onChange={(e) =>
                              setLoanTenure(parseInt(e.target.value))
                            }
                          />

                          <button className="border border-[#3551E7] bg-[#3551E7] text-white p-2 px-4 rounded-r-md">
                            Years
                          </button>
                        </div>
                      </p>
                      <InputSlider
                        axis="x"
                        x={loanTenure}
                        xmin={0}
                        xmax={15}
                        onChange={handleLoanTenureChange}
                         style={{ width: "100%", height: "4px" }}
                      />

                      <div className="py-4 flex lg:mt-10 text-[#434061] items-start justify-between">
                        <div className="flex flex-col justify-start">
                          <ul>
                            <li className="p-2">Monthly EMI</li>
                            <li className="p-2">Principal Amount</li>
                            <li className="p-2">Total Interest</li>
                            <li className="p-2">Total Amount</li>
                          </ul>
                        </div>
                        <div className="flex flex-col justify-end ml-auto">
                          <ul>
                            <li className="p-2">₹ 19,566</li>
                            <li className="p-2">₹ {loanAmount}</li>
                            <li className="p-2">₹ {totalInterest}</li>
                            <li className="p-2">₹ {loanAmount + totalInterest}</li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="mb-5 mt-4">
                    <Doughnut data={data} className="w-[230px]" />
                  </div>
                </div>
              </div>
              <h2 className="text-xl lg:text-3xl font-semibold mt-5">
                Gold Loan EMI Calculator
              </h2>
              <div className="text-base text-neutral-600">
                <p>
                  A Gold Loan EMI Calculator is a useful tool for individuals seeking financing against their gold assets. This calculator assists borrowers in estimating the equated monthly installments (EMIs) they would need to pay based on factors such as the loan amount, interest rate, and tenure. By inputting these details, borrowers can quickly determine the approximate amount they would owe each month, allowing them to plan their finances effectively. Additionally, the calculator provides clarity and transparency regarding the total interest payable over the loan tenure, enabling borrowers to assess the overall cost of borrowing against their gold assets.</p>
                <p className="py-7">
                  Furthermore, the Gold Loan EMI Calculator facilitates informed decision-making by allowing borrowers to compare different loan options. By experimenting with various loan amounts and repayment tenures, individuals can assess the affordability of different loan scenarios and choose the one that best suits their financial situation. This empowers borrowers to make well-informed choices, ensuring they select a gold loan option that aligns with their budgetary constraints and long-term financial objectives. Overall, the Gold Loan EMI Calculator serves as a valuable resource, offering borrowers the necessary insights to make sound financial decisions when leveraging their gold assets for financing needs.</p>
              </div>
              <h2 className="text-xl lg:text-3xl font-semibold mt-5">
                How can a Gold Loan EMI Calculator Help You?
              </h2>
              <div className="text-base text-neutral-600">
                <p>
                  A Gold Loan EMI Calculator can be an invaluable tool for individuals considering borrowing against their gold assets. By inputting key details such as the loan amount, interest rate, and tenure, the calculator provides an estimate of the equated monthly installment (EMI) that the borrower would need to pay. This estimation aids in effective financial planning, allowing borrowers to budget and manage their expenses more efficiently. Additionally, the calculator offers insights into the total interest payable over the loan tenure, enabling borrowers to assess the overall cost of borrowing against their gold assets. Furthermore, by comparing different loan options using the calculator, borrowers can make informed decisions about the most suitable loan amount and repayment tenure that align with their financial capabilities and goals. Ultimately, a Gold Loan EMI Calculator empowers individuals to navigate the borrowing process with confidence, ensuring that they choose a gold loan option that best meets their needs while minimizing financial strain.
                </p>
              </div>
              <div className=" w-full bg-white pt-5 pb-5 ring-gray-900/5 sm:max-w-10xl sm:rounded-lg">
                <h2 className=" text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
                <div className=" mt-5 grid max-w-5xl divide-y divide-neutral-200 text-neutral-600">
                  <div className="py-5">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between ">
                        <span> What sort of loans can I use the EMI calculator for?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                        billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                        pricing for certain services. Payment is typically made through a credit card or other
                        secure online payment method.
                      </p>
                    </details>
                  </div>
                  <div className="py-5">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between ">
                        <span>How does the debt-to-income ratio affect my chances of availing of a loan?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a 30-day money-back
                        guarantee for most of its subscription plans. If you are not satisfied with your
                        subscription within the first 30 days, you can request a full refund. Refunds for
                        subscriptions that have been active for longer than 30 days may be considered on a
                        case-by-case basis.
                      </p>
                    </details>
                  </div>
                  <div className="py-5">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between ">
                        <span>What does an EMI consist of?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="group-open:animate-fadeIn mt-3 text-neutral-600">To cancel your subscription, you can
                        log in to your account and navigate to the subscription management page. From there, you
                        should be able to cancel your subscription and stop future billing.
                      </p>
                    </details>
                  </div>
                  <div className="py-5">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between ">
                        <span>What happens if I fail to pay my EMIs?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a free trial of our software
                        for a limited time. During the trial period, you will have access to a limited set of
                        features and functionality, but you will not be charged.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white flex flex-col gap-0 min-w-0 lg:min-w-[110%] border rounded-lg border-gray-300 border-l-1 border-r-1">
              <div className="bg-gray-200 py-3 px-5 text-lg font-medium text-center">
                Popular Calculators
              </div>
              <div>
                {calculators.map((calculator, index) => (
                  <div key={index} className={`py-2 px-5 text-center test-xl ${index !== calculators.length - 1 ? 'border-b border-gray-300' : ''}`}>
                    {calculator}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldLoan;



