import { prompt } from "./util/fonts";
import "./globals.css";

export const metadata = {
  title: "Maxx Hair",
  description: "hair extensions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${prompt.className}`}>{children}</body>
    </html>
  );
}
