'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-0">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Column - Find Us */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111D15]">Find us</h2>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4">
            {/* Call Us */}
            <div className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3">
              <div className="bg-[#005BAA] w-10 h-10 flex items-center justify-center rounded-full text-white">
                <Phone size={18} />
              </div>
              <div className="text-sm text-[#111D15]">
                <p className="font-medium">Call Us</p>
                <p className="text-gray-500 text-xs">+971 55 895 6260 | +971 55 205 7197</p>
              </div>
            </div>

            {/* Email Now */}
            <div className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3">
              <div className="bg-[#005BAA] w-10 h-10 flex items-center justify-center rounded-full text-white">
                <Mail size={18} />
              </div>
              <div className="text-sm text-[#111D15]">
                <p className="font-medium">Email Now</p>
                <p className="text-gray-500 text-xs">abdullahelian6@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3">
              <div className="bg-[#005BAA] w-10 h-10 flex items-center justify-center rounded-full text-white">
                <MapPin size={18} />
              </div>
              <div className="text-sm text-[#111D15]">
                <p className="font-medium">Address</p>
                <p className="text-gray-500 text-xs">
                  Office M6-299, AL KHABEESI BUILDING PLOT 128-246, Al Khabeesi, Dubai.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111D15]">Keep In Touch</h2>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-lg px-4 py-2 h-24 resize-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#CF3D31] text-white font-medium py-2 rounded-md hover:opacity-90 transition-all"
            >
              Sent Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
