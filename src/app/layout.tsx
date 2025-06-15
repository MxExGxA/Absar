import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PreNav from "./components/PreNav";
import { Toaster } from "react-hot-toast";
const ghaith = localFont({
  src: "./fonts/GHAITHSANS.otf",
  variable: "--font-ghaith",
});

const jfFlat = localFont({
  src: "./fonts/JF-Flat.ttf",
  variable: "--font-jf",
});

export const metadata: Metadata = {
  title: "ABSAR - أبصــر",
  icons: ["/favicon.svg"],
  description: "أحدث أنظمة المراقبة والأمان في السعودية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`bg-dark-green ${ghaith.variable} ${jfFlat.variable}`}
      >
        <PreNav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
