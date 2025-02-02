'use client'
import React from "react";
import ShiftingContactForm from "./ShiftingContactForm";
import { Building, MessageCircleMore, PhoneCall } from "lucide-react";
import {motion} from 'framer-motion'
const Contact = () => {
  const textVariant = {
    hidden:{
      opacity:0,
      y:100
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.5
      }
    }
  }

  const ContainerVariants = {
    hidden:{
      opacity:0,
      y:100
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        staggerChildren:0.3
      }
    }
  }
    const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };

  return (
    <div className="mb-20">
      <div className="text-center">
        <motion.h1
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-semibold "
        >
          Got ideas? We have the skills. let's team up.
        </motion.h1>
        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          className="mt-3"
        >
          Tell us more about yourself and what you have got in your mind.
        </motion.p>
      </div>
      <div className="flex mt-10">
        <motion.div
          variants={ContainerVariants}
          initial="hidden"
          whileInView="visible"
          className="w-1/3"
        >
          <div className="py-10 flex flex-col pr-10   gap-10">
            {/* CARD 1 */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 ">
              <div className="p-4 border-[1px] border-gray-300 rounded-lg">
                <MessageCircleMore className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">Chat with us</h1>
                <p className="text-sm text-gray-500 italic">
                  Our friendly team is here to help
                </p>
                <p className="font-semibold mt-3">Contact@trift.in</p>
              </div>
            </motion.div>
            <div className="border-[1px]" />
            {/* CARD 2 */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 ">
              <div className="p-4 border-[1px] border-gray-300 rounded-lg">
                <Building className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">Visit us</h1>
                <p className="text-sm text-gray-500 italic">
                  Come and say hello at our office HQ
                </p>
                <p className="font-semibold mt-3">
                  259/92A, Weaver's colony,
                  <br />
                  Nagercoil-629003, Kanyakumari.
                </p>
              </div>
            </motion.div>
            <div className="border-[1px]" />

            {/* CARD 3 */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 ">
              <div className="p-4 border-[1px] border-gray-300 rounded-lg">
                <PhoneCall className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">Call us</h1>
                <p className="text-sm text-gray-500 italic">
                  Mon - Sat 9am to 6pm
                </p>
                <p className="font-semibold mt-3">Contact@trift.in</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-2/3 "
        >
          <ShiftingContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
