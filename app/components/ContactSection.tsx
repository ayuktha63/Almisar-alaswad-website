'use client';

import React from 'react';
import { useIntl } from 'react-intl';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="bg-white py-16 px-6 md:px-0">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Column - Find Us */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111D15]">
            {intl.formatMessage({ id: 'contact.findUs' })}
          </h2>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4">
            {/* Call Us */}
            <div className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3">
              <div className="bg-[#005BAA] w-10 h-10 flex items-center justify-center rounded-full text-white">
                <Phone size={18} />
              </div>
              <div className="text-sm text-[#111D15]">
                <p className="font-medium">{intl.formatMessage({ id: 'contact.callUs' })}</p>
                <p className="text-gray-500 text-xs">{intl.formatMessage({ id: 'contact.callNumber' })}</p>
              </div>
            </div>

            {/* Email Now */}
            <div className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3">
              <div className="bg-[#005BAA] w-10 h-10 flex items-center justify-center rounded-full text-white">
                <Mail size={18} />
              </div>
              <div className="text-sm text-[#111D15]">
                <p className="font-medium">{intl.formatMessage({ id: 'contact.emailNow' })}</p>
                <p className="text-gray-500 text-xs">{intl.formatMessage({ id: 'contact.emailAddress' })}</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3">
              <div className="bg-[#005BAA] w-10 h-10 flex items-center justify-center rounded-full text-white">
                <MapPin size={18} />
              </div>
              <div className="text-sm text-[#111D15]">
                <p className="font-medium">{intl.formatMessage({ id: 'contact.addressTitle' })}</p>
                <p className="text-gray-500 text-xs">{intl.formatMessage({ id: 'contact.address' })}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111D15]">
            {intl.formatMessage({ id: 'contact.keepInTouch' })}
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            {intl.formatMessage({ id: 'contact.description' })}
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder={intl.formatMessage({ id: 'contact.form.name' })}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none placeholder-[#666] text-[#666]"
            />
            <input
              type="email"
              placeholder={intl.formatMessage({ id: 'contact.form.email' })}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none placeholder-[#666] text-[#666]"
            />
            <textarea
              placeholder={intl.formatMessage({ id: 'contact.form.message' })}
              className="border border-gray-300 rounded-lg px-4 py-2 h-24 resize-none focus:outline-none placeholder-[#666] text-[#666]"
            />
            <button
              type="submit"
              className="bg-[#CF3D31] text-white font-medium py-2 rounded-md hover:opacity-90 transition-all"
            >
              {intl.formatMessage({ id: 'contact.form.submit' })}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
