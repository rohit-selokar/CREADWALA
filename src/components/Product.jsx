import React, { useState } from "react";
import right from "../assets/blue-right.png";
import "../app.css";
import productData from "../../products.json";

const Product = () => {
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);

  // Function to handle the "View more" button click
  const handleViewMore = () => {
    setShowAdditionalCards(true);
  };

  return (
    <div className="container xl:mx-auto max-w-7xl my-14 xl:my-20 font-manrope">
      <p className="text-[23px] text-center md:text-start font-bold lg:my-10 lg:text-[30px] lg:tracking-wide">
        Check out what <span className="text-[#474FFF]">CREDWALA</span> trending
        products
      </p>

      <div className=" lg:mx-0 my-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData
          .slice(0, showAdditionalCards ? undefined : 8)
          .map((product, index) => (
            <div className="ag-courses_item" key={index}>
              <div className="ag-courses-item_link rounded-lg border shadow-lg">
                <div className="ag-courses-item_bg" />
                {/* card */}
                <div className="ag-courses-item_title">
                  <div className="flex">
                    <div>
                      <p className="font-bold text-[14px]">{product.title}</p>
                      <p className="text-[13px] my-4 text-[#111111]">
                        {product.description}
                      </p>
                    </div>
                    <div>
                      <img src={product.image} alt={product.title} />
                    </div>
                  </div>
                  <p className="flex items-center ag-courses-item_date text-[#007F86] text-[13px] font-semibold mt-3">
                    Check Eligibility{" "}
                    <img src={right} alt="Right arrow" className="ml-1" />
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

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
