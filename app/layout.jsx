/* eslint-disable @next/next/no-sync-scripts */
import { prompt } from "./util/fonts";
import "./globals.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Providers from "./util/Providers";

export const metadata = {
  title: "Maxx Hair",
  description: "hair extensions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          type="text/javascript"
          src="https://secure.helcim.app/helcim-pay/services/start.js"
        ></script>
      </head>
      <body className={`${prompt.className}`}>
        <Providers>
          <div className="fixed top-0 w-full z-20">
            <Header />
          </div>
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
