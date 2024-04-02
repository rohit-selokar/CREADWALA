import React from "react";
import pie from "../../assets/rd-pie.png";
import slider from "../../assets/rd-bar.png";

const Rd = () => {
  return (
    <>
      <p className="m-3 font-manrope lg:m-4 text-[25px] lg:text-[28px] font-semibold xl:pl-10 xl:my-10">
        Recurring Deposit Calculator
      </p>
      <div className="mx-4 md:mx-10 lg:flex justify-center">
        <div className="p-4 bg-[#f8f8f8] border rounded-2xl">
          <div className="flex flex-col md:flex-row items-center ">
            <img
              src={slider}
              className="py-4 md:w-[380px] lg:w-[300px] xl:w-[420px]"
            />

            <img
              src={pie}
              className="my-6 md:w-[210px] md:mx-10 lg:my-2 lg:w-[130px] lg:mx-4 xl:w-[200px] xl:mx-24"
            />
          </div>
          <div className="text-[#434061] flex items-center justify-center md:justify-normal lg:mt-10">
            <div>
              <ul>
                <li className="p-4 font-semibold">Total Investment</li>
                <li className="p-4 font-semibold">Principal Amount</li>
                <li className="p-4 font-semibold">Total Interest</li>
              </ul>
            </div>
            <div className=" md:ml-36 lg:ml-14 xl:ml-40">
              <ul>
                <li className="p-4 font-semibol">₹ 18,00,000</li>
                <li className="p-4 font-semibol">₹ 1,91,214</li>
                <li className="p-4 font-semibol">₹ 19,91,214</li>
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

      {/* Theory */}
      <div className="mx-4 md:mx-12 md:my-10 lg:mx-14 xl:mx-20 xl:my-20">
        <div className=" my-8 xl:mr-[420px]">
          <p className="text-[#000000] text-[20px] font-semibold my-2 xl:text-[30px]">
            How can an RD calculator help you?
          </p>
          <p className="text-[#434061] text-[18px] leading-loose">
            A recurring deposit, as the name suggests, is a continuing
            investment. The returns on these deposits can be challenging to
            track for investors. The interest is compounded quarterly, and there
            are several variables involved, which makes the calculations
            multipart.
          </p>
          <p className="text-[#434061] text-[18px] leading-loose mt-6">
            An RD deposit calculator eliminates the hassle of computing its
            returns manually and enables an investor to know the exact amount
            their deposits will accrue after the relevant period. 
          </p>
          <p className="text-[#434061] text-[18px] leading-loose mt-6">
            The only consideration that the investor has to do manually is
            the TDS deduction. As per new RBI norms, RDs are also liable for TDS
            deduction; however, there is no uniformity in its implementation
            across financial institutions, which is why RD calculators don’t
            take it into account.
          </p>
          <div className="text-[#434061] text-[18px] leading-loose mt-6">
            <p>
              Apart from that small caveat, an RD amount calculator offers an
              investor with the following advantages:
            </p>
            <ul className="list-disc ml-8 mt-5">
              <li>
                The calculator enables investors to plan their future finances
                with greater clarity by providing them with the exact amount
                their investment will accrue.
              </li>
              <li>
                It’s convenient to use and saves a lot of time for the
                investors, which they can otherwise use productively.
              </li>
              <li>
                The accuracy of these calculators can never be in question.
                Accurate estimates are pivotal for prudent financial planning.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-4 my-16 font-manrope md:mx-16 lg:mr-[350px] xl:mx-24 xl:mr-[550px]">
        <p className="text-[25px] font-semibold text-[#000000] md:text-[30px]">
          FAQs
        </p>
        <div class=" divide-y divide-neutral-200 mt-4">
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  {" "}
                  Is TDS applicable on RD?
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
                  What is the minimum amount to start an RD account?
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
                  Can I break my RD prematurely?
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
                  What is RD’s range of tenure?
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

export default Rd;
