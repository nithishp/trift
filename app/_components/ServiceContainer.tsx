import { AvatarCircles } from '@/components/ui/avatar-circles';
import Image from 'next/image'
import React from 'react'

const ServiceContainer = () => {
  
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
  }
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
    <div className="bg-white rounded-2xl p-14">
      <div className="flex justify-center items-center border-[1px] border-nitblack px-4 py-2 rounded-full w-max gap-2">
        <Image
          width={5}
          height={5}
          alt="Logo"
          src="/only-logo.svg"
          className="size-7"
        />
        <p>Our Services</p>
      </div>
      <div className="mt-5 flex justify-between ">
        <h1 className="text-4xl font-semibold w-1/3">
          Why Trift? <br />
          <span className="text-3xl text-nowrap">
            (a.k.a. Why You&apos;ll Love Us)
          </span>
        </h1>
        <div className=" w-1/3" />
        <p className="text-wrap w-1/3 ">
          We're not just developers—we're digital architects who bring big
          energy, fresh ideas, and zero boring vibes.
        </p>
      </div>
      <div className="pt-10 grid grid-cols-3 gap-5">
        {/* column 1 */}

        <div className="flex flex-col justify-between gap-2 bg-background rounded-2xl p-5">
          <div>
            <div className="flex">
              <Image
                width={5}
                height={5}
                alt="Logo"
                src="/only-logo.svg"
                className="w-full aspect-video object-cover rounded-xl"
              />
            </div>
            <h1 className="text-xl font-semibold pt-2">Web Development</h1>
            <p className="pt-2 text-sm">
              We build responsive, high-performance websites that look great on
              every device.
            </p>
          </div>
          <AvatarCircles  avatarUrls={col1} />
        </div>

        {/* column 2 */}

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 bg-lamaBlue rounded-2xl p-5">
            <h1 className="text-xl font-semibold">Mobile App Development</h1>
            <p className="pt-2 text-sm">
              We create custom mobile apps that are user-friendly and intuitive.
            </p>
            <AvatarCircles avatarUrls={avatars} />
          </div>
          <div className="flex flex-col gap-4 bg-lamaPurple flex-1 rounded-2xl p-5  overflow-clip">
            <h1 className="text-xl font-semibold">Mobile App Development</h1>
            <p className="pt-2 text-sm">
              We build responsive, high-performance websites that look great on
              every device.
            </p>

            <Image
              width={50}
              height={50}
              src="/only-logo.svg"
              alt="Logo"
              className="mt-5  w-full object-cover aspect-video rounded-xl"
            />
          </div>
        </div>

        {/* column 3 */}

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 bg-background rounded-2xl p-5">
            <Image
              width={50}
              height={50}
              src="/only-logo.svg"
              alt="Logo"
              className="w-full object-cover aspect-video rounded-xl"
            />
            <h1 className="text-xl font-semibold">Mobile App Development</h1>
            <p className="pt-2 text-sm">
              We create custom mobile apps that are user-friendly and intuitive.
            </p>
            <AvatarCircles avatarUrls={avatars} />
          </div>

          <div className="flex flex-col flex-1 gap-4 bg-background rounded-2xl p-5">
            <h1 className="text-xl font-semibold">Mobile App Development</h1>
            <p className="pt-2 text-sm">
              We build responsive, high-performance websites that look great on
              every device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceContainer