"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { MouseEventHandler, ReactElement } from "react";

const Button = ({
  label,
  type,
  icon,
  onClick,
  navigate,
}: {
  label: string;
  type: "primary" | "secondary";
  icon?: ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  navigate?: string;
}) => {
  const primaryStyle = "text-dark-green";
  const secondaryStyle = "text-lemon-green";

  return (
    <motion.button
      whileHover={{ opacity: 0.8 }}
      whileTap={{ opacity: 1, scale: 0.9 }}
      className={`relative cursor-pointer font-jf ${
        type === "primary" ? primaryStyle : secondaryStyle
      }`}
      onClick={navigate ? () => (location.href = navigate) : onClick}
    >
      <Image
        src={
          type === "primary"
            ? "/primary-button.svg"
            : "/secondary-button.svg"
        }
        alt="button background"
        width={170}
        height={0}
        className="w-32 sm:w-44"
      />

      <span className="absolute flex items-center text-nowrap gap-4 text-sm sm:text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {label}
        {icon}
      </span>
    </motion.button>
  );
};

export default Button;
