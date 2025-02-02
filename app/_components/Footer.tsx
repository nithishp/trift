'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
const Footer = () => {
    const FooterLinks = [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About",
        link: "/",
      },
      {
        title: "Services",
        link: "/",
      },
      {
        title: "Products",
        link: "/",
      },
      {
        title: "Contact",
        link: "/",
      },
    ];
  return (
    <motion.footer
      initial={{ opacity: 0.8, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-nitblack m-3 rounded-3xl h-[30vh] py-10 px-[10vw] text-white flex  justify-between"
    >
      <div>
        <Image
          height={100}
          width={100}
          alt="Trift logo"
          src="/trift-logo-bg-transparent-rect.svg"
          className="w-auto h-14 mb-3"
        />
        <p className="">
          Got an idea? Let&apos;s turn it into a next-level digital experience.{" "}
          <br />
          we&apos;re here to make it happen!!
        </p>
      </div>
      <div>
        <h1 className="text-lg font-semibold mb-3">Company</h1>
        <div className="flex flex-col gap-2">
          {FooterLinks.map((item, index) => (
            <a href={item.link} key={index} className="text-sm text-gray-500">
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold mb-3">Legal</h1>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500 text-nowrap">Privacy policy</p>
          <p className="text-sm text-gray-500 text-nowrap">Licensing</p>
          <p className="text-sm text-gray-500 text-nowrap">Terms of use</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer