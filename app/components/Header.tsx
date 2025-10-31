"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // Icons for mobile menu

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/service", label: "Service" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Header container with 137px height
    <header className="w-full bg-white text-black border-b border-gray-200 h-[137px] relative">
      {/* This <nav> is the key:
        - `flex`: Enables Flexbox
        - `justify-between`: Pushes children to opposite ends (Logo left, Nav right)
        - `items-center`: Vertically centers the logo and nav group
        - This is how we create the '505px' gap without using padding.
      */}
      <nav className="container mx-auto flex justify-between items-center h-full">
        
        {/* 1. Logo: Added pl-[63px] */}
        <Link href="/" className="flex-shrink-0 pl-[63px]">
          <Image 
            src="/almisar-alaswad-logo.svg" 
            alt="MyLogo" 
            width={124} 
            height={129}
            priority
            className="w-[124px] h-[129px]"
          />
        </Link>
        
        {/* 2. Desktop Navigation & CTA Group */}
        {/* - This parent div holds both the links and the button.
          - `gap-[52.75px]`: Sets the space BETWEEN the links group and the button.
          - `pr-[35.25px]`: Adds the padding to the right side.
        */}
        <div className="hidden lg:flex items-center gap-[52.75px] pr-[35.25px]">
          
          {/* 2a. Links Group */}
          {/* - This div groups just the navigation links.
            - `gap-[21.75px]`: Sets the space BETWEEN each link.
          */}
          <div className="flex items-center gap-[21.75px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`
                    text-xs hover:text-[#CF3D31] transition-colors
                    ${isActive ? 'text-[#CF3D31] font-medium' : 'text-[#4D4D4D] font-normal'}
                  `}
                  style={{ fontFamily: '"Be Vietnam Pro", sans-serif' }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          
          {/* 2b. "Get a Quote" CTA Button */}
          <Link
            href="/get-a-quote"
            className="text-white text-xs font-medium bg-[#CF3D31] rounded-[4.5px] px-4 py-2 hover:bg-opacity-90 transition-all flex-shrink-0"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Get a Quote
          </Link>
        </div>

        {/* 3. Mobile Menu Button (added right padding for consistency) */}
        <div className="lg:hidden pr-[35.25px]">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl text-gray-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* 4. Mobile Menu Dropdown (remains the same) */}
      {isMobileMenuOpen && (
        <div 
          className="
            absolute top-full left-0 w-full bg-white shadow-xl 
            lg:hidden flex flex-col items-center space-y-4 p-6 z-50
          "
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  text-lg hover:text-[#CF3D31] transition-colors
                  ${isActive ? 'text-[#CF3D31] font-medium' : 'text-[#4D4D4D] font-normal'}
                `}
                style={{ fontFamily: '"Be Vietnam Pro", sans-serif' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          
          <Link
            href="/get-a-quote"
            className="w-full text-center text-white text-lg font-medium bg-[#CF3D31] rounded-[4.5px] px-4 py-3 hover:bg-opacity-90 transition-all"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;