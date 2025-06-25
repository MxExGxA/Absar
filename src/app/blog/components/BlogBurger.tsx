"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const BlogBurger = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setToggleMenu(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:hidden z-40">
      <motion.div
        whileHover={{ opacity: 0.8 }}
        className="*:w-10 *:h-1 *:bg-white *:rounded-full h-6 flex flex-col justify-between items-center relative z-50 cursor-pointer"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <motion.div
          animate={
            toggleMenu
              ? {
                  rotate: 45,
                  y: 10,
                  width: 30,
                  backgroundColor: "#326149",
                }
              : {}
          }
        ></motion.div>
        <motion.div
          animate={toggleMenu ? { x: 50, opacity: 0 } : {}}
        ></motion.div>
        <motion.div
          animate={
            toggleMenu
              ? {
                  rotate: -45,
                  y: -10,
                  width: 30,
                  backgroundColor: "#326149",
                }
              : {}
          }
        ></motion.div>
      </motion.div>

      <motion.div
        key={toggleMenu ? "open" : "closed"} // Force remount
        initial={{ x: "-100%" }}
        animate={toggleMenu ? { x: 0 } : { x: "-100%" }}
        className="fixed top-0 left-0 w-full h-lvh bg-lemon-green text-light-green font-ghaith flex justify-center items-center"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <ul className="flex flex-col items-center space-y-10 text-4xl">
          <li>
            <Link href={"/"}>الرئيــسية</Link>
          </li>
          <li>
            <Link href={"/blog"}>المدونة</Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default BlogBurger;
