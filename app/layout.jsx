import { prompt } from "./util/fonts";
import "./globals.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";

export const metadata = {
  title: "Maxx Hair",
  description: "hair extensions"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={`${prompt.className}`}>
        <div className="fixed top-0 w-full z-20">
          <Header />
        </div>
        <Cart />
        {children}
        <Footer />
      </body>
    </html>
  );
}
