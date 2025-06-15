import Image from "next/image";
import FooterList from "./components/FooterList";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative pb-30 pt-20 xl:pt-0 xl:pb-0 bg-lemon-green xl:bg-transparent overflow-hidden">
      <Image
        src={"/footer-background.svg"}
        alt="footer background image"
        width={1}
        height={0}
        className="w-full hidden xl:block"
      />
      <Image
        src={"/footer-doodles.svg"}
        alt="footer background image"
        fill
        className="absolute object-cover -top-10 block xl:hidden"
      />
      <div className="relative xl:absolute w-full h-full top-0 p-0 xl:p-10 flex items-center">
        <div className="hidden lg:flex flex-1/3 h-full items-center justify-center ml-10 xg:ml-20 2xl:ml-30">
          <Image
            src={"/absar-footer-logo.svg"}
            alt="absar logo image"
            width={1}
            height={0}
            color="red"
            className="w-[80%]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3  flex-2/3 h-full pt-2 xl:pt-5 2xl:pt-10 justify-items-center">
          <div className="flex justify-center items-start lg:hidden mb-20 md:mb-0">
            <Image
              src={"/absar-footer-logo.svg"}
              alt="absar logo image"
              width={1}
              height={0}
              color="red"
              className="w-[60%]"
            />
          </div>
          <div>
            <FooterList title="خدماتــنا">
              <p>أنظمة المراقبة</p>
              <p>أنظمة الحريق</p>
              <p>أنظمة الدخول الذكي</p>
              <p>حلول المنازل الذكية</p>
              <p>الحماية من السرقة</p>
              <p>الدعم الفني والصيانة</p>
            </FooterList>
          </div>

          <div>
            <FooterList title="روابــط ســريعة">
              <Link className="hover:opacity-80" href={"#home"}>
                الرئيسية
              </Link>
              <Link className="hover:opacity-80" href={"#about"}>
                من نحن
              </Link>
              <Link className="hover:opacity-80" href={"#services"}>
                خدماتنا
              </Link>
              <Link className="hover:opacity-80" href={"#contact"}>
                تواصل معنا
              </Link>
            </FooterList>
          </div>
          <div>
            <FooterList title="تواصـل مــعنا">
              <Link
                target="_blank"
                href={"tel:966558455133"}
                className="flex items-center space-x-2 hover:opacity-80"
              >
                <IoIosCall />
                <p>966558455133</p>
              </Link>
              <Link
                target="_blank"
                href={
                  "https://api.whatsapp.com/send?phone=966558455133"
                }
                className="flex items-center space-x-2 hover:opacity-80"
              >
                <FaWhatsapp />
                <p>966558455133</p>
              </Link>
            </FooterList>
          </div>
        </div>
      </div>
      <p className="absolute text-nowrap text-center text-sm sm:text-[16px] lg:text-right bottom-6 left-1/2 lg:left-8 -translate-x-1/2 lg:translate-0 font-jf text-light-green">
        © 2025 جميع الحقوق محفوظة – أبصر
        <br />
        <Link
          target="_blank"
          className="font-bold hover:opacity-80"
          href={
            "https://www.linkedin.com/in/elsayed-elghazy-1851011b1/"
          }
        >
          بواسطـــة Elsayed Elghazy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
