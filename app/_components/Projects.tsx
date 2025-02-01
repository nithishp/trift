
//TODO: Component not finished 
import React from 'react'

const Projects = () => {
    const projects = [
        {
            title:"Dream company",

        }
    ]
  return (
    <div className="pb-20 flex flex-col items-center  text-center ">
      <h1 className="border-[1px] border-gray-400 px-4 py-1 rounded-full">
        Projects
      </h1>
      <h1 className="text-5xl font-semibold mt-5">
        Proof That We Don't Just Talk, We Build!
      </h1>
      <p className='max-w-[600px] mt-5 text-lg'>
        We let our projects do the talking. From sleek websites to
        high-performing apps, we've helped brands, startups, and creators turn
        their ideas into digital gold.
      </p>
    </div>
  );
}

export default Projects