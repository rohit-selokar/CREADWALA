import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import InputSlider from "react-input-slider";
ChartJS.register(ArcElement, Tooltip, Legend);

const Mf = () => {
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

  return (
    <>
      <div className="mx-4 md:mx-16 xl:mx-20">
        <p className="font-manrope text-[25px] my-6 lg:my-10 lg:text-[30px] font-medium tracking-wider">
          Mutual Fund Returns Calculator
        </p>
        <div className="xl:flex justify-between">
          <div className="p-6 bg-[#f8f8f8] border rounded-2xl shadow">
            <div className="flex flex-col lg:flex-row items-center ">
              <div className="p-4 w-[100%] lg:w-[600px] xl:w-[500px] font-semibold text-[17px]">
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
                        className="border border-[#B9BABD] p-2 rounded-md w-20 text-center"
                        value={loanTenure}
                        onChange={(e) =>
                          setLoanTenure(parseInt(e.target.value))
                        }
                      />

                      <button className="border border-[#B9BABD] bg-[#3551E7] text-white p-2 px-4 rounded-md ml-3">
                        Months
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

              <div className="m-4">
                <Doughnut data={data} className="w-[290px]" />
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-normal lg:mt-10 text-[#434061]">
              <div>
                <ul>
                  <li className="p-2 font-semibold">Invested Amount</li>
                  <li className="p-2 font-semibold">Est. returns</li>
                  <li className="p-2 font-semibold">Total Value</li>
                </ul>
              </div>
              <div className=" md:ml-36 lg:ml-14 xl:ml-56">
                <ul>
                  <li className="p-2 font-semibol">₹ 25,000</li>
                  <li className="p-2 font-semibol">₹ 52,646</li>
                  <li className="p-2 font-semibol">₹ 77,646</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-6 md:mx-0 border my-6 xl:my-0 rounded-2xl font-inter text-center md:mr-72 lg:mr-[39rem] xl:mr-0">
            <table>
              <thead>
                <tr>
                  <th className="font-medium py-3 text-[18px] bg-[#E0E0E0] rounded-t-[15px]">
                    Popular Calculators
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#434061] ">
                <tr>
                  <td className="border-t-[1px] text-[14px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
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

      {/* Theory */}
      <div className="mx-4 md:mx-16 md:my-10 lg:mt-16 xl:mx-20 xl:my-20 lg:mr-[150px] xl:mr-[520px]">
        <div className="my-8 text-[#434061] md:text-[17px] lg:text-[18px] leading-loose">
          <p>
            Mutual funds are one of the most popular avenues of investment in
            the Indian context. As of June 2019, the average assets under
            management (AuM) of the entire MF industry stands at a staggering
            Rs. 24.25 trillion, an over four-fold increase from Rs. 5.83
            trillion in 2009.
          </p>
          <p className="mt-6">
            Though mutual fund investments are subject to market risks, the
            returns can be estimated reasonably accurately. You can use the
            free mutual fund return calculator from Groww to arrive at the
            amount of the expected returns. 
          </p>
        </div>
        <div className="leading-loose">
          <p className="text-[#000000] text-[23px] md:text-[27px] font-semibold my-2 xl:text-[30px] mt-8">
            How Can a Mutual Fund Return Online Help You?
          </p>
          <div className="text-[#434061] md:text-[17px] lg:text-[18px]">
            <p>
              There are various types of mutual fund returns that an investor
              should be familiar with. They are absolute return, annualized
              return, total return, trailing return, point to point return, and
              rolling return.
            </p>
            <p className="mt-6">
              It can be somewhat confusing for a prospective investor to keep so
              many factors in mind, which is where the mutual fund return
              calculator online can be immensely helpful.
            </p>
            <ul className="list-disc ml-10">
              <li>
                It will provide you with the full estimate for 1 year, 3 year
                and 5 year investment periods.
              </li>
              <li>
                It enables you to do future financial planning based on the
                estimated returns. 
              </li>
              <li>
                You don’t need to be a subject expert to be able to use this
                calculator. It’s simple to use, and even someone who hasn’t used
                it before will not find it challenging to navigate.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-4 my-10 font-manrope md:mx-16 md:mr-[150px] lg:mr-[350px] xl:mx-20 xl:mr-[600px]">
        <p className="text-[28px] font-semibold text-[#000000] md:text-[30px]">
          FAQs
        </p>
        <div class=" divide-y divide-neutral-200 mt-4">
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  {" "}
                  Can there be negative returns on mutual funds?
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
              <p class="group-open:animate-fadeIn mt-3 text-[17px]  xl:text-[18px] text-[#434061]">
                facilisis mauris sit amet massa vitae tortor condimentum lacinia
                quis vel eros donec ac odio tempor orci dapibus ultrices in
                iaculis nunc sed augue lacus viverra vitae congue eu consequat
                ac felis donec et odio pellentesque diam volutpat commodo sed
              </p>
            </details>
          </div>
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  {" "}
                  How many mutual fund schemes are there in India?
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
              <p class="group-open:animate-fadeIn mt-3 text-[17px]  xl:text-[18px] text-[#434061]">
                facilisis mauris sit amet massa vitae tortor condimentum lacinia
                quis vel eros donec ac odio tempor orci dapibus ultrices in
                iaculis nunc sed augue lacus viverra vitae congue eu consequat
                ac felis donec et odio pellentesque diam volutpat commodo sed
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mf;
