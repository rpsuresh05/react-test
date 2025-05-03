import React, { useEffect } from "react";
import "./Modal.css";
import useClickOutside from "./useClickOutside";
import { useScrollLock } from "./useScrollLock";

function Modal({ open, children, header = "Modal", handleClose, triggerRef }) {
  console.log(open);
  const ref = React.useRef(null);
  useScrollLock(open);
  useClickOutside(ref, handleClose);

  useEffect(() => {
    const handleDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) {
      ref.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
    if (open) document.addEventListener("keydown", handleDown);

    return () => {
      document.removeEventListener("keydown", handleDown);
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="model-overlay" role="presentation">
        <div
          ref={ref}
          className="modal modal-open"
          role="dialog"
          aria-describedby="modal-body"
          aria-labelledby="modal-header"
          aria-modal="true"
        >
          <div className="modal-header" id="modal-header">
            <div>{header}</div>
            <div>
              <button onClick={handleClose}>X</button>
            </div>
          </div>
          <div className="modal-body" id="modal-body">
            {" "}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
