import React, { useState } from "react";
import "../app.css";
import home from "../assets/homeLoan.png";
import car from "../assets/car.png";
import card from "../assets/card.png";
import cloud from "../assets/cloud_edu.png";
import gold from "../assets/gold.png";
import business from "../assets/businessLoan.png";
import house from "../assets/house.png";
import right from "../assets/blue-right.png";

const Product = () => {
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);

  const handleViewMore = () => {
    setShowAdditionalCards(true);
  };
  return (
    <div className="my-14 xl:my-20 font-manrope mx-10 md:mx-16 lg:mx-20 xl:mx-24">
      <p className="text-[23px] text-center md:text-start font-bold lg:my-10 lg:text-[30px] lg:tracking-wide">
        Check out what <span className="text-[#474FFF]">CREDWALA</span> trending
        products
      </p>

      <div className="my-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="ag-courses_item">
          <div className="ag-courses-item_link rounded-lg border shadow-lg">
            <div className="ag-courses-item_bg" />
            <div className=" ag-courses-item_title">
              <div className="flex">
                <div>
                  <p className="font-bold text-[14px]">HOME LOAN</p>
                  <p className="text-[13px] my-4 text-[#111111]">
                    Choose from lowest interest rates available for your dream
                    home
                  </p>
                </div>
                <div>
                  <img src={home} className="w-16" />
                </div>
              </div>
              <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] font-semibold mt-3">
                Check Eligibility <img src={right} className="h-3 ml-2" />
              </p>
            </div>
          </div>
        </div>

        <div className="ag-courses_item">
          <div className="ag-courses-item_link rounded-xl border shadow-lg">
            <div className="ag-courses-item_bg" />
            <div className=" ag-courses-item_title">
              <div className="flex">
                <div>
                  <p className="font-bold text-[14px]">PERSONAL LOAN</p>
                  <p className="text-[13px] my-4 text-[#111111]">
                    Select the best offer curated just for you from a wide
                    choice of Banks & NBFC's
                  </p>
                </div>
                <div>
                  <img src={house} />
                </div>
              </div>
              <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] font-semibold mt-3">
                Check Eligibility <img src={right} className="h-3 ml-2" />
              </p>
            </div>
          </div>
        </div>

        <div className="ag-courses_item">
          <div className="ag-courses-item_link rounded-lg border shadow-lg">
            <div className="ag-courses-item_bg" />
            <div className=" ag-courses-item_title">
              <div className="flex">
                <div>
                  <p className="font-bold text-[14px]">BUSINESS LOAN</p>
                  <p className="text-[13px] my-4 text-[#111111]">
                    Expand your business with loans at low interest rates.
                  </p>
                </div>
                <div>
                  <img src={business} />
                </div>
              </div>
              <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                Check Eligibility <img src={right} className="h-3 ml-2" />
              </p>
            </div>
          </div>
        </div>

        <div className="ag-courses_item">
          <div className="ag-courses-item_link rounded-lg border shadow-lg">
            <div className="ag-courses-item_bg" />
            <div className=" ag-courses-item_title">
              <div className="flex">
                <div>
                  <p className="font-bold text-[14px]">STEP UP CREDIT CARD</p>
                  <p className="text-[13px] my-4 text-[#111111]">
                    A Credit Card for everyone, backed by a Fixed Deposit
                  </p>
                </div>
                <div>
                  <img src={card} />
                </div>
              </div>
              <p className=" flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                Know More <img src={right} className="h-3 ml-2" />
              </p>
            </div>
          </div>
        </div>

        <div className="ag-courses_item">
          <div className="ag-courses-item_link rounded-lg border shadow-lg">
            <div className="ag-courses-item_bg" />
            <div className=" ag-courses-item_title">
              <div className="flex">
                <div>
                  <p className="font-bold text-[14px]">USED CAR LOAN</p>
                  <p className="text-[13px] my-4 text-[#111111]">
                    Choose from lowest interest rates available for your dream
                    home
                  </p>
                </div>
                <div>
                  <img src={car} className="w-24" />
                </div>
              </div>
              <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                Know More <img src={right} className="h-3 ml-2" />
              </p>
            </div>
          </div>
        </div>

        <div className="ag-courses_item">
          <div className="ag-courses-item_link rounded-lg border shadow-lg">
            <div className="ag-courses-item_bg" />
            <div className=" ag-courses-item_title">
              <div className="flex">
                <div>
                  <p className="font-bold text-[14px]">EDUCATION</p>
                  <p className="text-[13px] my-4 text-[#111111]">
                    Select the best offer curated just for you from a wide
                    choice of Banks & NBFC's
                  </p>
                </div>
                <div>
                  <img src={cloud} className=" w-16" />
                </div>
              </div>
              <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                Know More <img src={right} className="h-3 ml-2" />
              </p>
            </div>
          </div>
        </div>

        <div className="ag-courses_item">
          <div className="ag-courses-item_link rounded-lg border shadow-lg">
            <div className="ag-courses-item_bg" />
            <div className=" ag-courses-item_title">
              <div className="flex">
                <div>
                  <p className="font-bold text-[14px]">GOLD LOAN</p>
                  <p className="text-[13px] my-4 text-[#111111]">
                    Expand your business with loans at low interest rates.
                  </p>
                </div>
                <div>
                  <img src={gold} className="w-20" />
                </div>
              </div>
              <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                Know More <img src={right} className="h-3 ml-2" />
              </p>
            </div>
          </div>
        </div>

        <div className="ag-courses_item">
          <div className="ag-courses-item_link rounded-lg border shadow-lg">
            <div className="ag-courses-item_bg" />
            <div className=" ag-courses-item_title">
              <div className="flex">
                <div>
                  <p className="font-bold text-[14px]">LOAN AGANIST SECURITY</p>
                  <p className="text-[13px] my-4 text-[#111111]">
                    Get liquidity against your property at best interest rates
                  </p>
                </div>
                <div>
                  <img src={house} />
                </div>
              </div>
              <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                Know More <img src={right} className="h-3 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {showAdditionalCards && (
        <div className="my-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="ag-courses_item">
            <div className="ag-courses-item_link rounded-lg border shadow-lg">
              <div className="ag-courses-item_bg" />
              <div className=" ag-courses-item_title">
                <div className="flex">
                  <div>
                    <p className="font-bold text-[14px]">HOME LOAN</p>
                    <p className="text-[13px] my-4 text-[#111111]">
                      Choose from lowest interest rates available for your dream
                      home
                    </p>
                  </div>
                  <div>
                    <img src={home} className="w-16" />
                  </div>
                </div>
                <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] font-semibold mt-3">
                  Check Eligibility <img src={right} className="h-3 ml-2" />
                </p>
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link rounded-xl border shadow-lg">
              <div className="ag-courses-item_bg" />
              <div className=" ag-courses-item_title">
                <div className="flex">
                  <div>
                    <p className="font-bold text-[14px]">PERSONAL LOAN</p>
                    <p className="text-[13px] my-4 text-[#111111]">
                      Select the best offer curated just for you from a wide
                      choice of Banks & NBFC's
                    </p>
                  </div>
                  <div>
                    <img src={house} />
                  </div>
                </div>
                <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] font-semibold mt-3">
                  Check Eligibility <img src={right} className="h-3 ml-2" />
                </p>
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link rounded-lg border shadow-lg">
              <div className="ag-courses-item_bg" />
              <div className=" ag-courses-item_title">
                <div className="flex">
                  <div>
                    <p className="font-bold text-[14px]">BUSINESS LOAN</p>
                    <p className="text-[13px] my-4 text-[#111111]">
                      Expand your business with loans at low interest rates.
                    </p>
                  </div>
                  <div>
                    <img src={business} />
                  </div>
                </div>
                <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                  Check Eligibility <img src={right} className="h-3 ml-2" />
                </p>
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link rounded-lg border shadow-lg">
              <div className="ag-courses-item_bg" />
              <div className=" ag-courses-item_title">
                <div className="flex">
                  <div>
                    <p className="font-bold text-[14px]">STEP UP CREDIT CARD</p>
                    <p className="text-[13px] my-4 text-[#111111]">
                      A Credit Card for everyone, backed by a Fixed Deposit
                    </p>
                  </div>
                  <div>
                    <img src={card} />
                  </div>
                </div>
                <p className=" flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                  Know More <img src={right} className="h-3 ml-2" />
                </p>
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link rounded-lg border shadow-lg">
              <div className="ag-courses-item_bg" />
              <div className=" ag-courses-item_title">
                <div className="flex">
                  <div>
                    <p className="font-bold text-[14px]">USED CAR LOAN</p>
                    <p className="text-[13px] my-4 text-[#111111]">
                      Choose from lowest interest rates available for your dream
                      home
                    </p>
                  </div>
                  <div>
                    <img src={car} className="w-24" />
                  </div>
                </div>
                <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                  Know More <img src={right} className="h-3 ml-2" />
                </p>
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link rounded-lg border shadow-lg">
              <div className="ag-courses-item_bg" />
              <div className=" ag-courses-item_title">
                <div className="flex">
                  <div>
                    <p className="font-bold text-[14px]">EDUCATION</p>
                    <p className="text-[13px] my-4 text-[#111111]">
                      Select the best offer curated just for you from a wide
                      choice of Banks & NBFC's
                    </p>
                  </div>
                  <div>
                    <img src={cloud} className=" w-16" />
                  </div>
                </div>
                <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                  Know More <img src={right} className="h-3 ml-2" />
                </p>
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link rounded-lg border shadow-lg">
              <div className="ag-courses-item_bg" />
              <div className=" ag-courses-item_title">
                <div className="flex">
                  <div>
                    <p className="font-bold text-[14px]">GOLD LOAN</p>
                    <p className="text-[13px] my-4 text-[#111111]">
                      Expand your business with loans at low interest rates.
                    </p>
                  </div>
                  <div>
                    <img src={gold} className="w-20" />
                  </div>
                </div>
                <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                  Know More <img src={right} className="h-3 ml-2" />
                </p>
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link rounded-lg border shadow-lg">
              <div className="ag-courses-item_bg" />
              <div className=" ag-courses-item_title">
                <div className="flex">
                  <div>
                    <p className="font-bold text-[14px]">
                      LOAN AGANIST SECURITY
                    </p>
                    <p className="text-[13px] my-4 text-[#111111]">
                      Get liquidity against your property at best interest rates
                    </p>
                  </div>
                  <div>
                    <img src={house} />
                  </div>
                </div>
                <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] mt-3 font-semibold">
                  Know More <img src={right} className="h-3 ml-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-center lg:mt-12">
        {!showAdditionalCards && (
          <button
            className="ripple btn btn-hover bg-[#334bd5] text-white text-[15px] w-[120px] h-[33px] xl:w-[135px] xl:h-[35px] rounded-full"
            onClick={handleViewMore}
          >
            View more
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
