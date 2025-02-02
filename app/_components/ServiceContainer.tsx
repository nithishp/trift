"use client";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ServiceContainer = () => {
  const textVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  const gridItemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
  ];

  const col1 = [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      profileUrl: "",
    },
    {
      imageUrl: "https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg",
      profileUrl: "",
    },
  ];

  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-5 lg:p-14"
    >
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        className="flex justify-center items-center border-[1px] border-nitblack px-4 py-2 rounded-full w-max gap-2"
      >
        <Image
          width={5}
          height={5}
          alt="Logo"
          src="/only-logo.svg"
          className="size-7"
        />
        <p>Our Services</p>
      </motion.div>
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        className="mt-5 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between "
      >
        <h1 className="text-4xl font-semibold text-center lg:text-left lg:w-1/3">
          Why Trift? <br />
          <span className=" text-xl lg:text-3xl lg:text-nowrap">
            (a.k.a. Why You&apos;ll Love Us)
          </span>
        </h1>
        <div className=" lg:inline hidden w-1/3" />
        <p className="text-wrap text-center lg:text-center lg:w-1/3 ">
          We're not just developers—we're digital architects who bring big
          energy, fresh ideas, and zero boring vibes.
        </p>
      </motion.div>
      <div className="pt-10 grid grid-cols-3 gap-5">
        {/* column 1 */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          custom={1} // Index for stagger delay
          className="flex flex-col justify-between gap-2 bg-[#ffe4c4] rounded-2xl p-5"
        >
          <div>
            <div className="flex">
              <Image
                width={500}
                height={500}
                alt="Logo"
                src="/service-img-1.png"
                className="w-full aspect-video object-cover rounded-xl"
              />
            </div>
            <h1 className="text-xl font-semibold pt-2">Web Development</h1>
            <p className="pt-2 text-sm">
              We build responsive, high-performance websites that look great on
              every device.
            </p>
          </div>
          <AvatarCircles avatarUrls={col1} />
        </motion.div>

        {/* column 2 */}
        <div className="flex flex-col gap-5">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            custom={3} // Second element in sequence
            className="flex flex-col gap-4 bg-lamaBlue rounded-2xl p-5"
          >
            <h1 className="text-xl font-semibold">Mobile App Development</h1>
            <p className="pt-2 text-sm">
              We create custom mobile apps that are user-friendly and intuitive.
            </p>
            <AvatarCircles avatarUrls={avatars} />
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            custom={2} // Third element in sequence
            className="flex flex-col gap-4 bg-lamaPurple flex-1 rounded-2xl p-5  overflow-clip"
          >
            <h1 className="text-xl font-semibold">Mobile App Development</h1>
            <p className="pt-2 text-sm">
              We build responsive, high-performance websites that look great on
              every device.
            </p>

            <Image
              width={500}
              height={500}
              src="/service-img-2.png"
              alt="Logo"
              className="mt-5  w-full object-cover aspect-video rounded-xl"
            />
          </motion.div>
        </div>

        {/* column 3 */}
        <div className="flex flex-col gap-5">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            custom={1} // Fourth element
            className="flex flex-col gap-4 bg-[#f6ddc8] rounded-2xl p-5"
          >
            <Image
              width={500}
              height={500}
              src="/service-img-3.png"
              alt="Logo"
              className="w-full object-cover aspect-video rounded-xl"
            />
            <h1 className="text-xl font-semibold">Mobile App Development</h1>
            <p className="pt-2 text-sm">
              We create custom mobile apps that are user-friendly and intuitive.
            </p>
            <AvatarCircles avatarUrls={avatars} />
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            custom={2} // Fifth element
            className="flex flex-col flex-1 gap-4 bg-[#fff4b8] rounded-2xl p-5"
          >
            <h1 className="text-xl font-semibold">Mobile App Development</h1>
            <p className="pt-2 text-sm">
              We build responsive, high-performance websites that look great on
              every device.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceContainer;
