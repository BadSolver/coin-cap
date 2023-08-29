// @ts-nocheck
import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addToWallet, deleteAllCurrency } from "store/walletSlice";
import { useSelector } from "react-redux";

export const ModalWindow = ({ handleModal, currency }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const wallet = useSelector((state) => state.wallet.wallet);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleDeleteAllCurrency = () => {
    dispatch(deleteAllCurrency());
  };

  const handleAddToWallet = () => {
    const data = {
      id: currency.id,
      priceUsd: +value * currency.priceUsd,
      count: value,
      name: currency.name,
      vwap24Hr: currency.vwap24Hr,
      marketCapUsd: currency.marketCapUsd,
      symbol: currency.symbol,
      changePercent24Hr: currency.changePercent24Hr,
    };
    dispatch(addToWallet(data));
    setValue("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title">Add to Wallet</h1>
          <button className="modal-close-button" onClick={handleModal}>
            &#x2715;
          </button>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="currency-info">
            <p>Currency: {currency.name}</p>
            <p>Price: {currency.priceUsd} $</p>
          </div>
          <div className="input-container">
            <label className="input-label">Quantity:</label>
            <input
              type="number"
              className="modal-input"
              onChange={handleInputChange}
              value={value}
              placeholder="Enter quantity"
            />
          </div>
          <ul className="wallet-list">
            {wallet.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>{item.count}</span>
                <span>{item.priceUsd.toFixed(2)} $</span>
              </li>
            ))}
          </ul>
          <div className="modal-actions">
            <button className="modal-add-button" onClick={handleAddToWallet}>
              Add to Wallet
            </button>
            <button
              className="delete-all-button"
              onClick={handleDeleteAllCurrency}
            >
              Delete All
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
