import { Menu } from "lucide-react";
import React from "react";

const BurgerMenu = () => {
  return (
    <div className="md:hidden justify-end">
      <Menu color="white" width={80} />
    </div>
  );
};

export default BurgerMenu;
