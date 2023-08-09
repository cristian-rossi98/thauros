import React from "react";

import PWLogo from "../../images/pw-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="w-full p-4">
        <div className="flex justify-center py-4">
          <img className="w-12" src={PWLogo} alt="PW Bookings" />
        </div>
        <div className="flex justify-center text-xs">
          <p>© {year} Thauros</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
