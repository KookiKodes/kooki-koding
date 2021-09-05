//* packages
import { NextApiResponse, NextApiRequest } from "next";
import { DateTime } from "luxon";
import nodemailer from "nodemailer";
import RedisClient from "redis/dist/lib/client";

//* helpers
import { instantiateRedis } from "@helper/emailApi/getRedisHandler";
import { getIPRecord, setIPRecord } from "@helper/emailApi/redisHelpers";
import validateFormData from "@helper/emailApi/validateFormData";
import { createResponseObjWithTime } from "@helper/emailApi/createResponseObj";
import buildEmailMessage from "@helper/emailApi/buildEmailMessage";
import { ResponseObject } from "@helper/emailApi/emailInterfaces";

//
//
// constants
const EXPIRE_IN_MINUTES = 5;
const EXPIRE_IN_SECONDS = EXPIRE_IN_MINUTES * 60;

const {
  REDIS_EMAIL_DB_URL,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_PASSWORD,
  EMAIL_USER,
} = process.env;

// Nodemailer setup
const transport = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: parseInt(EMAIL_PORT as string),
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Creates a Date object for use for later
  const requestTime = DateTime.now();

  // Get's ip from vercel's header -> This only works with vercel.
  const ip =
    (req.headers["x-real-ip"] as string) || (req.headers["host"] as string);

  // If no ip/host is found from header, we will redirect to error 404 page
  if (!ip) return redirect(res);

  if (req.method === "GET") {
    const redis_client = await instantiateRedis(REDIS_EMAIL_DB_URL as string);
    let response = await getIPRecord({
      redis_client,
      ip,
      requestTime,
      expiration: EXPIRE_IN_MINUTES,
    });
    if (typeof response !== "boolean") {
      response.disabled = true;
      return res.json(
        await prepareResponse({ redis_client, status: 429, response })
      );
    }
    response = createResponseObjWithTime({
      requestTime,
      expiration: EXPIRE_IN_MINUTES,
    });
    return res.json(await prepareResponse({ redis_client, response }));
  }
  //
  // If request is not a POST request, we will redirect user to error 404 page
  if (req.method !== "POST") return redirect(res);

  const allValid = validateFormData({
    data: req.body,
    needsNames: ["name", "email", "message"],
  });
  if (!allValid.valid) {
    const response = createResponseObjWithTime({
      requestTime,
      expiration: EXPIRE_IN_MINUTES,
    });
    response.message = allValid.message;
    return res.json(await prepareResponse({ status: 406, response }));
  }
  const redis_client = await instantiateRedis(REDIS_EMAIL_DB_URL as string);
  let response = await getIPRecord({
    redis_client,
    ip,
    requestTime,
    expiration: EXPIRE_IN_MINUTES,
  });

  if (typeof response !== "boolean")
    return res.json(
      await prepareResponse({ redis_client, status: 429, response })
    );

  try {
    const { name, email, message } = req.body;
    await transport.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: `Message from ${name}`,
      text: buildEmailMessage({ email, message }),
      cc: req.body.email,
    });
  } catch (error) {
    console.error(error);
    const response = createResponseObjWithTime({
      expiration: EXPIRE_IN_MINUTES,
      requestTime,
    });
    response.message = error;
    return res.json(
      await prepareResponse({ redis_client, status: 503, response })
    );
  }

  response = await setIPRecord({
    redis_client,
    ip,
    requestTime,
    expiration: EXPIRE_IN_SECONDS,
  });

  return res.json(await prepareResponse({ redis_client, response }));
}

// Shorthand to redirect user to 404 page.
function redirect(res: NextApiResponse) {
  return res.status(404).redirect("/404");
}

interface PrepareResponse {
  redis_client?: RedisClient;
  status?: number;
  response: ResponseObject;
}

async function prepareResponse({
  redis_client,
  status = 200,
  response,
}: PrepareResponse) {
  response.status = status;
  if (redis_client) {
    await redis_client.disconnect();
    console.log("Redis Client Has Been Disconnected");
  }
  return response;
}
