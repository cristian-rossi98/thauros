import React, { useState } from "react";

import Header from "./components/Header";
import MenuButton from "./components/MenuButton";

import { FaVideo, FaHeadphones } from "react-icons/fa";

import "../styles/global.css";

const IndexPage = () => {
  const [menuActive, setMenuActive] = useState(false);
  const year = new Date().getFullYear();

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <MenuButton handleMenuActive={handleMenuActive} menuActive={menuActive} />
      {menuActive && <Header />}
      <main className="py-24 px-8">
        <section>
          <p className="text-justify">
            Thauros é um projeto com uma identidade sonora abstrata e marcante.
            Traz em seu set uma imersão sônica e cibernética única, com uma
            fusão de vertentes, transportando você para uma dimensão futurista,
            onde os sons se fundem em harmonia perfeita, criando uma experiência
            sonora inovadora e autoral.
            <br></br>
            <br></br>
            Difícil de explicar, não se surpreenda se você não entender nada mas
            ainda assim quiser ouvir mais!
          </p>
        </section>
        <section className="mt-8">
          <div className="flex flex-row items-center">
            <FaVideo className="mr-2 text-xl" />
            <h1>Full Set</h1>
          </div>
          <div className="flex justify-center mt-4">
            <iframe
              width="312"
              height="173.25"
              src="https://www.youtube.com/embed/OA_HCNQ8dWM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        <section className="mt-8">
          <div className="flex flex-row items-center">
            <FaHeadphones className="mr-2 text-xl" />
            <h1>Music</h1>
          </div>
        </section>
      </main>
      <footer className="flex justify-center p-4 text-xs">
        <p>© {year} Thauros</p>
      </footer>
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      {/* <link rel="shortcut icon" href="../images/thauros-favicon.svg" type="image/x-icon" /> */}
      <title>THAUROS</title>
    </>
  );
};
