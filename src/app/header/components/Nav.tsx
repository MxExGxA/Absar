"use client";
import { useEffect, useState } from "react";
import NavButton from "./NavButton";
import BurgerMenu from "./BurgerMenu";
import UseInView from "@/app/hooks/useInView";

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

  const isHome = UseInView("#home", { threshold: 0.1 });
  const isAbout = UseInView("#about", { threshold: 0.8 });
  const isServices = UseInView("#services", { threshold: 0.8 });
  const isContact = UseInView("#contact", { threshold: 0.8 });

  useEffect(() => {
    if (isHome) handleNavButtonClick("#home");
    if (isAbout) handleNavButtonClick("#about");
    if (isServices) handleNavButtonClick("#services");
    if (isContact) handleNavButtonClick("#contact");
  }, [isHome, isAbout, isServices, isContact]);

  const handleNavButtonClick = (path: string) => {
    setNavData((prev) => {
      const newNavData = prev.map((ele) => {
        if (ele.path !== path) {
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
      className={`pt-3 pb-4 flex justify-between items-center px-9 font-jf z-50 backdrop-blur-2xl}`}
    >
      <ul className="navbar hidden md:flex items-center space-x-2 text-white">
        {navData.map((ele) => (
          <NavButton
            key={ele.id}
            path={ele.path}
            title={ele.title}
            selected={ele.selected}
            onClick={() => handleNavButtonClick(ele.path)}
          />
        ))}
      </ul>
      <div></div>
      <BurgerMenu />
    </nav>
  );
};

export default Nav;
