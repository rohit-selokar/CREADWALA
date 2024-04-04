import React from "react";
import pie from "../../assets/pie.png";
import slider from "../../assets/slider.png";
import arrow from "../../assets/Arrow.png";
// import faq from "../../assets/faq.png";
const Emi = () => {
  return (
    <>
      <div className="mx-4 md:mx-16 lg:mx-12 xl:mx-24">
        <p className="font-manrope text-[25px] my-6 lg:my-10 lg:text-[30px] font-medium tracking-wider">
          EMI Calculators
        </p>
        <div className="lg:flex justify-between">
          <div className="p-6 bg-[#f8f8f8] border rounded-2xl shadow">
            <div className="flex flex-col md:flex-row items-center ">
              <img
                src={slider}
                className="py-4 md:w-[360px] lg:w-[320px] xl:w-[450px]"
              />

              <img
                src={pie}
                className="my-6 w-[220px] md:w-[190px] md:ml-8 lg:w-[180px] lg:ml-4 xl:w-[220px] xl:mx-14"
              />
            </div>

            <div className="flex items-center justify-center md:justify-normal lg:mt-10 text-[#434061]">
              <div>
                <ul>
                  <li className="p-2 font-semibold">Monthly EMI</li>
                  <li className="p-2 font-semibold">Principal Amount</li>
                  <li className="p-2 font-semibold">Total Interest</li>
                  <li className="p-2 font-semibold">Total Amount</li>
                </ul>
              </div>
              <div className=" md:ml-36 lg:ml-14 xl:ml-56">
                <ul>
                  <li className="p-2 font-semibol">₹ 19,566</li>
                  <li className="p-2 font-semibol">₹ 10,00,000</li>
                  <li className="p-2 font-semibol">₹ 1,73,969</li>
                  <li className="p-2 font-semibol">₹ 11,73,969</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-6 md:mx-0 border my-6 lg:my-0 rounded-2xl font-inter text-center md:mr-72 lg:mr-0">
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
                  <td className="border-t-[1px]text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
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

      {/* table */}
      <div className="mx-4 font-manrope md:mx-16 lg:mx-12 xl:mx-24 md:my-10">
        <p className="text-[25px] lg:text-[30px] my-3 xl:mt-12 tracking-wider">
          EMI Schedule
        </p>

        <div className="overflow-x-auto text-center">
          <table className="border border-[#E0E0E0] min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="border-[1px] border-[#E0E0E0] bg-[#FFF3F1] lg:text-[16px] xl:text-[20px] text-[#111111]">
                <th className=" py-3 font-medium">Month</th>
                <th className=" py-3 font-medium">Opening Balance</th>
                <th className=" py-3 font-medium">Interest</th>
                <th className=" py-3 font-medium">Principal</th>
                <th className=" py-3 font-medium">Closing Balance</th>
                <th className=" py-3 font-medium">Loan Paid Till Date (%)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-[#434061] text-[15px] xl:text-[16px]">
              <tr className="border border-[#E0E0E0]">
                <td className="py-3 px-8 whitespace-nowrap">Mar '24</td>
                <td className="py-3 px-8 whitespace-nowrap">₹ 10,00,000</td>
                <td className="py-3 px-8 whitespace-nowrap">₹ 13,333</td>
                <td className="py-3 px-8 whitespace-nowrap">₹ 1,61,196</td>
                <td className="py-3 px-8 whitespace-nowrap">₹ 8,38,803</td>
                <td className="py-3 px-8 whitespace-nowrap">16.39 %</td>
              </tr>

              <tr className="border border-[#E0E0E0]">
                <td className="py-3 whitespace-nowrap">Apr '24</td>
                <td className="py-3 whitespace-nowrap">₹ 8,38,803</td>
                <td className="py-3 whitespace-nowrap">₹ 11,184</td>
                <td className="py-3 whitespace-nowrap">₹ 1,63,345</td>
                <td className="py-3 whitespace-nowrap">₹ 6,75,457</td>
                <td className="py-3 whitespace-nowrap">32.89 %</td>
              </tr>

              <tr className="border border-[#E0E0E0]">
                <td className="py-3 whitespace-nowrap">May' 24</td>
                <td className="py-3 whitespace-nowrap">₹ 6,75,457</td>
                <td className="py-3 whitespace-nowrap">₹ 9,006</td>
                <td className="py-3 whitespace-nowrap">₹ 1,65,523</td>
                <td className="py-3 whitespace-nowrap">₹ 5,09,933</td>
                <td className="py-3 whitespace-nowrap">49.50 %</td>
              </tr>

              <tr className="border border-[#E0E0E0]">
                <td className="py-3 whitespace-nowrap">Jun '24</td>
                <td className="py-3 whitespace-nowrap">₹ 5,09,933</td>
                <td className="py-3 whitespace-nowrap">₹ 6,799</td>
                <td className="py-3 whitespace-nowrap">₹ 1,67,730</td>
                <td className="py-3 whitespace-nowrap">₹ 3,42,202</td>
                <td className="py-3 whitespace-nowrap">66.22 %</td>
              </tr>

              <tr className="border border-[#E0E0E0]">
                <td className="py-3 whitespace-nowrap">Jul' 24</td>
                <td className="py-3 whitespace-nowrap">₹ 3,42,202</td>
                <td className="py-3 whitespace-nowrap">₹ 4,563</td>
                <td className="py-3 whitespace-nowrap">₹ 1,69,967</td>
                <td className="py-3 whitespace-nowrap">₹ 1,72,235</td>
                <td className="py-3 whitespace-nowrap">83.06 %</td>
              </tr>

              <tr className="border border-[#E0E0E0]">
                <td className="py-3 whitespace-nowrap">Aug '24</td>
                <td className="py-3 whitespace-nowrap">₹ 1,72,235</td>
                <td className="py-3 whitespace-nowrap">₹ 2,296</td>
                <td className="py-3 whitespace-nowrap">₹ 1,72,233</td>
                <td className="py-3 whitespace-nowrap">₹ 0.00</td>
                <td className="py-3 whitespace-nowrap">100.00 %</td>
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
        <p className="flex flex-col justify-center items-center text-[25px] font-medium tracking-wider text-white xl:text-[30px]">
          Popular Loans EMI Calculators
          <img src={arrow} className="w-3 my-5" />
        </p>

        <div className="mx-16 md:mx-24 lg:mx-28 xl:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <p className="p-3 border bg-white rounded-lg xl:p-5 xl:text-[19px]">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-5 xl:text-[19px]">
            Bike Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-5 xl:text-[19px]">
            Car Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-5 xl:text-[19px]">
            Gold Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-5 xl:text-[19px]">
            Education Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-5 xl:text-[19px]">
            Home Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-5 xl:text-[19px]">
            Business Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-5 xl:text-[19px]">
            Mortage Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg xl:p-5 xl:text-[19px]">
            Car Loan EMI Calculator
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-4 my-8 md:my-16 font-manrope md:mx-16 lg:mx-12 lg:mr-52 xl:mx-24 xl:mr-96">
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

export default Emi;
