import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const PreNav = () => {
  return (
    <div className="relative font-jf hidden md:flex bg-lemon-green justify-between items-center px-9 py-1 text-sm text-dark-green">
      <Link
        href={"https://maps.app.goo.gl/hq8qkJDnUPvUZ43x5"}
        className="flex items-center space-x-2 hover:opacity-80"
      >
        <IoLocationSharp className="text-lg" />
        <p>ام ثابت بنت جابر، الدفاع، المدينة المنورة 42374</p>
      </Link>
      <Image
        src={"/absar-mini.svg"}
        alt="absar-mini-logo"
        height={0}
        width={55}
        className="absolute hidden lg:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-auto"
      />
      <Link
        href={"tel:966558455133"}
        className="flex items-center space-x-2 hover:opacity-80"
      >
        <p>966558455133</p>
        <IoIosCall className="text-lg" />
      </Link>
    </div>
  );
};

export default PreNav;
