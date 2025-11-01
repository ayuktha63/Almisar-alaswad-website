import Header from "./components/Header";
import Footer from "./components/Footer";
import IntlProviderWrapper from "./components/IntlProviderWrapper";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeHero from "./components/HomeHero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ServicesSection from "./components/ServicesSection";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <IntlProviderWrapper>
          <Header />
          {/* Offset for fixed header */}
          <div className="pt-30">
            <HomeHero />
            <Services />
            <AboutUs />
            <ServicesSection />
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />
        </IntlProviderWrapper>
      </body>
    </html>
  );
}
