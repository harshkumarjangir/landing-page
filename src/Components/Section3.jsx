import Image from "next/image";
import React from "react";

const Section3 = ({data}) => {
  const { heading, description } = data;

  return (
    <div className="relative md:h-[90vh] w-full px-2 flex max-md:flex-col flex-row items-center max-md:justify-center justify-between text-white bg-gradient-to-r from-[#0a1a3a] to-[#1b4ac2]">
      {/* LEFT SIDE - TEXT + STATS */}
      <div className="lg:max-w-4xl px-4 max-md:py-12 md:px-8">
        <h2 className="text-3xl md:text-5xl mb-6 ">{heading}</h2>
        <p className="text md:text-lg mb-8 max-w-4xl">{description}</p>
        <p className="text md:text-lg mb-8 max-w-4xl">{description}</p>

        {/* BUTTONS */}
        
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="flex-1 flex justify-center items-center max-md:mt-8">
        <Image
          src="/assets/home/section3/girl.webp" // yahan apni image ka path daalein (public folder me image ho)
          alt="Section Visual"
          width={500} // apne hisaab se size adjust karein
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Section3;
