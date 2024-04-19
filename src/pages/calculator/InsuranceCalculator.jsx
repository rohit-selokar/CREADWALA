import React, { useEffect } from 'react';
import Stepper from './Stepper/Stepper';

const InsuranceCalculator = () => {
  const calculators = [
    "SIP Calculator",
    "Lumpsum Calculator",
    "SWP Calculator",
    "Mutual Fund Returns Calculator",
    "Sukanya Samriddhi Yojana Calculator",
    "PPF Calculator",
    "EPF Calculator",
    "FD Calculator",
    "RD Calculator",
    "EMI Calculator",
    "Income Tax Calculator",
    "HRA Calculator",
    "NPS Calculator"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  
    // Scroll to top again after hash links have been processed
    const handleHashChange = () => {
      window.scrollTo(0, 0);
    };
  
    window.addEventListener('hashchange', handleHashChange);
  
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  

  return (
    <div className="py-10 px-3 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="text-3xl mt-2 ml-2">
          Insurance Calculator
        </div>
        <div className="flex flex-col lg:flex-row py-10">
          <div className="w-full lg:w-3/4 bg-white overflow-hidden flex flex-col items-start justify-start gap-0 tracking-normal">
            <div className="w-full max-w-full lg:max-w-[93%] flex flex-col items-start justify-start gap-10 mb-10">
              <div className="md:p-2 w-full bg-[#f8f8f8] border rounded-2xl shadow">
                <div className="container mx-auto px-4 py-10">
                  <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="w-full">
                      <p className="text-lg font-semibold mb-10">Find how much term insurance cover you might need</p>
                      <Stepper />
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-xl lg:text-3xl font-semibold">All You Need to Learn About <span class="text-blue-700">Term Insurance Calculator</span></h1>
              <h2 className="text-xl lg:text-3xl font-semibold mt-5">
                What is Term Insurance?
              </h2>
              <p className="text-neutral-600">
                Term insurance is a life insurance policy that promises to pay a specific sum of money to the nominee upon the
                demise of the policyholder. This is a low-cost life insurance plan and it is very useful because it offers financial
                compensation to your dependent family members. This way, their financial life can be secure even in case of
                your untimely demise. Generally, insurance companies in India offer a policy term between 5 to 40 years.
              </p>
              <h2 className="text-xl lg:text-3xl font-semibold mt-5">
                How to Use the Term Insurance Calculator?
              </h2>
              <p className="text-neutral-600">
                The term insurance calculator from ET Money is easy to use and can help you estimate how large a life
                insurance cover you should have. The results of this tool are based on some key information provided by you,
                such as:</p>
              <p className="text-neutral-600">
                <span class="text-black font-semibold">Your Age:</span> This is your current age as per accepted age proof documents like Aadhaar, PAN, etc.<br></br>
                <span class="text-black font-semibold">Desired Retirement Age:</span>   While in the case of salaried, 60 years is usually considered as the age of retirement,
                you may decide to retire earlier or later depending upon your life goals.<br></br>
                <span class="text-black font-semibold">Existing Life Cover:</span>  If you already have a term plan or traditional life insurance plan in effect, the term
                insurance calculator will help you calculate how much additional life cover you need to have.<br></br>
                <span class="text-black font-semibold">Annual Income:</span> Using your annual income information, the calculator can estimate how much money your loved ones and dependents will need to ensure financial security in the case of your untimely demise.<br></br>
                <span class="text-black font-semibold">Existing Loan Details:</span>   To understand your current liabilities better, you need to provide details of any
                outstanding home loan and other loan EMIs that you pay each month. These loans represent your current
                outstanding liabilities.<br></br>
                <span class="text-black font-semibold"> Current Savings:</span>  If you have substantial savings, there is greater likelihood that your dependents will be
                financially secure in the case of your untimely demise. So, the calculator takes your current savings into
                account before estimating the life cover you might need.<br></br>
                Using the above data provided by you, the calculator will provide the following result:<br></br>
                <span class="text-black font-semibold"> Insurance Cover:</span>  This is the estimated total or additional life insurance cover that you will need based on your
                current income, liability, age, and planned age of retirement.<br></br>
                Along with the life cover details, you will also get a short list of term insurance plans from leading insurers along
                with the annual premium payment you need to make for a specific plan.
              </p>
              <h2 className="text-xl lg:text-3xl font-semibold mt-5">
                Benefits of Term insurance
              </h2>
              <div className="text-base text-neutral-600">
                <p>
                  Once you start using our PF calculator in India, you can easily track where your hard-earned money is being stored, and how much interest it has accumulated.
                </p>
                <p className="py-7">
                  Here are some interesting advantages of using an EPF calculator online.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    High sum assured at affordable premiums - Under Section 80C of the Income Tax Act, premium payments of up to ₹1.5 lakh are eligible for tax deductions every year. You can avail this benefit on premium payments for yourself, spouse and children.                </li>
                  <li>
                    Section 80D In case your term plan includes any add-on riders like hospital care rider, surgical care rider or critical illness rider, you can avail a maximum tax deduction of ₹25,000 per year on premium payments for these riders.                </li>
                  <li>
                    Section 10(10D) In case of the unfortunate demise of the policyholder, the maturity benefits are totally tax free under Section 10(10D). The entire amount payable to the beneficiaries is totally tax-free. This comes without any upper limit on the amount.                </li>
                </ul>
              </div>
              <p className="text-neutral-600">
                <span class="text-black font-semibold">Claim settlement assurance -</span> You can be certain of a claim settlement provided that your policy is in force for a period of three years and you have declared all your information correctly.
              </p>
              <p className="text-neutral-600">
                <span class="text-black font-semibold">Easy policy customization options -</span>  As the policyholder, you have the complete freedom to choose the policy term, amount and any extra benefits as per your budget and requirements.
              </p>
              <p className="text-neutral-600">
                <span class="text-black font-semibold">Free cancellation available - </span> When you purchase the policy through the ET Money App, you also have a 15-day free cancellation option in case you are still unsure about the policy.
              </p>
            </div>
          </div>
          <div className="">
            <div className="bg-white flex flex-col gap-0 min-w-0 lg:min-w-[110%] border rounded-lg border-gray-300 border-l-1 border-r-1">
              <div className="bg-gray-200 py-3 px-5 text-lg font-medium text-center">
                Popular Calculators
              </div>
              <div>
                {calculators.map((calculator, index) => (
                  <div key={index} className={`py-2 px-5 text-center test-xl ${index !== calculators.length - 1 ? 'border-b border-gray-300' : ''}`}>
                    {calculator}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCalculator;
