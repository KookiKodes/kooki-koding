import { ResponseObject } from "./emailInterfaces";
import { DateTime } from "luxon";
import calcMinFromLastRequest from "./calcMinFromLastRequest";

interface CreateResponseObj {
  remainingTimeInSeconds?: number;
  remainingTimeInMinutes?: number;
  remainingTotalRequests?: number;
  message?: string;
  iosTime?: string;
  formatedDuration?: string;
  status?: number;
}

interface CreateResponseWithTime {
  partialObj?: CreateResponseObj;
  expiration: number;
  requestTime: DateTime;
  lastTime?: string;
}

export default function createResponseObj(
  partialObj: CreateResponseObj = {}
): ResponseObject {
  return {
    remainingTimeInSeconds: 0,
    remainingTimeInMinutes: 0,
    remainingTotalRequests: Infinity,
    message: "",
    isoTime: "",
    formatedDuration: "",
    status: 200,
    ...partialObj,
  };
}

export function createResponseObjWithTime({
  partialObj = {},
  expiration,
  requestTime,
  lastTime,
}: CreateResponseWithTime): ResponseObject {
  if (!lastTime) lastTime = requestTime.toISO();

  const {
    remainingTimeInMinutes,
    remainingTimeInSeconds,
    formatedDuration,
  } = calcMinFromLastRequest(requestTime, lastTime, expiration);

  return {
    remainingTimeInSeconds,
    remainingTimeInMinutes,
    formatedDuration,
    remainingTotalRequests: Infinity,
    message: "",
    isoTime: requestTime.toISO(),
    status: 200,
    ...partialObj,
  };
}
