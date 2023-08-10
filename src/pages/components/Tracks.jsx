import React from "react";

import Track from "./Track";

import "../../styles/global.css";

const Tracks = ({
  tracks,
  track,
  openModal,
  modalOpen,
  closeModal,
  handleOverlayClick,
}) => {
  return (
    <>
      <ul className="flex flex-wrap justify-center">
        {tracks &&
          tracks.map((track, index) => (
            <li
              className="zoom-wrapper w-1/2 md:w-1/3 xl:w-1/4 cursor-pointer transition duration-300 ease-in lg:grayscale lg:hover:grayscale-0"
              key={index}
              onClick={() => openModal(track)}
            >
              <div className="zoom-image">{track.img}</div>
            </li>
          ))}
      </ul>
      {openModal && (
        <Track
          track={track}
          isOpen={modalOpen}
          onClose={closeModal}
          handleOverlayClick={handleOverlayClick}
        />
      )}
    </>
  );
};

export default Tracks;
