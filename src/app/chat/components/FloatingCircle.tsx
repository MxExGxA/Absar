"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ReactElement } from "react";

const FloatingCircle = ({
  title,
  link,
  icon,
  className,
}: {
  title: string;
  link: string;
  icon: ReactElement;
  className?: string;
}) => {
  return (
    <Link
      title={title}
      href={link}
      className="flex items-center animate-iteration-count-infinite animate-tada"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className={`${className} w-14 h-14 bg-light-green rounded-full border-2 border-lemon-green flex items-center justify-center cursor-pointer`}
      >
        {icon}
      </motion.div>
    </Link>
  );
};

export default FloatingCircle;
