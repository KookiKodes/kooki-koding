import { useState, useRef, useEffect } from "react";
import iota from "@helper/iota";
import { Callback, CallbackWithReturn } from "@interfaces/Utilities";

export interface ComponentStateUtils {
  is: {
    [key: string]: CallbackWithReturn<boolean>;
  };
  switch: {
    [key: string]: Callback;
  };
  toggle: {
    [key: string]: Callback;
  };
  on: {
    [key: string]: Callback;
  };
  off: {
    [key: string]: Callback;
  };
}

const useComponentState = (
  defaultState: string,
  states: string[]
): [string, ComponentStateUtils] => {
  const stateOptions = useRef(iota([defaultState, ...states]));
  const stateByte = useRef(1);
  const [state, setState] = useState(defaultState);

  function initUtilObj() {
    return {
      is: {},
      switch: {},
      toggle: {},
      on: {},
      off: {},
    };
  }

  // Need to create a function which appropriately determines the priority of the state and the new state. IE, we should be able to go from hover to focus  but if we're still focusing we should not go back to hover.

  function determinePriority(newState: string) {
    const newPrio = stateOptions.current[newState],
      curPrio = stateOptions.current[state];
    if (newPrio > curPrio) {
      setState(newState);
    }
  }

  function componentStateUtils(): ComponentStateUtils {
    return Object.entries(stateOptions.current).reduce(
      (obj: ComponentStateUtils, [key, val]) => {
        if (key && typeof val === "number") {
          obj.is[key] = (): boolean => {
            return (stateByte.current & val) === val;
          };
          obj.switch[key] = (): void => {
            stateByte.current = (stateByte.current & val) | val;
            setState(key);
          };
          obj.toggle[key] = (): void => {
            stateByte.current = stateByte.current ^ val;
            if (obj.is[key]()) obj.on[key]();
            else obj.off[key]();
          };
          obj.on[key] = (): void => {
            stateByte.current = stateByte.current | val;
            determinePriority(key);
          };
          obj.off[key] = (): void => {
            stateByte.current =
              stateByte.current & val
                ? stateByte.current ^ val
                : stateByte.current;
            if (stateByte.current > 1) {
              Object.entries(obj.is).forEach(([state, isState]) => {
                if (isState()) {
                  setState(state);
                }
              });
            } else setState(defaultState);
          };
        }
        return obj;
      },
      initUtilObj()
    );
  }

  return [state, componentStateUtils()];
};

export default useComponentState;
