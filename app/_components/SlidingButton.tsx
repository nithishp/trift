import { cn } from '@/lib/utils';
import React from 'react'

interface Props {
    text: string
    className?: string
}
const SlidingButton: React.FC<Props> = ({text,className}) => {
  return (
    <button
      className={`${cn(
        "bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
      ,className)}`}
      type="button"
    >
      <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="25px"
          width="25px"
          className='rotate-180'
        >
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#000000"
          ></path>
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#000000"
          ></path>
        </svg>
      </div>
      <p className="translate-x-2">{text}</p>
    </button>
  );
}

export default SlidingButton