//* packages
import { useEffect, useState, useRef } from "react";

import { UseBoolean } from "@interfaces/Utilities";

type UseDisableScrollReturn = [boolean, UseBoolean];

const useDisableScroll = (): UseDisableScrollReturn => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const scrollPos = useRef<{ top: number; left: number }>({ top: 0, left: 0 });
  const on = () => setDisabled(true);
  const off = () => setDisabled(false);
  const toggle = () => setDisabled((disabled) => !disabled);

  function scroll() {
    if ((window || document) && disabled) {
      scrollPos.current.top =
        window.pageYOffset || document.documentElement.scrollTop;
      scrollPos.current.left =
        window.pageXOffset || document.documentElement.scrollLeft;

      window.onscroll = function() {
        window.scrollTo(scrollPos.current.left, scrollPos.current.top);
      };
    } else window.onscroll = function() {};
  }

  useEffect(() => {
    scroll();
  }, [disabled]);

  return [disabled, { on, off, toggle }];
};

export default useDisableScroll;
