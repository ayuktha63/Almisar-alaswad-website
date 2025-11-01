
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeHero: React.FC = () => {
  return (
<div
  className="w-full min-h-screen bg-cover bg-center flex justify-center items-center -mt-10 md:-mt-16"
  style={{
    backgroundImage: "url('/bg-image.svg')",
  }}
>

      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] max-w-6xl">
        {/* Left Section */}
        <div className="flex flex-col gap-10">
          {/* Text + Buttons */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[#111D15] text-[28px] md:text-[36px] font-bold leading-snug max-w-[500px] font-['Be Vietnam Pro']">
              Expertise in Electrical, Plumbing, and Complete Fit-Out Services across UAE
            </h1>

            {/* Buttons */}
{/* Buttons */}
<div className="flex gap-4 justify-center">
  <Link
    href="#contact"
    className="rounded-[4.5px] bg-[#CF3D31] flex justify-center items-center gap-[7.5px] px-6 py-3 text-white font-['Be Vietnam Pro'] text-[12px] font-semibold"
  >
    Get Start Now
  </Link>

  <Link
    href="#services"
    className="flex justify-center items-center gap-[7.5px] px-6 py-3 border-[0.75px] border-[#666] rounded-[4.5px] text-[#111D15] font-['Be Vietnam Pro'] text-[12px] font-semibold"
  >
    View all Services
  </Link>
</div>

          </div>

          {/* Lower Image */}
          <div className="w-[408px] h-[130px] aspect-[204/65]">
            <Image
              src="/your-lower-image.svg"
              alt="Service Illustration"
              width={408}
              height={130}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Section */}
{/* Right Section (without border) */}
<div
  className="mt-10 md:mt-0 w-[390px] h-[393px] flex-shrink-0 rounded-[15px] bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/side-hero.svg')",
    backgroundSize: "contain",
    backgroundColor: "lightgray",
  }}
/>

</div>
    </div>);
};

export default HomeHero;
