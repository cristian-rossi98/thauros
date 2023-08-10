import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { FaTimes } from "react-icons/fa";

import "../../styles/global.css";

const Track = ({ track, isOpen, onClose, handleOverlayClick }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12">
        <div className="flex justify-between mb-4">
          <h1 className="text-sm">{track.title}</h1>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        {track.iframeLink ? (
          <div className="flex justify-center">
            <iframe
              className="rounded-md"
              src={track.iframeLink}
              width="100%"
              height="192"
              frameborder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        ) : (
          <div className="h-48 mb-20">{track.iframe}</div>
        )}
        <div className="flex justify-center">
          {track.linkSpotify && (
            <a
              href={track.linkSpotify}
              target="_blank"
              rel="noreferrer"
              className="w-8 mr-4 transition duration-300 hover:scale-110"
            >
              <StaticImage className="invert" src="../../images/spotify.png" />
            </a>
          )}
          {track.linkBeatport && (
            <a
              href={track.linkBeatport}
              target="_blank"
              rel="noreferrer"
              className="w-8 mr-4 transition duration-300 hover:scale-110"
            >
              <StaticImage className="invert" src="../../images/beatport.png" />
            </a>
          )}
          {track.linkYoutube && (
            <a
              href={track.linkYoutube}
              target="_blank"
              rel="noreferrer"
              className="w-8 mr-4 transition duration-300 hover:scale-110"
            >
              <StaticImage className="invert" src="../../images/youtube.png" />
            </a>
          )}
          {track.linkSoundcloud && (
            <a
              href={track.linkSoundcloud}
              target="_blank"
              rel="noreferrer"
              className="w-8 transition duration-300 hover:scale-110"
            >
              <StaticImage
                className="invert"
                src="../../images/soundcloud.png"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Track;
