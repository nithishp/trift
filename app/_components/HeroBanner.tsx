import React from "react";
import SlidingButton from "./SlidingButton";

const HeroBanner = () => {
  return (
    <div className=" bg-nitblack  text-white rounded-3xl p-14 pt-32 ">
      <div className="w-2/3">
        <h1 className="text-6xl font-semibold  my-5">Where Ideas Get </h1>
        <h1 className="text-6xl font-semibold  my-5">
          a{" "}
          <span className="text-7xl bg-gradient-to-r from-green-500 via-green-300 to-green-500 inline-block text-transparent bg-clip-text">
            Glow-Up!
          </span>
        </h1>
        <p className="text-nitsubwhite text-lg font-normal my-5">
          Your ideas? Your website or app? Uh... could be better. No worries, we
          got you!
        </p>

        <SlidingButton text={"Slide"} className="mt-5" />
      </div>
      <div className="w-1/3" />
    </div>
  );
};

export default HeroBanner;
