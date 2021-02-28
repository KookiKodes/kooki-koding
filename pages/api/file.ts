import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(req, res) {
  console.log("hello world");
  res.send("Testing");
}
