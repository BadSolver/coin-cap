// @ts-nocheck
import { CurrencyItem } from "components/CurrencyItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCurrency } from "store/currencySlice";
import "./style.css";

export const CurrencyList = () => {
  const dispatch = useDispatch();
  const cryptoCurrency = useSelector((state) => state.currency.currency);
  console.log(cryptoCurrency);

  useEffect(() => {
    dispatch(getAllCurrency());
  }, [dispatch]);

  return (
    <div className="currency-list-wrapper">
      <div className="header-list">
        <p>№</p>
        <p>SYMB</p>
        <p>Name</p>
        <p>VWAP</p>
        <p>Change</p>
        <p>Market Cap</p>
        <p>Price</p>
      </div>
      <ol className="currency-list">
        {cryptoCurrency.map((currency, index) => {
          return (
            <CurrencyItem currency={currency} key={currency.id} index={index} />
          );
        })}
      </ol>
    </div>
  );
};
