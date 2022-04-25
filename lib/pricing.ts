export const standardPrice = 3000;
export const VAT = 23;
export const releaseDate = new Date("2022-06-01T12:00:00+01:00");

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
    .replace(/(\d{1,2}) /, "$1 ");

export const pricings = [
  {
    buy: "Kupuję i uczę się od najlepszych",
    name: "Majóweczka",
    price: 1200,
    cartUrl: "/@TODO",
    from: new Date("2022-05-01T00:00:00+01:00"),
    to: new Date("2022-05-08T23:59:59+01:00"),
  },
  {
    buy: "Kupuję i uczę się od najlepszych",
    name: "Promocja ograniczona czasowo",
    price: 1500,
    cartUrl: "/@TODO",
    from: new Date("2022-05-09T00:00:00+01:00"),
    to: new Date("2022-05-15T23:59:59+01:00"),
  },
  {
    buy: "Kupuję i uczę się od najlepszych",
    name: "Promocja ograniczona czasowo",
    price: 1800,
    cartUrl: "/@TODO",
    from: new Date("2022-05-16T00:00:00+01:00"),
    to: new Date("2022-05-22T23:59:59+01:00"),
  },
  {
    buy: "Kupuję i uczę się od najlepszych",
    name: "Promocja ograniczona czasowo",
    price: 2100,
    cartUrl: "/@TODO",
    from: new Date("2022-05-23T00:00:00+01:00"),
    to: new Date("2022-05-29T23:59:59+01:00"),
  },
  {
    buy: "Kupuję i uczę się od najlepszych",
    name: "Ostatnia szansa",
    price: 2400,
    cartUrl: "/@TODO",
    from: new Date("2022-05-30T00:00:00+01:00"),
    to: new Date("2022-05-31T23:59:59+01:00"),
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
