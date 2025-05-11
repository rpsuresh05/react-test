import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

function createWrapperAndAppend(id) {
  const ele = document.createElement("div");
  ele.setAttribute("id", id); // Set the id attribute
  ele.setAttribute("name", "test"); // Set the name attribute
  document.body.append(ele);
  return ele;
}

export default function ReactPortal({ wrapperId = "portal-id", children }) {
  const [element, setElement] = useState(null);

  useLayoutEffect(() => {
    let ele = document.getElementById(wrapperId);
    let systemCreated = false;
    if (!ele) {
      ele = createWrapperAndAppend(wrapperId);
      console.log(ele);
      systemCreated = true;
    }
    setElement(ele);

    return () => {
      // debugger;
      if (systemCreated && ele?.parentNode) {
        ele.parentNode.removeChild(ele);
      }
    };
  }, [wrapperId]);

  if (!element) return null;

  return createPortal(children, element);
}
