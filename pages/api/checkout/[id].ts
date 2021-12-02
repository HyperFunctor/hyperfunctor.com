import { NextApiHandler } from "next";
import Stripe from "stripe";

import { findOrder } from "../../../lib/sheet";

const APIKEY = process.env.INFAKT_APIKEY;

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

const FullPackage = {
  name: "React.js + Next.js from A to Z (The Full Package)",
  net_price: 999000,
  tax_symbol: "23",
};

const JustVideo = {
  name: "React.js + Next.js from A to Z (Just The Video)",
  unit_net_price: 699000,
  tax_symbol: "23",
};

// const InvoiceTemplate = ({
//   company_name,
//   street_address,
//   city,
//   postal_code,
//   nip,
//   bundle,
// }) => ({
//   invoice: {
//     payment_method: "other",
//     client_company_name: company_name,
//     client_street: street_address,
//     client_city: city,
//     client_post_code: postal_code,
//     client_tax_code: nip,
//     services: [
//       {
//         name: "React.js + Next.js from A to Z (Just The Video)",
//         unit_net_price: 699000,
//         tax_symbol: "23",
//       },
//     ],
//   },
// });

const handler: NextApiHandler = async (req, res) => {
  const id: string = req.query.id as string;
  const method = req.method;

  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect CheckoutSession ID.");
    }

    const session: Stripe.Checkout.Session =
      await stripe.checkout.sessions.retrieve(id, {
        expand: ["payment_intent"],
      });

    const payment_intent: Stripe.PaymentIntent =
      session.payment_intent as Stripe.PaymentIntent;

    const [order] = await findOrder(id);
    if (method !== "POST") {
      order.paid = "TRUE";
    } else {
      // const method = "POST";
      // const headers = {
      //   "X-inFakt-ApiKey": APIKEY,
      //   "Content-Type": "application/json",
      // };
      // const body = JSON.stringify(InvoiceTemplate(order));
      // const r = await fetch(`https://api.infakt.pl/v3/invoices.json`, {
      //   method,
      //   body,
      //   headers,
      // });
      // if (r.status !== 201) {
      //   const result = await r.json();
      //   console.error(result);
      // }
      // order.invoice = "TRUE";
    }
    await order.save();

    res.status(200).json({ status: payment_intent.status });
  } catch (error: any) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};

export default handler;
