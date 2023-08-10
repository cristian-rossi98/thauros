import React, { useCallback, useEffect, useState } from "react";

import { StaticImage } from "gatsby-plugin-image";
import toast, { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Description from "./components/Description";
import Tracks from "./components/Tracks";
import Footer from "./components/Footer";
import MenuButton from "./components/MenuButton";
import ToastCustom from "./components/ToastCustom";

import useScrollBlock from "./components/useScrollBlock";

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

const tracks = [
  {
    title: "Thauros - Existentital Coercion (EP)",
    img: (
      <StaticImage
        src="../images/covers/existentialcoercion-cover.jpg"
        alt=""
      />
    ),
    linkSpotify:
      "https://open.spotify.com/intl-pt/album/4j7XOCho2C6v3dVgppp4LL?si=iLCvhFSlRtS-sNhglt2KfQ",
    linkYoutube:
      "https://www.youtube.com/playlist?list=OLAK5uy_mfnmNIzCZh_TxAf0UzFzdPSpr7IjpEnBA",
    linkSoundcloud: "https://on.soundcloud.com/GTcuZ",
    linkBeatport:
      "https://www.beatport.com/release/existential-coercion/4181981",
    iframeLink:
      "https://open.spotify.com/embed/album/4j7XOCho2C6v3dVgppp4LL?utm_source=generator&theme=0",
    iframe: "",
  },
  {
    title: "Thauros - Entheogen",
    img: <StaticImage src="../images/covers/entheogen-cover.jpg" alt="" />,
    linkSpotify:
      "https://open.spotify.com/intl-pt/track/0QpEyexyV254OnLMgqpfLF?si=6eb35f1b49b44782",
    linkYoutube: "https://youtu.be/kdP8qg45JOE",
    linkSoundcloud: "https://on.soundcloud.com/dbdhM",
    linkBeatport: "https://www.beatport.com/track/entheogen/17740312",
    iframeLink:
      "https://open.spotify.com/embed/track/0QpEyexyV254OnLMgqpfLF?utm_source=generator&theme=0",
    iframe: "",
  },
  {
    title: "Thauros - Tataki",
    img: <StaticImage src="../images/covers/tataki-cover.jpg" alt="" />,
    linkSpotify:
      "https://open.spotify.com/intl-pt/track/2BMDEBOHRYndqAIemYWhJm?si=f9f1026118624ded",
    linkYoutube: "https://youtu.be/4piIPSGaAVA",
    linkSoundcloud: "https://on.soundcloud.com/gV5Ev",
    linkBeatport: "https://www.beatport.com/release/tataki/4070272",
    iframeLink:
      "https://open.spotify.com/embed/track/2BMDEBOHRYndqAIemYWhJm?utm_source=generator&theme=0",
    iframe: "",
  },
  {
    title: "Jacob, Jilax - Art & Melody (Liøn & Thauros Remix)",
    img: <StaticImage src="../images/covers/artmelody-cover.jpg" alt="" />,
    linkSpotify: "",
    linkYoutube: "https://youtu.be/eByO0ZRv4H4",
    linkSoundcloud: "https://on.soundcloud.com/XxCyV",
    linkBeatport: "",
    iframeLink: "",
    iframe: (
      <div className="iframe-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/eByO0ZRv4H4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    ),
  },
  {
    title: "Thauros - Be Yours",
    img: <StaticImage src="../images/covers/beyours-cover.jpg" alt="" />,
    linkSpotify:
      "https://open.spotify.com/intl-pt/track/7nd32aUH1mKj0BXUYYkSNd?si=f1aa1dd10ece404b",
    linkYoutube: "https://youtu.be/L0kh9u0SlEM",
    linkSoundcloud: "https://on.soundcloud.com/GmJJZ",
    linkBeatport: "https://www.beatport.com/release/be-yours/3913991",
    iframeLink:
      "https://open.spotify.com/embed/track/7nd32aUH1mKj0BXUYYkSNd?utm_source=generator&theme=0",
    iframe: "",
  },
  {
    title: "Thauros - Lost",
    img: <StaticImage src="../images/covers/lost-cover.jpg" alt="" />,
    linkSpotify:
      "https://open.spotify.com/intl-pt/track/0af9PjZ4PfCp18xsfWP6hs?si=3458d70176364111",
    linkYoutube: "https://youtu.be/aZr3YUjCI8o",
    linkSoundcloud: "https://on.soundcloud.com/35m6A",
    linkBeatport: "https://www.beatport.com/release/lost/3875964",
    iframeLink:
      "https://open.spotify.com/embed/track/0af9PjZ4PfCp18xsfWP6hs?utm_source=generator&theme=0",
    iframe: "",
  },
  {
    title: "Billie Eilish - I Love You (Thauros Remix)",
    img: <StaticImage src="../images/covers/iloveyou-cover.jpg" alt="" />,
    linkSpotify: "",
    linkYoutube: "https://youtu.be/V2LsluKqTt0",
    linkSoundcloud: "https://on.soundcloud.com/GTcuZ",
    linkBeatport: "",
    iframeLink: "",
    iframe: (
      <div className="iframe-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/V2LsluKqTt0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    ),
  },
  {
    title: "Depeche Mode - Enjoy The Silence (Thauros Remix)",
    img: (
      <StaticImage src="../images/covers/enjoythesilence-cover.jpg" alt="" />
    ),
    linkSpotify:
      "https://open.spotify.com/intl-pt/track/5eyXuwGfnNSAw5zmRSmrj8?si=c6da9686bbe14cde",
    linkYoutube: "https://youtu.be/nDDjC2d---o",
    linkSoundcloud: "https://on.soundcloud.com/FrFPq",
    linkBeatport: "",
    iframeLink:
      "https://open.spotify.com/embed/track/5eyXuwGfnNSAw5zmRSmrj8?utm_source=generator&theme=0",
    iframe: "",
  },
  {
    title: "Thauros - Hometown",
    img: <StaticImage src="../images/covers/hometown-cover.jpg" alt="" />,
    linkSpotify:
      "https://open.spotify.com/intl-pt/track/6XZFWZKtOic8eteQRXm5xX?si=d7bf47a11d114685",
    linkYoutube: "https://youtu.be/A_mAJmzYvfk",
    linkSoundcloud: "https://on.soundcloud.com/st6pT",
    linkBeatport: "",
    iframeLink:
      "https://open.spotify.com/embed/track/6XZFWZKtOic8eteQRXm5xX?utm_source=generator&theme=0",
    iframe: "",
  },
];

const IndexPage = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [modalOpen, setModalOpen] = useState(false);
  const [track, setTrack] = useState([]);
  const [blockScroll, allowScroll] = useScrollBlock();

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const handleLanguage = (lang) => {
    setLanguage(lang);
    lang === "pt"
      ? toast("Idioma alterado!", {
          icon: "🇧🇷",
        })
      : toast("Language changed!", {
          icon: "🇺🇸",
        });
  };

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
    menuActive ? blockScroll() : allowScroll();
    // ? document.body.classList.add("overflow-hidden")
    // : document.body.classList.remove("overflow-hidden");
  }, [menuActive, blockScroll, allowScroll]);

  useEffect(() => {
    const timer = setTimeout(() => {
      ToastCustom(language);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [language]);

  const openModal = (track) => {
    console.log("open");
    setTrack(track);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <>
      <Toaster />
      <MenuButton
        handleMenuActive={handleMenuActive}
        menuActive={menuActive}
        hasScrolled={hasScrolled}
      />
      {menuActive && (
        <Header socialMedia={socialMedia} handleLanguage={handleLanguage} />
      )}
      <div className="hidden md:block">
        <Header
          socialMedia={socialMedia}
          handleLanguage={handleLanguage}
          language={language}
        />
      </div>
      <main className="m-auto py-24 w-4/5 sm:w-3/5 md:w-2/4 lg:w-2/5 md:py-4">
        <Description language={language} />
        <section className="mt-8">
          <div className="flex flex-row items-center">
            <FaVideo className="mr-2 text-xl" />
            <h1>Full Set</h1>
          </div>
          <div className="iframe-container flex justify-center mt-4 z-30">
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
            <h1>Releases</h1>
          </div>
          <div className="mt-4">
            <Tracks
              tracks={tracks}
              track={track}
              openModal={openModal}
              modalOpen={modalOpen}
              closeModal={closeModal}
              handleOverlayClick={handleOverlayClick}
            />
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
