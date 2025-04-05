import React, { useState, useRef, useEffect, Children } from "react";

export const ISV4 = () => {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      // if scrolled to the bottom
      if (
        window.innerHeight + window.scrollY + 40 >=
        window.document.body.offsetHeight
      ) {
        // update the state
        console.log("Updating..");
        setCount(count + 50);
      }
    };

    // scroll event
    window.addEventListener("scroll", onScroll);

    // memory cleanup, remove listener
    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  // generate items
  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i}</div>);
  }

  return <div>{elements}</div>;
};
