'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image';
const TextBanner = () => {
  return (
    <div className="py-20 flex items-center justify-center text-center relative">
      <Image src="/tl.png" width={500} height={500} alt="Images" className='absolute  hidden lg:inline-block size-20 top-0 left-0'  />
      <Image src="/tr.png" width={500} height={500} alt="Images"  className='absolute hidden lg:inline-block  size-20 top-0 right-0' />
      <Image src="/bl.png" width={500} height={500} alt="Images" className='absolute  hidden lg:inline-block size-20 bottom-10 left-14'  />
      <Image src="/br.png" width={500} height={500} alt="Images"  className='absolute hidden lg:inline-block  size-20 bottom-5 right-14' />
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        className=" text-3xl lg:text-6xl font-semibold leading-relaxed lg:px-20"
      >
        No Boring, Corporate Vibes, <br />
        We speak your language
      </motion.h1>
    </div>
  );
}

export default TextBanner