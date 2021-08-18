import { RefObject, useEffect, useRef } from "react";
import {Callback} from "@interfaces/Utilities";

type ScrollAlignment = "start" | "center" | "end" | "nearest";

interface ScrollIntoViewOptions {
  block?: ScrollAlignment;
  behavior?: "smooth" | "auto";
  inline?: ScrollAlignment;
}

interface UseScrollIntoView {
  options?: boolean | ScrollIntoViewOptions;
  onLoad?: boolean;
  watch?: [any];
}

const getDefaultOptions = () => {
  const options = {};
  Object.defineProperties(options, {
    block: {
      value: "start",
    },
    behavior: {
      value: "auto",
    },
    inline: {
      value: "nearest",
    },
  });
  return options;
};

function defaulHookParams(): UseScrollIntoView {
  const params = {} as UseScrollIntoView;
  Object.defineProperties(params, {
    options: {
      value: getDefaultOptions(),
    },
    onLoad: {
      value: false,
    },
    watch: {
      value: [],
    },
  });
  return params;
}

const useScrollIntoView = <T extends Element>(
  params: UseScrollIntoView = defaulHookParams(),
): [RefObject<T>, Callback] => {
  const { options, watch, onLoad } = params;
  const ref = useRef<null | T>(null);
  const scrollIntoView = () => {
    if (ref.current !== null) {
      ref.current.scrollIntoView(options ? options : getDefaultOptions());
    }
  };

  useEffect(() => {
    if (onLoad) {
      scrollIntoView();
    }
  }, []);

  useEffect(() => {
    if (watch && watch.length > 0) {
      scrollIntoView();
    }
  }, watch)

  return [ref, scrollIntoView];
};

export default useScrollIntoView;

