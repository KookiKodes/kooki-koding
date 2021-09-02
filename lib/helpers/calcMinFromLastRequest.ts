import { DateTime, DurationUnits, DurationUnit } from "luxon";

// Finds difference between two times and returns time in minutes and seconds.
export default function getMinutesFromLastRequest(
  curTime: DateTime,
  lastRequestTime: string,
  exp: number
): string {
  const time: DurationUnits = ["minutes", "seconds"];
  const lastRequest = DateTime.fromISO(lastRequestTime),
    dif = lastRequest.plus({ minutes: exp }).diff(curTime, time);

  if (Math.abs(dif.minutes) === 1) time[0] = "minute" as DurationUnit;
  if (Math.abs(dif.seconds) === 1) time[1] = "second" as DurationUnit;

  return dif.toFormat(`m '${time[0]} and' ss '${time[1]}'`);
}
