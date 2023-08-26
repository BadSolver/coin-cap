import React from "react";

export const CurrencyItem = ({ currency }) => {
  return (
    <li key={currency.id}>
      <span>{currency.symbol}</span>
      <span>{currency.name}</span>
      <span>{Number(currency.vwap24Hr).toFixed(2)}</span>
      <span>{Number(currency.changePercent24Hr).toFixed(2)}</span>
      <span>{Number(currency.marketCapUsd).toFixed(2)}</span>
      <span>{Number(currency.priceUsd).toFixed(2)}</span>
    </li>
  );
};
