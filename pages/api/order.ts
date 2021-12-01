import { NextApiHandler } from "next";

import { addOrder } from "../../lib/sheet";

const handler: NextApiHandler = async (req, res) => {
  const { method, body } = req;

  if (method === "POST") {
    try {
      await addOrder(body as Record<string, string>);
      res.status(200).json({ status: "OK" });
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
