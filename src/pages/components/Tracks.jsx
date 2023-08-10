import React from "react";

import Track from "./Track";

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
              className="w-1/2 "
              key={index}
              onClick={() => openModal(track)}
            >
              {track.img}
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
