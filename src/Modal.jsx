import React from "react";
import "./Modal.css";
import useClickOutside from "./useClickOutside";
import { useScrollLock } from "./useScrollLock";

function Modal({ open, children, header = "Modal", handleClose }) {
  console.log(open);
  const ref = React.useRef(null);
  useScrollLock(open);
  useClickOutside(ref, handleClose);
  if (!open) {
    return null;
  }
  return (
    <>
      <div className="model-overlay">
        <div ref={ref} className="modal">
          <div className="modal-header">
            <div>{header}</div>
            <div>
              <button onClick={handleClose}>X</button>
            </div>
          </div>
          <div className="modal-body"> {children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
