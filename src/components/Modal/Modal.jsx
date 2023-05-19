import React from "react";

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
      <div className="bg-white p-4 rounded-lg">{children}</div>
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
}

export default Modal;
