import Image from "next/image";
import ourServicesData from "../constants/OurServicesData";
import ServiceCard from "./components/ServiceCard";

const OurServices = () => {
  return (
    <div className="py-16">
      <div className="flex items-center space-x-6 ml-auto mb-10">
        <div className="w-[10px] h-28 bg-gradient-to-b from-lemon-green to-[#b8d9009d]"></div>
        <div className="font-ghaith flex flex-col items-start space-y-4">
          <h2 className="text-white text-3xl sm:text-4xl">
            خدماتنـــا
          </h2>
          <h2 className="text-lemon-green text-xl sm:text-2xl">
            خدمـــات تقنـــية متكامــلة
          </h2>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/our-services-background.svg"}
          alt="our services background image"
          width={1800}
          height={0}
          className="w-full hidden xl:block"
        />
        <div className="w-full rounded-xl shadow-none md:shadow-[6px_-6px_0_#326149] xl:shadow-none px-10 py-10 h-full bg-lemon-green xl:bg-transparent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10 lg:gap-y-5  items-center relative xl:absolute top-0">
          {ourServicesData?.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
