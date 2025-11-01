'use client';

import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-36 py-20 bg-white w-full px-4 md:px-0">
      {/* Left Card */}
      <div className="flex flex-col items-center gap-4 w-full md:w-[277.5px] flex-shrink-0">
        <div className="w-[277.5px] h-[196.5px] rounded-[22.5px] overflow-hidden">
          <Image
            src="/air-quality.svg"
            alt="Air Quality Solutions"
            width={277.5}
            height={196.5}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-[#111D15] font-['Be Vietnam Pro'] text-[18px] font-semibold leading-[120%] text-center">
          Air Quality Solutions
        </h3>
        <p className="text-[#666] font-['Be Vietnam Pro'] text-[12px] font-normal leading-[150%] text-center w-[277.5px]">
          Expert AC installation, proactive maintenance, and advanced air filtration systems for healthy, efficient climate control.
        </p>
        <button className="bg-[#CF3D31] text-white rounded-[4.5px] px-[15px] py-[9px] text-[12px] font-['Be Vietnam Pro'] hover:bg-white hover:text-black hover:border-[0.75px] hover:border-[#666] transition-colors duration-300">
          Book Now
        </button>
      </div>

      {/* Middle Line */}
      {/* On mobile: horizontal line, on desktop: vertical line */}
      <div
        className="my-6 w-full h-[1px] bg-[#83A790] md:h-[214.058px] md:w-[0.583px] md:my-0"
      />

      {/* Right Content */}
      <div className="flex flex-col items-center md:items-start gap-4 w-full md:max-w-[348px] mt-0 md:mt-0">
        {/* Bullet + Heading */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
          <Image
            src="/small-logo.svg"
            alt="Expert Team"
            width={34}
            height={29}
            className="opacity-70"
          />
          <h2 className="text-[#111D15] font-['Be Vietnam Pro'] text-[24px] font-semibold leading-normal text-center md:text-left">
            Expert Team
          </h2>
        </div>

        {/* Description */}
        <p className="text-[20px] font-['Be Vietnam Pro'] font-normal leading-[150%] text-[rgba(0,0,0,0.9)] w-full md:w-[348px] md:pl-0 text-center md:text-left">
          Our certified and professional staff ensures top-tier quality across all 10 specialized services. Your single point of contact for every solution.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
