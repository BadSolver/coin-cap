// @ts-nocheck
import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addToWallet } from "store/walletSlice";
import { useNavigate } from "react-router-dom";

export const CurrencyItem = ({ currency, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSum = (cost) => {
    const price = cost.toFixed(2);

    dispatch(addToWallet(price));
  };

  return (
    <li className="currency-item">
      <span>{index + 1}</span>
      <span>{currency.symbol}</span>
      <span onClick={() => navigate("/detail")} className="currency-name">{currency.name}</span>
      <span>{Number(currency.vwap24Hr).toFixed(2)}</span>
      <span>{Number(currency.changePercent24Hr).toFixed(2)}</span>
      <span>{Number(currency.marketCapUsd).toFixed(2)}</span>
      <span>{Number(currency.priceUsd).toFixed(2)} $</span>
      <span>
        <button
          className="add-crypto"
          onClick={() => handleSum(+currency.priceUsd)}
        ></button>
      </span>
    </li>
  );
};
