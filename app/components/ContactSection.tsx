'use client';

import React from 'react';
import { useIntl } from 'react-intl';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const intl = useIntl();
  const isArabic = intl.locale === 'ar';

  return (
    <section
      className={`bg-[#111D15] text-white py-16 px-6 md:px-0 ${
        isArabic ? 'text-right' : 'text-left'
      }`}
    >
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {intl.formatMessage({ id: 'contact.heading' })}
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            {intl.formatMessage({ id: 'contact.description' })}
          </p>

          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone size={18} /> <span>+971 50 123 4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} /> <span>info@almisr.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} /> <span>Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form className="flex-1 flex flex-col gap-4 bg-white rounded-xl p-6 text-[#111D15]">
          <input
            type="text"
            placeholder={intl.formatMessage({ id: 'contact.namePlaceholder' })}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder={intl.formatMessage({ id: 'contact.emailPlaceholder' })}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <textarea
            placeholder={intl.formatMessage({ id: 'contact.messagePlaceholder' })}
            className="border border-gray-300 rounded-lg px-4 py-2 h-24 resize-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#CF3D31] text-white font-medium py-2 rounded-md hover:opacity-90 transition-all"
          >
            {intl.formatMessage({ id: 'contact.submit' })}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
