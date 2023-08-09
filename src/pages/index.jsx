import React, { useCallback, useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuButton from "./components/MenuButton";

import { FaVideo, FaHeadphones } from "react-icons/fa";

import "../styles/global.css";

const socialMedia = [
  {
    title: "Instagram",
    img: (
      <StaticImage
        className="invert"
        src="../images/instagram.png"
        alt="instagram"
      />
    ),
    link: "https://www.instagram.com/thaurosmusic/",
  },
  {
    title: "YouTube",
    img: (
      <StaticImage
        className="invert"
        src="../images/youtube.png"
        alt="youtube"
      />
    ),
    link: "https://www.youtube.com/@thaurosmusic",
  },
  {
    title: "Spotify",
    img: (
      <StaticImage
        className="invert"
        src="../images/spotify.png"
        alt="spotify"
      />
    ),
    link: "https://open.spotify.com/intl-pt/artist/7qEMajxlp8K1jcPXpI3oiI?si=8x2wPqf7R-2h0YvYssbUdA",
  },
  {
    title: "FaceBook",
    img: (
      <StaticImage
        className="invert"
        src="../images/facebook.png"
        alt="facebook"
      />
    ),
    link: "https://www.facebook.com/thauros",
  },
  {
    title: "TikTok",
    img: (
      <StaticImage className="invert" src="../images/tiktok.png" alt="tiktok" />
    ),
    link: "https://www.tiktok.com/@thaurosmusic",
  },
  {
    title: "SoundCloud",
    img: (
      <StaticImage
        className="invert"
        src="../images/soundcloud.png"
        alt="soundcloud"
      />
    ),
    link: "https://soundcloud.com/thaurosmusic",
  },
  {
    title: "Beatport",
    img: (
      <StaticImage
        className="invert"
        src="../images/beatport.png"
        alt="beatport"
      />
    ),
    link: "https://www.beatport.com/artist/thauros/1082183",
  },
  {
    title: "Apple Music",
    img: (
      <StaticImage className="invert" src="../images/apple.png" alt="apple" />
    ),
    link: "https://music.apple.com/us/artist/thauros/1586617367",
  },
  {
    title: "Deezer",
    img: (
      <StaticImage className="invert" src="../images/deezer.png" alt="deezer" />
    ),
    link: "https://www.deezer.com/br/artist/145994622",
  },
  {
    title: "Media Kit",
    img: (
      <StaticImage
        className="invert"
        src="../images/dropbox.png"
        alt="dropbox"
      />
    ),
    link: "https://www.dropbox.com/home/Thauros%20Presskit",
  },
  {
    title: "Bookings",
    img: (
      <StaticImage className="invert" src="../images/email.png" alt="email" />
    ),
    link: "https://wa.link/8u2ejm",
  },
];

const IndexPage = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 35) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    menuActive
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [menuActive]);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <MenuButton
        handleMenuActive={handleMenuActive}
        menuActive={menuActive}
        hasScrolled={hasScrolled}
      />
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
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/OA_HCNQ8dWM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
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
