import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const PreNav = () => {
  return (
    <div className="relative font-jf hidden md:flex bg-lemon-green justify-between items-center px-9 py-1 text-sm text-dark-green">
      <div className="flex items-center space-x-2">
        <MapPin width={20} />
        <p>ام ثابت بنت جابر، الدفاع، المدينة المنورة 42374</p>
      </div>
      <Image
        src={"/absar-mini.svg"}
        alt="absar-mini-logo"
        height={0}
        width={55}
        className="absolute hidden lg:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-auto"
      />
      <div className="flex items-center space-x-2">
        <p>966558455133</p>
        <Phone width={20} />
      </div>
    </div>
  );
};

export default PreNav;
