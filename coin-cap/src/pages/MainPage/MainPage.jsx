// @ts-nocheck
import { CurrencyList } from "components";
import React from "react";
import { useSelector } from "react-redux";

export const MainPage = () => {
  const currency = useSelector((state) => state.currency.currency);

  return (
    <div>
      <CurrencyList data={currency} showDeleteButton={false}/>
    </div>
  );
};
