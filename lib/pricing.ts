export const standardPrice = 4065.04;
export const VAT = 23;
export const releaseDate = new Date("2023-03-06T12:00:00+02:00");

export const getLastDate = () => pricings[pricings.length - 1].to;
export const getFirstDate = () => pricings[0].from;

export const getGrossPrice = (price: number, vat = VAT) => {
  return (price * (100 + vat)) / 100;
};

export const formatMoney = (price: number) =>
  new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(
    price
  );

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("pl-PL", { dateStyle: "long" })
    .format(date)
    .replace(/(\d{1,2}) /, "$1 ")
    .replace(/ (\d{4})/, " $1");

export const pricings = [
  {
    buy: "Kupuję i uczę się od najlepszych",
    name: "Promocja ograniczona czasowo",
    price: 1540.65,
    cartUrl:
      "https://sklep.hyperfunctor.com/cart/add_product/praktyczny-kurs-nowoczesny-frontend-next-js-react-graphql-i-typescript",
    from: new Date("2023-02-22T00:00:00+02:00"),
    to: new Date("2023-03-05T23:59:59+02:00"),
  },
  {
    buy: "Kupuję i uczę się od najlepszych",
    name: "Ostatnia szansa",
    price: 1540.65,
    cartUrl:
      "https://sklep.hyperfunctor.com/cart/add_product/praktyczny-kurs-nowoczesny-frontend-next-js-react-graphql-i-typescript",
    from: new Date("2023-03-06T00:00:00+02:00"),
    to: new Date("2023-03-12T23:59:59+02:00"),
  },
];

export const getCurrentPricing = () => {
  const now = new Date();

  const currentPricing = pricings.find((el) => now > el.from && now <= el.to);
  // const currentPricing = pricings[0] as
  //   | {
  //       buy: string;
  //       name: string;
  //       price: number;
  //       cartUrl: string;
  //       from: Date;
  //       to: Date;
  //     }
  //   | undefined;

  return {
    currentPricing,
    state: currentPricing
      ? "AVAILABLE"
      : now < pricings[0].from
      ? "PRESALE"
      : "OUTOFSTOCK",
  } as const;
};
