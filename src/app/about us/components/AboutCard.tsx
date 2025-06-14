import Image from "next/image";
import React from "react";

const AboutCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col text-justify space-y-4 w-unset sm:w-96 xl:w-[420px]">
      <Image
        src={icon}
        alt={title}
        width={40}
        height={0}
        className="h-[40px]"
      />
      <h2 className="text-lemon-green text-2xl lg:text-3xl font-ghaith">
        {title}
      </h2>
      <p className="font-jf xl:text-lg text-white leading-9">
        {desc}
      </p>
    </div>
  );
};

export default AboutCard;
