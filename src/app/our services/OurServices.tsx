import Image from "next/image";

const OurServices = () => {
  return (
    <div className="py-16">
      <div className="flex items-center space-x-6 ml-auto mb-10">
        <div className="w-[10px] h-28 bg-gradient-to-b from-lemon-green to-[#b8d9009d]"></div>
        <div className="font-ghaith flex flex-col items-start space-y-4">
          <h1 className="text-white text-3xl sm:text-4xl">
            خدماتنـــا
          </h1>
          <h3 className="text-lemon-green text-xl sm:text-2xl">
            خدمـــات تقنـــية متكامــلة
          </h3>
        </div>
      </div>
      <Image
        src={"/our-services-background.svg"}
        alt="our services background image"
        width={1800}
        height={0}
        className="w-full"
      />
    </div>
  );
};

export default OurServices;
