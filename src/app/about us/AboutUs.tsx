import AboutCard from "./components/AboutCard";
import aboutUsData from "../constants/AboutUsData";

const AboutUs = () => {
  return (
    <div className="py-32 flex gap-20 items-start justify-evenly flex-wrap">
      <div className="flex items-center space-x-6 ml-auto">
        <div className="w-[10px] h-28 bg-gradient-to-b from-lemon-green to-[#b8d9009d]"></div>
        <div className="font-ghaith flex flex-col items-start space-y-4">
          <h2 className="text-white text-3xl sm:text-4xl">
            من نحــن ؟
          </h2>
          <h2 className="text-lemon-green text-xl sm:text-2xl">
            تعــــرف على هويتــــنا ورؤيتـــــنا.
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-16 2xl:ml-auto">
        <div className="flex justify-center xl:justify-start gap-16 xl:gap-32 flex-wrap">
          <AboutCard
            icon={aboutUsData[0].icon}
            title={aboutUsData[0].title}
            desc={aboutUsData[0].desc}
          />
          <AboutCard
            icon={aboutUsData[1].icon}
            title={aboutUsData[1].title}
            desc={aboutUsData[1].desc}
          />
        </div>
        <div className="flex  justify-center xl:justify-start gap-16 xl:gap-32 flex-wrap">
          <AboutCard
            icon={aboutUsData[2].icon}
            title={aboutUsData[2].title}
            desc={aboutUsData[2].desc}
          />
          <AboutCard
            icon={aboutUsData[3].icon}
            title={aboutUsData[3].title}
            desc={aboutUsData[3].desc}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
