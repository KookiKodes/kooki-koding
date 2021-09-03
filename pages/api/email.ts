//* packages
import { NextApiResponse, NextApiRequest } from "next";
import { DateTime } from "luxon";
import nodemailer from "nodemailer";

//* helpers
import getRedisHandler from "@helper/emailApi/getRedisHandler";
import { getIPRecord, setIPRecord } from "@helper/emailApi/redisHelpers";
import validateFormData from "@helper/emailApi/validateFormData";
import { createResponseObjWithTime } from "@helper/emailApi/createResponseObj";
import buildEmailMessage from "@helper/emailApi/buildEmailMessage";

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

// email api setup
//
// Redis setup
const redis = new Proxy(
  { redis_client: {} },
  getRedisHandler(REDIS_EMAIL_DB_URL as string)
);

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
  const redis_client = await redis.redis_client;
  // If request is not a POST request, we will redirect user to error 404 page
  if (req.method !== "POST") return redirect(res);
  //
  // Get's ip from vercel's header -> This only works with vercel.
  const ip =
    (req.headers["x-real-ip"] as string) || (req.headers["host"] as string);

  // If no ip/host is found from header, we will redirect to error 404 page
  if (!ip) return redirect(res);

  // Creates a Date object for use for later
  const requestTime = DateTime.now();

  let response = await getIPRecord({
    redis_client,
    ip,
    requestTime,
    expiration: EXPIRE_IN_MINUTES,
  });

  if (response) return res.json(response);

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
    response.status = 406;
    return res.json(response);
  }

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
    response.status = 503;
    res.json(response);
  }

  response = await setIPRecord({
    redis_client,
    ip,
    requestTime,
    expiration: EXPIRE_IN_SECONDS,
  });

  return res.status(200).json(response);
}

// Shorthand to redirect user to 404 page.
function redirect(res: NextApiResponse) {
  return res.status(404).redirect("/404");
}
