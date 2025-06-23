import React, { useEffect, useState } from 'react';

interface PopupProps {
  header: string;
  content: string;
  closable?: boolean;
  onClose?: () => void;
}

const Popup: React.FC<PopupProps> = ({ header, content, closable = false, onClose }) => {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  const handleClose = () => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 300);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-96 p-4 transform transition-transform duration-300 ${
          exiting ? 'scale-95' : 'scale-100'
        }`}
      >
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold">{header}</h2>
          {closable && (
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
          )}
        </div>
        <div className="text-gray-700">{content}</div>
      </div>
    </div>
  );
};

export default Popup;
