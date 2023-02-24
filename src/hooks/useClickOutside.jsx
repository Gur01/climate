import { useEffect } from "react";

export const useClickOutside = (ref, cb, exception) => {
  useEffect(() => {
    const listener = (event) => {
      if (exception) {
        if (
          ref.current &&
          !exception.current.contains(event.target) &&
          !ref.current.contains(event.target)
        ) {
          cb(event);
          return;
        }
      } else {
        if (ref.current && !ref.current.contains(event.target)) {
          cb(event);
        }
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [cb, ref]);
};
