import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import InputSlider from "react-input-slider";
ChartJS.register(ArcElement, Tooltip, Legend);

const Swp = () => {
  const data = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#3551E7", "#E4E4E4"],
      },
    ],
  };

  const [loanAmount, setLoanAmount] = useState(100000);
  const [rateOfInterest, setRateOfInterest] = useState(15);
  const [loanTenure, setLoanTenure] = useState(6);

  const handleLoanAmountChange = (newValue) => {
    setLoanAmount(newValue);
  };

  const handleRateOfInterest = (newValue) => {
    setRateOfInterest(newValue);
  };

  const handleLoanTensure = (newValue) => {
    setLoanTenure(newValue);
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
    <div className="container mx-auto max-w-7xl">
      <p className="text-[25px] p-4 lg:my-4 xl:p-0 xl:my-8 lg:text-[30px] font-medium tracking-wider">
        SWP (Systematic Withdrawal Plan) Calculator
      </p>

      <div className="flex flex-col items-center xl:flex-row xl:items-start xl:justify-between">
        <div className="font-manrope mx-4 xl:mx-0 xl:w-[65%]">
          <div className="bg-[#f8f8f8] p-2 rounded-2xl shadow">
            <div className="flex flex-col xl:flex-row items-center justify-between text-[17px]">
              <div className="py-4 w-[100%] xl:w-[65%]">
                <div className="mt-4">
                  <p className=" flex items-center justify-between">
                    Total Investment
                    <div>
                      <button className="px-4 p-2 border border-[#B9BABD] rounded-l-md">
                        ₹
                      </button>
                      <input
                        type="number"
                        className=" p-2 w-28 border border-[#B9BABD] rounded-r-md"
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
                    xmax={1000000}
                    onChange={(newValue) => handleLoanAmountChange(newValue.x)}
                    style={{ width: "100%", height: "4px" }}
                  />
                </div>

                <div className="mt-12">
                  <p className="flex items-center justify-between">
                    Expected return rate (p.a)
                    <div>
                      <input
                        className="border border-[#B9BABD] p-2 rounded-l-md bg-white w-16 text-center"
                        type="number"
                        value={rateOfInterest}
                        onChange={(e) =>
                          setRateOfInterest(parseInt(e.target.value))
                        }
                      />
                      <button className="px-3 p-2 border border-[#B9BABD] rounded-r-md">
                        %
                      </button>
                    </div>
                  </p>
                  <InputSlider
                    axis="x"
                    x={rateOfInterest}
                    xmin={0}
                    xmax={30}
                    onChange={(newValue) => handleRateOfInterest(newValue.x)}
                    style={{ width: "100%", height: "4px" }}
                  />
                </div>

                <div className="mt-12">
                  <p className="flex items-center justify-between">
                    Time Period
                    <div>
                      <input
                        type="number"
                        className="border border-[#B9BABD] p-2 rounded-l-md w-16 text-center"
                        value={loanTenure}
                        onChange={(e) =>
                          setLoanTenure(parseInt(e.target.value))
                        }
                      />

                      <button className="border border-[#B9BABD] bg-[#3551E7] text-white p-2 px-2 rounded-r-md">
                        Years
                      </button>
                    </div>
                  </p>
                  <InputSlider
                    axis="x"
                    x={loanTenure}
                    xmin={0}
                    xmax={100}
                    onChange={(newValue) => handleLoanTensure(newValue.x)}
                    style={{ width: "100%", height: "4px" }}
                  />
                </div>
              </div>

              <div>
                <Doughnut data={data} className="my-10" />
              </div>
            </div>

            <div className="flex justify-around text-[#434061] xl:my-10 xl:justify-between xl:w-[65%] ">
              <div>
                <ul>
                  <li className="p-2 font-semibold">Invested Amount</li>
                  <li className="p-2 font-semibold">Total Withdrawal</li>
                  <li className="p-2 font-semibold">Find Value</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="p-2 font-semibol">₹ 5,00,000</li>
                  <li className="p-2 font-semibol">₹ 6,00,000</li>
                  <li className="p-2 font-semibol">₹ 5,218</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Theory */}
          <div className="my-16 leading-loose">
            <div className="text-[#434061] md:text-[17px]">
              <p>
                SWP stands for systematic withdrawal plan. Under SWP, if you
                invest lump sum in a mutual fund, you can set an amount you’ll
                withdraw regularly and the frequency at which you’ll withdraw.
              </p>
              <p className="mt-6">
                {" "}
                For example, let’s say you invested in HDFC Top 200 Fund an
                amount of ₹1 lakh for a year. Let’s assume that you decided to
                withdraw an amount of ₹10000 per month. So every month, your
                investment in the fund will reduce by ₹10000. The amount left
                every month after withdrawal will continue to remain invested.
              </p>
            </div>
            <p className="text-[#000000] text-[18px] mt-6 font-semibold xl:text-[25px]">
              How can a SWP calculator assist you?
            </p>
            <div className="text-[#434061] md:text-[17px]">
              <p>
                As per the Systematic Withdrawal Plan, an individual needs to
                invest a particular amount and withdraw a certain amount of the
                corpus invested each month. After withdrawal, the amount will be
                deducted from the investment while it continues to accumulate
                interest.
              </p>
              <p className="mt-6">
                It is difficult to accurately calculate the monthly withdrawals
                and total matured sum. Credwala can help you with this complex
                calculations with the its SWP calculator. This Systematic
                Withdrawal Plan calculator easily computes your matured sum as
                per your monthly withdrawals precisely. Calculators are
                simplifying the way people invest in mutual funds.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="my-10 font-manrope">
            <p className="text-[20px] font-semibold text-[#000000] xl:text-[25px]">
              FAQs
            </p>
            <div class=" divide-y divide-neutral-200 mt-4">
              <div class="py-3 md:py-5">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between">
                    <span className="text-[#434061] text-[16px] lg:text-[18px]">
                      {" "}
                      Can I choose the withdrawal amount or is it fixed?
                    </span>
                    <span class="transition group-open:rotate-180 ml-20">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-[#434061]">
                    facilisis mauris sit amet massa vitae tortor condimentum
                    lacinia quis vel eros donec ac odio tempor orci dapibus
                    ultrices in iaculis nunc sed augue lacus viverra vitae
                    congue eu consequat ac felis donec et odio pellentesque diam
                    volutpat commodo sed
                  </p>
                </details>
              </div>
              <div class="py-3 md:py-5">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between">
                    <span className="text-[#434061] text-[16px] lg:text-[18px]">
                      {" "}
                      When to use SWP?
                    </span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-[16px] text-[#434061]">
                    facilisis mauris sit amet massa vitae tortor condimentum
                    lacinia quis vel eros donec ac odio tempor orci dapibus
                    ultrices in iaculis nunc sed augue lacus viverra vitae
                    congue eu consequat ac felis donec et odio pellentesque diam
                    volutpat commodo sed
                  </p>
                </details>
              </div>
              <div class="py-3 md:py-5">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between">
                    <span className="text-[#434061] text-[16px] lg:text-[18px]">
                      {" "}
                      Can individuals who are not retirees invest in an SWP?
                    </span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-[16px] text-[#434061]">
                    facilisis mauris sit amet massa vitae tortor condimentum
                    lacinia quis vel eros donec ac odio tempor orci dapibus
                    ultrices in iaculis nunc sed augue lacus viverra vitae
                    congue eu consequat ac felis donec et odio pellentesque diam
                    volutpat commodo sed
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-2 xl:mx-0 rounded-2xl font-inter text-center">
          <table>
            <thead>
              <tr>
                <th className="font-medium py-3 text-[17px] bg-[#E0E0E0] rounded-t-[15px]">
                  Popular Calculators
                </th>
              </tr>
            </thead>
            <tbody className="text-[#434061] border">
              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-11 md:text-[16px]">
                  SIP Calculator
                </td>
              </tr>
              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                  Lumpsum Calculator
                </td>
              </tr>

              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                  SWP Calculator
                </td>
              </tr>
              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                  Mutual Fund Returns Calculator
                </td>
              </tr>

              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                  Sukanya Samridhhi Yojana Calculator
                </td>
              </tr>
              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                  PPF Calculator
                </td>
              </tr>
              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                  EPF Calculator
                </td>
              </tr>
              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                  FD Calculator
                </td>
              </tr>
              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                  RD Calculator
                </td>
              </tr>
              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                  EMI Calculator
                </td>
              </tr>
              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                  Income Tax Calculator
                </td>
              </tr>

              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                  HRA Calculator
                </td>
              </tr>

              <tr>
                <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px] rounded-b-xl">
                  NPS Calculator
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Swp;
