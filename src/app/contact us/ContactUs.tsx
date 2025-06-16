import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import ContactButtons from "./components/ContactButtons";
import CopyAddress from "./components/CopyAddress";

const ContactUs = () => {
  return (
    <div className="relative h-auto xl:h-[470px]  pb-20 pt-10 flex flex-col xl:flex-row items-start justify-between ">
      <div className="w-auto xl:w-[700px]">
        <div className="flex items-center space-x-6 pb-5">
          <div className="w-[10px] h-28 bg-gradient-to-b from-lemon-green to-[#b8d9009d]"></div>
          <div className="font-ghaith flex flex-col items-start space-y-4">
            <h1 className="text-white text-3xl sm:text-4xl">
              تواصـــل معنا
            </h1>
            <h2 className="text-lemon-green text-xl sm:text-2xl">
              راسلــنا فـي أي وقــت أو قـم بزيــارتنا
            </h2>
          </div>
        </div>
        <div className="flex pr-9 ml-5">
          <div>
            <p className="text-lg font-jf text-white mb-16 leading-8">
              فريقنا مستعد للإجابة على استفساراتك وتقديم الدعم الذي
              تحتاجه في أي وقت. لا تتردد في التواصل معنا عبر الواتساب
              أو الهاتف، وسنكون سعداء بخدمتك وتقديم أفضل الحلول
              التقنية التي تناسب احتياجاتك.
            </p>
            <div className="hidden xl:flex space-x-5">
              <ContactButtons />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/2 h-full flex flex-col justify-between mb-5 space-y-1 xl:space-y-0">
        <div className="w-full rounded-xl border-3 border-[#b8d900] overflow-hidden">
          <iframe
            title="google maps iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.004920364898!2d39.53039!3d24.450614599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdc77bf0728fff%3A0x691de770580e26cb!2z2YPYp9mF2YrYsdin2Kog2YXYsdin2YLYqNipIC0g2YXYpNiz2LPYqSDYp9io2LXYsSDZhNmE2YXYsdin2YLYqNipINin2YTYo9mF2YbZitip!5e0!3m2!1sen!2seg!4v1749985016003!5m2!1sen!2seg"
            width="100%"
            height="250"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
        <div className="font-jf">
          <div className="bg-lemon-green text-dark-green flex justify-between items-center rounded-md space-x-2">
            <div className="flex items-center space-x-2 p-2 min-w-0">
              <IoLocationSharp className="text-xl min-w-4" />
              <p className="truncate overflow-hidden">
                ام ثابت بنت جابر، الدفاع، المدينة المنورة 42374
              </p>
            </div>
            <CopyAddress />
          </div>
        </div>
        <div className="font-jf flex items-center p-2 rounded-md border-2 border-[#b8d900] text-lemon-green space-x-2">
          <IoMdInformationCircle className="text-xl min-w-4" />
          <p className="truncate overflow-hidden">
            قم بالضغط علي الخريطة لفتح العنوان في خرائط جوجل
          </p>
        </div>
      </div>
      <div className="flex self-center sm:self-start xl:hidden space-x-5">
        <ContactButtons />
      </div>
    </div>
  );
};

export default ContactUs;
