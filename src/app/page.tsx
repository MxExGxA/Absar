import Nav from "./header/components/Nav";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import LargeCards from "./large cards/LargeCards";
import TextureOverlay from "./components/TextureOverlay";
import AboutUs from "./about us/AboutUs";
import OurServices from "./our services/OurServices";
import ContactUs from "./contact us/ContactUs";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/hero-bg.png')] bg-cover bg-center">
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
        <section className="px-10">
          <AboutUs />
        </section>
      </TextureOverlay>

      {/* our services section */}
      <TextureOverlay>
        <section className="px-10">
          <OurServices />
        </section>
      </TextureOverlay>

      {/* contact us section */}
      <TextureOverlay>
        <section className="px-10">
          <ContactUs />
        </section>
      </TextureOverlay>
    </main>
  );
}
