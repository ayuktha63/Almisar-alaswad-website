import React from 'react';
// You would import your page sections here
// import HeroSection from './components/HeroSection'; 
// import ServicesSection from './components/ServicesSection';

export default function Home() {
  return (
    // This <main> tag is for the *page-specific* layout.
    // It is centered (mx-auto) and has a max-width from your Figma design.
    // px-4 provides padding on mobile.
    <main className="w-full max-w-[1080px] mx-auto px-4">
      
      {/* <HeroSection /> */}
      {/* <ServicesSection /> */}

      {/* Example content */}
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Page Content Starts Here</h1>
        <p className="text-lg text-gray-700">
          This content is inside your 1080px container.
          The header above is 137px tall and the logo is 124x129px.
        </p>
      </div>

    </main>
  );
}