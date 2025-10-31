'use client';

import React from 'react';
import { useIntl } from 'react-intl';

export default function Home() {
  const intl = useIntl();

  return (
    <main className="w-full max-w-[1080px] mx-auto px-4">
      
      {/* Example content */}
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {intl.formatMessage({ id: 'home.title' })}
        </h1>
        <p className="text-lg text-gray-700">
          {intl.formatMessage({ id: 'home.description' })}
        </p>
      </div>

    </main>
  );
}
