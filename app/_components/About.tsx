import { AppWindow, TabletSmartphone } from 'lucide-react';
import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-20">
      <h1 className="text-5xl font-semibold text-center">
        What We Do (a.k.a. The Cool Stuff)
      </h1>
      <p className="max-w-2xl text-center text-lg text-nitblack">
        At Trift, we don&apos;t just build websites and apps—we create digital
        masterpieces that turn heads, grab clicks, and make your brand stand out
        like a rare NFT.
      </p>

      <div className="mt-10 flex gap-5">
        <div className="bg-white p-10 rounded-2xl flex-1 ">
          <AppWindow className="text-gray-500 size-14 mb-7" />
          <h1 className="text-2xl font-semibold mb-4">Web Application</h1>
          <p>
            {" "}
            Scroll-Worthy Sites That Slay. Show the world what you&apos;ve got
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl flex-1 ">
          <TabletSmartphone className="text-gray-500 size-14 mb-7" />
          <h1 className="text-2xl font-semibold mb-4">App Development </h1>
          <p>
            {" "}
            Got an app idea? We turn it into a smooth, addictively usable
            reality
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl flex-1 ">
          <AppWindow className="text-gray-500 size-14 mb-7" />
          <h1 className="text-2xl font-semibold mb-4">Web Application</h1>
          <p>
            {" "}
            Why settle for basic when you can go next level?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About