import { NextApiHandler } from "next";

import { addOrder } from "../../../lib/sheet";

const handler: NextApiHandler = async (req, res) => {
  const { method, body } = req;

  if (method === "POST") {
    try {
      await addOrder(body);
      res.status(200).json({ status: "OK" });
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
