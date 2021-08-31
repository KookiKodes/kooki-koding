import { RefObject, useEffect, useRef } from "react";
import { Callback } from "@interfaces/Utilities";

type ScrollAlignment = "start" | "center" | "end" | "nearest";

interface ScrollIntoViewOptions {
  block?: ScrollAlignment;
  behavior?: "smooth" | "auto";
  inline?: ScrollAlignment;
}

interface UseScrollIntoView<T> {
  options?: boolean | ScrollIntoViewOptions;
  onLoad?: boolean;
  watch?: [any];
  ref?: RefObject<T>;
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

function defaulHookParams<T>(): UseScrollIntoView<T> {
  const params = {} as UseScrollIntoView<T>;
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
  params: UseScrollIntoView<T> = defaulHookParams()
): [RefObject<T>, Callback] => {
  const ref = params.ref ? params.ref : useRef<null | T>(null);

  let { options, watch, onLoad } = params;
  if (!options) options = getDefaultOptions();

  const scrollIntoView = () => {
    if (ref.current) {
      ref.current.scrollIntoView(options);
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
  }, watch);

  return [ref, scrollIntoView];
};

export default useScrollIntoView;
