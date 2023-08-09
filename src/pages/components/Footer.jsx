import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="w-full p-4">
        <div className="flex justify-center py-4">
          <div className="w-12 mr-4">
            <StaticImage className="z-[-1] w-full h-full" src="../../images/pw-logo.png" alt="PW Bookings" />
          </div>
          <div className="w-10">
            <StaticImage className="z-[-1] w-full h-full" src="../../images/thauros-symbol.png" alt="Thauros" />
          </div>
        </div>
        <div className="flex justify-center text-xs">
          <p>© {year} Thauros</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
