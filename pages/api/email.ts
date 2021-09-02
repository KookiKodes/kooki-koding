// import { handleEmail } from "@helper/emailApi";
// import { serialize } from "cookie";
// import cuid from "cuid";

//* packages
import { NextApiResponse, NextApiRequest } from "next";
import { DateTime } from "luxon";

//* helpers
import calcMinFromLastRequest from "@helper/calcMinFromLastRequest";
import getRedisHandler from "@helper/getProxyHandler";

//
//
// email api setup
const redis = new Proxy(
  { redis_client: {} },
  getRedisHandler(process.env.REDIS_EMAIL_DB_URL as string)
);
// constants
const EXPIRE_IN_MINUTES = 5;
const EXPIRE_IN_SECONDS = EXPIRE_IN_MINUTES * 60;

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

  // Get's users ip from redis database
  try {
    const ipRecord = await redis_client?.get(ip);

    // Creates response object
    let response = { remainingTime: "", message: "" };

    // If the record exists, then the person made a request previously
    if (ipRecord) {
      // Get's a formatted string in minutes and seconds
      const remainingTime = calcMinFromLastRequest(
        requestTime,
        ipRecord,
        EXPIRE_IN_MINUTES
      );

      // Updates json response object
      response.remainingTime = remainingTime;
      response.message = `I'm sorry, you cannot send another message for another ${remainingTime}.`;

      // Responds with too many requests status code
      return res.status(429).json(response);
    }

    // If all above passed, then we create a new message with an expiration time in our redis database.
    await redis_client.set(ip, requestTime.toISO(), {
      EX: EXPIRE_IN_SECONDS,
    });

    // Updates json response object
    response.remainingTime = calcMinFromLastRequest(
      requestTime,
      requestTime.toISO(),
      EXPIRE_IN_MINUTES
    );
    response.message = `Your message was sent successfully!`;

    // Sends success response - will update in the future to include actually sending the email.
    return res.status(200).json(response);
  } catch (error) {
    // If there is an error with redis we will send an error response back
    console.error(error);
    return res.status(503).send(error);
  }

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

// Shorthand to redirect user to 404 page.
function redirect(res: NextApiResponse) {
  return res.status(404).redirect("/404");
}
