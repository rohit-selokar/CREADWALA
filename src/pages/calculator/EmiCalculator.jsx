import React from "react";
import pie from "../../assets/pie.png";
import slider from "../../assets/slider.png";
import arrow from "../../assets/Arrow.png";
import faq from "../../assets/faq.png";
const EmiCalculator = () => {
  return (
    <>
      <p className="m-5 font-manrope lg:m-4 lg:pl-2 text-[25px] lg:text-[25px] font-semibold xl:pl-12 xl:my-8">
        EMI Calculators
      </p>
      <div className="mx-4 md:mx-10 lg:flex justify-center">
        <div className="p-4 bg-[#f8f8f8] border rounded-2xl">
          <div className="flex flex-col md:flex-row items-center ">
            <img
              src={slider}
              className=" md:w-[380px] lg:w-[300px] xl:w-[420px]"
            />
            <img
              src={pie}
              className="my-6 md:w-[210px] md:mx-10 lg:my-2 lg:w-[160px] lg:mx-10 xl:w-[200px] xl:mx-20"
            />
          </div>
          <div className="flex text-[#434061] items-center justify-center md:justify-normal lg:mt-10">
            <div>
              <ul>
                <li className="p-4 font-semibold">Monthly Emi</li>
                <li className="p-4 font-semibold">Principal Amount</li>
                <li className="p-4 font-semibold">Total Interest</li>
                <li className="p-4 font-semibold">Total Amount</li>
              </ul>
            </div>
            <div className=" md:ml-36 lg:ml-14 xl:ml-40">
              <ul>
                <li className="p-4 font-semibol">₹ 19,566</li>
                <li className="p-4 font-semibol">₹ 10,00,000</li>
                <li className="p-4 font-semibol">₹ 1,73,969</li>
                <li className="p-4 font-semibol">₹ 11,73,969</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="font-inter mx-10 my-8 lg:my-0 lg:mx-10 lg:ml-10 text-center">
          <table>
            <thead>
              <tr className="bg-[#E0E0E0]">
                <th className="font-semibold border py-3 px-12 text-[18px]">
                  Popular Calculators
                </th>
              </tr>
            </thead>
            <tbody className="text-[#434061] ">
              <tr>
                <td className="border text-[14px] py-2 px-12 xl:text-[16px]">
                  SIP Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  Lumpsum Calculator
                </td>
              </tr>

              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  SWP Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  Mutual Fund Returns Calculator
                </td>
              </tr>

              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  Sukanya Samridhhi Yojana Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  PPF Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  EPF Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">FD Calculator</td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">RD Calculator</td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  EMI Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  Income Tax Calculator
                </td>
              </tr>

              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  HRA Calculator
                </td>
              </tr>

              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  NPS Calculator
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* table */}
      <div className="mx-2 font-manrope md:mx-10 lg:mx-10 xl:mx-24 my-16">
        <p className="font-semibold text-[25px] lg:text-[30px] my-6">
          EMI Schedule
        </p>

        <div className="overflow-x-auto text-center">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="border bg-[#FFF3F1] lg:text-[16px] xl:text-[18px] text-[#111111] font-semibold">
                <th className=" py-3 font-semibold">Month</th>
                <th className=" py-3 font-semibold">Opening Balance</th>
                <th className=" py-3 font-semibold">Interest</th>
                <th className=" py-3 font-semibold">Principal</th>
                <th className=" py-3 font-semibold">Closing Balance</th>
                <th className=" py-3 font-semibold">Loan Paid Till Date (%)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-[#434061] text-[15px]">
              <tr className="border">
                <td className="py-3 px-8 whitespace-nowrap">Mar '24</td>
                <td className="py-3 px-8 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 px-8 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 px-8 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 px-8 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 px-8 whitespace-nowrap">16.39 %</td>
              </tr>

              <tr className="border">
                <td className="py-3 whitespace-nowrap">Mar '24</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">16.39 %</td>
              </tr>

              <tr className="border">
                <td className="py-3 whitespace-nowrap">Mar '24</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">16.39 %</td>
              </tr>

              <tr className="border">
                <td className="py-3 whitespace-nowrap">Mar '24</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">16.39 %</td>
              </tr>

              <tr className="border">
                <td className="py-3 whitespace-nowrap">Mar '24</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">16.39 %</td>
              </tr>

              <tr className="border">
                <td className="py-3 whitespace-nowrap">Mar '24</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 whitespace-nowrap">16.39 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="py-8 text-center xl:pb-20"
        style={{
          backgroundImage:
            "linear-gradient(to right top, #2d4255, #2b3f52, #283c4e, #263a4b, #243748)",
        }}
      >
        <p className="flex flex-col justify-center items-center text-[25px] font-semibold text-white xl:text-[30px]">
          Popular Loans EMI Calculators
          <img src={arrow} className="w-3 my-5" />
        </p>

        <div className="mx-16 md:mx-24 lg:mx-28 xl:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <p className="p-3 border bg-white rounded-lg xl:p-6 xl:text-[19px]">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-6 xl:text-[19px]">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-6 xl:text-[19px]">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-6 xl:text-[19px]">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-6 xl:text-[19px]">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-6 xl:text-[19px]">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-6 xl:text-[19px]">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-6 xl:text-[19px]">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-6 xl:text-[19px]">
            Personal Loan EMI Calculator
          </p>
        </div>
      </div>

      {/* FAQ */}

      <div className="mx-4 my-16 font-manrope md:mx-16 lg:mx-28 xl:mr-96">
        <p className="text-[25px] font-semibold text-[#000000] md:text-[30px]">
          FAQs
        </p>
        <div class=" divide-y divide-neutral-200 mt-4">
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  {" "}
                  What sort of loans can I use the EMI calculator for?
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
                  How does the debt-to-income ratio affect my chances of
                  availing of a loan?
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
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  What does an EMI consist of?
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
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  {" "}
                  What happens if I fail to pay my EMIs?
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

export default EmiCalculator;
