// @ts-nocheck
import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteOneCurrency } from "store/walletSlice";

export const CurrencyItem = ({
  currency,
  index,
  handleModal,
  showDeleteButton,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDeleteOneCurrency = (id) => {
    dispatch(deleteOneCurrency(id));
  };

  return (
    <li className="currency-item" key={currency.id}>
      <span>{index + 1}</span>
      <span>{currency.symbol}</span>
      <span onClick={() => navigate("/detail")} className="currency-name">
        {currency.name}
      </span>
      <span>{Number(currency.vwap24Hr).toFixed(2)}</span>
      <span>{Number(currency.changePercent24Hr).toFixed(2)}</span>
      <span>{Number(currency.marketCapUsd).toFixed(2)}</span>
      <span>{Number(currency.priceUsd).toFixed(2)} $</span>
      <span>
        <div className="btn-block">
          <button
            className="add-crypto"
            onClick={() => handleModal(currency)}
          ></button>
          {showDeleteButton && (
            <button
              className="delete-button"
              onClick={() => handleDeleteOneCurrency(currency.id)}
            ></button>
          )}
        </div>
      </span>
    </li>
  );
};
