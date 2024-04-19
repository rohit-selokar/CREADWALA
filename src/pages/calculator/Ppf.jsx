import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import InputSlider from "react-input-slider";
ChartJS.register(ArcElement, Tooltip, Legend);

const Ppf = () => {
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
        PPF Calculator
      </p>

      <div className="flex flex-col items-center xl:flex-row xl:items-start xl:justify-between">
        <div className="font-manrope mx-4 xl:mx-0 xl:w-[65%]">
          <div className="bg-[#f8f8f8] p-2 rounded-2xl shadow">
            <div className="flex flex-col xl:flex-row items-center justify-between text-[17px]">
              <div className="py-4 w-[100%] xl:w-[65%]">
                <div className="mt-4">
                  <p className=" flex items-center justify-between">
                    Yearly Investment
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
                    Time Period(in Years)
                    <div>
                      <input
                        className="border border-[#B9BABD] p-2 rounded-l-md bg-white w-16 text-center"
                        type="number"
                        value={rateOfInterest}
                        onChange={(e) =>
                          setRateOfInterest(parseInt(e.target.value))
                        }
                      />
                      <button className="border border-[#B9BABD] bg-[#3551E7] text-white p-2 px-2 rounded-r-md">
                        Months
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
                    Rate of Interest
                    <div>
                      <input
                        type="number"
                        className="border border-[#B9BABD] p-2 rounded-l-md w-16 text-center"
                        value={loanTenure}
                        onChange={(e) =>
                          setLoanTenure(parseInt(e.target.value))
                        }
                      />
                      <button className="px-3 p-2 border border-[#B9BABD] rounded-r-md">
                        %
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

            <div className="flex justify-around text-[#434061] xl:my-10 border xl:justify-between xl:w-[65%] ">
              <div>
                <ul>
                  <li className="p-2 font-semibold">Invested Amount</li>
                  <li className="p-2 font-semibold">Total Interest</li>
                  <li className="p-2 font-semibold">Maturity Value</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="p-2 font-semibol">₹ 1,50,000</li>
                  <li className="p-2 font-semibol">₹ 1,21,214</li>
                  <li className="p-2 font-semibol">₹ 2,71,214</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Theory */}
          <div className="my-16 leading-loose">
            <div className="text-[#434061] md:text-[17px]">
              <p>
                The first step towards wealth management is accumulating
                savings. You will find a lot of options for savings accounts;
                however, look for the ones that guarantee substantial returns
                risk-free. PPF accounts are one of the most common features
                which come into the picture. PPF account refers to Public
                Provident fund account and is meant to invest your valuable
                capital.
              </p>
              <p className="mt-6">
                {" "}
                If you are a new employee or a responsible parent who wishes to
                save for the future, then PPF is ideal for you. Calculating the
                interest rates and returns on your PPF account turns a bit
                difficult. To make these difficult calculations easy, PPF
                account calculator can be used.
              </p>
            </div>
            <p className="text-[#000000] text-[18px] mt-6 font-semibold xl:text-[25px]">
              How can a PPF calculator help you?
            </p>
            <div className="text-[#434061] md:text-[17px]">
              <p>
                This financial tool allows one to resolve their queries related
                to Public Provident Fund account. There are certain
                specifications that are to be abided by while calculating
                maturity amount after a certain point of time. It keeps a track
                on the growth of your capital. Those who already have a PPF
                savings account know that interest rates change on monthly
                basis.
              </p>
              <p className="mt-6">
                Nowadays, it is easier to keep a check on changing rates.
                However, with the discovery of public provident fund calculator,
                account holders find it easier to find out monthly changes made
                in interest. In the market, you may find lot of user-friendly
                PPF calculators and for choosing trustworthy ones, Credwala is
                simply the option.
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
                      Can I transfer my PPF account to another branch or office?
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
                      How much interest rate can I get on my PPF account?
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
                      When is my investment going to mature?
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

export default Ppf;
