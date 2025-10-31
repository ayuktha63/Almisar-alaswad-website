import type { Metadata } from "next";
import { Inter } from "next/font/google"; // You can replace this with your fonts
import "./globals.css";

// Import your components
import Header from "./components/Header";
import Footer from "./components/Footer"; // Assuming you have Footer.tsx

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App",
  description: "My Next.js and Tailwind App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        
        <Header />

        {/* flex-grow ensures this main content area fills all
            available space, pushing the footer down. */}
        <main className="flex-grow">
          {children} {/* Your page.tsx renders here */}
        </main>

        <Footer />

      </body>
    </html>
  );
}