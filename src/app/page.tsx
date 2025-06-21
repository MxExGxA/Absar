import Nav from "./header/components/Nav";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import LargeCards from "./large cards/LargeCards";
import AboutUs from "./about us/AboutUs";
import OurServices from "./our services/OurServices";
import ContactUs from "./contact us/ContactUs";
import Footer from "./footer/Footer";
import DynamicNav from "./header/components/DynamicNav";
import dynamic from "next/dynamic";
import Image from "next/image";
const TextureOverlay = dynamic(
  () => import("./components/TextureOverlay")
);

export default function Home() {
  return (
    <main>
      <DynamicNav />
      <div id="home">
        <Image
          src={"/hero-bg.webp"}
          alt="hero section background"
          fill
          objectFit="cover"
          className="absolute pointer-events-none"
          loading="lazy"
        />
        <TextureOverlay>
          <Header />
          <Nav />
          {/* hero section */}
          <section className="md:px-10">
            <Hero />
          </section>
        </TextureOverlay>
      </div>

      {/* large cards section */}
      <TextureOverlay>
        <section className="md:px-10">
          <LargeCards />
        </section>
      </TextureOverlay>

      {/* about us section */}
      <TextureOverlay>
        <section className="px-10" id="about">
          <AboutUs />
        </section>
      </TextureOverlay>

      {/* our services section */}
      <TextureOverlay>
        <section className="md:px-10" id="services">
          <OurServices />
        </section>
      </TextureOverlay>

      {/* contact us section */}
      <TextureOverlay>
        <section className="md:px-10" id="contact">
          <ContactUs />
        </section>
      </TextureOverlay>

      {/* footer section */}
      <TextureOverlay>
        <section className="xl:px-10" id="footer">
          <Footer />
        </section>
      </TextureOverlay>
    </main>
  );
}
