import React from "react";
import ShiftingContactForm from "./ShiftingContactForm";
import { Building, MessageCircleMore, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-4xl font-semibold ">
          Got ideas? We have the skills. let's team up.
        </h1>
        <p className="mt-3">
          Tell us more about yourself and what you have got in your mind.
        </p>
      </div>
      <div className="flex mt-10">
        <div className="w-1/3">
          <div className="py-10 flex flex-col pr-10   gap-10">
            {/* CARD 1 */}
            <div className="flex items-center gap-4 ">
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
            </div>
            <div className="border-[1px]" />
            {/* CARD 2 */}
            <div className="flex items-center gap-4 ">
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
            </div>
            <div className="border-[1px]" />

            {/* CARD 3 */}
            <div className="flex items-center gap-4 ">
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
            </div>
          </div>
        </div>
        <div className="w-2/3 ">
          <ShiftingContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
