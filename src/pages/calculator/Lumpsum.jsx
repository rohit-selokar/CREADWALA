import React from "react";
import sip from "../../assets/sip.png";
import pie from "../../assets/lumpsum.png";
import slider from "../../assets/sip-bar.png";

const Lumpsum = () => {
  return (
    <>
      <div>
        <p className="m-3 font-manrope lg:m-4 text-[25px] lg:text-[28px] font-semibold xl:pl-6 xl:my-6">
          Lumpsum Calculator
        </p>
        <div className="mx-4 md:mx-10 lg:flex justify-center">
          <div className="p-4 bg-[#f8f8f8] border rounded-2xl">
            <div className="flex flex-col md:flex-row items-center ">
              <div className="">
                <img src={sip} className="w-[120px]" />
                <img
                  src={slider}
                  className="py-4 md:w-[380px] lg:w-[300px] xl:w-[420px]"
                />
              </div>
              <img
                src={pie}
                className="my-6 md:w-[210px] md:mx-10 lg:my-2 lg:w-[130px] lg:mx-4 xl:w-[200px] xl:mx-24"
              />
            </div>
            <div className="text-[#434061] flex items-center justify-center md:justify-normal lg:mt-10">
              <div>
                <ul>
                  <li className="p-4 font-semibold">Invested Amout</li>
                  <li className="p-4 font-semibold">Est. Returns</li>
                  <li className="p-4 font-semibold">Total Value</li>
                </ul>
              </div>
              <div className=" md:ml-36 lg:ml-14 xl:ml-40">
                <ul>
                  <li className="p-4 font-semibol">₹ 25,000</li>
                  <li className="p-4 font-semibol">₹ 52,477</li>
                  <li className="p-4 font-semibol">₹ 77,477</li>
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
                  <td className="border py-2 px-12 text-[16px]">
                    FD Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    RD Calculator
                  </td>
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
      </div>

      {/* theory */}
      <div className="mx-4 md:mx-12 md:my-10 lg:mx-14 xl:mx-20 xl:my-20">
        <div className=" my-8 xl:mr-[420px]">
          <p className="text-[#434061] text-[18px] leading-loose">
            Investments in Mutual Funds can be broadly classified into two
            types- lumpsum and SIP. A lumpsum investment is when the depositor
            invests a significant sum of money on a particular mutual fund
            scheme. SIP or Systematic Investment Plan, on the other hand,
            entails the investment of smaller amounts on a monthly basis.
          </p>
          <p className="text-[#434061] text-[18px] leading-loose mt-6">
            Both these type of mutual fund investment strategies have their fair
            share of benefits. Lumpsum investments are particularly preferred by
            a majority of investors, as there are lesser variables involved and
            returns are generally on the higher side. To find out the estimated
            returns on your lumpsum mutual fund investment, you may use a mutual
            fund lumpsum calculator available online.
          </p>
        </div>

        <div className=" my-8 xl:mr-[420px]">
          <p className="text-[#000000] text-[20px] font-semibold my-2 xl:text-[30px]">
            How can a Lump sum Calculator Help You?
          </p>
          <p className="text-[#434061] text-[18px] leading-loose">
            Mutual fund investors can use this calculator to figure out the
            estimated returns on their investments. Before getting into the
            benefits of using this calculator, one must know the types of return
            for a lumpsum investment.
          </p>
          <ul className="list-disc ml-10 text-[#434061] text-[18px] leading-loose">
            <li>Absolute return</li>
            <li>Total return</li>
            <li>Annualized return</li>
            <li>Point to point return</li>
            <li>Trailing return</li>
            <li>Rolling return</li>
          </ul>

          <p className="text-[#434061] text-[18px] leading-loose mt-6">
            It’s paramount that an investor understands all these types of
            returns in details to avail the maximum benefits from their mutual
            fund investments. 
          </p>

          <p className="text-[#434061] text-[18px] leading-loose mt-6">
            Now that you are familiar with the type of returns, it’s time to
            delve into the benefits of using a lumpsum return calculator:
          </p>

          <ul className="list-disc ml-8 text-[#434061] text-[18px] leading-loose">
            <li>
              This calculator provides you with the estimated returns for the
              whole investment period. You may calculate your investments’
              1-year, 3-year and 5-year returns using this calculator.
            </li>
            <li>
              It’s incredibly convenient and easy to use. Even a layperson can
              use this calculator with relative ease.  
            </li>
            <li>
              It offers a reasonably accurate estimate. Note that mutual fund
              investments are subject to market risks, and cannot be predicted
              with pinpoint accuracy.
            </li>
            <li>
              An MF lumpsum calculator enables an investor to plan his/her
              finances better based on the estimated return they are most likely
              to receive at the end of their investment period.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-4 my-16 font-manrope md:mx-16 lg:mx-28 xl:mx-24 xl:mr-[550px]">
        <p className="text-[25px] font-semibold text-[#000000] md:text-[30px]">
          FAQs
        </p>
        <div class=" divide-y divide-neutral-200 mt-4">
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  {" "}
                  What is the difference between lumpsum and SIP?
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
                  Which is more advantageous- lumpsum or SIP?
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
                  Where can I make mutual fund investments?
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
                  Are mutual fund calculators accurate?
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

export default Lumpsum;
