import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./PortalWrapper.css";
import PortalModal from "./PortalModal";
const PortalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="portal-wrapper">
      <h1>Portal Wrapper Example</h1>
      <div className="outer-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iusto
          exercitationem libero quidem repudiandae placeat et quisquam
          architecto facilis obcaecati, nulla corporis numquam iure voluptates
          error! Quo autem velit voluptatum. Atque accusantium alias hic
          voluptas optio numquam perferendis velit ea animi, provident quasi?
          Ipsa aspernatur, fuga debitis asperiores dolorem iste. Quam aspernatur
          inventore quibusdam consequatur? Nemo quasi officia error possimus?
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="middle-container"
        >
          <p>
            Atque accusantium alias hic voluptas optio numquam perferendis velit
            ea animi, provident quasi? Ipsa aspernatur, fuga debitis asperiores
            dolorem iste. Quam aspernatur inventore quibusdam consequatur? Nemo
            quasi officia error possimus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Labore iusto exercitationem libero quidem
            repudiandae placeat et quisquam architecto facilis obcaecati, nulla
            corporis numquam iure voluptates error! Quo autem velit voluptatum.
          </p>
          <div className="inner-container">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="inner-container">
                ernatur inventore quibusdam consequatur? Nemo quasi officia
                error possimus? Lorem ipsum dolor{" "}
              </div>
              <button onClick={toggleModal}>Open Modal</button> <br />
              <div className="inner-container">
                tas optio numquam perferendis velit ea animi, provident quasi?
                Ipsa aspernatur, fuga debitis asperiores dolorem iste. Quam
                aspernatur invento
              </div>{" "}
            </div>
            <PortalModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
            {/* {isOpen && (
              <div className="modal-overlay">
                <div className="modal">
                  <div className="modal-header">
                    <div> Modal ft. Portal</div>
                    <button onClick={() => setIsOpen(false)}>X</button>
                  </div>
                  <div className="modal-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto debitis, excepturi tempore voluptas mollitia
                    voluptatum pariatur velit tempora accusantium et culpa
                    ipsam. Est dolor adipisci laborum labore molestiae. Tenetur,
                    est.
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
      {/* {isOpen &&
                ReactDOM.createPortal(
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Modal Content</h2>
                            <button onClick={toggleModal}>Close Modal</button>
                        </div>
                    </div>,
                    document.body
                )} */}
    </div>
  );
};

export default PortalWrapper;
