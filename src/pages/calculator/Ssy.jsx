import React from "react";
import ssy from "../../assets/ssy.png";
import pie from "../../assets/ssy-pie.png";
import slider from "../../assets/ssy-bar.png";

const Ssy = () => {
  return (
    <>
      <p className="m-6 font-manrope lg:m-6 text-[22px] lg:text-[25px] font-semibold xl:pl-10 xl:my-8">
        Sukanya Samariddhi Yojana Calculator
      </p>
      <div className="mx-4 md:mx-10 lg:flex justify-center">
        <div className="p-5 bg-[#f8f8f8] border rounded-2xl">
          <div className="flex flex-col md:flex-row items-center ">
            <div>
              <img src={ssy} className="w-[150px] my-2" />
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
          <div className="text-[#434061] flex items-center justify-center md:justify-normal lg:mt-10 xl:mt-0">
            <div>
              <ul>
                <li className="p-3 font-semibold">Total Investment</li>
                <li className="p-3 font-semibold">Total Interest</li>
                <li className="p-3 font-semibold">Maturity Year</li>
                <li className="p-3 font-semibold">Maturity Value</li>
              </ul>
            </div>
            <div className=" md:ml-36 lg:ml-14 xl:ml-40">
              <ul>
                <li className="p-3 font-semibol">₹ 1,50,000</li>
                <li className="p-3 font-semibol">₹ 3,11,839</li>
                <li className="p-3 font-semibol">₹ 2039</li>
                <li className="p-3 font-semibol">₹ 19,91,214</li>
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
          <div>
            <p className="text-[#000000] text-[20px] font-semibold my-2 xl:text-[30px] mt-6">
              Who Can Use This Calculator?
            </p>
            <p className="text-[#434061] text-[18px] leading-loose">
              Since investing in an SSY Account is a long-term affair, it is
              wise to plan the investments ahead of time and the Sukanya
              Samriddhi Yojana Calculator is a great way to start planning. You
              might want to know how much you will invest each year, how the
              interest earned will pan out, and calculate the maturity amount.
              To that end, you can count on the SSY Calculator.
            </p>
            <p className="text-[#434061] text-[18px] leading-loose mt-6">
              Firstly, to use the Sukanya Samriddhi Yojana Calculator, you must
              ensure that you meet the scheme eligibility criteria. Legal
              guardians of girl children can open an SSY Account if the
              following conditions are fulfilled:
            </p>

            <ul className="list-disc ml-8 mt-5 text-[#434061] text-[18px] leading-loose">
              <li>The girl child is an Indian resident.</li>
              <li>The girl child's age should not exceed 10 years.</li>
              <li>
                A family with two girl children can open up to two accounts.
              </li>
            </ul>

            <p className="text-[#434061] text-[18px] leading-loose mt-6">
              One of the requirements for enjoying the benefits of an SSY
              Account is that you have to make a minimum of a single
              contribution per financial year till 14 years are completed. Thus,
              you will earn interest on the amount invested in the account. Your
              maturity amount will consist of both the principal amount along
              with interest earned. The SSY calculator can prove to be
              invaluable here in planning your finances
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ssy;
