import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuButton from "./components/MenuButton";

import { FaVideo, FaHeadphones } from "react-icons/fa";

import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Soundcloud from "../images/soundcloud.png";
import Spotify from "../images/spotify.png";
import Tiktok from "../images/tiktok.png";
import Youtube from "../images/youtube.png";
import Apple from "../images/apple.png";
import Beatport from "../images/beatport.png";
import Deezer from "../images/deezer.png";
import Dropbox from "../images/dropbox.png";
import Email from "../images/email.png";

import "../styles/global.css";

const socialMedia = [
  {
    title: "Instagram",
    img: Instagram,
    link: "https://www.instagram.com/thaurosmusic/",
  },
  {
    title: "YouTube",
    img: Youtube,
    link: "https://www.youtube.com/@thaurosmusic",
  },
  {
    title: "Spotify",
    img: Spotify,
    link: "https://open.spotify.com/intl-pt/artist/7qEMajxlp8K1jcPXpI3oiI?si=8x2wPqf7R-2h0YvYssbUdA",
  },
  {
    title: "FaceBook",
    img: Facebook,
    link: "https://www.facebook.com/thauros",
  },
  {
    title: "TikTok",
    img: Tiktok,
    link: "https://www.tiktok.com/@thaurosmusic",
  },
  {
    title: "SoundCloud",
    img: Soundcloud,
    link: "https://soundcloud.com/thaurosmusic",
  },
  {
    title: "Beatport",
    img: Beatport,
    link: "https://www.beatport.com/artist/thauros/1082183",
  },
  {
    title: "Apple Music",
    img: Apple,
    link: "https://music.apple.com/us/artist/thauros/1586617367",
  },
  {
    title: "Deezer",
    img: Deezer,
    link: "https://www.deezer.com/br/artist/145994622",
  },
  {
    title: "Bookings",
    img: Email,
    link: "https://wa.link/8u2ejm",
  },
];

const IndexPage = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <MenuButton handleMenuActive={handleMenuActive} menuActive={menuActive} />
      {menuActive && <Header socialMedia={socialMedia} />}
      <main className="m-auto py-24 w-4/5 sm:w-3/5 md:w-2/4 lg:w-2/5">
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
          <div id="iframe-container" className="flex justify-center mt-4">
            <iframe
              // width="312"
              // height="173.25"
              width="100%"
              height="100%"
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
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <title>THAUROS</title>
    </>
  );
};
