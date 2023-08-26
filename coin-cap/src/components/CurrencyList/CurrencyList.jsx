// @ts-nocheck
import { CurrencyItem } from "components/CurrencyItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCurrency } from "store/currencySlice";

export const CurrencyList = () => {
  const dispatch = useDispatch();
  const cryptoCurrency = useSelector((state) => state.currency.currency);
  console.log(cryptoCurrency);

  useEffect(() => {
    dispatch(getAllCurrency());
  }, [dispatch]);

  return (
    <div>
      <ol>
        {cryptoCurrency.map((currency) => {
          return <CurrencyItem currency={currency} key={currency.id} />;
        })}
      </ol>
    </div>
  );
};
