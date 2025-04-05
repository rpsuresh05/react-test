import { useEffect, useState } from "react";

const Pill = ({ img, name, onClick }) => {
  return (
    <span className="user-pill" onClick={onClick}>
      <img src={img} alt={name} />
      <span>{name}</span>
    </span>
  );
};

export default Pill;
