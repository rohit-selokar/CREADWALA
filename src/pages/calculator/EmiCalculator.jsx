import React from "react";
import pie from "../../assets/pie.png";
import slider from "../../assets/slider.png";
import arrow from "../../assets/Arrow.png";

const EmiCalculator = () => {
  return (
    <>
      <p className="m-4 text-[25px] lg:text-[30px] font-semibold xl:pl-6 xl:my-6">EMI Calculators</p>
      <div className="lg:flex xl:mx-12">
        <div className="bg-[#f8f8f8] border mx-10 lg:mx-8 rounded-2xl p-10">
          <div className="md:flex lg:items-center">
            <img src={slider} className=" md:w-[380px] lg:w-[300px] xl:w-[420px]" />
            <img src={pie} className="mx-6 w-[190px] md:w-[210px] my-2 md:my-6 lg:my-2 lg:w-[160px] lg:mx-16 xl:w-[200px] xl:mx-20" />
          </div>
          <div className="flex">
            <div>
              <ul>
                <li className="p-4 font-semibold">Monthly Emi</li>
                <li className="p-4 font-semibold">Monthly Emi</li>
                <li className="p-4 font-semibold">Monthly Emi</li>
                <li className="p-4 font-semibold">Monthly Emi</li>
              </ul>
            </div>
            <div className="ml-2 md:ml-36 lg:ml-14 xl:ml-40">
              <ul>
                <li className="p-4 font-semibold">₹ 10,00,000</li>
                <li className="p-4 font-semibold">₹ 10,00,000</li>
                <li className="p-4 font-semibold">₹ 10,00,000</li>
                <li className="p-4 font-semibold">₹ 10,00,000</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-12 my-8 lg:my-0 lg:mx-10 text-center">
          <table>
            <thead>
              <tr className="bg-[#E0E0E0]">
                <th className="border py-2 px-12 text-[16px]bg-[#E0E0E0]">
                  Popular Calculators
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-[14px] py-2 px-12 xl:text-[16px]">
                  Mutual Fund Returns Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  Mutual Fund Returns Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">SIP Calculator</td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  Mutual Fund Returns Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  Mutual Fund Returns Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">SIP Calculator</td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  Mutual Fund Returns Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">
                  Mutual Fund Returns Calculator
                </td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">SIP Calculator</td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">SIP Calculator</td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">SIP Calculator</td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">SIP Calculator</td>
              </tr>
              <tr>
                <td className="border py-2 px-12 text-[16px]">SIP Calculator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


{/* table */}
      <div className="mx-2 md:mx-10 lg:mx-10 xl:mx-16 my-16">
        <p className="font-semibold text-[25px] lg:text-[32px] my-4">EMI Schedule</p>

        <div className="overflow-x-auto text-center">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="border bg-[#FFF3F1]">
                <th className=" py-3 text-center text-md font-medium text-[#111111] tracking-wider">
                  Month
                </th>
                <th className=" py-3 text-center text-md font-medium text-[#111111] tracking-wider">
                  Opening Balance
                </th>
                <th className=" py-3 text-center text-md font-medium text-[#111111] tracking-wider">
                  Interest
                </th>
                <th className=" py-3 text-center text-md font-medium text-[#111111] tracking-wider">
                  Principal
                </th>
                <th className=" py-3 text-center text-md font-medium text-[#111111] tracking-wider">
                  Closing Balance
                </th>
                <th className=" py-3 text-center text-md font-medium text-[#111111] tracking-wider">
                  Loan Paid Till Date (%)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
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
        className="py-8 text-center"
        style={{
          backgroundImage:
            "linear-gradient(to right top, #2d4255, #2b3f52, #283c4e, #263a4b, #243748)",
        }}
      >
        <p className="flex flex-col justify-center items-center text-[25px] font-semibold text-white">
          Popular Loans EMI Calculators
          <img src={arrow} className="w-3 my-5" />
        </p>

        <div className="mx-16 md:mx-24 lg:mx-28 xl:mx-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <p className="p-3 border bg-white rounded-lg">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg">
            Personal Loan EMI Calculator
          </p>
          <p className="p-3 border bg-white rounded-lg">
            Personal Loan EMI Calculator
          </p>
        </div>
      </div>
    </>
  );
};

export default EmiCalculator;
