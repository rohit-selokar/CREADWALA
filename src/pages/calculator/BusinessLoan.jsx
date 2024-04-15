import React, { useState } from 'react';
import { Doughnut } from "react-chartjs-2";
import InputSlider from "react-input-slider";

const BusinessLoan = () => {
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

  const handleLoanAmount = ({ x }) => {
    setLoanAmount(x);
  };

  const handleInterestChange = ({ x }) => {
    setInterestRate(x);
  };

  const handleLoanTenureChange = ({ x }) => {
    setLoanTenure(x);
  };

  const monthlyEMI = ((loanAmount * (interestRate / 12) / (1 - Math.pow(1 + (interestRate / 12), -loanTenure * 12))).toFixed(2));
  const totalInterest = (((loanAmount * interestRate * loanTenure) / 100).toFixed(2));
  const totalAmount = (parseInt(loanAmount) + parseInt(totalInterest)).toFixed(2);

  const data = {
    labels: ["Loan Amount", "Total Interest"],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ["#3551E7", "#E4E4E4"],
      },
    ],
  };

  return (
    <div className="py-10 px-3 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="text-3xl mt-2 ml-2">
          Business Loan Calculator
        </div>
        <div className="flex flex-col lg:flex-row py-10">
          <div className="w-full lg:w-3/4 bg-white overflow-hidden flex flex-col items-start justify-start gap-0 tracking-normal">
            <div className="w-full max-w-full lg:max-w-[93%] flex flex-col items-start justify-start gap-5">
              <div className="md:p-2 w-full bg-[#f8f8f8] border rounded-2xl shadow">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start mt-5">
                  <div className="p-8 w-[100%] lg:w-[100%] xl:w-[200%] font-semibold text-l">
                    <div>
                      <p className="flex items-center justify-between">
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
                        onChange={handleLoanAmount}
                        style={{ width: "100%" }}
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
                        onChange={handleInterestChange}
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
                      />

                      <div className="py-4 flex lg:mt-10 text-[#434061] items-start justify-between">
                        <div className="flex flex-col justify-start">
                          <ul>
                            <li className="p-2">Monthly EMI</li>
                            <li className="p-2">Total Interest</li>
                            <li className="p-2">Total Amount</li>
                          </ul>
                        </div>
                        <div className="flex flex-col justify-end ml-auto">
                          <ul>
                            <li className="p-2">₹ {monthlyEMI}</li>
                            <li className="p-2">₹ {totalInterest}</li>
                            <li className="p-2">₹ {totalAmount}</li>
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
              <p className="text-neutral-600">
                The EMIs on your business loans are calculated based on your principal loan amount, interest rates and loan
                tenure. With a commercial loan EMI calculator tool, you get a real-time estimate of your monthly EMIs. It will
                help you plan your finances and determine your loan tenure and the loan amount based on your business
                requirements.
              </p>
              <p className="text-neutral-600">
                Here is the formula to calculate the business loan EMIs:
              </p>
              <p className="text-black font-semibold" >
                EMI=P*R*(1+R) ^ n/(1+R) ^ n-1                        </p>
              <p className="text-neutral-600">Where: ‘P’ stands for the principal loan amount, ‘R’ is the interest rate offered, and ‘n’ stands for loan tenure in
                months. Using a business loan calculator removes the need to manually calculate your EMIs and helps prepare a better
                financial blueprint to grow your business.</p>
              <p className="text-black font-semibold">Factors That Affect Business Loan EMI</p>
              <p className="text-neutral-600">Factors that affect your business loan EMIs include:</p>
              <p className="text-black font-semibold">Borrowed amount</p>
              <p className="text-neutral-600">The sum borrowed, also known as the principal loan amount, is a fundamental factor that affects your monthly
                instalments. With a higher borrowed amount, the monthly instalment also increases.</p>
              <p className="text-black font-semibold">Interest rate</p>
              <p className="text-neutral-600">Interest rate is another crucial factor that impacts your business loan EMIs. You may get preferential rates
                based on your credit performance, current loans, and business track record. Interest rate also decides your
                total loan cost over the tenure.</p>
              <p className="text-black font-semibold">Loan tenure</p>
              <p className="text-neutral-600">Your loan tenure impacts your monthly instalments. A shorter tenure increases your EMIs but reduces the
                interest component, while a longer tenure brings your monthly repayment down but increases your interest
                cost.</p>
              <div className=" w-full bg-white pt-5 pb-5 ring-gray-900/5 sm:max-w-10xl sm:rounded-lg">
                <h2 className=" text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
                <div className=" mt-5 grid max-w-5xl divide-y divide-neutral-200 text-neutral-600">
                  <div className="py-5">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between ">
                        <span>How do I qualify for a Business Loan?</span>
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
                        <span>How long does a business loan approval take?</span>
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
                        <span>Why should you take a business loan?</span>
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

export default BusinessLoan;
