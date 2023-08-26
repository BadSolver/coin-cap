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
      <h1 className="header-title">Популярные криптовалюты</h1>
      <div className="popular-crypto-wrapper">
        <div className="popular-crypto-container">
          <ul className="top-crypto-list">
            {cryptoCurrency.slice(0, 3).map((item) => {
              return (
                <li key={item.id} className="top-crypto-item">
                  <span className="top-crypto-name">{item.name}</span>
                  <span className="top-crypto-price">
                    {Math.round(item.priceUsd)}${" "}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="wallet-crypto-container">
            <button className="wallet-crypto"></button>
            <div>
              <p>Итого:</p>
              <p>Сумма</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
