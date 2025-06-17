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
  title: "أبصــر | أحدث أنظمة المراقبة والأمان في السعودية",
  icons: ["/favicon.svg"],
  description:
    "24/7 أحدث أنظمة الأمان و المراقبة، تركيب وصيانة كاميرات المراقبة، أنظمة دخول ذكية وإنذار حريق في المدينة المنورة. ضمان، دقة، دعم",
  openGraph: {
    title: "أبصــر | أنظمة مراقبة وكاميرات أمان في المدينة المنورة",
    description:
      "تركيب كاميرات، إنذارات الحريق، تحكم في الدخول، منزل ذكي، مع دعم فني 24/7. أبصر لحلول الأمان الذكية.",
    url: "https://absar.sa",
    siteName: "أبصر",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://absar.sa/og-image.png",
        width: 1200,
        height: 630,
        alt: "أبصر - أنظمة المراقبة والأمان",
      },
    ],
  },
  metadataBase: new URL("https://absar.sa"),
  alternates: {
    canonical: "https://absar.sa",
  },
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
