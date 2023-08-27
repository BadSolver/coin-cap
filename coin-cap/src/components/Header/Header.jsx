// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCurrency } from "store/currencySlice";
import "./style.css";
import walletIcon from "../../assets/wallet-icon.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const cryptoCurrency = useSelector((state) => state.currency.currency);
  const walletSum = useSelector((state) => state.wallet.wallet);
  console.log(walletSum);

  const navigate = useNavigate();

  const handleWallet = () => {
    navigate("/wallet");
  };

  useEffect(() => {
    dispatch(getAllCurrency());
  }, [dispatch]);

  return (
    <div className="header">
      <div className="left-section">
        <h1 className="header-title">Популярные криптовалюты</h1>
        <div className="top-crypto-list">
          {cryptoCurrency.slice(0, 3).map((item) => {
            return (
              <div key={item.id} className="top-crypto-item">
                <span className="top-crypto-name">{item.name}</span>
                <span className="top-crypto-price">
                  {Number(item.priceUsd).toFixed(2)} $
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-section">
        <div className="wallet-info">
          <button
            onClick={handleWallet}
            className="wallet-crypto"
            style={{ backgroundImage: `url(${walletIcon})` }}
          ></button>
          <div className="wallet-summary">
            <p className="wallet-info-text ">{walletSum.toFixed(2)} $</p>
          </div>
        </div>
      </div>
    </div>
  );
};
