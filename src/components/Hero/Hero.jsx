import React from "react";
import HeroImg from "../../assets/hero.png";
import HeroBg from "../../assets/heroBg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <>
      <div className="reLative z-[-1]">
        <div className="container py-16 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* text-content section  */}
            <div className="space-y-7 text-dark order-2 sm:order-1">
              <h1 className="text-5xl">
                Fresh and Healthy Meal Plan Delivery in Saint Loius
              </h1>
              <p className="lg:pr-64">
                Indulge in gourmet{" "}
                <span className="text-secondary font-cursive text-7xl">
                  {" "}
                  Deliveries
                </span>{" "}
                to your door from $140.45 per week.
              </p>
              {/* button section  */}
              <div>
                <PrimaryButton />
              </div>
            </div>
            {/* Image section  */}
            <div className="relative z-30 order-1 sm:order-2">
              <img
                src={HeroImg}
                alt=""
                className="w-full sm:scale-125 sm:translate-y-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
