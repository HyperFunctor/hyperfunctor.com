import { NextApiHandler } from "next";
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

const payment_method_types = [
  "card",
  "p24",
] as Stripe.Checkout.SessionCreateParams.PaymentMethodType[];
const domain = "https://zaisteprogramuj.pl";

const price = process.env.STRIPE_PRICE;
const tax_rates = [process.env.STRIPE_TAXRATE] as string[];

const handler: NextApiHandler = async (req, res) => {
  const {
    method,
    query: { bundle },
  } = req;

  const { data } = await stripe.promotionCodes.list({ code: bundle as string });
  const coupon = data.length > 0 ? data[0].coupon.id : "";
  const discounts = coupon ? [{ coupon }] : [];

  const payload = {
    discounts,
    line_items: [
      {
        tax_rates,
        price,
        quantity: 1,
      },
    ],
  };

  if (method === "POST") {
    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        ...payload,
        payment_method_types,
        locale: "pl",
        mode: "payment",
        success_url: `${domain}/order/success/?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${domain}/cancel/`,
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
