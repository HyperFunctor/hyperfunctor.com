import { NextApiHandler } from "next";

import { errorToString } from "../../../lib/responseUtils";
import { addOrder } from "../../../lib/sheet";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      await addOrder(req.body);
      res.status(200).json({ status: "OK" });
    } catch (error) {
      res.status(500).json({ message: errorToString(error) });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
