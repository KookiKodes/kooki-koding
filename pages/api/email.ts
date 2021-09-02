// import { handleEmail } from "@helper/emailApi";
// import { serialize } from "cookie";
// import cuid from "cuid";
import { NextApiResponse, NextApiRequest } from "next";
import { DateTime, DurationUnit, DurationUnits } from "luxon";
import redis from "redis";
const { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD, NODE_ENV } = process.env;

const redis_client = redis.createClient(
  parseInt(REDIS_PORT as string),
  REDIS_HOST
);
redis_client.auth(REDIS_PASSWORD as string);

redis_client.on("connect", function(error) {
  if (error) return console.log(error);
  console.log("Redis Database Connected");
});

const EXPIRE_IN_MINUTES = 5;
const EXPIRE_IN_SECONDS = EXPIRE_IN_MINUTES * 60;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // If request is not a POST request, we will redirect user to error 404 page
  if (req.method !== "POST") return redirect(res);
  //
  // Checks to see if the server is being run locally
  if (NODE_ENV !== "production")
    return res.send(
      "You're on local host, disable this if statement to test locally"
    );

  // Get's ip from vercel's header -> This only works with vercel.
  const ip =
    (req.headers["x-real-ip"] as string) || (req.headers["host"] as string);

  // If no ip is found from header, we will redirect to error 404 page
  // if (!ip) return redirect(res);

  // Get's users ip from redis database
  redis_client.get(ip, function(err, record) {
    // If there is an error with redis we will send an error response back
    if (err) return res.status(503).send(err);

    // Creates a Date object for use for later
    const requestTime = DateTime.now();

    // If the record exists, then the person made a request previously
    if (record) {
      // Get's a formatted string in minutes and seconds
      const remainingTime = getMinutesFromLastRequest(requestTime, record);

      // Creates json response object
      const response = {
        remainingTime,
        message: `I'm sorry, you cannot send another message for another ${remainingTime}.`,
      };

      // Responds with too many requests status code
      return res.status(429).json(response);
    }

    // If all above passed, then we create a new message with an expiration time in our redis database.
    redis_client.set(ip, requestTime.toISO(), "EX", EXPIRE_IN_SECONDS);
    return res.send("success");
    /*
        handle the rest of the request here. IE sending an email :)
      */
  });

  // if (!req.cookies.limit) {
  //   res.setHeader(
  //     "Set-Cookie",
  //     serialize("limit", String(cuid()), {
  //       maxAge: 120,
  //       domain: "devinjackson.me",
  //       path: "/",
  //     })
  //   );
  // }

  // switch (true) {
  //   case req.cookies.limit !== undefined:
  //     res.status(406).json({
  //       message: "",
  //       error:
  //         "The time between each email is limited, please try again later.",
  //     });
  //     break;
  //   case req.method === "POST":
  //     await handleEmail(req.body)
  //       .then((message) => {
  //         res.status(200).json({ message, error: "" });
  //       })
  //       .catch((error) => {
  //         res.status(406).json({ message: "", error });
  //       });
  //     break;
  //   default:
  //     res.status(500).send("No route for provided get method.");
  // }
}

// Finds difference between two times and returns time in minutes and seconds.
function getMinutesFromLastRequest(
  curTime: DateTime,
  lastRequestTime: string
): string {
  const time: DurationUnits = ["minutes", "seconds"];
  const lastRequest = DateTime.fromISO(lastRequestTime),
    dif = lastRequest.plus({ minutes: EXPIRE_IN_MINUTES }).diff(curTime, time);

  if (Math.abs(dif.minutes) === 1) time[0] = "minute" as DurationUnit;
  if (Math.abs(dif.seconds) === 1) time[1] = "second" as DurationUnit;

  return dif.toFormat(`m '${time[0]} and' ss '${time[1]}'`);
}

// Shorthand to redirect user to 404 page.
function redirect(res: NextApiResponse) {
  return res.status(404).redirect("/404");
}
