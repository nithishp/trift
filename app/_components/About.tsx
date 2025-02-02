"use client";

import { AppWindow, TabletSmartphone } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


 
  return (
    <div className="flex flex-col items-center gap-5 py-20">
      <motion.h1
        className="text-5xl font-semibold text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeInUpVariants}
      >
        What We Do (a.k.a. The Cool Stuff)
      </motion.h1>

      <motion.p
        className="max-w-2xl text-center text-lg text-nitblack"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
      >
        At Trift, we don&apos;t just build websites and apps—we create digital
        masterpieces that turn heads, grab clicks, and make your brand stand out
        like a rare NFT.
      </motion.p>

      <motion.div className="mt-10 flex flex-col lg:flex-row gap-5">
        <motion.div
          className="bg-white p-10 rounded-2xl flex-1"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <AppWindow className="text-gray-500 size-14 mb-7" />
          <h1 className="text-2xl font-semibold mb-4">Web Application</h1>
          <p>
            Scroll-Worthy Sites That Slay. Show the world what you&apos;ve got
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-10 rounded-2xl flex-1"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <TabletSmartphone className="text-gray-500 size-14 mb-7" />
          <h1 className="text-2xl font-semibold mb-4">App Development</h1>
          <p>
            Got an app idea? We turn it into a smooth, addictively usable
            reality.
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-10 rounded-2xl flex-1"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
        >
          <AppWindow className="text-gray-500 size-14 mb-7" />
          <h1 className="text-2xl font-semibold mb-4">Web Application</h1>
          <p>Why settle for basic when you can go next level?</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
