import { useEffect } from "react";

export default function useClickOutside(elementRef, handler) {
  useEffect(() => {
    const eventHandler = (e) => {
      console.log(e.target, elementRef.current);
      if (!elementRef.current?.contains(e.target)) {
        console.log("closing..from hook..");
        handler();
      }
    };
    document.addEventListener("mousedown", eventHandler);

    return () => {
      document.removeEventListener("mousedown", eventHandler);
    };
  }, [elementRef, handler]);
}
