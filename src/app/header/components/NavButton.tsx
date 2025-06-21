"use client";
import { MouseEventHandler } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const NavButton = ({
  path,
  title,
  selected,
  onClick,
}: {
  path: string;
  title: string;
  selected: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <motion.li whileHover={!selected ? { opacity: 0.8 } : ""}>
      <Link
        className={`py-2 px-3 rounded-sm ${
          selected
            ? "text-dark-green bg-white shadow-[3px_-3px_0_#b8d900]"
            : "text-white"
        }`}
        href={path}
        onClick={onClick}
      >
        {title}
      </Link>
    </motion.li>
  );
};

export default NavButton;
