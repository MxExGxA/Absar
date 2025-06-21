import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="pt-2 px-2 md:px-9 md:pt-3">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/absar-logo.svg"}
            alt="main absar logo"
            height={0}
            width={110}
            className="w-auto"
          />
        </Link>
        <Link href={"https://www.vision2030.gov.sa/"} target="_blank">
          <Image
            src={"/2030-logo.svg"}
            alt="2030 vision logo"
            height={0}
            width={70}
            className="w-auto"
          />
        </Link>
      </div>
      <div className="h-[1.5px] bg-white my-3 rounded-full"></div>
    </header>
  );
};

export default Header;
