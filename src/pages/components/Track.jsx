import React from "react";

const Track = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
}

export default Track;