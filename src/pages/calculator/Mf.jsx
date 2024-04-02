import React from "react";
import pie from "../../assets/mf-pie.png";
import slider from "../../assets/mf-bar.png";

const Mf = () => {
  return (
    <>
      <p className="m-6 font-manrope lg:m-6 text-[22px] lg:text-[25px] xl:text-[30px] font-semibold xl:pl-10 xl:my-10">
        Mutual Fund Returns Calculator
      </p>
      <div className="mx-4 md:mx-10 lg:flex justify-center">
        <div className="p-4 xl:p-6 bg-[#f8f8f8] border rounded-2xl">
          <div className="flex flex-col md:flex-row items-center ">
            <img
              src={slider}
              className="py-4 md:w-[380px] lg:w-[300px] xl:w-[420px]"
            />

            <img
              src={pie}
              className="my-6 md:w-[210px] md:mx-10 lg:mt-0 lg:w-[130px] lg:mx-12 xl:w-[200px] xl:mx-24"
            />
          </div>
          <div className="flex items-center justify-center md:justify-normal lg:mt-10 text-[#434061]">
            <div>
              <ul>
                <li className="p-2 font-semibold">Invested Amount</li>
                <li className="p-2 font-semibold">Est. returns</li>
                <li className="p-2 font-semibold">Total Value</li>
              </ul>
            </div>
            <div className=" md:ml-36 lg:ml-14 xl:ml-40">
              <ul>
                <li className="p-2 font-semibol">₹ 25,000</li>
                <li className="p-2 font-semibol">₹ 52,646</li>
                <li className="p-2 font-semibol">₹ 77,646</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="font-inter mx-10 my-8 lg:my-0 lg:mx-0 lg:ml-16 text-center">
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

      <div className="mx-4 md:mx-12 md:my-10 lg:mx-14 xl:mx-20 xl:my-20">
        <div className=" my-8 xl:mr-[420px]">
          <p className="text-[#434061] text-[18px] leading-loose">
            Mutual funds are one of the most popular avenues of investment in
            the Indian context. As of June 2019, the average assets under
            management (AuM) of the entire MF industry stands at a staggering
            Rs. 24.25 trillion, an over four-fold increase from Rs. 5.83
            trillion in 2009.
          </p>
          <p className="text-[#434061] text-[18px] leading-loose mt-6">
            Though mutual fund investments are subject to market risks, the
            returns can be estimated reasonably accurately. You can use the
            free mutual fund return calculator from Groww to arrive at the
            amount of the expected returns. 
          </p>
          <div>
            <p className="text-[#000000] text-[23px] md:text-[27px] font-semibold my-2 xl:text-[30px] mt-8">
              How Can a Mutual Fund Return Online Help You?
            </p>
            <p className="text-[#434061] text-[18px] leading-loose">
              There are various types of mutual fund returns that an investor
              should be familiar with. They are absolute return, annualized
              return, total return, trailing return, point to point return, and
              rolling return.
            </p>
            <p className="text-[#434061] text-[18px] leading-loose mt-6">
              It can be somewhat confusing for a prospective investor to keep so
              many factors in mind, which is where the mutual fund return
              calculator online can be immensely helpful.
            </p>
            <ul className="list-disc ml-8 text-[#434061] text-[18px] ">
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
      <div className="mx-4 my-16 font-manrope md:mx-16 lg:mr-[350px] xl:mx-20 xl:mr-[600px]">
        <p className="text-[25px] font-semibold text-[#000000] md:text-[30px]">
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
