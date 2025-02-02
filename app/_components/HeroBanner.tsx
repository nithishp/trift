'use client'
import React from "react";
import SlidingButton from "./SlidingButton"; // Ensure this file exists and has a default export
import { motion } from "framer-motion";

const ContainerVariants = {
  hidden: { opacity: 0, y: 100, scaleX: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scaleX: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3, // Apply stagger effect to children
      when: "beforeChildren", // Make sure the container animates first
      y: { duration: 0.5 }, // Animate y position first
      scaleX: { duration: 0.5, delay: 0.5 }, // Delay scaleX after y reaches 0
    },
  },
};


const TextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const HeroBanner = () => {
  return (
    <motion.div
      variants={ContainerVariants}
      initial="hidden"
      animate="visible"
      className="bg-nitblack text-white rounded-3xl p-5 lg:p-14 pt-32 flex"
    >
      {/* Left Section */}
      <div className="lg:w-2/3 text-center lg:text-left">
        <motion.h1
          variants={TextVariants}
          className=" text-4xl lg:text-6xl font-semibold my-5"
        >
          Where Ideas Get{" "}
        </motion.h1>
        <motion.h1
          variants={TextVariants}
          className="text-4xl lg:text-6xl font-semibold my-5"
        >
          a{" "}
          <span className=" text-5xl lg:text-7xl bg-gradient-to-r from-green-500 via-green-300 to-green-500 inline-block text-transparent bg-clip-text">
            Glow-Up!
          </span>
        </motion.h1>
        <motion.p
          variants={TextVariants}
          className="text-nitsubwhite text-lg font-normal my-5"
        >
          Your ideas? Your website or app? Uh... could be better. No worries, we
          got you!
        </motion.p>

        <SlidingButton text={"Slide"} className="mt-5" />
      </div>

      {/* Right Section */}
      <div className="w-1/3 hidden lg:nline "  />
    </motion.div>
  );
};

export default HeroBanner;
