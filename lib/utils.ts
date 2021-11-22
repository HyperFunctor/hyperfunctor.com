import { groupBy } from "ramda";

type PickBy<Obj, K extends string> = Obj extends { readonly __typename?: K }
  ? Obj
  : never;
type Filter<Collection extends readonly unknown[], K extends string> = {
  [Idx in keyof Collection]: PickBy<Collection[Idx], K>;
};

export const groupByType = <
  Collection extends readonly { [_ in F]: string }[],
  F extends keyof Collection[number]
>(
  collection: Collection,
  field: F
) => {
  return groupBy((a) => a[field] ?? "", collection) as unknown as {
    [Key in Collection[number][F]]: Filter<Collection, Key>;
  };
};

export const formatDate = (d: string | Date) => {
  const date = typeof d === "string" ? new Date(d) : d;

  const format = new Intl.DateTimeFormat("pl", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return format.format(date);
};
