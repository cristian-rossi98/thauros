import React, { Fragment } from "react";

import { FaTimes } from "react-icons/fa";

import "../../styles/global.css";

const Track = ({ track, isOpen, onClose, handleOverlayClick }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="flex justify-end">
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        {track.iframeLink ? (
          <iframe
            className="rounded-md"
            src={track.iframeLink}
            width="100%"
            height="252"
            frameborder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        ) : (
          track.iframe
        )}
      </div>
    </div>
  );
};

export default Track;
