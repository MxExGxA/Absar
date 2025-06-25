"use client";
import NavButton from "@/app/header/components/NavButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogBurger from "./BlogBurger";
import Link from "next/link";

const BlogDynamicNav = () => {
  const navData = [
    {
      id: 1,
      path: "/",
      title: "الرئيسية",
      selected: false,
    },
    {
      id: 2,
      path: "/blog",
      title: "المدونة",
      selected: true,
    },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          scrollY < 110 ? "hidden" : ""
        } pt-3 pb-4 flex justify-between items-center fixed w-full top-0 left-0 px-5 md:px-9 font-jf z-50 bg-dark-green/60 backdrop-blur-2xl`}
      >
        {scrollY >= 110 ? (
          <Link href={"/"}>
            <Image
              src={"/absar-logo.svg"}
              alt="main absar logo"
              height={0}
              width={120}
            />
          </Link>
        ) : (
          <div></div>
        )}
        <ul className="navbar hidden md:flex items-center space-x-2 text-white">
          {navData.map((ele) => (
            <NavButton
              key={ele.id}
              path={ele.path}
              title={ele.title}
              selected={ele.selected}
            />
          ))}
        </ul>
        <BlogBurger />
      </nav>
    </>
  );
};

export default BlogDynamicNav;
