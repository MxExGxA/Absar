"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Chat = () => {
  return (
    <Link
      title="واتساب"
      href={"https://api.whatsapp.com/send?phone=966558455133"}
      className="fixed z-50 right-8 bottom-8 flex items-center animate-iteration-count-infinite animate-tada"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="w-16 h-16 bg-white rounded-full border-2 border-lemon-green flex items-center justify-center cursor-pointer"
      >
        <FaWhatsapp className="text-4xl text-light-green" />
      </motion.div>
    </Link>
  );
};

export default Chat;
