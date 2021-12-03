import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const method = "POST";

export const checkout = async (bundle: string, data: object) => {
  const response = await fetch(`/api/checkout/?bundle=${bundle}`, { method });
  const { id: sessionId } = await response.json();

  const headers = { "Content-Type": "application/json" };

  const date = new Date().toISOString();

  const body = JSON.stringify({
    id: sessionId,
    paid: false,
    bundle: bundle.toUpperCase(),
    date,
    ...data,
  });
  await fetch(`/api/order/`, { method, body, headers });

  const stripe = await stripePromise;
  const result = await stripe?.redirectToCheckout({ sessionId });

  if (result?.error) {
    console.log(result.error);
  }
};

export const formatAsMoney = (amount: number = 0, currency = "PLN") =>
  new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
    style: "currency",
    currency,
  }).format(amount);
