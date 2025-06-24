import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PreNav from "./components/PreNav";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import schema from "./schema";
import Chat from "./chat/Chat";
import Head from "next/head";

const ghaith = localFont({
  src: "./fonts/GHAITHSANS.otf",
  variable: "--font-ghaith",
});

const jfFlat = localFont({
  src: "./fonts/JF-Flat.ttf",
  variable: "--font-jf",
});

export const metadata: Metadata = {
  title: {
    template: "أبصر | %s",
    default: "أبصـر | لأنظمة الأمان و المراقبة",
  },
  description:
    "أحدث أنظمة الأمان و المراقبة، تركيب وصيانة كاميرات المراقبة، أنظمة دخول ذكية وإنذار حريق في المدينة المنورة. ضمان، دقة، دعم علي مدار 24 ساعة طوال الأسبوع",
  openGraph: {
    title: "أبصـر | لأنظمة الأمان و المراقبة",
    description:
      "أحدث أنظمة الأمان و المراقبة، تركيب وصيانة كاميرات المراقبة، أنظمة دخول ذكية وإنذار حريق في المدينة المنورة. ضمان، دقة، دعم علي مدار 24 ساعة طوال الأسبوع",
    url: "https://absar.sa/",
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
      <Head>
        <meta name="apple-mobile-web-app-title" content="absar" />
      </Head>
      <body
        className={`bg-dark-green ${ghaith.variable} ${jfFlat.variable}`}
      >
        <PreNav />
        <Chat />
        {children}
        <Toaster />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="7aooS6ycg4s3Uj0CG6Qa3A"
          async
        ></Script>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </body>
    </html>
  );
}
