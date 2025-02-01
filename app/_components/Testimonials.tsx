import Image from 'next/image';
import { title } from 'process';
import React from 'react'

const Testimonials = () => {
    const testimonials = [
      {
        avatar: "/avatar-1.webp",
        name: "John Doe",
        title: "CEO, Company",
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
      <h1 className="border-[1px] border-gray-400 px-4 py-1 rounded-full">
        Testimonials
      </h1>
      <h1 className="text-5xl font-semibold mt-5">
        Proof That We Don't Just Talk, We Build!
      </h1>
      <p className="max-w-[600px] mt-5 text-lg">
        We let our projects do the talking. Don't just take our word for
        it—here's what our happy clients have to say about Trift!
      </p>
      <div className="my-20 flex gap-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`flex flex-col p-5 text-start ${testimonial.bgColor} rounded-3xl`}>
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
            <p className="max-w-[300px] mt-5 font-semibold text-2xl">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials