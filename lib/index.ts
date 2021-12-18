const method = "POST";

export const formatAsMoney = (amount: number = 0, currency = "PLN") =>
  new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
    style: "currency",
    currency,
  }).format(amount);
