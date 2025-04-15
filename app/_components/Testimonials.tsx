'use client'
import Image from 'next/image';
import React from 'react'
import { motion} from 'framer-motion'

const Testimonials = () => {
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

// Child variant
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

  const textVariants = {
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
    const testimonials = [
      {
        avatar: "/avatar-1.webp",
        name: "Praveen",
        title: "CEO, Praveen Enterprises",
        content: "Trift took our website from 'meh' to 'WOW!'",
        bgColor: "bg-[#e1f5fe]",
      },
      {
        avatar: "/avatar-2.webp",
        name: "John Doe",
        title: "CEO, Company",
        content: "Our app blew up after Trift's magic touch!",
        bgColor: "bg-[#f9fbe7]",
      },
      {
        avatar: "/avatar-3.webp",
        name: "John Doe",
        title: "CEO, Company",
        content: "Trift built our app, and users love it!",
        bgColor: "bg-[#e3fabc]",
      },
    ];
  return (
    <div className="pb-20 flex flex-col items-center  text-center ">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-[1px] border-gray-400 px-4 py-1 rounded-full"
      >
        Testimonials
      </motion.h1>
      <motion.h1
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        className="text-5xl font-semibold mt-5"
      >
        Proof That We Don&apos;t Just Talk, We Build!
      </motion.h1>
      <motion.p
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-[600px] mt-5 text-lg"
      >
        We let our projects do the talking. Don&apos;t just take our word for
        it—here&apos;s what our happy clients have to say about Trift!
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="my-20 flex flex-col lg:flex-row gap-10"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            key={index}
            className={`flex flex-col p-5 text-start ${testimonial.bgColor} rounded-3xl`}
          >
            <div className="flex gap-2">
              <Image
                src={testimonial.avatar}
                alt="avatar"
                width={100}
                height={100}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h1 className="text-xl font-semibold mt-5">
                  {testimonial.name}
                </h1>
                <h1 className="text-sm">{testimonial.title}</h1>
              </div>
            </div>
            <p className="max-w-[300px] mt-5 font-semibold text-2xl">
              {testimonial.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Testimonials