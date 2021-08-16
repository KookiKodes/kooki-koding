import {useState, useRef, useEffect} from "react";
import iota  from "@helper/iota";

interface ComponentStateUtils {
    is: {
        [key: string]: () => boolean | void;
    },
    switch: {
        [key: string]: () => boolean | void;
    }
    toggle: {
        [key: string]: () => boolean | void;
    }
    on: {
        [key: string]: () => boolean | void;
    }
    off: {
        [key: string]: () => boolean | void;
    }
}

const useComponentState = (defaultState: string, states: string[]): [string, ComponentStateUtils] => {
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
        }
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
        return Object.entries(stateOptions.current).reduce((obj: ComponentStateUtils, [key, val]) => {
            if (key && typeof val === "number") {
                obj.is[key] = ():boolean => (stateByte.current & val) === val;
                obj.switch[key] = (): void => {
                    stateByte.current = ((stateByte.current & val) | val)
                    setState(key);
                }
                obj.toggle[key] = (): void => {
                    stateByte.current = stateByte.current ^ val
                    if (obj.is[key]) setState(key);
                    else setState(defaultState);
                };
                obj.on[key] = (): void => {
                    stateByte.current = stateByte.current | val
                    determinePriority(key);
                };
                obj.off[key] = (): void => {
                    stateByte.current = stateByte.current & val ? stateByte.current ^ val : stateByte.current
                    if (stateByte.current > 1) {
                        Object.entries(obj.is).forEach(([state, isState]) => {
                            if (isState()) {
                                setState(state);
                            }
                        })
                    } else setState(defaultState);
                };
            }
            return obj;
        }, initUtilObj())
    }
    
    return [state, componentStateUtils()];
}

export default useComponentState