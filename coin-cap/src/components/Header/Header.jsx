// @ts-nocheck
import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCurrency } from "store/currencySlice";

export const Header = () => {
  const dispatch = useDispatch();
  const cryptoCurrency = useSelector((state) => state.currency.currency);

  useEffect(() => {
    dispatch(getAllCurrency());
  }, [dispatch]);

  return (
    <div className="header">
      <p>Популярные криптовалюты</p>
      <div className="popular-crypto-container">
        <div>
          <ul>
            {cryptoCurrency.slice(0, 3).map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>{Math.round(item.priceUsd)}$ </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
