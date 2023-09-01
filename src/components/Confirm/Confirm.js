import React, { useState } from 'react';

const Confirm = ({ onAccept }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAccept = () => {
    onAccept();
    handleClose();
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <h1>Regulamin</h1>
          <p>Wyrażam zgodę na przetwarzanie moich danych osobowych i innych poufnych informacji</p>
          <div className="modal-buttons">
            <button className="regulamin-button" onClick={handleAccept}>Akceptuję</button>
            <button className="regulamin-button" onClick={handleClose}>Zamknij</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Confirm;
