import { NextApiHandler } from "next";
import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!,
  { apiVersion: "2020-08-27" },
);

// Malarkey

const isWorldwide = process.env.GIT_BRANCH === 'english'

const PolandTaxRate = process.env.STRIPE_POLAND_TAXRATE;
const PolandBasicPrice = process.env.STRIPE_POLAND_BASIC_PRICE;
const PolandBasicDiscount = process.env.STRIPE_POLAND_BASIC_DISCOUNT;
const PolandFullPrice = process.env.STRIPE_POLAND_FULL_PRICE;
const PolandFullDiscount = process.env.STRIPE_POLAND_FULL_DISCOUNT;

const BasicPrice = process.env.STRIPE_BASIC_PRICE;
const BasicDiscount = process.env.STRIPE_BASIC_DISCOUNT;
const FullPrice = process.env.STRIPE_FULL_PRICE;
const FullDiscount = process.env.STRIPE_FULL_DISCOUNT;

const handler: NextApiHandler = async (req, res) => {
  const { method, query: { type } } = req;

  let basicPrice, basicDiscount, fullPrice, fullDiscount, domain, success_url, cancel_url;

  let payment_method_types = [];

  if (isWorldwide) {
    basicPrice = BasicPrice;
    basicDiscount = BasicDiscount;
    fullPrice = FullPrice;
    fullDiscount = FullDiscount;
    payment_method_types = ['card'];
    domain = 'https://reactnextaz.com';
  } else {
    basicPrice = PolandBasicPrice;
    basicDiscount = PolandBasicDiscount;
    fullPrice = PolandFullPrice;
    fullDiscount = PolandFullDiscount;
    payment_method_types = ['card', 'p24'];
    domain = 'https://reactnextaz.pl';
  }

  const coupon = type === "basic" ? basicDiscount : fullDiscount;
  const price = type === "basic" ? basicPrice : fullPrice;

  const tax_rates = [PolandTaxRate];

  const payload = {
    discounts: [{ coupon }],
    line_items: [{
      tax_rates,
      price,
      quantity: 1,
    }],
  };

  console.log(JSON.stringify(payload));

  if (method === "POST") {
    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        ...payload,
        payment_method_types, 
        mode: "payment",
        success_url: `${domain}/success/?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${domain}/cancel/`,
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;