import { prompt } from "./util/fonts";
import "./globals.css";
import Providers from "./util/Providers";
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
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
