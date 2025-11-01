// 'use client'; // Only add this if these components require client-side interactivity
import React from 'react';
import HomeHero from "./components/HomeHero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ServicesSection from "./components/ServicesSection";
import FeedbackSection from "./components/FeedbackSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    // These components will now correctly appear ONLY on the home page
    <>
      <HomeHero />
      <Services />
      <AboutUs />
      <ServicesSection />
      <FeedbackSection />
      <ContactSection />
    </>
  );
}