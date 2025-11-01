'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  isPrimary?: boolean; // to differentiate button styles
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, isPrimary }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Image */}
      <div className="w-[277.5px] h-[196.5px] rounded-[22.5px] overflow-hidden">
        <Image src={image} alt={title} width={277.5} height={196.5} className="object-cover" />
      </div>

      {/* Title */}
      <h3 className="text-[#111D15] font-['Be Vietnam Pro'] text-[18px] font-semibold leading-[120%] text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#666] font-['Be Vietnam Pro'] text-[12px] font-normal leading-[150%] text-center w-[277.5px]">
        {description}
      </p>

      {/* Button */}
      <button
        className={`flex justify-center items-center gap-[7.5px] px-[15px] py-[9px] rounded-[4.5px] font-['Be Vietnam Pro'] text-[12px] font-normal ${
          isPrimary
            ? 'bg-[#CF3D31] text-white border-none'
            : 'bg-transparent text-[#111D15] border-[0.75px] border-[#666]'
        }`}
      >
        Book Now
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path
            d="M10.4044 9.05407C10.4094 9.4363 10.7233 9.75018 11.1055 9.75514C11.4877 9.76011 11.7936 9.45427 11.7886 9.07204L11.7208 3.85198C11.7159 3.46975 11.402 3.15587 11.0197 3.1509L5.79968 3.08311C5.41744 3.07815 5.11161 3.38398 5.11657 3.76621C5.12154 4.14844 5.43542 4.46232 5.81765 4.46729L9.36686 4.51338L3.1266 10.7536C2.85983 11.0204 2.86552 11.4586 3.13931 11.7324C3.4131 12.0062 3.85131 12.0119 4.11807 11.7451L10.3583 5.50486L10.4044 9.05407Z"
            fill={isPrimary ? 'white' : '#9D9D9D'}
          />
        </svg>
      </button>
    </div>
  );
};

const Services: React.FC = () => {
  const servicesData = [
    {
      image: '/plumbing-and-sanitation-work.svg',
      title: 'Plumbing & Sanitary Installation',
      description:
        'Professional installation and repair of water supply, drainage networks, and sanitary fixtures, guaranteed leak-free and compliant.',
    },
    {
      image: '/professional-painting-services.svg',
      title: 'Professional Painting Services',
      description:
        'Superior interior and exterior painting using premium materials for vibrant residential and commercial finishes.',
      isPrimary: true, // second card has primary button style
    },
    {
      image: '/Floor-&-Wall-Tiling-Works.svg',
      title: 'Floor & Wall Tiling Works',
      description:
        'Efficient heating, ventilation, and air conditioning solutions for a comfortable indoor environment.Flawless installation of floor and wall tiles (ceramic, marble, etc.) with meticulous preparation for durability and aesthetics.',
        
    },
    {
      image: '/Plaster-Works.svg',
      title: 'Plaster Works',
      description: 'Professional plaster application and repair for smooth, durable wall and ceiling surfaces, ready for paint or finishes.',
    },
    {
      image: '/Electrical-Repair-&-Maintenance.svg',
      title: 'Electrical Repair & Maintenance',
      description:
        'Safe and efficient repair, maintenance, and installation of all electrical fittings, fixtures, and switches by certified technicians.',
    isPrimary: true, // second card has primary button style
    },
    {
      image: '/Electromechanical-Maintenance.svg',
      title: 'Electromechanical Maintenance',
      description: 'Installation and preventive maintenance of critical equipment, ensuring reliability, safety, and peak operational performance.',
    },
    {
      image: '/Ceilings-&-Partitions.svg',
      title: 'Ceilings & Partitions',
      description: 'Professional plaster application and repair for smooth, durable wall and ceiling surfaces, ready for paint or finishes.',
    },
    {
      image: '/Professional-Wallpaper-Fixing.svg',
      title: 'Professional Wallpaper Fixing',
      description: 'Expert application and removal of all wallpaper types for a flawless finish, enhancing your interior aesthetics.',
    isPrimary: true, // second card has primary button style
    },
    {
      image: '/Carpentry-&-Wood-Flooring.svg',
      title: 'Carpentry & Wood Flooring',
      description: 'Expert craftsmanship for custom carpentry, wood flooring installation, repair, and finishing with structural integrity guaranteed.',
    },
  ];

  return (
    <section className="flex flex-col gap-6 items-center py-16 bg-white">
      {/* Top Row */}
      <div className="flex justify-between items-center w-full max-w-[877.5px] px-4 md:px-0">
        <h2 className="text-[#111D15] font-['Be Vietnam Pro'] text-[33px] font-semibold leading-[120%] capitalize w-[402px]">
          We always provide the best service
        </h2>
        <span className="text-[#111D15] font-['Be Vietnam Pro'] text-[24px] font-semibold">
          Services
        </span>
      </div>

      {/* Horizontal Line */}
      <div className="w-[877.5px] h-[0.75px] bg-[#83A790]" />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            isPrimary={service.isPrimary}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
