import { useEffect } from "react";

function useHandleOusideClick(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (handler) handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, handler]);
}

export default useHandleOusideClick;
