import { DateTime, DurationUnits, DurationUnit } from "luxon";

interface LastRequestReturn {
  remainingTimeInSeconds: number;
  remainingTimeInMinutes: number;
  formatedDuration: string;
}

// Finds difference between two times and returns time in minutes and seconds.
export default function getMinutesFromLastRequest(
  curTime: DateTime,
  lastRequestTime: string,
  exp: number
): LastRequestReturn {
  const time: DurationUnits = ["minutes", "seconds"];
  const lastRequest = DateTime.fromISO(lastRequestTime),
    dif = lastRequest.plus({ minutes: exp }).diff(curTime, time);

  if (Math.abs(dif.minutes) === 1) time[0] = "minute" as DurationUnit;
  if (Math.abs(dif.seconds) === 1) time[1] = "second" as DurationUnit;

  return {
    remainingTimeInSeconds: Math.floor(dif.minutes * 60 + dif.seconds),
    remainingTimeInMinutes: dif.minutes,
    formatedDuration: dif.toFormat(`m '${time[0]} and' ss '${time[1]}'`),
  };
}
