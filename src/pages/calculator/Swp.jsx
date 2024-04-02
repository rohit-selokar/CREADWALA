import React from "react";
import pie from "../../assets/swp-pie.png";
import slider from "../../assets/swp-bar.png";

const Swp = () => {
  return (
    <>
      <p className="m-6 font-manrope lg:m-6 text-[22px] lg:text-[25px] xl:text-[30px] font-semibold xl:pl-10 xl:my-10">
        SWP (Systematic Withdrawal Plan) Calculator
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
                <li className="p-2 font-semibold">Total Withdrawal</li>
                <li className="p-2 font-semibold">Final Value</li>
              </ul>
            </div>
            <div className=" md:ml-36 lg:ml-14 xl:ml-40">
              <ul>
                <li className="p-2 font-semibol">₹ 5,00,000</li>
                <li className="p-2 font-semibol">₹ 6,00,000</li>
                <li className="p-2 font-semibol">₹ 5,218</li>
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
            SWP stands for systematic withdrawal plan. Under SWP, if you invest
            lump sum in a mutual fund, you can set an amount you’ll withdraw
            regularly and the frequency at which you’ll withdraw.
          </p>
          <p className="text-[#434061] text-[18px] leading-loose mt-6">
            For example, let’s say you invested in HDFC Top 200 Fund an amount
            of ₹1 lakh for a year. Let’s assume that you decided to withdraw an
            amount of ₹10000 per month. So every month, your investment in the
            fund will reduce by ₹10000. The amount left every month after
            withdrawal will continue to remain invested.
          </p>
          <div>
            <p className="text-[#000000] text-[23px] md:text-[27px] font-semibold my-2 xl:text-[30px] mt-8">
              How can a SWP calculator assist you?
            </p>
            <p className="text-[#434061] text-[18px] leading-loose">
              As per the Systematic Withdrawal Plan, an individual needs to
              invest a particular amount and withdraw a certain amount of the
              corpus invested each month. After withdrawal, the amount will be
              deducted from the investment while it continues to accumulate
              interest.
            </p>
            <p className="text-[#434061] text-[18px] leading-loose mt-6">
              It is difficult to accurately calculate the monthly withdrawals
              and total matured sum. Credwala can help you with this complex
              calculations with the its SWP calculator. This Systematic
              Withdrawal Plan calculator easily computes your matured sum as per
              your monthly withdrawals precisely. Calculators are simplifying
              the way people invest in mutual funds.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-4 my-16 font-manrope md:mx-12 md:mr-[150px] lg:mx-16 lg:mr-[350px] xl:mx-20 xl:mr-[600px]">
        <p className="text-[25px] font-semibold text-[#000000] md:text-[30px]">
          FAQs
        </p>
        <div class=" divide-y divide-neutral-200 mt-4">
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
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

export default Swp;
