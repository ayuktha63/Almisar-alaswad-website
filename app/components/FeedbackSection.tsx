'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

const FeedbackSection: React.FC = () => {
  const intl = useIntl();
  const testimonials = [
    {
      name: 'Robert Fox',
      business: 'Business',
      comment: 'Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service.',
      image: '/profile.svg',
    },
    {
      name: 'Jane Cooper',
      business: 'Business',
      comment: 'Amazing experience! Very professional and detailed.',
      image: '/profile.svg',
    },
    {
      name: 'John Doe',
      business: 'Business',
      comment: 'Top-notch cleaning service with friendly staff.',
      image: '/profile.svg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const current = testimonials[currentIndex];

  return (
    <div className="flex justify-center items-center bg-[#F9F9F9] px-6 py-16">
      <section className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] gap-10 md:gap-16">
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full md:w-[375px]">
          <h2 className="text-[#111D15] font-['Be Vietnam Pro'] font-semibold text-[33px] leading-[120%]">
            Feedback About Their Experience With Us
          </h2>
          <p className="text-[#666] font-['Be Vietnam Pro'] font-normal text-[12px] leading-[160%]">
            Read testimonials from our satisfied clients. See how our cleaning services have made a difference in their lives and homes.
          </p>

          {/* Carousel Arrows */}
          <div className="flex gap-3 mt-4">
            {/* Backward */}
            <div className="flex justify-center items-center p-3 bg-white rounded cursor-pointer" onClick={handlePrev}>
              {/* SVG icon remains unchanged */}
            </div>

            {/* Forward */}
            <div className="flex justify-center items-center p-3 bg-[#CF3D31] rounded-[7.099px] cursor-pointer" onClick={handleNext}>
              {/* SVG icon remains unchanged */}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-end w-full md:w-[450px]">
          <div className="relative flex flex-col md:flex-row p-4 justify-center items-start gap-4 rounded-[15px] border-t-[7.5px] border-r-[7.5px] border-[#005BAA] bg-white shadow-md">
            {/* Person Image */}
            <div className="flex-shrink-0 rounded-[7.5px] border border-[#E6E6E6] overflow-hidden">
              <Image src={current.image} alt={current.name} width={128} height={183} className="object-cover w-full" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2">
              <p className="font-['Be Vietnam Pro'] font-medium text-[15px] text-[#111D15]">{current.name}</p>
              <p className="font-['Be Vietnam Pro'] font-normal text-[12px] text-[#666]">{current.business}</p>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M10.8217 7.49977L9.7192 3.86982C9.50171 3.15733 8.49672 3.15733 8.28672 3.86982L7.17674 7.49977H3.83929C3.1118 7.49977 2.8118 8.43725 3.40429 8.85725L6.13425 10.8072L5.06177 14.2647C4.84427 14.9622 5.65426 15.5247 6.23175 15.0822L8.99921 12.9822L11.7667 15.0897C12.3442 15.5322 13.1542 14.9697 12.9367 14.2722L11.8642 10.8147L14.5941 8.86475C15.1866 8.43725 14.8866 7.50727 14.1591 7.50727H10.8217V7.49977Z" fill="#FF9800"/>
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="text-[#666] font-['Be Vietnam Pro'] font-normal text-[12px] leading-[150%]">
                {current.comment}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedbackSection;
