import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const method = "POST";

export const checkout = async (type: string, data: object) => {
  const response = await fetch(`/api/checkout/?type=${type}`, { method });
  const { id: sessionId } = await response.json();

  const headers = { "Content-Type": "application/json" };

  const date = new Date().toISOString();

  const body = JSON.stringify({
    id: sessionId,
    paid: false,
    bundle: type.toUpperCase(),
    date,
    ...data,
  });
  await fetch(`/api/order/`, { method, body, headers });

  const stripe = await stripePromise;
  if (!stripe) {
    throw new Error("Something wrong with Stripe");
  }

  const result = await stripe.redirectToCheckout({ sessionId });

  if (result.error) {
    console.log(result.error);
  }
};
