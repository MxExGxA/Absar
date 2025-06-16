import React from "react";
import FloatingCircle from "./components/FloatingCircle";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Chat = () => {
  return (
    <div className="fixed z-50 right-4 bottom-4 lg:right-8 lg:bottom-8 flex flex-col space-y-3 items-center">
      <FloatingCircle
        title="واتساب"
        link="https://api.whatsapp.com/send?phone=966558455133"
        icon={<FaWhatsapp className="text-4xl text-light-green" />}
      />

      <FloatingCircle
        title="تليفون"
        link="tel:966558455133"
        icon={<IoIosCall className="text-3xl text-light-green" />}
      />
    </div>
  );
};

export default Chat;
