import { handleEmail } from "@helper/emailApi";
import { NextApiResponse, NextApiRequest } from "next";
import { serialize } from "cookie";
import cuid from "cuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.cookies.limit) {
    res.setHeader(
      "Set-Cookie",
      serialize("limit", String(cuid()), {
        maxAge: 120,
        domain: "devinjackson.me",
        path: "/",
      })
    );
  }

  switch (true) {
    case req.cookies.limit !== undefined:
      res.status(406).json({
        message: "",
        error:
          "The time between each email is limited, please try again later.",
      });
      break;
    case req.method === "POST":
      await handleEmail(req.body)
        .then((message) => {
          res.status(200).json({ message, error: "" });
        })
        .catch((error) => {
          res.status(406).json({ message: "", error });
        });
      break;
    default:
      res.status(500).send("No route for provided get method.");
  }
}
