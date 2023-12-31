// @ts-nocheck
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCurrency } from "store/currencySlice";
import walletIcon from "../../assets/wallet-icon.png";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { formatNumber } from "./../../helpers/formatNumber";

export const Header = () => {
  const dispatch = useDispatch();
  const cryptoCurrency = useSelector((state) => state.currency.currency);
  const wallet = useSelector((state) => state.wallet.wallet);

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
                  {formatNumber(item.priceUsd, 2)} $
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
            <p className="wallet-info-text ">
              {wallet.length === 0
                ? "0.00"
                : +wallet
                    .reduce((acc, item) => {
                      return acc + +item.priceUsd;
                    }, 0)
                    .toFixed(2)}
              $
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
