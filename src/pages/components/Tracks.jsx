import React from "react";

import Track from "./Track";

const Tracks = ({openModal, modalOpen, closeModal}) => {
  return (
    <>
      <button onClick={openModal}>tracks</button>
      <Track isOpen={modalOpen} onClose={closeModal} />
    </>
  )
}

export default Tracks;