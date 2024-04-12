import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import InputSlider from "react-input-slider";
ChartJS.register(ArcElement, Tooltip, Legend);

const HomeLoanEmi = () => {
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

  const data = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#3551E7", "#E4E4E4"],
      },
    ],
  };

  const [LoanAmount, setLoanAmount] = useState(1000000);
  const [interest, setInterest] = useState(6.5);
  const [loanTenure, setLoanTenure] = useState(5);

  const handleLoanAmount = ({ x }) => {
    setLoanAmount(x);
  };

  const handleInterestChange = ({ x }) => {
    setInterest(x);
  };

  const handleLoanChange = ({ x }) => {
    setLoanTenure(x);
  };

  return (
    <div className="py-10 px-3 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="text-3xl mt-2 ml-2">
          Home Loan EMI
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
                        <button className="border border-[#B9BABD] p-2 px-4 rounded-md">
                          Rs {LoanAmount}
                        </button>
                      </p>
                      <InputSlider
                        axis="x"
                        x={LoanAmount}
                        xmin={0}
                        xmax={2000000}
                        onChange={handleLoanAmount}
                        style={{ width: "100%" }}
                      />
                    </div>

                    <div className="mt-12">
                      <p className="flex items-center justify-between">
                        Rate of Interest (p.a){" "}
                        <button className="border border-[#B9BABD] p-2 px-4 rounded-md">
                          {interest} %
                        </button>
                      </p>
                      <InputSlider
                        axis="x"
                        x={interest}
                        xmin={0}
                        xmax={30}
                        onChange={handleInterestChange}
                        style={{ width: "100%" }}
                      />
                    </div>

                    <div className="mt-12">
                      <p className="flex items-center justify-between">
                        Loan Tenure:
                        <div>
                          <button className="border border-[#B9BABD] p-2 px-4 rounded-md">
                            {loanTenure}
                          </button>
                          <button className="border border-[#B9BABD] bg-[#3551E7] text-white p-2 px-4 rounded-md ml-3">
                            Year
                          </button>
                        </div>
                      </p>
                      <InputSlider
                        axis="x"
                        x={loanTenure}
                        xmin={0}
                        xmax={15}
                        onChange={handleLoanChange}
                        style={{ width: "100%" }}
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
                            <li className="p-2">₹ 10,00,000</li>
                            <li className="p-2">₹ 1,73,969</li>
                            <li className="p-2">₹ 11,73,969</li>
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
                  A Home Loan EMI Calculator is an essential tool for anyone considering a home loan. This calculator helps individuals estimate their monthly repayments, enabling them to plan their finances effectively. By entering key details such as the loan amount, interest rate, and tenure, users can quickly determine the equated monthly installment (EMI) they would need to pay. This information is invaluable for budgeting purposes, allowing borrowers to assess affordability and make informed decisions regarding their home loan options.</p>
                <p className="py-7">
                  Utilizing a Home Loan EMI Calculator offers numerous benefits to prospective homeowners. Firstly, it provides clarity and transparency regarding the financial commitment associated with a home loan. By obtaining a breakdown of monthly payments, borrowers gain insight into how much of their income will be allocated towards loan repayment each month. Additionally, the calculator allows users to experiment with different loan parameters, such as tenure and interest rates, empowering them to find the most suitable loan structure that aligns with their financial goals and capabilities. Ultimately, the Home Loan EMI Calculator serves as a valuable resource, facilitating informed decision-making and ensuring a smoother home loan borrowing experience.</p>
              </div>
              <h2 className="text-xl lg:text-3xl font-semibold mt-5">
                How can a Home Loan EMI Calculator Help You?
              </h2>
              <div className="text-base text-neutral-600">
                <p>
                  A Home Loan EMI Calculator can significantly aid individuals in various aspects of their home buying journey. Primarily, it serves as a crucial tool for financial planning by offering a clear estimate of the monthly installment required for repaying a home loan. This estimation enables effective budgeting, ensuring that borrowers can manage their finances efficiently. Moreover, the calculator facilitates an in-depth assessment of affordability by allowing users to input different loan amounts, interest rates, and tenures to determine suitable repayment options. By comparing the EMIs for various scenarios, borrowers can make informed decisions regarding loan amounts and repayment terms. Additionally, the calculator provides insights into the loan repayment structure, breaking down each installment into principal and interest components. This understanding empowers borrowers to comprehend how their payments contribute to reducing the principal balance and servicing interest charges. Ultimately, by using a Home Loan EMI Calculator, individuals can prepare thoroughly for the loan application process, armed with accurate financial information to approach lenders confidently. It ensures that borrowers select loan options aligned with their financial objectives, fostering a smoother and more informed home buying experience.
                </p>
              </div>
              <div className=" w-full bg-white pt-5 pb-5 ring-gray-900/5 sm:max-w-10xl sm:rounded-lg">
                <h2 className=" text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
                <div className=" mt-5 grid max-w-5xl divide-y divide-neutral-200">
                  <div className="py-5">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> What is EMI?</span>
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
                      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>How is EMI calculated?</span>
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
                      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Why use the online EMI calculator?</span>
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
                      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>How many times can you use the calculator?</span>
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
                      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Is the EMI amount fixed?</span>
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

export default HomeLoanEmi;
