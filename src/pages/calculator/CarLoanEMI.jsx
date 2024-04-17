import React, { useState, useEffect } from 'react';
import { Doughnut } from "react-chartjs-2";
import InputSlider from "react-input-slider";

const CarLoanEMI = () => {
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

  const [LoanAmount, setLoanAmount] = useState(1000000);
  const [interest, setInterest] = useState(6.5);
  const [loanTenure, setLoanTenure] = useState(5);

  const handleLoanAmountChange = (x) => {
    setLoanAmount(x);
  };

  const handleInterestChange = (x) => {
    setInterest(x);
  };

  const handleLoanTenureChange = (x) => {
    setLoanTenure(x);
  };

  const data = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        data: [LoanAmount, (LoanAmount * interest * loanTenure) / 100],
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
          Car Loan EMI
        </div>
        <div className="flex flex-col lg:flex-row py-10">
          <div className="w-full lg:w-3/4 bg-white overflow-hidden flex flex-col items-start justify-start gap-10 tracking-normal">
            <div className="w-full max-w-full lg:max-w-[93%] flex flex-col items-start justify-start gap-5">
              <div className="md:p-2 w-full bg-[#f8f8f8] border rounded-2xl shadow">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start mt-5">
                  <div className="p-8 w-[100%] lg:w-[100%] xl:w-[200%] font-semibold text-l">
                    <div>
                      <p className=" flex items-center justify-between">
                        Loan Amount
                        <div>
                          <button className="px-4 p-2 border border-[#B9BABD] rounded-l-md">
                            ₹
                          </button>
                          <input
                            type="number"
                            className=" p-2 w-24 border border-[#B9BABD] rounded-r-md"
                            value={LoanAmount}
                            onChange={(e) =>
                              setLoanAmount(parseInt(e.target.value))
                            }
                          />
                        </div>
                      </p>
                      <InputSlider
                        axis="x"
                        x={LoanAmount}
                        xmin={0}
                        xmax={2000000}
                        onChange={({ x }) => handleLoanAmountChange(x)}
                         style={{ width: "100%", height: "4px" }}
                      />
                    </div>

                    <div className="mt-12">
                      <p className="flex items-center justify-between">
                        Rate of Interest (p.a)
                        <div>
                          <input
                            className="border border-[#B9BABD] p-2 rounded-l-md bg-white w-16 text-center"
                            type="number"
                            value={interest}
                            onChange={(e) =>
                              setInterest(parseInt(e.target.value))
                            }
                          />
                          <button className="px-3 p-2 border border-[#B9BABD] rounded-r-md">
                            %
                          </button>
                        </div>
                      </p>
                      <InputSlider
                        axis="x"
                        x={interest}
                        xmin={0}
                        xmax={30}
                        onChange={({ x }) => handleInterestChange(x)}
                         style={{ width: "100%", height: "4px" }}
                      />
                    </div>

                    <div className="mt-12">
                      <p className="flex items-center justify-between">
                        Loan Tensure
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
                        xmax={30}
                        onChange={({ x }) => handleLoanTenureChange(x)}
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
                            <li className="p-2">{`₹ ${LoanAmount}`}</li>
                            <li className="p-2">{`₹ ${(LoanAmount * interest * loanTenure) / 100}`}</li>
                            <li className="p-2">{`₹ ${LoanAmount + (LoanAmount * interest * loanTenure) / 100}`}</li>
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
                Car Loan EMI Calculator
              </h2>
              <div className="text-base text-neutral-600">
                <p>
                  India is currently the world’s 4th largest market for 4-wheelers. Growth has been steady at 9.5% year-on-year. It is no wonder that the demand for a reliable and easy to use car loan EMI calculator has also skyrocketed.</p>
                <p className="py-7">
                  While the Internet is flooded with calculators determining car loan EMIs, simplicity is the key that make it stand out. Credwala brings you the best and easy to use EMI calculating tool which will help you take an informed decision on how much funding you need to purchase your dream car, how much your EMIs are likely to be and other details.</p>
              </div>
              <h2 className="text-xl lg:text-3xl font-semibold">
                How can a Car Loan EMI Calculator Help You?
              </h2>
              <div className="text-base text-neutral-600">
                <p>
                  Nowadays, getting a dream car is within everyone’s reachowing to the various car loans available by different
                  lenders. Gone are those days when in order to get a new car, one had to start saving a fair amount of money at
                  a very young age. One can get pre-approved car loan with a decent income and credit score but subject to
                  maximum tenure of the loan and the loan amount. Regardless of the type of vehicle you are about to purchase,
                  a car loan is a substantial amount which you need to repay over the tenor along with the interest. This is where
                  a car EMI calculator comes in handy.
                </p>
              </div>
              <div className=" w-full bg-white pt-5 pb-5 ring-gray-900/5 sm:max-w-10xl sm:rounded-lg">
                <h2 className=" text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
                <div className=" mt-5 grid max-w-5xl divide-y divide-neutral-200 text-neutral-600">
                  <div className="py-5">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between ">
                        <span>How much time does it take to use the calculator?</span>
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
                        <span>Can I avail myself a car loan to buy a used vehicle?</span>
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
                        <span>What is the typical tenure of a car loan in India?</span>
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
                        <span>Do I need a co-guarantor for a car loan?</span>
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
                  <div className="py-5">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between ">
                        <span>Can my car loan application be rejected?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="group-open:animate-fadeIn mt-3 text-neutral-600">If you need help with our platform or
                        have any other questions, you can contact the company's support team by submitting a support
                        request through the website or by emailing support@ourwebsite.com.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
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

export default CarLoanEMI;
