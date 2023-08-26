import React from "react";

export const CurrencyItem = ({ currency }) => {
  return (
    <div>
      <li key={currency.id}>
        <span>{currency.symbol}</span>
        <span>{currency.name}</span>
        <span>{currency.vwap24Hr}</span>
        <span>{currency.changePercent24Hr}</span>
        <span>{currency.marketCapUsd}</span>
        <span>{currency.priceUsd}</span>
      </li>
    </div>
  );
};
