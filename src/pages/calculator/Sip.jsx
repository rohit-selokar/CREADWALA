import React, { useState } from "react";
// import pie from "../../assets/sip-pie.png";
// import slider from "../../assets/sip-bar.png";
// import sip from "../../assets/sip.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import InputSlider from "react-input-slider";
ChartJS.register(ArcElement, Tooltip, Legend);

const Sip = () => {
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
    <div className="container mx-auto max-w-7xl">
      <p className="text-[25px] p-4 lg:my-4 xl:p-0 xl:my-8 lg:text-[30px] font-medium tracking-wider">
        SIP Calculator
      </p>

      <div className="flex flex-col items-center xl:flex-row xl:items-start xl:justify-between">
        <div className="font-manrope mx-4 xl:mx-0 xl:w-[65%]">
          <div className="bg-[#f8f8f8] p-2 rounded-2xl shadow">
            <div className="text-[16px]">
              <button className="text-[#3551E7] bg-[#E0E5FF] rounded-2xl px-5 p-1">
                SIP
              </button>
              <button className="mx-4">Lumpsum</button>
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-between text-[17px]">
              <div className="py-4 w-[100%] xl:w-[65%]">
                <div className="mt-4">
                  <p className=" flex items-center justify-between">
                    Monthly Investment
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
                    Excepted return (p.a)
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

              <div>
                <Doughnut data={data} className="my-10" />
              </div>
            </div>

            <div className="flex justify-around text-[#434061] xl:my-10 xl:justify-between xl:w-[65%] ">
              <div>
                <ul>
                  <li className="p-2 font-semibold">Invested Amount</li>
                  <li className="p-2 font-semibold">Est. Returns</li>
                  <li className="p-2 font-semibold">Total Value</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="p-2 font-semibol">₹ 30,000,000</li>
                  <li className="p-2 font-semibol">₹ 28,08,477</li>
                  <li className="p-2 font-semibol">₹ 58,08,477</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Theory */}
          <div className="my-16 leading-loose">
            <div>
              <p className="text-[#000000] text-[18px] font-semibold xl:text-[25px]">
                SIP Calculator – Systematic Investment Plan Calculator
              </p>
              <div className="text-[#434061] md:text-[17px]">
                <p>
                  Prospective investors can think that SIPs and mutual funds are
                  the same. However, SIPs are merely a method of investing in
                  mutual funds, the other method being a lumpsum. A SIP
                  calculator is a tool that helps you determine the returns you
                  can avail when parking your funds in such investment tools.
                  Systematic Investment Plan or SIP is a process of investing a
                  fixed sum of money in mutual funds at regular intervals. SIPs
                  usually allow you to invest weekly, quarterly, or monthly. 
                </p>
              </div>
            </div>

            <div className="my-4">
              <p className="text-[#000000] text-[18px] font-semibold xl:text-[25px]">
                What is a SIP Calculator?
              </p>
              <div className="text-[#434061] md:text-[17px]">
                <p>
                  A SIP calculator is a simple tool that allows individuals to
                  get an idea of the returns on their mutual fund investments
                  made through SIP. SIP investments in mutual funds have become
                  one of the most popular investment options for millennials
                  lately.
                </p>
                <p className="mt-6">
                  These mutual fund sip calculators are designed to give
                  potential investors an estimate on their mutual fund
                  investments. However, the actual returns offered by a mutual
                  fund scheme varies depending on various factors. The SIP
                  calculator does not provide clarification for the exit load
                  and expense ratio (if any).
                </p>
              </div>
            </div>

            <div>
              <p className="text-[#000000] text-[18px] font-semibold my-2 xl:text-[25px] mt-8">
                How can a SIP return calculator help you?
              </p>
              <div className="text-[#434061] md:text-[17px]">
                <p>
                  SIPs are a more lucrative mode of investing funds compared to
                  a lump sum amount according to several mutual fund experts. It
                  helps you become financially disciplined and create a habit of
                  savings that can benefit you in the future.
                </p>
                <p className="mt-6">
                  A SIP calculator online is a beneficial tool, which shows the
                  estimated returns you will earn after the investment tenure.
                </p>
                <p className="mt-6">
                  Few of the benefits of SIP calculators include –
                </p>

                <ul className="list-disc ml-10">
                  <li>Tells you the total amount you have invested.</li>
                  <li>Gives an estimated value of the returns</li>
                </ul>
              </div>
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
                      How much can I invest in a SIP?
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
                      What is the maximum tenure of a SIP?
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
                      Are SIPs similar to mutual funds?
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
                      Can I modify my SIP amount?
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
                    <span className="text-[#434061] text-[16px] lg:text-[18px] ">
                      {" "}
                      Do SIP allows only equity mutual funds investments?
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
                      Can I renew a SIP?
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

export default Sip;
