'use client';

import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

const AboutUs: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-36 py-20 bg-white w-full px-4 md:px-0">
      {/* Left Card */}
      <div className="flex flex-col items-center gap-4 w-full md:w-[277.5px] flex-shrink-0">
        <div className="w-[277.5px] h-[196.5px] rounded-[22.5px] overflow-hidden">
          <Image
            src="/air-quality.svg"
            alt={intl.formatMessage({ id: 'service.airQuality.title' })}
            width={277.5}
            height={196.5}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-[#111D15] font-['Be Vietnam Pro'] text-[18px] font-semibold leading-[120%] text-center">
          {intl.formatMessage({ id: 'service.airQuality.title' })}
        </h3>
        <p className="text-[#666] font-['Be Vietnam Pro'] text-[12px] font-normal leading-[150%] text-center w-[277.5px]">
          {intl.formatMessage({ id: 'service.airQuality.description' })}
        </p>
        <button className="bg-[#CF3D31] text-white rounded-[4.5px] px-[15px] py-[9px] text-[12px] font-['Be Vietnam Pro'] hover:bg-white hover:text-black hover:border-[0.75px] hover:border-[#666] transition-colors duration-300">
          {intl.formatMessage({ id: 'button.bookNow' })}
        </button>
      </div>

      {/* Middle Line */}
      <div
        className="my-6 w-full h-[1px] bg-[#83A790] md:h-[214.058px] md:w-[0.583px] md:my-0"
      />

      {/* Right Content */}
      <div className="flex flex-col items-center md:items-start gap-4 w-full md:max-w-[348px] mt-0 md:mt-0">
        {/* Bullet + Heading */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
          <Image
            src="/small-logo.svg"
            alt={intl.formatMessage({ id: 'service.expertTeam.title' })}
            width={34}
            height={29}
            className="opacity-70"
          />
          <h2 className="text-[#111D15] font-['Be Vietnam Pro'] text-[24px] font-semibold leading-normal text-center md:text-left">
            {intl.formatMessage({ id: 'service.expertTeam.title' })}
          </h2>
        </div>

        {/* Description */}
        <p className="text-[20px] font-['Be Vietnam Pro'] font-normal leading-[150%] text-[rgba(0,0,0,0.9)] w-full md:w-[348px] md:pl-0 text-center md:text-left">
          {intl.formatMessage({ id: 'service.expertTeam.description' })}
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
