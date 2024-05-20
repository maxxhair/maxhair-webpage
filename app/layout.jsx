import { prompt } from "./util/fonts";
import "./globals.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata = {
  title: "Maxx Hair",
  description: "hair extensions"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${prompt.className}`}>
        <div className="fixed top-0 w-full z-20">
          <Header />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
