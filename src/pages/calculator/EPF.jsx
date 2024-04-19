import React, { useState, useEffect } from 'react';
import InputSlider from "react-input-slider";

const EPF = () => {
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

    const [MonthlySalary, setMonthlySalary] = useState(30000);
    const [Contribution, setContribution] = useState(12);
    const [YourAge, setYourAge] = useState(28);
    const [AnnualIncrease, setAnnualIncrease] = useState(5);
    const [CalculatedAmount, setCalculatedAmount] = useState(null);

    useEffect(() => {
        const calculatedEPFAmount = MonthlySalary * (Contribution / 100) * (AnnualIncrease / 100);
        setCalculatedAmount(calculatedEPFAmount);
    }, [MonthlySalary, Contribution, YourAge, AnnualIncrease]);

    const handleMonthlySalary = ({ x }) => {
        setMonthlySalary(x);
    };

    const handleYourAgeChange = ({ x }) => {
        setYourAge(x);
    };

    const handleAnnualIncrease = ({ x }) => {
        setAnnualIncrease(x);
    };

    const handleContribution = ({ x }) => {
        setContribution(x);
    };

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
                    EPF Calculator
                </div>
                <div className="flex flex-col lg:flex-row py-10">
                    <div className="w-full lg:w-3/4 bg-white overflow-hidden flex flex-col items-start justify-start gap-0 tracking-normal">
                        <div className="w-full max-w-full lg:max-w-[93%] flex flex-col items-start justify-start gap-10">
                            <div className="md:p-2 w-full bg-[#f8f8f8] border rounded-2xl shadow">
                                <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start mt-5">
                                    <div className="p-8 w-[100%] lg:w-[100%] xl:w-[200%] font-semibold text-l">
                                        <div>
                                            <p className=" flex items-center justify-between">
                                                Monthly Salary
                                                <div>
                                                    <button className="px-4 p-2 border border-[#B9BABD] rounded-l-md">
                                                        ₹
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className=" p-2 w-24 border border-[#B9BABD] rounded-r-md"
                                                        value={MonthlySalary}
                                                        onChange={(e) =>
                                                            setMonthlySalary(parseInt(e.target.value))
                                                        }
                                                    />
                                                </div>
                                            </p>
                                            <InputSlider
                                                axis="x"
                                                x={MonthlySalary}
                                                xmin={0}
                                                xmax={100000}
                                                onChange={handleMonthlySalary}
                                                style={{ width: "100%", height: "4px" }}
                                            />
                                        </div>

                                        <div className="mt-12">
                                            <p className="flex items-center justify-between">
                                                Your Age
                                                <div>
                                                    <input
                                                        type="number"
                                                        className=" p-2 w-14 border border-[#B9BABD] rounded-l-md"
                                                        value={YourAge}
                                                        onChange={(e) =>
                                                            handleYourAgeChange(parseInt(e.target.value))
                                                        }
                                                    />
                                                    <button className="border border-[#3551E7] bg-[#3551E7] text-white p-2 px-4 rounded-r-md">
                                                        Year
                                                    </button>
                                                </div>
                                            </p>
                                            <InputSlider
                                                axis="x"
                                                x={YourAge}
                                                xmin={18}
                                                xmax={80}
                                                onChange={handleYourAgeChange}
                                                 style={{ width: "100%", height: "4px" }}
                                            />
                                        </div>

                                        <div className="mt-12">
                                            <p className=" flex items-center justify-between">
                                                Your Contribution of EPF{" "}
                                                <div>
                                                    <input
                                                        className="border border-[#B9BABD] p-2 rounded-l-md bg-white w-16 text-center"
                                                        type="number"
                                                        value={Contribution}
                                                        onChange={(e) =>
                                                            handleContribution(parseInt(e.target.value))
                                                        }
                                                    />
                                                    <button className="px-3 p-2 border border-[#B9BABD] rounded-r-md">
                                                        %
                                                    </button>
                                                </div>
                                            </p>
                                            <InputSlider
                                                axis="x"
                                                x={Contribution}
                                                xmin={12}
                                                xmax={100}
                                                onChange={handleContribution}
                                                 style={{ width: "100%", height: "4px" }}
                                            />
                                        </div>

                                        <div className="mt-12">
                                            <p className=" flex items-center justify-between">
                                                Annual Increase Salary{" "}
                                                <div>
                                                    <input
                                                        type="number"
                                                        className="border border-[#B9BABD] p-2 rounded-l-md w-14 text-center"
                                                        value={AnnualIncrease}
                                                        onChange={(e) =>
                                                            handleAnnualIncrease(parseInt(e.target.value))
                                                        }
                                                    />
                                                    <button className="px-3 p-2 border border-[#B9BABD] rounded-r-md">
                                                        %
                                                    </button>
                                                </div>
                                            </p>
                                            <InputSlider
                                                axis="x"
                                                x={AnnualIncrease}
                                                xmin={0}
                                                xmax={20}
                                                onChange={handleAnnualIncrease}
                                                 style={{ width: "100%", height: "4px" }}
                                            />
                                        </div>

                                        <div className="mt-12">
                                            <p className=" flex items-center justify-between">
                                                Rate of Intrest{" "}
                                                <button className="border border-[#B9BABD] p-2 px-4 rounded-md">
                                                    7.1 %
                                                </button>
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-center mt-10 mb-10">
                                            <div className="text-center text-neutral-600 ">
                                                <p className="pt-4">You will have accumulated</p>
                                                <p className="text-3xl pt-4">{CalculatedAmount !== null ? `₹${CalculatedAmount}` : "calculate"}</p>
                                                <p className="pt-4">by the time you retire</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <p className="text-neutral-600">
                                Most private sector employees are entitled to receive post-retirement benefits if they function in the organised
                                sector. Note that government employees are additionally eligible for pensions unlike their private sector
                                counterparts. Employee Provident Fund was set up after the EPF Act was passed in the Parliament. Under the
                                law, the Employees Provident Fund Organisation of India (or EFPO) controls the funds deposited by both the
                                employee and employer in a permanent account, affixed by an UAN or Unique Account Number. An EPF
                                calculator can help you estimate your savings appropriately.
                            </p>
                            <p className="text-neutral-600">
                                The PF calculator uses proprietary technology to fetch the correct sum every time you input data. Provident
                                Fund acts as a guarantee for future prosperity or loss of employment, and is of great use for future financial
                                decision-making.
                            </p>
                            <h2 className="text-xl lg:text-3xl font-semibold mt-5">
                                How can an EPF calculator help you?
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
                                        You do not have to manually calculate your total contributions each time.
                                    </li>
                                    <li>
                                        We assure that our PF calculator online works correctly on every occasion.
                                    </li>
                                    <li>
                                        You do not have to worry if the interest rates or contribution ratios vary over a period. The EPF calculator will automatically take into account the alteration.
                                    </li>
                                    <li>
                                        Finally, whenever you use our EPFO calculator, you are automatically informed of any recent transactions, contributions and changes, if any. For example, the current rate of interest on EPF is 8.15%. If it changes during the financial year due to any new legislation, you will be notified once you log in.
                                    </li>
                                </ul>
                            </div>
                            <div className=" w-full bg-white pt-5 pb-5 ring-gray-900/5 sm:max-w-10xl sm:rounded-lg">
                                <h2 className=" text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
                                <div className=" mt-5 grid max-w-10xl divide-y divide-neutral-200 text-neutral-600">
                                    <div className="py-5">
                                        <details className="group">
                                            <summary className="flex cursor-pointer list-none items-center justify-between  ">
                                                <span>Is the EPF calculator free to use?</span>
                                                <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                                                billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                                                pricing for certain services. Payment is typically made through a credit card or other
                                                secure online payment method.
                                            </p>
                                        </details>
                                    </div>
                                    <div className="py-5">
                                        <details className="group">
                                            <summary className="flex cursor-pointer list-none items-center justify-between  ">
                                                <span>How many times can I use the online EPF calculator?</span>
                                                <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a 30-day money-back
                                                guarantee for most of its subscription plans. If you are not satisfied with your
                                                subscription within the first 30 days, you can request a full refund. Refunds for
                                                subscriptions that have been active for longer than 30 days may be considered on a
                                                case-by-case basis.
                                            </p>
                                        </details>
                                    </div>
                                    <div className="py-5">
                                        <details className="group">
                                            <summary className="flex cursor-pointer list-none items-center justify-between  ">
                                                <span>Can I use the same calculator even after I change my job?</span>
                                                <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">To cancel your subscription, you can
                                                log in to your account and navigate to the subscription management page. From there, you
                                                should be able to cancel your subscription and stop future billing.
                                            </p>
                                        </details>
                                    </div>
                                    <div className="py-5">
                                        <details className="group">
                                            <summary className="flex cursor-pointer list-none items-center justify-between  ">
                                                <span>What happens if the depositor rates- from either my end or my employer’s- changes?</span>
                                                <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a free trial of our software
                                                for a limited time. During the trial period, you will have access to a limited set of
                                                features and functionality, but you will not be charged.
                                            </p>
                                        </details>
                                    </div>
                                    <div className="py-5">
                                        <details className="group">
                                            <summary className="flex cursor-pointer list-none items-center justify-between  ">
                                                <span>When can I withdraw the money from my EPF account?</span>
                                                <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">If you need help with our platform or
                                                have any other questions, you can contact the company's support team by submitting a support
                                                request through the website or by emailing support@ourwebsite.com.
                                            </p>
                                        </details>
                                    </div>
                                </div>
                            </div>
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

export default EPF;
