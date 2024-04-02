import React from "react";
import pie from "../../assets/ppf-pie.png";
import slider from "../../assets/ppf-bar.png";

const Ppf = () => {
  return (
    <>
      <p className="m-6 font-manrope lg:m-6 text-[22px] lg:text-[25px] xl:text-[30px] font-semibold xl:pl-10 xl:my-10">
        PPF Calculator
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
                <li className="p-2 font-semibold">Total Interest</li>
                <li className="p-2 font-semibold">Maturity Value</li>
              </ul>
            </div>
            <div className=" md:ml-36 lg:ml-14 xl:ml-40">
              <ul>
                <li className="p-2 font-semibol">₹ 1,50,000</li>
                <li className="p-2 font-semibol">₹ 1,21,214</li>
                <li className="p-2 font-semibol">₹ 2,71,214</li>
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
            The first step towards wealth management is accumulating savings.
            You will find a lot of options for savings accounts; however, look
            for the ones that guarantee substantial returns risk-free. PPF
            accounts are one of the most common features which come into the
            picture. PPF account refers to Public Provident fund account and is
            meant to invest your valuable capital.
          </p>
          <p className="text-[#434061] text-[18px] leading-loose mt-6">
            If you are a new employee or a responsible parent who wishes to save
            for the future, then PPF is ideal for you. Calculating the interest
            rates and returns on your PPF account turns a bit difficult. To make
            these difficult calculations easy, PPF account calculator can be
            used.
          </p>
          <div>
            <p className="text-[#000000] text-[23px] md:text-[27px] font-semibold my-2 xl:text-[30px] mt-8">
              How can a PPF calculator help you?
            </p>
            <p className="text-[#434061] text-[18px] leading-loose">
              This financial tool allows one to resolve their queries related to
              Public Provident Fund account. There are certain specifications
              that are to be abided by while calculating maturity amount after a
              certain point of time. It keeps a track on the growth of your
              capital. Those who already have a PPF savings account know that
              interest rates change on monthly basis.
            </p>
            <p className="text-[#434061] text-[18px] leading-loose mt-6">
              Nowadays, it is easier to keep a check on changing rates. However,
              with the discovery of public provident fund calculator, account
              holders find it easier to find out monthly changes made in
              interest. In the market, you may find lot of user-friendly PPF
              calculators and for choosing trustworthy ones, Credwala is simply
              the option.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-4 my-16 font-manrope md:mx-16 xl:mx-20 xl:mr-[600px]">
        <p className="text-[25px] font-semibold text-[#000000] md:text-[30px]">
          FAQs
        </p>
        <div class=" divide-y divide-neutral-200 mt-4">
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
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

export default Ppf;
