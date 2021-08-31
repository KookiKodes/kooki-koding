export const notEmpty = (value: string): boolean => value.trim().length > 0;
export const validEmailName = (value: string): boolean => {
  const match = value.match(/^[\W\s]/gi);
  return match === null && value.match(/\S+@/gi) !== null;
};
export const validEmailNameLength = (value: string): boolean =>
  value.length <= 64;
export const hasOneAtSign = (value: string): boolean => {
  const match = value.match(/@/gi);
  return match ? match.length === 1 : false;
};
export const validDomainName = (value: string): boolean =>
  value.match(
    /@([a-z\d\-]+\.{1}[a-z\d\-]+$|[a-z\d\-]+\.{1}[a-z\d\-]+\.{1}[a-z]+$)/gi
  ) !== null;

export const validDomainNameLength = (value: string): boolean =>
  value.length <= 263;
export const validTopLevelDomain = (value: string): boolean =>
  value.match(/\.[a-z]+$/gi) !== null;

export const minMessageLength = (value: string): boolean =>
  value.trim().length >= 100;

export const minWordCount = (value: string): boolean =>
  value.trim().split(" ").length >= 20;
