import Header from "./components/Header";
import Footer from "./components/Footer";
import IntlProviderWrapper from "./components/IntlProviderWrapper";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <IntlProviderWrapper>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </IntlProviderWrapper>
      </body>
    </html>
  );
}
