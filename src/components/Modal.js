import React, { useEffect } from "react";

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
      ></div>

      {/* Modal box */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-lg w-full p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          >
            ✕
          </button>

          {title && (
            <h2
              id="modal-title"
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {title}
            </h2>
          )}

          <div className="text-gray-800 dark:text-gray-300">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
