import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import "../../styles/global.css"

const MenuButton = ({ handleMenuActive, menuActive, hasScrolled }) => {
  return (
    <section className={`w-full fixed py-8 z-10 main-header ${(hasScrolled && !menuActive) ? 'scrolled' : ''}`}>
      <div className="m-auto flex justify-between items-center w-4/5 sm:w-3/5 md:w-2/4 lg:w-2/5">
        <div className="w-40 flex items-center">
          {!menuActive && (
            <StaticImage
              src="../../images/thauros-logo.png"
              alt="Thauros Logo"
            />
          )}
        </div>
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
