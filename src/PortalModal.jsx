import ReactPortal from "./ReactPortal";

function PortalModal({ isOpen, handleClose, header = " Modal ft. Portal" }) {
  if (!isOpen) {
    return null;
  }
  return (
    <ReactPortal>
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <div>{header}</div>
            <button onClick={handleClose}>X</button>
          </div>
          <div className="modal-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            debitis, excepturi tempore voluptas mollitia voluptatum pariatur
            velit tempora accusantium et culpa ipsam. Est dolor adipisci laborum
            labore molestiae. Tenetur, est.
          </div>
        </div>
      </div>
    </ReactPortal>
  );
}

export default PortalModal;
