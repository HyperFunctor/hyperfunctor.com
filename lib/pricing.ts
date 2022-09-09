export const standardPrice = 3000;
export const VAT = 23;
export const releaseDate = new Date("2022-10-03T12:00:00+02:00");

export const getLastDate = () => pricings[pricings.length - 1].to;

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
    price: 1500,
    cartUrl:
      "https://sklep.hyperfunctor.com/cart/add_product/praktyczny-kurs-nowoczesny-frontend-next-js-react-graphql-i-typescript",
    from: new Date("2022-09-09T00:00:00+02:00"),
    to: new Date("2022-09-12T23:59:59+02:00"),
  },
  {
    buy: "Kupuję i uczę się od najlepszych",
    name: "Promocja ograniczona czasowo",
    price: 1500,
    cartUrl:
      "https://sklep.hyperfunctor.com/cart/add_product/praktyczny-kurs-nowoczesny-frontend-next-js-react-graphql-i-typescript",
    from: new Date("2022-09-12T00:00:00+02:00"),
    to: new Date("2022-10-02T23:59:59+02:00"),
  },
  {
    buy: "Kupuję i uczę się od najlepszych",
    name: "Ostatnia szansa",
    price: 1500,
    cartUrl:
      "https://sklep.hyperfunctor.com/cart/add_product/praktyczny-kurs-nowoczesny-frontend-next-js-react-graphql-i-typescript",
    from: new Date("2022-10-03T00:00:00+02:00"),
    to: new Date("2022-10-07T23:59:59+02:00"),
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
