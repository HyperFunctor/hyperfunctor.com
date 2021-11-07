export const Price = ({ amount, currency }) => {
  if (['€','$'].includes(currency)) {
    return (
      <>{currency}{amount}</>
    );

  } else {
    return (
      <>{amount} {currency}</>
    );
  }
}
