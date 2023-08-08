import React from "react";

import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuButton = ({ handleMenuActive, menuActive }) => {
  return (
    <section className="w-full fixed flex justify-end p-8 z-10">
      <button onClick={handleMenuActive} className="text-xl">
        {menuActive ? (
          <FaTimes className="text-white" />
        ) : (
          <GiHamburgerMenu className="text-white" />
        )}
      </button>
    </section>
  );
};

export default MenuButton;
