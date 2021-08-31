interface IotaReturn {
  [key: string]: number | string;
}

interface IotaUtilFunctions {
  [key: string]: (stateByte: number) => boolean | number;
}

export const upper = (str: string): string => str.toUpperCase();
export const lower = (str: string): string => str.toLowerCase();

export const firstCharCapital = (str: string): string =>
  upper(str.substr(0, 1)) + lower(str.substr(1));

export const iotaUtilFuncs = (iotaReturn: IotaReturn): IotaUtilFunctions => {
  return Object.entries(iotaReturn).reduce((utilFuncs, [key, val]) => {
    if (typeof parseInt(key) !== "number" && typeof val === "number") {
      const funcName = firstCharCapital(key);
      utilFuncs[`has{funcName}`] = (stateByte: number): boolean =>
        (stateByte & val) === val;
      utilFuncs[`toggle${funcName}`] = (stateByte: number): number =>
        stateByte ^ val;
      utilFuncs[`on{funcName}`] = (stateByte: number): number =>
        stateByte | val;
      utilFuncs[`off{funcName}`] = (stateByte: number): number =>
        utilFuncs[`has${funcName}`](stateByte)
          ? utilFuncs[`toggle${funcName}`](stateByte)
          : stateByte;
    }
    return utilFuncs;
  }, {});
};

const iota = (keys: string[]): IotaReturn => {
  return keys.reduce((obj, key, index) => {
    const byte = 1 << index;
    obj[key] = byte;
    obj[byte] = key;
    return obj;
  }, {});
};

export const customEnum = (...args: string[]): IotaReturn => {
  return args.reduce((obj: IotaReturn, key, index) => {
    obj[key] = index;
    obj[`${index}`] = key;
    return obj;
  }, {});
};

export default iota;
