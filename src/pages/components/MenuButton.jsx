import React from "react";

import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import ThaurosLogo from "../../images/thauros-logo.png";

const MenuButton = ({ handleMenuActive, menuActive }) => {
  return (
    <section className="w-full fixed py-8 z-10">
      <div className="m-auto flex justify-between items-center w-4/5 sm:w-3/5 md:w-2/4 lg:w-2/5">
        <div className="w-40">{!menuActive && <img src={ThaurosLogo} alt="Logo" />}</div>
        <button onClick={handleMenuActive} className="text-xl">
          {menuActive ? (
            <FaTimes className="text-white" />
          ) : (
            <GiHamburgerMenu className="text-white" />
          )}
        </button>
      </div>
    </section>
  );
};

export default MenuButton;
