import { IPRecordArgs, ResponseObject } from "./emailInterfaces";
import { createResponseObjWithTime } from "./createResponseObj";

export async function setIPRecord({
  redis_client,
  ip,
  expiration,
  requestTime,
}: IPRecordArgs): Promise<ResponseObject> {
  try {
    // Converts request time to an iso string for storing in redis db;
    const curTime = requestTime.toISO();

    // Creates response object
    const response = createResponseObjWithTime({
      expiration: expiration / 60,
      requestTime,
    });

    // Creates new entry within redis db
    await redis_client.set(ip, curTime, {
      EX: expiration,
    });

    // Updates response object
    response.message = `Your message was sent successfully!`;

    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getIPRecord({
  redis_client,
  ip,
  expiration,
  requestTime,
}: IPRecordArgs): Promise<ResponseObject | boolean> {
  try {
    // Get's users ip from redis database
    const ipRecord = await redis_client?.get(ip);

    // If the record exists, then the person made a request previously
    if (ipRecord) {
      // Creates response object
      const response = createResponseObjWithTime({
        requestTime,
        expiration,
        lastTime: ipRecord,
      });

      // Updates json response object
      response.message = `I'm sorry, you cannot send another message for ${response.formatedDuration}.`;
      response.status = 429;
      return response;
    }
    return false;
  } catch (err) {
    throw new Error(err.message);
  }
}
