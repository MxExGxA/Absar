import LargeCard from "./large cards/components/LargeCard";
import Section from "./components/Section";
import Nav from "./header/components/Nav";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import LargeCards from "./large cards/LargeCards";
import TextureOverlay from "./components/TextureOverlay";

export default function Home() {
  return (
    <main>
      <TextureOverlay>
        <div className="bg-[url('/hero-bg.png')] bg-cover bg-center">
          <Header />
          <Nav />
          <Section>
            <Hero />
          </Section>
        </div>
        <Section>
          <LargeCards />
        </Section>
      </TextureOverlay>
    </main>
  );
}
