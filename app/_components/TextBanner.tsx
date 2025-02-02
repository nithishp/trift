'use client'
import React from 'react'
import {motion} from 'framer-motion'
const TextBanner = () => {
  return (
    <div className="py-20 flex items-center justify-center text-center">
      <motion.h1 initial={{scale:0.8,opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:0.5}}} className="text-6xl font-semibold leading-relaxed px-20">
        No Boring, Corporate Vibes, <br />
         We speak your language
      </motion.h1>
    </div>
  );
}

export default TextBanner