import Image from "next/image";
import Header from "../header/Header";
import BlogNav from "./components/BlogNav";
import BlogDynamicNav from "./components/BlogDynamicNav";
import Footer from "../footer/Footer";
import BlogFooter from "./components/BlogFooter";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Image
        src={"/hero-bg.webp"}
        alt="background image"
        fill
        className="absolute object-cover -z-10"
        loading="lazy"
      />
      <Header />
      <BlogNav />
      <BlogDynamicNav />
      {children}
      <BlogFooter />
    </div>
  );
}
