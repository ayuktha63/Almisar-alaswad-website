import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  // --- Reusable Styles ---
  const headingStyle = "text-white text-[15px] font-bold";
  const linkStyle = "text-white text-xs font-medium hover:text-gray-300 transition-colors";
  const beVietnamFont = { fontFamily: '"Be Vietnam", sans-serif' };

  return (
    <footer className="w-full bg-[#111D15]">
      {/* Main container: 333px height on desktop, auto on mobile */}
      <div className="
        max-w-[1080px] mx-auto px-4 
        h-auto md:h-[333px] 
        flex flex-col
      ">
        
        {/* --- Top Section: Logo + Links --- */}
        <div className="
          flex flex-col md:flex-row justify-between w-full 
          flex-grow pt-10 gap-10
        ">
          
          {/* 1. Left Div (Logo) */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/almisar-alaswad-logo.svg" 
                alt="MyLogo" 
                width={190} 
                height={197}
                className="w-[190px] h-[197px]"
              />
            </Link>
          </div>

          {/* 2. Right Div (All 3 Columns) */}
          <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-16">

            {/* Column 1: Company */}
            <div 
              className="flex flex-col items-start gap-[27px]" 
              style={beVietnamFont}
            >
              <h3 className={headingStyle}>Company</h3>
              <div className="flex flex-col items-start gap-[18px]">
                <Link href="/about" className={linkStyle}>About Us</Link>
                <Link href="/service" className={linkStyle}>Services</Link>
                <Link href="/team" className={linkStyle}>Our Team</Link>
              </div>
            </div>

            {/* Column 2: Know More */}
            <div 
              className="flex flex-col items-start gap-[27px]" 
              style={beVietnamFont}
            >
              <h3 className={headingStyle}>Know More</h3>
              <div className="flex flex-col items-start gap-[18px]">
                <Link href="/support" className={linkStyle}>Support</Link>
                <Link href="/privacy" className={linkStyle}>Privacy Policy</Link>
                <Link href="/terms" className={linkStyle}>Terms & conditions</Link>
              </div>
            </div>

            {/* Column 3: Newsletter */}
            <div 
              className="flex flex-col items-start gap-[19.5px]"
              style={beVietnamFont}
            >
              <h3 className={headingStyle}>Newsletter</h3>
              <form className="flex flex-col items-start gap-4">
                
                {/* Input Box */}
                <input 
                  type="email" 
                  placeholder="Email Goes here"
                  className="
                    bg-[#111D15] w-[218.25px] px-[12px] py-[7.5px] 
                    rounded-[4.5px]
                    border border-[0.75px] border-[#808080]
                    text-xs font-normal text-white
                    placeholder:text-[#9E9E9E]
                    focus:outline-none focus:border-white
                  "
                  style={beVietnamFont}
                />
                
                {/* Send Button */}
                <button 
                  type="submit"
                  className="
                    bg-[#CF3D31] text-white text-xs font-bold
                    rounded-[4.5px] px-[21px] py-[12px]
                    hover:bg-opacity-90 transition-all
                  "
                  style={beVietnamFont}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Border & Copyright --- */}
        <div className="w-full pb-6">
          <div className="w-full max-w-[877.5px] h-[0.75px] bg-[#D9D9D9] mx-auto" />
          
          {/* --- UPDATED COPYRIGHT --- */}
          <p 
            className="text-white text-xs font-medium text-center pt-6"
            style={beVietnamFont}
          >
            2025 Almismar Alaswad Technical Services All Rights Received | Created with ❤️ by Orque
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;