"use client";
import { useEffect, useState } from "react";
import NavButton from "./NavButton";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

const Nav = () => {
  const [navData, setNavData] = useState([
    {
      id: 1,
      path: "#home",
      title: "الرئيسية",
      selected: true,
    },
    {
      id: 2,
      path: "#about",
      title: "من نحن",
      selected: false,
    },
    {
      id: 3,
      path: "#services",
      title: "خدماتنا",
      selected: false,
    },
    {
      id: 4,
      path: "#contact",
      title: "تواصل معنا",
      selected: false,
    },
  ]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavButtonClick = (id: number) => {
    setNavData((prev) => {
      const newNavData = prev.map((ele) => {
        if (ele.id !== id) {
          ele.selected = false;
        } else {
          ele.selected = true;
        }
        return ele;
      });
      return newNavData;
    });
  };
  return (
    <nav
      className={`pt-3 pb-4 flex justify-between items-center sticky top-0 px-9 font-jf z-50 ${
        scrollY >= 110 ? "bg-dark-green/60 backdrop-blur-2xl" : ""
      }`}
    >
      {scrollY >= 110 ? (
        <Image
          src={"absar-logo.svg"}
          alt="main absar logo"
          height={0}
          width={120}
        />
      ) : (
        ""
      )}
      <ul className="navbar hidden md:flex items-center space-x-2 text-white">
        {navData.map((ele) => (
          <NavButton
            key={ele.id}
            path={ele.path}
            title={ele.title}
            selected={ele.selected}
            onClick={() => handleNavButtonClick(ele.id)}
          />
        ))}
      </ul>
      <BurgerMenu />
    </nav>
  );
};

export default Nav;
