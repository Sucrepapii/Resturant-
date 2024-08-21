import React from "react";
import HeroImg from "../

const Hero = () => {
  return (
    <>
      <div className="reLative z-[-1]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* text-content section  */}
            <div>
              <h1>Fresh and Healthy Meal Plan Delivery in Saint Loius</h1>
              <p>
                Indulge in gourmet deliveries to your door from $140.45 per
                week.
              </p>
            </div>
            {/* Image section  */}
            <div>
                <img src={HeroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
