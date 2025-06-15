import Image from "next/image";
import Button from "../components/Button";
import HeroCard from "./components/HeroCard";
import InsightCard from "./components/InsightCard";

const Hero = () => {
  return (
    <div
      // id="home"
      className="relative flex items-center md:items-start justify-between flex-col-reverse 2xl:flex-row lg:items-center pb-20"
    >
      <Image
        src={"/hero-scifi-col.svg"}
        alt="sci fi shapes"
        width={9}
        height={0}
        className="absolute hidden md:block left-0 top-0 w-auto"
      />
      {/* right */}
      <div>
        {/* hero banner */}
        <div className="mt-10 flex flex-col lg:flex-row items-center md:items-start  lg:space-x-10">
          <div className="font-ghaith text-4xl sm:text-6xl lg:text-5xl leading-[65px] text-white w-fit text-nowrap">
            <div className="relative">
              <h1 className="relative">أحــــــدث أ نظـــــــــمة</h1>
              <div className="h-4 bg-lemon-green opacity-70 absolute bottom-3 left-0 w-full -z-10"></div>
            </div>
            <div className="relative">
              <h1 className="relative">
                الأمـــان و المراقبـــــــــ
              </h1>
              <div className="h-4 bg-lemon-green opacity-70 absolute bottom-3 left-0 w-full -z-10"></div>
            </div>
            <div className="relative">
              <h1 className="relative">
                &nbsp; ــــة من أبصـــــــــــــــر
              </h1>
              <div className="h-4 bg-lemon-green opacity-70 absolute bottom-3 left-0 w-full -z-10"></div>
            </div>
          </div>
          <div className="seperator hidden lg:block w-[2px] h-40 bg-white rounded-full"></div>
          <div className="text-white font-jf text-xl leading-9">
            <div className="mb-5">
              <p className="text-sm text-center leading-6 sm:text-right my-5 md:text-lg sm:leading-9">
                نقدم حلولا ذكية في أنظمة المراقبة والأمان بتصاميم
                احترافية، <br />
                تركيب دقيق، وصيانة موثوقة لضمان راحة بالك وحماية
                ممتلكاتك.
              </p>
            </div>
            <div className="space-x-4 flex justify-center sm:justify-start lg:justify-start">
              <Button
                label="تواصل معنا"
                type="primary"
                navigate="#contact"
              ></Button>
              <Button
                navigate="#services"
                label="المزيد"
                type="secondary"
              ></Button>
            </div>
          </div>
        </div>
        {/* hero cards */}
        <div className="flex flex-wrap gap-2 sm:gap-8 mt-10 justify-center md:justify-start lg:justify-start">
          <HeroCard
            number={"01"}
            title={["أنظِـــــــــمة", "المــــــرَاقبة"]}
            image="/hero-card-cctv.png"
          />
          <HeroCard
            number={"02"}
            title={["أنظــــــــــمة", "الحــــــــــرِيق"]}
            image="/hero-card-fire-alert.png"
          />
          <HeroCard
            number={"03"}
            title={["أنظِمة المَنزل ", "الذكِـــــــــــي"]}
            image="/hero-card-smart-home.png"
          />
          <HeroCard
            number={"04"}
            title={["أنظِمة التَحكم", " فِي الدُخــــــول"]}
            image="/hero-card-access-control.png"
          />
        </div>
        {/* hero insights */}
        <div className="flex flex-wrap mr-5 md:mr-0 justify-start mt-10 gap-8">
          <InsightCard
            icon="/client-icon.svg"
            title="+ 3000&ensp;عميــــل"
            desc="وثقوا بنا لحماية منازلهم وأعمالهم."
          />
          <InsightCard
            icon="/engineer-icon.svg"
            title="+ 20 &ensp; فنــي وخبيـــــر"
            desc="جاهزون للدعم والتركيب في أي وقت."
          />
          <InsightCard
            icon="/clock-icon.svg"
            title="+ 07 &ensp; سنــــوات خبــرة"
            desc="في تقديم حلول الأمان والتقنية."
          />
        </div>
      </div>
      {/* left */}
      <div className="relative flex-1 flex justify-center items-center">
        <div className="flex justify-start items-center">
          <Image
            src={"/camera-background.svg"}
            alt="camera pattern background"
            fill
            className="absolute"
            priority
          />
          <Image
            src={"/hero-camera.png"}
            alt="camera pattern background"
            width={550}
            height={0}
            className="z-10 w-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
