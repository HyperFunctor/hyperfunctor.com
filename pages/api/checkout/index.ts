import invariant from "invariant";
import { NextApiHandler } from "next";
import Stripe from "stripe";

import { errorToString } from "../../../lib/responseUtils";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

const PolandTaxRate = process.env.STRIPE_POLAND_TAXRATE;
const PolandBasicPrice = process.env.STRIPE_POLAND_BASIC_PRICE;
const PolandBasicDiscount = process.env.STRIPE_POLAND_BASIC_DISCOUNT;
const PolandFullPrice = process.env.STRIPE_POLAND_FULL_PRICE;
const PolandFullDiscount = process.env.STRIPE_POLAND_FULL_DISCOUNT;

invariant(PolandTaxRate, `Missing process.env.STRIPE_POLAND_TAXRATE`);
invariant(PolandBasicPrice, `Missing process.env.STRIPE_POLAND_BASIC_PRICE`);
invariant(
  PolandBasicDiscount,
  `Missing process.env.STRIPE_POLAND_BASIC_DISCOUNT`
);
invariant(PolandFullPrice, `Missing process.env.STRIPE_POLAND_FULL_PRICE`);
invariant(
  PolandFullDiscount,
  `Missing process.env.STRIPE_POLAND_FULL_DISCOUNT`
);

const BasicPrice = process.env.STRIPE_BASIC_PRICE;
const BasicDiscount = process.env.STRIPE_BASIC_DISCOUNT;
const FullPrice = process.env.STRIPE_FULL_PRICE;
const FullDiscount = process.env.STRIPE_FULL_DISCOUNT;

const handler: NextApiHandler = async (req, res) => {
  const {
    method,
    query: { type },
  } = req;

  const basicPrice = PolandBasicPrice;
  const basicDiscount = PolandBasicDiscount;
  const fullPrice = PolandFullPrice;
  const fullDiscount = PolandFullDiscount;
  const payment_method_types = ["card" as const, "p24" as const];
  const domain = "https://reactnextaz.pl";

  const coupon = type === "basic" ? basicDiscount : fullDiscount;
  const price = type === "basic" ? basicPrice : fullPrice;

  const tax_rates = [PolandTaxRate];

  if (method !== "POST") {
    res.setHeader("Allow", "POST").status(405).end("Method Not Allowed");
    return;
  }

  try {
    const params: Stripe.Checkout.SessionCreateParams = {
      discounts: [{ coupon }],
      line_items: [
        {
          tax_rates,
          price,
          quantity: 1,
        },
      ],
      payment_method_types,
      mode: "payment",
      success_url: `${domain}/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/cancel/`,
    };
    const checkoutSession = await stripe.checkout.sessions.create(params);

    res.status(200).json(checkoutSession);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: errorToString(error) });
  }
};

export default handler;
